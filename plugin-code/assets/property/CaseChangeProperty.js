let SelectMenuEn = cc.Enum({
    None: 0,
    MenuA: 1,
    MenuB: 2,
    MenuC: 3,
    MenuD: 4,
});

let SelectMenuCn = cc.Enum({
    无: 0,
    选项A: 1,
    选项B: 2,
    选项C: 3,
    选项D: 4,
});

cc.Class({
    extends: cc.Component,

    properties: {

        selectMenuTypeEn: {
            default: SelectMenuEn.None, displayName: "选项-en", type: SelectMenuEn, notify() {
                // this.selectMenuTypeCn = this.selectMenuTypeEn;
                // 死循环
                this._updateName1();
            }
        },
        selectMenuTypeCn: {
            default: SelectMenuCn.无, displayName: "选项-cn", type: SelectMenuCn, notify() {
                this._updateName2();
            }
        },

        nameLabel: {default: null, displayName: "名字", type: cc.Label, visible: false},

    },
    _updateName1() {
        if (this.selectMenuTypeEn === SelectMenuEn.None) {
            this.nameLabel.string = "";
        } else if (this.selectMenuTypeEn === SelectMenuEn.MenuA) {
            this.nameLabel.string = "我是A";
        } else if (this.selectMenuTypeEn === SelectMenuEn.MenuB) {
            this.nameLabel.string = "我是B";
        } else if (this.selectMenuTypeEn === SelectMenuEn.MenuC) {
            this.nameLabel.string = "我是C";
        } else if (this.selectMenuTypeEn === SelectMenuEn.MenuD) {
            this.nameLabel.string = "我是D";
        }
    },
    _updateName2() {
        if (this.selectMenuTypeCn === SelectMenuCn.无) {
            this.nameLabel.string = "";
        } else if (this.selectMenuTypeCn === SelectMenuCn.选项A) {
            this.nameLabel.string = "我是A";
        } else if (this.selectMenuTypeCn === SelectMenuCn.选项B) {
            this.nameLabel.string = "我是B";
        } else if (this.selectMenuTypeCn === SelectMenuCn.选项C) {
            this.nameLabel.string = "我是C";
        } else if (this.selectMenuTypeCn === SelectMenuCn.选项D) {
            this.nameLabel.string = "我是D";
        }
    },
});



