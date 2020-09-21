var giveup = giveup ? giveup : {};

(function ($) {
    giveup.cache = {};
    var key = location.href;
    var objJsonStr = localStorage.getItem(key);
    var obj = objJsonStr ? JSON.parse(objJsonStr) : {};

    var cacheDoms = document.getElementsByClassName('giveup-cache');
    debugger
    for (var i = 0; i < cacheDoms.length; i++) {
        var dom = cacheDoms[i];
        if (dom.tagName == 'SELECT') {
            dom.addEventListener('change', cache, false);
        } else if (dom.tagName == 'INPUT')
            dom.addEventListener('input', cache, false);
        set(dom)

    }

    function refreshAll() {
        var cacheDoms = document.getElementsByClassName('giveup-cache');

        for (var i = 0; i < cacheDoms.length; i++) {
            var dom = cacheDoms[i];
            set(dom)
        }
    }

    function set(dom) {
        var name = dom.name || dom.id;
        var value = obj[name];

        if (dom.tagName == 'SELECT') {
            if (dom.multiple) {
                if (value)
                    for (j = 0; j < dom.options.length; j++) {
                        if (value.indexOf(dom.options[j].value) >= 0) {
                            dom.options[j].selected = true
                        } else
                            dom.options[j].selected = false
                    }
            } else {
                if (value)
                    dom.value = value
            }
            $(dom).change()
        } else if (dom.tagName == 'INPUT') {
            if (value)
                dom.value = value
        }
    }


    function cache() {
        debugger
        var dom = this;
        var value;
        if (dom.tagName == 'SELECT')
            if (dom.multiple) {
                value = []
                for (i = 0; i < dom.options.length; i++) {
                    if (dom.options[i].selected) {
                        value.push(dom.options[i].value)
                    }
                }
            } else
                value = dom.value
        else if (dom.tagName == 'INPUT') {
            value = dom.value
        }
        var name = dom.name || dom.id
        obj[name] = value;
        if (value)
            localStorage.setItem(key, JSON.stringify(obj))
    }

    giveup.cache.clearAll = function () {
        obj = {}
        localStorage.removeItem(key)
        refreshAll()
    }
})($)
