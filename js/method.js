// window.onload = function () {
    // 鼠标移动到obj上该obj添加cur的class，移除则取消
    function add_re_class(index, obj1, obj2, obj_class) {
        obj1[index].onmouseover = () => {
            obj2[index].classList.add(obj_class);
            for (var i = 0; i < obj1.length; i++) {
                if (i != index) {
                    obj2[i].classList.remove(obj_class);
                }
            }
        }
    }

    // 鼠标移动到obj1上出发事件使obj2出现，移除使得obj2消失
    function beblock(obj1, obj2, i) {
        obj1[i].onmouseover = () => {
            obj2[i].style.display = "block";
        }
        obj1[i].onmouseout = () => {
            obj2[i].style.display = "none";
        }
    }

    // 获取样式
    function getStyle(obj, name) {
        if (window.getComputedStyle) {
            //正常浏览器的方式，具有getComputedStyle()方法
            return getComputedStyle(obj, null)[name];
        } else {
            //IE8的方式，没有getComputedStyle()方法
            return obj.currentStyle[name];
        }
    }
// }