/**
 * Created by xuxk on 2019/1/14.
 */
var whdef = 100 / 1366;// 表示1920的设计图,使用100PX的默认值
var wH = window.innerHeight;// 当前窗口的高度
var wW = window.innerWidth;// 当前窗口的宽度

var navWidth=$('.title_list_box').width();
var navWidths=$('.topLine_list_box').width();
console.log(rem,wW)
if(wW>=1920){
    wW = 1920;
}
if(wW <= 1366){
    wW = 1366;
}
var rem = wW * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
document.documentElement.style.fontSize = rem + 'px'
$(window).resize(function ()// 绑定到窗口的这个事件中
{var whdef = 100 / 1366;// 表示1920的设计图,使用100PX的默认值
    var wH = window.innerHeight;// 当前窗口的高度
    var wW = window.innerWidth;// 当前窗口的宽度
    var navWidth=$('.title_list_box').width();
    var navWidths=$('.topLine_list_box').width();
    if(wW>=1920){
        wW = 1920;
    }
    if(wW <= 1366){
        wW = 1366;
    }
    var rem = wW * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
    document.documentElement.style.fontSize = rem + 'px'
});

//$('.topLine>div>span').mousemove(function(){
//    $('.topLine_list').fadeIn(500);
//    var navWidths=$('.topLine_list_box').width();
//    $('.topLine_list_box').css('margin-left',(wW-navWidths)/2+'px')
//})
//$('.topLine').mouseleave(function(){
//    $('.topLine_list').fadeOut(500);
//})
//
//
//$('.nav>span').mousemove(function(){
//    $('.title_list').fadeIn(500);
//    var navWidths=$('.title_list_box').width();
//    $('.title_list_box').css('margin-left',(wW-navWidths)/2+'px')
//})
//$('.nav>span').mouseleave(function(){
//    $('.title_list').fadeOut(500);
//})

//$('.topLine_list_box>div').hover(function(){
//    $(this).find('img').attr('src',$(this).find('img').attr('src').split('.')[0]+"-white.png")
//})
//$('.topLine_list_box>div').mouseleave(function(){
//    $(this).find('img').attr('src',$(this).find('img').attr('src').split('-')[0]+".png")
//})




$('.title_list_box>div').hover(function(){
    $(this).find('img').attr('src',$(this).find('img').attr('src').split('.')[0]+"-black.png")
})
$('.title_list_box>div').mouseleave(function(){
    $(this).find('img').attr('src',$(this).find('img').attr('src').split('-')[0]+".png")
})
$('.topLine_list_box').find('.nochoose').hover(function(){
    $(this).find('img').attr('src',$(this).find('img').attr('src').split('.')[0]+"-white.png")
})
$('.topLine_list_box').find('.nochoose').mouseleave(function(){
    $(this).find('img').attr('src',$(this).find('img').attr('src').split('-')[0]+".png")
})


$('.topLine>div>span').mousemove(function(){
    $(this).find('.topLine_list').fadeIn(100);
    var navWidths=$(this).find('.topLine_list_box').width();
    $(this).find('.topLine_list_box').css('margin-left',(wW-navWidths)/2+'px')
})
$('.topLine>div>span').mouseleave(function(){
    $('.topLine_list').fadeOut(100);
})


$('.nav>span').mousemove(function(){
    $(this).find('.title_list').fadeIn(100);
    var navWidths=$(this).find('.title_list_box').width();
    $(this).find('.title_list_box').css('margin-left',(wW-navWidths)/2+'px')
})
$('.nav>span').mouseleave(function(){
    $('.title_list').fadeOut(100);
})


$('.topLine_list_box>div').click(function(){
    var href=$(this).attr('linkhref')
    if(href==1){
        return;
    }else{
        location.href=href
    }
})




$('.fenlei ul li').click(function(){
    $(this).css('color','#e2403f')
    $(this).siblings().css('color','#999999')
})
$('.productList').on('click','ul li',function(){
    var href=$(this).attr('linkhref');
    var piclink=$(this).attr('picLink')
        location.href=href+"?pic="+piclink;
})


function indexHref(){
    location.href='index.html'
}

function videoCenter(){
    location.href='videoCenter.html'
}