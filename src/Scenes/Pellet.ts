class Pellet extends eui.Component{
    public dir=[0,0];
    public isAiming=false;
    public isRunning=false;
    public speed=500;

    public constructor(){
        super();
        this.skinName=PelletSkin;
    }

}