var maintainCommon = {}

maintainCommon.breakCodeProcess = function (code, codeMsg) {
    debugger
    if (code == 20) {
        if (confirm('现在去登录>>>')) {
            $(`<a href="/ylt/maintain/login.html"  >123</a>`)[0].click()
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


var common = {}



common.subOmitRight = function (value, length) {
    if (!value)
        return ''
    var s = ''
    if (value.length > length)
        s = '...'
    return value.substring(0, length) + s
}



common.prettyFileSize = function (size) {
    if (!size)
        return "";

    var num = 1024.00; //byte

    if (size < num)
        return size + "B";
    if (size < Math.pow(num, 2))
        return (size / num).toFixed(2) + "KB"; //kB
    if (size < Math.pow(num, 3))
        return (size / Math.pow(num, 2)).toFixed(2) + "MB"; //M
    if (size < Math.pow(num, 4))
        return (size / Math.pow(num, 3)).toFixed(2) + "GB"; //G
    return (size / Math.pow(num, 4)).toFixed(2) + "TB"; //T
}


common.queryStringObject = function(queryString) {
    if (!queryString)
        queryString = window.location.search.substr(1);
    if (queryString.startsWith('?'))
        queryString=queryString.substr(1)
    const queryList = queryString.split('&')
    let result = {}
    queryString && queryList.map((item) => {
        let keyValue = item.split('=')
        result[keyValue[0]] = decodeURIComponent(keyValue[1])
    })
    return result
}




common.uploadImage = function (inputDom, ook) {
    var r = prompt('已选的图片大小' + common.prettyFileSize(inputDom.files[0].size) + '，如需压缩，请输入质量0-10，取消则直接上传。', '8')
    var compressIs = false
    if (r != null) {
        r = parseInt(r);
        if (isNaN(r) || r < 0 || r > 10) {
            alert('输入有误')
            return;
        }
        compressIs = true
    }
    var file = inputDom.files[0];
    var fd = new FormData()
    fd.append('file', file);
    $.ajax({
        url: '/upload-static-file?' + $.param({ quality: r/10 }),
        type: 'POST',
        data: fd,
        cache: false,
        processData: false,
        contentType: false,
        async: true,
        success: function (res) {
            if (res.codeMsg)
                alert(res.codeMsg)
            if (res.code == 0) {
                if (compressIs)
                    alert('压缩后文件大小' + common.prettyFileSize(res.data.size))
                ook(res.data.url)
            } else {
                
            }
        }
    })
}


common.uploadFile = function (inputDom, ook) {
    if (!confirm('已选的文件大小' + common.prettyFileSize(inputDom.files[0].size)))
        return
    var file = inputDom.files[0];
    var fd = new FormData()
    fd.append('file', file);
    $.ajax({
        url: '/fileupload',
        type: 'POST',
        data: fd,
        cache: false,
        processData: false,
        contentType: false,
        async: true,
        success: function (res) {
            if (res.codeMsg)
                alert(res.codeMsg)
            if (res.code == 0) {
                ook(res.data.url)
            } else {
                
            }
        }
    })
}



