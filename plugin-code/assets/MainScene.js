cc.Class({
    extends: cc.Component,

    properties: {
        infoLabel: {default: null, displayName: "info", type: cc.Label},

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        debugger
        let PluginModule = require("PluginModule");
        this.infoLabel.string = PluginModule.Msg;
    },

    start() {

    },

    // update (dt) {},
});
