function createBitmap(textureName:string,anchorX?:number,anchorY?:number,x?:number,y?:number,scaleX?:number,scaleY?:number,callback?:(bitmap:egret.Bitmap)=>void):egret.Bitmap{
    let bitmap = new egret.Bitmap();
    let assetAdapter = new AssetAdapter();
    assetAdapter.getAsset(textureName,function(data){
        bitmap.texture = RES.getRes(textureName);
        bitmap.anchorOffsetX = anchorX > 2 ? anchorX : (anchorX || 0) * bitmap.width;
        bitmap.anchorOffsetY = anchorY > 2 ? anchorY : (anchorY || 0) * bitmap.height;
        bitmap.x = x || 0;
        bitmap.y = y || 0;
        bitmap.scaleX = scaleX || 1;
        bitmap.scaleY = scaleY || 1;
        callback && callback(bitmap);
    },this);
    return bitmap;
}

function setTexture(bitmap:any,textureName:string,anchorX?:number,anchorY?:number,scaleX?:number,scaleY?:number,callback?:()=>void):void{
    anchorX = anchorX || bitmap.anchorOffsetX / bitmap.width;
    anchorY = anchorY || bitmap.anchorOffsetY / bitmap.height;
    
    bitmap.scaleX = scaleX === undefined ? 1 : scaleX;
    bitmap.scaleY = scaleY === undefined ? 1 : scaleY;
    
    let assetAdapter = new AssetAdapter();
    bitmap.texture = null;
    assetAdapter.getAsset(textureName,function(data){
        bitmap.texture = RES.getRes(textureName);
        bitmap.anchorOffsetX = (anchorX || 0) * bitmap.width;
        bitmap.anchorOffsetY = (anchorY || 0) * bitmap.height;
        callback && callback();
    },this);
}

function getNumberString(n:any):string{
    let _base:number;
    let tailIdx;
    if(+n === 0 || +n){
        let base:string = `${Math.floor(n)}`;
        if(n < 1000){
            return base;
        }
        let digit:number = Math.floor(Math.log(n)/Math.log(10) + 0.000001);
        if(~base.indexOf("e")){
            _base = +base.split("e")[0] * Math.pow(10,digit % 3);
        }
        else{
            _base = +base.slice(0,digit % 3 + 3) / 100;
        }
        tailIdx = digit / 3 >> 0;
    }
    else{
        n = n.split("exp");
        if(+n[1] < 3){
            return Math.round(n[0] * Math.pow(10,n[1])) + "";
        }
        _base = n[0] * Math.pow(10,n[1] % 3);
        while(_base > 1000){
            _base /= 1000;
            n[1] = +n[1] + 3;
        }
        tailIdx = n[1] / 3 >> 0;
    }
    var tail;
    if(tailIdx < 4){
        tail = ["","K","M","B"][tailIdx];
    }
    else{
        var first = (tailIdx - 4) / 26 >> 0;

        var grade = first / 26 >> 0;

        var second = (tailIdx - 4) % 26;
        var a = "abcdefghijklmnopqrstuvwxyz";
        var b = a.toUpperCase();

        tail = (grade < 2 ? a : b)[first % 26] + (grade % 2 ? b : a)[second];
    }
    return _base.toFixed(_base < 10 ? 2 : _base < 100 ? 1 : 0) + tail;
}

let avatars = {};

function setAvatar(target:eui.Image,avatarIndex:number,url?:string,callback?:()=>void):void{
    if(!avatarIndex){
        target.texture = null;
        callback && callback();
        return;
    }
    let width = target.width;
    let height = target.height;
    url = url || (typeof GameGlobal === "undefined" && ~location.hostname.indexOf("h5.") ? "https://xbwz-gm.hortor.net/avatar/" : DEBUG_MODE ? "http://192.168.1.63:9602/avatar/" : "https://xbwz-gm.hortor.net/avatar/")+avatarIndex+"/avatar.jpg";
    if(avatars[avatarIndex]){
        let x = new egret.Texture();
        x.bitmapData = avatars[avatarIndex];
        target.texture = x;
        target.width = width;
        target.height = height;
        callback && callback();
    }
    else{
        let loader = new egret.ImageLoader();
        loader.crossOrigin = "anonymous";
        loader.once(egret.Event.COMPLETE, function(evt:egret.Event){
            let x = new egret.Texture();
            avatars[avatarIndex] = x.bitmapData = loader.data;
            target.texture = x;
            target.width = width;
            target.height = height;
            callback && callback();
        }, this);
        loader.load(url);
    }
}

let qrcodes = {};

function setQRCode(target:eui.Image,inviter:number,callback:()=>void):void{
    let width = target.width;
    let height = target.height;
    let url = (typeof GameGlobal === "undefined" && ~location.hostname.indexOf("h5game.") ? "http://s1.wc.weedon.cn:9602/qrcode/" : "https://gsbxs.hortor.net:9602/qrcode/") + inviter;
    if(qrcodes[inviter]){
        // target.$bitmapData = qrcodes[inviter];
        target.width = width;
        target.height = height;
        callback();
    }
    else{
        let loader = new egret.ImageLoader();
        loader.crossOrigin = "anonymous";
        loader.once(egret.Event.COMPLETE, function(evt:egret.Event){
            // qrcodes[inviter] = target.$bitmapData = loader.data;
            target.width = width;
            target.height = height;
            callback();
        }, this);
        loader.load(url);
    }
}