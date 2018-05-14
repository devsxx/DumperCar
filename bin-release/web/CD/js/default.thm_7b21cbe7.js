
function __extends(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
    __.prototype = b.prototype;
    d.prototype = new __();
};
window.generateEUI = {};
generateEUI.paths = {};
generateEUI.styles = undefined;
generateEUI.skins = {}
generateEUI.paths['resource/eui_skins/DuelSceneSkin.exml'] = window.DuelSceneSkin = (function (_super) {
	__extends(DuelSceneSkin, _super);
	function DuelSceneSkin() {
		_super.call(this);
		this.skinParts = ["sky","ground","enemyHpBar","counter","level","enemy","field","scene","hpBar","hpTag","topUI"];
		
		this.height = 1386;
		this.width = 640;
		this.elementsContent = [this.scene_i(),this.topUI_i()];
	}
	var _proto = DuelSceneSkin.prototype;

	_proto.scene_i = function () {
		var t = new eui.Group();
		this.scene = t;
		t.height = 0;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.sky_i(),this.field_i()];
		return t;
	};
	_proto.sky_i = function () {
		var t = new eui.Image();
		this.sky = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_bg_png";
		t.y = -968.11;
		return t;
	};
	_proto.field_i = function () {
		var t = new eui.Group();
		this.field = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.ground_i(),this.enemy_i()];
		return t;
	};
	_proto.ground_i = function () {
		var t = new eui.Image();
		this.ground = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_front_png";
		t.x = -343;
		t.y = 39.37;
		return t;
	};
	_proto.enemy_i = function () {
		var t = new eui.Group();
		this.enemy = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 320;
		t.y = 745.45;
		t.elementsContent = [this._Image1_i(),this.enemyHpBar_i(),this.counter_i(),this.level_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "enm_lifebar_bg_png";
		t.x = -90;
		t.y = 25.94;
		return t;
	};
	_proto.enemyHpBar_i = function () {
		var t = new eui.Image();
		this.enemyHpBar = t;
		t.source = "enm_lifebar_png";
		t.x = -85;
		t.y = 29.94;
		return t;
	};
	_proto.counter_i = function () {
		var t = new eui.Label();
		this.counter = t;
		t.horizontalCenter = -1;
		t.size = 36;
		t.text = "10";
		t.textColor = 0xff0000;
		t.y = -315.18;
		return t;
	};
	_proto.level_i = function () {
		var t = new eui.Label();
		this.level = t;
		t.right = 97;
		t.size = 24;
		t.text = "Lv.1";
		t.textAlign = "right";
		t.y = 29.86;
		return t;
	};
	_proto.topUI_i = function () {
		var t = new eui.Group();
		this.topUI = t;
		t.height = 0;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this.hpBar_i(),this.hpTag_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "player_lifebar_bg_png";
		t.x = 5;
		t.y = 5.73;
		return t;
	};
	_proto.hpBar_i = function () {
		var t = new eui.Image();
		this.hpBar = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "player_lifebar_png";
		t.x = 16;
		t.y = 10.73;
		return t;
	};
	_proto.hpTag_i = function () {
		var t = new eui.Label();
		this.hpTag = t;
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "100/100";
		t.y = 15.73;
		return t;
	};
	return DuelSceneSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/InfoBoardSkin.exml'] = window.InfoBoardSkin = (function (_super) {
	__extends(InfoBoardSkin, _super);
	function InfoBoardSkin() {
		_super.call(this);
		this.skinParts = ["btn","tag"];
		
		this.height = 480;
		this.width = 560;
		this.elementsContent = [this._Rect1_i(),this.btn_i(),this.tag_i()];
	}
	var _proto = InfoBoardSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.6;
		t.height = 480;
		t.width = 560;
		return t;
	};
	_proto.btn_i = function () {
		var t = new eui.Label();
		this.btn = t;
		t.horizontalCenter = 0;
		t.text = "Label";
		t.y = 400;
		return t;
	};
	_proto.tag_i = function () {
		var t = new eui.Label();
		this.tag = t;
		t.height = 300;
		t.size = 24;
		t.text = "Label";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 520;
		t.x = 20;
		t.y = 40;
		return t;
	};
	return InfoBoardSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RankingItemSkin.exml'] = window.RankingItemSkin = (function (_super) {
	__extends(RankingItemSkin, _super);
	function RankingItemSkin() {
		_super.call(this);
		this.skinParts = ["avatar","nickname","tagTraining","tagDuel","totalShootLabel","totalHitLabel","headHitLabel"];
		
		this.height = 100;
		this.width = 520;
		this.elementsContent = [this._Rect1_i(),this.avatar_i(),this.nickname_i(),this.tagTraining_i(),this.tagDuel_i(),this.totalShootLabel_i(),this.totalHitLabel_i(),this.headHitLabel_i()];
	}
	var _proto = RankingItemSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.8;
		t.fillColor = 0x888888;
		t.height = 100;
		t.width = 520;
		return t;
	};
	_proto.avatar_i = function () {
		var t = new eui.Image();
		this.avatar = t;
		t.height = 80;
		t.width = 80;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.nickname_i = function () {
		var t = new eui.Label();
		this.nickname = t;
		t.size = 24;
		t.text = "昵称是六个字";
		t.x = 105;
		t.y = 15;
		return t;
	};
	_proto.tagTraining_i = function () {
		var t = new eui.Label();
		this.tagTraining = t;
		t.size = 24;
		t.text = "射击           命中          爆头";
		t.x = 105;
		t.y = 60;
		return t;
	};
	_proto.tagDuel_i = function () {
		var t = new eui.Label();
		this.tagDuel = t;
		t.size = 24;
		t.text = "决斗           胜利          失败";
		t.visible = false;
		t.x = 105;
		t.y = 60;
		return t;
	};
	_proto.totalShootLabel_i = function () {
		var t = new eui.Label();
		this.totalShootLabel = t;
		t.horizontalCenter = -70.5;
		t.size = 24;
		t.text = "999";
		t.textColor = 0xff0000;
		t.y = 60;
		return t;
	};
	_proto.totalHitLabel_i = function () {
		var t = new eui.Label();
		this.totalHitLabel = t;
		t.horizontalCenter = 49.5;
		t.size = 24;
		t.text = "999";
		t.textColor = 0xFF0000;
		t.y = 60;
		return t;
	};
	_proto.headHitLabel_i = function () {
		var t = new eui.Label();
		this.headHitLabel = t;
		t.horizontalCenter = 164.5;
		t.size = 24;
		t.text = "999";
		t.textColor = 0xFF0000;
		t.y = 60;
		return t;
	};
	return RankingItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RankingListSkin.exml'] = window.RankingListSkin = (function (_super) {
	__extends(RankingListSkin, _super);
	function RankingListSkin() {
		_super.call(this);
		this.skinParts = ["trainRanking","duelRanking","tagTraining","tagDuel","btnStart","btnMulti","totalShootLabel","totalHitLabel","headHitLabel"];
		
		this.height = 900;
		this.width = 560;
		this.elementsContent = [this._Rect1_i(),this.trainRanking_i(),this.duelRanking_i(),this.tagTraining_i(),this.tagDuel_i(),this._Label1_i(),this._Group1_i(),this.btnStart_i(),this.btnMulti_i(),this.totalShootLabel_i(),this.totalHitLabel_i(),this.headHitLabel_i()];
	}
	var _proto = RankingListSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.6;
		t.height = 900;
		t.width = 560;
		return t;
	};
	_proto.trainRanking_i = function () {
		var t = new eui.Label();
		this.trainRanking = t;
		t.horizontalCenter = -100;
		t.text = "训练成绩";
		t.y = 26;
		return t;
	};
	_proto.duelRanking_i = function () {
		var t = new eui.Label();
		this.duelRanking = t;
		t.horizontalCenter = 100;
		t.text = "对战成绩";
		t.y = 26;
		return t;
	};
	_proto.tagTraining_i = function () {
		var t = new eui.Label();
		this.tagTraining = t;
		t.size = 24;
		t.text = "射击次数            命中次数            爆头次数";
		t.x = 20;
		t.y = 82;
		return t;
	};
	_proto.tagDuel_i = function () {
		var t = new eui.Label();
		this.tagDuel = t;
		t.size = 24;
		t.text = "对战次数            胜利次数            失败次数";
		t.visible = false;
		t.x = 20;
		t.y = 82;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "全体排名";
		t.y = 146;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 600;
		t.horizontalCenter = 0;
		t.width = 530;
		t.y = 200;
		return t;
	};
	_proto.btnStart_i = function () {
		var t = new eui.Label();
		this.btnStart = t;
		t.horizontalCenter = -100;
		t.text = "开始训练";
		t.y = 836;
		return t;
	};
	_proto.btnMulti_i = function () {
		var t = new eui.Label();
		this.btnMulti = t;
		t.horizontalCenter = 100;
		t.text = "开始匹配";
		t.y = 836;
		return t;
	};
	_proto.totalShootLabel_i = function () {
		var t = new eui.Label();
		this.totalShootLabel = t;
		t.horizontalCenter = -123.5;
		t.size = 24;
		t.text = "999";
		t.textColor = 0xff0000;
		t.y = 83;
		return t;
	};
	_proto.totalHitLabel_i = function () {
		var t = new eui.Label();
		this.totalHitLabel = t;
		t.horizontalCenter = 51.5;
		t.size = 24;
		t.text = "999";
		t.textColor = 0xff0000;
		t.y = 83;
		return t;
	};
	_proto.headHitLabel_i = function () {
		var t = new eui.Label();
		this.headHitLabel = t;
		t.horizontalCenter = 228.5;
		t.size = 24;
		t.text = "999";
		t.textColor = 0xff0000;
		t.y = 83;
		return t;
	};
	return RankingListSkin;
})(eui.Skin);