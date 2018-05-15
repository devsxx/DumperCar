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
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.createView, _this);
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        var screenHeight;
        if (weedon.winSize.width / weedon.winSize.height > 640 / 1000) {
            this.stage.setContentSize(640, 1000);
            this.stage.scaleMode = egret.StageScaleMode.SHOW_ALL;
            this.y = -193;
            screenHeight = 1000;
        }
        else {
            this.stage.setContentSize(640, 1386);
            this.stage.scaleMode = egret.StageScaleMode.FIXED_WIDTH;
            this.scaleX = this.scaleY = Math.min((640 / 1000) / (weedon.winSize.width / weedon.winSize.height), 1);
            this.x = 640 * (1 - this.scaleX) / 2;
            this.y = 1000 * (1 - this.scaleY) / 2;
            var size = this.x ? { width: 640, height: 1000 } : weedon.winSize;
            screenHeight = size.height * 640 / size.width;
        }
        this.progText = new egret.TextField();
        this.addChild(this.progText);
        this.progText.size = 20;
        this.progText.textColor = 0xffffff;
        this.progText.stroke = 2;
        this.progText.strokeColor = 0x523318;
        this.progText.bold = true;
        this.progText.x = 320;
        this.progText.y = screenHeight / 5 * 4.6 - 45;
        //加载中文本框
        var loadingMsg = this.loadingTag = new eui.Label();
        this.addChild(loadingMsg);
        loadingMsg.size = 20;
        loadingMsg.textColor = 0xffffff;
        loadingMsg.stroke = 2;
        loadingMsg.strokeColor = 0x523318;
        loadingMsg.bold = true;
        loadingMsg.x = 320;
        loadingMsg.y = screenHeight / 5 * 4.6 + 23;
        loadingMsg.text = "\u521D\u6B21\u52A0\u8F7D\u65F6\u95F4\u8F83\u957F\uFF0C\u8BF7\u8010\u5FC3\u7B49\u5F85\u3002";
        loadingMsg.anchorOffsetX = loadingMsg.width / 2;
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        this.progText.text = "\u52A0\u8F7D\u4E2D...\uFF08" + current + "/" + total + "\uFF09";
        this.progText.anchorOffsetX = this.progText.width / 2;
        this.loadingTag.size = 20 + Math.random() / 100;
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
//# sourceMappingURL=LoadingUI.js.map