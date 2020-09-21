/**
 * Created by xinxin on 2018/12/11.
 */


var giveup = {
}

giveup.trimToEmpty = function(value){
    if(value == null || value == undefined)
        return '';
    else
        return value;
}

giveup.isNumber = function(value){
    if(value == NaN)
        return false;
    else
        return true;
}

giveup.randomString=function (min, max){
    var str = "",
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    if(!max)
        max=min

    range = Math.round(Math.random() * (max-min)) + min;

    for(var i=0; i<range; i++){
        pos = Math.round(Math.random() * (arr.length-1));
        str += arr[pos];
    }
    return str;
}


giveup.toSplit=function(arr,separator,clearEmpty){
    if (arr == null || arr.length == 0)
        return "";
    if(separator == null || separator == undefined)
        separator=','
    var s=''
    for (var i = 0; i < arr.length; i++) {
        if(clearEmpty)
        {
            if(arr[i]==null||arr[i]==undefined||arr[i].toString() == '')
                contunue;
        }
        else
            s = s+separator+arr[i];
    }
    if (s.length > 0)
        s = s.substring(1);
    return s;
}

giveup.toArray=function(split,separator,clearEmpty){
    var arr = [];
    if (split == null || split.length == 0)
        return arr;
    if(separator == null || separator == undefined)
        separator=','
    var arrSrc = split.split(separator);
    if(clearEmpty){
        for (var i = 0; i < arrSrc.length; i++) {
                if(arrSrc[i]==null||arrSrc[i]==undefined||arrSrc[i].toString() == '')
                    contunue;
                else
                    arr.push(arrSrc[i]);
        }
    }
    else
        arr = arrSrc;
    return arr;
}

giveup.formatToDateTime=function(timestamp){
    if(!timestamp||timestamp.length==0)
        return '';
    var date = new Date(timestamp);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;
}

giveup.formatToDate=function(timestamp){
    if(!timestamp||timestamp.length==0)
        return '';
    var date = new Date(timestamp);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d;
};


giveup.toTimestamp=function(formatStr){
    if(!formatStr||formatStr.length==0)
        return '';
    return new Date(formatStr).getTime();
};

giveup.getAttr=function(obj,attrName){
    if(obj == null||obj==undefined)
        return null;
    var aas = attrName.split('.');
    var value=obj;
    for(var aa in aas){
        value= value[aas[aa]];
        if(value == null||value==undefined)
            return value;
    }
    return value;
}

giveup.getAttrInPerObj=function(arr,attrName){
    var attrs = []
    if(!arr)
        return attrs;
    for(var i = 0;i<arr.length;i++){
        attrs.push(otherUtils.getAttr(arr[i],attrName))
    }
    return attrs;
}

giveup.parseQueryStr =function (queryStr){
    var str=decodeURIComponent(queryStr);
    var arr=str.split("&");
    var obj = {};
    for(var i=0;i < arr.length;i++){
        var arrsub=arr[i].split("=");
        obj[arrsub[0]]=arrsub[1];
    }
    return obj;
}

giveup.convertBase64UrlToBlob=function(urlData){
    var arr = urlData.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type:mime});
}

giveup.isNaV=function(any){
   if(any ==null || any==undefined)
        return false;
    else
        return true;
}

giveup.toShow=function(any){
    if(otherUtils.isNaV(any)){
        any=any+''
        return any.trim();
    }
    else
        return '';
}

giveup.toShowOmit = function(any,startIndex,count){
    any = otherUtils.toShow(any)
    var aa =  any.slice(startIndex,count)
    if(aa.length < any.length)
        aa=aa+'...'
    return aa;
}



giveup.strongKeyword=function(){
    if(arguments.length==0)
        return '';
    var srcText=arguments[0];
    if(srcText==null || srcText==undefined)
        return srcText
    srcText = srcText+''
    if(arguments.length==1)
        return srcText;
    for(var a in arguments){
        if(a>0){
            var keyword = arguments[a];
            if(!keyword)
                continue;
            var index = srcText.indexOf(keyword);
            if(index<0)
                continue;
            var aaa = srcText.substr(index,keyword.length);
            var bbb = '<span style="color:red">'+aaa+'</span>'
            srcText = srcText.replace(aaa,bbb)
        }
    }
    return srcText;
}


