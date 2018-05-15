var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MUTE_SE = false;
var _sounds = {};
var Sound = (function () {
    function Sound(mode, name, loadOkCallback, ext) {
        this.playing = false;
        if (_sounds[name]) {
            this.sound = _sounds[name];
            loadOkCallback(this);
        }
        else {
            var sound_1 = new egret.Sound();
            sound_1.load((typeof GameGlobal !== "undefined" ? (DEBUG_MODE ? "http://192.168.1.63:3000/" : "https://xbwz-resource.hortor.net/") : "") + "resource/assets/sound/" + name + (ext || ".mp3") + "?v=" + version);
            sound_1.addEventListener(egret.Event.COMPLETE, function () {
                this.sound = _sounds[name] = sound_1;
                loadOkCallback(this);
            }, this);
            this.mode = mode;
        }
    }
    Sound.prototype.play = function (loop, okCallback) {
        if (this.playing || !this.sound || (this.mode && MUTE_SE)) {
            return;
        }
        this.playing = true;
        var channel = this.channel = this.sound.play(0, loop || loop === 0 ? loop : 1);
        channel.addEventListener(egret.Event.SOUND_COMPLETE, function () {
            okCallback && okCallback();
            this.playing = false;
        }, this);
    };
    Sound.prototype.stop = function () {
        if (!this.playing) {
            return;
        }
        this.playing = false;
        this.channel && this.channel.stop();
    };
    return Sound;
}());
__reflect(Sound.prototype, "Sound");
//# sourceMappingURL=Sound.js.map