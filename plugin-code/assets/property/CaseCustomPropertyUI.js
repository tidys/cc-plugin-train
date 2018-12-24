cc.Class({
    // name:"MyTestUI",
    extends: cc.Component,
    editor: CC_EDITOR && {
        inspector: "packages://hello-world/inspector/test/test.js",
    },
    properties: {
        foo: {
            default: "foo",
            type: cc.String,
            notify() {
                debugger
                console.log("change");
                this._nodeTest();
                if (this._sgNode) {
                    console.log("sgNode");
                }
            },
        },
        bar: 'Bar',
    },
    _nodeTest() {
        let label = cc.find("Canvas/label");
        if (label) {
            let com = label.getComponent(cc.Label);
            if (com) {
                com.string = "hello - " + this.foo;
            }
        }
    }
});
