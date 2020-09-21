
$.prototype.oneall_attrs=function(attr){
    var ss = [];
    $(this).each(function(index,ele){
        ss.push($(ele).attr(attr))
    })
    return ss
}

$.prototype.oneall_exchangeDom=function(target){
    debugger
    if(!target||target.length == 0)
        return
   var s=$('<span></span>')
    s.insertAfter(this)

    var s1=$('<span></span>')
    s1.insertAfter(target)

    $(target).insertBefore(s)
    $(this).insertAfter(s1)

    s.remove()
    s1.remove()

}



$.prototype.oneall_nestAttr=function(chain){
    var eles = chain.split('.')
    var data = this[0];
    for (let index = 0; index < eles.length; index++) {
        const ele = eles[index];
        data=data[ele]
        if(data == null || data==undefined)
            return data;
        
    }
    return data
}