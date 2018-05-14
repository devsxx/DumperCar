class Btn extends egret.DisplayObjectContainer {
    private btnNode: any;
    private isEnabled = true;
    private canceled = false;
    public noBouncing = false;
    private callback: () => void;
    private originScaleX: number;
    private originScaleY: number;
    private redDot: egret.Bitmap;
    private touchNode: eui.Group;

    private changeSizeOnTap: boolean = false;

    public constructor(btnNode: any, callback: () => void, redDot?: any, changeSizeOnTap?: boolean) {
        super();
        this.changeSizeOnTap = changeSizeOnTap || false;
        this.btnNode = btnNode;
        this.touchNode = new eui.Group();
        this.touchNode.touchThrough = false;
        btnNode.parent.addChildAt(this.touchNode, btnNode.parent.getChildIndex(btnNode) + 1);
        btnNode.pixelHitTest = false;
        this.touchNode.x = btnNode.x;
        this.touchNode.y = btnNode.y;
        this.touchNode.width = btnNode.width;
        this.touchNode.height = btnNode.height;
        this.touchNode.anchorOffsetX = btnNode.anchorOffsetX;
        this.touchNode.anchorOffsetY = btnNode.anchorOffsetY;

        this.callback = callback;
        this.originScaleX = btnNode.scaleX;
        this.originScaleY = btnNode.scaleY;
        [this.btnNode, this.touchNode].forEach(function (node) {
            node.touchEnabled = true;
            !this.changeSizeOnTap && (node.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegan, this));
            this.changeSizeOnTap && (node.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchBegan, this));
            // btnNode.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.touchMoved,this);
            // node.addEventListener(egret.TouchEvent.TOUCH_END,this.touchEnded,this);
        }.bind(this));


        this.showRedDot(redDot);
    }

    public showRedDot(position: any, noUpdatePos?: boolean): void {
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
                this.redDot = createBitmap("common_hong_png", 0.5, 0.5, 0, 0, 1, 1, function (bmp: egret.Bitmap) {
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
    }

    public setOriginScale(scaleX: number, scaleY: number): void {
        this.originScaleX = scaleX;
        this.originScaleY = scaleY;
    }

    private touchBegan(evt: egret.TouchEvent): void {
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
    }

    private touchMoved(evt: egret.TouchEvent): void {
        if (!this.isEnabled) {
            return;
        }
        this.canceled = true;
        egret.Tween.removeTweens(this.btnNode);
        this.btnNode.scaleX = this.originScaleX;
        this.btnNode.scaleY = this.originScaleY;
        evt.stopPropagation();
    }

    private touchEnded(evt: egret.TouchEvent): void {
        if (!this.isEnabled) {
            return;
        }
        !this.canceled && this.callback();
        this.canceled = false;
        evt.stopPropagation();
    }

    public setEnabled(isEnabled: boolean, noFilter?: boolean): void {
        this.isEnabled = isEnabled;
        this.btnNode.filters = isEnabled || noFilter ? [] : [new egret.ColorMatrixFilter([0.4, 0.7, 0, 0, 0, 0.4, 0.7, 0, 0, 0, 0.4, 0.7, 0, 0, 0, 0, 0, 0, 1, 0])];
    }

    public trigger(): void {
        this.callback();
    }
}
