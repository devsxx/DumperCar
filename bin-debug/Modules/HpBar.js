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
var HpBar = (function (_super) {
    __extends(HpBar, _super);
    function HpBar(bgName, normalName, plusName, minusName) {
        var _this = _super.call(this) || this;
        _this.loadIndex = 0;
        _this.imgNames = [];
        _this.bars = [];
        _this.lastUpdate = 0;
        _this.imgNames = [bgName, normalName, plusName, minusName];
        _this.loadImg();
        egret.startTick(_this.update, _this);
        return _this;
    }
    HpBar.prototype.loadImg = function () {
        if (this.imgNames[this.loadIndex]) {
            createBitmap(this.imgNames[this.loadIndex], 0.5, 0.5, 0, 0, 1, 1, function (bmp) {
                this.addChild(bmp);
                bmp.visible = this.loadIndex < 2;
                this.loadIndex && this.bars.push(bmp);
                ++this.loadIndex;
                this.loadImg();
            }.bind(this));
        }
    };
    HpBar.prototype.showTag = function (size, color, stroke, strokeColor) {
        if (!this.tag) {
            this.tag = new egret.TextField();
            this.addChild(this.tag);
        }
        this.tag.text = this.showValue + "/" + this.maxValue;
        this.tag.size = size;
        this.tag.textColor = color;
        if (stroke) {
            this.tag.stroke = stroke;
            this.tag.strokeColor = strokeColor;
        }
        this.tag.anchorOffsetX = this.tag.width / 2;
        this.tag.anchorOffsetY = this.tag.height / 2;
    };
    HpBar.prototype.setMaxValue = function (val) {
        this.maxValue = val;
        if (this.currentValue) {
            this.setValue(Math.min(this.maxValue, this.currentValue));
        }
        else {
            this.currentValue = this.showValue = this.maxValue;
        }
    };
    HpBar.prototype.setValue = function (val) {
        if (val < this.showValue) {
            if (this.bars[2]) {
                this.bars[2].visible = true;
                this.bars[2].mask = new egret.Rectangle(val / this.maxValue * this.bars[2].width, 0, (this.showValue - val) / this.maxValue * this.bars[2].width, this.bars[2].height);
            }
        }
        else {
            if (this.bars[1]) {
                this.bars[1].visible = true;
                this.bars[1].mask = new egret.Rectangle(this.showValue / this.maxValue * this.bars[2].width, 0, (val - this.showValue) / this.maxValue * this.bars[2].width, this.bars[2].height);
            }
        }
        this.currentValue = Math.max(0, Math.min(val, this.maxValue));
        if (this.bars[0]) {
            this.bars[0].mask = new egret.Rectangle(0, 0, this.currentValue / this.maxValue * this.bars[0].width, this.bars[0].height);
        }
        this.lastUpdate = weedon.time;
    };
    HpBar.prototype.update = function () {
        if (this.showValue == this.currentValue) {
            this.bars[1] && (this.bars[1].visible = false);
            this.bars[2] && (this.bars[2].visible = false);
            return false;
        }
        var now = weedon.time;
        if (now - this.lastUpdate > 0) {
            if (this.showValue < this.currentValue) {
                this.showValue = Math.min(this.currentValue, this.showValue + 0.01 * (now - this.lastUpdate - 0)) >> 0;
                if (this.bars[1]) {
                    this.bars[1].mask = new egret.Rectangle(this.showValue / this.maxValue * this.bars[2].width, 0, (this.currentValue - this.showValue) / this.maxValue * this.bars[2].width, this.bars[2].height);
                }
            }
            else {
                this.showValue = Math.max(this.currentValue, this.showValue - 0.01 * (now - this.lastUpdate - 0)) >> 0;
                if (this.bars[1]) {
                    this.bars[2].mask = new egret.Rectangle(this.currentValue / this.maxValue * this.bars[2].width, 0, (this.showValue - this.currentValue) / this.maxValue * this.bars[2].width, this.bars[2].height);
                }
            }
        }
        if (this.tag) {
            this.tag.text = this.showValue + "/" + this.maxValue;
            this.tag.anchorOffsetX = this.tag.width / 2;
            this.tag.anchorOffsetY = this.tag.height / 2;
        }
        return true;
    };
    return HpBar;
}(egret.DisplayObjectContainer));
__reflect(HpBar.prototype, "HpBar");