giveup.swapLocation =function (dom1,dom2){
    var dom1Prev = dom1.previousElementSibling;
    var dom2Prev = dom2.previousElementSibling;

    if(!dom1Prev || dom1Prev==dom2){
        var dom1Prev = document.createElement('span');
        dom1Prev.style['display']='none'
        dom1.parentNode.insertBefore(dom1Prev,dom1);
    }
    if(!dom2Prev || dom2Prev==dom1){
        var dom2Prev = document.createElement('span');
        dom2Prev.style['display']='none'
        dom2.parentNode.insertBefore(dom2Prev,dom2);
    }
    dom1.parentNode.insertBefore(dom2,dom1Prev)
    dom2.parentNode.insertBefore(dom1,dom2Prev)

    dom1.parentNode.removeChild(dom1Prev)
    dom2.parentNode.removeChild(dom2Prev)
}

giveup.upSelectedOptions =function (select){
    var childNodes = select.childNodes;
    var times = 0;
    for(var i=0;i<childNodes.length && times<childNodes.length ;times++,i++){
        if(!childNodes[i].selected){
            select.appendChild(childNodes[i])
            i--;
        }
    }
}




giveup.layer=function (params){
    var layer = document.createElement('div');
    if(params.id==undefined||params.id==null)
        layer.id='giveup-layer'+ giveup.randomString(4)
    else
        layer.id=params.id;
    layer.classList.add('giveup-layer')
    layer.style.position='fixed';
    layer.style.display='none';
    layer.style.top='0';
    layer.style.left='0';
    layer.style.bottom='0';
    layer.style.right='0';
    layer.style.overflow='auto';
    layer.style['z-index']=9999999;
    layer.style['background-color']='rgba(0, 0, 0, 0.3)';
    document.body.appendChild(layer);
    if(params.init)
        params.init(layer);

    layer.style.display='block';

    if(params.clickClose){
        $(layer).click(function(){
            $(this).remove();
        })
    }
}

giveup.imgPreview = function (src) {
    if (src)
        giveup.layer({
            init: function (layer) {
                $(layer).append('<img style="margin:50px auto;display:block;position:relative;max-width:95%" src="' + src + '">')
            }, clickClose: true
        })
}

giveup.toShow=function(value){
    if(value==null||value==undefined||value==NaN){
        return ''
    }
    return value
}

giveup.attr=function(obj, search) {
    const arr = search.split(".");
    if(obj === undefined || obj === null ) {
        return obj;
    }
    for(let i = 0; i < arr.length; i++) {
        obj = obj[arr[i]];
        if(obj === undefined || obj === null ) {
            return obj;
        }
    }
    return(obj);
}


giveup.getEvent = function(){
    return window.event || arguments.callee.caller.arguments[0]
}

giveup.getEventTarget = function(e){
    return e.srcElement||e.target;
}






//{complete:function({canvas:,imgType:'image/png'}){},xRadio:1,yRadio:1}
giveup.cutImg = function (params){
    giveup.chooseFile({chooseEnd:function(input){
            var file=input.files[0];
            if(!file.type || file.type.indexOf('image') != 0){
                throw '选择的文件不是图片格式';
            }else {
                var img = new Image();
                url = window.URL.createObjectURL(file) // 得到bolb对象路径，可当成普通的文件路径一样使用，赋值给src;

                giveup.layer({
                    init:function(layer){
                        layer.style.padding='30px 0';
                        layer.innerHTML="<div style='margin:auto;width:100%;text-align: center;margin-bottom:30px'><button style='width:100px' name='cancel'>取消</button><span style='width:30px;display: inline-block'></span><button style='width:100px' name='confirm'>确定</button></div><div style='text-align: center'><span name='note' style='font-size:14px;color:white'></span></div><img name='targetImg' style='margin:30px auto;display:block;' src='"+url+"'>";

                        var xRadio = params.xRadio;
                        var yRadio = params.yRadio;
                        debugger
                        var aspectRatio = null;
                        var note;
                        if(xRadio && yRadio){
                            aspectRatio =  xRadio / yRadio
                            note = `图片长宽比例${xRadio}:${yRadio}`
                        }
                        var options = {};
                        if(aspectRatio)
                            options.aspectRatio=aspectRatio
                        options.background=false
                        options.viewMode=1

                        $(layer).find('[name=targetImg]').cropper(options);

                        $(layer).find('[name=cancel]').click(function(){
                            $(layer).remove();
                        })
                        $(layer).find('[name=note]').html(note)


                        $(layer).find('[name=confirm]').click(function(){
                            var cas=$(layer).find('[name=targetImg]').cropper('getCroppedCanvas');
                            if(params.complete)
                                params.complete({input:input,canvas:cas})
                            $(layer).remove();
                        })
                    }
                })
            }
        }});
}

