var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Dispatcher = (function () {
    function Dispatcher(dispatcher) {
        this._dispatcher = dispatcher;
    }
    Dispatcher.prototype.heartbeat = function (interval, callback) {
        this._dispatcher.heartbeat(interval, callback);
    };
    Dispatcher.prototype.request = function (cmd, data, callback, noWait) {
        this._dispatcher.request(cmd, data, callback, noWait);
    };
    Dispatcher.prototype.get = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this._dispatcher.get.apply(this._dispatcher, args);
    };
    Dispatcher.prototype.getOld = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this._dispatcher.getOld.apply(this._dispatcher, args);
    };
    Dispatcher.prototype.getNew = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this._dispatcher.getNew.apply(this._dispatcher, args);
    };
    Dispatcher.prototype.safeGetNew = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this._dispatcher.safeGetNew.apply(this._dispatcher, args);
    };
    Dispatcher.prototype.setCache = function (key, value) {
        this._dispatcher.setCache(key, value);
    };
    Dispatcher.prototype.getCache = function (key) {
        return this._dispatcher.getCache(key);
    };
    Dispatcher.prototype.clearCache = function () {
        this._dispatcher.clearCache();
    };
    Object.defineProperty(Dispatcher.prototype, "waitFunc", {
        set: function (wait) {
            this._dispatcher.waitFunc = wait;
        },
        enumerable: true,
        configurable: true
    });
    Dispatcher.prototype.setOverrideKey = function (key) {
        this._dispatcher.setOverrideKey(key);
    };
    Dispatcher.prototype.setPushCallback = function (key, callback) {
        this._dispatcher.setPushCallback(key, callback);
    };
    return Dispatcher;
}());
__reflect(Dispatcher.prototype, "Dispatcher");
