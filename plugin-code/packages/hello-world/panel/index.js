// panel/index.js, this filename needs to match the one registered in package.json
const Fs = require("fire-fs");
const Path = require("fire-path");

Editor.Panel.extend({
    // css style for panel
    style: Fs.readFileSync(
        Editor.url("packages://hello-world/panel/index.css"),
        "utf-8"
    ),

    // html template for panel
    template: Fs.readFileSync(
        Editor.url("packages://hello-world/panel/index.html"),
        "utf-8"
    ),

    // element and variable binding
    $: {},

    // method executed when template and styles are successfully loaded and initialized
    ready() {
        this.plugin = new window.Vue({
            el: this.shadowRoot,
            created() {
            },
            data: {msg: ""},
            methods: {
                onBtnClick() {
                    const FS_Extra = Editor.require("packages://hello-world/node_modules/fs-extra");
                    let dir = Path.join(Editor.projectInfo.path, "tmpDir");
                    FS_Extra.mkdirSync(dir);

                    // Editor.Ipc.sendToMain('hello-world:clicked');
                },
                layout() {
                    if (Editor.isMainProcess) {
                        Editor.Window.main.resetLayout("packages://hello-world/layout.json");

                    } else {
                        Editor.remote.Window.main.resetLayout("packages://hello-world/layout.json");
                    }
                },
            }
        });


    },

    // register your ipc messages here
    messages: {
        'hello-world:hello'(event) {
            this.plugin.msg = 'Hello!';
        },

    }
});
