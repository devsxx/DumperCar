// class CreateBattleScene extends eui.Component {
//     private dispatcher: Dispatcher;
//     private ignoreNextResize = false;
//     private screenHeight: number;

//     private baseGroup: eui.Group;


//     //create about
//     private movingItem: eui.Component;
//     private itemsForCreate;
//     private battleCreateItems;

//     //game about
//     private pellet: Pellet;
//     private battleInfo;
//     private aimLine;
//     private itemsShow;

//     public constructor(dispatcher: Dispatcher) {
//         super();
//         this.dispatcher = dispatcher;
//         this.skinName = MainSceneSkin;
//     }

//     protected childrenCreated() {
//         super.childrenCreated();
//         this.refreshUi();
//         egret.startTick(this.update.bind(this), this);
//     }

//     private battleStartY;
//     private battleHeight = 1000;
//     private refreshUi() {
//         this.baseGroup.removeChildren();
//         // bg
//         var shp: egret.Shape = new egret.Shape();
//         shp.graphics.lineStyle(2, 0xffffff);
//         shp.graphics.drawRect(0, 0, 580, 1000);
//         this.baseGroup.addChild(shp);
//         this.battleStartY = 0;

//         var shpDown: egret.Shape = new egret.Shape();
//         shpDown.graphics.lineStyle(2, 0xffffff);
//         shpDown.graphics.drawRect(0, 1000, 580, 100);
//         this.baseGroup.addChild(shpDown);

//         let pellet = this.pellet = new Pellet();
//         this.baseGroup.addChild(pellet);
//         pellet.x = 580 / 2;
//         pellet.y = 0 + 1000 - pellet.height / 2;

//         this.itemsForCreate = [];
//         this.battleCreateItems = [];
//         let coin = new Coin();//coin
//         this.baseGroup.addChild(coin);
//         coin.x = 20 + 20;
//         coin.y = 1050;
//         this.itemsForCreate.push(coin);

//         let bomb = new Bomb();//bomb
//         this.baseGroup.addChild(bomb);
//         bomb.x = 60 + 20 + 20;
//         bomb.y = 1050;
//         this.itemsForCreate.push(bomb);

//         let brick = new Brick();
//         this.baseGroup.addChild(brick);
//         brick.x = bomb.x + 20 + 20 + brick.width / 2;
//         brick.y = 1050;
//         this.itemsForCreate.push(brick);

//         let hollowBrick = new HollowBrick();
//         this.baseGroup.addChild(hollowBrick);
//         hollowBrick.x = brick.x + brick.width / 2 + 20 + hollowBrick.width / 2;
//         hollowBrick.y = 1050;
//         this.itemsForCreate.push(hollowBrick);

//         this.itemsForCreate.forEach((item, index) => {
//             item.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
//                 if (this.movingItem && this.movingItem.parent) {
//                     this.movingItem.parent.removeChild(this.movingItem);
//                     this.movingItem = null;
//                 }
//                 this.movingItem = index == 0 ? new Coin() : index == 1 ? new Bomb() : index == 2 ? new Brick() : index == 3 ? new HollowBrick() : null;
//                 if (!this.movingItem) {
//                     return;
//                 }
//                 this.baseGroup.addChild(this.movingItem);
//                 this.movingItem.x = item.x;
//                 this.movingItem.y = item.y;

//                 this.movingItem && (this.movingItem.addEventListener(egret.TouchEvent.TOUCH_MOVE, function (e, a) {

//                     let xNow = e.stageX - this.baseGroup.x;
//                     let yNow = e.stageY - this.baseGroup.y;
//                     if (!this.movingItem) {
//                         return;
//                     }
//                     this.movingItem.x = xNow;
//                     this.movingItem.y = yNow;
//                     // console.log(xNow + "---" + yNow);

//                 }, this));
//                 this.movingItem && (this.movingItem.addEventListener(egret.TouchEvent.TOUCH_END, function (e, a) {
//                     if (this.checkOutScene(this.movingItem)) {
//                         this.movingItem.parent.removeChild(this.movingItem);
//                         this.movingItem = null;
//                         return;
//                     }
//                     // this.battleCreateItems.push({});

//                 }, this));

//             }, this);

//         });


//     }

//     private adjustUI() {
//         if (this.ignoreNextResize) {
//             this.ignoreNextResize = false;
//             return;
//         }
//         this.ignoreNextResize = true;
//         if (weedon.winSize.width / weedon.winSize.height > 640 / 1000) {
//             this.stage.setContentSize(640, 1000);
//             this.stage.scaleMode = egret.StageScaleMode.SHOW_ALL;
//             this.screenHeight = 1000;
//             this.y = -193;
//         } else {
//             this.stage.setContentSize(640, 1386);
//             this.stage.scaleMode = egret.StageScaleMode.FIXED_WIDTH;
//             this.screenHeight = 640 / weedon.winSize.width * weedon.winSize.height;
//             if (this.screenHeight > 1300) {
//                 this.y = -(1500 - this.screenHeight) / 2;
//             }
//             else {
//                 this.y = -(1386 - this.screenHeight) / 2;
//             }
//         }
//     }

//     private update(t) {
//         if (!this.pellet.isRunning) {
//             return;
//         }

//         return true;
//     }

// }

