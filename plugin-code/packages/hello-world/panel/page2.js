Editor.Panel.extend({
    style: ``,

    template: `
   <div class="layout vertical">
       <ui-button @confirm="onBtnClick">send to page3</ui-button>
       <span> {{msg}}</span>
   </div>
    `,

    $: {},

    ready() {
        Editor.log("open page2");
        console.log("page2");
        this.plugin = new window.Vue({
            el: this.shadowRoot,

            data: {msg: "page2"},
            methods: {
                onBtnClick() {
                    Editor.Ipc.sendToPanel("hello-world.page3", "onPage3", "msg from page2");
                },

            }
        });
    },
    messages: {
        'onPage2'(event, data) {
            this.plugin.msg = data;
            setTimeout(function () {
                this.plugin.msg = "";
            }.bind(this), 500);
        },

    }
});
