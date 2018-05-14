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
var _wx;
(function () {
    var _callback = null;
    function listen(evt) {
        _callback && _callback({
            x: +Math.sin(evt.gamma / 180 * Math.PI).toFixed(5),
            y: evt.alpha,
            z: +Math.sin(-evt.beta / 180 * Math.PI).toFixed(5)
        });
    }
    _wx = {};
    Object.defineProperties(_wx, {
        startAccelerometer: {
            value: function (obj) {
                window.addEventListener("deviceorientation", listen, true);
                obj.success && obj.success();
            }
        },
        onAccelerometerChange: {
            value: function (callback) {
                _callback = callback;
            }
        },
        stopAccelerometer: {
            value: function (obj) {
                window.removeEventListener("deviceorientation", listen, true);
                obj && obj.complete && obj.complete();
            }
        }
    });
})();
var DEBUG_MODE = false;
var version = "1.0.16";
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.MUTE_SE = false;
        return _this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        RES["getRealURL"] = function (url) {
            return typeof GameGlobal !== "undefined" ? (DEBUG_MODE ? "http://192.168.1.10:3000/" : "https://xbwz-resource.hortor.net/") + url + "?v=" + version : url + "?v=" + version;
        };
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene();
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function (groupName) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        if (!!this.loadingView) return [3 /*break*/, 3];
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadTheme()];
                    case 2:
                        _a.sent();
                        this.loadingView = new LoadingUI();
                        this.stage.addChild(this.loadingView);
                        _a.label = 3;
                    case 3:
                        console.log(groupName + "--" + "preload");
                        return [4 /*yield*/, RES.loadGroup(groupName || "preload", 0, this.loadingView)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadTheme = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            var theme = new eui.Theme("resource/default.thm.json", _this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                resolve();
            }, _this);
        });
    };
    Main.prototype.createGameScene = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dispatcher, openid;
            return __generator(this, function (_a) {
                dispatcher = weedon.config(
                // DEBUG_MODE ? (typeof GameGlobal !== "undefined" ? "192.168.1.10" : typeof location === "undefined" || ~location.hostname.indexOf(".h5") ? "" : location.hostname) : "",9601,"ws",()=>{},(typeof GameGlobal !== "undefined" && !DEBUG_MODE) || location.protocol == "https:" || ~location.href.indexOf("h5.") ?  "wss://xbwz.hortor.net": null
                "192.168.1.10", 9601, "ws", function () { });
                openid = egret.localStorage.getItem("DUMPER#OPENID");
                if (!openid) {
                    openid = Math.random().toString();
                    egret.localStorage.setItem("DUMPER#OPENID", openid);
                }
                weedon.getLoginData(function (err, loginData) {
                    return __awaiter(this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            dispatcher.request("user.login", { loginData: loginData }, (function (err) { return __awaiter(_this, void 0, void 0, function () {
                                var userSetting, scene;
                                return __generator(this, function (_a) {
                                    if (err) {
                                        return [2 /*return*/, alert(err.errmsg || "登录失败")];
                                    }
                                    userSetting = dispatcher.get("user", "userSetting") || 0;
                                    MUTE_SE = ((userSetting & (1 << 1)) == 0);
                                    dispatcher.heartbeat(5000, function () { });
                                    weedon.initChannelConfig({
                                        inviter: dispatcher.get("user", "_id"),
                                        nickname: dispatcher.get("user", "nickname"),
                                        wxGame: {}
                                    }, function (state) {
                                        var cb = dispatcher.getCache("shareCallback");
                                        cb && cb(state || 0);
                                    }, function (state) {
                                    });
                                    scene = new MainScene(dispatcher);
                                    //  let scene = new CreateBattleScene(dispatcher);
                                    this.addChild(scene);
                                    this.stage.removeChild(this.loadingView);
                                    return [2 /*return*/];
                                });
                            }); }).bind(this));
                            return [2 /*return*/];
                        });
                    });
                }.bind(this));
                return [2 /*return*/];
            });
        });
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
