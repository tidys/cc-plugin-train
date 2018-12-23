Editor.Panel.extend({
    style: ``,

    template: `
<div class="layout vertical">
       <ui-button @confirm="onBtnClick">send to page1</ui-button>
       <span> {{msg}}</span>
       <ui-button @confirm="onSendToMain">send to main</ui-button>
</div>
    `,

    $: {},

    ready() {
        Editor.log("open page3");
        console.log("page3");
        this.plugin = new window.Vue({
            el: this.shadowRoot,

            data: {msg: "page3"},
            methods: {
                onBtnClick() {
                    Editor.Ipc.sendToPanel("hello-world.page1", "onPage1", "msg from page3", function (event, data) {
                        console.log(data);
                        this.msg = data;
                        setTimeout(function () {
                            this.msg = "";
                        }.bind(this), 500);
                    });
                },
                onSendToMain() {
                    Editor.Ipc.sendToMain("hello-world:onPage3", "from page3", function (event, data) {
                        this.msg = data;
                        setTimeout(function () {
                            this.msg = "";
                        }.bind(this), 500);
                    });

                },

            }
        });
    },
    messages: {
        'onPage3'(event, data) {
            this.plugin.msg = data;
            setTimeout(function () {
                this.plugin.msg = "";
            }.bind(this), 500);
        },

    }
});
