(function () {
    Object.defineProperties(this, {
        formula: {
            value: {}
        }
    });
    var _dataJson;//升级 道具 装备
    var _gameConfig; //各种上限 
    var _bgMusic;//游戏背景音乐

    var properties = {
        init: {
            value: function (dataJson, gameConfig) {
                this._dataJson = dataJson;
                this._gameConfig = gameConfig;
            }
        },
        getULevel: {//根据经验计算等级
            value: function (exper) {
                var expers = this._dataJson.lvExpers || [];
                for (var i = 0; i < expers.length; i++) {
                    if (exper < expers[i]) return i + 1;
                }
                return expers.length;
            }
        },
        getExperGet: {//根据连胜计算获得经验
            value: function (keepWin) {
                return 10 * Math.min(2, 1 + (keepWin - 1) * 0.4);
            }
        },
        ifCanStarDown: {//根据星星判断是否可掉段
            value: function (starNum) {
                var starsCanNotDown = this._dataJson.rankStarsNoDown || [];
                for (var i = 0; i < starsCanNotDown.length; i++) {
                    if (starNum == starsCanNotDown) return false;
                }
                return true;
            }
        },
        getRankInfo: {//根据星星数量获取段位名称及星星数量
            value: function (starNum) {
                var ranks = this._dataJson.rankConfig.slice();

                for (var i = 0; i < ranks.length; i++) {
                    var starNeed = ranks[i][1];
                    if (starNum < starNeed) {
                        var rankILow = ranks[i - 1];
                        return {
                            name: rankILow[0],
                            starNum: starNum - rankILow[1],
                            index: rankILow[6],//段位名称序号 (大段)
                            hitRate: rankILow[7],
                            headShotRate: rankILow[8],
                            shootInstallMin: rankILow[9],
                            shootInstallMax: rankILow[10],
                            moveSpeed: rankILow[3],
                            moveWait: rankILow[11],
                            moveWaitRange: rankILow[12]
                        };
                    }
                }
                var rankLast = ranks[ranks.length - 1];
                return {
                    name: rankLast[0],
                    starNum: starNum - rankLast[1],
                    index: rankLast[6],
                    hitRate: rankLast[7],
                    headShotRate: rankLast[8],
                    shootInstallMin: rankLast[9],
                    shootInstallMax: rankLast[10],
                    moveSpeed: rankLast[3],
                    moveWait: rankLast[11],
                    moveWaitRange: rankLast[12]
                };
            }
        },
        getPropUnLockLevel: {//根据序号获取解锁等级
            value: function (propType, number) {
                return propType == 0 ?
                    this._dataJson.gunUnLockLevel[this._dataJson.gunsBaseNumber[number][0]] :
                    this._dataJson.propUnLockLevel[this._dataJson.propsBaseNumber[number][0]];

            }
        },
        /**
         *  gunNum = "0-1"
         *  shootData = { body: 1 ,head:0,leg:0 }
         */
        getShootDamage: {
            value: function (gunNum, shootData) {

                var gunInfo = this._dataJson.gunsBaseNumber[gunNum];
                if (gunInfo == null) return 0;
                var bulletNum = gunInfo[8] || 1;
                var baseDamage = gunInfo[2] / bulletNum;//9
                var damageBonusConfig = this._gameConfig.damageBonus

                var damageRet;
                if (bulletNum == 1) {
                    damageRet = baseDamage;
                    var bonusShoot = 1;
                    Object.keys(shootData).forEach(v => {
                        shootData[v] && (bonusShoot *= damageBonusConfig.bodyDamageBonus[v]);
                    });
                    damageRet *= bonusShoot;
                } else {
                    var singleDamage = baseDamage;
                    damageRet = 0;
                    Object.keys(shootData).forEach(v => {
                        shootData[v] && (damageRet += singleDamage * shootData[v] * damageBonusConfig.bodyDamageBonus[v]);
                    });
                }
                var gunDamageBonus = damageBonusConfig.gunDamageBonus;
                var gunType = gunNum.split("-")[0];
                gunDamageBonus[gunType] && (damageRet *= gunDamageBonus[gunType]);
                return Math.floor(damageRet);
            }
        },
        initBgMusic: {
            value: function (bgMusic) {
                if (!this._bgMusic) {
                    this._bgMusic = bgMusic;
                }
            }
        },
        getBgMusic: {
            value: function () {
                return this._bgMusic;
            }
        }




    };
    Object.defineProperties(this.formula, properties);
})();