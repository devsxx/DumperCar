
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
		this.skinParts = ["sky","ground","nickname","enemy","target0","target1","target2","field","scene","itemLayer","bqzdc0","bqzdc1","bqzdc2","bqzdc3","bqzdc4","bqzdc5","bqzd0","bqzd1","bqzd2","bqzd3","bqzd4","bqzd5","xdqzdc0","xdqzdc1","xdqzdc2","xdqzdc3","xdqzdc4","xdqzdc5","xdqzd0","xdqzd1","xdqzd2","xdqzd3","xdqzd4","xdqzd5","sqzdc0","sqzdc1","sqzdc2","sqzdc3","sqzdc4","sqzdc5","sqzd0","sqzd1","sqzd2","sqzd3","sqzd4","sqzd5","bulletList","tapTag","guideBg","guideText","tapTag0","guideDialog","guide","topUI"];
		
		this.height = 1386;
		this.width = 640;
		this.elementsContent = [this.scene_i(),this.itemLayer_i(),this.topUI_i()];
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
		t.scaleX = 1.1;
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
		t.elementsContent = [this.ground_i(),this.enemy_i(),this.target0_i(),this.target1_i(),this.target2_i()];
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
		t.elementsContent = [this.nickname_i(),this._BitmapLabel1_i(),this._BitmapLabel2_i()];
		return t;
	};
	_proto.nickname_i = function () {
		var t = new eui.Label();
		this.nickname = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0x6c3e14;
		t.text = "";
		t.verticalCenter = -295;
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "dmg_ft_fnt";
		t.horizontalCenter = 0;
		t.text = "-123";
		t.visible = false;
		t.y = -245;
		return t;
	};
	_proto._BitmapLabel2_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "hp_bonus_fnt";
		t.horizontalCenter = 0;
		t.text = "+123";
		t.visible = false;
		t.y = -245;
		return t;
	};
	_proto.target0_i = function () {
		var t = new eui.Image();
		this.target0 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 264;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yd_bazi_png";
		t.visible = false;
		t.x = 320;
		t.y = 565;
		return t;
	};
	_proto.target1_i = function () {
		var t = new eui.Image();
		this.target1 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 264;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "yd_bazi_png";
		t.visible = false;
		t.x = 120;
		t.y = 545;
		return t;
	};
	_proto.target2_i = function () {
		var t = new eui.Image();
		this.target2 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 264;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "yd_bazi_png";
		t.visible = false;
		t.x = 460;
		t.y = 535;
		return t;
	};
	_proto.itemLayer_i = function () {
		var t = new eui.Group();
		this.itemLayer = t;
		t.height = 0;
		t.touchEnabled = false;
		t.width = 0;
		return t;
	};
	_proto.topUI_i = function () {
		var t = new eui.Group();
		this.topUI = t;
		t.height = 0;
		t.touchEnabled = false;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bulletList_i(),this.guide_i()];
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
		t.y = 55;
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
	_proto.guide_i = function () {
		var t = new eui.Group();
		this.guide = t;
		t.height = 1386;
		t.touchEnabled = false;
		t.width = 640;
		t.elementsContent = [this.guideBg_i(),this.guideDialog_i()];
		return t;
	};
	_proto.guideBg_i = function () {
		var t = new eui.Group();
		this.guideBg = t;
		t.height = 1386;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this.tapTag_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.6;
		t.height = 1386;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tapTag_i = function () {
		var t = new eui.Label();
		this.tapTag = t;
		t.bold = true;
		t.size = 24;
		t.text = "点击屏幕继续";
		t.x = 474.65;
		t.y = 184;
		return t;
	};
	_proto.guideDialog_i = function () {
		var t = new eui.Group();
		this.guideDialog = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchEnabled = false;
		t.visible = false;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.guideText_i(),this.tapTag0_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "yd_kanbanniang_png";
		return t;
	};
	_proto.guideText_i = function () {
		var t = new eui.Label();
		this.guideText = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 108;
		t.lineSpacing = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "Label";
		t.textAlign = "left";
		t.textColor = 0x6c3e14;
		t.verticalAlign = "middle";
		t.width = 415;
		t.x = 183;
		t.y = 59;
		return t;
	};
	_proto.tapTag0_i = function () {
		var t = new eui.Label();
		this.tapTag0 = t;
		t.bold = true;
		t.size = 24;
		t.text = "点击屏幕继续";
		t.visible = false;
		t.x = 474.65;
		t.y = 204;
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
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "排位战";
		t.textColor = 0x6c3e14;
		t.verticalCenter = 0;
		return t;
	};
	return CDButton0;
})(eui.Skin);generateEUI.paths['resource/eui_skins/main/com/CommonLBtnSkin.exml'] = window.CommonLBtnSkin = (function (_super) {
	__extends(CommonLBtnSkin, _super);
	function CommonLBtnSkin() {
		_super.call(this);
		this.skinParts = ["tfImg"];
		
		this.elementsContent = [this._Image1_i(),this.tfImg_i()];
	}
	var _proto = CommonLBtnSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "new_common_btn_l_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.tfImg_i = function () {
		var t = new eui.Image();
		this.tfImg = t;
		t.horizontalCenter = 0.5;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	return CommonLBtnSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Utils/AlertBoardSkin.exml'] = window.AlertBoardSkin = (function (_super) {
	__extends(AlertBoardSkin, _super);
	function AlertBoardSkin() {
		_super.call(this);
		this.skinParts = ["rect","labelInfo","btnSure"];
		
		this.height = 1386;
		this.width = 640;
		this.elementsContent = [this.rect_i(),this._Image1_i(),this._Image2_i(),this.labelInfo_i(),this.btnSure_i(),this._Label1_i()];
	}
	var _proto = AlertBoardSkin.prototype;

	_proto.rect_i = function () {
		var t = new eui.Rect();
		this.rect = t;
		t.fillAlpha = 0.6;
		t.height = 1386;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "tishiban_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 5;
		t.horizontalCenter = 0;
		t.source = "sz_btt_png";
		t.y = 565;
		return t;
	};
	_proto.labelInfo_i = function () {
		var t = new eui.Label();
		this.labelInfo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 177;
		t.horizontalCenter = 0.5;
		t.lineSpacing = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "分享到微信群才能获得奖励";
		t.textAlign = "center";
		t.textColor = 0x6C3E14;
		t.verticalAlign = "middle";
		t.width = 415;
		t.y = 585;
		return t;
	};
	_proto.btnSure_i = function () {
		var t = new eui.Button();
		this.btnSure = t;
		t.anchorOffsetX = 155;
		t.anchorOffsetY = 42;
		t.horizontalCenter = 1;
		t.label = "Button";
		t.skinName = "CommonLBtnSkin";
		t.y = 812;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "提  示";
		t.textColor = 0xb97326;
		t.y = 550;
		return t;
	};
	return AlertBoardSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Utils/RedPointSkin.exml'] = window.RedPointSkin = (function (_super) {
	__extends(RedPointSkin, _super);
	function RedPointSkin() {
		_super.call(this);
		this.skinParts = ["number"];
		
		this.elementsContent = [this._Image1_i(),this.number_i()];
	}
	var _proto = RedPointSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "ck_hongdian_png";
		return t;
	};
	_proto.number_i = function () {
		var t = new eui.Label();
		this.number = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "";
		t.textColor = 0xffffff;
		t.verticalCenter = 0;
		return t;
	};
	return RedPointSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/main/com/CommonMBtnSkin.exml'] = window.CommonMBtnSkin = (function (_super) {
	__extends(CommonMBtnSkin, _super);
	function CommonMBtnSkin() {
		_super.call(this);
		this.skinParts = ["tfImg"];
		
		this.elementsContent = [this._Image1_i(),this.tfImg_i()];
	}
	var _proto = CommonMBtnSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "new_common_btn_m_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.tfImg_i = function () {
		var t = new eui.Image();
		this.tfImg = t;
		t.horizontalCenter = 0.5;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	return CommonMBtnSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Utils/RemindSkin.exml'] = window.RemindSkin = (function (_super) {
	__extends(RemindSkin, _super);
	function RemindSkin() {
		_super.call(this);
		this.skinParts = ["rect","labelInfo","btnLeft","btnMiddle","btnRight"];
		
		this.height = 1386;
		this.width = 640;
		this.elementsContent = [this.rect_i(),this._Image1_i(),this.labelInfo_i(),this._Image2_i(),this.btnLeft_i(),this.btnMiddle_i(),this.btnRight_i()];
	}
	var _proto = RemindSkin.prototype;

	_proto.rect_i = function () {
		var t = new eui.Rect();
		this.rect = t;
		t.fillAlpha = 0.6;
		t.height = 1386;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sy_tishiban_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.labelInfo_i = function () {
		var t = new eui.Label();
		this.labelInfo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 134;
		t.horizontalCenter = 21;
		t.lineSpacing = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xb97326;
		t.text = "分享到微信群才能获得奖励";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 440;
		t.y = 580;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "sy_tanhao_png";
		t.x = 20;
		t.y = 614.5;
		return t;
	};
	_proto.btnLeft_i = function () {
		var t = new eui.Component();
		this.btnLeft = t;
		t.anchorOffsetX = 123;
		t.anchorOffsetY = 38;
		t.horizontalCenter = -133;
		t.skinName = "CommonMBtnSkin";
		t.y = 754;
		return t;
	};
	_proto.btnMiddle_i = function () {
		var t = new eui.Component();
		this.btnMiddle = t;
		t.anchorOffsetX = 123;
		t.anchorOffsetY = 38;
		t.horizontalCenter = 0;
		t.skinName = "CommonMBtnSkin";
		t.y = 754;
		return t;
	};
	_proto.btnRight_i = function () {
		var t = new eui.Component();
		this.btnRight = t;
		t.anchorOffsetX = 123;
		t.anchorOffsetY = 38;
		t.horizontalCenter = 133;
		t.skinName = "CommonMBtnSkin";
		t.y = 754;
		return t;
	};
	return RemindSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/main/component/DuanWeiComponentSkin.exml'] = window.DuanWeiComponentSkin = (function (_super) {
	__extends(DuanWeiComponentSkin, _super);
	function DuanWeiComponentSkin() {
		_super.call(this);
		this.skinParts = ["bgImg","star_bg","star_bg6","star3_1","star3_2","star3_3","star4_1","star4_2","star4_3","star4_4","star5_1","star5_2","star5_3","star5_4","star5_5","star6TF","star6Img","star6Img2","numBF"];
		
		this.height = 187.5;
		this.width = 212;
		this.elementsContent = [this.bgImg_i(),this.star_bg_i(),this.star_bg6_i(),this.star3_1_i(),this.star3_2_i(),this.star3_3_i(),this.star4_1_i(),this.star4_2_i(),this.star4_3_i(),this.star4_4_i(),this.star5_1_i(),this.star5_2_i(),this.star5_3_i(),this.star5_4_i(),this.star5_5_i(),this.star6TF_i(),this.star6Img_i(),this.star6Img2_i(),this.numBF_i()];
	}
	var _proto = DuanWeiComponentSkin.prototype;

	_proto.bgImg_i = function () {
		var t = new eui.Image();
		this.bgImg = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = -6.5;
		return t;
	};
	_proto.star_bg_i = function () {
		var t = new eui.Image();
		this.star_bg = t;
		t.horizontalCenter = 0;
		t.source = "sy_duanwei_xing_5_png";
		t.visible = false;
		t.y = 126;
		return t;
	};
	_proto.star_bg6_i = function () {
		var t = new eui.Image();
		this.star_bg6 = t;
		t.horizontalCenter = 0.5;
		t.source = "sy_duanwei_xing_6_png";
		t.y = 136;
		return t;
	};
	_proto.star3_1_i = function () {
		var t = new eui.Image();
		this.star3_1 = t;
		t.source = "sy_duanwei_zidan_png";
		t.visible = false;
		t.x = 56.5;
		t.y = 128;
		return t;
	};
	_proto.star3_2_i = function () {
		var t = new eui.Image();
		this.star3_2 = t;
		t.source = "sy_duanwei_zidan_png";
		t.visible = false;
		t.x = 94.5;
		t.y = 127;
		return t;
	};
	_proto.star3_3_i = function () {
		var t = new eui.Image();
		this.star3_3 = t;
		t.source = "sy_duanwei_zidan_png";
		t.visible = false;
		t.x = 129.5;
		t.y = 128;
		return t;
	};
	_proto.star4_1_i = function () {
		var t = new eui.Image();
		this.star4_1 = t;
		t.source = "sy_duanwei_zidan_png";
		t.visible = false;
		t.x = 50;
		t.y = 131.5;
		return t;
	};
	_proto.star4_2_i = function () {
		var t = new eui.Image();
		this.star4_2 = t;
		t.source = "sy_duanwei_zidan_png";
		t.visible = false;
		t.x = 82.5;
		t.y = 127.5;
		return t;
	};
	_proto.star4_3_i = function () {
		var t = new eui.Image();
		this.star4_3 = t;
		t.source = "sy_duanwei_zidan_png";
		t.visible = false;
		t.x = 112;
		t.y = 127;
		return t;
	};
	_proto.star4_4_i = function () {
		var t = new eui.Image();
		this.star4_4 = t;
		t.source = "sy_duanwei_zidan_png";
		t.visible = false;
		t.x = 141;
		t.y = 132;
		return t;
	};
	_proto.star5_1_i = function () {
		var t = new eui.Image();
		this.star5_1 = t;
		t.source = "sy_duanwei_zidan_png";
		t.visible = false;
		t.x = 42.5;
		t.y = 134.5;
		return t;
	};
	_proto.star5_2_i = function () {
		var t = new eui.Image();
		this.star5_2 = t;
		t.source = "sy_duanwei_zidan_png";
		t.visible = false;
		t.x = 67;
		t.y = 129.5;
		return t;
	};
	_proto.star5_3_i = function () {
		var t = new eui.Image();
		this.star5_3 = t;
		t.source = "sy_duanwei_zidan_png";
		t.visible = false;
		t.x = 95;
		t.y = 125;
		return t;
	};
	_proto.star5_4_i = function () {
		var t = new eui.Image();
		this.star5_4 = t;
		t.source = "sy_duanwei_zidan_png";
		t.visible = false;
		t.x = 124.5;
		t.y = 127;
		return t;
	};
	_proto.star5_5_i = function () {
		var t = new eui.Image();
		this.star5_5 = t;
		t.source = "sy_duanwei_zidan_png";
		t.visible = false;
		t.x = 151;
		t.y = 134.5;
		return t;
	};
	_proto.star6TF_i = function () {
		var t = new eui.Label();
		this.star6TF = t;
		t.bold = true;
		t.size = 22;
		t.text = "x10086";
		t.x = 89.5;
		t.y = 142;
		return t;
	};
	_proto.star6Img_i = function () {
		var t = new eui.Image();
		this.star6Img = t;
		t.source = "sy_duanwei_dankong_png";
		t.x = 95;
		t.y = 138;
		return t;
	};
	_proto.star6Img2_i = function () {
		var t = new eui.Image();
		this.star6Img2 = t;
		t.source = "sy_duanwei_zidan_png";
		t.x = 100;
		t.y = 138;
		return t;
	};
	_proto.numBF_i = function () {
		var t = new eui.BitmapLabel();
		this.numBF = t;
		t.font = "dw_num_fnt";
		t.height = 33;
		t.horizontalCenter = 0;
		t.text = "";
		t.y = 67.5;
		return t;
	};
	return DuanWeiComponentSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/main/com/CommonBackBtnSkin.exml'] = window.CommonBackBtnSkin = (function (_super) {
	__extends(CommonBackBtnSkin, _super);
	function CommonBackBtnSkin() {
		_super.call(this);
		this.skinParts = ["tfImg"];
		
		this.height = 90;
		this.width = 90;
		this.elementsContent = [this._Image1_i(),this.tfImg_i()];
	}
	var _proto = CommonBackBtnSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 90;
		t.source = "new_main_menu_btn_png";
		t.width = 90;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tfImg_i = function () {
		var t = new eui.Image();
		this.tfImg = t;
		t.horizontalCenter = -4;
		t.source = "wz_fh_png";
		t.verticalCenter = 3;
		return t;
	};
	return CommonBackBtnSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/battleEnd/BattleEndDialogSkin.exml'] = window.BattleEndDialogSkin = (function (_super) {
	__extends(BattleEndDialogSkin, _super);
	function BattleEndDialogSkin() {
		_super.call(this);
		this.skinParts = ["bg","effImg","avatarMe","desTF1","desTF2","lvTF","dwMc2","dwImg2","dwMc1","dwImg1","avatarTarget","rewardTF","leftBtn","rightBtn","backBtn"];
		
		this.height = 1386;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this.bg_i(),this._Image1_i(),this.effImg_i(),this._Image2_i(),this._Image3_i(),this.avatarMe_i(),this._Image4_i(),this.desTF1_i(),this.desTF2_i(),this.lvTF_i(),this.dwMc2_i(),this.dwImg2_i(),this.dwMc1_i(),this.dwImg1_i(),this.avatarTarget_i(),this._Image5_i(),this.rewardTF_i(),this._Label1_i(),this._Label2_i(),this._Image6_i(),this.leftBtn_i(),this.rightBtn_i(),this.backBtn_i()];
	}
	var _proto = BattleEndDialogSkin.prototype;

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
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "zd_jsdb_png";
		t.y = 248.01;
		return t;
	};
	_proto.effImg_i = function () {
		var t = new eui.Image();
		this.effImg = t;
		t.source = "zd_slgx_png";
		t.visible = false;
		t.x = 60;
		t.y = 297.46;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "zd_zsnt_png";
		t.x = 137;
		t.y = 243.46;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "sj_xian_png";
		t.x = 149.36;
		t.y = 656.74;
		return t;
	};
	_proto.avatarMe_i = function () {
		var t = new eui.Image();
		this.avatarMe = t;
		t.anchorOffsetX = 43;
		t.anchorOffsetY = 43;
		t.height = 86;
		t.width = 86;
		t.x = 186;
		t.y = 580;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "sy_touxiang_png";
		t.x = 139;
		t.y = 533;
		return t;
	};
	_proto.desTF1_i = function () {
		var t = new eui.Label();
		this.desTF1 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.lineSpacing = 10;
		t.size = 30;
		t.text = "";
		t.textColor = 0xFFFFFF;
		t.x = 284;
		t.y = 530;
		return t;
	};
	_proto.desTF2_i = function () {
		var t = new eui.Label();
		this.desTF2 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.lineSpacing = 10;
		t.size = 30;
		t.text = "";
		t.textColor = 0xFFFFFF;
		t.x = 284;
		t.y = 683;
		return t;
	};
	_proto.lvTF_i = function () {
		var t = new eui.Label();
		this.lvTF = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xB97326;
		t.text = "lv.99";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 127.4;
		t.x = 125.3;
		t.y = 837.21;
		return t;
	};
	_proto.dwMc2_i = function () {
		var t = new eui.Component();
		this.dwMc2 = t;
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.skinName = "DuanWeiComponentSkin";
		t.x = 272.88;
		t.y = 669.55;
		return t;
	};
	_proto.dwImg2_i = function () {
		var t = new eui.Image();
		this.dwImg2 = t;
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.source = "sy_duanwei_00_png";
		t.visible = false;
		t.x = 448.8;
		t.y = 719.4;
		return t;
	};
	_proto.dwMc1_i = function () {
		var t = new eui.Component();
		this.dwMc1 = t;
		t.anchorOffsetX = 105;
		t.anchorOffsetY = 92;
		t.skinName = "DuanWeiComponentSkin";
		t.x = 488;
		t.y = 580;
		return t;
	};
	_proto.dwImg1_i = function () {
		var t = new eui.Image();
		this.dwImg1 = t;
		t.source = "";
		t.x = 389;
		t.y = 489.3;
		return t;
	};
	_proto.avatarTarget_i = function () {
		var t = new eui.Image();
		this.avatarTarget = t;
		t.anchorOffsetX = 43;
		t.anchorOffsetY = 43;
		t.height = 86;
		t.width = 86;
		t.x = 186;
		t.y = 767;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "sy_touxiang_png";
		t.x = 139;
		t.y = 720;
		return t;
	};
	_proto.rewardTF_i = function () {
		var t = new eui.Label();
		this.rewardTF = t;
		t.bold = true;
		t.horizontalCenter = 20.5;
		t.text = "";
		t.y = 975;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 24;
		t.text = "分享可获得";
		t.textColor = 0xb97527;
		t.x = 196;
		t.y = 1016;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 24;
		t.text = "X10";
		t.textColor = 0xb97527;
		t.x = 384;
		t.y = 1016;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "sy_jinbi_png";
		t.x = 326;
		t.y = 1004;
		return t;
	};
	_proto.leftBtn_i = function () {
		var t = new eui.Component();
		this.leftBtn = t;
		t.anchorOffsetX = 101;
		t.anchorOffsetY = 38;
		t.skinName = "CommonMBtnSkin";
		t.width = 202;
		t.x = 193;
		t.y = 1097.65;
		return t;
	};
	_proto.rightBtn_i = function () {
		var t = new eui.Component();
		this.rightBtn = t;
		t.anchorOffsetX = 102;
		t.anchorOffsetY = 38;
		t.skinName = "CommonMBtnSkin";
		t.width = 202;
		t.x = 455;
		t.y = 1096.65;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Component();
		this.backBtn = t;
		t.anchorOffsetX = 44;
		t.anchorOffsetY = 47;
		t.skinName = "CommonBackBtnSkin";
		t.visible = false;
		t.x = 65.43;
		t.y = 195.1;
		return t;
	};
	return BattleEndDialogSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/battleEnd/BattleEndRankSkin.exml'] = window.BattleEndRankSkin = (function (_super) {
	__extends(BattleEndRankSkin, _super);
	function BattleEndRankSkin() {
		_super.call(this);
		this.skinParts = ["rankName","rankIcon","btnLeft","btnRight"];
		
		this.height = 1386;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = BattleEndRankSkin.prototype;

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
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 318;
		t.verticalCenter = 0;
		t.width = 640;
		t.elementsContent = [this.rankName_i(),this.rankIcon_i(),this._Label1_i(),this.btnLeft_i(),this.btnRight_i()];
		return t;
	};
	_proto.rankName_i = function () {
		var t = new eui.Label();
		this.rankName = t;
		t.horizontalCenter = 0;
		t.size = 30;
		t.stroke = 2;
		t.strokeColor = 0xb97326;
		t.text = "见习青铜Ⅲ";
		t.textAlign = "center";
		return t;
	};
	_proto.rankIcon_i = function () {
		var t = new eui.Component();
		this.rankIcon = t;
		t.anchorOffsetX = 106;
		t.anchorOffsetY = 93.5;
		t.horizontalCenter = 0;
		t.skinName = "DuanWeiComponentSkin";
		t.y = 143.5;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "星级 +2";
		t.textAlign = "center";
		t.visible = false;
		t.y = 258;
		return t;
	};
	_proto.btnLeft_i = function () {
		var t = new eui.Component();
		this.btnLeft = t;
		t.anchorOffsetX = 121;
		t.anchorOffsetY = 39;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "CommonMBtnSkin";
		t.x = 202;
		t.y = 288;
		return t;
	};
	_proto.btnRight_i = function () {
		var t = new eui.Component();
		this.btnRight = t;
		t.anchorOffsetX = 122;
		t.anchorOffsetY = 39;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "CommonMBtnSkin";
		t.x = 438;
		t.y = 288;
		return t;
	};
	return BattleEndRankSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/buyTi/BuyTiDialogSkin.exml'] = window.BuyTiDialogSkin = (function (_super) {
	__extends(BuyTiDialogSkin, _super);
	function BuyTiDialogSkin() {
		_super.call(this);
		this.skinParts = ["bg","backBtn","diamondTF","list"];
		
		this.height = 1386;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this.bg_i(),this.backBtn_i(),this._Image1_i(),this.diamondTF_i(),this._Image2_i(),this._Scroller1_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
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
		t.anchorOffsetX = 43;
		t.anchorOffsetY = 46;
		t.skinName = "CommonBackBtnSkin";
		t.x = 64.09;
		t.y = 191.43;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "cz_dingban_png";
		t.y = 264;
		return t;
	};
	_proto.diamondTF_i = function () {
		var t = new eui.Label();
		this.diamondTF = t;
		t.bold = true;
		t.size = 30;
		t.stroke = 2;
		t.strokeColor = 0xB97326;
		t.text = "9999";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.x = 494;
		t.y = 329;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 692;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(13,13,8,9);
		t.source = "cz_xlkd_png";
		t.width = 600;
		t.y = 374;
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
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sj_xian_png";
		t.y = 1098;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "sy_zuanshi_png";
		t.x = 429;
		t.y = 314;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "cz_gmtl_png";
		t.y = 206;
		return t;
	};
	return BuyTiDialogSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/WareHouse/GunAttrItem.exml'] = window.GunAttrItem = (function (_super) {
	__extends(GunAttrItem, _super);
	function GunAttrItem() {
		_super.call(this);
		this.skinParts = ["label_k","label_v","zxImg"];
		
		this.height = 20;
		this.width = 330;
		this.elementsContent = [this.label_k_i(),this.label_v_i(),this.zxImg_i()];
	}
	var _proto = GunAttrItem.prototype;

	_proto.label_k_i = function () {
		var t = new eui.Label();
		this.label_k = t;
		t.bold = true;
		t.size = 20;
		t.text = "伤害";
		t.textColor = 0x6c3e14;
		t.x = 15;
		return t;
	};
	_proto.label_v_i = function () {
		var t = new eui.Label();
		this.label_v = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "29";
		t.textColor = 0xb97326;
		return t;
	};
	_proto.zxImg_i = function () {
		var t = new eui.Image();
		this.zxImg = t;
		t.horizontalCenter = 6;
		t.source = "ck_zhunxing_png";
		t.visible = false;
		t.y = -11;
		return t;
	};
	return GunAttrItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/WareHouse/HouseItem.exml'] = window.HouseItem = (function (_super) {
	__extends(HouseItem, _super);
	function HouseItem() {
		_super.call(this);
		this.skinParts = ["bgImg","suoImgBg","propImg","iconImg","suoImg","propLabel","itemNum"];
		
		this.elementsContent = [this.bgImg_i(),this.suoImgBg_i(),this.propImg_i(),this.iconImg_i(),this.suoImg_i(),this.propLabel_i(),this.itemNum_i()];
	}
	var _proto = HouseItem.prototype;

	_proto.bgImg_i = function () {
		var t = new eui.Image();
		this.bgImg = t;
		t.source = "";
		t.x = 0;
		t.y = 4;
		return t;
	};
	_proto.suoImgBg_i = function () {
		var t = new eui.Image();
		this.suoImgBg = t;
		t.source = "ck_wupin_suo_png";
		t.visible = false;
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
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "皮帽子";
		t.y = 80;
		return t;
	};
	_proto.itemNum_i = function () {
		var t = new eui.Label();
		this.itemNum = t;
		t.bold = true;
		t.right = 10;
		t.size = 18;
		t.text = "";
		t.textAlign = "right";
		t.textColor = 0x6c3e14;
		t.y = 56;
		return t;
	};
	return HouseItem;
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
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "sy_jinbi_png";
		t.verticalCenter = 0;
		t.x = 20;
		return t;
	};
	_proto.label_right_i = function () {
		var t = new eui.Label();
		this.label_right = t;
		t.bold = true;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/WareHouse/HouseSceneSkin.exml'] = window.HouseSceneSkin = (function (_super) {
	__extends(HouseSceneSkin, _super);
	function HouseSceneSkin() {
		_super.call(this);
		this.skinParts = ["btnBack","coinImg","coinTF","diamondImg","diamondTF","groupLeft","ck_title","groupHouse","labelNumLeft","labelNum","labelBuy","btnBuy0","btnBuy1","btnUse","unlockLevel","line_down","propTitle","propIcon","propDes","experTitle","experValue","attrGroup","groupDetial","groupRight"];
		
		this.height = 1386;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.groupLeft_i(),this.groupRight_i()];
	}
	var _proto = HouseSceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "ck_diban_jpg";
		t.verticalCenter = -1;
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
		t.anchorOffsetX = 89;
		t.anchorOffsetY = 38;
		t.skinName = "CommonBackBtnSkin";
		t.x = 105.93;
		t.y = 41.41;
		return t;
	};
	_proto.coinImg_i = function () {
		var t = new eui.Image();
		this.coinImg = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "sy_jinbi_png";
		t.x = 58;
		t.y = 1120;
		return t;
	};
	_proto.coinTF_i = function () {
		var t = new eui.Label();
		this.coinTF = t;
		t.bold = true;
		t.size = 30;
		t.stroke = 2;
		t.strokeColor = 0xb97326;
		t.text = "";
		t.textColor = 0xffffff;
		t.x = 114;
		t.y = 1129;
		return t;
	};
	_proto.diamondImg_i = function () {
		var t = new eui.Image();
		this.diamondImg = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "sy_zuanshi_png";
		t.x = 58;
		t.y = 1178;
		return t;
	};
	_proto.diamondTF_i = function () {
		var t = new eui.Label();
		this.diamondTF = t;
		t.bold = true;
		t.size = 30;
		t.stroke = 2;
		t.strokeColor = 0xb97326;
		t.text = "";
		t.textColor = 0xffffff;
		t.x = 114;
		t.y = 1187;
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
		t.bold = true;
		t.size = 30;
		t.text = "仓 库";
		t.textColor = 0x6c3e14;
		t.x = 5;
		t.y = 200;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "sj_xian_png";
		t.width = 320;
		t.x = 5;
		t.y = 238;
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
		t.visible = false;
		t.width = 330;
		t.y = 124;
		t.elementsContent = [this.labelNumLeft_i(),this.labelNum_i(),this.labelBuy_i(),this.btnBuy0_i(),this.btnBuy1_i(),this.btnUse_i(),this.unlockLevel_i(),this.line_down_i(),this.propTitle_i(),this.propIcon_i(),this.propDes_i(),this.experTitle_i(),this.experValue_i(),this.attrGroup_i()];
		return t;
	};
	_proto.labelNumLeft_i = function () {
		var t = new eui.Label();
		this.labelNumLeft = t;
		t.bold = true;
		t.size = 20;
		t.text = "数量：";
		t.textColor = 0x6c3e14;
		t.x = 5;
		t.y = 678;
		return t;
	};
	_proto.labelNum_i = function () {
		var t = new eui.Label();
		this.labelNum = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "99";
		t.textAlign = "center";
		t.textColor = 0xb97326;
		t.y = 678;
		return t;
	};
	_proto.labelBuy_i = function () {
		var t = new eui.Label();
		this.labelBuy = t;
		t.bold = true;
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
		t.anchorOffsetX = 122;
		t.anchorOffsetY = 39;
		t.horizontalCenter = 0.5;
		t.skinName = "CommonBtn2Skin";
		t.y = 939;
		return t;
	};
	_proto.unlockLevel_i = function () {
		var t = new eui.Label();
		this.unlockLevel = t;
		t.anchorOffsetY = 15;
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "XX级解锁获得";
		t.textColor = 0xff0000;
		t.visible = false;
		t.y = 947;
		return t;
	};
	_proto.line_down_i = function () {
		var t = new eui.Image();
		this.line_down = t;
		t.source = "sj_xian_png";
		t.width = 320;
		t.x = 5;
		t.y = 850;
		return t;
	};
	_proto.propTitle_i = function () {
		var t = new eui.Label();
		this.propTitle = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "死亡左轮";
		t.textColor = 0x6c3e14;
		t.y = 150;
		return t;
	};
	_proto.propIcon_i = function () {
		var t = new eui.Image();
		this.propIcon = t;
		t.source = "";
		t.x = 165;
		t.y = 270;
		return t;
	};
	_proto.propDes_i = function () {
		var t = new eui.Label();
		this.propDes = t;
		t.bold = true;
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
		t.bold = true;
		t.size = 24;
		t.text = "熟练度：";
		t.textColor = 0x6c3e14;
		t.x = 15;
		t.y = 426;
		return t;
	};
	_proto.experValue_i = function () {
		var t = new eui.Label();
		this.experValue = t;
		t.bold = true;
		t.horizontalCenter = 0.5;
		t.size = 20;
		t.text = "";
		t.textColor = 0xb97326;
		t.y = 428;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/charge/ChargeDialogSkin.exml'] = window.ChargeDialogSkin = (function (_super) {
	__extends(ChargeDialogSkin, _super);
	function ChargeDialogSkin() {
		_super.call(this);
		this.skinParts = ["bg","backBtn","list"];
		
		this.height = 1386;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this.bg_i(),this.backBtn_i(),this._Image1_i(),this._Image2_i(),this._Scroller1_i(),this._Image3_i(),this._Image4_i()];
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
		t.horizontalCenter = 0;
		t.source = "ck_diban_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Component();
		this.backBtn = t;
		t.anchorOffsetX = 44;
		t.anchorOffsetY = 47;
		t.skinName = "CommonBackBtnSkin";
		t.x = 65.09;
		t.y = 192.43;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "cz_dingban_png";
		t.y = 264;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 692;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(13,13,8,9);
		t.source = "cz_xlkd_png";
		t.width = 600;
		t.y = 374;
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
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sj_xian_png";
		t.y = 1098;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "cz_cz_png";
		t.y = 206;
		return t;
	};
	return ChargeDialogSkin;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/mail/MailDetailSkin.exml'] = window.MailDetailSkin = (function (_super) {
	__extends(MailDetailSkin, _super);
	function MailDetailSkin() {
		_super.call(this);
		this.skinParts = ["rect","bg","middleLine","board","title","attachment","okBtn"];
		
		this.height = 1386;
		this.width = 640;
		this.elementsContent = [this.rect_i(),this.bg_i(),this.middleLine_i(),this.board_i(),this.title_i(),this.attachment_i(),this.okBtn_i()];
	}
	var _proto = MailDetailSkin.prototype;

	_proto.rect_i = function () {
		var t = new eui.Rect();
		this.rect = t;
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
		t.source = "zd_jsmb_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.middleLine_i = function () {
		var t = new eui.Image();
		this.middleLine = t;
		t.horizontalCenter = 0.5;
		t.source = "sj_xian_png";
		t.y = 800;
		return t;
	};
	_proto.board_i = function () {
		var t = new eui.Group();
		this.board = t;
		t.anchorOffsetY = 0;
		t.height = 350;
		t.horizontalCenter = 0;
		t.width = 436;
		t.y = 450;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "邮件标题";
		t.textColor = 0x6c3e14;
		t.y = 384;
		return t;
	};
	_proto.attachment_i = function () {
		var t = new eui.Group();
		this.attachment = t;
		t.anchorOffsetY = 0;
		t.height = 106;
		t.horizontalCenter = 0;
		t.width = 436;
		t.y = 812;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eui.Component();
		this.okBtn = t;
		t.anchorOffsetX = 106.87;
		t.anchorOffsetY = 33.37;
		t.height = 67;
		t.horizontalCenter = 0;
		t.skinName = "CommonBtn1Skin";
		t.width = 213.88;
		t.y = 973.95;
		return t;
	};
	return MailDetailSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/mail/MailDialogSkin.exml'] = window.MailDialogSkin = (function (_super) {
	__extends(MailDialogSkin, _super);
	function MailDialogSkin() {
		_super.call(this);
		this.skinParts = ["bg","backBtn","numTF","list","topUi","noneTF"];
		
		this.height = 1386;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this.bg_i(),this.backBtn_i(),this.numTF_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Scroller1_i(),this._Image4_i(),this.topUi_i(),this.noneTF_i()];
	}
	var _proto = MailDialogSkin.prototype;

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
		t.anchorOffsetX = 43;
		t.anchorOffsetY = 45;
		t.skinName = "CommonBackBtnSkin";
		t.x = 64.09;
		t.y = 190.43;
		return t;
	};
	_proto.numTF_i = function () {
		var t = new eui.Label();
		this.numTF = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "";
		t.textColor = 0xB97527;
		t.y = 1137;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "cz_dingban_png";
		t.y = 264;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "yx_yx_png";
		t.y = 206;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 692;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(13,13,8,9);
		t.source = "cz_xlkd_png";
		t.width = 600;
		t.y = 374;
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
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sj_xian_png";
		t.y = 1098;
		return t;
	};
	_proto.topUi_i = function () {
		var t = new eui.Group();
		this.topUi = t;
		return t;
	};
	_proto.noneTF_i = function () {
		var t = new eui.Image();
		this.noneTF = t;
		t.horizontalCenter = -28;
		t.source = "yx_kong_png";
		t.visible = false;
		t.y = 470;
		return t;
	};
	return MailDialogSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/lvup/LvupDialogSkin.exml'] = window.LvupDialogSkin = (function (_super) {
	__extends(LvupDialogSkin, _super);
	function LvupDialogSkin() {
		_super.call(this);
		this.skinParts = ["bg","okBtn","lvBF","hpTF","hpTF0","hpTF1","coinTF","diamondTF","jiesuoTF","groupLocked"];
		
		this.height = 1386;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this.bg_i(),this.okBtn_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this.lvBF_i(),this._Image10_i(),this.hpTF_i(),this.hpTF0_i(),this.hpTF1_i(),this._Image11_i(),this._Image12_i(),this.coinTF_i(),this.diamondTF_i(),this._Image13_i(),this.jiesuoTF_i(),this.groupLocked_i()];
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
		t.source = "zd_jsmb_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eui.Component();
		this.okBtn = t;
		t.anchorOffsetX = 106.87;
		t.anchorOffsetY = 33.37;
		t.height = 67;
		t.horizontalCenter = 0;
		t.skinName = "CommonBtn2Skin";
		t.width = 213.88;
		t.y = 973.95;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "sj_tf_png";
		t.visible = false;
		t.x = 18;
		t.y = 206;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "js_deng_png";
		t.x = 136;
		t.y = 254.5;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "js_ji_png";
		t.x = 224;
		t.y = 224;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "js_ti_png";
		t.x = 325;
		t.y = 224.5;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "js_sheng_png";
		t.x = 426;
		t.y = 254.5;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "zd_slgx_png";
		t.x = 78;
		t.y = 365;
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
		t.bold = true;
		t.horizontalCenter = 0.5;
		t.text = "";
		t.textColor = 0x6c3e14;
		t.verticalAlign = "middle";
		t.y = 554;
		return t;
	};
	_proto.hpTF0_i = function () {
		var t = new eui.Label();
		this.hpTF0 = t;
		t.bold = true;
		t.horizontalCenter = 0.5;
		t.text = "角色血量：+35";
		t.textColor = 0x6C3E14;
		t.visible = false;
		t.y = 550;
		return t;
	};
	_proto.hpTF1_i = function () {
		var t = new eui.Label();
		this.hpTF1 = t;
		t.bold = true;
		t.horizontalCenter = -0.5;
		t.text = "角色血量：+35";
		t.textColor = 0x6C3E14;
		t.visible = false;
		t.y = 600;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "sy_jinbi_png";
		t.visible = false;
		t.x = 148;
		t.y = 599;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "sy_zuanshi_png";
		t.visible = false;
		t.x = 365;
		t.y = 599;
		return t;
	};
	_proto.coinTF_i = function () {
		var t = new eui.Label();
		this.coinTF = t;
		t.bold = true;
		t.stroke = 2;
		t.strokeColor = 0xb97326;
		t.text = "100";
		t.visible = false;
		t.x = 218;
		t.y = 614;
		return t;
	};
	_proto.diamondTF_i = function () {
		var t = new eui.Label();
		this.diamondTF = t;
		t.bold = true;
		t.stroke = 2;
		t.strokeColor = 0xb97326;
		t.text = "100";
		t.visible = false;
		t.x = 435;
		t.y = 614;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "sj_xian_png";
		t.x = 136;
		t.y = 670;
		return t;
	};
	_proto.jiesuoTF_i = function () {
		var t = new eui.Label();
		this.jiesuoTF = t;
		t.bold = true;
		t.text = "解锁新装备：";
		t.textColor = 0x6c3e14;
		t.x = 96;
		t.y = 720;
		return t;
	};
	_proto.groupLocked_i = function () {
		var t = new eui.Group();
		this.groupLocked = t;
		t.horizontalCenter = 0;
		t.width = 526;
		t.y = 770;
		return t;
	};
	return LvupDialogSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/lvup/propUnLockItem.exml'] = window.propUnLockItem = (function (_super) {
	__extends(propUnLockItem, _super);
	function propUnLockItem() {
		_super.call(this);
		this.skinParts = ["img_prop","label_prop"];
		
		this.height = 82;
		this.width = 232;
		this.elementsContent = [this._Image1_i(),this.img_prop_i(),this.label_prop_i()];
	}
	var _proto = propUnLockItem.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "sj_wpl_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_prop_i = function () {
		var t = new eui.Image();
		this.img_prop = t;
		t.source = "";
		t.verticalCenter = 0;
		t.x = 48;
		return t;
	};
	_proto.label_prop_i = function () {
		var t = new eui.Label();
		this.label_prop = t;
		t.bold = true;
		t.size = 20;
		t.text = "死亡左轮";
		t.textAlign = "left";
		t.textColor = 0xB97326;
		t.verticalCenter = 0;
		t.x = 106;
		return t;
	};
	return propUnLockItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/main/component/MainTabBtnComponentSkin.exml'] = window.MainTabBtnComponentSkin = (function (_super) {
	__extends(MainTabBtnComponentSkin, _super);
	function MainTabBtnComponentSkin() {
		_super.call(this);
		this.skinParts = ["bgImg","tfImg"];
		
		this.height = 50;
		this.width = 128;
		this.elementsContent = [this.bgImg_i(),this.tfImg_i()];
	}
	var _proto = MainTabBtnComponentSkin.prototype;

	_proto.bgImg_i = function () {
		var t = new eui.Image();
		this.bgImg = t;
		t.source = "new_main_tab_bj_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tfImg_i = function () {
		var t = new eui.Image();
		this.tfImg = t;
		t.horizontalCenter = 7;
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
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "空";
		t.visible = false;
		t.y = 21;
		return t;
	};
	return MainPropComponentSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/main/com/MainLeftDaojuSkinCom.exml'] = window.MainLeftDaojuSkinCom = (function (_super) {
	__extends(MainLeftDaojuSkinCom, _super);
	function MainLeftDaojuSkinCom() {
		_super.call(this);
		this.skinParts = ["bgImg","iconImg","noneImg","clickImg"];
		
		this.height = 199;
		this.width = 180;
		this.elementsContent = [this.bgImg_i(),this.iconImg_i(),this.noneImg_i(),this._Image1_i(),this.clickImg_i()];
	}
	var _proto = MainLeftDaojuSkinCom.prototype;

	_proto.bgImg_i = function () {
		var t = new eui.Image();
		this.bgImg = t;
		t.source = "new_main_menu_btn_png";
		t.touchEnabled = false;
		t.x = 0;
		t.y = 18;
		return t;
	};
	_proto.iconImg_i = function () {
		var t = new eui.Image();
		this.iconImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 170;
		t.source = "";
		t.touchEnabled = false;
		t.width = 255;
		t.x = -33.5;
		t.y = 0;
		return t;
	};
	_proto.noneImg_i = function () {
		var t = new eui.Image();
		this.noneImg = t;
		t.source = "prop_icon_none_png";
		t.visible = false;
		t.x = 38;
		t.y = 53;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "new_tf_daoju_png";
		t.touchEnabled = false;
		t.x = 78.01;
		t.y = 109.98;
		return t;
	};
	_proto.clickImg_i = function () {
		var t = new eui.Rect();
		this.clickImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 130;
		t.width = 139;
		t.x = 24.5;
		t.y = 42.5;
		return t;
	};
	return MainLeftDaojuSkinCom;
})(eui.Skin);generateEUI.paths['resource/eui_skins/main/com/MainRightDaojuSkinCom.exml'] = window.MainRightDaojuSkinCom = (function (_super) {
	__extends(MainRightDaojuSkinCom, _super);
	function MainRightDaojuSkinCom() {
		_super.call(this);
		this.skinParts = ["bgImg","iconImg","clickImg"];
		
		this.height = 204;
		this.width = 214;
		this.elementsContent = [this.bgImg_i(),this.iconImg_i(),this._Image1_i(),this.clickImg_i()];
	}
	var _proto = MainRightDaojuSkinCom.prototype;

	_proto.bgImg_i = function () {
		var t = new eui.Image();
		this.bgImg = t;
		t.source = "new_main_menu_btn_png";
		t.touchEnabled = false;
		t.x = 30;
		t.y = 18;
		return t;
	};
	_proto.iconImg_i = function () {
		var t = new eui.Image();
		this.iconImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 149;
		t.horizontalCenter = 5;
		t.scaleX = 1;
		t.source = "";
		t.touchEnabled = false;
		t.verticalCenter = 2.5;
		t.width = 223.5;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "new_tf_wuqi_png";
		t.touchEnabled = false;
		t.x = 57.5;
		t.y = 108.5;
		return t;
	};
	_proto.clickImg_i = function () {
		var t = new eui.Rect();
		this.clickImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 130;
		t.width = 139;
		t.x = 50;
		t.y = 43.5;
		return t;
	};
	return MainRightDaojuSkinCom;
})(eui.Skin);generateEUI.paths['resource/eui_skins/main/com/MainDaojuItemRenderSkin.exml'] = window.MainDaojuItemRenderSkin = (function (_super) {
	__extends(MainDaojuItemRenderSkin, _super);
	function MainDaojuItemRenderSkin() {
		_super.call(this);
		this.skinParts = ["bgImg","iconImg","tf","numTF"];
		
		this.height = 100;
		this.width = 100;
		this.elementsContent = [this.bgImg_i(),this.iconImg_i(),this.tf_i(),this.numTF_i()];
	}
	var _proto = MainDaojuItemRenderSkin.prototype;

	_proto.bgImg_i = function () {
		var t = new eui.Image();
		this.bgImg = t;
		t.horizontalCenter = 0.5;
		t.source = "";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.iconImg_i = function () {
		var t = new eui.Image();
		this.iconImg = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.tf_i = function () {
		var t = new eui.Label();
		this.tf = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.numTF_i = function () {
		var t = new eui.Label();
		this.numTF = t;
		t.bold = true;
		t.right = 11;
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0x401908;
		t.text = "";
		t.textAlign = "right";
		t.textColor = 0xffffff;
		t.y = 74;
		return t;
	};
	return MainDaojuItemRenderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/main/com/MainRotationComSkin.exml'] = window.MainRotationComSkin = (function (_super) {
	__extends(MainRotationComSkin, _super);
	function MainRotationComSkin() {
		_super.call(this);
		this.skinParts = ["p0","p1","p2","p3","p4","p5","p6","p7","itemList"];
		
		this.height = 410;
		this.width = 410;
		this.elementsContent = [this._Image1_i(),this.itemList_i()];
	}
	var _proto = MainRotationComSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 410;
		t.source = "new_main_menu_bg_png";
		t.width = 410;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.itemList_i = function () {
		var t = new eui.Group();
		this.itemList = t;
		t.height = 0;
		t.width = 0;
		t.x = 205;
		t.y = 205;
		t.elementsContent = [this.p0_i(),this.p1_i(),this.p2_i(),this.p3_i(),this.p4_i(),this.p5_i(),this.p6_i(),this.p7_i()];
		return t;
	};
	_proto.p0_i = function () {
		var t = new eui.Component();
		this.p0 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 51;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "MainDaojuItemRenderSkin";
		t.touchEnabled = true;
		t.x = 0;
		t.y = -150;
		return t;
	};
	_proto.p1_i = function () {
		var t = new eui.Component();
		this.p1 = t;
		t.anchorOffsetX = 53;
		t.anchorOffsetY = 52;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "MainDaojuItemRenderSkin";
		t.x = 105;
		t.y = -105;
		return t;
	};
	_proto.p2_i = function () {
		var t = new eui.Component();
		this.p2 = t;
		t.anchorOffsetX = 52;
		t.anchorOffsetY = 52;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "MainDaojuItemRenderSkin";
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto.p3_i = function () {
		var t = new eui.Component();
		this.p3 = t;
		t.anchorOffsetX = 49;
		t.anchorOffsetY = 51;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "MainDaojuItemRenderSkin";
		t.x = 105;
		t.y = 105;
		return t;
	};
	_proto.p4_i = function () {
		var t = new eui.Component();
		this.p4 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 50;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "MainDaojuItemRenderSkin";
		t.x = 0;
		t.y = 150;
		return t;
	};
	_proto.p5_i = function () {
		var t = new eui.Component();
		this.p5 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "MainDaojuItemRenderSkin";
		t.x = -105;
		t.y = 105;
		return t;
	};
	_proto.p6_i = function () {
		var t = new eui.Component();
		this.p6 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 50;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "MainDaojuItemRenderSkin";
		t.x = -150;
		t.y = 0;
		return t;
	};
	_proto.p7_i = function () {
		var t = new eui.Component();
		this.p7 = t;
		t.anchorOffsetX = 49;
		t.anchorOffsetY = 52;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "MainDaojuItemRenderSkin";
		t.x = -105;
		t.y = -105;
		return t;
	};
	return MainRotationComSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/main/component/MainPrgComponentSkin.exml'] = window.MainPrgComponentSkin = (function (_super) {
	__extends(MainPrgComponentSkin, _super);
	function MainPrgComponentSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.height = 28;
		this.width = 255;
		this.elementsContent = [this._Image1_i(),this.thumb_i()];
	}
	var _proto = MainPrgComponentSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sy_tlc_2_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.scale9Grid = new egret.Rectangle(37,3,36,22);
		t.source = "sy_tl_1_png";
		t.verticalCenter = 0;
		t.width = 255;
		t.x = 0;
		return t;
	};
	return MainPrgComponentSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/main/com/MainLvPrgComSkin.exml'] = window.MainLvPrgComSkin = (function (_super) {
	__extends(MainLvPrgComSkin, _super);
	function MainLvPrgComSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.height = 20;
		this.width = 292;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = MainLvPrgComSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "sy_jyt_png";
		t.y = 0;
		return t;
	};
	return MainLvPrgComSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/main/com/MainBtnComSkin.exml'] = window.MainBtnComSkin = (function (_super) {
	__extends(MainBtnComSkin, _super);
	function MainBtnComSkin() {
		_super.call(this);
		this.skinParts = ["rightBg","leftBg","tfImg"];
		
		this.height = 137;
		this.elementsContent = [this.rightBg_i(),this.leftBg_i(),this.tfImg_i()];
	}
	var _proto = MainBtnComSkin.prototype;

	_proto.rightBg_i = function () {
		var t = new eui.Image();
		this.rightBg = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "new_main_btn_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.leftBg_i = function () {
		var t = new eui.Image();
		this.leftBg = t;
		t.horizontalCenter = 0;
		t.scaleX = -1;
		t.scaleY = 1;
		t.source = "new_main_btn_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.tfImg_i = function () {
		var t = new eui.Image();
		this.tfImg = t;
		t.anchorOffsetX = 71;
		t.anchorOffsetY = 27;
		t.source = "";
		t.x = 159;
		t.y = 77;
		return t;
	};
	return MainBtnComSkin;
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
		t.bold = true;
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
		this.skinParts = ["bg","carImg","grassImg","grassImg0","tabBtn1","tabBtn2","tabBtn3","personGrp","propBtn","propList","propScroll","weaponBtn","weaponList","weaponScroll","propGrp","propMc","weaponGrp","weaponMc","wMc","middleGrp","headImg","clickImg","nameTF","img_coin","coinTF","img_diamond","chargeBtn","diamondTF","prgMc","prgTF","tiImg","prgCd","buyTiBtn","dwMc","expPrg","lvTF","topUI","leftBtn","rightBtn","bottomUI","mainBtn1","mainBtn2","mainBtn3","mainBtn4","mainBtn5","pageGroup","guideText","guideDialog","guide","duelGrp","dialogGrp","alertGroup","itemsShowGrp"];
		
		this.height = 1386;
		this.width = 640;
		this.elementsContent = [this.bg_i(),this.carImg_i(),this.grassImg_i(),this.grassImg0_i(),this.tabBtn1_i(),this.tabBtn2_i(),this.tabBtn3_i(),this.middleGrp_i(),this.topUI_i(),this.bottomUI_i(),this.mainBtn1_i(),this.mainBtn2_i(),this.mainBtn3_i(),this.mainBtn4_i(),this.mainBtn5_i(),this.pageGroup_i(),this.guide_i(),this.duelGrp_i(),this.dialogGrp_i(),this.alertGroup_i(),this.itemsShowGrp_i()];
	}
	var _proto = MainSceneSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "new_main_bg_jpg";
		t.verticalCenter = 113;
		t.x = -30;
		return t;
	};
	_proto.carImg_i = function () {
		var t = new eui.Image();
		this.carImg = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "main_front_2_png";
		t.x = -10;
		t.y = 371.31;
		return t;
	};
	_proto.grassImg_i = function () {
		var t = new eui.Image();
		this.grassImg = t;
		t.source = "main_front_1_png";
		t.x = 26;
		t.y = 951;
		return t;
	};
	_proto.grassImg0_i = function () {
		var t = new eui.Image();
		this.grassImg0 = t;
		t.source = "main_front_1_png";
		t.visible = false;
		t.x = 493.71;
		t.y = 533;
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
	_proto.tabBtn3_i = function () {
		var t = new eui.Component();
		this.tabBtn3 = t;
		t.anchorOffsetX = 138;
		t.anchorOffsetY = 34;
		t.right = 0;
		t.skinName = "MainTabBtnComponentSkin";
		t.y = 609;
		return t;
	};
	_proto.middleGrp_i = function () {
		var t = new eui.Group();
		this.middleGrp = t;
		t.height = 0;
		t.horizontalCenter = 0;
		t.width = 640;
		t.y = 810.44;
		t.elementsContent = [this.personGrp_i(),this.propBtn_i(),this.propScroll_i(),this.weaponBtn_i(),this.weaponScroll_i(),this.propGrp_i(),this.propMc_i(),this.weaponGrp_i(),this.weaponMc_i(),this.wMc_i()];
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
		t.visible = false;
		t.x = 339.94;
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
		t.visible = false;
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
	_proto.propGrp_i = function () {
		var t = new eui.Group();
		this.propGrp = t;
		t.width = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.propMc_i = function () {
		var t = new eui.Component();
		this.propMc = t;
		t.anchorOffsetX = 90.67;
		t.anchorOffsetY = 101.33;
		t.skinName = "MainLeftDaojuSkinCom";
		t.touchEnabled = false;
		t.x = 47.74;
		t.y = 70.47;
		return t;
	};
	_proto.weaponGrp_i = function () {
		var t = new eui.Group();
		this.weaponGrp = t;
		t.width = 0;
		t.x = 547;
		t.y = 0;
		return t;
	};
	_proto.weaponMc_i = function () {
		var t = new eui.Component();
		this.weaponMc = t;
		t.anchorOffsetX = 112;
		t.anchorOffsetY = 101.33;
		t.skinName = "MainRightDaojuSkinCom";
		t.touchEnabled = false;
		t.x = 595.67;
		t.y = 65.32;
		return t;
	};
	_proto.wMc_i = function () {
		var t = new eui.Component();
		this.wMc = t;
		t.anchorOffsetX = 220;
		t.anchorOffsetY = 220;
		t.rotation = 90;
		t.skinName = "MainRotationComSkin";
		t.visible = false;
		t.x = 577;
		t.y = 75.36;
		return t;
	};
	_proto.topUI_i = function () {
		var t = new eui.Group();
		this.topUI = t;
		t.height = 0;
		t.width = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.headImg_i(),this._Image2_i(),this._Image3_i(),this.clickImg_i(),this.nameTF_i(),this.img_coin_i(),this.coinTF_i(),this.img_diamond_i(),this.chargeBtn_i(),this.diamondTF_i(),this.prgMc_i(),this.prgTF_i(),this.tiImg_i(),this.prgCd_i(),this.buyTiBtn_i(),this.dwMc_i(),this.expPrg_i(),this.lvTF_i(),this._Image4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "sy_dingban_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headImg_i = function () {
		var t = new eui.Image();
		this.headImg = t;
		t.height = 90;
		t.source = "";
		t.width = 90;
		t.x = 19.7;
		t.y = 9.69;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "sy_zsc_png";
		t.x = 153;
		t.y = 15;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "sy_zsc_png";
		t.x = 312.21;
		t.y = 15;
		return t;
	};
	_proto.clickImg_i = function () {
		var t = new eui.Image();
		this.clickImg = t;
		t.source = "sy_txk_png";
		t.x = 11.65;
		t.y = 1.99;
		return t;
	};
	_proto.nameTF_i = function () {
		var t = new eui.Label();
		this.nameTF = t;
		t.bold = true;
		t.horizontalCenter = 63.5;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0x401908;
		t.text = "玩家昵称六字";
		t.textColor = 0xffffff;
		t.y = 109.03;
		return t;
	};
	_proto.img_coin_i = function () {
		var t = new eui.Image();
		this.img_coin = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "sy_jinbi_png";
		t.x = 126.96;
		t.y = 0.5;
		return t;
	};
	_proto.coinTF_i = function () {
		var t = new eui.Label();
		this.coinTF = t;
		t.bold = true;
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0xb97326;
		t.text = "999999";
		t.textColor = 0xffffff;
		t.x = 173.96;
		t.y = 18;
		return t;
	};
	_proto.img_diamond_i = function () {
		var t = new eui.Image();
		this.img_diamond = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "sy_zuanshi_png";
		t.x = 286.24;
		t.y = 0.5;
		return t;
	};
	_proto.chargeBtn_i = function () {
		var t = new eui.Image();
		this.chargeBtn = t;
		t.anchorOffsetX = 18.33;
		t.anchorOffsetY = 19.66;
		t.source = "new_common_buy_btn_png";
		t.x = 439.35;
		t.y = 26.99;
		return t;
	};
	_proto.diamondTF_i = function () {
		var t = new eui.Label();
		this.diamondTF = t;
		t.bold = true;
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0xb97326;
		t.text = "999999";
		t.textColor = 0xffffff;
		t.x = 332.22;
		t.y = 18;
		return t;
	};
	_proto.prgMc_i = function () {
		var t = new eui.ProgressBar();
		this.prgMc = t;
		t.direction = "ltr";
		t.skinName = "MainPrgComponentSkin";
		t.value = 0;
		t.x = 164.52;
		t.y = 59.01;
		return t;
	};
	_proto.prgTF_i = function () {
		var t = new eui.Label();
		this.prgTF = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0xb97326;
		t.text = "20/99";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.width = 252.33;
		t.x = 165.71;
		t.y = 61.61;
		return t;
	};
	_proto.tiImg_i = function () {
		var t = new eui.Image();
		this.tiImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 10;
		t.source = "sy_tilitubiao_png";
		t.x = 125.27;
		t.y = 32.95;
		return t;
	};
	_proto.prgCd_i = function () {
		var t = new eui.Label();
		this.prgCd = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0x6f3f16;
		t.text = "14:35";
		t.textAlign = "center";
		t.textColor = 0xfffcc4;
		t.width = 75.66;
		t.x = 463.57;
		t.y = 61.91;
		return t;
	};
	_proto.buyTiBtn_i = function () {
		var t = new eui.Image();
		this.buyTiBtn = t;
		t.anchorOffsetX = 19.33;
		t.anchorOffsetY = 19.33;
		t.source = "new_common_buy_btn_png";
		t.x = 441.33;
		t.y = 71.98;
		return t;
	};
	_proto.dwMc_i = function () {
		var t = new eui.Component();
		this.dwMc = t;
		t.anchorOffsetX = 106;
		t.anchorOffsetY = 94;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DuanWeiComponentSkin";
		t.x = 107;
		t.y = 260;
		return t;
	};
	_proto.expPrg_i = function () {
		var t = new eui.ProgressBar();
		this.expPrg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "MainLvPrgComSkin";
		t.value = 50;
		t.x = 226.02;
		t.y = 100.35;
		return t;
	};
	_proto.lvTF_i = function () {
		var t = new eui.Label();
		this.lvTF = t;
		t.bold = true;
		t.right = -586;
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0x783d17;
		t.text = "lv.99";
		t.textAlign = "right";
		t.textColor = 0xfff9c7;
		t.y = 99.99;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "sy_fenx_png";
		t.x = 546;
		t.y = 146;
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
		t.skinName = "MainBtnComSkin";
		t.x = 0;
		t.y = -40;
		return t;
	};
	_proto.rightBtn_i = function () {
		var t = new eui.Component();
		this.rightBtn = t;
		t.skinName = "MainBtnComSkin";
		t.x = 320;
		t.y = -40;
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
	_proto.guide_i = function () {
		var t = new eui.Group();
		this.guide = t;
		t.height = 1386;
		t.visible = false;
		t.width = 640;
		t.elementsContent = [this.guideDialog_i()];
		return t;
	};
	_proto.guideDialog_i = function () {
		var t = new eui.Group();
		this.guideDialog = t;
		t.height = 0;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this.guideText_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yd_kanbanniang_png";
		t.x = 11;
		t.y = 260;
		return t;
	};
	_proto.guideText_i = function () {
		var t = new eui.Label();
		this.guideText = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 108;
		t.lineSpacing = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "在决斗前要记得检查自己的枪！";
		t.textAlign = "left";
		t.textColor = 0x6C3E14;
		t.verticalAlign = "middle";
		t.width = 415;
		t.x = 183;
		t.y = 303;
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
	_proto.dialogGrp_i = function () {
		var t = new eui.Group();
		this.dialogGrp = t;
		t.height = 0;
		t.width = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.alertGroup_i = function () {
		var t = new eui.Group();
		this.alertGroup = t;
		t.height = 0;
		t.width = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.itemsShowGrp_i = function () {
		var t = new eui.Group();
		this.itemsShowGrp = t;
		t.height = 0;
		t.width = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return MainSceneSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/main/NewUserRetBoardSkin.exml'] = window.NewUserRetBoardSkin = (function (_super) {
	__extends(NewUserRetBoardSkin, _super);
	function NewUserRetBoardSkin() {
		_super.call(this);
		this.skinParts = ["itemMc","getBtn","guideText"];
		
		this.height = 1386;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.itemMc_i(),this.getBtn_i(),this.guideText_i(),this._Image2_i()];
	}
	var _proto = NewUserRetBoardSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.6;
		t.height = 1386;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "tishiban_png";
		t.x = 50.24;
		t.y = 398.94;
		return t;
	};
	_proto.itemMc_i = function () {
		var t = new eui.Component();
		this.itemMc = t;
		t.skinName = "HouseItem";
		t.x = 154.24;
		t.y = 652.94;
		return t;
	};
	_proto.getBtn_i = function () {
		var t = new eui.Button();
		this.getBtn = t;
		t.anchorOffsetX = 123;
		t.anchorOffsetY = 38;
		t.label = "Button";
		t.skinName = "CommonMBtnSkin";
		t.x = 413.62;
		t.y = 724.82;
		return t;
	};
	_proto.guideText_i = function () {
		var t = new eui.Label();
		this.guideText = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 108;
		t.lineSpacing = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "道具信息可以在仓库中查看，赠送您5个单管炸弹，开始西部之旅吧！";
		t.textAlign = "left";
		t.textColor = 0x6C3E14;
		t.verticalAlign = "middle";
		t.width = 415;
		t.x = 105.74;
		t.y = 462.94;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "sj_xian_png";
		t.x = 115.75;
		t.y = 621.32;
		return t;
	};
	return NewUserRetBoardSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/matching/FBInvalidSkin.exml'] = window.FBInvalidSkin = (function (_super) {
	__extends(FBInvalidSkin, _super);
	function FBInvalidSkin() {
		_super.call(this);
		this.skinParts = ["bg","reasonTag","specialTag","btn0","btn1","btn2"];
		
		this.height = 1386;
		this.width = 640;
		this.elementsContent = [this.bg_i(),this._Image1_i(),this.reasonTag_i(),this.specialTag_i(),this.btn0_i(),this.btn1_i(),this.btn2_i()];
	}
	var _proto = FBInvalidSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.horizontalCenter = 0.5;
		t.source = "ck_diban_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "zd_pplogo_png";
		t.y = 311;
		return t;
	};
	_proto.reasonTag_i = function () {
		var t = new eui.Label();
		this.reasonTag = t;
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "发起者已逃离对决";
		t.textAlign = "center";
		t.textColor = 0x6c3e14;
		t.y = 653;
		return t;
	};
	_proto.specialTag_i = function () {
		var t = new eui.Label();
		this.specialTag = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "你可以自己发起一场战斗，或者去参加排位赛模式";
		t.textAlign = "center";
		t.textColor = 0xb97527;
		t.y = 693;
		return t;
	};
	_proto.btn0_i = function () {
		var t = new eui.Component();
		this.btn0 = t;
		t.anchorOffsetX = 152;
		t.anchorOffsetY = 38;
		t.horizontalCenter = 0.5;
		t.skinName = "CommonLBtnSkin";
		t.visible = false;
		t.y = 915;
		return t;
	};
	_proto.btn1_i = function () {
		var t = new eui.Component();
		this.btn1 = t;
		t.anchorOffsetX = 152;
		t.anchorOffsetY = 38;
		t.horizontalCenter = 0.5;
		t.skinName = "CommonLBtnSkin";
		t.visible = false;
		t.y = 1025;
		return t;
	};
	_proto.btn2_i = function () {
		var t = new eui.Component();
		this.btn2 = t;
		t.anchorOffsetX = 152;
		t.anchorOffsetY = 38;
		t.horizontalCenter = 0.5;
		t.skinName = "CommonLBtnSkin";
		t.visible = false;
		t.y = 970;
		return t;
	};
	return FBInvalidSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/matching/component/MatchingLeftComponentSkin.exml'] = window.MatchingLeftComponentSkin = (function (_super) {
	__extends(MatchingLeftComponentSkin, _super);
	function MatchingLeftComponentSkin() {
		_super.call(this);
		this.skinParts = ["headImg","nameTF","lvTF","mc"];
		
		this.height = 155;
		this.width = 388;
		this.elementsContent = [this.headImg_i(),this._Image1_i(),this.nameTF_i(),this.lvTF_i(),this.mc_i()];
	}
	var _proto = MatchingLeftComponentSkin.prototype;

	_proto.headImg_i = function () {
		var t = new eui.Image();
		this.headImg = t;
		t.height = 100;
		t.horizontalCenter = 120;
		t.source = "";
		t.width = 100;
		t.y = 25;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(187,59,158,0);
		t.scaleX = 1;
		t.source = "zd_ppdb_png";
		t.x = -5;
		t.y = 0;
		return t;
	};
	_proto.nameTF_i = function () {
		var t = new eui.Label();
		this.nameTF = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.size = 30;
		t.text = "一二三四五六";
		t.textAlign = "center";
		t.textColor = 0x6c3e14;
		t.width = 198.8;
		t.x = -1.2;
		t.y = 39.65;
		return t;
	};
	_proto.lvTF_i = function () {
		var t = new eui.Label();
		this.lvTF = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.size = 30;
		t.stroke = 2;
		t.strokeColor = 0xB97326;
		t.text = "lv.99";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 178.4;
		t.x = 4.8;
		t.y = 79.56;
		return t;
	};
	_proto.mc_i = function () {
		var t = new eui.Component();
		this.mc = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.skinName = "DuanWeiComponentSkin";
		t.x = 192;
		t.y = 46;
		return t;
	};
	return MatchingLeftComponentSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/matching/component/MatchingRightComponentSkin.exml'] = window.MatchingRightComponentSkin = (function (_super) {
	__extends(MatchingRightComponentSkin, _super);
	function MatchingRightComponentSkin() {
		_super.call(this);
		this.skinParts = ["headImg","mc","nameTF","lvTF","noneTF"];
		
		this.height = 155;
		this.width = 388;
		this.elementsContent = [this.headImg_i(),this._Image1_i(),this.mc_i(),this.nameTF_i(),this.lvTF_i(),this.noneTF_i()];
	}
	var _proto = MatchingRightComponentSkin.prototype;

	_proto.headImg_i = function () {
		var t = new eui.Image();
		this.headImg = t;
		t.height = 100;
		t.horizontalCenter = -115;
		t.source = "";
		t.width = 100;
		t.y = 26;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "zd_ppdb_png";
		t.x = 398;
		t.y = 0;
		return t;
	};
	_proto.mc_i = function () {
		var t = new eui.Component();
		this.mc = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.skinName = "DuanWeiComponentSkin";
		t.x = 136.4;
		t.y = 42.93;
		return t;
	};
	_proto.nameTF_i = function () {
		var t = new eui.Label();
		this.nameTF = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.size = 30;
		t.text = "一二三四五六";
		t.textAlign = "center";
		t.textColor = 0x6c3e14;
		t.width = 187.8;
		t.x = 196;
		t.y = 39;
		return t;
	};
	_proto.lvTF_i = function () {
		var t = new eui.Label();
		this.lvTF = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.size = 30;
		t.stroke = 2;
		t.strokeColor = 0xB97326;
		t.text = "lv.99";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 182.4;
		t.x = 202;
		t.y = 81.91;
		return t;
	};
	_proto.noneTF_i = function () {
		var t = new eui.Label();
		this.noneTF = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.text = "等待对手加入";
		t.textAlign = "center";
		t.textColor = 0x6c3e14;
		t.visible = false;
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
		this.skinParts = ["bg","backBtn","vs","leftBtn","rightBtn","leftMc","rightMc","counterDown"];
		
		this.height = 1386;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this.bg_i(),this.backBtn_i(),this.vs_i(),this.leftBtn_i(),this.rightBtn_i(),this.leftMc_i(),this.rightMc_i(),this.counterDown_i()];
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
		t.anchorOffsetX = 44;
		t.anchorOffsetY = 47;
		t.skinName = "CommonBackBtnSkin";
		t.x = 65.43;
		t.y = 195.1;
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
		t.anchorOffsetX = 89;
		t.anchorOffsetY = 38;
		t.skinName = "CommonMBtnSkin";
		t.x = 185;
		t.y = 965.33;
		return t;
	};
	_proto.rightBtn_i = function () {
		var t = new eui.Component();
		this.rightBtn = t;
		t.anchorOffsetX = 89;
		t.anchorOffsetY = 38;
		t.skinName = "CommonMBtnSkin";
		t.x = 455;
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
	_proto.counterDown_i = function () {
		var t = new eui.Label();
		this.counterDown = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "10:00";
		t.textAlign = "center";
		t.textColor = 0x6c3e14;
		t.y = 866;
		return t;
	};
	return MatchingSceneSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/qualifying/QualifyingSceneSkin.exml'] = window.QualifyingSceneSkin = (function (_super) {
	__extends(QualifyingSceneSkin, _super);
	function QualifyingSceneSkin() {
		_super.call(this);
		this.skinParts = ["bg","desTF1","tapTag","grp1","tweenImg","desTF2","grp2LabelDown","grp2","backBtn"];
		
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
		t.elementsContent = [this._Image1_i(),this.desTF1_i(),this.tapTag_i()];
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
	_proto.tapTag_i = function () {
		var t = new eui.Label();
		this.tapTag = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.horizontalCenter = 207.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "点击屏幕继续";
		t.textColor = 0x6c3e14;
		t.visible = false;
		t.y = 440.7;
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
		t.elementsContent = [this.tweenImg_i(),this._Image2_i(),this._Image3_i(),this.desTF2_i(),this.grp2LabelDown_i()];
		return t;
	};
	_proto.tweenImg_i = function () {
		var t = new eui.Image();
		this.tweenImg = t;
		t.anchorOffsetX = 123;
		t.anchorOffsetY = 123;
		t.source = "zd_ljx_png";
		t.x = 185;
		t.y = 91.69;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "zd_zsnt_png";
		t.x = 2;
		t.y = 31.12;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "sj_xian_png";
		t.x = 2.9;
		t.y = 263.5;
		return t;
	};
	_proto.desTF2_i = function () {
		var t = new eui.Label();
		this.desTF2 = t;
		t.bold = true;
		t.horizontalCenter = 181.5;
		t.text = "正在寻找对手...";
		t.textColor = 0x6c3e14;
		t.y = -121.2;
		return t;
	};
	_proto.grp2LabelDown_i = function () {
		var t = new eui.Label();
		this.grp2LabelDown = t;
		t.bold = true;
		t.horizontalCenter = 180.5;
		t.lineSpacing = 20;
		t.text = "等待6-10秒\n抬起将会取消战斗";
		t.textAlign = "center";
		t.textColor = 0xb97527;
		t.y = 336.65;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Component();
		this.backBtn = t;
		t.anchorOffsetX = 42;
		t.anchorOffsetY = 47;
		t.skinName = "CommonBackBtnSkin";
		t.x = 63.43;
		t.y = 195.1;
		return t;
	};
	return QualifyingSceneSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/rank/GroupRankDialogSkin.exml'] = window.GroupRankDialogSkin = (function (_super) {
	__extends(GroupRankDialogSkin, _super);
	function GroupRankDialogSkin() {
		_super.call(this);
		this.skinParts = ["bg","middleBg","list","scroll","groupName","middleGroup","shareNode0","shareNode1","shareNode2","bottomGroup","backBtn"];
		
		this.height = 1386;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this.bg_i(),this.middleGroup_i(),this.bottomGroup_i(),this.backBtn_i()];
	}
	var _proto = GroupRankDialogSkin.prototype;

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
		t.horizontalCenter = 0;
		t.source = "ck_diban_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.middleGroup_i = function () {
		var t = new eui.Group();
		this.middleGroup = t;
		t.width = 640;
		t.y = 295;
		t.elementsContent = [this.middleBg_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this.scroll_i(),this._Image4_i(),this.groupName_i()];
		return t;
	};
	_proto.middleBg_i = function () {
		var t = new eui.Image();
		this.middleBg = t;
		t.anchorOffsetY = 0;
		t.height = 962;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(13,13,8,9);
		t.source = "cz_xlkd_png";
		t.width = 600;
		t.y = -112;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.rotation = 90;
		t.source = "fx_jiaobiao_png";
		t.x = 610;
		t.y = -102;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "fx_jiaobiao_png";
		t.x = 30;
		t.y = -102;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "fx_logo_png";
		t.y = -170;
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
		t.y = 84;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.Group();
		this.list = t;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "fx_kuang_png";
		t.y = 34;
		return t;
	};
	_proto.groupName_i = function () {
		var t = new eui.Label();
		this.groupName = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "微动工作群";
		t.textAlign = "center";
		t.textColor = 0xfff9c7;
		t.y = 42;
		return t;
	};
	_proto.bottomGroup_i = function () {
		var t = new eui.Group();
		this.bottomGroup = t;
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 94.5;
		t.width = 640;
		t.x = 320;
		t.y = 1155.5;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Label1_i(),this.shareNode0_i(),this.shareNode1_i(),this.shareNode2_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "cz_diban_png";
		t.y = 43;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sz_db_png";
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "ph_fxb_png";
		t.x = 309;
		t.y = 11;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "分享到微信群   查看群排行";
		t.textAlign = "center";
		t.textColor = 0x6c3e14;
		t.y = 82;
		return t;
	};
	_proto.shareNode0_i = function () {
		var t = new eui.Label();
		this.shareNode0 = t;
		t.bold = true;
		t.size = 20;
		t.text = "可获得分享奖励";
		t.textColor = 0xb97326;
		t.x = 178;
		t.y = 142;
		return t;
	};
	_proto.shareNode1_i = function () {
		var t = new eui.Image();
		this.shareNode1 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "sy_tilitubiao_png";
		t.x = 346;
		t.y = 128;
		return t;
	};
	_proto.shareNode2_i = function () {
		var t = new eui.Label();
		this.shareNode2 = t;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0xb97326;
		t.text = "x200";
		t.textColor = 0xffffff;
		t.x = 398;
		t.y = 142;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Component();
		this.backBtn = t;
		t.anchorOffsetX = 42;
		t.anchorOffsetY = 47;
		t.skinName = "CommonBackBtnSkin";
		t.x = 63.09;
		t.y = 192.43;
		return t;
	};
	return GroupRankDialogSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/rank/PropCompareSkin.exml'] = window.PropCompareSkin = (function (_super) {
	__extends(PropCompareSkin, _super);
	function PropCompareSkin() {
		_super.call(this);
		this.skinParts = ["bg","middleBg","ATF","BTF","CTF","DTF","ETF","FTF","mePropGroup","leftMc","rightMc","compareGroup","middleGroup","shareNode0","shareNode1","shareNode2","bottomGroup","backBtn"];
		
		this.height = 1386;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this.bg_i(),this.middleGroup_i(),this.bottomGroup_i(),this.backBtn_i()];
	}
	var _proto = PropCompareSkin.prototype;

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
		t.horizontalCenter = 0;
		t.source = "ck_diban_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.middleGroup_i = function () {
		var t = new eui.Group();
		this.middleGroup = t;
		t.width = 640;
		t.y = 295;
		t.elementsContent = [this.middleBg_i(),this._Image1_i(),this._Label1_i(),this.mePropGroup_i(),this._Image2_i(),this._Group1_i(),this.compareGroup_i()];
		return t;
	};
	_proto.middleBg_i = function () {
		var t = new eui.Image();
		this.middleBg = t;
		t.anchorOffsetY = 0;
		t.height = 962;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(13,13,8,9);
		t.source = "cz_xlkd_png";
		t.width = 600;
		t.y = -122;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 5;
		t.horizontalCenter = 0;
		t.source = "sz_btt_png";
		t.y = -87;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "比一比";
		t.textColor = 0xb97326;
		t.y = -102;
		return t;
	};
	_proto.mePropGroup_i = function () {
		var t = new eui.Group();
		this.mePropGroup = t;
		t.width = 640;
		t.y = -42;
		t.elementsContent = [this.ATF_i(),this.BTF_i(),this.CTF_i(),this.DTF_i(),this.ETF_i(),this.FTF_i(),this._Rect2_i()];
		return t;
	};
	_proto.ATF_i = function () {
		var t = new eui.Label();
		this.ATF = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "命中率";
		t.textAlign = "center";
		t.y = -15;
		return t;
	};
	_proto.BTF_i = function () {
		var t = new eui.Label();
		this.BTF = t;
		t.bold = true;
		t.horizontalCenter = 157;
		t.size = 22;
		t.text = "左轮胜场";
		t.textAlign = "center";
		t.y = 50;
		return t;
	};
	_proto.CTF_i = function () {
		var t = new eui.Label();
		this.CTF = t;
		t.bold = true;
		t.horizontalCenter = 157;
		t.size = 22;
		t.text = "步枪胜场";
		t.textAlign = "center";
		t.y = 190;
		return t;
	};
	_proto.DTF_i = function () {
		var t = new eui.Label();
		this.DTF = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "散弹胜场";
		t.textAlign = "center";
		t.y = 240;
		return t;
	};
	_proto.ETF_i = function () {
		var t = new eui.Label();
		this.ETF = t;
		t.bold = true;
		t.horizontalCenter = -150;
		t.size = 22;
		t.text = "狙击胜场";
		t.textAlign = "center";
		t.y = 190;
		return t;
	};
	_proto.FTF_i = function () {
		var t = new eui.Label();
		this.FTF = t;
		t.bold = true;
		t.horizontalCenter = -147;
		t.size = 22;
		t.text = "爆头率";
		t.textAlign = "center";
		t.y = 50;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 100;
		t.height = 200;
		t.visible = false;
		t.width = 200;
		t.x = 320;
		t.y = 131;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sj_xian_png";
		t.y = 260;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.width = 640;
		t.y = 282;
		t.elementsContent = [this.leftMc_i(),this.rightMc_i()];
		return t;
	};
	_proto.leftMc_i = function () {
		var t = new eui.Component();
		this.leftMc = t;
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.skinName = "MatchingLeftComponentSkin";
		t.x = 18;
		t.y = 0;
		return t;
	};
	_proto.rightMc_i = function () {
		var t = new eui.Component();
		this.rightMc = t;
		t.anchorOffsetX = 388;
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.skinName = "MatchingRightComponentSkin";
		t.x = 622;
		t.y = 0;
		return t;
	};
	_proto.compareGroup_i = function () {
		var t = new eui.Group();
		this.compareGroup = t;
		t.width = 640;
		t.y = 420;
		return t;
	};
	_proto.bottomGroup_i = function () {
		var t = new eui.Group();
		this.bottomGroup = t;
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 94.5;
		t.width = 640;
		t.x = 320;
		t.y = 1155.5;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Label2_i(),this.shareNode0_i(),this.shareNode1_i(),this.shareNode2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "cz_diban_png";
		t.y = 43;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sz_db_png";
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "ph_fxb_png";
		t.x = 309;
		t.y = 11;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "分享到微信群   查看群排行";
		t.textAlign = "center";
		t.textColor = 0x6c3e14;
		t.y = 82;
		return t;
	};
	_proto.shareNode0_i = function () {
		var t = new eui.Label();
		this.shareNode0 = t;
		t.bold = true;
		t.size = 20;
		t.text = "可获得分享奖励";
		t.textColor = 0xb97326;
		t.x = 178;
		t.y = 142;
		return t;
	};
	_proto.shareNode1_i = function () {
		var t = new eui.Image();
		this.shareNode1 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "sy_tilitubiao_png";
		t.x = 346;
		t.y = 128;
		return t;
	};
	_proto.shareNode2_i = function () {
		var t = new eui.Label();
		this.shareNode2 = t;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0xb97326;
		t.text = "x200";
		t.textColor = 0xffffff;
		t.x = 398;
		t.y = 142;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Component();
		this.backBtn = t;
		t.anchorOffsetX = 42;
		t.anchorOffsetY = 47;
		t.skinName = "CommonBackBtnSkin";
		t.x = 63.09;
		t.y = 192.43;
		return t;
	};
	return PropCompareSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/rank/PropShareSkin.exml'] = window.PropShareSkin = (function (_super) {
	__extends(PropShareSkin, _super);
	function PropShareSkin() {
		_super.call(this);
		this.skinParts = ["bg","middleBg","ATF","BTF","CTF","DTF","ETF","FTF","mePropGroup","headImg","middleGroup","shareToFriend","saveToAlbum","bottomGroup","backBtn"];
		
		this.height = 1386;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this.bg_i(),this.middleGroup_i(),this.bottomGroup_i(),this.backBtn_i()];
	}
	var _proto = PropShareSkin.prototype;

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
		t.horizontalCenter = 0;
		t.source = "ck_diban_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.middleGroup_i = function () {
		var t = new eui.Group();
		this.middleGroup = t;
		t.width = 640;
		t.y = 295;
		t.elementsContent = [this.middleBg_i(),this._Image1_i(),this._Image2_i(),this.mePropGroup_i(),this._Image3_i(),this._Group1_i()];
		return t;
	};
	_proto.middleBg_i = function () {
		var t = new eui.Image();
		this.middleBg = t;
		t.anchorOffsetY = 0;
		t.height = 962;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(13,13,8,9);
		t.source = "cz_xlkd_png";
		t.width = 600;
		t.y = -122;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.rotation = 0;
		t.source = "fx_jiaobiao_png";
		t.x = 30;
		t.y = -102;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.rotation = 90;
		t.source = "fx_jiaobiao_png";
		t.x = 610;
		t.y = -102;
		return t;
	};
	_proto.mePropGroup_i = function () {
		var t = new eui.Group();
		this.mePropGroup = t;
		t.width = 640;
		t.y = -42;
		t.elementsContent = [this.ATF_i(),this.BTF_i(),this.CTF_i(),this.DTF_i(),this.ETF_i(),this.FTF_i(),this._Rect2_i()];
		return t;
	};
	_proto.ATF_i = function () {
		var t = new eui.Label();
		this.ATF = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "命中率";
		t.textAlign = "center";
		t.y = -15;
		return t;
	};
	_proto.BTF_i = function () {
		var t = new eui.Label();
		this.BTF = t;
		t.bold = true;
		t.horizontalCenter = 157;
		t.size = 22;
		t.text = "左轮胜场";
		t.textAlign = "center";
		t.y = 50;
		return t;
	};
	_proto.CTF_i = function () {
		var t = new eui.Label();
		this.CTF = t;
		t.bold = true;
		t.horizontalCenter = 157;
		t.size = 22;
		t.text = "步枪胜场";
		t.textAlign = "center";
		t.y = 190;
		return t;
	};
	_proto.DTF_i = function () {
		var t = new eui.Label();
		this.DTF = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "散弹胜场";
		t.textAlign = "center";
		t.y = 240;
		return t;
	};
	_proto.ETF_i = function () {
		var t = new eui.Label();
		this.ETF = t;
		t.bold = true;
		t.horizontalCenter = -150;
		t.size = 22;
		t.text = "狙击胜场";
		t.textAlign = "center";
		t.y = 190;
		return t;
	};
	_proto.FTF_i = function () {
		var t = new eui.Label();
		this.FTF = t;
		t.bold = true;
		t.horizontalCenter = -147;
		t.size = 22;
		t.text = "爆头率";
		t.textAlign = "center";
		t.y = 50;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 100;
		t.height = 200;
		t.visible = false;
		t.width = 200;
		t.x = 320;
		t.y = 131;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sj_xian_png";
		t.y = 260;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.width = 640;
		t.y = 312;
		t.elementsContent = [this._Image4_i(),this.headImg_i(),this._Image5_i(),this._Label1_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(31,5,188,30);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "fx_kuang_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.headImg_i = function () {
		var t = new eui.Image();
		this.headImg = t;
		t.height = 84;
		t.source = "";
		t.width = 84;
		t.x = 45;
		t.y = 5;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "sy_touxiang_png";
		t.x = 40;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xb97326;
		t.text = "Label";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 171;
		return t;
	};
	_proto.bottomGroup_i = function () {
		var t = new eui.Group();
		this.bottomGroup = t;
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 0;
		t.height = 156;
		t.width = 640;
		t.x = 320;
		t.y = 1000;
		t.elementsContent = [this.shareToFriend_i(),this.saveToAlbum_i(),this._Image6_i(),this._Image7_i()];
		return t;
	};
	_proto.shareToFriend_i = function () {
		var t = new eui.Button();
		this.shareToFriend = t;
		t.anchorOffsetX = 123;
		t.anchorOffsetY = 38;
		t.skinName = "CommonMBtnSkin";
		t.x = 173;
		t.y = 38;
		return t;
	};
	_proto.saveToAlbum_i = function () {
		var t = new eui.Button();
		this.saveToAlbum = t;
		t.anchorOffsetX = 123;
		t.anchorOffsetY = 38;
		t.skinName = "CommonMBtnSkin";
		t.x = 467;
		t.y = 38;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.rotation = -90;
		t.source = "fx_jiaobiao_png";
		t.x = 30;
		t.y = 116;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.rotation = -180;
		t.source = "fx_jiaobiao_png";
		t.x = 610;
		t.y = 116;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Component();
		this.backBtn = t;
		t.anchorOffsetX = 42;
		t.anchorOffsetY = 47;
		t.skinName = "CommonBackBtnSkin";
		t.x = 63.09;
		t.y = 192.43;
		return t;
	};
	return PropShareSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/rank/component/RankTabComponentSkin.exml'] = window.RankTabComponentSkin = (function (_super) {
	__extends(RankTabComponentSkin, _super);
	function RankTabComponentSkin() {
		_super.call(this);
		this.skinParts = ["diImg","tabTF"];
		
		this.elementsContent = [this.diImg_i(),this.tabTF_i()];
	}
	var _proto = RankTabComponentSkin.prototype;

	_proto.diImg_i = function () {
		var t = new eui.Image();
		this.diImg = t;
		t.horizontalCenter = 0;
		t.source = "ph_yq2_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.tabTF_i = function () {
		var t = new eui.Label();
		this.tabTF = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "";
		t.textAlign = "center";
		t.verticalCenter = 0;
		return t;
	};
	return RankTabComponentSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/rank/RankDialogSkin.exml'] = window.RankDialogSkin = (function (_super) {
	__extends(RankDialogSkin, _super);
	function RankDialogSkin() {
		_super.call(this);
		this.skinParts = ["bg","tabBtn1","tabBtn2","topGroup","desTF","middleBg","list","scroll","middleGroup","shareNode0","shareNode1","shareNode2","bottomGroup","backBtn"];
		
		this.height = 1386;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this.bg_i(),this.topGroup_i(),this.middleGroup_i(),this.bottomGroup_i(),this.backBtn_i()];
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
		t.horizontalCenter = 0;
		t.source = "ck_diban_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.topGroup_i = function () {
		var t = new eui.Group();
		this.topGroup = t;
		t.width = 640;
		t.y = 127;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.tabBtn1_i(),this.tabBtn2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "cz_dingban_png";
		t.y = 58;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "ph_ph_png";
		t.y = 0;
		return t;
	};
	_proto.tabBtn1_i = function () {
		var t = new eui.Component();
		this.tabBtn1 = t;
		t.anchorOffsetX = 94.5;
		t.anchorOffsetY = 15;
		t.skinName = "RankTabComponentSkin";
		t.x = 160.5;
		t.y = 142;
		return t;
	};
	_proto.tabBtn2_i = function () {
		var t = new eui.Component();
		this.tabBtn2 = t;
		t.anchorOffsetX = 94.5;
		t.anchorOffsetY = 15;
		t.skinName = "RankTabComponentSkin";
		t.x = 479.5;
		t.y = 142;
		return t;
	};
	_proto.middleGroup_i = function () {
		var t = new eui.Group();
		this.middleGroup = t;
		t.width = 640;
		t.y = 295;
		t.elementsContent = [this.desTF_i(),this._Image3_i(),this.middleBg_i(),this.scroll_i()];
		return t;
	};
	_proto.desTF_i = function () {
		var t = new eui.Label();
		this.desTF = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "当前我的世界排名";
		t.textAlign = "center";
		t.textColor = 0x6c3e14;
		t.y = 20;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sj_xian_png";
		t.y = 57;
		return t;
	};
	_proto.middleBg_i = function () {
		var t = new eui.Image();
		this.middleBg = t;
		t.height = 850;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(13,13,8,9);
		t.source = "cz_xlkd_png";
		t.width = 600;
		t.y = 0;
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
		t.y = 84;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.Group();
		this.list = t;
		return t;
	};
	_proto.bottomGroup_i = function () {
		var t = new eui.Group();
		this.bottomGroup = t;
		t.anchorOffsetX = 317;
		t.anchorOffsetY = 93;
		t.width = 640;
		t.x = 317;
		t.y = 1154;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Label1_i(),this.shareNode0_i(),this.shareNode1_i(),this.shareNode2_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "cz_diban_png";
		t.y = 43;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sz_db_png";
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "ph_fxb_png";
		t.x = 309;
		t.y = 11;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "分享到微信群   查看群排行";
		t.textAlign = "center";
		t.textColor = 0x6c3e14;
		t.y = 82;
		return t;
	};
	_proto.shareNode0_i = function () {
		var t = new eui.Label();
		this.shareNode0 = t;
		t.bold = true;
		t.size = 20;
		t.text = "可获得分享奖励";
		t.textColor = 0xb97326;
		t.x = 178;
		t.y = 142;
		return t;
	};
	_proto.shareNode1_i = function () {
		var t = new eui.Image();
		this.shareNode1 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "sy_tilitubiao_png";
		t.x = 346;
		t.y = 128;
		return t;
	};
	_proto.shareNode2_i = function () {
		var t = new eui.Label();
		this.shareNode2 = t;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0xb97326;
		t.text = "x200";
		t.textColor = 0xffffff;
		t.x = 398;
		t.y = 142;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Component();
		this.backBtn = t;
		t.anchorOffsetX = 42;
		t.anchorOffsetY = 47;
		t.skinName = "CommonBackBtnSkin";
		t.x = 63.09;
		t.y = 192.43;
		return t;
	};
	return RankDialogSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/rank/RankInstructionSkin.exml'] = window.RankInstructionSkin = (function (_super) {
	__extends(RankInstructionSkin, _super);
	function RankInstructionSkin() {
		_super.call(this);
		this.skinParts = ["rect","title","info0","rankIns0","rankIcon0_0","rankIcon0_1","rankIns1","rankIcon1_0","rankIns2","rankIcon1_1","rankIcon2_0","rankIcon2_1","rankIns3","rankIcon3_0","insGroup"];
		
		this.height = 1386;
		this.width = 640;
		this.elementsContent = [this.rect_i(),this._Image1_i(),this.insGroup_i()];
	}
	var _proto = RankInstructionSkin.prototype;

	_proto.rect_i = function () {
		var t = new eui.Rect();
		this.rect = t;
		t.fillAlpha = 0.6;
		t.height = 1386;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sy_duanwei_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.insGroup_i = function () {
		var t = new eui.Group();
		this.insGroup = t;
		t.height = 788;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 476;
		t.elementsContent = [this.title_i(),this.info0_i(),this.rankIns0_i(),this.rankIcon0_0_i(),this.rankIcon0_1_i(),this.rankIns1_i(),this.rankIcon1_0_i(),this.rankIns2_i(),this.rankIcon1_1_i(),this.rankIcon2_0_i(),this.rankIcon2_1_i(),this.rankIns3_i(),this.rankIcon3_0_i()];
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.fontFamily = "";
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "Label";
		t.y = 20;
		return t;
	};
	_proto.info0_i = function () {
		var t = new eui.Label();
		this.info0 = t;
		t.fontFamily = "";
		t.lineSpacing = 10;
		t.size = 20;
		t.text = "hahaha";
		t.width = 436;
		t.x = 20;
		t.y = 84;
		return t;
	};
	_proto.rankIns0_i = function () {
		var t = new eui.Label();
		this.rankIns0 = t;
		t.fontFamily = "";
		t.size = 20;
		t.text = "des0";
		t.x = 20;
		t.y = 164;
		return t;
	};
	_proto.rankIcon0_0_i = function () {
		var t = new eui.Component();
		this.rankIcon0_0 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "DuanWeiComponentSkin";
		t.x = 91;
		t.y = 189;
		return t;
	};
	_proto.rankIcon0_1_i = function () {
		var t = new eui.Component();
		this.rankIcon0_1 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "DuanWeiComponentSkin";
		t.x = 258;
		t.y = 189;
		return t;
	};
	_proto.rankIns1_i = function () {
		var t = new eui.Label();
		this.rankIns1 = t;
		t.fontFamily = "";
		t.size = 20;
		t.text = "des1";
		t.x = 20;
		t.y = 311;
		return t;
	};
	_proto.rankIcon1_0_i = function () {
		var t = new eui.Component();
		this.rankIcon1_0 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "DuanWeiComponentSkin";
		t.x = 174;
		t.y = 336;
		return t;
	};
	_proto.rankIns2_i = function () {
		var t = new eui.Label();
		this.rankIns2 = t;
		t.fontFamily = "";
		t.size = 20;
		t.text = "des2";
		t.x = 20;
		t.y = 458;
		return t;
	};
	_proto.rankIcon1_1_i = function () {
		var t = new eui.Component();
		this.rankIcon1_1 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "DuanWeiComponentSkin";
		t.x = 27;
		t.y = 488;
		return t;
	};
	_proto.rankIcon2_0_i = function () {
		var t = new eui.Component();
		this.rankIcon2_0 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "DuanWeiComponentSkin";
		t.x = 174;
		t.y = 488;
		return t;
	};
	_proto.rankIcon2_1_i = function () {
		var t = new eui.Component();
		this.rankIcon2_1 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "DuanWeiComponentSkin";
		t.x = 321;
		t.y = 488;
		return t;
	};
	_proto.rankIns3_i = function () {
		var t = new eui.Label();
		this.rankIns3 = t;
		t.fontFamily = "";
		t.size = 20;
		t.text = "des2";
		t.x = 20;
		t.y = 610;
		return t;
	};
	_proto.rankIcon3_0_i = function () {
		var t = new eui.Component();
		this.rankIcon3_0 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.skinName = "DuanWeiComponentSkin";
		t.y = 640;
		return t;
	};
	return RankInstructionSkin;
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
		t.bold = true;
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
		t.bold = true;
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
		t.bold = true;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/main/com/CommonSBtnSkin.exml'] = window.CommonSBtnSkin = (function (_super) {
	__extends(CommonSBtnSkin, _super);
	function CommonSBtnSkin() {
		_super.call(this);
		this.skinParts = ["tfImg"];
		
		this.elementsContent = [this._Image1_i(),this.tfImg_i()];
	}
	var _proto = CommonSBtnSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "new_common_btn_s_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.tfImg_i = function () {
		var t = new eui.Image();
		this.tfImg = t;
		t.horizontalCenter = 0.5;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	return CommonSBtnSkin;
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
		t.bold = true;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/setting/component/SettingPrgComponentSkin.exml'] = window.SettingPrgComponentSkin = (function (_super) {
	__extends(SettingPrgComponentSkin, _super);
	function SettingPrgComponentSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.height = 16;
		this.width = 250;
		this.elementsContent = [this._Image1_i(),this.thumb_i()];
	}
	var _proto = SettingPrgComponentSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(21,2,132,12);
		t.source = "sz_jytc_png";
		t.verticalCenter = 0;
		t.width = 250;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.scale9Grid = new egret.Rectangle(21,5,128,0);
		t.source = "sz_jyt_png";
		t.verticalCenter = 0;
		t.width = 246;
		t.x = 2;
		return t;
	};
	return SettingPrgComponentSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/setting/SettingDialogSkin.exml'] = window.SettingDialogSkin = (function (_super) {
	__extends(SettingDialogSkin, _super);
	function SettingDialogSkin() {
		_super.call(this);
		this.skinParts = ["bg","headImg","versionTF","shareBtn1","shareBtn2","dwMc1","lvTF","nameTF","dwImg","dwMc","pwTF","starTF","star6Img","star6Img2","yyMc","yxMc","ATF","BTF","CTF","DTF","ETF","FTF","mzImg","lvPrg","expTF"];
		
		this.height = 1386;
		this.width = 640;
		this.elementsContent = [this.bg_i(),this._Image1_i(),this.headImg_i(),this._Image2_i(),this.versionTF_i(),this.shareBtn1_i(),this.shareBtn2_i(),this.dwMc1_i(),this.lvTF_i(),this.nameTF_i(),this.dwImg_i(),this.dwMc_i(),this._Image3_i(),this._Image4_i(),this.pwTF_i(),this._Label1_i(),this.starTF_i(),this.star6Img_i(),this.star6Img2_i(),this.yyMc_i(),this.yxMc_i(),this._Rect1_i(),this.ATF_i(),this.BTF_i(),this.CTF_i(),this.DTF_i(),this.ETF_i(),this.FTF_i(),this._Image5_i(),this.mzImg_i(),this.lvPrg_i(),this.expTF_i()];
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
		t.height = 84;
		t.source = "";
		t.width = 84;
		t.x = 99;
		t.y = 378;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "sy_touxiang_png";
		t.x = 94;
		t.y = 373;
		return t;
	};
	_proto.versionTF_i = function () {
		var t = new eui.Label();
		this.versionTF = t;
		t.bold = true;
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
		t.anchorOffsetX = 72;
		t.anchorOffsetY = 26.5;
		t.skinName = "CommonSBtnSkin";
		t.x = 477;
		t.y = 433.82;
		return t;
	};
	_proto.shareBtn2_i = function () {
		var t = new eui.Component();
		this.shareBtn2 = t;
		t.anchorOffsetX = 73;
		t.anchorOffsetY = 27.5;
		t.skinName = "CommonSBtnSkin";
		t.x = 477;
		t.y = 856.72;
		return t;
	};
	_proto.dwMc1_i = function () {
		var t = new eui.Component();
		this.dwMc1 = t;
		t.anchorOffsetX = 105;
		t.anchorOffsetY = 92;
		t.skinName = "DuanWeiComponentSkin";
		t.visible = false;
		t.x = 488;
		t.y = 550;
		return t;
	};
	_proto.lvTF_i = function () {
		var t = new eui.Label();
		this.lvTF = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xB97326;
		t.text = "lv.99";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 127.4;
		t.x = 77.3;
		t.y = 478.32;
		return t;
	};
	_proto.nameTF_i = function () {
		var t = new eui.Label();
		this.nameTF = t;
		t.anchorOffsetX = 0;
		t.bold = true;
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
		t.visible = false;
		t.x = 149.9;
		t.y = 533.32;
		return t;
	};
	_proto.dwMc_i = function () {
		var t = new eui.Component();
		this.dwMc = t;
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.skinName = "DuanWeiComponentSkin";
		t.x = 150;
		t.y = 530;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "sz_btt_png";
		t.x = 99;
		t.y = 515;
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
		t.bold = true;
		t.size = 24;
		t.text = "Label";
		t.textColor = 0x6c3e14;
		t.x = 215.22;
		t.y = 543.32;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 22;
		t.text = "排位数据";
		t.textColor = 0xb97527;
		t.x = 263.22;
		t.y = 508.32;
		return t;
	};
	_proto.starTF_i = function () {
		var t = new eui.Label();
		this.starTF = t;
		t.bold = true;
		t.size = 24;
		t.text = "Label";
		t.textColor = 0x6C3E14;
		t.x = 420.9;
		t.y = 543.32;
		return t;
	};
	_proto.star6Img_i = function () {
		var t = new eui.Image();
		this.star6Img = t;
		t.source = "sy_duanwei_dankong_png";
		t.x = 373;
		t.y = 540;
		return t;
	};
	_proto.star6Img2_i = function () {
		var t = new eui.Image();
		this.star6Img2 = t;
		t.source = "sy_duanwei_zidan_png";
		t.x = 378;
		t.y = 540;
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
		t.bold = true;
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
		t.bold = true;
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
		t.bold = true;
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
		t.bold = true;
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
		t.bold = true;
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
		t.bold = true;
		t.horizontalCenter = -147;
		t.size = 22;
		t.text = "爆头率";
		t.textAlign = "center";
		t.y = 630;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "sz_db_png";
		t.x = 266;
		t.y = 292;
		return t;
	};
	_proto.mzImg_i = function () {
		var t = new eui.Image();
		this.mzImg = t;
		t.source = "";
		t.x = 267;
		t.y = 289;
		return t;
	};
	_proto.lvPrg_i = function () {
		var t = new eui.ProgressBar();
		this.lvPrg = t;
		t.skinName = "SettingPrgComponentSkin";
		t.x = 193.35;
		t.y = 482.32;
		return t;
	};
	_proto.expTF_i = function () {
		var t = new eui.Label();
		this.expTF = t;
		t.bold = true;
		t.horizontalCenter = -9.5;
		t.size = 20;
		t.text = "0/0";
		t.textColor = 0xf4f0ed;
		t.y = 479.36;
		return t;
	};
	return SettingDialogSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/buyTi/list/BuyTiItemRenderSkin.exml'] = window.BuyTiItemRenderSkin = (function (_super) {
	__extends(BuyTiItemRenderSkin, _super);
	function BuyTiItemRenderSkin() {
		_super.call(this);
		this.skinParts = ["desTF","diamondTF","iconImg"];
		
		this.height = 146;
		this.width = 590;
		this.elementsContent = [this._Image1_i(),this.desTF_i(),this._Image2_i(),this.diamondTF_i(),this.iconImg_i()];
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
		t.bold = true;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xb97326;
		t.text = "玩家昵称六字";
		t.textColor = 0xFFFFFF;
		t.x = 186;
		t.y = 59;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "sy_zuanshi_png";
		t.x = 404;
		t.y = 40;
		return t;
	};
	_proto.diamondTF_i = function () {
		var t = new eui.Label();
		this.diamondTF = t;
		t.bold = true;
		t.size = 30;
		t.stroke = 2;
		t.strokeColor = 0xb97326;
		t.text = "9999";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.x = 469;
		t.y = 56;
		return t;
	};
	_proto.iconImg_i = function () {
		var t = new eui.Image();
		this.iconImg = t;
		t.source = "";
		t.x = 28;
		t.y = 17;
		return t;
	};
	return BuyTiItemRenderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/buyTi/list/StrenghForFreeItemSkin.exml'] = window.StrenghForFreeItemSkin = (function (_super) {
	__extends(StrenghForFreeItemSkin, _super);
	function StrenghForFreeItemSkin() {
		_super.call(this);
		this.skinParts = ["diamondTF","iconImg","labelForFree"];
		
		this.height = 146;
		this.width = 590;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.diamondTF_i(),this.iconImg_i(),this.labelForFree_i(),this._Image3_i()];
	}
	var _proto = StrenghForFreeItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "cz_diban_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "cz_tili_1_png";
		t.verticalCenter = 0;
		t.x = 356;
		return t;
	};
	_proto.diamondTF_i = function () {
		var t = new eui.Label();
		this.diamondTF = t;
		t.bold = true;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xb97326;
		t.text = "X 1";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.x = 484;
		t.y = 56;
		return t;
	};
	_proto.iconImg_i = function () {
		var t = new eui.Image();
		this.iconImg = t;
		t.source = "";
		t.x = 28;
		t.y = 17;
		return t;
	};
	_proto.labelForFree_i = function () {
		var t = new eui.Label();
		this.labelForFree = t;
		t.bold = true;
		t.size = 24;
		t.text = "分享到微信群免费获取体力";
		t.textAlign = "left";
		t.textColor = 0xb97326;
		t.x = 40;
		t.y = 99;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "tili_png";
		t.verticalCenter = -18.5;
		t.x = 40;
		return t;
	};
	return StrenghForFreeItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/charge/list/ChargeItemRenderSkin.exml'] = window.ChargeItemRenderSkin = (function (_super) {
	__extends(ChargeItemRenderSkin, _super);
	function ChargeItemRenderSkin() {
		_super.call(this);
		this.skinParts = ["diamondTF","costImg","firstTF","iconImg"];
		
		this.height = 146;
		this.width = 590;
		this.elementsContent = [this._Image1_i(),this.diamondTF_i(),this.costImg_i(),this.firstTF_i(),this.iconImg_i()];
	}
	var _proto = ChargeItemRenderSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "cz_diban_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.diamondTF_i = function () {
		var t = new eui.Label();
		this.diamondTF = t;
		t.bold = true;
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
	_proto.firstTF_i = function () {
		var t = new eui.Label();
		this.firstTF = t;
		t.bold = true;
		t.size = 24;
		t.text = "首充双倍";
		t.textColor = 0xb97527;
		t.x = 186;
		t.y = 97;
		return t;
	};
	_proto.iconImg_i = function () {
		var t = new eui.Image();
		this.iconImg = t;
		t.source = "";
		t.x = 18;
		t.y = 13;
		return t;
	};
	return ChargeItemRenderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/mail/list/MailItemRenderSkin.exml'] = window.MailItemRenderSkin = (function (_super) {
	__extends(MailItemRenderSkin, _super);
	function MailItemRenderSkin() {
		_super.call(this);
		this.skinParts = ["bg","nameTF","timeTF","icon"];
		
		this.height = 112;
		this.width = 590;
		this.elementsContent = [this.bg_i(),this.nameTF_i(),this.timeTF_i(),this.icon_i()];
	}
	var _proto = MailItemRenderSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.nameTF_i = function () {
		var t = new eui.Label();
		this.nameTF = t;
		t.bold = true;
		t.size = 28;
		t.text = "邮件标题";
		t.textColor = 0x6c3e14;
		t.x = 125;
		t.y = 20;
		return t;
	};
	_proto.timeTF_i = function () {
		var t = new eui.Label();
		this.timeTF = t;
		t.bold = true;
		t.size = 24;
		t.text = "";
		t.textColor = 0xb97527;
		t.x = 125;
		t.y = 62;
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.source = "";
		t.x = 56;
		t.y = 56;
		return t;
	};
	return MailItemRenderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/main/com/MainRotation2Skin.exml'] = window.MainRotation2Skin = (function (_super) {
	__extends(MainRotation2Skin, _super);
	function MainRotation2Skin() {
		_super.call(this);
		this.skinParts = ["p0","p7","p6","p5","p4","p3","p2","p1","itemList"];
		
		this.height = 410;
		this.width = 410;
		this.elementsContent = [this._Image1_i(),this.itemList_i()];
	}
	var _proto = MainRotation2Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 410;
		t.source = "new_main_menu_bg_png";
		t.width = 410;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.itemList_i = function () {
		var t = new eui.Group();
		this.itemList = t;
		t.height = 0;
		t.width = 0;
		t.x = 205;
		t.y = 205;
		t.elementsContent = [this.p0_i(),this.p7_i(),this.p6_i(),this.p5_i(),this.p4_i(),this.p3_i(),this.p2_i(),this.p1_i()];
		return t;
	};
	_proto.p0_i = function () {
		var t = new eui.Component();
		this.p0 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 51;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "MainDaojuItemRenderSkin";
		t.touchEnabled = true;
		t.x = 0;
		t.y = -150;
		return t;
	};
	_proto.p7_i = function () {
		var t = new eui.Component();
		this.p7 = t;
		t.anchorOffsetX = 53;
		t.anchorOffsetY = 52;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "MainDaojuItemRenderSkin";
		t.x = 105;
		t.y = -105;
		return t;
	};
	_proto.p6_i = function () {
		var t = new eui.Component();
		this.p6 = t;
		t.anchorOffsetX = 52;
		t.anchorOffsetY = 52;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "MainDaojuItemRenderSkin";
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto.p5_i = function () {
		var t = new eui.Component();
		this.p5 = t;
		t.anchorOffsetX = 49;
		t.anchorOffsetY = 51;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "MainDaojuItemRenderSkin";
		t.x = 105;
		t.y = 105;
		return t;
	};
	_proto.p4_i = function () {
		var t = new eui.Component();
		this.p4 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 50;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "MainDaojuItemRenderSkin";
		t.x = 0;
		t.y = 150;
		return t;
	};
	_proto.p3_i = function () {
		var t = new eui.Component();
		this.p3 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "MainDaojuItemRenderSkin";
		t.x = -105;
		t.y = 105;
		return t;
	};
	_proto.p2_i = function () {
		var t = new eui.Component();
		this.p2 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 50;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "MainDaojuItemRenderSkin";
		t.x = -150;
		t.y = 0;
		return t;
	};
	_proto.p1_i = function () {
		var t = new eui.Component();
		this.p1 = t;
		t.anchorOffsetX = 49;
		t.anchorOffsetY = 52;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "MainDaojuItemRenderSkin";
		t.x = -105;
		t.y = -105;
		return t;
	};
	return MainRotation2Skin;
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
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "返 回";
		t.textColor = 0x6c3e14;
		t.verticalCenter = 0;
		return t;
	};
	return CKBtnBack;
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
		t.bold = true;
		t.size = 30;
		t.text = "Label";
		t.textColor = 0x6c3e14;
		t.x = 160;
		t.y = 40;
		return t;
	};
	return CKBtnMulu;
})(eui.Skin);generateEUI.paths['resource/eui_skins/main/list/BonusItemSkin.exml'] = window.BonusItemSkin = (function (_super) {
	__extends(BonusItemSkin, _super);
	function BonusItemSkin() {
		_super.call(this);
		this.skinParts = ["itemImg","itemNum"];
		
		this.height = 106;
		this.width = 106;
		this.elementsContent = [this.itemImg_i(),this.itemNum_i()];
	}
	var _proto = BonusItemSkin.prototype;

	_proto.itemImg_i = function () {
		var t = new eui.Image();
		this.itemImg = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.y = 43;
		return t;
	};
	_proto.itemNum_i = function () {
		var t = new eui.Label();
		this.itemNum = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "";
		t.textColor = 0x6c3e14;
		t.y = 76;
		return t;
	};
	return BonusItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/rank/component/ComparePropItemSkin.exml'] = window.ComparePropItemSkin = (function (_super) {
	__extends(ComparePropItemSkin, _super);
	function ComparePropItemSkin() {
		_super.call(this);
		this.skinParts = ["title","value"];
		
		this.elementsContent = [this._Image1_i(),this.title_i(),this.value_i()];
	}
	var _proto = ComparePropItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "fx_kuang_png";
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.bold = true;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0xb97326;
		t.text = "Label";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.verticalCenter = 0;
		t.x = 30;
		return t;
	};
	_proto.value_i = function () {
		var t = new eui.Label();
		this.value = t;
		t.bold = true;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0xb97326;
		t.text = "jepwp";
		t.textColor = 0xffffff;
		t.verticalCenter = 0;
		t.x = 140;
		return t;
	};
	return ComparePropItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/rank/list/RankItemRenderSkin.exml'] = window.RankItemRenderSkin = (function (_super) {
	__extends(RankItemRenderSkin, _super);
	function RankItemRenderSkin() {
		_super.call(this);
		this.skinParts = ["bgImg","nameTF","lvTF","dwTF","starTF","star6Img","star6Img2","jbImg","headImg","dwImg","mzImg","rankTF","dwMc"];
		
		this.height = 112;
		this.width = 590;
		this.elementsContent = [this.bgImg_i(),this.nameTF_i(),this.lvTF_i(),this.dwTF_i(),this.starTF_i(),this.star6Img_i(),this.star6Img2_i(),this.jbImg_i(),this.headImg_i(),this._Image1_i(),this.dwImg_i(),this.mzImg_i(),this.rankTF_i(),this.dwMc_i()];
	}
	var _proto = RankItemRenderSkin.prototype;

	_proto.bgImg_i = function () {
		var t = new eui.Image();
		this.bgImg = t;
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.nameTF_i = function () {
		var t = new eui.Label();
		this.nameTF = t;
		t.bold = true;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xB97326;
		t.text = "玩家昵称六字";
		t.textColor = 0xFFFFFF;
		t.x = 191;
		t.y = 14;
		return t;
	};
	_proto.lvTF_i = function () {
		var t = new eui.Label();
		this.lvTF = t;
		t.bold = true;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xB97326;
		t.text = "Lv.99";
		t.textColor = 0xFFFFFF;
		t.x = 407;
		t.y = 14;
		return t;
	};
	_proto.dwTF_i = function () {
		var t = new eui.Label();
		this.dwTF = t;
		t.bold = true;
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
		t.bold = true;
		t.size = 24;
		t.text = "Label";
		t.textColor = 0x6C3E14;
		t.x = 441;
		t.y = 62;
		return t;
	};
	_proto.star6Img_i = function () {
		var t = new eui.Image();
		this.star6Img = t;
		t.source = "sy_duanwei_dankong_png";
		t.x = 403.3;
		t.y = 60.23;
		return t;
	};
	_proto.star6Img2_i = function () {
		var t = new eui.Image();
		this.star6Img2 = t;
		t.source = "sy_duanwei_zidan_png";
		t.x = 408.3;
		t.y = 60.23;
		return t;
	};
	_proto.jbImg_i = function () {
		var t = new eui.Image();
		this.jbImg = t;
		t.source = "";
		t.x = 1;
		return t;
	};
	_proto.headImg_i = function () {
		var t = new eui.Image();
		this.headImg = t;
		t.height = 84;
		t.source = "";
		t.width = 84;
		t.x = 83;
		t.y = 14;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "sy_touxiang_png";
		t.x = 78;
		t.y = 9;
		return t;
	};
	_proto.dwImg_i = function () {
		var t = new eui.Image();
		this.dwImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 43;
		t.source = "sy_duanwei_00_png";
		t.visible = false;
		t.width = 60.2;
		t.x = 185;
		t.y = 54;
		return t;
	};
	_proto.mzImg_i = function () {
		var t = new eui.Image();
		this.mzImg = t;
		t.source = "";
		t.x = 500;
		t.y = 4;
		return t;
	};
	_proto.rankTF_i = function () {
		var t = new eui.Label();
		this.rankTF = t;
		t.bold = true;
		t.text = "1";
		t.textColor = 0x6c3e14;
		t.x = 4;
		t.y = 7;
		return t;
	};
	_proto.dwMc_i = function () {
		var t = new eui.Component();
		this.dwMc = t;
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.skinName = "DuanWeiComponentSkin";
		t.x = 179;
		t.y = 50;
		return t;
	};
	return RankItemRenderSkin;
})(eui.Skin);