//{img:, width:, height:, ratio:}
//ratio:0 - 1
giveup.compressImg = function (params) {
    var canvas, ctx, img64;

    canvas = document.createElement('canvas');
    var width = params.width || params.img.width;
    var height = params.height || params.img.height;
    var ratio = params.ratio||1;

    canvas.width = width;
    canvas.height = height;

    ctx = canvas.getContext("2d");
    ctx.drawImage(params.img, 0, 0, width, height);

    img64 = canvas.toDataURL("image/jpeg", ratio);

    return img64;
}

giveup.formatTime=function (timestamp) {
    var date = new Date(timestamp);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;
};

giveup.formatDate=function (timestamp) {
    var date = new Date(timestamp);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d;
};
giveup.convertBase64UrlToBlob=function(urlData){
    var arr = urlData.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type:mime});
}

giveup.chooseFile = function (params){
    var inputId = 'giveup-'+giveup.randomString(false,12);
    var input=document.createElement("input");
    input.type='file';
    input.id=inputId;
    input.name='file';
    input.style.display='none';
    giveup.addEvent(input,'change',function(){
        var file=this.files[0] // 获取input上传的图片数据;
        if(params.chooseEnd)
            params.chooseEnd(this)
        document.body.removeChild(input)
    })
    document.body.appendChild(input);
    input.click();
}

giveup.windowTouch = function(params){
    if(params== undefined||params==null)
        params={};
    window.addEventListener('touchstart', function(event) {

        var touch = event.targetTouches[0];
        var touchData ={};
        window.touchData=touchData

        touchData.touchYStart = touch.pageY;
        touchData.touchXStart = touch.pageX;
        touchData.touchYDis=0;
        touchData.touchXDis=0;
        if(giveup.debug){
            if(document.getElementById('giveup-windowTouch-debug-touchDataShow'))
                document.body.removeChild( document.getElementById('giveup-windowTouch-debug-touchDataShow'))

            var div = document.createElement('div');
            div.id='giveup-windowTouch-debug-touchDataShow'
            div.innerText= touchData.touchXStart+' '+ touchData.touchYStart +' '+touchData.touchXDis+' '+ touchData.touchYDis
            div.style.position='fixed';
            div.style.top='0';
            div.style.left='0';
            div.style['z-index']=9999999
            document.body.appendChild(div);
        }


        var img=document.createElement("img");

        img.style.display='none';
        img.style.width='12%';
        img.style.position='absolute';
        img.style.top='10%';
        img.style.left='50%';
        img.style.transform='translateX(-50%)';
        img.style['z-index']=9999999
        img.src=giveup.relativePath+'rxw/img/wait.gif';

        window.touchData.waitImg=img;
        document.body.appendChild(img);
    }, false);
    window.addEventListener('touchmove', function(event) {
        var touch = event.targetTouches[0];

        window.touchData.touchYDis=touch.pageY-window.touchData.touchYStart;
        window.touchData.touchXDis=touch.pageX-window.touchData.touchXStart;
        if(giveup.debug) {
            var touchDataShow = document.getElementById('giveup-windowTouch-debug-touchDataShow');
            touchDataShow.innerText = touch.pageX + ' ' + touch.pageY +' '+touchData.touchXDis+' '+ touchData.touchYDis
        }
        if(window.touchData.touchYDis>10){
            window.touchData.waitImg.style.display='';
        }else if(window.touchData.touchYDis<10){

        }

    }, false);
    window.addEventListener('touchend', function(event) {
        if(giveup.debug) {
            var touchDataShow = document.getElementById('giveup-windowTouch-debug-touchDataShow');
            touchDataShow.innerText = window.touchData.touchXDis + ' ' + window.touchData.touchYDis
        }
        if((window.touchData.touchYDis>70)){
            if( params.movedown){
                params.movedown();
            }else{
                location.reload();
            }

        }
        if((window.touchData.touchYDis<-20)) {
            if (params.moveup) {
                params.moveup();
            }
        }
        if(window.touchData.touchXDis>100 && window.touchData.touchXDis<150){
            if(params.moveright)
                params.moveright();
            else{
                history.back()
            }
        }
        if(window.touchData.touchXDis>150){
            history.back()
        }
        if(window.touchData.touchXDis<-100  && window.touchData.touchXDis>-150){
            if( params.moveleft)
                params.moveleft();
        }
        if(window.touchData.touchXDis<-150){
            history.go()
        }
        document.body.removeChild(window.touchData.waitImg)
        delete window.touchData;

    }, false);
}




