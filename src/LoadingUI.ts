//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class LoadingUI extends egret.Sprite implements RES.PromiseTaskReporter {
    private progText: egret.TextField;
    private loadingTag:eui.Label;
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.createView,this);
    }

    private createView(): void {
        let screenHeight;
        if(weedon.winSize.width / weedon.winSize.height > 640 / 1000){
            this.stage.setContentSize(640,1000);
            this.stage.scaleMode = egret.StageScaleMode.SHOW_ALL;
            this.y = -193;
            screenHeight = 1000;
        }
        else{
            this.stage.setContentSize(640,1386);
            this.stage.scaleMode = egret.StageScaleMode.FIXED_WIDTH;
            this.scaleX = this.scaleY = Math.min((640 / 1000) / (weedon.winSize.width / weedon.winSize.height),1);
            this.x = 640 * (1 - this.scaleX) / 2;
            this.y = 1000 * (1 - this.scaleY) / 2;
            let size = this.x ? {width:640,height:1000} : weedon.winSize;
            screenHeight = size.height * 640 / size.width;
        }


        this.progText = new egret.TextField();
        this.addChild(this.progText);
        this.progText.size = 20;
        this.progText.textColor = 0xffffff;
        this.progText.stroke=2;
        this.progText.strokeColor=0x523318;
        this.progText.bold=true;
        this.progText.x = 320;
        this.progText.y = screenHeight / 5 * 4.6 - 45;
        
        //加载中文本框
        let loadingMsg = this.loadingTag = new eui.Label();
        this.addChild(loadingMsg);
        loadingMsg.size = 20;
        loadingMsg.textColor = 0xffffff;
        loadingMsg.stroke=2;
        loadingMsg.strokeColor=0x523318;
        loadingMsg.bold=true;
        loadingMsg.x = 320;
        loadingMsg.y = screenHeight / 5 * 4.6 + 23;
        loadingMsg.text = `初次加载时间较长，请耐心等待。`;
        loadingMsg.anchorOffsetX = loadingMsg.width / 2;
    }

    public onProgress(current: number, total: number): void {
        this.progText.text = `加载中...（${current}/${total}）`;
        this.progText.anchorOffsetX = this.progText.width / 2; 
        this.loadingTag.size = 20 + Math.random() / 100;
    }
}
