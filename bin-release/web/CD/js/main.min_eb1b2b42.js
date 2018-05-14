function createBitmap(t,e,i,n,s,r,a,o){var h=new egret.Bitmap,l=new AssetAdapter;return l.getAsset(t,function(l){h.texture=RES.getRes(t),h.anchorOffsetX=e>2?e:(e||0)*h.width,h.anchorOffsetY=i>2?i:(i||0)*h.height,h.x=n||0,h.y=s||0,h.scaleX=r||1,h.scaleY=a||1,o&&o(h)},this),h}function setTexture(t,e,i,n,s,r,a){i=i||t.anchorOffsetX/t.width,n=n||t.anchorOffsetY/t.height,t.scaleX=void 0===s?1:s,t.scaleY=void 0===r?1:r;var o=new AssetAdapter;t.texture=null,o.getAsset(e,function(s){t.texture=RES.getRes(e),t.anchorOffsetX=(i||0)*t.width,t.anchorOffsetY=(n||0)*t.height,a&&a()},this)}function getNumberString(t){var e,i;if(0===+t||+t){var n=""+Math.floor(t);if(1e3>t)return n;var s=Math.floor(Math.log(t)/Math.log(10)+1e-6);e=~n.indexOf("e")?+n.split("e")[0]*Math.pow(10,s%3):+n.slice(0,s%3+3)/100,i=s/3>>0}else{if(t=t.split("exp"),+t[1]<3)return Math.round(t[0]*Math.pow(10,t[1]))+"";for(e=t[0]*Math.pow(10,t[1]%3);e>1e3;)e/=1e3,t[1]=+t[1]+3;i=t[1]/3>>0}var r;if(4>i)r=["","K","M","B"][i];else{var a=(i-4)/26>>0,o=a/26>>0,h=(i-4)%26,l="abcdefghijklmnopqrstuvwxyz",c=l.toUpperCase();r=(2>o?l:c)[a%26]+(o%2?c:l)[h]}return e.toFixed(10>e?2:100>e?1:0)+r}function setAvatar(t,e,i,n){if(!e)return t.texture=null,void(n&&n());var s=t.width,r=t.height;if(i=i||(~location.hostname.indexOf("h5game.")?"http://s1.wc.weedon.cn:9602/avatar/":"https://gsbxs.hortor.net:9602/avatar/")+e+"/avatar.jpg",avatars[e]){var a=new egret.Texture;a.bitmapData=avatars[e],t.texture=a,t.width=s,t.height=r,n&&n()}else{var o=new egret.ImageLoader;o.crossOrigin="anonymous",o.once(egret.Event.COMPLETE,function(i){var a=new egret.Texture;avatars[e]=a.bitmapData=o.data,t.texture=a,t.width=s,t.height=r,n&&n()},this),o.load(i)}}function setQRCode(t,e,i){var n=t.width,s=t.height,r=(~location.hostname.indexOf("h5game.")?"http://s1.wc.weedon.cn:9602/qrcode/":"https://gsbxs.hortor.net:9602/qrcode/")+e;if(qrcodes[e])t.width=n,t.height=s,i();else{var a=new egret.ImageLoader;a.crossOrigin="anonymous",a.once(egret.Event.COMPLETE,function(e){t.width=n,t.height=s,i()},this),a.load(r)}}var __reflect=this&&this.__reflect||function(t,e,i){t.__class__=e,i?i.push(e):i=[e],t.__types__=t.__types__?i.concat(t.__types__):i},__extends=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);i.prototype=e.prototype,t.prototype=new i},__awaiter=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))(function(s,r){function a(t){try{h(n.next(t))}catch(e){r(e)}}function o(t){try{h(n["throw"](t))}catch(e){r(e)}}function h(t){t.done?s(t.value):new i(function(e){e(t.value)}).then(a,o)}h((n=n.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function i(t){return function(e){return n([t,e])}}function n(i){if(s)throw new TypeError("Generator is already executing.");for(;h;)try{if(s=1,r&&(a=r[2&i[0]?"return":i[0]?"throw":"next"])&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[0,a.value]),i[0]){case 0:case 1:a=i;break;case 4:return h.label++,{value:i[1],done:!1};case 5:h.label++,r=i[1],i=[0];continue;case 7:i=h.ops.pop(),h.trys.pop();continue;default:if(a=h.trys,!(a=a.length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){h=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){h.label=i[1];break}if(6===i[0]&&h.label<a[1]){h.label=a[1],a=i;break}if(a&&h.label<a[2]){h.label=a[2],h.ops.push(i);break}a[2]&&h.ops.pop(),h.trys.pop();continue}i=e.call(t,h)}catch(n){i=[6,n],r=0}finally{s=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}var s,r,a,o,h={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),"throw":i(1),"return":i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o},AssetAdapter=function(){function t(){}return t.prototype.getAsset=function(t,e,i){function n(n){e.call(i,n,t)}if(RES.hasRes(t)){var s=RES.getRes(t);s?n(s):RES.getResAsync(t,n,this)}else RES.getResByUrl(t,n,this,RES.ResourceItem.TYPE_IMAGE)},t}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},e.prototype.onProgress=function(t,e){this.textField.text="Loading..."+t+"/"+e},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var _wx={_lastCallback:0,_interval:0,_callback:null,startAccelerometer:function(t){window.addEventListener("deviceorientation",this._listener.bind(this),!0),t.success&&t.success()},_listener:function(t){var e=Date.now();e-this._lastCallback<this._interval||(this._lastCallback=e,this._callback&&this._callback({x:(t.gamma/90).toFixed(5),y:t.alpha.toFixed(5),z:(t.beta/90-1).toFixed(5)}))},onAccelerometerChange:function(t){this._callback=t},setInterval:function(t){this._interval=t},stopAccelerometer:function(){window.removeEventListener("deviceorientation",this._listener,!0)}},Main=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.createChildren=function(){t.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(t){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var e=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",e),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(t){console.log(t)})},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,this.loadResource()];case 1:return t.sent(),this.createGameScene(),[2]}})})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(i){switch(i.label){case 0:return i.trys.push([0,4,,5]),t=new LoadingUI,this.stage.addChild(t),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return i.sent(),[4,this.loadTheme()];case 2:return i.sent(),[4,RES.loadGroup("preload",0,t)];case 3:return i.sent(),this.stage.removeChild(t),[3,5];case 4:return e=i.sent(),console.error(e),[3,5];case 5:return[2]}})})},e.prototype.loadTheme=function(){var t=this;return new Promise(function(e,i){var n=new eui.Theme("resource/default.thm.json",t.stage);n.addEventListener(eui.UIEvent.COMPLETE,function(){e()},t)})},e.prototype.createGameScene=function(){var t=weedon.config(~location.hostname.indexOf("h5.")?"s1.wc.weedon.cn":~location.hostname.indexOf(".hortor.")?"gsbxs.hortor.net":location.hostname,9600,~location.hostname.indexOf(".hortor.")?"https":"http",function(){}),e=egret.localStorage.getItem("CM#OPENID");e||(e=Math.random().toString(),egret.localStorage.setItem("CM#OPENID",e)),weedon.getLoginData(function(e,i){var n=this;t.request("user.login",{loginData:i},function(e){if(e)return alert(e.errmsg||"登录失败");var i=new DuelScene(t);n.addChild(i)}.bind(this))}.bind(this))},e}(eui.UILayer);__reflect(Main.prototype,"Main");var DebugPlatform=function(){function t(){}return t.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,{nickName:"username"}]})})},t.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var ThemeAdapter=function(){function t(){}return t.prototype.getTheme=function(t,e,i,n){function s(t){e.call(n,t)}function r(e){e.resItem.url==t&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,r,null),i.call(n))}"undefined"!=typeof generateEUI?egret.callLater(function(){e.call(n,generateEUI)},this):(RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,r,null),RES.getResByUrl(t,s,this,RES.ResourceItem.TYPE_TEXT))},t}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var Animation=function(t){function e(e,i,n,s,r){var a=t.call(this)||this;a.onTop=1,a.debug=!1,a.spd=1,a.slots={},a.sounds={},a.frameEvents={},a.touchEnabled=!1,a.eventCallback=s;var o=new AssetAdapter,h=3;return[e+"_ske_json",e+"_tex_json",e+"_tex_png"].forEach(function(t){o.getAsset(t,function(){if(!--h){var t=new dragonBones.EgretFactory;t.parseDragonBonesData(RES.getRes(e+"_ske_json")),t.parseTextureAtlasData(RES.getRes(e+"_tex_json"),RES.getRes(e+"_tex_png"));var s=this.display=t.buildArmatureDisplay(i||e);this.addChild(s),s.touchEnabled=!1,s.armature.addEventListener(dragonBones.Event.LOOP_COMPLETE,function(){if(this.callback){var t=this.callback;this.callback=null,t()}else n&&n()},this),s.armature.addEventListener(dragonBones.Event.BONE_FRAME_EVENT,this.frameListener,this),s.armature.addEventListener(dragonBones.SoundEvent.SOUND_EVENT,this.soundListener,this),this.animationName&&s.animation.play(this.animationName,this.loop);for(var a in this.slots){var o=s.armature.getSlot(a),l=o.getDisplay();this.slots[a].x=l.x,this.slots[a].y=l.y,o.setDisplay(this.slots[a]),delete this.slots[a]}s.animation.timeScale=this.spd,r&&r(s)}},this)}.bind(a)),a}return __extends(e,t),e.prototype.frameListener=function(t){this.frameEvents[t.frameLabel]?this.frameEvents[t.frameLabel](t):this.eventCallback&&this.eventCallback(t.frameLabel)},e.prototype.soundListener=function(t){if(!MUTE_SE)if(this.sounds[t.frameLabel])this.sounds[t.frameLabel].play(1);else var e=this.sounds[t.frameLabel]=new Sound(1,t.frameLabel.split(".")[0],function(){e.play(1)})},e.prototype.clearListeners=function(){this.display.armature.removeEventListener(dragonBones.Event.BONE_FRAME_EVENT,this.frameListener,this),this.display.armature.removeEventListener(dragonBones.SoundEvent.SOUND_EVENT,this.soundListener,this)},e.prototype.getSlotDisplay=function(t){return this.display?this.display.armature.getSlot(t).getDisplay():null},e.prototype.play=function(t,e,i){this.debug&&console.log(t),this.animationName=t,this.loop=e,this.display&&this.display.animation.play(t,e),this.callback=i||this.callback},e.prototype.setSlot=function(t,e){if(this.display){var i=this.display.armature.getSlot(t).getDisplay();e.x=i.x,e.y=i.y,this.display&&this.display.armature.getSlot(t).setDisplay(e)}else this.slots[t]=e},e.prototype.setEvent=function(t,e){this.frameEvents[t]=e},e.prototype.setSpeed=function(t){this.display?this.display.animation.timeScale=t:this.spd=t},e.prototype.hitCheck=function(t,e,i){var n=this.display.globalToLocal(t,e);if(i){var s=this.display.armature.getSlot(i);return s?s.containsPoint(n.x,n.y):!1}return!!this.display.armature.containsPoint(n.x,n.y)},e}(eui.Group);__reflect(Animation.prototype,"Animation");var Dispatcher=function(){function t(t){this._dispatcher=t}return t.prototype.heartbeat=function(t,e){this._dispatcher.heartbeat(t,e)},t.prototype.request=function(t,e,i,n){this._dispatcher.request(t,e,i,n)},t.prototype.get=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this._dispatcher.get.apply(this._dispatcher,t)},t.prototype.getOld=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this._dispatcher.getOld.apply(this._dispatcher,t)},t.prototype.getNew=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this._dispatcher.getNew.apply(this._dispatcher,t)},t.prototype.safeGetNew=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this._dispatcher.safeGetNew.apply(this._dispatcher,t)},t.prototype.setCache=function(t,e){this._dispatcher.setCache(t,e)},t.prototype.getCache=function(t){return this._dispatcher.getCache(t)},t.prototype.clearCache=function(){this._dispatcher.clearCache()},Object.defineProperty(t.prototype,"waitFunc",{set:function(t){this._dispatcher.waitFunc=t},enumerable:!0,configurable:!0}),t.prototype.setOverrideKey=function(t){this._dispatcher.setOverrideKey(t)},t}();__reflect(Dispatcher.prototype,"Dispatcher");var MUTE_SE=!1,Sound=function(){function t(t,e,i,n){this.playing=!1;var s=new egret.Sound;s.load("resource/assets/sound/"+e+(n||".mp3")+"?v="+window.__VERSION),s.addEventListener(egret.Event.COMPLETE,function(){this.sound=s,i(this)},this),this.mode=t}return t.prototype.play=function(t,e){if(!(this.playing||!this.sound||this.mode&&MUTE_SE)){this.playing=!0;var i=this.channel=this.sound.play(0,t||0===t?t:1);i.addEventListener(egret.Event.SOUND_COMPLETE,function(){e&&e(),this.playing=!1},this)}},t.prototype.stop=function(){this.playing&&(this.playing=!1,this.channel&&this.channel.stop())},t}();__reflect(Sound.prototype,"Sound");var avatars={},qrcodes={},DuelScene=function(t){function e(e){var i=t.call(this)||this;return i.targetX=0,i.targetY=0,i.finished=!1,i.shooting=!1,i.hit=!1,i.reloading=!1,i.bullets=6,i.direction=0,i.hitEffects=[],i.enemyLevel=1,i.enemyMaxHp=100,i.enemyCurrentHp=100,i.maxHp=100,i.currentHp=100,i.enemyNextShoot=0,i.totalDamage=0,i.totalShoot=0,i.totalHit=0,i.headHit=0,i.dispatcher=e,i.skinName=DuelSceneSkin,i}return __extends(e,t),e.prototype.childrenCreated=function(){t.prototype.childrenCreated.call(this);var e=this.gun=new Animation("gun0");this.addChild(e),e.play("stand",0),e.x=320,e.y=1386;var i=this.cross=new Animation("Crosshair");this.addChild(i),i.play("stand",0),i.x=320,i.y=686;var n=this.target=new Animation("chr");this.enemy.addChild(n),n.play("stand",0),n.scaleX=n.scaleY=.3;var s=this.enemyFire=new Animation("enimyfire");n.setSlot("p",s),s.visible=!1,this.scene.touchEnabled=!0,this.scene.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){this.fire()},this),this.adjustUI(),this.showRanking()},e.prototype.adjustUI=function(){return this.ignoreNextResize?void(this.ignoreNextResize=!1):(this.ignoreNextResize=!0,void(weedon.winSize.width/weedon.winSize.height>.64?(this.stage.setContentSize(640,1e3),this.stage.scaleMode=egret.StageScaleMode.SHOW_ALL,this.y=-193,this.topUI.y=193,this.screenHeight=1e3):(this.stage.setContentSize(640,1386),this.stage.scaleMode=egret.StageScaleMode.FIXED_WIDTH,this.screenHeight=640/weedon.winSize.width*weedon.winSize.height,this.y=this.screenHeight-1386,this.topUI.y=-this.y)))},e.prototype.quit=function(){("undefined"==typeof GameGlobal?_wx:wx).stopAccelerometer(),egret.stopTick(this.update,this)},e.prototype.clamp=function(t,e,i){return Math.max(e,Math.min(t,i))},e.prototype.start=function(){("undefined"==typeof GameGlobal?_wx:wx).startAccelerometer({success:function(){("undefined"==typeof GameGlobal?_wx:wx).onAccelerometerChange(function(t){this.targetX=1360*-this.clamp(t.x,-.5,.5)*(t.z>0?-1:1),this.targetY=400+640*this.clamp(t.z,-1,-.2)}.bind(this)),this.startTime=Date.now(),this.enemyNextShoot=this.startTime+1e4,this.totalShoot=this.totalHit=this.headHit=this.totalDamage=0,this.currentHp=this.maxHp=this.enemyCurrentHp=this.enemyMaxHp=100,this.enemyLevel=1,this.level.text="Lv.1",this.updateHp(),this.target.play("left",0),egret.startTick(this.update,this)}.bind(this)})},e.prototype.showRanking=function(){this.dispatcher.request("user.list",{},function(){var t=new RankingList(this.dispatcher,this.totalShoot,this.totalHit,this.headHit,this.start.bind(this));this.addChild(t),t.x=40,t.y=(this.screenHeight-900)/2-this.y}.bind(this))},e.prototype.fire=function(){this.shooting||this.reloading||(this.shooting=!0,++this.totalShoot,this.check(),this.gun.play("fire",1,function(){this.shooting=!1,this.bullets-=1,this.bullets<=0?(this.reloading=!0,this.cross.visible=!1,this.gun.play("reload",1,function(){this.bullets=6,this.reloading=!1,this.cross.visible=!0}.bind(this))):this.gun.play("stand",0)}.bind(this)),this.cross.play("fire",1,function(){this.cross.play("stand",0)}.bind(this)))},e.prototype.check=function(){for(var t=this.localToGlobal(this.cross.x,this.cross.y),e=this.target.globalToLocal(t.x,t.y),i=-1,n=0;10>n;++n){var s=["headhit","leghit0","leghit1","leghit2","leghit3","leghit4","leghit5","bodyhit0","bodyhit1","bodyhit2"][n];if(this.target.hitCheck(t.x,t.y,s)){i=n;break}}if(~i){++this.totalHit,this.hit=!0,this.target.play(i?"hit":"headhit",1,function(){this.hit=!1,this.target.play(this.direction?"right":"left",0)}.bind(this));for(var r,n=0;n<this.hitEffects.length;++n)if(!this.hitEffects[n].visible){r=this.hitEffects[n];break}r||(r=new Animation("se_hit"),this.target.addChild(r),this.hitEffects.push(r)),r.visible=!0,r.x=e.x,r.y=e.y,r.play("hit",1,function(){r.visible=!1}),!i&&++this.headHit;var a=i?10:30;this.totalDamage+=a,this.enemyCurrentHp-=a,this.enemyCurrentHp<=0?(this.enemyLevel+=1,this.enemyCurrentHp=this.enemyMaxHp=100+10*Math.pow(2,this.enemyLevel),this.level.text="Lv."+this.enemyLevel,this.enemyNextShoot=Date.now()+1e3*Math.max(11-this.enemyLevel,3)):this.enemyNextShoot+=i?1e3:3e3,this.updateHp()}else this.enemyNextShoot-=1e3},e.prototype.updateHp=function(){this.hpTag.text=this.currentHp+"/"+this.maxHp,this.hpBar.mask=new egret.Rectangle(0,0,this.hpBar.width*this.currentHp/this.maxHp,this.hpBar.height),this.enemyHpBar.mask=new egret.Rectangle(0,0,this.enemyHpBar.width*this.enemyCurrentHp/this.enemyMaxHp,this.enemyHpBar.height)},e.prototype.update=function(){var t=Date.now(),e=t-this.startTime;return this.startTime=t,this.field.x+=.01*e*(this.targetX-this.field.x),this.scene.y+=.01*e*(this.targetY-this.scene.y),this.enemyNextShoot<t&&(this.enemyFire.visible=!0,this.enemyFire.play("hit",1,function(){this.enemyFire.visible=!1}.bind(this)),this.currentHp-=9+this.enemyLevel,this.enemyNextShoot=t+1e3*Math.max(11-this.enemyLevel,3),this.updateHp(),this.currentHp<=0)?(this.quit(),void this.dispatcher.request("user.progress",{totalDamage:this.totalDamage,totalShoots:this.totalShoot,totalHits:this.totalHit,headHits:this.headHit},function(){this.showRanking()}.bind(this))):(this.counter.text=((this.enemyNextShoot-t)/1e3>>0).toString(),this.hit?!0:(this.direction?(this.enemy.x+=(.2+.05*this.enemyLevel-.05)*e,this.enemy.x>1040&&(this.direction=0,this.target.play("left",0))):(this.enemy.x-=(.2+.05*this.enemyLevel-.05)*e,this.enemy.x<-400&&(this.direction=1,this.target.play("right",0))),!0))},e}(eui.Component);__reflect(DuelScene.prototype,"DuelScene");var RankingList=function(t){function e(e,i,n,s,r){var a=t.call(this)||this;return a.skinName=RankingListSkin,a.dispatcher=e,a.totalShoot=i,a.totalHit=n,a.headHit=s,a.callback=r,a}return __extends(e,t),e.prototype.childrenCreated=function(){t.prototype.childrenCreated.call(this),this.totalShootLabel.text=this.totalShoot.toString(),this.totalHitLabel.text=this.totalHit.toString(),this.headHitLabel.text=this.headHit.toString(),this.btnStart.touchEnabled=!0,this.btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){this.parent.removeChild(this),this.callback()},this);var e=new eui.Group,i=new egret.ScrollView(e);this.addChild(i),i.x=15,i.y=200,i.width=e.width=530,i.height=600;var n=this.dispatcher.get("users")||[];n.sort(function(t,e){return e.bestDamage-t.bestDamage}).forEach(function(t,i){var n=new RankingItem;e.addChild(n),n.x=5,n.y=5+105*i,setAvatar(n.avatar,t.avatar),n.nickname.text=t.nickname,n.totalShootLabel.text=t.totalShoots,n.totalHitLabel.text=t.totalHits,n.headHitLabel.text=t.headHits})},e}(eui.Component);__reflect(RankingList.prototype,"RankingList");var RankingItem=function(t){function e(){var e=t.call(this)||this;return e.skinName=RankingItemSkin,e}return __extends(e,t),e.prototype.childrenCreated=function(){t.prototype.childrenCreated.call(this)},e}(eui.Component);__reflect(RankingItem.prototype,"RankingItem");