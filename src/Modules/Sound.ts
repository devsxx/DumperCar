var MUTE_SE = false;
var _sounds = {};
class Sound{
    public playing = false;
    private sound:egret.Sound;
    private channel:egret.SoundChannel;
    private mode:number;
    public constructor(mode:number,name:string,loadOkCallback:(sound:Sound)=>void,ext?:string){
        if(_sounds[name]){
            this.sound = _sounds[name];
            loadOkCallback(this);
        }
        else{
            let sound = new egret.Sound();
            sound.load((typeof GameGlobal !== "undefined" ? (DEBUG_MODE ? "http://192.168.1.63:3000/" : "https://xbwz-resource.hortor.net/") : "") + "resource/assets/sound/"+name+(ext || ".mp3")+"?v="+version);
            sound.addEventListener(egret.Event.COMPLETE, function(){
                this.sound = _sounds[name] = sound;
                loadOkCallback(this);
            }, this);
            this.mode = mode;
        }
    }

    public play(loop?:number,okCallback?:()=>void):void{
        if(this.playing || !this.sound || (this.mode && MUTE_SE)){
            return;
        }
        this.playing = true;
        let channel = this.channel = this.sound.play(0,loop || loop === 0 ? loop : 1);
        channel.addEventListener(egret.Event.SOUND_COMPLETE,function(){
            okCallback && okCallback();
            this.playing = false;
        },this);
    }
    
    public stop():void{
        if(!this.playing){
            return;
        }
        this.playing = false;
        this.channel && this.channel.stop();
    }
}