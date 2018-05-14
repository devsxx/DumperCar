class Animation extends eui.Group{
    public onTop = 1;
    public aniData:any;
    public debug:boolean = false;

    public multiSound = false;
    private display:dragonBones.EgretArmatureDisplay;
    private animationName:string;
    private loop:number;
    private spd = 1;
    private slots = {};
    private sounds = {};
    private eventCallback:(frameLabel?:string)=>void;
    private callback:(frameLabel?:string)=>void;
    private frameEvents = {};

    private playIndexes = {};

    public constructor(name:string,armatureName?:string,completeCallback?:()=>void,eventCallback?:(frameLabel?:string)=>void,loadCallback?:(display:dragonBones.EgretArmatureDisplay)=>void){
        super();
        this.touchEnabled = false;
        this.eventCallback = eventCallback;
        let assetAdapter = new AssetAdapter();
        let count = 3;
        [name+"_ske_json",name+"_tex_json",name+"_tex_png"].forEach(function(assetName){
            assetAdapter.getAsset(assetName,function(){
                if(--count){
                    return;
                }
                let factory = new dragonBones.EgretFactory();
                factory.parseDragonBonesData(RES.getRes(name+"_ske_json"));
                factory.parseTextureAtlasData(RES.getRes(name+"_tex_json"), RES.getRes(name+"_tex_png"));

                let display = this.display = factory.buildArmatureDisplay(armatureName || name);
                this.addChild(display);

                display.touchEnabled = false;
                
                // display.armature.addEventListener(dragonBones.Event.COMPLETE,function(){
                //     if(this.animationName == "reload"){
                //         console.log("COMPLETE");
                //     }
                //     if(this.callback){
                //         let callback = this.callback;
                //         this.callback = null;
                //         callback();
                //     }
                //     else{
                //         completeCallback && completeCallback();
                //     }
                // },this);
                
                display.armature.eventDispatcher.addDBEventListener(dragonBones.Event.LOOP_COMPLETE,function(){
                    // if(this.animationName == "reload"){
                    //     console.log("LOOP_COMPLETE");
                    // }
                    if(this.callback){
                        let callback = this.callback;
                        this.callback = null;
                        callback();
                    }
                    else{
                        completeCallback && completeCallback();
                    }
                },this);

                display.armature.eventDispatcher.addDBEventListener(dragonBones.Event.BONE_FRAME_EVENT,this.frameListener,this);

                display.armature.eventDispatcher.addDBEventListener(dragonBones.SoundEvent.SOUND_EVENT,this.soundListener,this);

                if(this.animationName){
                    display.animation.play(this.animationName,this.loop);
                }
                
                for(let name in this.slots){
                    let slot = display.armature.getSlot(name);
                    let origin = slot.getDisplay();
                    this.slots[name].x = origin.x;
                    this.slots[name].y = origin.y;
                    slot.setDisplay(this.slots[name]);
                    delete this.slots[name];
                }
                display.animation.timeScale = this.spd;
                loadCallback && loadCallback(display);
            },this);
        }.bind(this));
    }

    private frameListener(evt:dragonBones.Event):void{
        if(this.frameEvents[evt.frameLabel]){
            this.frameEvents[evt.frameLabel](evt);
            // delete this.frameEvents[evt.frameLabel];
        }
        else{
            this.eventCallback && this.eventCallback(evt.frameLabel);
        }
    }

    private soundListener(evt:dragonBones.SoundEvent):void{
        // if(!(weedon.get("configState") & (1 << 2))){
        //     return;
        // }
        if(MUTE_SE){
            return;
        }

        if(this.sounds[evt.frameLabel] && !this.multiSound){
            this.sounds[evt.frameLabel].play(1);
        }
        else{
            this.playIndexes[evt.frameLabel] = this.playIndexes[evt.frameLabel] || 0;           
            this.sounds[evt.frameLabel] = new Sound(1,evt.frameLabel.split(".")[0] + (this.playIndexes[evt.frameLabel] ? "_" : ""),function(sound){
                sound.play(1,function(){
                    sound.stop();
                });
            });
            this.playIndexes[evt.frameLabel] = 1 - this.playIndexes[evt.frameLabel];
        }
    }

    public clearListeners():void{
        this.display.armature.eventDispatcher.removeDBEventListener(dragonBones.Event.BONE_FRAME_EVENT,this.frameListener,this);
        this.display.armature.eventDispatcher.removeDBEventListener(dragonBones.SoundEvent.SOUND_EVENT,this.soundListener,this);
    }

    public getSlotDisplay(name:string):any{
        return this.display ? this.display.armature.getSlot(name).getDisplay() : null;
    }
    
    public play(animationName:string,loop:number,callback?:()=>void):void{
        if(this.debug){
            console.log(animationName);
        }
        this.animationName = animationName;
        this.loop = loop;
        this.display && this.display.animation.play(animationName,loop);
        this.callback = callback || this.callback;
    }
    
    public setSlot(name:string,display:any):void{
        if(this.display){
            let origin = this.display.armature.getSlot(name).getDisplay();
            if(!origin){
                return;
            }
            display.x = origin.x;
            display.y = origin.y;
            display.rotation = origin.rotation;
            this.display.armature.getSlot(name).setDisplay(display);
        }
        else{
            this.slots[name] = display;
        }
    }

    public setEvent(name:string,callback:(evt?:egret.Event)=>void){
        this.frameEvents[name] = callback;
    }

    public setSpeed(spd:number):void{
        if(this.display){
            this.display.animation.timeScale = spd;
        }
        else{
            this.spd = spd;
        }
    }

    public hitCheck(globalX:number,globalY:number,slotName?:string):boolean{
        let point = this.display.globalToLocal(globalX,globalY);
        if(slotName){
            let slot = this.display.armature.getSlot(slotName);
            return slot ? slot.containsPoint(point.x,point.y) : false;
        }
        else{
            return !!this.display.armature.containsPoint(point.x,point.y);
        }
    }

    private originX:number;
    private originY:number;
    private terminalX:number;
    private terminalY:number;
    private targetX:number;
    private targetY:number;
    private bezierCallback:()=>void;

    public get _factor():number{
        return 0;
    }

    public set _factor(value:number){
        this.x = (1 - value) * (1 - value) * this.originX + 2 * value * (1 - value) * this.terminalX + value * value * this.targetX;
        this.y = (1 - value) * (1 - value) * this.originY + 2 * value * (1 - value) * this.terminalY + value * value * this.targetY;
    }

    public bezierTo(terminalX:number,terminalY:number,targetX:number,targetY:number,duration:number,callback:()=>void):void{
        this.originX = this.x;
        this.originY = this.y;
        this.terminalX = terminalX;
        this.terminalY = terminalY;
        this.targetX = targetX;
        this.targetY = targetY;
        egret.Tween.get(this).to({_factor:1},duration).call(callback);
    }
}