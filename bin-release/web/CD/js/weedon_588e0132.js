var module = module || {};

if (typeof document !== "undefined" && typeof wx === "undefined"){
    module = window;
    !module.weedon && Object.defineProperties(module,{weedon:{value:{}}})
}
else{
    module = module || {};
    module.exports = module.exports || {};
}
typeof GameGlobal !== "undefined" && (GameGlobal.weedon = module.exports);
(function(module,exports){
    function clone(originalObject){
        if(!originalObject || typeof originalObject != "object"){
            return originalObject;
        }
        var newObject = originalObject.constructor == Array ? [] : {};
        for(var index in originalObject){
            newObject[index] = clone(originalObject[index]);
        }
        return newObject;
    }

    var _overrides = {};

    function extend(originalObject,targetObject){
        if(!targetObject || typeof originalObject != "object"){
            return targetObject;
        }
        for(var type in targetObject){
            if(type == "$removes"){
                targetObject.$removes.forEach(function(key){
                    delete originalObject[key];
                });
                delete targetObject.$removes;
            }
            else if(!originalObject[type] || !targetObject[type] || targetObject[type].$override || _overrides[type]){
                originalObject[type] = targetObject[type];
            }
            else{
                if(originalObject[type] && originalObject[type].$validate != targetObject[type].$validate){
                    originalObject[type] = targetObject[type];
                }
                else{
                    originalObject[type] = extend(originalObject[type],targetObject[type]);
                }
            }
        }
        return originalObject;
    }

    var _host,_port,_protocol,_connection;
    var _sid;

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
    Object.defineProperties(_dispatcher,{
        heartbeat:{
            value:function(interval,callback){
                if(!_configed){
                    return;
                }
                _heartbeatCallback = callback;
                if(_heartbeat){
                    clearInterval(_heartbeat);
                }
                _heartbeat = setInterval(function(){
                    this.request("heartbeat",{},function(err){
                        if(err){
                            ++_hbFails;
                            if(_hbFails > 4){
                                callback(err);
                                alert("与服务器失去连接，或用户在其他地方上线，请刷新页面");
                            }
                        }
                        else{
                            _hbFails = 0;
                        }
                    },true);
                }.bind(this),interval);
            }
        },
        request:{
            value:function(cmd,data,callback,noWait){
                if(Date.now() - _lastMessage > 300000){
                    alert("登录状态已经失效，点击确定重新登录");
                    location.reload();
                    return;
                }
                _lastMessage = Date.now();
                if(_protocol == "ws" || _protocol == "wss"){//建立长连接
                    if(!_connection){
                        
                    }
                }
                else{//短连接请求
                    if(!noWait){
                        _wait && _wait(true);
                    }
                    var xhr = new XMLHttpRequest();
                    xhr.onreadystatechange = function(){
                        if(xhr.readyState == 4){
                            if(xhr.status == 200 || xhr.status == 0){
                                if(!noWait){
                                    _wait && _wait();
                                }
                                try{
                                    var message = JSON.parse(xhr.responseText);
                                    if(message.errcode == -1){
                                        return alert(message.errmsg);
                                    }
                                    if(message.cmd == "error"){
                                       callback && callback(message.data);
                                    }
                                    else{
                                        message.data.time && (_timeInterval = Date.now() - message.data.time);
                                        message.data.sid && (_sid = message.data.sid);
                                        extend(_update,message.data);
                                        _hasUpdate = true;
                                        callback && callback();
                                        _heartbeatCallback && _heartbeatCallback();
                                    }
                                }
                                catch(e){
                                    console.log(e);
                                    window.debugAll && window.debugAll(e.stack || e);
                                    // callback && callback({errcode:10000,errmsg:e.stack});
                                }
                            }
                            else{
                                callback && callback({errcode:20000,errmsg:"服务器错误"});
                            }
                        }
                    }
                    xhr.open("POST",_protocol + "://"+_host+":"+_port+"/"+cmd,true);
                    xhr.setRequestHeader("Content-Type", "text/plain");
                    data.sid = _sid;
                    xhr.send(JSON.stringify(data));
                }
            }
        },
        get:{
            value:function(){
                if(_hasUpdate){
                    _hasUpdate = false;
                    extend(_data,_update);
                    _update = {};
                }
                return this.getOld.apply(this,Array.prototype.slice.call(arguments));
            }
        },
        getOld:{
            value:function(){
                var value = _data;
                var args = Array.prototype.slice.call(arguments);
                while(args.length){
                    value = value[args.shift()];
                    if(!value){
                        break;
                    }
                }
                return value;//clone(value);
            }
        },
        getNew:{
            value:function(){
                if(!_hasUpdate){
                    return null;
                }
                var value = _update;
                var args = Array.prototype.slice.call(arguments);
                while(args.length){
                    value = value[args.shift()];
                    if(!value){
                        break;
                    }
                }
                return value;//clone(value);
            }
        },
        safeGetNew:{
            value:function(){
                var args = Array.prototype.slice.call(arguments);
                return this.getNew.apply(this,args) || this.getOld.apply(this,args);
            }
        },
        setCache:{
            value:function(key,value){
                _cache[key] = value;
            }
        },
        getCache:{
            value:function(key){
                return _cache[key];
            }
        },
        clearCache:{
            value:function(){
                _cache = {};
            }
        },
        waitFunc:{
            set:function(wait){
                _wait = wait;
            }
        },
        setOverrideKey:{
            value:function(key){
                _overrides[key] = 1;
            }
        }
    });
    Object.defineProperties(exports,{
        config:{
            value:function(host,port,protocol,connLostCallback){
                if(_configed){
                    return;
                }
                _configed = true;
                _host = host;
                _port = port;
                _protocol = protocol;
                _connLostCallback = connLostCallback;
                return _dispatcher;
            }
        },
        time:{
            get:function(){
                return Date.now() - _timeInterval;
            }
        },
        today:{
            get:function(){
                var date = new Date(weedon.time);
                return date.setHours(0,0,0,0) - 480 * 60000 - new Date().getTimezoneOffset() * 60000;
            }
        },
        thisWeek:{
            get:function(){
                var date = new Date(weedon.time);
                return - ((date.getDay() || 7) - 1) * 24 * 3600000 + date.setHours(0,0,0,0) - new Date().getTimezoneOffset() * 60000;
            }
        },
        getDayIndex:{
            value:function(anything){
                var date;
                if(typeof anything == "number"){
                    date = new Date(anything);
                }
                else{
                    var _str = anything.split("/");
                    date = new Date(+_str[0],+_str[1] - 1,+_str[2]);
                }
                return date.setHours(0,0,0,0) - 480 * 60000 - new Date().getTimezoneOffset() * 60000;
            }
        },
        winSize:{
            get:function(){
                var winSize;
                if(typeof wx === "undefined"){
                    var winWidth,winHeight = 0;
                    if(window.innerHeight){
                        winWidth = window.innerWidth;
                        winHeight = window.innerHeight;
                    }
                    else if((document.body) && (document.body.clientHeight)){
                        winWidth = document.body.clientWidth;
                        winHeight = document.body.clientHeight;
                    }

                    if(document.documentElement  && document.documentElement.clientHeight){
                        winWidth = document.documentElement.clientWidth;
                        winHeight = document.documentElement.clientHeight;
                    }
                    winSize = {width:winWidth,height:winHeight};
                }
                else{
                    var info = wx.getSystemInfoSync();
                    winSize = {width:info.windowWidth,height:info.windowHeight};
                }
                return winSize;
            }
        }
    });

    if(typeof GameGlobal !== "undefined"){
        Object.defineProperties(exports,{
            getLoginData: {
                value: function (callback) {
                    if(typeof wx === "undefined"){

                    }
                    else{
                        wx.login({
                            success:function(loginRes){
                                wx.getUserInfo({
                                    withCredentials:true,
                                    success:function(res){
                                        res.channel = "wegame";
                                        res.code = loginRes.code;
                                        callback(null,res);
                                    }
                                });
                            }
                        });
                    }
                }
            },
            initChannelConfig: {
                value:function(){

                }
            }
        })
    }
})(module,module.exports || module.weedon);