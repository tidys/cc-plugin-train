Editor.Panel.extend({
    style: ``,

    template: `
<div class="layout vertical">
       <ui-button @confirm="onBtnClick">send to page2</ui-button>
       <span> {{msg}}</span>
</div>
      
    `,

    $: {},

    ready() {
        Editor.log("open page1");
        console.log("page1");
        this.plugin = new window.Vue({
            el: this.shadowRoot,

            data: {msg: "page1"},
            methods: {
                onBtnClick() {
                    Editor.Ipc.sendToPanel("hello-world.page2", "onPage2", "msg from page1");
                },

            }
        });
    },
    messages: {
        'onPage1'(event, data) {
            this.plugin.msg = data;
            setTimeout(function () {
                this.plugin.msg = "";
            }.bind(this), 500);

            if (event.reply) {
                event.reply(null, "我来自渲染进程page1");
            }
        },

    }
});
