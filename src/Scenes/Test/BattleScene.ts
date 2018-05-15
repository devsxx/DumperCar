// class BattleScene extends eui.Component {
//     private ignoreNextResize = false;
//     private screenHeight:number;
//     private dispatcher:Dispatcher;
//     private battleInfo = {
//         items: [
//             [0, 320, 100, 0],
//             [1, 320, 200, 0],
//             [2, 320, 300, 0],
//             [3, 320, 400, 0]
//             // [4, 320, 500, 0],
//             // [5, 320, 600, 0]
//         ],
//         itemsShow:[
            
//         ]
//     };


//     private battleGroup: eui.Group;
//     private initItemsInField(world) {
//         this.battleGroup.removeChildren();
//         this.battleInfo.items.forEach(itemData => {
//             let type = itemData[0];
//             let itemObj = type == ItemInField.ITEM_DUMPERCAR ? new DumperCar() :
//                 type == ItemInField.ITEM_COIN ? new Coin() :
//                     type == ItemInField.ITEM_BRICK ? new Brick() :
//                         type == ItemInField.ITEM_BOMB ? new Bomb() :
//                             type == ItemInField.ITEM_SPEEDUP ? new SpeedUpArea() :
//                                 type == ItemInField.ITEM_SPEEDDOWN ? new SpeedDownArea() :
//                                     null;
//             itemObj.anchorOffsetX = itemObj.width / 2;
//             itemObj.anchorOffsetY = itemObj.height / 2;
//             if (!itemObj) {
//                 return;
//             }

//             let p2Body = new p2.Body();
//             p2Body.position = [itemData[1],1000-itemData[2]];
//             p2Body.type = p2.Body.DYNAMIC;
//             p2Body.angle = itemData[3];
//             if (itemObj.type == ItemInField.ITEM_DUMPERCAR) {
//                 p2Body.mass = 10;//kg
//                 p2Body.force = [100,100];
//             }
//             let p2Shape = [ItemInField.ITEM_COIN || ItemInField.ITEM_BOMB || ItemInField.ITEM_DUMPERCAR].indexOf(type) == -1 ?
//                 new p2.Box({
//                     width: itemObj.width,
//                     height: itemObj.height
//                 }) :
//                 new p2.Circle({
//                     circle: itemObj.width / 2
//                 });
//             p2Body.addShape(p2Shape);
//             world.addBody(p2Body);

//             p2Body.displays = [itemObj];
//             this.battleGroup.addChild(itemObj);
//             this.battleInfo.itemsShow.push([itemObj,p2Body]);
//         });
//     }
//     public constructor(dispatcher:Dispatcher) {
//         super();
//         this.skinName = MainSceneSkin;
//         this.dispatcher=dispatcher;
//     }

//     protected childrenCreated() {
//         super.childrenCreated();
//         let world = new p2.World();
//         world.sleepMode = p2.World.BODY_SLEEPING;

//         world.applyGravity = true;
//         world.applySpringForces = true;
       
//         this.initItemsInField(world);
       
//         egret.Ticker.getInstance().register( dt=> {
//             //使世界时间向后运动
//             world.step(dt / 1000);
//             this.battleGroup.$children.forEach(item=>{
//                 let p2Body : p2.Body = item["p2Body"];
//                 item.x=p2Body.position[0];
//                 item.y=1000-p2Body.position[1];
//                 item.rotation=360 - p2Body.angle * 180 / Math.PI
//                 if(item instanceof DumperCar){
//                     // console.log(p2Body.position);
//                 }
//                 if(item instanceof DumperCar && p2Body.sleepState == p2.Body.SLEEPING){
//                     // console.log("sleeping");
//                 }
//             });
//         }, this);
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
// }


