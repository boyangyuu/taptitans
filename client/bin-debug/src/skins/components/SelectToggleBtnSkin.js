var skins;
(function (skins) {
    var components;
    (function (components) {
        var SelectToggleBtnSkin = (function (_super) {
            __extends(SelectToggleBtnSkin, _super);
            function SelectToggleBtnSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [47, 113]);
                this.elementsContent = [];
                this.disabledAndSelectSkin_i();
                this.downAndSelectedSkin_i();
                this.upAndSelectedSkin_i();
                this.disabledSkin_i();
                this.downSkin_i();
                this.upSkin_i();
                this.states = [
                    new egret.gui.State("up", [
                        new egret.gui.AddItems("upSkin", "", "last", "")
                    ]),
                    new egret.gui.State("down", [
                        new egret.gui.AddItems("downSkin", "", "last", "")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.AddItems("disabledSkin", "", "last", "")
                    ]),
                    new egret.gui.State("upAndSelected", [
                        new egret.gui.AddItems("upAndSelectedSkin", "", "last", "")
                    ]),
                    new egret.gui.State("downAndSelected", [
                        new egret.gui.AddItems("downAndSelectedSkin", "", "last", "")
                    ]),
                    new egret.gui.State("disabledAndSelected", [
                        new egret.gui.AddItems("disabledAndSelectSkin", "", "last", "")
                    ])
                ];
            }
            var __egretProto__ = SelectToggleBtnSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return SelectToggleBtnSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.disabledSkin_i = function () {
                var t = new egret.gui.UIAsset();
                this.disabledSkin = t;
                this.__s(t, ["bottom", "horizontalCenter", "source"], [0, 0, "btn_master"]);
                return t;
            };
            __egretProto__.downAndSelectedSkin_i = function () {
                var t = new egret.gui.UIAsset();
                this.downAndSelectedSkin = t;
                this.__s(t, ["bottom", "horizontalCenter", "source"], [0, 0, "btn_master_highlight"]);
                return t;
            };
            __egretProto__.downSkin_i = function () {
                var t = new egret.gui.UIAsset();
                this.downSkin = t;
                this.__s(t, ["bottom", "horizontalCenter", "source"], [0, 0, "btn_master_highlight"]);
                return t;
            };
            __egretProto__.disabledAndSelectSkin_i = function () {
                var t = new egret.gui.UIAsset();
                this.disabledAndSelectSkin = t;
                this.__s(t, ["bottom", "horizontalCenter", "source"], [0, 0, "btn_master_highlight"]);
                return t;
            };
            __egretProto__.upAndSelectedSkin_i = function () {
                var t = new egret.gui.UIAsset();
                this.upAndSelectedSkin = t;
                this.__s(t, ["bottom", "horizontalCenter", "source"], [0, 0, "btn_master_highlight"]);
                return t;
            };
            __egretProto__.upSkin_i = function () {
                var t = new egret.gui.UIAsset();
                this.upSkin = t;
                this.__s(t, ["bottom", "horizontalCenter", "source"], [0, 0, "btn_master"]);
                return t;
            };
            SelectToggleBtnSkin._skinParts = ["disabledAndSelectSkin", "downAndSelectedSkin", "upAndSelectedSkin", "disabledSkin", "downSkin", "upSkin"];
            return SelectToggleBtnSkin;
        })(egret.gui.Skin);
        components.SelectToggleBtnSkin = SelectToggleBtnSkin;
        SelectToggleBtnSkin.prototype.__class__ = "skins.components.SelectToggleBtnSkin";
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
