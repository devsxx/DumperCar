
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
generateEUI.skins = undefined
generateEUI.paths['resource/eui_skins/DuelSceneSkin.exml'] = window.DuelSceneSkin = (function (_super) {
	__extends(DuelSceneSkin, _super);
	function DuelSceneSkin() {
		_super.call(this);
		this.skinParts = ["sky","ground","enemyHpBar","nickname","enemy","field","scene","hpBar","hpTag","bqzdc0","bqzdc1","bqzdc2","bqzdc3","bqzdc4","bqzdc5","bqzd0","bqzd1","bqzd2","bqzd3","bqzd4","bqzd5","xdqzdc0","xdqzdc1","xdqzdc2","xdqzdc3","xdqzdc4","xdqzdc5","xdqzd0","xdqzd1","xdqzd2","xdqzd3","xdqzd4","xdqzd5","sqzdc0","sqzdc1","sqzdc2","sqzdc3","sqzdc4","sqzdc5","sqzd0","sqzd1","sqzd2","sqzd3","sqzd4","sqzd5","bulletList","reloadTag","topUI"];
		
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
		t.y = -868.11;
		return t;
	};
	_proto.field_i = function () {
		var t = new eui.Group();
		this.field = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 640;
		t.y = 100;
		t.elementsContent = [this.ground_i(),this.enemy_i()];
		return t;
	};
	_proto.ground_i = function () {
		var t = new eui.Image();
		this.ground = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_front_png";
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
		t.y = 565.45;
		t.elementsContent = [this._Image1_i(),this.enemyHpBar_i(),this.nickname_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "zd_dr_db_png";
		t.y = 33.94;
		return t;
	};
	_proto.enemyHpBar_i = function () {
		var t = new eui.Image();
		this.enemyHpBar = t;
		t.horizontalCenter = 0;
		t.source = "zd_dr_xt_png";
		t.y = 35.94;
		return t;
	};
	_proto.nickname_i = function () {
		var t = new eui.Label();
		this.nickname = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "";
		t.verticalCenter = -265;
		return t;
	};
	_proto.topUI_i = function () {
		var t = new eui.Group();
		this.topUI = t;
		t.height = 0;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this.hpBar_i(),this.hpTag_i(),this.bulletList_i(),this.reloadTag_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "zd_zj_db_png";
		t.y = 5.73;
		return t;
	};
	_proto.hpBar_i = function () {
		var t = new eui.Image();
		this.hpBar = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "zd_zj_x_png";
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
		t.y = 12.73;
		return t;
	};
	_proto.bulletList_i = function () {
		var t = new eui.Group();
		this.bulletList = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 40;
		t.y = 50;
		t.elementsContent = [this.bqzdc0_i(),this.bqzdc1_i(),this.bqzdc2_i(),this.bqzdc3_i(),this.bqzdc4_i(),this.bqzdc5_i(),this.bqzd0_i(),this.bqzd1_i(),this.bqzd2_i(),this.bqzd3_i(),this.bqzd4_i(),this.bqzd5_i(),this.xdqzdc0_i(),this.xdqzdc1_i(),this.xdqzdc2_i(),this.xdqzdc3_i(),this.xdqzdc4_i(),this.xdqzdc5_i(),this.xdqzd0_i(),this.xdqzd1_i(),this.xdqzd2_i(),this.xdqzd3_i(),this.xdqzd4_i(),this.xdqzd5_i(),this.sqzdc0_i(),this.sqzdc1_i(),this.sqzdc2_i(),this.sqzdc3_i(),this.sqzdc4_i(),this.sqzdc5_i(),this.sqzd0_i(),this.sqzd1_i(),this.sqzd2_i(),this.sqzd3_i(),this.sqzd4_i(),this.sqzd5_i()];
		return t;
	};
	_proto.bqzdc0_i = function () {
		var t = new eui.Image();
		this.bqzdc0 = t;
		t.source = "zd_bq_01_png";
		t.visible = false;
		return t;
	};
	_proto.bqzdc1_i = function () {
		var t = new eui.Image();
		this.bqzdc1 = t;
		t.source = "zd_bq_01_png";
		t.visible = false;
		t.x = 30;
		return t;
	};
	_proto.bqzdc2_i = function () {
		var t = new eui.Image();
		this.bqzdc2 = t;
		t.source = "zd_bq_01_png";
		t.visible = false;
		t.x = 60;
		t.y = 0;
		return t;
	};
	_proto.bqzdc3_i = function () {
		var t = new eui.Image();
		this.bqzdc3 = t;
		t.source = "zd_bq_01_png";
		t.visible = false;
		t.x = 90;
		t.y = 0;
		return t;
	};
	_proto.bqzdc4_i = function () {
		var t = new eui.Image();
		this.bqzdc4 = t;
		t.source = "zd_bq_01_png";
		t.visible = false;
		t.x = 120;
		t.y = 0;
		return t;
	};
	_proto.bqzdc5_i = function () {
		var t = new eui.Image();
		this.bqzdc5 = t;
		t.source = "zd_bq_01_png";
		t.visible = false;
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto.bqzd0_i = function () {
		var t = new eui.Image();
		this.bqzd0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "zd_bq_00_png";
		t.visible = false;
		return t;
	};
	_proto.bqzd1_i = function () {
		var t = new eui.Image();
		this.bqzd1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "zd_bq_00_png";
		t.visible = false;
		t.x = 30;
		t.y = 0;
		return t;
	};
	_proto.bqzd2_i = function () {
		var t = new eui.Image();
		this.bqzd2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "zd_bq_00_png";
		t.visible = false;
		t.x = 60;
		t.y = 0;
		return t;
	};
	_proto.bqzd3_i = function () {
		var t = new eui.Image();
		this.bqzd3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "zd_bq_00_png";
		t.visible = false;
		t.x = 90;
		t.y = 0;
		return t;
	};
	_proto.bqzd4_i = function () {
		var t = new eui.Image();
		this.bqzd4 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "zd_bq_00_png";
		t.visible = false;
		t.x = 120;
		t.y = 0;
		return t;
	};
	_proto.bqzd5_i = function () {
		var t = new eui.Image();
		this.bqzd5 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "zd_bq_00_png";
		t.visible = false;
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto.xdqzdc0_i = function () {
		var t = new eui.Image();
		this.xdqzdc0 = t;
		t.source = "zd_pz_01_png";
		t.visible = false;
		return t;
	};
	_proto.xdqzdc1_i = function () {
		var t = new eui.Image();
		this.xdqzdc1 = t;
		t.source = "zd_pz_01_png";
		t.visible = false;
		t.x = 30;
		t.y = 0;
		return t;
	};
	_proto.xdqzdc2_i = function () {
		var t = new eui.Image();
		this.xdqzdc2 = t;
		t.source = "zd_pz_01_png";
		t.visible = false;
		t.x = 60;
		t.y = 0;
		return t;
	};
	_proto.xdqzdc3_i = function () {
		var t = new eui.Image();
		this.xdqzdc3 = t;
		t.source = "zd_pz_01_png";
		t.visible = false;
		t.x = 90;
		t.y = 0;
		return t;
	};
	_proto.xdqzdc4_i = function () {
		var t = new eui.Image();
		this.xdqzdc4 = t;
		t.source = "zd_pz_01_png";
		t.visible = false;
		t.x = 120;
		t.y = 0;
		return t;
	};
	_proto.xdqzdc5_i = function () {
		var t = new eui.Image();
		this.xdqzdc5 = t;
		t.source = "zd_pz_01_png";
		t.visible = false;
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto.xdqzd0_i = function () {
		var t = new eui.Image();
		this.xdqzd0 = t;
		t.source = "zd_pz_00_png";
		t.visible = false;
		return t;
	};
	_proto.xdqzd1_i = function () {
		var t = new eui.Image();
		this.xdqzd1 = t;
		t.source = "zd_pz_00_png";
		t.visible = false;
		t.x = 30;
		t.y = 0;
		return t;
	};
	_proto.xdqzd2_i = function () {
		var t = new eui.Image();
		this.xdqzd2 = t;
		t.source = "zd_pz_00_png";
		t.visible = false;
		t.x = 60;
		t.y = 0;
		return t;
	};
	_proto.xdqzd3_i = function () {
		var t = new eui.Image();
		this.xdqzd3 = t;
		t.source = "zd_pz_00_png";
		t.visible = false;
		t.x = 90;
		t.y = 0;
		return t;
	};
	_proto.xdqzd4_i = function () {
		var t = new eui.Image();
		this.xdqzd4 = t;
		t.source = "zd_pz_00_png";
		t.visible = false;
		t.x = 120;
		t.y = 0;
		return t;
	};
	_proto.xdqzd5_i = function () {
		var t = new eui.Image();
		this.xdqzd5 = t;
		t.source = "zd_pz_00_png";
		t.visible = false;
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto.sqzdc0_i = function () {
		var t = new eui.Image();
		this.sqzdc0 = t;
		t.source = "zd_sq_01_png";
		return t;
	};
	_proto.sqzdc1_i = function () {
		var t = new eui.Image();
		this.sqzdc1 = t;
		t.source = "zd_sq_01_png";
		t.x = 30;
		t.y = 0;
		return t;
	};
	_proto.sqzdc2_i = function () {
		var t = new eui.Image();
		this.sqzdc2 = t;
		t.source = "zd_sq_01_png";
		t.x = 60;
		t.y = 0;
		return t;
	};
	_proto.sqzdc3_i = function () {
		var t = new eui.Image();
		this.sqzdc3 = t;
		t.source = "zd_sq_01_png";
		t.x = 90;
		t.y = 0;
		return t;
	};
	_proto.sqzdc4_i = function () {
		var t = new eui.Image();
		this.sqzdc4 = t;
		t.source = "zd_sq_01_png";
		t.x = 120;
		t.y = 0;
		return t;
	};
	_proto.sqzdc5_i = function () {
		var t = new eui.Image();
		this.sqzdc5 = t;
		t.source = "zd_sq_01_png";
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto.sqzd0_i = function () {
		var t = new eui.Image();
		this.sqzd0 = t;
		t.source = "zd_sq_00_png";
		return t;
	};
	_proto.sqzd1_i = function () {
		var t = new eui.Image();
		this.sqzd1 = t;
		t.source = "zd_sq_00_png";
		t.x = 30;
		t.y = 0;
		return t;
	};
	_proto.sqzd2_i = function () {
		var t = new eui.Image();
		this.sqzd2 = t;
		t.source = "zd_sq_00_png";
		t.x = 60;
		t.y = 0;
		return t;
	};
	_proto.sqzd3_i = function () {
		var t = new eui.Image();
		this.sqzd3 = t;
		t.source = "zd_sq_00_png";
		t.x = 90;
		t.y = 0;
		return t;
	};
	_proto.sqzd4_i = function () {
		var t = new eui.Image();
		this.sqzd4 = t;
		t.source = "zd_sq_00_png";
		t.x = 120;
		t.y = 0;
		return t;
	};
	_proto.sqzd5_i = function () {
		var t = new eui.Image();
		this.sqzd5 = t;
		t.source = "zd_sq_00_png";
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto.reloadTag_i = function () {
		var t = new eui.Image();
		this.reloadTag = t;
		t.anchorOffsetY = 198;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "zd_shangdan_png";
		t.visible = false;
		t.x = 245;
		t.y = 300;
		return t;
	};
	return DuelSceneSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Buttons/CDButton0.exml'] = window.CDButton0 = (function (_super) {
	__extends(CDButton0, _super);
	function CDButton0() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.maxWidth = 284;
		this.minHeight = 90;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
		];
	}
	var _proto = CDButton0.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "sy_anniu_00_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "排位战";
		t.textColor = 0x6c3e14;
		t.verticalCenter = 0;
		return t;
	};
	return CDButton0;
})(eui.Skin);generateEUI.paths['resource/eui_skins/WareHouse/GunAttrItem.exml'] = window.GunAttrItem = (function (_super) {
	__extends(GunAttrItem, _super);
	function GunAttrItem() {
		_super.call(this);
		this.skinParts = ["label_k","label_v"];
		
		this.width = 330;
		this.elementsContent = [this.label_k_i(),this.label_v_i()];
	}
	var _proto = GunAttrItem.prototype;

	_proto.label_k_i = function () {
		var t = new eui.Label();
		this.label_k = t;
		t.size = 20;
		t.text = "伤害";
		t.textColor = 0x6c3e14;
		t.x = 15;
		return t;
	};
	_proto.label_v_i = function () {
		var t = new eui.Label();
		this.label_v = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "29";
		t.textColor = 0xb97326;
		return t;
	};
	return GunAttrItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/WareHouse/HouseItem.exml'] = window.HouseItem = (function (_super) {
	__extends(HouseItem, _super);
	function HouseItem() {
		_super.call(this);
		this.skinParts = ["bgImg","propImg","iconImg","suoImgBg","suoImg","propLabel"];
		
		this.elementsContent = [this.bgImg_i(),this.propImg_i(),this.iconImg_i(),this.suoImgBg_i(),this.suoImg_i(),this.propLabel_i()];
	}
	var _proto = HouseItem.prototype;

	_proto.bgImg_i = function () {
		var t = new eui.Image();
		this.bgImg = t;
		t.source = "ck_wupin_putong_png";
		t.x = 0;
		t.y = 4;
		return t;
	};
	_proto.propImg_i = function () {
		var t = new eui.Image();
		this.propImg = t;
		t.source = "";
		t.x = 5;
		t.y = 7;
		return t;
	};
	_proto.iconImg_i = function () {
		var t = new eui.Image();
		this.iconImg = t;
		t.source = "ck_tubiao_dangqian_png";
		t.x = 81;
		t.y = 0;
		return t;
	};
	_proto.suoImgBg_i = function () {
		var t = new eui.Image();
		this.suoImgBg = t;
		t.source = "ck_wupin_suo_png";
		t.visible = false;
		return t;
	};
	_proto.suoImg_i = function () {
		var t = new eui.Image();
		this.suoImg = t;
		t.source = "ck_tubiao_suo_png";
		t.visible = false;
		t.x = 28;
		t.y = 30;
		return t;
	};
	_proto.propLabel_i = function () {
		var t = new eui.Label();
		this.propLabel = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "皮帽子";
		t.y = 80;
		return t;
	};
	return HouseItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/main/component/CKBtnBack.exml'] = window.CKBtnBack = (function (_super) {
	__extends(CKBtnBack, _super);
	function CKBtnBack() {
		_super.call(this);
		this.skinParts = ["label"];
		
		this.height = 70;
		this.width = 180;
		this.elementsContent = [this._Image1_i(),this.label_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
		];
	}
	var _proto = CKBtnBack.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "ck_anniu_fanhui_png";
		return t;
	};
	_proto.label_i = function () {
		var t = new eui.Label();
		this.label = t;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "返 回";
		t.textColor = 0x6c3e14;
		t.verticalCenter = 0;
		return t;
	};
	return CKBtnBack;
})(eui.Skin);generateEUI.paths['resource/eui_skins/main/component/CKBtnBuy.exml'] = window.CKBtnBuy = (function (_super) {
	__extends(CKBtnBuy, _super);
	function CKBtnBuy() {
		_super.call(this);
		this.skinParts = ["img_left","label_right"];
		
		this.height = 60;
		this.width = 150;
		this.elementsContent = [this._Image1_i(),this.img_left_i(),this.label_right_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
		];
	}
	var _proto = CKBtnBuy.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "ck_anniu_goumai_png";
		return t;
	};
	_proto.img_left_i = function () {
		var t = new eui.Image();
		this.img_left = t;
		t.source = "sy_jinbi_png";
		t.x = 20;
		t.y = 12;
		return t;
	};
	_proto.label_right_i = function () {
		var t = new eui.Label();
		this.label_right = t;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0xb97326;
		t.text = "200";
		t.textColor = 0xffffff;
		t.x = 76;
		t.y = 21;
		return t;
	};
	return CKBtnBuy;
})(eui.Skin);generateEUI.paths['resource/eui_skins/main/component/CommonBtn1Skin.exml'] = window.CommonBtn1Skin = (function (_super) {
	__extends(CommonBtn1Skin, _super);
	function CommonBtn1Skin() {
		_super.call(this);
		this.skinParts = ["bgImg","nameTF"];
		
		this.height = 94;
		this.width = 290;
		this.elementsContent = [this.bgImg_i(),this.nameTF_i()];
	}
	var _proto = CommonBtn1Skin.prototype;

	_proto.bgImg_i = function () {
		var t = new eui.Image();
		this.bgImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(82,46,117,0);
		t.source = "sy_anniu_00_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.nameTF_i = function () {
		var t = new eui.Label();
		this.nameTF = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x6C3E14;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 288;
		return t;
	};
	return CommonBtn1Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/WareHouse/HouseSceneSkin.exml'] = window.HouseSceneSkin = (function (_super) {
	__extends(HouseSceneSkin, _super);
	function HouseSceneSkin() {
		_super.call(this);
		this.skinParts = ["btnBack","coinImg","coinTF","diamondImg","diamondTF","groupLeft","ck_title","groupHouse","labelBuy","btnBuy0","btnBuy1","btnUse","unlockLevel","line_down","propTitle","propIcon","propDes","experTitle","experValue","attrGroup","groupDetial","groupRight"];
		
		this.height = 1386;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.groupLeft_i(),this.groupRight_i()];
	}
	var _proto = HouseSceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "ck_diban_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.groupLeft_i = function () {
		var t = new eui.Group();
		this.groupLeft = t;
		t.height = 1386;
		t.width = 310;
		t.elementsContent = [this._Image2_i(),this.btnBack_i(),this.coinImg_i(),this.coinTF_i(),this.diamondImg_i(),this.diamondTF_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "ck_ceban_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.btnBack_i = function () {
		var t = new eui.Component();
		this.btnBack = t;
		t.anchorOffsetX = 90;
		t.anchorOffsetY = 35;
		t.skinName = "CKBtnBack";
		t.x = 98;
		t.y = 43;
		return t;
	};
	_proto.coinImg_i = function () {
		var t = new eui.Image();
		this.coinImg = t;
		t.source = "sy_jinbi_png";
		t.x = 68;
		t.y = 1132;
		return t;
	};
	_proto.coinTF_i = function () {
		var t = new eui.Label();
		this.coinTF = t;
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0xb97326;
		t.text = "999999";
		t.textColor = 0xffffff;
		t.x = 114;
		t.y = 1140;
		return t;
	};
	_proto.diamondImg_i = function () {
		var t = new eui.Image();
		this.diamondImg = t;
		t.source = "sy_zuanshi_png";
		t.x = 68;
		t.y = 1176;
		return t;
	};
	_proto.diamondTF_i = function () {
		var t = new eui.Label();
		this.diamondTF = t;
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0xb97326;
		t.text = "999999";
		t.textColor = 0xffffff;
		t.x = 114;
		t.y = 1184;
		return t;
	};
	_proto.groupRight_i = function () {
		var t = new eui.Group();
		this.groupRight = t;
		t.width = 330;
		t.x = 310;
		t.y = 124;
		t.elementsContent = [this.ck_title_i(),this._Image3_i(),this.groupHouse_i(),this.groupDetial_i()];
		return t;
	};
	_proto.ck_title_i = function () {
		var t = new eui.Label();
		this.ck_title = t;
		t.size = 30;
		t.text = "仓 库";
		t.textColor = 0x6c3e14;
		t.x = 5;
		t.y = 200;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "ck_hengxian_png";
		t.x = 5;
		t.y = 240;
		return t;
	};
	_proto.groupHouse_i = function () {
		var t = new eui.Group();
		this.groupHouse = t;
		t.anchorOffsetY = 0;
		t.height = 1014;
		t.width = 330;
		t.x = 0;
		t.y = 244;
		return t;
	};
	_proto.groupDetial_i = function () {
		var t = new eui.Group();
		this.groupDetial = t;
		t.height = 1014;
		t.width = 330;
		t.y = 124;
		t.elementsContent = [this.labelBuy_i(),this.btnBuy0_i(),this.btnBuy1_i(),this.btnUse_i(),this.unlockLevel_i(),this.line_down_i(),this.propTitle_i(),this.propIcon_i(),this.propDes_i(),this.experTitle_i(),this.experValue_i(),this.attrGroup_i()];
		return t;
	};
	_proto.labelBuy_i = function () {
		var t = new eui.Label();
		this.labelBuy = t;
		t.size = 20;
		t.text = "购买：";
		t.textColor = 0x6c3e14;
		t.x = 5;
		t.y = 738;
		return t;
	};
	_proto.btnBuy0_i = function () {
		var t = new eui.Component();
		this.btnBuy0 = t;
		t.anchorOffsetX = 75;
		t.anchorOffsetY = 30;
		t.skinName = "CKBtnBuy";
		t.x = 80;
		t.y = 804;
		return t;
	};
	_proto.btnBuy1_i = function () {
		var t = new eui.Component();
		this.btnBuy1 = t;
		t.anchorOffsetX = 75;
		t.anchorOffsetY = 30;
		t.skinName = "CKBtnBuy";
		t.x = 250;
		t.y = 804;
		return t;
	};
	_proto.btnUse_i = function () {
		var t = new eui.Component();
		this.btnUse = t;
		t.anchorOffsetX = 145;
		t.anchorOffsetY = 47;
		t.horizontalCenter = 0;
		t.skinName = "CommonBtn1Skin";
		t.y = 947;
		return t;
	};
	_proto.unlockLevel_i = function () {
		var t = new eui.Label();
		this.unlockLevel = t;
		t.anchorOffsetY = 15;
		t.horizontalCenter = 0;
		t.text = "XX级解锁获得";
		t.visible = false;
		t.y = 947;
		return t;
	};
	_proto.line_down_i = function () {
		var t = new eui.Image();
		this.line_down = t;
		t.source = "ck_hengxian_png";
		t.x = 5;
		t.y = 850;
		return t;
	};
	_proto.propTitle_i = function () {
		var t = new eui.Label();
		this.propTitle = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "死亡左轮";
		t.textColor = 0xb97326;
		t.y = 150;
		return t;
	};
	_proto.propIcon_i = function () {
		var t = new eui.Image();
		this.propIcon = t;
		t.source = "";
		t.x = 15;
		t.y = 170;
		return t;
	};
	_proto.propDes_i = function () {
		var t = new eui.Label();
		this.propDes = t;
		t.size = 20;
		t.text = "见过这把枪的人都死掉了";
		t.textColor = 0xb97326;
		t.width = 300;
		t.x = 15;
		t.y = 370;
		return t;
	};
	_proto.experTitle_i = function () {
		var t = new eui.Label();
		this.experTitle = t;
		t.size = 24;
		t.text = "熟练度：";
		t.textColor = 0x6c3e14;
		t.x = 15;
		t.y = 410;
		return t;
	};
	_proto.experValue_i = function () {
		var t = new eui.Label();
		this.experValue = t;
		t.horizontalCenter = 0.5;
		t.size = 20;
		t.text = "999/999";
		t.textColor = 0xb97326;
		t.y = 412;
		return t;
	};
	_proto.attrGroup_i = function () {
		var t = new eui.Group();
		this.attrGroup = t;
		t.width = 330;
		t.y = 484;
		return t;
	};
	return HouseSceneSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/main/component/CommonBtn2Skin.exml'] = window.CommonBtn2Skin = (function (_super) {
	__extends(CommonBtn2Skin, _super);
	function CommonBtn2Skin() {
		_super.call(this);
		this.skinParts = ["bgImg","tfImg"];
		
		this.height = 78;
		this.width = 249;
		this.elementsContent = [this.bgImg_i(),this.tfImg_i()];
	}
	var _proto = CommonBtn2Skin.prototype;

	_proto.bgImg_i = function () {
		var t = new eui.Image();
		this.bgImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(82,46,117,0);
		t.source = "sy_anniu_00_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tfImg_i = function () {
		var t = new eui.Image();
		this.tfImg = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	return CommonBtn2Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/buyTi/BuyTiDialogSkin.exml'] = window.BuyTiDialogSkin = (function (_super) {
	__extends(BuyTiDialogSkin, _super);
	function BuyTiDialogSkin() {
		_super.call(this);
		this.skinParts = ["bg","backBtn","diamondTF","list"];
		
		this.height = 1386;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this.bg_i(),this.backBtn_i(),this._Image1_i(),this._Label1_i(),this.diamondTF_i(),this._Scroller1_i(),this._Image2_i(),this._Image3_i()];
	}
	var _proto = BuyTiDialogSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.6;
		t.height = 1386;
		t.horizontalCenter = 0;
		t.strokeAlpha = 1;
		t.verticalCenter = 0;
		t.width = 640;
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.horizontalCenter = 0.5;
		t.source = "ck_diban_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Component();
		this.backBtn = t;
		t.anchorOffsetX = 92.42;
		t.anchorOffsetY = 34.85;
		t.height = 74.3;
		t.skinName = "CommonBtn2Skin";
		t.width = 186.97;
		t.x = 110.09;
		t.y = 183.43;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "cz_dingban_png";
		t.y = 251.03;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "购买体力";
		t.textColor = 0x6C3E14;
		t.y = 302;
		return t;
	};
	_proto.diamondTF_i = function () {
		var t = new eui.Label();
		this.diamondTF = t;
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0xB97326;
		t.text = "9999";
		t.textColor = 0xFFFFFF;
		t.x = 497.68;
		t.y = 339;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 682;
		t.horizontalCenter = 0;
		t.width = 590;
		t.y = 379;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.Group();
		this.list = t;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sj_xian_png";
		t.y = 1098;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "sy_zuanshi_png";
		t.x = 451;
		t.y = 332;
		return t;
	};
	return BuyTiDialogSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/battleEnd/BattleEndDialogSkin.exml'] = window.BattleEndDialogSkin = (function (_super) {
	__extends(BattleEndDialogSkin, _super);
	function BattleEndDialogSkin() {
		_super.call(this);
		this.skinParts = ["bg","img_result","leftBtn","rightBtn","rewardTF","desTF1","desTF2","lvTF"];
		
		this.height = 1386;
		this.width = 640;
		this.elementsContent = [this.bg_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this.img_result_i(),this._Image4_i(),this._Image5_i(),this._Label1_i(),this._Label2_i(),this._Image6_i(),this.leftBtn_i(),this.rightBtn_i(),this.rewardTF_i(),this._Image7_i(),this._Image8_i(),this.desTF1_i(),this.desTF2_i(),this.lvTF_i(),this._Image9_i(),this._Image10_i(),this._Image11_i()];
	}
	var _proto = BattleEndDialogSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Rect();
		this.bg = t;
		t.fillAlpha = 0.6;
		t.height = 1386;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 640;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "zd_jsmb_png";
		t.x = 57;
		t.y = 342;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "zd_zsnt_png";
		t.x = 137;
		t.y = 292;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "zd_tz_ni_png";
		t.x = 224;
		t.y = 405;
		return t;
	};
	_proto.img_result_i = function () {
		var t = new eui.Image();
		this.img_result = t;
		t.source = "";
		t.x = 291;
		t.y = 405;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "zd_tz_le_png";
		t.x = 359;
		t.y = 405;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "zd_tz_tan_png";
		t.x = 426;
		t.y = 405;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 24;
		t.text = "分享可获得";
		t.textColor = 0xb97527;
		t.x = 203;
		t.y = 982;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 24;
		t.text = "X10";
		t.textColor = 0xb97527;
		t.x = 373;
		t.y = 982;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "sy_jinbi_png";
		t.x = 330;
		t.y = 977;
		return t;
	};
	_proto.leftBtn_i = function () {
		var t = new eui.Component();
		this.leftBtn = t;
		t.anchorOffsetX = 101;
		t.anchorOffsetY = 39;
		t.skinName = "CommonBtn2Skin";
		t.width = 202;
		t.x = 213;
		t.y = 931;
		return t;
	};
	_proto.rightBtn_i = function () {
		var t = new eui.Component();
		this.rightBtn = t;
		t.anchorOffsetX = 102;
		t.anchorOffsetY = 38;
		t.skinName = "CommonBtn2Skin";
		t.width = 202;
		t.x = 435;
		t.y = 930;
		return t;
	};
	_proto.rewardTF_i = function () {
		var t = new eui.Label();
		this.rewardTF = t;
		t.horizontalCenter = 0;
		t.text = "";
		t.y = 832;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "ck_hengxian_png";
		t.x = 160;
		t.y = 631;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "sy_touxiang_png";
		t.x = 144;
		t.y = 500;
		return t;
	};
	_proto.desTF1_i = function () {
		var t = new eui.Label();
		this.desTF1 = t;
		t.anchorOffsetX = 0;
		t.lineSpacing = 10;
		t.size = 30;
		t.text = "";
		t.textColor = 0xFFFFFF;
		t.x = 299;
		t.y = 500;
		return t;
	};
	_proto.desTF2_i = function () {
		var t = new eui.Label();
		this.desTF2 = t;
		t.anchorOffsetX = 0;
		t.lineSpacing = 10;
		t.size = 30;
		t.text = "";
		t.textColor = 0xFFFFFF;
		t.x = 299;
		t.y = 653;
		return t;
	};
	_proto.lvTF_i = function () {
		var t = new eui.Label();
		this.lvTF = t;
		t.anchorOffsetX = 0;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xB97326;
		t.text = "lv.99";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 127.4;
		t.x = 130.3;
		t.y = 767.91;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.source = "sy_duanwei_00_png";
		t.x = 456;
		t.y = 640;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.source = "sy_duanwei_00_png";
		t.x = 456;
		t.y = 475;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "sy_touxiang_png";
		t.x = 144;
		t.y = 651;
		return t;
	};
	return BattleEndDialogSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/charge/ChargeDialogSkin.exml'] = window.ChargeDialogSkin = (function (_super) {
	__extends(ChargeDialogSkin, _super);
	function ChargeDialogSkin() {
		_super.call(this);
		this.skinParts = ["bg","backBtn","list"];
		
		this.height = 1386;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this.bg_i(),this.backBtn_i(),this._Image1_i(),this._Label1_i(),this._Scroller1_i(),this._Image2_i()];
	}
	var _proto = ChargeDialogSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.6;
		t.height = 1386;
		t.horizontalCenter = 0;
		t.strokeAlpha = 1;
		t.verticalCenter = 0;
		t.width = 640;
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.horizontalCenter = 0.5;
		t.source = "ck_diban_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Component();
		this.backBtn = t;
		t.anchorOffsetX = 92.42;
		t.anchorOffsetY = 34.85;
		t.height = 74.3;
		t.skinName = "CommonBtn2Skin";
		t.width = 186.97;
		t.x = 110.09;
		t.y = 183.43;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "cz_dingban_png";
		t.y = 251.03;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "充值";
		t.textColor = 0x6c3e14;
		t.y = 327.03;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 682;
		t.horizontalCenter = 0;
		t.width = 590;
		t.y = 379;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.Group();
		this.list = t;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sj_xian_png";
		t.y = 1098;
		return t;
	};
	return ChargeDialogSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/lvup/LvupDialogSkin.exml'] = window.LvupDialogSkin = (function (_super) {
	__extends(LvupDialogSkin, _super);
	function LvupDialogSkin() {
		_super.call(this);
		this.skinParts = ["bg","okBtn","lvBF","hpTF","hpTF0","hpTF1","coinTF","diamondTF","groupLocked"];
		
		this.height = 1386;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this.bg_i(),this.okBtn_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this.lvBF_i(),this._Image10_i(),this.hpTF_i(),this.hpTF0_i(),this.hpTF1_i(),this._Image11_i(),this._Image12_i(),this.coinTF_i(),this.diamondTF_i(),this._Image13_i(),this._Label1_i(),this.groupLocked_i()];
	}
	var _proto = LvupDialogSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.6;
		t.height = 1386;
		t.horizontalCenter = 0;
		t.strokeAlpha = 1;
		t.verticalCenter = 0;
		t.width = 640;
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.horizontalCenter = 0.5;
		t.source = "ck_diban_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eui.Component();
		this.okBtn = t;
		t.anchorOffsetX = 124.42;
		t.anchorOffsetY = 38.85;
		t.horizontalCenter = 0;
		t.skinName = "CommonBtn2Skin";
		t.y = 1087.43;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sj_rwdb_png";
		t.y = 336;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "sj_tf_png";
		t.x = 18;
		t.y = 206;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "js_deng_png";
		t.x = 136;
		t.y = 254.5;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "js_ji_png";
		t.x = 224;
		t.y = 224;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "js_ti_png";
		t.x = 325;
		t.y = 224.5;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "js_sheng_png";
		t.x = 426;
		t.y = 254.5;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "sj_wpl_png";
		t.visible = false;
		t.x = 16;
		t.y = 700;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sj_djc_png";
		t.y = 322;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sj_djx_png";
		t.y = 286;
		return t;
	};
	_proto.lvBF_i = function () {
		var t = new eui.BitmapLabel();
		this.lvBF = t;
		t.font = "js_sz_fnt";
		t.horizontalCenter = 0;
		t.text = "30";
		t.y = 350;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "zd_sbdk_png";
		t.x = 205;
		t.y = 436;
		return t;
	};
	_proto.hpTF_i = function () {
		var t = new eui.Label();
		this.hpTF = t;
		t.horizontalCenter = 0.5;
		t.text = "角色血量：+35";
		t.textColor = 0x6c3e14;
		t.y = 500;
		return t;
	};
	_proto.hpTF0_i = function () {
		var t = new eui.Label();
		this.hpTF0 = t;
		t.horizontalCenter = 0.5;
		t.text = "角色血量：+35";
		t.textColor = 0x6C3E14;
		t.y = 550;
		return t;
	};
	_proto.hpTF1_i = function () {
		var t = new eui.Label();
		this.hpTF1 = t;
		t.horizontalCenter = -0.5;
		t.text = "角色血量：+35";
		t.textColor = 0x6C3E14;
		t.y = 600;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "sy_jinbi_png";
		t.visible = false;
		t.x = 148;
		t.y = 589;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "sy_zuanshi_png";
		t.visible = false;
		t.x = 344;
		t.y = 589;
		return t;
	};
	_proto.coinTF_i = function () {
		var t = new eui.Label();
		this.coinTF = t;
		t.stroke = 2;
		t.strokeColor = 0xb97326;
		t.text = "100";
		t.visible = false;
		t.x = 203;
		t.y = 592;
		return t;
	};
	_proto.diamondTF_i = function () {
		var t = new eui.Label();
		this.diamondTF = t;
		t.stroke = 2;
		t.strokeColor = 0xb97326;
		t.text = "100";
		t.visible = false;
		t.x = 399.5;
		t.y = 592;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "sj_xian_png";
		t.x = 136;
		t.y = 710;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "解锁新装备：";
		t.textColor = 0x6c3e14;
		t.x = 36;
		t.y = 738;
		return t;
	};
	_proto.groupLocked_i = function () {
		var t = new eui.Group();
		this.groupLocked = t;
		t.width = 640;
		t.y = 800;
		return t;
	};
	return LvupDialogSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/lvup/propUnLockItem.exml'] = window.propUnLockItem = (function (_super) {
	__extends(propUnLockItem, _super);
	function propUnLockItem() {
		_super.call(this);
		this.skinParts = ["img_prop","label_prop"];
		
		this.height = 102;
		this.width = 290;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.img_prop_i(),this.label_prop_i()];
	}
	var _proto = propUnLockItem.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "sj_wpl_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "sy_zhuangbeilan_png";
		t.y = 5;
		return t;
	};
	_proto.img_prop_i = function () {
		var t = new eui.Image();
		this.img_prop = t;
		t.source = "";
		t.x = 43;
		t.y = 48;
		return t;
	};
	_proto.label_prop_i = function () {
		var t = new eui.Label();
		this.label_prop = t;
		t.size = 20;
		t.text = "死亡左轮";
		t.textAlign = "left";
		t.textColor = 0xB97326;
		t.x = 145;
		t.y = 38;
		return t;
	};
	return propUnLockItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/main/component/MainTabBtnComponentSkin.exml'] = window.MainTabBtnComponentSkin = (function (_super) {
	__extends(MainTabBtnComponentSkin, _super);
	function MainTabBtnComponentSkin() {
		_super.call(this);
		this.skinParts = ["bgImg","tfImg"];
		
		this.height = 68;
		this.width = 138;
		this.elementsContent = [this.bgImg_i(),this.tfImg_i()];
	}
	var _proto = MainTabBtnComponentSkin.prototype;

	_proto.bgImg_i = function () {
		var t = new eui.Image();
		this.bgImg = t;
		t.source = "sy_gongneng_01_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tfImg_i = function () {
		var t = new eui.Image();
		this.tfImg = t;
		t.right = 13;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	return MainTabBtnComponentSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/main/component/MainPropComponentSkin.exml'] = window.MainPropComponentSkin = (function (_super) {
	__extends(MainPropComponentSkin, _super);
	function MainPropComponentSkin() {
		_super.call(this);
		this.skinParts = ["bgImg","iconImg","tfImg","noneTF"];
		
		this.height = 122;
		this.width = 86;
		this.elementsContent = [this.bgImg_i(),this.iconImg_i(),this.tfImg_i(),this.noneTF_i()];
	}
	var _proto = MainPropComponentSkin.prototype;

	_proto.bgImg_i = function () {
		var t = new eui.Image();
		this.bgImg = t;
		t.horizontalCenter = 0;
		t.source = "sy_zhuangbeilan_png";
		t.verticalCenter = -17;
		return t;
	};
	_proto.iconImg_i = function () {
		var t = new eui.Image();
		this.iconImg = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = -17;
		return t;
	};
	_proto.tfImg_i = function () {
		var t = new eui.Image();
		this.tfImg = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.y = 89;
		return t;
	};
	_proto.noneTF_i = function () {
		var t = new eui.Label();
		this.noneTF = t;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "空";
		t.visible = false;
		t.y = 21;
		return t;
	};
	return MainPropComponentSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/main/component/MainPrgComponentSkin.exml'] = window.MainPrgComponentSkin = (function (_super) {
	__extends(MainPrgComponentSkin, _super);
	function MainPrgComponentSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.height = 32;
		this.width = 130;
		this.elementsContent = [this._Image1_i(),this.thumb_i()];
	}
	var _proto = MainPrgComponentSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sy_tilitiaodiban_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "sy_tilitiao_png";
		t.verticalCenter = 0;
		t.x = 2;
		return t;
	};
	return MainPrgComponentSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/main/component/MainBtnComponentSkin.exml'] = window.MainBtnComponentSkin = (function (_super) {
	__extends(MainBtnComponentSkin, _super);
	function MainBtnComponentSkin() {
		_super.call(this);
		this.skinParts = ["nameTF"];
		
		this.height = 85;
		this.width = 85;
		this.elementsContent = [this._Image1_i(),this.nameTF_i()];
	}
	var _proto = MainBtnComponentSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sy_gongneng_00_png";
		t.top = 0;
		return t;
	};
	_proto.nameTF_i = function () {
		var t = new eui.Label();
		this.nameTF = t;
		t.horizontalCenter = 0;
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0xb97326;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.y = 60;
		return t;
	};
	return MainBtnComponentSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/main/MainSceneSkin.exml'] = window.MainSceneSkin = (function (_super) {
	__extends(MainSceneSkin, _super);
	function MainSceneSkin() {
		_super.call(this);
		this.skinParts = ["bg","carImg","grassImg","grassImg0","bgImg","tabBtn1","tabBtn2","personGrp","propBtn","propList","propScroll","weaponBtn","weaponList","weaponScroll","middleGrp","headImg","clickImg","nameTF","lvTF","dwImg","coinTF","chargeBtn","diamondTF","prgMc","prgTF","prgCd","buyTiBtn","topUI","leftBtn","rightBtn","bottomUI","mainBtn1","mainBtn2","mainBtn3","mainBtn4","mainBtn5","pageGroup","dialogGrp","duelGrp"];
		
		this.height = 1386;
		this.width = 640;
		this.elementsContent = [this.bg_i(),this.carImg_i(),this.grassImg_i(),this.grassImg0_i(),this.bgImg_i(),this.tabBtn1_i(),this.tabBtn2_i(),this.middleGrp_i(),this.topUI_i(),this.bottomUI_i(),this.mainBtn1_i(),this.mainBtn2_i(),this.mainBtn3_i(),this.mainBtn4_i(),this.mainBtn5_i(),this.pageGroup_i(),this.dialogGrp_i(),this.duelGrp_i()];
	}
	var _proto = MainSceneSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.horizontalCenter = 0;
		t.source = "main_bg_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.carImg_i = function () {
		var t = new eui.Image();
		this.carImg = t;
		t.source = "main_front_2_png";
		t.x = -10;
		t.y = 81.64;
		return t;
	};
	_proto.grassImg_i = function () {
		var t = new eui.Image();
		this.grassImg = t;
		t.source = "main_front_1_png";
		t.x = 26;
		t.y = 911;
		return t;
	};
	_proto.grassImg0_i = function () {
		var t = new eui.Image();
		this.grassImg0 = t;
		t.source = "main_front_1_png";
		t.x = 493.71;
		t.y = 533;
		return t;
	};
	_proto.bgImg_i = function () {
		var t = new eui.Image();
		this.bgImg = t;
		t.scale9Grid = new egret.Rectangle(80,542,480,105);
		t.source = "sy_beijing_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.tabBtn1_i = function () {
		var t = new eui.Component();
		this.tabBtn1 = t;
		t.anchorOffsetX = 138;
		t.anchorOffsetY = 34;
		t.right = 0;
		t.skinName = "MainTabBtnComponentSkin";
		t.y = 467;
		return t;
	};
	_proto.tabBtn2_i = function () {
		var t = new eui.Component();
		this.tabBtn2 = t;
		t.anchorOffsetX = 138;
		t.anchorOffsetY = 34;
		t.right = 0;
		t.skinName = "MainTabBtnComponentSkin";
		t.y = 538;
		return t;
	};
	_proto.middleGrp_i = function () {
		var t = new eui.Group();
		this.middleGrp = t;
		t.height = 0;
		t.horizontalCenter = 0;
		t.width = 640;
		t.y = 810.44;
		t.elementsContent = [this.personGrp_i(),this.propBtn_i(),this.propScroll_i(),this.weaponBtn_i(),this.weaponScroll_i()];
		return t;
	};
	_proto.personGrp_i = function () {
		var t = new eui.Group();
		this.personGrp = t;
		t.height = 0;
		t.width = 640;
		t.x = 0;
		return t;
	};
	_proto.propBtn_i = function () {
		var t = new eui.Component();
		this.propBtn = t;
		t.anchorOffsetX = 43.94;
		t.anchorOffsetY = 60.61;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "MainPropComponentSkin";
		t.x = 169.94;
		t.y = 61.61;
		return t;
	};
	_proto.propScroll_i = function () {
		var t = new eui.Scroller();
		this.propScroll = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 69.69;
		t.horizontalCenter = -145;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 225.76;
		t.y = -75.69;
		t.viewport = this.propList_i();
		return t;
	};
	_proto.propList_i = function () {
		var t = new eui.Group();
		this.propList = t;
		return t;
	};
	_proto.weaponBtn_i = function () {
		var t = new eui.Component();
		this.weaponBtn = t;
		t.anchorOffsetX = 42.97;
		t.anchorOffsetY = 60.12;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "MainPropComponentSkin";
		t.x = 470.97;
		t.y = 61.12;
		return t;
	};
	_proto.weaponScroll_i = function () {
		var t = new eui.Scroller();
		this.weaponScroll = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 69.69;
		t.horizontalCenter = -145;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 225.76;
		t.y = -75.69;
		t.viewport = this.weaponList_i();
		return t;
	};
	_proto.weaponList_i = function () {
		var t = new eui.Group();
		this.weaponList = t;
		return t;
	};
	_proto.topUI_i = function () {
		var t = new eui.Group();
		this.topUI = t;
		t.height = 0;
		t.width = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.headImg_i(),this.clickImg_i(),this.nameTF_i(),this.lvTF_i(),this.dwImg_i(),this._Image2_i(),this.coinTF_i(),this._Image3_i(),this.chargeBtn_i(),this.diamondTF_i(),this._Image4_i(),this.prgMc_i(),this.prgTF_i(),this._Image5_i(),this._Label1_i(),this.prgCd_i(),this.buyTiBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "sy_dingtiao_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headImg_i = function () {
		var t = new eui.Image();
		this.headImg = t;
		t.height = 100;
		t.source = "";
		t.width = 100;
		t.x = 5;
		t.y = 5;
		return t;
	};
	_proto.clickImg_i = function () {
		var t = new eui.Image();
		this.clickImg = t;
		t.source = "sy_touxiang_png";
		t.x = 5;
		t.y = 5;
		return t;
	};
	_proto.nameTF_i = function () {
		var t = new eui.Label();
		this.nameTF = t;
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0xb97326;
		t.text = "玩家昵称六字";
		t.textColor = 0xffffff;
		t.x = 110;
		t.y = 20;
		return t;
	};
	_proto.lvTF_i = function () {
		var t = new eui.Label();
		this.lvTF = t;
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0xb97326;
		t.text = "lv.99";
		t.textColor = 0xffffff;
		t.x = 110;
		t.y = 64;
		return t;
	};
	_proto.dwImg_i = function () {
		var t = new eui.Image();
		this.dwImg = t;
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.source = "";
		t.x = 205;
		t.y = 51;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "sy_jinbi_png";
		t.x = 334;
		t.y = 14;
		return t;
	};
	_proto.coinTF_i = function () {
		var t = new eui.Label();
		this.coinTF = t;
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0xb97326;
		t.text = "999999";
		t.textColor = 0xffffff;
		t.x = 380;
		t.y = 22;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "sy_zuanshi_png";
		t.x = 334;
		t.y = 58;
		return t;
	};
	_proto.chargeBtn_i = function () {
		var t = new eui.Image();
		this.chargeBtn = t;
		t.anchorOffsetX = 16;
		t.anchorOffsetY = 15.33;
		t.source = "sy_cz_png";
		t.x = 480;
		t.y = 74.33;
		return t;
	};
	_proto.diamondTF_i = function () {
		var t = new eui.Label();
		this.diamondTF = t;
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0xb97326;
		t.text = "999999";
		t.textColor = 0xffffff;
		t.x = 380;
		t.y = 66;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "sy_tilidiban_png";
		t.visible = false;
		t.x = 542.72;
		t.y = 146.03;
		return t;
	};
	_proto.prgMc_i = function () {
		var t = new eui.ProgressBar();
		this.prgMc = t;
		t.direction = "rtl";
		t.skinName = "MainPrgComponentSkin";
		t.value = 50;
		t.x = 441.55;
		t.y = 162.71;
		return t;
	};
	_proto.prgTF_i = function () {
		var t = new eui.Label();
		this.prgTF = t;
		t.anchorOffsetX = 0;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0xb97326;
		t.text = "20/99";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.width = 112.33;
		t.x = 449.41;
		t.y = 167.99;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "sy_tilitubiao_png";
		t.x = 552.71;
		t.y = 140;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0xb97326;
		t.text = "体";
		t.textColor = 0xffffff;
		t.x = 570.35;
		t.y = 168.31;
		return t;
	};
	_proto.prgCd_i = function () {
		var t = new eui.Label();
		this.prgCd = t;
		t.anchorOffsetX = 0;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0x6c3e14;
		t.text = "14:35";
		t.textAlign = "center";
		t.textColor = 0xfaf268;
		t.width = 75.66;
		t.x = 542.28;
		t.y = 191.64;
		return t;
	};
	_proto.buyTiBtn_i = function () {
		var t = new eui.Image();
		this.buyTiBtn = t;
		t.anchorOffsetX = 16;
		t.anchorOffsetY = 15.33;
		t.source = "sy_cz_png";
		t.x = 610.7;
		t.y = 178.38;
		return t;
	};
	_proto.bottomUI_i = function () {
		var t = new eui.Group();
		this.bottomUI = t;
		t.height = 0;
		t.width = 0;
		t.x = 0;
		t.y = 1138;
		t.elementsContent = [this.leftBtn_i(),this.rightBtn_i()];
		return t;
	};
	_proto.leftBtn_i = function () {
		var t = new eui.Component();
		this.leftBtn = t;
		t.anchorOffsetX = 140.45;
		t.anchorOffsetY = 41.51;
		t.height = 90;
		t.skinName = "CommonBtn2Skin";
		t.width = 284;
		t.x = 166.73;
		t.y = 40;
		return t;
	};
	_proto.rightBtn_i = function () {
		var t = new eui.Component();
		this.rightBtn = t;
		t.anchorOffsetX = 141;
		t.anchorOffsetY = 41.33;
		t.height = 90;
		t.skinName = "CommonBtn2Skin";
		t.width = 284;
		t.x = 472.28;
		t.y = 40;
		return t;
	};
	_proto.mainBtn1_i = function () {
		var t = new eui.Component();
		this.mainBtn1 = t;
		t.anchorOffsetX = 44;
		t.anchorOffsetY = 42;
		t.skinName = "MainBtnComponentSkin";
		t.visible = false;
		t.x = 578.92;
		t.y = 444.48;
		return t;
	};
	_proto.mainBtn2_i = function () {
		var t = new eui.Component();
		this.mainBtn2 = t;
		t.anchorOffsetX = 42.42;
		t.anchorOffsetY = 40.91;
		t.skinName = "MainBtnComponentSkin";
		t.visible = false;
		t.x = 578.92;
		t.y = 561.98;
		return t;
	};
	_proto.mainBtn3_i = function () {
		var t = new eui.Component();
		this.mainBtn3 = t;
		t.anchorOffsetX = 42.42;
		t.anchorOffsetY = 40.91;
		t.skinName = "MainBtnComponentSkin";
		t.visible = false;
		t.x = 578.92;
		t.y = 679.98;
		return t;
	};
	_proto.mainBtn4_i = function () {
		var t = new eui.Component();
		this.mainBtn4 = t;
		t.anchorOffsetX = 42.42;
		t.anchorOffsetY = 40.91;
		t.skinName = "MainBtnComponentSkin";
		t.visible = false;
		t.x = 578.92;
		t.y = 796.98;
		return t;
	};
	_proto.mainBtn5_i = function () {
		var t = new eui.Component();
		this.mainBtn5 = t;
		t.anchorOffsetX = 42.43;
		t.anchorOffsetY = 40.91;
		t.skinName = "MainBtnComponentSkin";
		t.visible = false;
		t.x = 578.92;
		t.y = 914.61;
		return t;
	};
	_proto.pageGroup_i = function () {
		var t = new eui.Group();
		this.pageGroup = t;
		return t;
	};
	_proto.dialogGrp_i = function () {
		var t = new eui.Group();
		this.dialogGrp = t;
		t.height = 0;
		t.width = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.duelGrp_i = function () {
		var t = new eui.Group();
		this.duelGrp = t;
		t.height = 0;
		t.width = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return MainSceneSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/matching/component/MatchingLeftComponentSkin.exml'] = window.MatchingLeftComponentSkin = (function (_super) {
	__extends(MatchingLeftComponentSkin, _super);
	function MatchingLeftComponentSkin() {
		_super.call(this);
		this.skinParts = ["headImg","dwImg","nameTF","lvTF"];
		
		this.height = 155;
		this.width = 388;
		this.elementsContent = [this._Image1_i(),this.headImg_i(),this.dwImg_i(),this.nameTF_i(),this.lvTF_i()];
	}
	var _proto = MatchingLeftComponentSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(187,59,158,0);
		t.scaleX = -1;
		t.source = "zd_ppdb_png";
		t.x = 388;
		t.y = 0;
		return t;
	};
	_proto.headImg_i = function () {
		var t = new eui.Image();
		this.headImg = t;
		t.horizontalCenter = 130;
		t.source = "zd_ppdx_png";
		t.y = 12;
		return t;
	};
	_proto.dwImg_i = function () {
		var t = new eui.Image();
		this.dwImg = t;
		t.horizontalCenter = 130;
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.source = "sy_duanwei_00_png";
		t.y = 104;
		return t;
	};
	_proto.nameTF_i = function () {
		var t = new eui.Label();
		this.nameTF = t;
		t.anchorOffsetX = 0;
		t.size = 30;
		t.text = "一二三四五六";
		t.textAlign = "center";
		t.textColor = 0x6c3e14;
		t.width = 262.8;
		t.x = 8.8;
		t.y = 33.65;
		return t;
	};
	_proto.lvTF_i = function () {
		var t = new eui.Label();
		this.lvTF = t;
		t.anchorOffsetX = 0;
		t.size = 30;
		t.stroke = 2;
		t.strokeColor = 0xB97326;
		t.text = "lv.99";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 263.4;
		t.x = 8.8;
		t.y = 70.56;
		return t;
	};
	return MatchingLeftComponentSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/matching/component/MatchingRightComponentSkin.exml'] = window.MatchingRightComponentSkin = (function (_super) {
	__extends(MatchingRightComponentSkin, _super);
	function MatchingRightComponentSkin() {
		_super.call(this);
		this.skinParts = ["headImg","dwImg","nameTF","lvTF","noneTF"];
		
		this.height = 155;
		this.width = 388;
		this.elementsContent = [this._Image1_i(),this.headImg_i(),this.dwImg_i(),this.nameTF_i(),this.lvTF_i(),this.noneTF_i()];
	}
	var _proto = MatchingRightComponentSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "zd_ppdb_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headImg_i = function () {
		var t = new eui.Image();
		this.headImg = t;
		t.horizontalCenter = -128;
		t.source = "zd_ppdx_png";
		t.y = 12;
		return t;
	};
	_proto.dwImg_i = function () {
		var t = new eui.Image();
		this.dwImg = t;
		t.horizontalCenter = -134;
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.source = "sy_duanwei_00_png";
		t.y = 104;
		return t;
	};
	_proto.nameTF_i = function () {
		var t = new eui.Label();
		this.nameTF = t;
		t.anchorOffsetX = 0;
		t.size = 30;
		t.text = "一二三四五六";
		t.textAlign = "center";
		t.textColor = 0x6c3e14;
		t.visible = false;
		t.width = 262.8;
		t.x = 117;
		t.y = 32;
		return t;
	};
	_proto.lvTF_i = function () {
		var t = new eui.Label();
		this.lvTF = t;
		t.anchorOffsetX = 0;
		t.size = 30;
		t.stroke = 2;
		t.strokeColor = 0xB97326;
		t.text = "lv.99";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.visible = false;
		t.width = 263.4;
		t.x = 117;
		t.y = 68.91;
		return t;
	};
	_proto.noneTF_i = function () {
		var t = new eui.Label();
		this.noneTF = t;
		t.anchorOffsetX = 0;
		t.text = "等待对手加入";
		t.textAlign = "center";
		t.textColor = 0x6c3e14;
		t.width = 262;
		t.x = 117;
		t.y = 48;
		return t;
	};
	return MatchingRightComponentSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/matching/MatchingSceneSkin.exml'] = window.MatchingSceneSkin = (function (_super) {
	__extends(MatchingSceneSkin, _super);
	function MatchingSceneSkin() {
		_super.call(this);
		this.skinParts = ["bg","backBtn","vs","leftBtn","middleBtn","rightBtn","leftMc","rightMc"];
		
		this.height = 1386;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this.bg_i(),this.backBtn_i(),this.vs_i(),this.leftBtn_i(),this.middleBtn_i(),this.rightBtn_i(),this.leftMc_i(),this.rightMc_i()];
	}
	var _proto = MatchingSceneSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.6;
		t.height = 1386;
		t.horizontalCenter = 0;
		t.strokeAlpha = 1;
		t.verticalCenter = 0;
		t.width = 640;
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.horizontalCenter = 0.5;
		t.source = "ck_diban_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Component();
		this.backBtn = t;
		t.anchorOffsetX = 92.76;
		t.anchorOffsetY = 37.52;
		t.skinName = "CommonBtn2Skin";
		t.width = 183.67;
		t.x = 110.43;
		t.y = 186.1;
		return t;
	};
	_proto.vs_i = function () {
		var t = new eui.Image();
		this.vs = t;
		t.horizontalCenter = 0;
		t.source = "zd_vs_png";
		t.y = 540;
		return t;
	};
	_proto.leftBtn_i = function () {
		var t = new eui.Component();
		this.leftBtn = t;
		t.anchorOffsetX = 123.02;
		t.anchorOffsetY = 37.33;
		t.scaleX = 0.84;
		t.skinName = "CommonBtn2Skin";
		t.x = 183.47;
		t.y = 965.33;
		return t;
	};
	_proto.middleBtn_i = function () {
		var t = new eui.Component();
		this.middleBtn = t;
		t.anchorOffsetX = 123.02;
		t.anchorOffsetY = 37.33;
		t.horizontalCenter = 0;
		t.scaleX = 0.84;
		t.skinName = "CommonBtn2Skin";
		t.y = 965.33;
		return t;
	};
	_proto.rightBtn_i = function () {
		var t = new eui.Component();
		this.rightBtn = t;
		t.anchorOffsetX = 123.81;
		t.anchorOffsetY = 36;
		t.scaleX = 0.84;
		t.skinName = "CommonBtn2Skin";
		t.x = 456.14;
		t.y = 964;
		return t;
	};
	_proto.leftMc_i = function () {
		var t = new eui.Component();
		this.leftMc = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.skinName = "MatchingLeftComponentSkin";
		t.x = -1;
		t.y = 362.5;
		return t;
	};
	_proto.rightMc_i = function () {
		var t = new eui.Component();
		this.rightMc = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.skinName = "MatchingRightComponentSkin";
		t.x = 252;
		t.y = 609;
		return t;
	};
	return MatchingSceneSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/qualifying/QualifyingSceneSkin.exml'] = window.QualifyingSceneSkin = (function (_super) {
	__extends(QualifyingSceneSkin, _super);
	function QualifyingSceneSkin() {
		_super.call(this);
		this.skinParts = ["bg","desTF1","grp1","tweenImg","desTF2","grp2","backBtn"];
		
		this.height = 1386;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this.bg_i(),this.grp1_i(),this.grp2_i(),this.backBtn_i()];
	}
	var _proto = QualifyingSceneSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.6;
		t.height = 1386;
		t.horizontalCenter = 0;
		t.strokeAlpha = 1;
		t.verticalCenter = 0;
		t.width = 640;
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.height = 1000;
		t.horizontalCenter = 0.5;
		t.source = "ck_diban_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.grp1_i = function () {
		var t = new eui.Group();
		this.grp1 = t;
		t.height = 0;
		t.width = 0;
		t.x = 114;
		t.y = 326.8;
		t.elementsContent = [this._Image1_i(),this.desTF1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 550.98;
		t.source = "zd_jsmb_png";
		t.width = 412.85;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.desTF1_i = function () {
		var t = new eui.Label();
		this.desTF1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 214.85;
		t.lineSpacing = 30;
		t.text = "AAAAA\nBBBBBBBBBB\nCCCCCCCCCCCC";
		t.textAlign = "center";
		t.width = 1050.91;
		t.x = -318.95;
		t.y = 586;
		return t;
	};
	_proto.grp2_i = function () {
		var t = new eui.Group();
		this.grp2 = t;
		t.height = 0;
		t.visible = false;
		t.width = 0;
		t.x = 138;
		t.y = 618.3;
		t.elementsContent = [this.tweenImg_i(),this._Image2_i(),this.desTF2_i()];
		return t;
	};
	_proto.tweenImg_i = function () {
		var t = new eui.Image();
		this.tweenImg = t;
		t.anchorOffsetX = 123;
		t.anchorOffsetY = 123;
		t.source = "zd_ljx_png";
		t.x = 185;
		t.y = 424.99;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "zd_zsnt_png";
		t.x = 2;
		t.y = 364.42;
		return t;
	};
	_proto.desTF2_i = function () {
		var t = new eui.Label();
		this.desTF2 = t;
		t.horizontalCenter = 182;
		t.text = "正在寻找对手...";
		t.textColor = 0x6c3e14;
		t.y = 0;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Component();
		this.backBtn = t;
		t.anchorOffsetX = 92.76;
		t.anchorOffsetY = 37.52;
		t.skinName = "CommonBtn2Skin";
		t.width = 183.67;
		t.x = 110.43;
		t.y = 186.1;
		return t;
	};
	return QualifyingSceneSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/rank/component/RankTabComponentSkin.exml'] = window.RankTabComponentSkin = (function (_super) {
	__extends(RankTabComponentSkin, _super);
	function RankTabComponentSkin() {
		_super.call(this);
		this.skinParts = ["tabTF"];
		
		this.height = 70;
		this.width = 290;
		this.elementsContent = [this._Image1_i(),this.tabTF_i()];
	}
	var _proto = RankTabComponentSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "ph_yq_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.tabTF_i = function () {
		var t = new eui.Label();
		this.tabTF = t;
		t.horizontalCenter = 0;
		t.text = "";
		t.verticalCenter = 0;
		return t;
	};
	return RankTabComponentSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/rank/RankDialogSkin.exml'] = window.RankDialogSkin = (function (_super) {
	__extends(RankDialogSkin, _super);
	function RankDialogSkin() {
		_super.call(this);
		this.skinParts = ["bg","backBtn","desTF","list","scroll","tabBtn1","tabBtn2"];
		
		this.height = 1386;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this.bg_i(),this.backBtn_i(),this.desTF_i(),this.scroll_i(),this._Image1_i(),this.tabBtn1_i(),this.tabBtn2_i()];
	}
	var _proto = RankDialogSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.6;
		t.height = 1386;
		t.horizontalCenter = 0;
		t.strokeAlpha = 1;
		t.verticalCenter = 0;
		t.width = 640;
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.horizontalCenter = 0.5;
		t.source = "ck_diban_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Component();
		this.backBtn = t;
		t.anchorOffsetX = 92.42;
		t.anchorOffsetY = 34.85;
		t.height = 74.3;
		t.skinName = "CommonBtn2Skin";
		t.width = 186.97;
		t.x = 110.09;
		t.y = 183.43;
		return t;
	};
	_proto.desTF_i = function () {
		var t = new eui.Label();
		this.desTF = t;
		t.horizontalCenter = 0;
		t.text = "当前我的世界排名";
		t.textColor = 0x6C3E14;
		t.y = 1143.03;
		return t;
	};
	_proto.scroll_i = function () {
		var t = new eui.Scroller();
		this.scroll = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 682;
		t.horizontalCenter = 0;
		t.width = 590;
		t.y = 379;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.Group();
		this.list = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sj_xian_png";
		t.y = 1098;
		return t;
	};
	_proto.tabBtn1_i = function () {
		var t = new eui.Component();
		this.tabBtn1 = t;
		t.anchorOffsetX = 145;
		t.anchorOffsetY = 70;
		t.skinName = "RankTabComponentSkin";
		t.x = 174;
		t.y = 374;
		return t;
	};
	_proto.tabBtn2_i = function () {
		var t = new eui.Component();
		this.tabBtn2 = t;
		t.anchorOffsetX = 145;
		t.anchorOffsetY = 70;
		t.skinName = "RankTabComponentSkin";
		t.x = 468;
		t.y = 374;
		return t;
	};
	return RankDialogSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/main/list/MainPropListRenderSkin.exml'] = window.MainPropListRenderSkin = (function (_super) {
	__extends(MainPropListRenderSkin, _super);
	function MainPropListRenderSkin() {
		_super.call(this);
		this.skinParts = ["bgImg","iconImg","nameTF","numTF","dqImg"];
		
		this.height = 106;
		this.width = 106;
		this.elementsContent = [this.bgImg_i(),this.iconImg_i(),this.nameTF_i(),this.numTF_i(),this.dqImg_i()];
	}
	var _proto = MainPropListRenderSkin.prototype;

	_proto.bgImg_i = function () {
		var t = new eui.Image();
		this.bgImg = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.iconImg_i = function () {
		var t = new eui.Image();
		this.iconImg = t;
		t.horizontalCenter = -1;
		t.source = "";
		t.y = 5;
		return t;
	};
	_proto.nameTF_i = function () {
		var t = new eui.Label();
		this.nameTF = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "";
		t.textColor = 0x6c3e14;
		t.y = 76;
		return t;
	};
	_proto.numTF_i = function () {
		var t = new eui.Label();
		this.numTF = t;
		t.right = 11;
		t.size = 20;
		t.text = "";
		t.textAlign = "right";
		t.textColor = 0x6C3E14;
		t.y = 54;
		return t;
	};
	_proto.dqImg_i = function () {
		var t = new eui.Image();
		this.dqImg = t;
		t.source = "ck_tubiao_dangqian_png";
		t.x = 77;
		t.y = 2;
		return t;
	};
	return MainPropListRenderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/select/SelectDialogSkin.exml'] = window.SelectDialogSkin = (function (_super) {
	__extends(SelectDialogSkin, _super);
	function SelectDialogSkin() {
		_super.call(this);
		this.skinParts = ["bg","okBtn","cap1Mc","cap2Mc","gender1Img","gender2Img","personGrp"];
		
		this.height = 1386;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this.bg_i(),this.okBtn_i(),this._Image1_i(),this._Label1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this.cap1Mc_i(),this.cap2Mc_i(),this.gender1Img_i(),this.gender2Img_i(),this.personGrp_i()];
	}
	var _proto = SelectDialogSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.6;
		t.height = 1386;
		t.horizontalCenter = 0;
		t.strokeAlpha = 1;
		t.verticalCenter = 0;
		t.width = 640;
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.horizontalCenter = 0.5;
		t.source = "main_bg_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eui.Component();
		this.okBtn = t;
		t.anchorOffsetX = 107.63;
		t.anchorOffsetY = 42.98;
		t.height = 91.64;
		t.horizontalCenter = -0.5;
		t.scaleX = 1.3;
		t.skinName = "CommonBtn2Skin";
		t.width = 217.74;
		t.y = 1106.66;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "cz_dingban_png";
		t.y = 201.03;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "创建角色";
		t.textColor = 0x6C3E14;
		t.y = 277.03;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "sj_xian_png";
		t.y = 898.06;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "sj_xian_png";
		t.y = 341.34;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "main_front_1_png";
		t.x = 44;
		t.y = 884.01;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "main_front_1_png";
		t.x = 482;
		t.y = 557.33;
		return t;
	};
	_proto.cap1Mc_i = function () {
		var t = new eui.Component();
		this.cap1Mc = t;
		t.skinName = "MainPropListRenderSkin";
		t.x = 207;
		t.y = 930.01;
		return t;
	};
	_proto.cap2Mc_i = function () {
		var t = new eui.Component();
		this.cap2Mc = t;
		t.skinName = "MainPropListRenderSkin";
		t.x = 345;
		t.y = 930.01;
		return t;
	};
	_proto.gender1Img_i = function () {
		var t = new eui.Image();
		this.gender1Img = t;
		t.source = "ck_tubiao_dangqian_png";
		t.x = 196;
		t.y = 859;
		return t;
	};
	_proto.gender2Img_i = function () {
		var t = new eui.Image();
		this.gender2Img = t;
		t.source = "ck_tubiao_dangqian_png";
		t.x = 438.5;
		t.y = 859;
		return t;
	};
	_proto.personGrp_i = function () {
		var t = new eui.Group();
		this.personGrp = t;
		t.height = 0;
		t.width = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return SelectDialogSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/setting/component/SettingComponentSkin.exml'] = window.SettingComponentSkin = (function (_super) {
	__extends(SettingComponentSkin, _super);
	function SettingComponentSkin() {
		_super.call(this);
		this.skinParts = ["nameTF","okImg"];
		
		this.height = 53;
		this.width = 169;
		this.elementsContent = [this.nameTF_i(),this._Image1_i(),this.okImg_i()];
	}
	var _proto = SettingComponentSkin.prototype;

	_proto.nameTF_i = function () {
		var t = new eui.Label();
		this.nameTF = t;
		t.size = 24;
		t.text = "音乐";
		t.textColor = 0x6C3E14;
		t.x = 14;
		t.y = 15;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "zd_sbdk_png";
		t.x = 113;
		t.y = 5;
		return t;
	};
	_proto.okImg_i = function () {
		var t = new eui.Image();
		this.okImg = t;
		t.source = "ck_tubiao_dangqian_png";
		t.x = 124.5;
		t.y = 11;
		return t;
	};
	return SettingComponentSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/setting/SettingDialogSkin.exml'] = window.SettingDialogSkin = (function (_super) {
	__extends(SettingDialogSkin, _super);
	function SettingDialogSkin() {
		_super.call(this);
		this.skinParts = ["bg","headImg","versionTF","shareBtn1","shareBtn2","lvTF","nameTF","dwImg","pwTF","starTF","yyMc","yxMc","ATF","BTF","CTF","DTF","ETF","FTF"];
		
		this.height = 1386;
		this.width = 640;
		this.elementsContent = [this.bg_i(),this._Image1_i(),this.headImg_i(),this._Image2_i(),this.versionTF_i(),this.shareBtn1_i(),this.shareBtn2_i(),this.lvTF_i(),this.nameTF_i(),this.dwImg_i(),this._Image3_i(),this._Image4_i(),this.pwTF_i(),this.starTF_i(),this._Image5_i(),this.yyMc_i(),this.yxMc_i(),this._Rect1_i(),this.ATF_i(),this.BTF_i(),this.CTF_i(),this.DTF_i(),this.ETF_i(),this.FTF_i()];
	}
	var _proto = SettingDialogSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Rect();
		this.bg = t;
		t.fillAlpha = 0.6;
		t.height = 1386;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 640;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "zd_jsmb_png";
		t.x = 57;
		t.y = 342;
		return t;
	};
	_proto.headImg_i = function () {
		var t = new eui.Image();
		this.headImg = t;
		t.height = 100;
		t.source = "";
		t.width = 100;
		t.x = 94;
		t.y = 370;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "sy_touxiang_png";
		t.x = 94;
		t.y = 370;
		return t;
	};
	_proto.versionTF_i = function () {
		var t = new eui.Label();
		this.versionTF = t;
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "";
		t.textColor = 0xB97527;
		t.y = 982;
		return t;
	};
	_proto.shareBtn1_i = function () {
		var t = new eui.Component();
		this.shareBtn1 = t;
		t.anchorOffsetX = 62.49;
		t.anchorOffsetY = 23.73;
		t.height = 47.46;
		t.skinName = "CommonBtn1Skin";
		t.width = 124.97;
		t.x = 489.24;
		t.y = 431.82;
		return t;
	};
	_proto.shareBtn2_i = function () {
		var t = new eui.Component();
		this.shareBtn2 = t;
		t.anchorOffsetX = 71.58;
		t.anchorOffsetY = 27.18;
		t.height = 54.37;
		t.skinName = "CommonBtn2Skin";
		t.width = 143.15;
		t.x = 475.58;
		t.y = 858.72;
		return t;
	};
	_proto.lvTF_i = function () {
		var t = new eui.Label();
		this.lvTF = t;
		t.anchorOffsetX = 0;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xB97326;
		t.text = "lv.99";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 127.4;
		t.x = 77.3;
		t.y = 520.32;
		return t;
	};
	_proto.nameTF_i = function () {
		var t = new eui.Label();
		this.nameTF = t;
		t.anchorOffsetX = 0;
		t.lineSpacing = 15;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xB97326;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.x = 204.7;
		t.y = 386;
		return t;
	};
	_proto.dwImg_i = function () {
		var t = new eui.Image();
		this.dwImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.source = "";
		t.x = 199.9;
		t.y = 510.32;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "sj_xian_png";
		t.x = 138;
		t.y = 495.32;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "sj_xian_png";
		t.x = 138;
		t.y = 902;
		return t;
	};
	_proto.pwTF_i = function () {
		var t = new eui.Label();
		this.pwTF = t;
		t.size = 24;
		t.text = "Label";
		t.textColor = 0x6c3e14;
		t.x = 271.22;
		t.y = 520.32;
		return t;
	};
	_proto.starTF_i = function () {
		var t = new eui.Label();
		this.starTF = t;
		t.size = 24;
		t.text = "Label";
		t.textColor = 0x6C3E14;
		t.x = 450.9;
		t.y = 520.32;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.source = "sj_djx_png";
		t.x = 396.9;
		t.y = 505.39;
		return t;
	};
	_proto.yyMc_i = function () {
		var t = new eui.Component();
		this.yyMc = t;
		t.anchorOffsetX = 84;
		t.anchorOffsetY = 25;
		t.skinName = "SettingComponentSkin";
		t.x = 204.7;
		t.y = 939;
		return t;
	};
	_proto.yxMc_i = function () {
		var t = new eui.Component();
		this.yxMc = t;
		t.anchorOffsetX = 86;
		t.anchorOffsetY = 25;
		t.skinName = "SettingComponentSkin";
		t.x = 432.5;
		t.y = 939;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 100;
		t.height = 200;
		t.visible = false;
		t.width = 200;
		t.x = 320;
		t.y = 730;
		return t;
	};
	_proto.ATF_i = function () {
		var t = new eui.Label();
		this.ATF = t;
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "命中率";
		t.textAlign = "center";
		t.y = 581.37;
		return t;
	};
	_proto.BTF_i = function () {
		var t = new eui.Label();
		this.BTF = t;
		t.horizontalCenter = 157;
		t.size = 22;
		t.text = "左轮胜场";
		t.textAlign = "center";
		t.y = 630;
		return t;
	};
	_proto.CTF_i = function () {
		var t = new eui.Label();
		this.CTF = t;
		t.horizontalCenter = 157;
		t.size = 22;
		t.text = "步枪胜场";
		t.textAlign = "center";
		t.y = 770;
		return t;
	};
	_proto.DTF_i = function () {
		var t = new eui.Label();
		this.DTF = t;
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "散弹胜场";
		t.textAlign = "center";
		t.y = 836.73;
		return t;
	};
	_proto.ETF_i = function () {
		var t = new eui.Label();
		this.ETF = t;
		t.horizontalCenter = -150;
		t.size = 22;
		t.text = "狙击胜场";
		t.textAlign = "center";
		t.y = 770;
		return t;
	};
	_proto.FTF_i = function () {
		var t = new eui.Label();
		this.FTF = t;
		t.horizontalCenter = -147;
		t.size = 22;
		t.text = "爆头率";
		t.textAlign = "center";
		t.y = 630;
		return t;
	};
	return SettingDialogSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/buyTi/list/BuyTiItemRenderSkin.exml'] = window.BuyTiItemRenderSkin = (function (_super) {
	__extends(BuyTiItemRenderSkin, _super);
	function BuyTiItemRenderSkin() {
		_super.call(this);
		this.skinParts = ["desTF","diamondTF"];
		
		this.height = 146;
		this.width = 590;
		this.elementsContent = [this._Image1_i(),this.desTF_i(),this._Image2_i(),this.diamondTF_i()];
	}
	var _proto = BuyTiItemRenderSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "cz_diban_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.desTF_i = function () {
		var t = new eui.Label();
		this.desTF = t;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xB97326;
		t.text = "玩家昵称六字";
		t.textColor = 0xFFFFFF;
		t.x = 186;
		t.y = 59;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "sy_zuanshi_png";
		t.x = 421;
		t.y = 52;
		return t;
	};
	_proto.diamondTF_i = function () {
		var t = new eui.Label();
		this.diamondTF = t;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xB97326;
		t.text = "9999";
		t.textColor = 0xFFFFFF;
		t.x = 467.68;
		t.y = 59;
		return t;
	};
	return BuyTiItemRenderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/charge/list/ChargeItemRenderSkin.exml'] = window.ChargeItemRenderSkin = (function (_super) {
	__extends(ChargeItemRenderSkin, _super);
	function ChargeItemRenderSkin() {
		_super.call(this);
		this.skinParts = ["desTF","costImg"];
		
		this.height = 146;
		this.width = 590;
		this.elementsContent = [this._Image1_i(),this.desTF_i(),this.costImg_i(),this._Label1_i()];
	}
	var _proto = ChargeItemRenderSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "cz_diban_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.desTF_i = function () {
		var t = new eui.Label();
		this.desTF = t;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xB97326;
		t.text = "玩家昵称六字";
		t.textColor = 0xFFFFFF;
		t.x = 186;
		t.y = 59;
		return t;
	};
	_proto.costImg_i = function () {
		var t = new eui.Image();
		this.costImg = t;
		t.left = 408;
		t.source = "";
		t.verticalCenter = -3;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 24;
		t.text = "额外赠送";
		t.textColor = 0xb97527;
		t.x = 186;
		t.y = 97;
		return t;
	};
	return ChargeItemRenderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/main/component/CKBtnMulu.exml'] = window.CKBtnMulu = (function (_super) {
	__extends(CKBtnMulu, _super);
	function CKBtnMulu() {
		_super.call(this);
		this.skinParts = ["img_type","label_type"];
		
		this.height = 110;
		this.width = 320;
		this.elementsContent = [this._Image1_i(),this.img_type_i(),this.label_type_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
		];
	}
	var _proto = CKBtnMulu.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "ck_anniu_mulu_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_type_i = function () {
		var t = new eui.Image();
		this.img_type = t;
		t.x = 55;
		t.y = 55;
		return t;
	};
	_proto.label_type_i = function () {
		var t = new eui.Label();
		this.label_type = t;
		t.size = 30;
		t.text = "Label";
		t.textColor = 0xb97527;
		t.x = 160;
		t.y = 40;
		return t;
	};
	return CKBtnMulu;
})(eui.Skin);generateEUI.paths['resource/eui_skins/rank/list/RankItemRenderSkin.exml'] = window.RankItemRenderSkin = (function (_super) {
	__extends(RankItemRenderSkin, _super);
	function RankItemRenderSkin() {
		_super.call(this);
		this.skinParts = ["bgImg","nameTF","lvTF","dwTF","starTF","headImg","dwImg","rankTF"];
		
		this.height = 112;
		this.width = 590;
		this.elementsContent = [this.bgImg_i(),this.nameTF_i(),this.lvTF_i(),this.dwTF_i(),this.starTF_i(),this._Image1_i(),this._Image2_i(),this.headImg_i(),this._Image3_i(),this.dwImg_i(),this._Image4_i(),this.rankTF_i()];
	}
	var _proto = RankItemRenderSkin.prototype;

	_proto.bgImg_i = function () {
		var t = new eui.Image();
		this.bgImg = t;
		t.source = "ph_db_00_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.nameTF_i = function () {
		var t = new eui.Label();
		this.nameTF = t;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xB97326;
		t.text = "玩家昵称六字";
		t.textColor = 0xFFFFFF;
		t.x = 187;
		t.y = 14;
		return t;
	};
	_proto.lvTF_i = function () {
		var t = new eui.Label();
		this.lvTF = t;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xB97326;
		t.text = "Lv.99";
		t.textColor = 0xFFFFFF;
		t.x = 384;
		t.y = 14;
		return t;
	};
	_proto.dwTF_i = function () {
		var t = new eui.Label();
		this.dwTF = t;
		t.size = 24;
		t.text = "额外赠送";
		t.textColor = 0x6c3e14;
		t.x = 249;
		t.y = 62;
		return t;
	};
	_proto.starTF_i = function () {
		var t = new eui.Label();
		this.starTF = t;
		t.size = 24;
		t.text = "Label";
		t.textColor = 0x6C3E14;
		t.x = 441;
		t.y = 62;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.87;
		t.source = "sj_djx_png";
		t.width = 45;
		t.x = 384;
		t.y = 48;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "ph_jb_00_png";
		t.x = 1;
		return t;
	};
	_proto.headImg_i = function () {
		var t = new eui.Image();
		this.headImg = t;
		t.height = 100;
		t.source = "";
		t.width = 100;
		t.x = 78;
		t.y = 2;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "sy_touxiang_png";
		t.x = 79;
		t.y = 2;
		return t;
	};
	_proto.dwImg_i = function () {
		var t = new eui.Image();
		this.dwImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 43;
		t.source = "sy_duanwei_00_png";
		t.width = 60.2;
		t.x = 185;
		t.y = 54;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "ph_zy_01_png";
		t.x = 500;
		t.y = 4;
		return t;
	};
	_proto.rankTF_i = function () {
		var t = new eui.Label();
		this.rankTF = t;
		t.text = "1";
		t.textColor = 0x6c3e14;
		t.x = 4;
		t.y = 7;
		return t;
	};
	return RankItemRenderSkin;
})(eui.Skin);