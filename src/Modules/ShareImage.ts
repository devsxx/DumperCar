class ShareImage extends egret.DisplayObjectContainer{
    private canvas:HTMLCanvasElement;
    private ctx:CanvasRenderingContext2D;
    public constructor(width:number,height:number){
        super();
        this.canvas = wx.createCanvas();
        this.canvas.width = width;
        this.canvas.height = height;
        this.ctx = this.canvas.getContext("2d");
    }

    public addLabel(text:string,size:number,color:number,x:number,y:number,anchorX?:number,anchorY?:number,stroke?:number,strokeColor?:number,bold?:boolean):void{
        this.ctx.font = (size || 20) + "px Arial" + (bold ? " bold" : "");
        this.ctx.fillStyle = "#" + ("000000" + color.toString(16)).slice(-6);
        let width = this.ctx.measureText(text).width;
        this.ctx.fillText(text,x - width * anchorX,y - size * anchorY);
        if(stroke){
            this.ctx.lineWidth = stroke;
            this.ctx.strokeStyle = "#" + ("000000" + strokeColor.toString(16)).slice(-6);
            this.ctx.strokeText(text,x - width * anchorX,y - size * anchorY);
        }
    }

    public async addImage(url:string,anchorX?:number,anchorY?:number,x?:number,y?:number,scaleX?:number,scaleY?:number,rotation?:number){
        let ctx = this.ctx;
        return new Promise(function(resolve,reject){
            let img = wx.createImage();
            img.src = url;
            img.onload = function(){
                ctx.drawImage(
                    img,
                    0,
                    0,
                    img.width,
                    img.height,
                    x - img.width * anchorX * scaleX,
                    y - img.height * anchorY * scaleY,
                    img.width * scaleX,
                    img.height * scaleY
                );
                resolve();
            }
        })
    }

    public saveToFile(rect:egret.Rectangle):string{
        return this.canvas["toTempFilePathSync"]({
            x: rect.x,
            y: rect.y,
            width: rect.width,
            height: rect.height,
            destWidth: rect.width,
            destHeight: rect.height
        });
    }
}