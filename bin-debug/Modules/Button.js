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
var Btn = (function (_super) {
    __extends(Btn, _super);
    function Btn(btnNode, callback, redDot, changeSizeOnTap) {
        var _this = _super.call(this) || this;
        _this.isEnabled = true;
        _this.canceled = false;
        _this.noBouncing = false;
        _this.changeSizeOnTap = false;
        _this.changeSizeOnTap = changeSizeOnTap || false;
        _this.btnNode = btnNode;
        _this.touchNode = new eui.Group();
        _this.touchNode.touchThrough = false;
        btnNode.parent.addChildAt(_this.touchNode, btnNode.parent.getChildIndex(btnNode) + 1);
        btnNode.pixelHitTest = false;
        _this.touchNode.x = btnNode.x;
        _this.touchNode.y = btnNode.y;
        _this.touchNode.width = btnNode.width;
        _this.touchNode.height = btnNode.height;
        _this.touchNode.anchorOffsetX = btnNode.anchorOffsetX;
        _this.touchNode.anchorOffsetY = btnNode.anchorOffsetY;
        _this.callback = callback;
        _this.originScaleX = btnNode.scaleX;
        _this.originScaleY = btnNode.scaleY;
        [_this.btnNode, _this.touchNode].forEach(function (node) {
            node.touchEnabled = true;
            !this.changeSizeOnTap && (node.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegan, this));
            this.changeSizeOnTap && (node.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchBegan, this));
            // btnNode.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.touchMoved,this);
            // node.addEventListener(egret.TouchEvent.TOUCH_END,this.touchEnded,this);
        }.bind(_this));
        _this.showRedDot(redDot);
        return _this;
    }
    Btn.prototype.showRedDot = function (position, noUpdatePos) {
        this.touchNode.visible = this.btnNode.visible;
        this.touchNode.x = this.btnNode.x;
        this.touchNode.y = this.btnNode.y;
        if (!position) {
            if (this.redDot) {
                this.redDot.visible = false;
            }
            return;
        }
        if (!this.redDot) {
            if (position) {
                this.redDot = createBitmap("common_hong_png", 0.5, 0.5, 0, 0, 1, 1, function (bmp) {
                    bmp.x = this.btnNode.x + position[0];
                    bmp.y = this.btnNode.y + position[1];
                    egret.Tween.get(bmp, { loop: true }).to({ y: this.btnNode.y + position[1] - 8.5 }, 200, egret.Ease.sineIn).to({ y: this.btnNode.y + position[1] }, 500, egret.Ease.bounceOut).wait(3000);
                }.bind(this));
                this.btnNode.parent.addChildAt(this.redDot, this.btnNode.parent.getChildIndex(this.btnNode) + 1);
            }
        }
        else {
            this.redDot.visible = true;
            if (!noUpdatePos) {
                this.redDot.x = this.btnNode.x + position[0];
                this.redDot.y = this.btnNode.y + position[1];
            }
        }
    };
    Btn.prototype.setOriginScale = function (scaleX, scaleY) {
        this.originScaleX = scaleX;
        this.originScaleY = scaleY;
    };
    Btn.prototype.touchBegan = function (evt) {
        if (!this.isEnabled || this.canceled) {
            this.canceled = false;
            return;
        }
        if (!this.noBouncing) {
            egret.Tween.removeTweens(this.btnNode);
            this.btnNode.scaleX = this.originScaleX;
            this.btnNode.scaleY = this.originScaleY;
            egret.Tween.get(this.btnNode).to({ scaleX: 0.7 * this.originScaleX, scaleY: 0.7 * this.originScaleY }, 100).to({ scaleX: 1 * this.originScaleX, scaleY: 1 * this.originScaleY }, 100).call(function () {
                this.callback();
            }, this);
        }
        else {
            this.callback();
        }
        evt.stopPropagation();
    };
    Btn.prototype.touchMoved = function (evt) {
        if (!this.isEnabled) {
            return;
        }
        this.canceled = true;
        egret.Tween.removeTweens(this.btnNode);
        this.btnNode.scaleX = this.originScaleX;
        this.btnNode.scaleY = this.originScaleY;
        evt.stopPropagation();
    };
    Btn.prototype.touchEnded = function (evt) {
        if (!this.isEnabled) {
            return;
        }
        !this.canceled && this.callback();
        this.canceled = false;
        evt.stopPropagation();
    };
    Btn.prototype.setEnabled = function (isEnabled, noFilter) {
        this.isEnabled = isEnabled;
        this.btnNode.filters = isEnabled || noFilter ? [] : [new egret.ColorMatrixFilter([0.4, 0.7, 0, 0, 0, 0.4, 0.7, 0, 0, 0, 0.4, 0.7, 0, 0, 0, 0, 0, 0, 1, 0])];
    };
    Btn.prototype.trigger = function () {
        this.callback();
    };
    return Btn;
}(egret.DisplayObjectContainer));
__reflect(Btn.prototype, "Btn");
//# sourceMappingURL=Button.js.map