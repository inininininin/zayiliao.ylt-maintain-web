var navim = {}
navim.paths=[]

navim.init = function(){
    navim.paths = JSON.parse(sessionStorage.getItem('navim.paths'))
    navim.paths=navim.paths?navim.paths:[]
}

navim.push=function({url,title}){
        if(!navim.paths || navim.paths.length==0)
            navim.init()
        var a = {url,title};


    var index =-1;
    for (let i = 0; i <  navim.paths.length; i++) {
        if(url==navim.paths[i].url){
            index=i;
            break;
        }
    }
    if(index == -1){
        navim.paths.push(a)
    }else{
        navim.paths=navim.paths.slice(0,index+1)
    }

    sessionStorage.setItem('navim.paths',JSON.stringify(navim.paths))

}
navim.clear=function(){
    sessionStorage.removeItem('navim.paths')
    navim.paths=[]

}
navim.spring=function(){
    var htttt = '';
    for (let i = 0; i < navim.paths.length; i++) {
        var path = navim.paths[i]
        htttt=htttt+ '/' + ` <a href="${path.url}" style="color: blue;">${path.title}</a> `
    }
    return htttt;
}