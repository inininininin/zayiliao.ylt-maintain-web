var maintainCommon = {}

maintainCommon.breakCodeProcess = function (code, codeMsg) {
    debugger
    if (code == 20) {
        if (confirm('现在去登录>>>')) {
            $(`<a href="/maintain/login.html"  >123</a>`)[0].click()
        }
    }

}


maintainCommon.newTab = function (title, url) {
    tabPad = $('#tabPad').length==0?parent.$('#tabPad'):$('#tabPad')

    tabPad.tabs('add', {
        url:url,
        selected:true,
        title: title,
        closable: true,
        width: '100%',
        content: `<iframe src="${url}" style="width:100%;height:100%;border:none;"/>`,
        tools: [{
            iconCls: 'icon-mini-refresh',
            handler: function () {
                var current_tab = tabPad.tabs('getSelected');
                tabPad.tabs('update', {
                    tab: current_tab,
                    options: {
                        content: current_tab.panel('options', 'content'),
                    }
                });
            }
        }
        ]
    });
}




