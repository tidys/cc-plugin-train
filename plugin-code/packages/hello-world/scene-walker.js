module.exports = {
    // 更多的是跟场景编辑器当前的状态进行交互
    'get-canvas-children': function (event) {
        debugger

        if (Editor.isMainProcess) {

        } else {

        }

        let canvas = cc.find('Canvas');
        Editor.log('children length : ' + canvas.children.length);

        if (event.reply) {
            event.reply(null, canvas.children.length);
        }
    }
};
