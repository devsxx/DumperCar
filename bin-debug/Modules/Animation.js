var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Animation = (function (_super) {
    __extends(Animation, _super);
    function Animation(name, armatureName, completeCallback, eventCallback, loadCallback) {
        var _this = _super.call(this) || this;
        _this.onTop = 1;
        _this.debug = false;
        _this.multiSound = false;
        _this.spd = 1;
        _this.slots = {};
        _this.sounds = {};
        _this.frameEvents = {};
        _this.playIndexes = {};
        _this.touchEnabled = false;
        _this.eventCallback = eventCallback;
        var assetAdapter = new AssetAdapter();
        var count = 3;
        [name + "_ske_json", name + "_tex_json", name + "_tex_png"].forEach(function (assetName) {
            assetAdapter.getAsset(assetName, function () {
                if (--count) {
                    return;
                }
                var factory = new dragonBones.EgretFactory();
                factory.parseDragonBonesData(RES.getRes(name + "_ske_json"));
                factory.parseTextureAtlasData(RES.getRes(name + "_tex_json"), RES.getRes(name + "_tex_png"));
                var display = this.display = factory.buildArmatureDisplay(armatureName || name);
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
                display.armature.eventDispatcher.addDBEventListener(dragonBones.Event.LOOP_COMPLETE, function () {
                    // if(this.animationName == "reload"){
                    //     console.log("LOOP_COMPLETE");
                    // }
                    if (this.callback) {
                        var callback = this.callback;
                        this.callback = null;
                        callback();
                    }
                    else {
                        completeCallback && completeCallback();
                    }
                }, this);
                display.armature.eventDispatcher.addDBEventListener(dragonBones.Event.BONE_FRAME_EVENT, this.frameListener, this);
                display.armature.eventDispatcher.addDBEventListener(dragonBones.SoundEvent.SOUND_EVENT, this.soundListener, this);
                if (this.animationName) {
                    display.animation.play(this.animationName, this.loop);
                }
                for (var name_1 in this.slots) {
                    var slot = display.armature.getSlot(name_1);
                    var origin = slot.getDisplay();
                    this.slots[name_1].x = origin.x;
                    this.slots[name_1].y = origin.y;
                    slot.setDisplay(this.slots[name_1]);
                    delete this.slots[name_1];
                }
                display.animation.timeScale = this.spd;
                loadCallback && loadCallback(display);
            }, this);
        }.bind(_this));
        return _this;
    }
    Animation.prototype.frameListener = function (evt) {
        if (this.frameEvents[evt.frameLabel]) {
            this.frameEvents[evt.frameLabel](evt);
            // delete this.frameEvents[evt.frameLabel];
        }
        else {
            this.eventCallback && this.eventCallback(evt.frameLabel);
        }
    };
    Animation.prototype.soundListener = function (evt) {
        // if(!(weedon.get("configState") & (1 << 2))){
        //     return;
        // }
        if (MUTE_SE) {
            return;
        }
        if (this.sounds[evt.frameLabel] && !this.multiSound) {
            this.sounds[evt.frameLabel].play(1);
        }
        else {
            this.playIndexes[evt.frameLabel] = this.playIndexes[evt.frameLabel] || 0;
            this.sounds[evt.frameLabel] = new Sound(1, evt.frameLabel.split(".")[0] + (this.playIndexes[evt.frameLabel] ? "_" : ""), function (sound) {
                sound.play(1, function () {
                    sound.stop();
                });
            });
            this.playIndexes[evt.frameLabel] = 1 - this.playIndexes[evt.frameLabel];
        }
    };
    Animation.prototype.clearListeners = function () {
        this.display.armature.eventDispatcher.removeDBEventListener(dragonBones.Event.BONE_FRAME_EVENT, this.frameListener, this);
        this.display.armature.eventDispatcher.removeDBEventListener(dragonBones.SoundEvent.SOUND_EVENT, this.soundListener, this);
    };
    Animation.prototype.getSlotDisplay = function (name) {
        return this.display ? this.display.armature.getSlot(name).getDisplay() : null;
    };
    Animation.prototype.play = function (animationName, loop, callback) {
        if (this.debug) {
            console.log(animationName);
        }
        this.animationName = animationName;
        this.loop = loop;
        this.display && this.display.animation.play(animationName, loop);
        this.callback = callback || this.callback;
    };
    Animation.prototype.setSlot = function (name, display) {
        if (this.display) {
            var origin = this.display.armature.getSlot(name).getDisplay();
            if (!origin) {
                return;
            }
            display.x = origin.x;
            display.y = origin.y;
            display.rotation = origin.rotation;
            this.display.armature.getSlot(name).setDisplay(display);
        }
        else {
            this.slots[name] = display;
        }
    };
    Animation.prototype.setEvent = function (name, callback) {
        this.frameEvents[name] = callback;
    };
    Animation.prototype.setSpeed = function (spd) {
        if (this.display) {
            this.display.animation.timeScale = spd;
        }
        else {
            this.spd = spd;
        }
    };
    Animation.prototype.hitCheck = function (globalX, globalY, slotName) {
        var point = this.display.globalToLocal(globalX, globalY);
        if (slotName) {
            var slot = this.display.armature.getSlot(slotName);
            return slot ? slot.containsPoint(point.x, point.y) : false;
        }
        else {
            return !!this.display.armature.containsPoint(point.x, point.y);
        }
    };
    Object.defineProperty(Animation.prototype, "_factor", {
        get: function () {
            return 0;
        },
        set: function (value) {
            this.x = (1 - value) * (1 - value) * this.originX + 2 * value * (1 - value) * this.terminalX + value * value * this.targetX;
            this.y = (1 - value) * (1 - value) * this.originY + 2 * value * (1 - value) * this.terminalY + value * value * this.targetY;
        },
        enumerable: true,
        configurable: true
    });
    Animation.prototype.bezierTo = function (terminalX, terminalY, targetX, targetY, duration, callback) {
        this.originX = this.x;
        this.originY = this.y;
        this.terminalX = terminalX;
        this.terminalY = terminalY;
        this.targetX = targetX;
        this.targetY = targetY;
        egret.Tween.get(this).to({ _factor: 1 }, duration).call(callback);
    };
    return Animation;
}(eui.Group));
__reflect(Animation.prototype, "Animation");
//# sourceMappingURL=Animation.js.map