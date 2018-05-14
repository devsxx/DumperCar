var module = module || {};
var sdk, conf;
if (typeof document !== "undefined" && typeof wx === "undefined") {
  module = window;
  !module.weedon && Object.defineProperties(module, { weedon: { value: {} } })
}
else {
  module = module || {};
  module.exports = module.exports || {};
  sdk = require("./sdk.min.js");
  conf = require("./sdk-conf.js");
}
typeof GameGlobal !== "undefined" && (GameGlobal.weedon = module.exports);
(function (module, exports) {
  function clone(originalObject) {
    if (!originalObject || typeof originalObject != "object") {
      return originalObject;
    }
    var newObject = originalObject.constructor == Array ? [] : {};
    for (var index in originalObject) {
      newObject[index] = clone(originalObject[index]);
    }
    return newObject;
  }

  var _overrides = {};

  function extend(originalObject, targetObject) {
    if (!targetObject || typeof originalObject != "object") {
      return targetObject;
    }
    for (var type in targetObject) {
      if (type == "$removes") {
        targetObject.$removes.forEach(function (key) {
          delete originalObject[key];
        });
        delete targetObject.$removes;
      }
      else if (!originalObject[type] || !targetObject[type] || targetObject[type].$override || _overrides[type]) {
        originalObject[type] = targetObject[type];
      }
      else {
        if (originalObject[type] && originalObject[type].$validate != targetObject[type].$validate) {
          originalObject[type] = targetObject[type];
        }
        else {
          originalObject[type] = extend(originalObject[type], targetObject[type]);
        }
      }
    }
    return originalObject;
  }

  var _host, _port, _protocol, _connection;
  var _fullAddr;
  var _sid;
  var _callbacks = {
    reconnect: function () {
      console.log("reconnect ok");
    }
  };
  var _pushCallbacks = {};

  var _timeInterval = 0;
  var _data = {};
  var _cache = {};
  var _update = {};
  var _hasUpdate = false;
  var _heartbeat;
  var _hbFails = 0;
  var _connLostCallback;
  var _heartbeatCallback;
  var _configed = false;
  var _dispatcher = {};

  var _lastMessage = Date.now();

  var _wait;

  function connectServer(callback) {
    var reconnect = false;
    _connection = new WebSocket(_fullAddr ? _fullAddr : _protocol + "://" + _host + ":" + _port);
    _connection.onopen = function () {
      callback ? callback() : _connection.send(JSON.stringify({ cmd: "reconnect", data: { sid: _sid } }));
    }
    _connection.onmessage = function (msg) {
      var message = JSON.parse(msg.data);
      if (message.cmd === "error") {
        if(message.data.cmd && _callbacks[message.data.cmd]){
          var cmdKey = message.data.cmd + "#" + message.data.nonce;
          if(_callbacks[cmdKey]){
            _callbacks[cmdKey](message.data.message);
            delete _callbacks[cmdKey];
          }
        }
      }
      else {
        message.data.time && (_timeInterval = Date.now() - message.data.time);
        message.data.sid && (_sid = message.data.sid);
        extend(_update, message.data);
        _hasUpdate = true;
        if(_pushCallbacks[message.cmd]){
          _pushCallbacks[message.cmd]();
        }
        else{
          var cmdKey = message.cmd + "#" + message.nonce;
          if(_callbacks[cmdKey]){
            _callbacks[cmdKey]();
            delete _callbacks[cmdKey];
          }
        }
      }
    }
    _connection.onclose = function (evt) {
      if (reconnect) {
        return;
      }
      reconnect = true;
      setTimeout(function () {
        connectServer();
      }, 1000);
    }
    _connection.onerror = function (error) {
      if (reconnect) {
        return;
      }
      reconnect = true;
      setTimeout(function () {
        connectServer();
      }, 1000);
    }
  }

  function wsRequest(cmd, data, nonce) {
    if (_connection) {
      _connection.send(JSON.stringify({ cmd: cmd,nonce: nonce, data: data }));
    }
    else {
      connectServer(function () {
        _connection.send(JSON.stringify({ cmd: cmd,nonce: nonce, data: data }));
      });
    }
  }

  Object.defineProperties(_dispatcher, {
    heartbeat: {
      value: function (interval, callback) {
        if (!_configed) {
          return;
        }
        _heartbeatCallback = callback;
        if (_heartbeat) {
          clearInterval(_heartbeat);
        }
        _heartbeat = setInterval(function () {
          this.request("heartbeat", {}, function (err) {
            if (err) {
              ++_hbFails;
              if (_hbFails > 4) {
                callback(err);
                conso;e.log("与服务器失去连接，或用户在其他地方上线，请刷新页面");
              }
            }
            else {
              _hbFails = 0;
            }
          }, true);
        }.bind(this), interval);
      }
    },
    request: {
      value: function (cmd, data, callback, noWait) {
        if (Date.now() - _lastMessage > 300000) {
          console.log("登录状态已经失效，点击确定重新登录");
          location.reload();
          return;
        }
        _lastMessage = Date.now();
        if (!noWait) {
          _wait && _wait(true);
        }
        if (_protocol == "ws" || _protocol == "wss") {//建立长连接
          var nonce = Math.random().toString();
          _callbacks[cmd + "#" + nonce] = callback;
          wsRequest(cmd, data, nonce);
        }
        else {//短连接请求
          var xhr = new XMLHttpRequest();
          xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
              if (xhr.status == 200 || xhr.status == 0) {
                if (!noWait) {
                  _wait && _wait();
                }
                try {
                  var message = JSON.parse(xhr.responseText);
                  if (message.errcode == -1) {
                    return alert(message.errmsg);
                  }
                  if (message.cmd == "error") {
                    callback && callback(message.data);
                  }
                  else {
                    message.data.time && (_timeInterval = Date.now() - message.data.time);
                    message.data.sid && (_sid = message.data.sid);
                    extend(_update, message.data);
                    _hasUpdate = true;
                    callback && callback();
                    _heartbeatCallback && _heartbeatCallback();
                  }
                }
                catch (e) {
                  console.log(e);
                  window.debugAll && window.debugAll(e.stack || e);
                  // callback && callback({errcode:10000,errmsg:e.stack});
                }
              }
              else {
                callback && callback({ errcode: 20000, errmsg: "服务器错误" });
              }
            }
          }
          xhr.open("POST", _protocol + "://" + _host + ":" + _port + "/" + cmd, true);
          xhr.setRequestHeader("Content-Type", "text/plain");
          data.sid = _sid;
          xhr.send(JSON.stringify(data));
        }
      }
    },
    get: {
      value: function () {
        if (_hasUpdate) {
          _hasUpdate = false;
          extend(_data, _update);
          _update = {};
        }
        return this.getOld.apply(this, Array.prototype.slice.call(arguments));
      }
    },
    getOld: {
      value: function () {
        var value = _data;
        var args = Array.prototype.slice.call(arguments);
        while (args.length) {
          value = value[args.shift()];
          if (!value) {
            break;
          }
        }
        return value;//clone(value);
      }
    },
    getNew: {
      value: function () {
        if (!_hasUpdate) {
          return null;
        }
        var value = _update;
        var args = Array.prototype.slice.call(arguments);
        while (args.length) {
          value = value[args.shift()];
          if (!value) {
            break;
          }
        }
        return value;//clone(value);
      }
    },
    safeGetNew: {
      value: function () {
        var args = Array.prototype.slice.call(arguments);
        return this.getNew.apply(this, args) || this.getOld.apply(this, args);
      }
    },
    setCache: {
      value: function (key, value) {
        _cache[key] = value;
      }
    },
    getCache: {
      value: function (key) {
        return _cache[key];
      }
    },
    clearCache: {
      value: function () {
        _cache = {};
      }
    },
    waitFunc: {
      set: function (wait) {
        _wait = wait;
      }
    },
    setOverrideKey: {
      value: function (key) {
        _overrides[key] = 1;
      }
    },
    setPushCallback: {
      value: function (key, callback) {
        _pushCallbacks[key] = callback;
      }
    }
  });
  Object.defineProperties(exports, {
    config: {
      value: function (host, port, protocol, connLostCallback,fullAddr) {
        if (_configed) {
          return;
        }
        _configed = true;
        _host = host;
        _port = port;
        _protocol = protocol;
        _connLostCallback = connLostCallback;
        _fullAddr = fullAddr;
        return _dispatcher;
      }
    },
    time: {
      get: function () {
        return Date.now() - _timeInterval;
      }
    },
    today: {
      get: function () {
        var date = new Date(weedon.time);
        return date.setHours(0, 0, 0, 0) - 480 * 60000 - new Date().getTimezoneOffset() * 60000;
      }
    },
    thisWeek: {
      get: function () {
        var date = new Date(weedon.time);
        return - ((date.getDay() || 7) - 1) * 24 * 3600000 + date.setHours(0, 0, 0, 0) - new Date().getTimezoneOffset() * 60000;
      }
    },
    getDayIndex: {
      value: function (anything) {
        var date;
        if (typeof anything == "number") {
          date = new Date(anything);
        }
        else {
          var _str = anything.split("/");
          date = new Date(+_str[0], +_str[1] - 1, +_str[2]);
        }
        return date.setHours(0, 0, 0, 0) - 480 * 60000 - new Date().getTimezoneOffset() * 60000;
      }
    },
    winSize: {
      get: function () {
        var winSize;
        if (typeof wx === "undefined") {
          var winWidth, winHeight = 0;
          if (window.innerHeight) {
            winWidth = window.innerWidth;
            winHeight = window.innerHeight;
          }
          else if ((document.body) && (document.body.clientHeight)) {
            winWidth = document.body.clientWidth;
            winHeight = document.body.clientHeight;
          }

          if (document.documentElement && document.documentElement.clientHeight) {
            winWidth = document.documentElement.clientWidth;
            winHeight = document.documentElement.clientHeight;
          }
          winSize = { width: winWidth, height: winHeight };
        }
        else {
          var info = wx.getSystemInfoSync();
          winSize = { width: info.windowWidth, height: info.windowHeight };
        }
        return winSize;
      }
    },
    showAlert: {
      value: function (text, callback) {
        if(typeof GameGlobal === "undefined"){
          alert(text);
          callback && callback();
        }
        else{
          wx.showModal({
            title: "系统提示",
            content: text,
            showCancel: false,
            cancelText: "取消",
            confirmText: "确定",
            success: function(res){
              callback && callback();
            }
          });
        }
      }
    },
    showComfirm: {
      value: function (text, okCallback, cancelCallback) {
        if (typeof GameGlobal === "undefined") {
          if(confirm(text)){
            okCallback && okCallback();
          }
          else{
            cancelCallback && cancelCallback();
          }
        }
        else {
          wx.showModal({
            title: "系统提示",
            content: text,
            showCancel: true,
            cancelText: "取消",
            confirmText: "确定",
            success: function (res) {
              if(res.confirm){
                okCallback && okCallback();
              }
              else{
                cancelCallback && cancelCallback();
              }
            }
          });
        }
      }
    },
    onHide: {
      value: function (callback) {
        if(typeof GameGlobal === "undefined"){

        }
        else{
          wx.onHide(callback);
        }
      }
    },
    onShow: {
      value: function (callback) {
        if(typeof GameGlobal === "undefined"){

        }
        else{
          wx.onShow(function (res) {
            callback(res.query);
          });
        }
      }
    },
    vibrate:{
      value:function(isLong){
        if(typeof GameGlobal === "undefined"){
          navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
          navigator.vibrate && navigator.vibrate(isLong ? 400 : 15);
        }
        else{
          isLong ? wx.vibrateLong({}) : wx.vibrateShort({});
        }
      }
    }
  });

  if (typeof GameGlobal !== "undefined") {
    Object.defineProperties(exports, {
      getLoginData: {
        value: function (callback) {
          sdk.init(conf);
          sdk.login(function (user, error, checkedSession) {
            var option = wx.getLaunchOptionsSync();
            callback(error, { channel: "wegame", user: user,option:option, checkedSession: checkedSession });
          });
        }
      },
      initChannelConfig: {
        value: function () {

        }
      },
      share:{
        value: function (params,callback){
          sdk.shareAppMessage({
            title:params.title,
            imageUrl:params.imageUrl,
            query:params.query,
            success:function(){
              callback(0);
            },
            fail:function(){
              callback(1);
            }
          });
        }
      }
    })
  }
})(module, module.exports || module.weedon);