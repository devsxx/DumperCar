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
var ItemInField = (function () {
    function ItemInField() {
    }
    ItemInField.ITEM_DUMPERCAR = 0;
    ItemInField.ITEM_COIN = 1;
    ItemInField.ITEM_BRICK = 2;
    ItemInField.ITEM_BOMB = 3;
    ItemInField.ITEM_SPEEDUP = 4;
    ItemInField.ITEM_SPEEDDOWN = 5;
    return ItemInField;
}());
__reflect(ItemInField.prototype, "ItemInField");
var DumperCar = (function (_super) {
    __extends(DumperCar, _super);
    function DumperCar() {
        var _this = _super.call(this) || this;
        _this.type = 0;
        _this.skinName = PelletSkin;
        return _this;
    }
    return DumperCar;
}(eui.Component));
__reflect(DumperCar.prototype, "DumperCar");
var Coin = (function (_super) {
    __extends(Coin, _super);
    function Coin() {
        var _this = _super.call(this) || this;
        _this.type = 1;
        _this.skinName = CoinSkin;
        return _this;
    }
    return Coin;
}(eui.Component));
__reflect(Coin.prototype, "Coin");
var Brick = (function (_super) {
    __extends(Brick, _super);
    function Brick() {
        var _this = _super.call(this) || this;
        _this.type = 2;
        _this.skinName = BrickSkin;
        return _this;
    }
    return Brick;
}(eui.Component));
__reflect(Brick.prototype, "Brick");
var Bomb = (function (_super) {
    __extends(Bomb, _super);
    function Bomb() {
        var _this = _super.call(this) || this;
        _this.type = 3;
        _this.skinName = BombSkin;
        return _this;
    }
    return Bomb;
}(eui.Component));
__reflect(Bomb.prototype, "Bomb");
var SpeedUpArea = (function (_super) {
    __extends(SpeedUpArea, _super);
    function SpeedUpArea() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 4;
        return _this;
    }
    return SpeedUpArea;
}(eui.Component));
__reflect(SpeedUpArea.prototype, "SpeedUpArea");
var SpeedDownArea = (function (_super) {
    __extends(SpeedDownArea, _super);
    function SpeedDownArea() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 5;
        return _this;
    }
    return SpeedDownArea;
}(eui.Component));
__reflect(SpeedDownArea.prototype, "SpeedDownArea");
//# sourceMappingURL=ItemInField.js.map