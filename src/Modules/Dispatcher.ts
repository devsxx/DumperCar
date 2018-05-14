class Dispatcher{
    private _dispatcher;
    public constructor(dispatcher){
        this._dispatcher = dispatcher;
    }

    public heartbeat(interval:number,callback:()=>void):void{
        this._dispatcher.heartbeat(interval,callback);
    }

    public request(cmd:string,data:{},callback?:(err)=>void,noWait?:boolean):void{
        this._dispatcher.request(cmd,data,callback,noWait);
    }

    public get(...args):any{
        return this._dispatcher.get.apply(this._dispatcher,args);
    }

    public getOld(...args):any{
        return this._dispatcher.getOld.apply(this._dispatcher,args);
    }

    public getNew(...args):any{
        return this._dispatcher.getNew.apply(this._dispatcher,args);
    }

    public safeGetNew(...args):any{
        return this._dispatcher.safeGetNew.apply(this._dispatcher,args);
    }

    public setCache(key:string,value:any):void{
        this._dispatcher.setCache(key,value);
    }

    public getCache(key:string):any{
        return this._dispatcher.getCache(key);
    }

    public clearCache():void{
        this._dispatcher.clearCache();
    }

    public set waitFunc(wait:(wait?:boolean)=>void){
        this._dispatcher.waitFunc = wait;
    }

    public setOverrideKey(key:string):void{
        this._dispatcher.setOverrideKey(key);
    }

    public setPushCallback(key:string,callback:()=>void):void{
        this._dispatcher.setPushCallback(key,callback);
    }
}