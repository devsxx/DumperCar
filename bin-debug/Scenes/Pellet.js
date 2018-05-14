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
var Pellet = (function (_super) {
    __extends(Pellet, _super);
    function Pellet() {
        var _this = _super.call(this) || this;
        _this.dir = [0, 0];
        _this.isAiming = false;
        _this.isRunning = false;
        _this.speed = 500;
        _this.skinName = PelletSkin;
        return _this;
    }
    return Pellet;
}(eui.Component));
__reflect(Pellet.prototype, "Pellet");
