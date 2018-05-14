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
var MainScene = (function (_super) {
    __extends(MainScene, _super);
    function MainScene(dispatcher) {
        var _this = _super.call(this) || this;
        _this.ignoreNextResize = false;
        //control 
        _this.inControlDir = false;
        _this.battleHeight = 1000;
        _this.isLeavingItem = false;
        _this.dispatcher = dispatcher;
        _this.skinName = MainSceneSkin;
        return _this;
    }
    MainScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.refreshUi();
        egret.startTick(this.update.bind(this), this);
    };
    MainScene.prototype.refreshUi = function () {
        var _this = this;
        // bg
        var shp = new egret.Shape();
        shp.graphics.lineStyle(2, 0xffffff);
        shp.graphics.drawRect(0, 0, 580, 1000);
        this.baseGroup.addChild(shp);
        this.battleStartY = 0;
        var pellet = this.pellet = new Pellet();
        this.baseGroup.addChild(pellet);
        pellet.x = 580 / 2;
        pellet.y = 0 + 1000 - pellet.height / 2;
        var battle = {
            info: [
                [0, 20, 20, 0],
                [0, 120, 120, 0],
                [0, 220, 120, 0],
                [1, 140, 140, 0],
                [2, 500, 80, 60],
                [2, 100, 600, 20]
            ],
            coinCount: 1,
            eatCount: 0,
            step: 0,
            maxStep: 20,
        };
        this.itemsShow = [];
        battle.info.forEach(function (item) {
            var type = item[0];
            var itemShow = type == 0 ? new Coin() : type == 1 ? new Bomb() : type == 2 ? new Brick() : null;
            if (!itemShow) {
                return;
            }
            _this.baseGroup.addChild(itemShow);
            itemShow.x = item[1];
            itemShow.y = item[2] + 50;
            itemShow.rotation = item[3];
            _this.itemsShow.push(itemShow);
        });
        // this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, (e, a) => {
        //     if (this.pellet.isAiming || this.pellet.isRunning) {
        //         return;
        //     }
        //     let touchX = e.stageX;
        //     let touchY = e.stageY;
        //     let globalPellet = this.pellet.localToGlobal(20, 20);
        //     let lToPellet = Math.pow(Math.pow(touchX - globalPellet.x, 2) + Math.pow(touchY - globalPellet.y, 2), 0.5);
        //     if (lToPellet > 20 || lToPellet == 0) {
        //         return;
        //     }
        //     this.pellet.isAiming = true;
        // }, this);
        // this.addEventListener(egret.TouchEvent.TOUCH_MOVE, (e, a) => {
        //     if (!this.pellet.isAiming || this.pellet.isRunning) {
        //         return;
        //     }
        //     let touchX = e.stageX;
        //     let touchY = e.stageY;
        //     // console.log("moving" + touchX + "---" + touchY);
        // }, this);
        // this.addEventListener(egret.TouchEvent.TOUCH_END, (e, a) => {
        //     if (!this.pellet.isAiming || this.pellet.isRunning) {
        //         return;
        //     }
        //     this.pellet.isAiming = false;
        //     let touchX = e.stageX;
        //     let touchY = e.stageY;
        //     let globalPellet = this.pellet.localToGlobal(20, 20);
        //     let lToPellet = Math.pow(Math.pow(touchX - globalPellet.x, 2) + Math.pow(touchY - globalPellet.y, 2), 0.5);
        //     if (lToPellet == 0) {
        //         return;
        //     }
        //     if (touchY <= globalPellet.y) {
        //         console.log(touchY + "---" + globalPellet.y);
        //     }
        //     this.pellet.dir = [globalPellet.x - touchX, globalPellet.y - touchY];
        //     this.pellet.isRunning = true;
        // }, this);
        this.btn_control.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e, a) {
            _this.inControlDir = true;
        }, this);
        this.btn_control.addEventListener(egret.TouchEvent.TOUCH_MOVE, function (e, a) {
            if (!_this.inControlDir) {
                return;
            }
            var touchX = e.stageX;
            var touchY = e.stageY;
            var controlGlobalCenter = _this.btn_control.localToGlobal(_this.btn_control.width / 2, _this.btn_control.height / 2);
            if (formula.getDistancePP(touchX, touchY, controlGlobalCenter.x, controlGlobalCenter.y) > _this.btn_control.width / 2) {
                return;
            }
            var tan = (touchX - controlGlobalCenter.x) / (touchY - controlGlobalCenter.y);
            // xxxx
        }, this);
        this.btn_control.addEventListener(egret.TouchEvent.TOUCH_END, function (e, a) { }, this);
    };
    MainScene.prototype.checkCollision = function (pellet) {
        if (pellet.x + pellet.width / 2 > 580 || pellet.x - pellet.width / 2 < 0) {
            pellet.dir[0] = -pellet.dir[0];
        }
        if (pellet.y - pellet.height / 2 > 1050 || pellet.y - pellet.height / 2 < 50) {
            pellet.dir[1] = -pellet.dir[1];
        }
        for (var i = 0; i < this.itemsShow.length; i++) {
            var item = this.itemsShow[i];
            if (item instanceof Coin || item instanceof Bomb) {
                var distance = Math.pow(Math.pow(item.x - pellet.x, 2) + Math.pow(item.y - pellet.y, 2), 0.5);
                if (distance < item.width) {
                    return item;
                }
            }
            if (item instanceof Brick) {
                var lenCenter2Center = formula.getDistancePP(pellet.x, pellet.y, item.x, item.y);
                if (lenCenter2Center > Math.max(item.height, item.width) + pellet.width / 2) {
                    continue;
                }
                var rotation = item.rotation;
                var topP = [item.x, item.y + item.height / 2];
                var rightP = [item.x + item.width / 2, item.y];
                if (rotation) {
                    var topTemp = formula.getTransPosition(0, item.heightBase / 2, -rotation);
                    var rightTemp = formula.getTransPosition(item.widthBase / 2, 0, -rotation);
                    topP = [item.x + topTemp[0], item.y + topTemp[1]];
                    rightP = [item.x + rightTemp[0], item.y + rightTemp[1]];
                }
                var rectangleRet = formula.checkCRRectangle(pellet.x, pellet.y, pellet.width / 2, item.x, item.y, topP[0], topP[1], rightP[0], rightP[1]);
                if (rectangleRet == -1) {
                    this.isLeavingItem = false;
                    continue;
                }
                if (this.isLeavingItem) {
                    continue;
                }
                this.isLeavingItem = true;
                var pelletDir = [pellet.dir[0], pellet.dir[1]];
                var transDir = formula.getTransPosition(pelletDir[0], pelletDir[1], rotation);
                // console.log(transDir);
                // pellet.dir=[0,0];
                if (rectangleRet == 1) {
                    transDir[1] = -transDir[1];
                }
                else if (rectangleRet == 2) {
                    transDir[0] = -transDir[0];
                }
                else if (rectangleRet == 3) {
                    var canRet = formula.getDistancePL(item.x, item.y, pellet.x, pellet.y, pellet.x + pellet.dir[0], pellet.y + pellet.dir[1]) == 0;
                    if (canRet) {
                        transDir[0] = -transDir[0];
                        transDir[1] = -transDir[1];
                    }
                    else {
                    }
                }
                pellet.dir = formula.getTransPosition(transDir[0], transDir[1], -rotation);
                var going2Left = pellet.dir[0] < 0;
                var going2Top = pellet.dir[1] > 0;
            }
        }
        return null;
    };
    MainScene.prototype.adjustUI = function () {
        if (this.ignoreNextResize) {
            this.ignoreNextResize = false;
            return;
        }
        this.ignoreNextResize = true;
        if (weedon.winSize.width / weedon.winSize.height > 640 / 1000) {
            this.stage.setContentSize(640, 1000);
            this.stage.scaleMode = egret.StageScaleMode.SHOW_ALL;
            this.screenHeight = 1000;
            this.y = -193;
        }
        else {
            this.stage.setContentSize(640, 1386);
            this.stage.scaleMode = egret.StageScaleMode.FIXED_WIDTH;
            this.screenHeight = 640 / weedon.winSize.width * weedon.winSize.height;
            if (this.screenHeight > 1300) {
                this.y = -(1500 - this.screenHeight) / 2;
            }
            else {
                this.y = -(1386 - this.screenHeight) / 2;
            }
        }
    };
    MainScene.prototype.handleField = function (bomb) {
        // this.pellet.isRunning = false;
        console.log("finish");
    };
    MainScene.prototype.handleEatCoin = function (coin) {
        coin.visible = false;
    };
    MainScene.prototype.update = function (t) {
        if (!this.pellet.isRunning) {
            return;
        }
        var dir = this.pellet.dir;
        var speed = this.pellet.speed;
        var lineLength = speed / 60;
        var lDir = Math.pow(Math.pow(dir[0], 2) + Math.pow(dir[1], 2), 0.5);
        var xChange = lineLength / lDir * dir[0];
        var yChange = lineLength / lDir * dir[1];
        if (dir[0] == 0 && dir[1] == 0)
            return;
        this.pellet.x += xChange;
        this.pellet.y += yChange;
        var eatItem = this.checkCollision(this.pellet);
        if (eatItem) {
            if (eatItem instanceof Bomb) {
                this.handleField(eatItem);
                return;
            }
            if (eatItem instanceof Coin) {
                this.handleEatCoin(eatItem);
            }
        }
        if (this.pellet.y > 1050 - this.pellet.height / 2) {
            // this.pellet.isRunning = false;
            // this.pellet.y = 1050 - this.pellet.height / 2;
            this.pellet.dir[1] = -this.pellet.dir[1];
        }
        return true;
    };
    return MainScene;
}(eui.Component));
__reflect(MainScene.prototype, "MainScene");
var Coin = (function (_super) {
    __extends(Coin, _super);
    function Coin() {
        var _this = _super.call(this) || this;
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
        _this.skinName = BombSkin;
        return _this;
    }
    return Bomb;
}(eui.Component));
__reflect(Bomb.prototype, "Bomb");
