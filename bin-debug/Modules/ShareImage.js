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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var ShareImage = (function (_super) {
    __extends(ShareImage, _super);
    function ShareImage(width, height) {
        var _this = _super.call(this) || this;
        _this.canvas = wx.createCanvas();
        _this.canvas.width = width;
        _this.canvas.height = height;
        _this.ctx = _this.canvas.getContext("2d");
        return _this;
    }
    ShareImage.prototype.addLabel = function (text, size, color, x, y, anchorX, anchorY, stroke, strokeColor, bold) {
        this.ctx.font = (size || 20) + "px Arial" + (bold ? " bold" : "");
        this.ctx.fillStyle = "#" + ("000000" + color.toString(16)).slice(-6);
        var width = this.ctx.measureText(text).width;
        this.ctx.fillText(text, x - width * anchorX, y - size * anchorY);
        if (stroke) {
            this.ctx.lineWidth = stroke;
            this.ctx.strokeStyle = "#" + ("000000" + strokeColor.toString(16)).slice(-6);
            this.ctx.strokeText(text, x - width * anchorX, y - size * anchorY);
        }
    };
    ShareImage.prototype.addImage = function (url, anchorX, anchorY, x, y, scaleX, scaleY, rotation) {
        return __awaiter(this, void 0, void 0, function () {
            var ctx;
            return __generator(this, function (_a) {
                ctx = this.ctx;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var img = wx.createImage();
                        img.src = url;
                        img.onload = function () {
                            ctx.drawImage(img, 0, 0, img.width, img.height, x - img.width * anchorX * scaleX, y - img.height * anchorY * scaleY, img.width * scaleX, img.height * scaleY);
                            resolve();
                        };
                    })];
            });
        });
    };
    ShareImage.prototype.saveToFile = function (rect) {
        return this.canvas["toTempFilePathSync"]({
            x: rect.x,
            y: rect.y,
            width: rect.width,
            height: rect.height,
            destWidth: rect.width,
            destHeight: rect.height
        });
    };
    return ShareImage;
}(egret.DisplayObjectContainer));
__reflect(ShareImage.prototype, "ShareImage");
