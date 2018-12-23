'use strict';

module.exports = {
    load() {
        // execute when package loaded
    },

    unload() {
        // execute when package unloaded
    },

    // register your ipc messages here
    messages: {
        'open'() {
            // open entry panel registered in package.json
            Editor.Panel.open('hello-world');
        },
        'say-hello'() {
            Editor.log('Hello World!');
            // send ipc message to panel
            Editor.Ipc.sendToPanel('hello-world', 'hello-world:hello');
        },
        'clicked'() {
            Editor.log('Button clicked!');
        },
        'open-all-panel'(event) {
            Editor.Panel.open("hello-world.page1");
            Editor.Panel.open("hello-world.page2");
            Editor.Panel.open("hello-world.page3");
        },
        'onPage3'(event, data) {
            Editor.log("onPage3: " + data);
            if(event.reply){
                event.reply(null,"我来自主进程onPage3");
            }
            // Editor.Ipc.sendToPanel("hello-world.page3","");

        }
    },
};
