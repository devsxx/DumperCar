//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
declare var wx;
declare var HORTOR_AGENT;
declare var GameGlobal;

var _wx;
(function(){
    let _callback = null;
    function listen(evt){
        _callback && _callback({
            x:+Math.sin(evt.gamma / 180 * Math.PI).toFixed(5),
            y:evt.alpha,
            z:+Math.sin(-evt.beta / 180 * Math.PI).toFixed(5)
        });
    }

    _wx = {};

    Object.defineProperties(_wx,{
        startAccelerometer:{
            value:function(obj){
                window.addEventListener("deviceorientation",listen,true);
                obj.success && obj.success();
            }
        },
        onAccelerometerChange:{
            value:function(callback){
                _callback = callback;
            }
        },
        stopAccelerometer:{
            value:function(obj){
                window.removeEventListener("deviceorientation",listen,true);
                obj && obj.complete && obj.complete();
            }
        }
    });
})();

const DEBUG_MODE = false;


declare var weedon: {
    config:(host:string,port:number,protocol:string,connLostCallback:()=>void,fullAddr?:string)=>any;
    time:number;
    today:number;
    thisWeek:number;
    getDayIndex:(anything:any)=>number;
    winSize:{
        width:number;
        height:number;
    }
    getLoginData:(callback:(err,loginData)=>void)=>void;
    initChannelConfig:(params:{},shareCallback:(state:number)=>void,payCallback:(state:number)=>void)=>void;
    share:(params:{},callback:(state:number,res?)=>void)=>void;
    getShareInfo:(userId:string,shareTicket:string,callback:(res)=>void)=>void;
    pay:(params:any)=>void;
    subscribe:()=>void;
    onShow:(callback:(query)=>void)=>void;
    onHide:(callback:()=>void)=>void;
    showAlert:(text:string,callback?:()=>void)=>void;
    vibrate:(isLong?:boolean)=>void;
}

declare var formula:{
  getTransPosition:(x:number,y:number,rotation:number)=>[number];
  checkCRRectangle:(x:number, y, r, x0, y0, x1, y1, x2, y2)=>number;
  getDistancePP:(x1, y1, x2, y2)=>number;
  getDistancePL:(x, y, x1, y1, x2, y2)=>number;
}
const version = "1.0.16";

class Main extends eui.UILayer {
    private MUTE_SE:boolean =false;
    protected createChildren(): void {
        super.createChildren();
        
        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        
        RES["getRealURL"] = function(url){
            return typeof GameGlobal !== "undefined" ? (DEBUG_MODE ? "http://192.168.1.10:3000/" : "https://xbwz-resource.hortor.net/") + url + "?v=" + version : url + "?v=" + version;
        }
        
        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async runGame() {
        await this.loadResource();
        this.createGameScene();
        // const result = await RES.getResAsync("description_json")
        // this.startAnimation(result);
        // await platform.login();
        // const userInfo = await platform.getUserInfo();
        // console.log(userInfo);
    }
    private loadingView:LoadingUI;
    private async loadResource(groupName?:string) {
        try {
            if(!this.loadingView){
                await RES.loadConfig("resource/default.res.json", "resource/");
                await this.loadTheme();
                this.loadingView = new LoadingUI();
                this.stage.addChild(this.loadingView);
            }
            console.log(groupName+"--"+"preload");
            await RES.loadGroup(groupName || "preload", 0, this.loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    private loadTheme() {
        return new Promise((resolve, reject) => {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);
        })
    }

    private textfield: egret.TextField;
    
    protected async createGameScene() {
        // let dispatcher = weedon.config(~location.hostname.indexOf("h5.") ? "s1.wc.weedon.cn" : ~location.hostname.indexOf(".hortor.") ? "gsbxs.hortor.net" : location.hostname,9601,"ws",()=>{});
        
        let dispatcher = weedon.config(
            // DEBUG_MODE ? (typeof GameGlobal !== "undefined" ? "192.168.1.10" : typeof location === "undefined" || ~location.hostname.indexOf(".h5") ? "" : location.hostname) : "",9601,"ws",()=>{},(typeof GameGlobal !== "undefined" && !DEBUG_MODE) || location.protocol == "https:" || ~location.href.indexOf("h5.") ?  "wss://xbwz.hortor.net": null
            "192.168.1.10",
            9601,
            "ws",
            ()=>{}
        );
        let openid = egret.localStorage.getItem("DUMPER#OPENID");
        if(!openid){
            openid = Math.random().toString();
            egret.localStorage.setItem("DUMPER#OPENID",openid);
        }
        
        weedon.getLoginData(async function(err,loginData){
            dispatcher.request("user.login",{loginData:loginData},(async (err)=>{
                if(err){
                    return alert(err.errmsg || "登录失败");
                }
                let userSetting = dispatcher.get("user", "userSetting") || 0;
		        MUTE_SE = ((userSetting & (1 << 1)) == 0);
                dispatcher.heartbeat(5000,()=>{});
                weedon.initChannelConfig({
                    inviter:dispatcher.get("user","_id"),
                    nickname:dispatcher.get("user","nickname"),
                    wxGame:{

                    }
                },function(state){
                    let cb = dispatcher.getCache("shareCallback");
                    cb && cb(state || 0);
                },function(state){
                    
                });
                
                 let scene = new MainScene(dispatcher);
                //  let scene = new CreateBattleScene(dispatcher);
                 this.addChild(scene);
                
                this.stage.removeChild(this.loadingView);
            }).bind(this));
        }.bind(this));
    }
}
