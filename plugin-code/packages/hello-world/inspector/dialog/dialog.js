let packageName = "hello-world";
let fs = require("fire-fs");
let path = require('fire-path');

let ActionEnum = cc.Enum({
    None: "None",
    Scale: "Scale",
    Blink: "Blink",
    Shake: "Shake",
    FadeIn: "FadeIn",
    FadeOut: "FadeOut",
    Move: "Move",
});

Vue.component('dialog-inspector', {
    template: fs.readFileSync(Editor.url('packages://' + packageName + '/inspector/dialog/dialog.html'), 'utf8'),

    props: {
        target: {
            twoWay: true,
            type: Object,
        }
    },
    created() {
        this.curAction = this.target.actionType.value;
    },
    data() {
        return {
            curAction: ActionEnum.None,
            actEnum: ActionEnum,
            actions: [
                {name: "无", option: ActionEnum.None},
                {name: "淡入", option: ActionEnum.FadeIn},
                {name: "淡出", option: ActionEnum.FadeOut},
                {name: "震动", option: ActionEnum.Shake},
                {name: "闪烁", option: ActionEnum.Blink},
                {name: "缩放", option: ActionEnum.Scale},
                {name: "位移", option: ActionEnum.Move},
            ],

            actionTime: 1,
            delayTime: 0,


            shakeStrength: 1,// 震动强度
            blinkCount: 1,// 闪烁次数
            scaleSize: 1,// 缩放比例

            moveBeganPos: cc.v2(0, 0),
            moveEndPos: cc.v2(0, 0),
        }

    },
    methods: {
        onBtnClickPreview() {
            let time = new Date().getTime();
            Editor.Ipc.sendToPanel('scene', 'scene:set-property', {
                id: this.target.uuid.value,
                path: "preview",
                type: "Float",
                value: time,
            });
        },
        onChangeAction() {
            Editor.Ipc.sendToPanel('scene', 'scene:set-property', {
                id: this.target.uuid.value,
                path: "actionType",
                type: "String",
                value: this.curAction,
            });
        },
        onSetActionShakeStrength() {
            Editor.Ipc.sendToPanel('scene', 'scene:set-property', {
                id: this.target.uuid.value,
                path: "shakeStrength",
                type: "Float",
                value: parseFloat(this.target.shakeStrength.value.toString()),
            });
        },
        onBtnClickTest() {
            this.target.foo.value += "1";
            Editor.log('foo:' + this.target.foo.value);
        },
        onBtnClickCheck() {
            Editor.log('check');
        },
    }
});
