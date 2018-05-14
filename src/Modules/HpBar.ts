class HpBar extends egret.DisplayObjectContainer{
    private loadIndex = 0;
    private imgNames:Array<string> = [];
    private bars:Array<egret.Bitmap> = [];
    private maxValue:number;
    private currentValue:number;
    private tag:egret.TextField;

    private showValue:number;
    private lastUpdate:number = 0;

    public constructor(bgName:string,normalName:string,plusName:string,minusName:string){
        super();
        this.imgNames = [bgName,normalName,plusName,minusName];
        this.loadImg();
        egret.startTick(this.update,this);
    }

    private loadImg():void{
        if(this.imgNames[this.loadIndex]){
            createBitmap(this.imgNames[this.loadIndex],0.5,0.5,0,0,1,1,function(bmp:egret.Bitmap){
                this.addChild(bmp);
                bmp.visible = this.loadIndex < 2;
                this.loadIndex && this.bars.push(bmp);
                ++this.loadIndex;
                this.loadImg();
            }.bind(this));
        }
    }

    public showTag(size:number,color:number,stroke?:number,strokeColor?:number):void{
        if(!this.tag){
            this.tag = new egret.TextField();
            this.addChild(this.tag);
        }
        this.tag.text = `${this.showValue}/${this.maxValue}`;
        this.tag.size = size;
        this.tag.textColor = color;
        if(stroke){
            this.tag.stroke = stroke;
            this.tag.strokeColor = strokeColor;
        }
        this.tag.anchorOffsetX = this.tag.width / 2;
        this.tag.anchorOffsetY = this.tag.height / 2;
    }

    public setMaxValue(val:number):void{
        this.maxValue = val;
        if(this.currentValue){
            this.setValue(Math.min(this.maxValue,this.currentValue));
        }
        else{
            this.currentValue = this.showValue = this.maxValue;
        }
    }
    
    public setValue(val:number):void{
        if(val < this.showValue){
            if(this.bars[2]){
                this.bars[2].visible = true;
                this.bars[2].mask = new egret.Rectangle(val/this.maxValue*this.bars[2].width,0,(this.showValue - val)/this.maxValue* this.bars[2].width,this.bars[2].height);
            }
        }
        else{
            if(this.bars[1]){
                this.bars[1].visible = true;
                this.bars[1].mask = new egret.Rectangle(this.showValue/this.maxValue*this.bars[2].width,0,(val - this.showValue)/this.maxValue* this.bars[2].width,this.bars[2].height);
            }
        }
        this.currentValue = Math.max(0,Math.min(val,this.maxValue));
        if(this.bars[0]){
            this.bars[0].mask = new egret.Rectangle(0,0,this.currentValue/this.maxValue*this.bars[0].width,this.bars[0].height);
        }
        this.lastUpdate = weedon.time;
    }

    private update():boolean{
        if(this.showValue == this.currentValue){
            this.bars[1] && (this.bars[1].visible = false);
            this.bars[2] && (this.bars[2].visible = false);
            return false;
        }
        let now = weedon.time;
        if(now - this.lastUpdate > 0){
            if(this.showValue < this.currentValue){
                this.showValue = Math.min(this.currentValue,this.showValue + 0.01 * (now - this.lastUpdate - 0)) >> 0;
                if(this.bars[1]){
                    this.bars[1].mask = new egret.Rectangle(this.showValue/this.maxValue*this.bars[2].width,0,(this.currentValue - this.showValue)/this.maxValue* this.bars[2].width,this.bars[2].height);
                }
            }
            else{
                this.showValue = Math.max(this.currentValue,this.showValue - 0.01 * (now - this.lastUpdate - 0)) >> 0;
                if(this.bars[1]){
                    this.bars[2].mask = new egret.Rectangle(this.currentValue/this.maxValue*this.bars[2].width,0,(this.showValue - this.currentValue)/this.maxValue* this.bars[2].width,this.bars[2].height);
                }
            }
        }
        if(this.tag){
            this.tag.text = `${this.showValue}/${this.maxValue}`;
            this.tag.anchorOffsetX = this.tag.width / 2;
            this.tag.anchorOffsetY = this.tag.height / 2;
        }
        return true;
    }
}