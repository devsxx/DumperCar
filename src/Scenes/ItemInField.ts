class ItemInField {
    public static ITEM_DUMPERCAR = 0;
    public static ITEM_COIN = 1;
    public static ITEM_BRICK = 2;
    public static ITEM_BOMB = 3;
    public static ITEM_SPEEDUP = 4;
    public static ITEM_SPEEDDOWN = 5;
}
interface FieldItem{
    type:number;
    width:number;
    height:number;
}
class DumperCar extends eui.Component{
    public type: number = 0;
    public constructor(){
        super();
        this.skinName=PelletSkin;
    }
}
class Coin extends eui.Component {
    public type: number = 1;
    public constructor() {
        super();
        this.skinName = CoinSkin;
    }

}
class Brick extends eui.Component {
    public type: number = 2;
    public constructor() {
        super();
        this.skinName = BrickSkin;
    }
}
class Bomb extends eui.Component {
    public type: number = 3;
    public constructor() {
        super();
        this.skinName = BombSkin;
    }
}
class SpeedUpArea extends eui.Component {
    public type: number = 4;

}
class SpeedDownArea extends eui.Component {
    public type: number = 5;

}