giveup.addEvent=function addEvent(el, type, fn,useCapture) {
    if(el.addEventListener){
        el.addEventListener(type,fn,!!useCapture)
    }else if(el.attachEvent()){
        el.attachEvent('on' + type,fn)
    }else{
        return false
    }
}
giveup.cancelHandler=function (event){
    var event=event||window.event;


    if(event.preventDefault)
        event.preventDefault();
    if(event.returnValue)
        event.returnValue=false;
    return false;
}

giveup.isEmptyStr =function (str){
    if(str == undefined || str == null || this.trimStrToEmpty(str).length==0)
        return true;
    return false;
}

giveup.trimStrToEmpty = function(str){
    if(str == undefined || str == null || str.length==0)
        return '';
    return str.toString().replace(/^\s+|\s+$/gm,'');
}




giveup.windowScrollPaging = function (params){
    function getScrollTop() {
        var scrollTop = 0;
        if(document.documentElement && document.documentElement.scrollTop) {
            scrollTop = document.documentElement.scrollTop;
        } else if(document.body) {
            scrollTop = document.body.scrollTop;
        }
        return scrollTop;
    }

    //获取当前可视范围的高度
    function getClientHeight() {
        var clientHeight = 0;
        if(document.body.clientHeight && document.documentElement.clientHeight) {
            clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
        } else {
            clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
        }
        return clientHeight;
    }

    //获取文档完整的高度
    function getScrollHeight() {
        return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }

    //滚动事件触发
    window.onscroll = function() {
        if(getScrollTop() + getClientHeight() >= getScrollHeight()) {
            if(params.down)
                params.down();
        }else if(getScrollTop() == 0){
            //向上到顶
        }
    }
}

giveup.scrollEvent= function (ele,down,top){
    ele.onscroll = function() {
        if (this.scrollTop + this.offsetHeight >= this.scrollHeight) {
            if(down)
                down();
        }else if(this.scrollTop == 0){
            if(top)
                top()
        }

    }
}


giveup.hierarchySelect= function (padId,callback,param){
    this.layer({init:function(layer){
            layer.style['background-color']='rgba(0, 0, 0, 0)';
            var pad=document.createElement("div");
            pad.id=padId;
            pad.style['position']='absolute';
            pad.style['top']='30%';
            pad.style['left']='50%';
            pad.style['transform']='translateX(-50%)';
            pad.style['background-color']='white';
            pad.style['border-radius']='10px';
            pad.style['min-width']='300px';
            pad.style['border']='1px solid lightgrey';

            var selectsDiv=document.createElement("div");
            selectsDiv.style['padding']='20px';
            selectsDiv.style['padding-top']='10px';
            $.each(param,function(index,ele){
                var div=document.createElement("div");
                div.style['margin-top']='10px';
                var span=document.createElement("span");
                span.innerHTML=ele.title+':'
                div.appendChild(span)
                var select=document.createElement("select");
                select.name=ele.name;
                layer.appendChild(select);
                if(ele.init)
                    ele.init(select);
                select.onchange = ele.onchange;
                div.appendChild(select)
                selectsDiv.appendChild(div)
            })
            pad.appendChild(selectsDiv)
            $(pad).append('<div style="width:100%;position: relative;bottom:0;border-top: 1px solid buttonface;"><button name="cancel" style="font-size:14px;font-weight:600;width:50%;height:35px;color: #999;border:none;border-bottom-left-radius: 10px" >取消</button><button name="confirm" style="font-size:14px;font-weight:600;width:50%;height:35px;color:#2f97f0;background: white;border:none;border-bottom-right-radius: 10px" >确认</button></div>')
            layer.appendChild(pad)

            $(pad).find('[name=cancel]').click(function(){
                layer.remove()
            });
            $(pad).find('[name=confirm]').click(function(){
                var pp = {}
                $.each( $(pad).find("select"),function(index,ele){
                    var aa = {name:ele.name,value:ele.value,text:$(ele).find('option:selected').text()}
                    pp[ele.name]=aa;
                })
                layer.remove()
                if(callback){
                    callback(pp);
                }
            });

        }})

}