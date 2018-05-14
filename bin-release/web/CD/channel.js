~function(){
  var configs = {
    
  }

  var pairs = location.search.slice(1).split('&');
  var query = {};
  pairs.forEach(function(pair) {
      pair = pair.split('=');
      query[pair[0]] = decodeURIComponent(pair[1] || '');
  });

  query._channel = query._channel || "test";

  var config = configs[query._channel] || {};
  
  if(config.authUrl && (!query[config.key] || query[config.key] == localStorage.getItem("WEEDON#3RD_KEY@" + query._channel))){
    if(config.extKeys){
      var extData = {};
      config.extKeys.forEach(function(key){
        query[key] && (extData[key] = query[key]);
      });
      config.authUrl = config.authUrl.replace("$$",encodeURIComponent(JSON.stringify(extData)));
    }
    return location.href = config.authUrl;
  }

  config.authUrl && localStorage.setItem("WEEDON#3RD_KEY@" + query._channel,query[config.key]);

  if(!this.weedon){
    Object.defineProperties(this,{
      weedon:{
        value:{}
      }
    });
  }

  query._channel = query._channel.toLowerCase();
  if(window.getOpenKey){
    query._channel = "qq";
  }
  
  var _channel = query.channel = config.alias || query._channel;

  var sdk;

  function loadSdk(urls,callback){
    if(!urls || !urls.length){
      return callback();
    }
    urls = [].concat(urls);
    var url = urls.shift();
    console.log("loading:"+url);
    if(url){
      var script = document.createElement("script");
      script.src = url;
      document.body.appendChild(script);
      script.onload = function(){
        loadSdk(urls,callback);
      };
    }
    else{
      callback();
    }
  }

  var _shareTitle,_shareDesc;

  var _activeCallback;

  Object.defineProperties(weedon,{
    getLoginData:{
      value:function(callback){;
        var sdkUrl;
        var init;
        switch(query.channel){
          case "bsbdj":
          sdkUrl = "http://h5.mobo168.com/open/sdk/ldgame.js";
          break;
          case "test":
          var sid = localStorage.getItem("weedon#CS#sid");
          if(!sid){
              sid = "" + Math.random();
              localStorage.setItem("weedon#CS#sid",sid);
          }
          query.openid = sid;
          return callback(null,query);
          case "hortor":
          sdkUrl = "http://gc-t.hortor010.com/sdk/sdk_agent.min.js?v=2.5.7";
          // sdkUrl = "https://h5.hortorgames.com/sdk/sdk_agent.min.js";
          break;
          case "68":
          sdkUrl = "http://static.play68.com/js/play68_sdk.js";
          break;
          case "1758":
          sdkUrl = "http://wx.1758.com/static/common/js/hlmy1758.js";
          break;
          case "9g":
          sdkUrl = "http://game.9g.com/js/lib.v2.js";
          break;
          case "weedon":
          
          break;
          case "hoowu":
          return callback(null,query);
          case "lmw":
          sdkUrl = ["http://lib.sinaapp.com/js/jquery/1.9.1/jquery-1.9.1.min.js","http://h5.g.lmwgame.com/scripts/changxiangLib.js"];
          break;
          case "tw":
          sdkUrl = "http://open.juhesdk.twan.cn/js/juhe.js";
          init = function(callback){
            window.JUHE && window.JUHE.authed(function(data){
              if(!data){
                return callback("登录信息出错，请重新登录");
              }
              data = typeof data === "object" ? data : JSON.parse(data);
              if(data.uid && data.token){
                query.uid = data.uid;
                query.token = data.token;
                window.JUHE.authin(config.appid,function(data){
                  console.log("authin:",data);
                  if(!data){
                    return callback("环境认证失败");
                  }
                  data = typeof data === "object" ? data : JSON.parse(data);
                  if(data.result == "success"){
                    return callback(null,query);
                  }
                  return callback("环境认证失败");
                },this);
              }
              else{
                return callback("登录信息出错，请重新登录");
              }
            },this);
          }
          break;
          case "qq":
          if(window.getOpenKey){
            init = function(callback){
              window.getOpenKey(function(d){
                for(var key in d.data){
                  query[key] = d.data[key] || query[key];
                }
                if(window.OPEN_DATA){
                  for(var key in window.OPEN_DATA){
                    query[key] = query[key] || window.OPEN_DATA[key];
                  }
                }
                console.log(query);
                callback();
              });
            }
          }
          break;
        }
        loadSdk(sdkUrl,function(){
          init ? init(function(err){
            err ? callback(err) : callback(null,query);
          }) : callback(null,query);
        });
      }
    },
    initChannelConfig:{
      value:function(params,shareCallback,payCallback){
        var index = Math.random() * 5 >> 0;
        var title = ["我就想安安静静上个王者，怎么这么难？","生死局，哪位老铁带兄弟一把？","比农药轻松100倍，还能交友！","上厕所玩到腿发麻！","呱儿子有种你就别回来！"][index];
        var desc = ["匹配队友全是笨鹅，怎么办？在线等，急！","真不是我坑，后羿开大清兵我能怎么办？","动动手指送送心，男神女神都在玩","来试试，比农药过瘾10倍的游戏！","以后我就养鹅了，还要养8个！"][index];
        var imgUrl = index == 1 ? query.userImg : ~location.href.indexOf("h5game.") ? "http://h5game.weedon.cn/games/CM/resource/assets/ui/tg_" + index + ".png" : "https://gsbxs-resource.hortor.net/resource/assets/ui/tg_" + index + ".png";

        switch(_channel){
          case "hortor":
          sdk = window.HORTOR_AGENT || {};
          sdk.init && sdk.init();
          sdk.config && sdk.config({
            gameId:"wzdy",
            share:{
              timeline:{
                title:title,
                imgUrl:imgUrl,
                success:function(){
                  shareCallback && shareCallback(0);
                },
                cancel:function(){
                  shareCallback && shareCallback(1);
                }
              },
              friend:{
                title:title,
                desc:desc,
                imgUrl:imgUrl,
                success:function(){
                  shareCallback && shareCallback(0);
                },
                cancel:function(){
                  shareCallback && shareCallback(1);
                }
              },
              shareCustomParam:{
                cp_inviter:params.inviter,
                cp_msgidx:index
              }
            },
            hoverPosition:{
              top: "20%",
              onLeft:true
            },
            pay:{
              success:function(){
                  payCallback && payCallback(0);
              },
              cancel:function(){
                  payCallback && payCallback(1);
              }
            }
          });
          break;
          case "weedon":
          break;
          case "bsbdj":
          sdk = new ldgame({
            app_key:query.app_key
          });
          sdk.setwxsharecallback(function(){
            shareCallback && shareCallback();
          });
          break;
          case "1758":
          sdk = window.hlmy;
          sdk.setShareInfo({
            state:weedon.server || 1,
            tipInfo:true,
            reward:shareInfo.reward
          });
          shareCallback && (window.onShareTimeline = shareCallback);
          break;
          case "68":
          sdk = window.Play68;
          sdk.setShareInfo(shareInfo.title,shareInfo.desc);
          window.on_wx_share_succ = shareCallback;
          sdk.onpaysucc = function(){
            parent.location.href = document.referrer;
          }
          break;
          case "9g":
          sdk = new Game9G({
            gameid:config.gameid,
            token:query.token
          });
          sdk.ready(function(){
            sdk.setShareData({
              title:shareInfo.title,
              content:shareInfo.desc
            });
            sdk.onShareOK(shareCallback);
          });
          break;
          case "lmw":
          sdk = window.changxiangLib;
          changxiangLib.init({
            debug:false,
            gameId:config.gameId,
            flag:query.flag,
            channelExt:query.channelExt,
          });
          break;
          case "tw":
          sdk = window.JUHE;
          sdk && sdk.ulogin && sdk.ulogin(weedon.server || 1,function(){},this);
          break;
          case "qq":
          window.__paySuccess = function(){
            console.log("pay ok");
            payCallback();
          }
          window.__payError = function(){
            console.log("pay failed");
            payCallback("支付失败");
          }
          window.__payClose = function(){
            console.log("pay cancelled");
            payCallback("支付已取消");
          }
          mqq.ui.setOnShareHandler(function(type){
            var index = Math.random() * 6 >> 0;
            mqq.ui.shareMessage({
                title: title,
                desc: desc,
                share_type: type,
                share_url: window.OPEN_DATA.shareurl,
                image_url:"http://i.gtimg.cn/open/app_icon/06/21/80/25/1106218025_100_m.png",
                back: true
            },function(result){
                shareCallback && shareCallback(result.retCode);
            });
          });
          window.mqq.invoke('ui','setOnAddShortcutHandler', {'callback':mqq.callback(function(){
              mqq.ui.addShortcut({
                  action: 'web',
                  title: '呆呆打僵尸',
                  icon: 'http://i.gtimg.cn/open/app_icon/06/21/80/25/1106218025_100_m.png',
                  url: window.OPEN_DATA.jumpurl,
                  callback: function(ret){}
              });
          }, false,true)});
          document.addEventListener("qbrowserVisibilityChange", function(e){
            var player = document.querySelectorAll(".egret-player")[0]["egret-player"].player;
            e.hidden ? player.pause() : player.start();
            if(!e.hidden && _activeCallback){
              _activeCallback();
              _activeCallback = null;
            }
          });
          break;
        }
      }
    },
    canSubscribe:{
      get:function(){
        if(_channel == "hortor"){
          return query.isShowSubscribe == "true";
        }
        return false;
      }
    },
    setActiveCallback:{
      value:function(activeCallback){
        _activeCallback = activeCallback;
      }
    },
    subscribe:{
      value:function(){
        switch(_channel){
          case "hortor":
          sdk && sdk.showQRCode && sdk.showQRCode();
          break;
          case "1758":
          sdk && sdk.follow && sdk.follow()
          break;
        }
      }
    },
    share:{
      value:function(params,callback){
        var index = Math.random() * 5 >> 0;
        var title = ["我就想安安静静上个王者，怎么这么难？","生死局，哪位老铁带兄弟一把？","比农药轻松100倍，还能交友！","上厕所玩到腿发麻！","呱儿子有种你就别回来！"][index];
        var desc = ["匹配队友全是笨鹅，怎么办？在线等，急！","真不是我坑，后羿开大清兵我能怎么办？","动动手指送送心，男神女神都在玩","来试试，比农药过瘾10倍的游戏！","以后我就养鹅了，还要养8个！"][index];
        var imgUrl = index == 1 ? query.userImg : ~location.href.indexOf("h5game.") ? "http://h5game.weedon.cn/games/CM/resource/assets/ui/tg_" + index + ".png" : "https://gsbxs-resource.hortor.net/resource/assets/ui/tg_" + index + ".png";
        switch(_channel){
          case "qq":{
            var shareUrl = window.OPEN_DATA.shareurl;
            if(~shareUrl.indexOf("?")){
              shareUrl = shareUrl + "&inviter=" + params.inviter;
            }
            else{
              shareUrl = shareUrl + "?inviter=" + params.inviter;
            }
            mqq.ui.shareMessage({
                title: params.title || title,
                desc: params.desc || desc,
                share_type: 0,
                share_url: shareUrl,
                image_url:"http://i.gtimg.cn/open/app_icon/06/21/80/25/1106218025_100_m.png",
                back: true
            },function(result){
                callback && callback(result.retCode);
            });
          }
          // mqq.ui.showShareMenu();
          break;
          case "bsbdj":
          try{
            sdk.sendmessage({m:"sharePost", d:{}});
          }
          catch(e){
            alert(e);
          }
          break;
          case "hortor":
          sdk.config && sdk.config({
            gameId:"wzdy",
            share:{
              timeline:{
                title:params.title || title,
                imgUrl:imgUrl,
                success:function(){
                  callback && callback(0);
                },
                cancel:function(){
                  callback && callback(1);
                }
              },
              friend:{
                title:params.title || title,
                desc:params.desc || desc,
                imgUrl:imgUrl,
                success:function(){
                  callback && callback(0);
                },
                cancel:function(){
                  callback && callback(1);
                }
              },
              shareCustomParam:{
                cp_inviter:params.inviter,
                cp_msgidx:index
              }
            }
          });
          break;
        }
      }
    },
    createRole:{
      value:function(role){
        switch(_channel){
          case "9g":
          sdk.createRole({
            server_id:weedon.server || 1,
            role_id:role
          });
          break;
          case "lmw":
          sdk.createRole(role);
          break;
          case "qq":
          break;
        }
      }
    },
    pay:{
      value:function(params,callback){
        switch(_channel){
          case "test":
          callback && callback("测试平台暂无支付功能，请您谅解");
          break;
          case "hortor":
          sdk && sdk.pay && sdk.pay(params);
          break;
          case "68":
          sdk && sdk.pay && sdk.pay.apply(sdk,params);
          break;
          case "1758":
          sdk && sdk.pay && sdk.pay(params);
          break;
          case "9g":
          params.onPayCallback = function(){

          }
          params.onPayCancel = function(){
            callback && callback("本次支付被取消");
          }
          sdk && sdk.pay && sdk.pay(params);
          break;
          case "weedon":
          break;
          case "bsbdj":
          console.log(params);
          sdk && sdk.pay && sdk.pay(params,function(){

          });
          break;
          case "hoowu":
          location.href = params;
          break;
          case "lmw":
          sdk && sdk.pay && sdk.pay(params);
          break;
          case "tw":
          sdk && sdk.pay && sdk.pay(params,function(){},this);
          break;
          case "qq":
          window.popPayTips && window.popPayTips(params);
          break;
        }
      }
    },
    channel:{
      get:function(){
        // return "qq";
        return _channel || "test";
      }
    },
    platform:{
      get:function(){
        return query.platform || 0;
      }
    },
    sendToDesktop:{
      value:function(callback){
        switch(_channel){
          case "qq":
          mqq.ui.addShortcut({
            action: 'web',
            title: '呆呆打僵尸',
            icon: 'http://h5.weedon.cn/games/CS/resource/assets/icon_qq.png',
            url: window.OPEN_DATA.jumpurl,
            callback: callback
          });
          break;
          default:
          callback();
        }
      }
    },
    getValue:{
      value:function(paramName){
        return query[paramName];
      }
    }
  });
}.call(this);