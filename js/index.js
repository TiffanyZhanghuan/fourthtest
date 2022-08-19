// document.write("<script language=javascript src='method.js'></script>");
var CurrentEvents = document.getElementsByClassName('Current-Events-li');
var curra = document.getElementsByClassName('Current-Events');
// var curraafter = getComputedStyle(curra[0], 'after').addProperty("height", "50px")
// let result = [...document.querySelectorAll('.dialmCom > ul')].map(ul => {
//     return [...ul.querySelectorAll('li > div > a')].map(a => a.innerText);
// });
// console.log(curraafter)

// 获取固定的列表
var slide = document.getElementById('slide');
// 获取变换的列表
var slide1 = document.getElementsByClassName('slide1');
var Current_Event_i = document.getElementsByClassName("Current_Event_i");
// 调用函数
for (var i = 0; i < CurrentEvents.length; i++) {
    currnon(i);
}
let currflag = 0;
// 切换头部的时政cctv直播 中的效果
function currnon(index) {
    CurrentEvents[index].onmouseover = function () {
        slide1[index].style.display = "block";
        slide.style.display = "none";
        for (var j = 0; j < CurrentEvents.length; j++) {
            if (index != j) {
                slide1[j].style.display = "none";
            }
        }
        curra[index].style.color = "red";
        Current_Event_i[index].style.background = " url(../image/nav_icon_spirit_hover.png) no-repeat";
        Current_Event_i[index].classList.remove("animation-rotate180");
        Current_Event_i[index].classList.add("animation-rotate");
        // currflag = 1;
        slide1[index].onmouseover = function () {
            slide1[index].style.display = "block";
            slide.style.display = "none";
            for (var j = 0; j < CurrentEvents.length; j++) {
                if (index != j) {
                    slide1[j].style.display = "none";
                }
            }
            curra[index].style.color = "red";
            Current_Event_i[index].style.background = " url(../image/nav_icon_spirit_hover.png) no-repeat";
            Current_Event_i[index].transform = "rotateZ(180deg)";
            Current_Event_i[index].classList.remove("animation-rotate180");
            Current_Event_i[index].classList.add("animation-rotate");
        }
        slide1[index].onmouseout = function () {
            for (var j = 0; j < CurrentEvents.length; j++) {
                slide1[j].style.display = "none";
            }
            slide.style.display = "block";
            curra[index].style.color = "white";
            Current_Event_i[index].style.background = " url(../image/nav_icon_spirit_2022_02.png) no-repeat";
            Current_Event_i[index].style.transform = "rotateZ(0deg)";
            Current_Event_i[index].classList.remove("animation-rotate");
            Current_Event_i[index].classList.add("animation-rotate180");
        }
    }
    CurrentEvents[index].onmouseout = function () {
        for (var j = 0; j < CurrentEvents.length; j++) {
            slide1[j].style.display = "none";
        }
        slide.style.display = "block";
        curra[index].style.color = "white";
        Current_Event_i[index].style.background = " url(../image/nav_icon_spirit_2022_02.png) no-repeat";
        Current_Event_i[index].classList.remove("animation-rotate");
        Current_Event_i[index].classList.add("animation-rotate180");
    }
}

// 搜索框
var firstSearchtext = document.getElementsByClassName("firstSearch_text");
firstSearchtext[0].onfocus = function () {
    // console.log(this.value)
    // console.log(this.defaultValue);
    if (this.value == this.defaultValue) {
        this.value = "";
    }
}
firstSearchtext[0].onblur = function () {
    if (!this.value) {
        // console.log(this.placeholder)
        this.value = this.placeholder;
    }
}

// 获取搜索框的节点
var firstSearchtext = document.getElementById("firstSearchtext");
var firstSearchtext2 = document.getElementById("firstSearchtext2");
// 获取下拉框框架的节点
var sContent = document.getElementById("sContent");
var sContent2 = document.getElementById("sContent2");
searchfun(firstSearchtext, sContent);
searchfun(firstSearchtext2, sContent2);

function searchfun(obj1, obj2) {
    obj1.addEventListener('click', function (event) {
        obj2.style.display = 'block';
        event.stopPropagation(); //阻止冒泡
    })

    window.addEventListener('click', function () {
        obj2.style.display = 'none'; //隐藏
    });

    obj2.addEventListener('click', function (event) {
        event.stopPropagation(); //阻止冒泡
    })
}


// 获取轮播图按钮左
var btnleft = document.getElementById("btnleft");
// 获取轮播图按钮左
var btnright = document.getElementById("btnright");
var mountwid = 0;
var con_liwidth = 0;


function widfun() {
    if (window.innerWidth >= 1350 && window.innerWidth <= 1683) {
        con_liwidth = 202;
    } else if (window.innerWidth >= 1684 && window.innerWidth <= 1899) {
        con_liwidth = 251;
    } else if (window.innerWidth >= 1900) {
        con_liwidth = 237;
    } else {
        con_liwidth = 159;
    }
    return con_liwidth;
}
con_liwidth = widfun();
// console.log(window.screen.width * window.devicePixelRatio);
// window.addEventListener('resize', widfun);
btnleft.onclick = () => {
    con_liwidth = widfun();
    var conulmarleft = conul.style.marginLeft;
    console.log(conulmarleft);
    if (conul.style.marginLeft == "-" + con_liwidth * 4 + "px") {
        conul.style.marginLeft = "0px";
        mountwid = 0;
        btnleft.style.display = "none";
    }
    if (conul.style.marginLeft == "-" + con_liwidth * 8 + "px") {
        conul.style.marginLeft = "-" + con_liwidth * 4 + "px";
        btnright.style.display = "block";
        mountwid = 1;
        console.log(mountwid);
    }
}
btnright.onclick = () => {
    con_liwidth = widfun();
    console.log(conul.style.marginLeft);
    if (conul.style.marginLeft == "0px") {
        conul.style.marginLeft = "-" + con_liwidth * 4 + "px";
        btnleft.style.display = "block";
        mountwid = 1;
        console.log(mountwid);
    } else {
        conul.style.marginLeft = "-" + con_liwidth * 8 + "px";
        btnright.style.display = "none";
        mountwid = 2;
        console.log(mountwid);
    }
}


function screenchange() {
    clearInterval(playtimer);
    var conul = document.getElementById("conul");
    if (mountwid == 1) {
        conul.style.transition = "all 0s";
        if (window.innerWidth >= 1350 && window.innerWidth <= 1683) {
            conul.style.marginLeft = "-" + widfun() * 4 + "px";
        } else if (window.innerWidth >= 1684 && window.innerWidth <= 1899) {
            conul.style.marginLeft = "-" + widfun() * 4 + "px";
        } else if (window.innerWidth >= 1900) {
            conul.style.marginLeft = "-" + widfun() * 4 + "px";
        } else {
            conul.style.marginLeft = "-" + widfun() * 4 + "px";
        }
    }
    if (mountwid == 2) {
        conul.style.transition = "all 0s";
        if (window.innerWidth >= 1350 && window.innerWidth <= 1683) {
            conul.style.marginLeft = "-" + widfun() * 8 + "px";
        } else if (window.innerWidth >= 1684 && window.innerWidth <= 1899) {
            conul.style.marginLeft = "-" + widfun() * 8 + "px";
        } else if (window.innerWidth >= 1900) {
            conul.style.marginLeft = "-" + widfun() * 8 + "px";
        } else {
            conul.style.marginLeft = "-" + widfun() * 8 + "px";
        }
    }
    setTimeout(() => {
        conul.style.transition = " margin ease .5s";
    }, 500);
}
window.addEventListener('resize', screenchange);
// 初始化数组
// 左半部分
// 方向：一列两个  一列一列编排
var nav1_text = ["直&nbsp;&nbsp;&nbsp;&nbsp;播", "电视剧", "节目单", "动画片", "频道大全",
    "纪&nbsp;&nbsp;录&nbsp;&nbsp;片", "栏目大全", "特别节目", "主&nbsp;持&nbsp;人",
    "4K专区", "听音", "热榜"
]
var record_material = `
    <a>
        <div class="img">
            <img src="https://p3.img.cctvpic.com/photoAlbum/page/performance/img/2022/7/18/1658114230619_223.jpg"
                alt="">
        </div>
        <div class="title">千里江山万里歌</div>
    </a>
    <a>
        <div class="img">
            <img src="	https://p4.img.cctvpic.com/photoAlbum/page/performance/img/2022/7/18/1658114215644_889.jpg"
                alt="">
        </div>
        <div class="title">守望秦岭</div>
    </a>
    <a>
        <div class="img">
            <img src="https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2022/5/5/1651715687892_283.jpg"
                alt="">
        </div>
        <div class="title">鲜生史</div>
    </a>
`;
var record_material1 = `
    <a>
        <div class="img">
            <img src="https://p3.img.cctvpic.com/photoAlbum/page/performance/img/2022/2/28/1646015580787_834.jpg"
                alt="">
        </div>
        <div class="title">春天里的人们</div>
    </a>
    <a>
        <div class="img">
            <img src="https://p1.img.cctvpic.com/photoAlbum/page/performance/img/2022/2/28/1646015470111_588.jpg"
                alt="">
        </div>
        <div class="title">问天</div>
    </a>
    <a>
        <div class="img">
            <img src="https://p1.img.cctvpic.com/photoAlbum/page/performance/img/2022/2/28/1646015363776_566.jpg"
                alt="">
        </div>
        <div class="title">冰雪之名</div>
    </a>
`;
var record_material2 = `
    <a>
        <div class="img">
            <img src="https://p3.img.cctvpic.com/photoAlbum/page/performance/img/2022/3/2/1646187751431_786.jpg"
                alt="">
        </div>
        <div class="title">奶泡泡学成语</div>
    </a>
    <a>
        <div class="img">
            <img src="https://p5.img.cctvpic.com/photoAlbum/page/performance/img/2022/3/2/1646187743667_370.jpg"
                alt="">
        </div>
        <div class="title">冰球旋风</div>
    </a>
    <a>
        <div class="img">
            <img src="https://p4.img.cctvpic.com/photoAlbum/page/performance/img/2022/3/2/1646187734386_271.jpg"
                alt="">
        </div>
        <div class="title">百变校巴7</div>
    </a>
`;
/*  */
// 获取nav1——ul的节点
var nav1Left = document.getElementById("nav1-left");
var nav1_ul1 = "";
// 左边列表渲染
for (let i = 0; i < nav1_text.length; i += 2) {
    nav1_ul1 += `<li class='nav_li'>
                    <div class="nav1-div">
                        <a href="">
                            <i class="nav1_icon${i} nav1_icon"></i>
                            ${ nav1_text[i] }
                        </a>
                    </div>
                    <div class="nav1-div">
                        <a href="">
                            <i class="nav1_icon${i+1} nav1_icon"></i>
                            ${ nav1_text[i+1] }
                        </a>
                    </div>
                </li>`;
}
nav1Left.innerHTML = nav1_ul1;

var nav1_icon = document.getElementsByClassName("nav1_icon");
var nav_li = document.getElementsByClassName("nav_li");
nav_li[2].innerHTML = `
        <div class="nav1-div nav_hover">
            <a>
                <i class="nav1_icon2 nav1_icon"></i>
                频道大全
            </a>
            <div class="nav_diacon diacon_all nav_cover" style="display: none;">
                <div class="dialog_all nav_dialog">
                    <div class="icon"></div>
                    <ul id="nav_dia_ul"></ul>
                </div>
            </div>
        </div>
        <div class="nav1-div nav_hover">
            <a>
                <i class="nav1_icon3 nav1_icon"></i>
                纪&nbsp;&nbsp;录&nbsp;&nbsp;片
            </a>
            <div class="nav_diacon nav_record nav_cover" style="display: none;">
                <div class="nav_dialog dialog_record">
                    <div class="icon"></div>
                    <div class="dia_record_box">
                        <h5><a>纪录片</a></h5>
                        ${ record_material }
                    </div>
                </div>
            </div>
        </div>
`;
nav_li[0].innerHTML = `
        <div class="nav1-div">
                        <a href="">
                            <i class="nav1_icon0 nav1_icon"></i>
                            直&nbsp;&nbsp;&nbsp;&nbsp;播
                        </a>
                    </div>
        <div class="nav1-div nav_hover">
            <a>
                <i class="nav1_icon1 nav1_icon"></i>
                电视剧
            </a>
            <div class="nav_diacon nav_record nav_cover nav_tv">
                <div class="nav_dialog dialog_record">
                    <div class="icon"></div>
                    <div class="dia_record_box">
                        <h5><a>电视剧</a></h5>
                        ${ record_material1 }
                    </div>
                </div>
            </div>
        </div>
`;
nav_li[1].innerHTML = `
        <div class="nav1-div">
                        <a href="">
                            <i class="nav1_icon2 nav1_icon"></i>
                           节目单
                        </a>
                    </div>
        <div class="nav1-div nav_hover">
            <a>
                <i class="nav1_icon3 nav1_icon"></i>
                动画片
            </a>
            <div class="nav_diacon nav_record nav_cover nav_car" >
                <div class="nav_dialog dialog_record">
                    <div class="icon"></div>
                    <div class="dia_record_box">
                        <h5><a>电视剧</a></h5>
                        ${ record_material2 }
                    </div>
                </div>
            </div>
        </div>
`;
var nav_hover = document.getElementsByClassName("nav_hover");
var nav_cover = document.getElementsByClassName("nav_cover");

function nav_hover_fun(index) {
    nav_hover[index].addEventListener('mouseover', () => {
        nav_cover[index].style.display = "block";
    })
    nav_hover[index].addEventListener('mouseout', () => {
        nav_cover[index].style.display = "none";
    })
}
for (var i = 0; i < nav_hover.length; i++) {
    nav_hover_fun(i);
}
// 左边列表背景图片
const nav1_icnumbere = ["01", "07", "02", "08", "03", "09", "04", "10", "13", "12", "06", "11"]
for (var i = 0; i < nav1_icon.length; i++) {
    nav1_icon[i].style.background = "url(https://p3.img.cctvpic.com/photoAlbum/templet/common/DEPA1628231077516717/ind02_1200_" + nav1_icnumbere[i] + ".png)no-repeat center center";
}

var nav2_right = document.getElementById("nav2_right");
var nav1_ul2 = "";
var nav2_text = ["新闻联播", "焦点访谈", "今日说法", "海峡两岸", "视界", "百家讲坛", "法律讲堂", "防务新观察", "ai妙招儿", "更多+"];
for (let i in nav2_text) {
    nav1_ul2 += `
    <li `
    if (i == 2 | i == 7) {
        nav1_ul2 += `class='end2'`
    }
    if (i == 3 || i == 8) {
        nav1_ul2 += `class='end1'`
    }
    nav1_ul2 += `>
        <div class="nav2-div">
            <a href="/">${ nav2_text[i] }</a>
        </div>
    </li>
    `
}
nav2_right.innerHTML = nav1_ul2;
// 直播导视下方框架
// 获取ul节点
var cctv5_ul = document.getElementById("cctv5_ul");
const cctv5_brief = ["正大综艺", "职场健康课", "文化十分", "中国舆论场", "防务新观察", "跟着书本去旅行", "法治深壹度", "田间示范秀"];
const cctv5_listyle = ["", "", "", "", "", "end3", "end2", "end1"];
var cctv5_str = "";
for (let i in cctv5_brief) {
    cctv5_str += `
                <li class="${ cctv5_listyle[i] }">
                    <div class="title text ">本周 CCTV-${ ++i }</div>
                    <div class="brief text ">${ cctv5_brief[i] }</div>
                </li>
    `
}
cctv5_str += `<div class="clear"></div>`
cctv5_ul.innerHTML = cctv5_str;

// 获取节点
// 直播导视下方视频的数组
var cctv5_ul2 = document.getElementById("cctv5_ul2");
const cctv5_com_title = ["饱览四方风光好物", "探讨职场健康话题", "用新闻视角解读文化", "大数据分析舆论热点", "退役军人的感人故事", "追寻文明之源", "聚焦典型案例", "深入田间地头"];
const cctv5_com_brief = ["细品历史今朝气象", "为职场打拼保驾护航", "以文艺手法制作新闻", "激浊扬清 针砭时弊", "新时代退役军人的群体形象", "用文物讲述文化之美", "邀约关键人物", "走访遇到生产难题的农户"];
const cctv5_hover_h3 = ["聚焦全国乡村旅游重点镇", "关注职场亚健康和职业病", "透视观察热点文化现象", "深入探讨人们关注的事", "以郑重的方式向老兵致敬", "聚焦中国考古若干重大发现", "发出权威声音", "寻找乡土专家帮助破解难题"];
const cctv5_hover_span = ["和《正大综艺》一起，饱览四方乡镇风光好物，细品历史今朝气象万千。", "为广大观众带来切实有效的健康解决方案。", "从特殊的视角，反映文艺工作者用真情、真心、真诚的艺术创作奉献人民、回馈时代的感人事迹。", "通过融媒体带动全民参与话题讨论，用观点的碰撞和交流激发社会思考。", "以演播室访谈等多种形式，挖掘感人故事，展现真实情感，塑造新时代退役军人的群体形象。", "介绍考古知识，讲述历史故事，弘扬传统文化，唤起大家对于中华优秀传统文化的温情与敬意。", "本节目报道中国法治建设的重大成就，介绍法治建设过程中的重要案例，解读案例背后的法治精神。", "走访遇到生产难题的求助农户，为其寻找乡土专家，面对面的帮助破解难题，达到令人喜悦的帮扶效果。"];
const cctv5_hover_label = ["正大综艺", "职场健康课", "文化十分", "中国舆论场", "老兵你好", "考古公开课", "法治深壹度", "田间示范秀"];

var cctv5_str2 = "";
for (var i = 0; i < cctv5_com_brief.length; i++) {
    // console.log(i);
    cctv5_str2 += `
                    <li style="z-index: 1;"  
                    class="`
    if (i == 5) {
        cctv5_str2 += `end3`
    }
    if (i == 6) {
        cctv5_str2 += `end2`
    }
    if (i == 7) {
        cctv5_str2 += `end1`
    }
    cctv5_str2 += `">
                        <div class="ttcv5_con">
                            <div class="common">
                                <div class="img">
                                    <a href="">
                                        <img data-src="./image/cctv5_img2src${ i }.jpg"
                                            alt="" class='lazy_img'>
                                    </a>
                                </div>
                                <div class="text_2">
                                    <div class="title">
                                        <a href="">${  cctv5_com_title[i] }</a>
                                    </div>
                                    <div class="brief_2">${  cctv5_com_brief[i] }</div>
                                </div>
                            </div>
                            <div class="hover" style="display: none;">
                                <div class="img">
                                    <a href="">
                                        <img data-src="./image/cctv5_hover${ i }.jpg"
                                            alt="" class='lazy_img'>
                                    </a>
                                </div>
                                <div class="text">
                                    <h3>
                                        <a href="">
                                            ${ cctv5_hover_h3[i] }
                                        </a>
                                    </h3>
                                    <span>
                                        <a href="">${ cctv5_hover_span[i] }</a>
                                    </span>
                                    <div class="label">
                                        <a href="">
                                            ${ cctv5_hover_label[i] }
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    
    `
}

cctv5_ul2.innerHTML = cctv5_str2;

var cctv5_li2 = document.getElementById("cctv5_ul2").getElementsByTagName("li");
var cctv_hover = document.getElementsByClassName("hover");

for (const i in cctv5_li2) {
    beblock(cctv5_li2, cctv_hover, i);
}
var blueUl = document.getElementById("blue-ul");
var blueli = ["cel02", "", "cel02", "", "cel02", "cel01", "", "cel02", "", "cel02", "cel01", "cel02", "", "cel02", "cel02", "", "cel02", "cel01", "", "cel01", "cel02", "cel01", "", "cel01", "cel02"];
var blueimg = ["https://p3.img.cctvpic.com/photoAlbum/page/performance/img/2022/2/7/1644212933951_993.png",
    "", "https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2022/4/25/1650856685580_391.png",
    "", "https://p1.img.cctvpic.com/photoAlbum/page/performance/img/2021/8/17/1629188062494_679.png",
    "https://p4.img.cctvpic.com/photoAlbum/page/performance/img/2022/2/28/1646014747690_981.png",
    "", "https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2021/8/17/1629188049419_879.png",
    "", "微视频", "https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2021/11/10/1636529855134_316.png",
    "搜片库", "", "找栏目", "https://p1.img.cctvpic.com/photoAlbum/page/performance/img/2021/8/17/1629187992824_78.png",
    "", "天下足球", "中国<br/>手艺", "", "听音", "https://p3.img.cctvpic.com/photoAlbum/page/performance/img/2021/11/10/1636530103698_516.png",
    "健康<br/>中国", "", "https://p5.img.cctvpic.com/photoAlbum/page/performance/img/2021/10/19/1634625072610_535.png",
    "https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2021/11/23/1637637552408_879.png"
];
// let items = [
//     ['cel02', '...'],
// ]
// for(var i=0;i<)
// console.log(blueli.length);
var bluestr = "";
// 蓝色框框内容
for (const i in blueli) {
    bluestr += `
            <li class="${ blueli[i] }">`
    if (blueli[i] == "cel02") {
        bluestr += `
                <a href="" target="_blank">`
        if (blueimg[i].substring(0, 1) == "h") {
            // console.log(true);
            // console.log(blueimg[i].indexOf("h"==0));
            bluestr += `
                    <img src="${ blueimg[i] }"
                        alt="">`

        } else {
            bluestr += `${ blueimg[i] }`
        }
        bluestr += `</a>`
    }
    if (blueli[i] == "cel01") {
        bluestr += `
                <a href="" target="_blank">`
        if (blueimg[i].substring(0, 1) == "h") {
            // console.log(true);
            // console.log(blueimg[i].indexOf("h"==0));
            bluestr += `
                    <img src="${ blueimg[i] }"
                        alt="">`

        } else {
            bluestr += `${ blueimg[i] }`
        }
        bluestr += `</a>`
    }
    // if()
    bluestr +=
        `</li>`

}
bluestr += `<div class='clear'></div>`
blueUl.innerHTML = bluestr;

var blueli_listen = document.getElementById("blue-ul").getElementsByTagName('li')[19];
blueli_listen.innerHTML = `<a>听音</a><img class='celcode_img' src="https://p3.img.cctvpic.com/photoAlbum/page/performance/img/2021/9/8/1631069879502_502.png"></img>`
// 看点右侧收视top榜单
var watch_focus_list_ul = document.getElementById("watch_focus_list_ul");
var watch_focus_list_listr = "";

// 素材
var watch_focus_material = {
    text: ["踔厉奋发 非凡十年", "解放军军事演训行动开始", "暑期旅游，安全为首！", "神奇又费钱的“课程”", "遇到火灾我们该怎么办", "探秘古方里的中医智慧", "民俗活动丰富的七夕节", "信阳人独有的储味之道", "“沈马组合”演绎宇宙级浪漫", "花海经济带动农民增收"]
}

for (let i in watch_focus_material.text) {
    watch_focus_list_listr += `
        <li>
            <i>${ ++i }</i>
            <a href="/">${ watch_focus_material.text[--i] }</a>
        </li>
    `
}

watch_focus_list_ul.innerHTML = watch_focus_list_listr;

// 四个人头
var four_people_ul = document.getElementById("four_people_ul");
var four_people_listr = "";
// 四个人头素材
var four_people_material = {
    a_link: ["https://tv.cctv.com/2022/07/14/ARTI5JEI5e7QYGxmPx7gsLgn220714.shtml", "https://tv.cctv.com/2022/07/07/ARTImZXYrv0pDhqZMiUPAlro220707.shtml", "https://tv.cctv.com/2022/06/01/ARTI7QhRIStqU5hDiBJPO2Ym220601.shtml?isfromapp=1", "https://tv.cctv.com/2022/06/07/ARTIx5u9KfmJCfxDlDJUxndZ220607.shtml?isfromapp=1", "https://tv.cctv.com/2022/06/10/ARTI7FEsKdNJYOMlqjKRRBdP220607.shtml?isfromapp=1"],
    a_img_src: ["https://p3.img.cctvpic.com/photoAlbum/templet/common/DEPA1628231077516717/zwPic1_1.gif", "https://p3.img.cctvpic.com/photoAlbum/templet/common/DEPA1628231077516717/zwPic1_1.gif", "https://p3.img.cctvpic.com/photoAlbum/templet/common/DEPA1628231077516717/zwPic1_1.gif", "https://p3.img.cctvpic.com/photoAlbum/templet/common/DEPA1628231077516717/zwPic1_1.gif", "https://p3.img.cctvpic.com/photoAlbum/templet/common/DEPA1628231077516717/zwPic1_1.gif"],
    img_src: ["https://p5.img.cctvpic.com/photoAlbum/page/performance/img/2022/7/18/1658111710330_968.png", "https://p4.img.cctvpic.com/photoAlbum/page/performance/img/2022/7/18/1658111399708_365.png", "https://p5.img.cctvpic.com/photoAlbum/page/performance/img/2022/6/20/1655695865037_158.png", "https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2022/6/20/1655695700443_381.png", "https://p3.img.cctvpic.com/photoAlbum/page/performance/img/2022/6/20/1655695352719_142.png"],
    text_title: ["王广杰", "刘倍贝", "李星宇", "霍立明", "王津"],
    text_brief: ["“电工爷爷” 高龄直播", "慢慢走 走出人生路", "大自然的录音师", "用定格动画“重启”人生", "择一事 “钟”一生"]
}
for (let i in four_people_material.a_link) {
    four_people_listr += `
    <li class="`
    if (i == 3) {
        four_people_listr += `end3`
    }
    if (i == 4) {
        four_people_listr += `end1`
    }
    four_people_listr += `">
        <a href="${ four_people_material.a_link[i] }">
            <img src="${ four_people_material.a_img_src[i] }" alt="">
        </a>
        <div class="img">
            <img src="${ four_people_material.img_src[i] }" alt="">
        </div>
        <div class="text">
            <div class="title">${ four_people_material.text_title[i] }</div>
            <div class="brief">${ four_people_material.text_brief[i] }</div>
        </div>
        <div class="clear"></div>
    </li>
    `
}
four_people_listr += "<div class='clear'></div>";
four_people_ul.innerHTML = four_people_listr;
var four_people_li = document.getElementById("four_people_ul").getElementsByTagName('li');

// 听音右侧素材
var listen_voice_right_str = "";
var listen_voice_right_ul = document.getElementById("listen_voice_right_ul");
var listen_voice_material = {
    listen_voice_right_img: {
        0: "https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2022/8/5/1659667469228_567.jpg",
        1: "https://p4.img.cctvpic.com/photoAlbum/page/performance/img/2022/8/4/1659578442605_489.jpg",
        2: "https://p1.img.cctvpic.com/photoAlbum/page/performance/img/2022/8/3/1659494022747_636.jpg",
        3: "https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2022/8/2/1659405804362_608.jpg",
        4: "https://p5.img.cctvpic.com/photoAlbum/page/performance/img/2022/8/1/1659319318326_959.jpg"

    },
    listen_voice_right_hoverimg: {
        0: "https://p3.img.cctvpic.com/photoAlbum/page/performance/img/2022/8/5/1659667531674_717.png",
        1: "https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2022/8/4/1659578483811_301.png",
        2: "https://p3.img.cctvpic.com/photoAlbum/page/performance/img/2022/8/3/1659494034780_370.png",
        3: "https://p4.img.cctvpic.com/photoAlbum/page/performance/img/2022/8/2/1659405807304_987.png",
        4: "https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2022/8/1/1659319321376_580.png"

    },
    listen_voice_right_title: {
        0: "海上传奇",
        1: "拯救地球的虫子",
        2: "八级腹桥测试",
        3: "战国七雄",
        4: "隐士诸葛亮"

    },
    listen_voice_right_brief: {
        0: "中国人对海洋的好奇与探索。",
        1: "这些默默无闻的虫子功劳可不小。",
        2: "测一测腹部肌肉是否健康。",
        3: "天下大势如何从分裂走向统一。",
        4: "真实的诸葛亮是啥样？"
    }
}

for (let i in listen_voice_material.listen_voice_right_brief) {
    listen_voice_right_str += `
    <li>
        <div class="image">
            <img src="${ listen_voice_material.listen_voice_right_img[i]}"
                alt="" class="listen_voice_img">
            <img src="${ listen_voice_material.listen_voice_right_hoverimg[i]}"
                alt="" class="listen_voice_hover_img">
        </div>
        <div class="text">
            <div class="title">
                <a href="">
                ${ listen_voice_material.listen_voice_right_title[i]}
                </a>
            </div>
            <div class="brief">${ listen_voice_material.listen_voice_right_brief[i]}</div>
        </div>
    </li>
    `
}

listen_voice_right_ul.innerHTML = listen_voice_right_str;

var time_play_right_ul = document.getElementById("time_play_right_ul");
var time_play_ulstr = "";
var time_play_material = {
    link: {
        0: "https://tv.cctv.com/2022/05/11/VIDEYDC8030PeMtAbDWyPubJ220511.shtml",
        1: "https://tv.cctv.com/2022/07/15/VIDEANxN0TmL9NYmCrfRyVOD220715.shtml",
        2: "https://tv.cctv.com/2022/05/24/VIDEi07s26um7WONEqUEGEZ9220524.shtml",
        3: "https://tv.cctv.com/2016/10/24/VIDEVF1Yep01ZvrJFujx7yNQ161024.shtml",
        4: "https://tv.cctv.com/2022/01/07/VIDEYLaOmnAp86MpNCzvFxjF220107.shtml"
    },
    text: {
        0: "《青山不墨》三代林业人赓续生态史诗",
        1: "《跨过鸭绿江》用真情实感礼赞最可爱的人",
        2: "《海之谣》一段跨越半个世纪的海峡两岸情",
        3: "《彝海结盟》重温军民团结的历史故事",
        4: "《霞光》烟火气息里演绎“非典型”谍战剧"

    }
}
for (let i in time_play_material.text) {
    // console.log(i);
    time_play_ulstr += `
                    <li>
                        <a href="${ time_play_material.link[i] }" target="_blank">
                        ${ time_play_material.text[i] }
                        </a>
                    </li>
    `
}
// console.log(time_play_ulstr);
time_play_right_ul.innerHTML = time_play_ulstr;

// 底部
var about_us = document.getElementById("about_us");
var about_us_str = "";
var about_us_material = {
    0: ["总台之声", "总台总经理室", "关于CCTV.com", "象舞广告", "网站声明", "广告营销"],
    1: ["央视网", "互联网电视", "央视影音", "手机电视", "移动传媒", "帮助中心"],
    2: ["网上有害信息举报专区", "辟谣平台", "法律顾问", "友情链接", "人才招聘"],
    3: ["关于我们", "智媒学院", "成果发布", "智慧媒体", "智慧政务", "智慧教育"],
    4: ["关于我们", "业务概括", "更多链接", "<img src='https://p3.img.cctvpic.com/photoAlbum/templet/special/PAGEGRxiNJPvYdSJnYUJ1wij201216/ELMTum7xhpp8Jq8e03jIoqYK210913_1631502853.png'>"]
}

for (var i = 0; i < 4; i++) {
    about_us_str += `
    <dl class="dl${ i }">
    <dt>${ about_us_material[4][i] }</dt>
    <dd><ul>`
    for (var j = 0; j < about_us_material[i].length; j++) {
        about_us_str += `<li `
        if (i == 3) {
            if (j == 2 || j == 5) {
                about_us_str += `class = "last"`
            }
        }
        about_us_str += `>
            <a href="">${ about_us_material[i][j] }</a>
        </li>`
    }
    about_us_str += ` <div class="clear"></div>
        </ul>`
    if (i == 3) {
        about_us_str += `
        <div class="ask">
            <a target="_blank" href="https://aigc.cctv.com/contact/index.shtml">合作咨询 &gt;</a>
        </div>
        `
    }
    about_us_str += `</dd>
    </dl>

    `
}
about_us_str += "<div class='clear'></div>";
about_us.innerHTML = about_us_str;

// 点击搜索弹出窗口
{
    var search_popup = document.getElementById("search_popup");
    var search_popup_wrapper = document.getElementById("search_popup_wrapper");

    search_popup.addEventListener('click', event => {
        
        search_popup_wrapper.style.width = "440px";
        console.log(789);
        setTimeout(() => {
            search_popup_wrapper.style.overflow = "visible";
        }, 500)
        event.stopPropagation();

    })

    window.addEventListener('click', () => {
        search_popup_wrapper.style.width = "0";
        search_popup_wrapper.style.overflow = "hidden";
        search_popup_select.style.display = "none";
    })
    search_popup_wrapper.addEventListener('click', event => {
        event.stopPropagation();
    })

    // 点击切换网页和视频
    var search_popup_left = document.getElementById("search_popup_left");
    var search_popup_select = document.getElementById("search_popup_select");

    var search_popup_p = document.getElementById("search_popup_p");
    var popup_select1_http = document.getElementById("popup_select1_http");
    var popup_select1_video = document.getElementById("popup_select1_video");
    search_popup_p.addEventListener('click', (event) => {
        if (event.target.id == "search_popup_p") {
            search_popup_select.style.display = "block";
        }
    })
    popup_select1_http.addEventListener("click", () => {
        search_popup_select.style.display = "none";
        search_popup_p.innerHTML = "网页";
        popup_select1_http.style.color = "#0084ff";
        popup_select1_video.style.color = "#666";
    })

    popup_select1_video.addEventListener("click", () => {
        search_popup_p.innerHTML = "视频";
        search_popup_select.style.display = "none";
        popup_select1_video.style.color = "#0084ff";
        popup_select1_http.style.color = "#666";
    })

    popup_select1_http.addEventListener('mouseover', (event) => {
        if (event.target.id == "popup_select1_http") {
            // 红色
            popup_select1_http.style.color = "#bf0614";
        }
    })
    popup_select1_http.addEventListener('mouseout', (event) => {
        if (event.target.id == "popup_select1_http") {
            if (search_popup_p.innerHTML == event.target.innerHTML) {
                // 变回蓝色
                popup_select1_http.style.color = "#0084ff";
                return;
            }
            popup_select1_http.style.color = "#666";
        }
    })

    popup_select1_video.addEventListener('mouseover', (event) => {
        if (event.target.id == "popup_select1_video") {
            popup_select1_video.style.color = "#bf0614";
        }
    })
    popup_select1_video.addEventListener('mouseout', (event) => {
        if (event.target.id == "popup_select1_video") {
            if (search_popup_p.innerHTML == event.target.innerHTML) {
                popup_select1_video.style.color = "#0084ff";
                return;
            }
            popup_select1_video.style.color = "#666";
        }
    })
}

// 登录部分弹出框效果
{
    var login_popup_wrapper = document.getElementById("login_popup_wrapper");
    var login_popup = document.getElementById("login_popup");
    login_popup.addEventListener('click', (event) => {
        if (login_popup_wrapper.style.height == "290px") {
            login_popup_wrapper.style.height = "0px";
            event.stopPropagation();
            return;
        }
        login_popup_wrapper.style.height = "290px";
        event.stopPropagation();
    })

    login_popup_wrapper.addEventListener('click', event => {
        event.stopPropagation();
    })

    window.addEventListener('click', (event) => {
        login_popup_wrapper.style.height = "0px";
    })
}

// 一个很麻烦的弹窗口
// 渲染弹窗口内容
{
    var class_popup_contain = document.getElementById("class_popup_contain");
    var class_popup_list = document.getElementById("class_popup_list");
    var class_popup_str = "";
    var class_popup_material = {
        channel: {
            0: ["总台春晚", "网络春晚", "共产党员网", "精品动画", "秧纪录", "纪录片网", "国家大剧院", "云端活动"],
            1: ["新闻", "国内", "国际", "评论", "经济", "军事", "科技", "法治", "文娱", "人物", "公益", "图片"],
            2: ["视频", "小央视频", "小央直播", "直播中国", "熊猫频道", "VR/AR", "4K专区"],
            3: ["体育", "直播", "竞猜", "冬奥会", "CBA", "NBA", "中超", "国足", "国际足球", "网球", "综合体育"],
            4: ["财经", "教育", "乡村振兴", "生态环境", "一带一路", "文旅美食", "海洋", "健康", "书画", "阅读", "时尚", "汽车", "AI", "5G", "才艺", "产业+"],
            5: ["<img src='	https://p4.img.cctvpic.com/photoAlbum/page/performance/img/2022/5/18/1652857455273_78.png' alt=''>", "<img src='	https://p4.img.cctvpic.com/photoAlbum/page/performance/img/2022/5/18/1652857455273_78.png 'alt=''>", "<img src='https://p4.img.cctvpic.com/photoAlbum/page/performance/img/2022/5/18/1652857487408_417.png' alt=''>"],
            6: ["CCTV.节目官网", "直播", "节目单", "栏目", "片库", "收视榜"],
        },
        column: {
            1: ["人民领袖习近平", "联播+", "热解读", "天天学习", "习式妙语", "央视快评", "央视网评", "光华锐评"],
            2: ["现场", "前线", "比划", "快看", "蓝海中国", "新兵请入列", "人生第一次", "人生第二次"],
            3: ["VIP会员", "CCTV奥林匹克频道", "young视频", "体育江湖", "文化体育", "冰雪道路", "足球道路"],
            4: ["新时代·瞰百城", "超级工厂", "智敬中国", "大国智造", "云课堂", "人人都爱中国造", "云游美丽中国", "网上展馆", "央视网选"],
            5: [""],
            6: [""]
        },
        logolist1: {
            0: "https://p4.img.cctvpic.com/photoAlbum/page/performance/img/2022/5/18/1652857919170_116.png",
            1: "https://p3.img.cctvpic.com/photoAlbum/page/performance/img/2022/5/18/1652857908565_283.png",
            2: "https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2022/5/18/1652857899758_226.png",
            3: "https://p5.img.cctvpic.com/photoAlbum/page/performance/img/2022/5/18/1652857890508_970.png",
            4: "https://p4.img.cctvpic.com/photoAlbum/page/performance/img/2022/5/18/1652857880669_439.png",
            5: "https://p5.img.cctvpic.com/photoAlbum/page/performance/img/2022/5/18/1652857870022_568.png",
            6: "https://p5.img.cctvpic.com/photoAlbum/page/performance/img/2022/5/18/1652857866003_622.png",
            7: "https://p5.img.cctvpic.com/photoAlbum/page/performance/img/2022/5/18/1652857849889_559.png",
            8: "https://p4.img.cctvpic.com/photoAlbum/page/performance/img/2022/5/18/1652857845477_430.png",
            9: "https://p4.img.cctvpic.com/photoAlbum/page/performance/img/2022/5/18/1652857796382_346.png",
            10: "https://p5.img.cctvpic.com/photoAlbum/page/performance/img/2022/5/18/1652857791503_238.png",
            11: "https://p3.img.cctvpic.com/photoAlbum/page/performance/img/2022/5/18/1652857775917_66.png",
            12: "https://p5.img.cctvpic.com/photoAlbum/page/performance/img/2022/5/18/1652857764456_492.png",
            13: "https://p5.img.cctvpic.com/photoAlbum/page/performance/img/2022/5/18/1652857760604_164.png",
            14: "https://p5.img.cctvpic.com/photoAlbum/page/performance/img/2022/5/18/1652857722814_387.png",
            15: "https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2022/5/18/1652857703226_327.png",
            16: "https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2022/5/18/1652857684625_15.png",
            17: "https://p3.img.cctvpic.com/photoAlbum/page/performance/img/2022/5/18/1652857654002_764.png"
        },
        logolist2: {
            0: "https://p3.img.cctvpic.com/photoAlbum/page/performance/img/2022/5/23/1653307500801_235.png",
            1: "https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2022/5/23/1653307509334_306.png",
            2: "https://p3.img.cctvpic.com/photoAlbum/page/performance/img/2022/7/1/1656653912700_622.png"

        }
    };

    var class_img_popup = "";
    class_img_popup += `
    <div class="logolist">
        <ul>`
    for (let i in class_popup_material.logolist1) {
        class_img_popup += `
            <li>
                <a href="">
                    <img src="${ class_popup_material.logolist1[i] }" alt="">
                </a>
            </li>`
    }
    class_img_popup += `
    <div class='clear'></div>
        </ul>
        <ul class='logolist_ul'>`
    for (let j in class_popup_material.logolist2) {
        class_img_popup += `
                    <li>
                        <a href="">
                            <img src="${ class_popup_material.logolist2[j] }" alt="">
                        </a>
                    </li>`
    }
    class_img_popup += `
<div class='clear'></div>
</ul>
        <div class='clear'></div>
    </div>
`;
    class_img_popup += `<div class='clear'></div>`;


    class_img_popup += `
        </ul>
    </div>
`;

    class_popup_str += `
    <div class="li li0">
        <div class="channel">`
    for (let i in class_popup_material.channel[0]) {
        class_popup_str +=
            `
        <a href="/" target="_blank">${ class_popup_material.channel[0][i] }</a>
        `
    }

    class_popup_str += `
        </div>
    </div>
    <div class="line"></div>
    `
    for (let i = 1; i < 7; i++) {
        class_popup_str += `
        <div class="li li${ i }">
            <div class="channel">`
        for (let j in class_popup_material.channel[i]) {
            class_popup_str += `
        <a href="">${ class_popup_material.channel[i][j] }</a>
        `
        }
        class_popup_str += `</div>`
        if (i == 6) {
            class_popup_str += `${ class_img_popup }`
        }
        if (i != 5) {
            class_popup_str += `<div class="column">`
            for (let j in class_popup_material.column[i]) {
                class_popup_str += `
            <a href="/">${ class_popup_material.column[i][j] }</a>
            `
            }
            class_popup_str += `</div>`

        }
        class_popup_str += `</div>`
        if (i == 5) {
            class_popup_str += `<div class="line"></div>`
        }
    }
    class_popup_list.innerHTML = class_popup_str;
}

// 弹窗口点击出现和消失效果
{
    var bodybb = document.getElementById("bodybb");
    var class_popup_wrapper = document.getElementById("class_popup_wrapper");
    var class_popup = document.getElementById("class_popup");
    var class_popup_close = document.getElementById("class_popup_close");
    var class_popup_contain = document.getElementById("class_popup_contain");
    // var class_flag = 1;
    class_popup.addEventListener('click', event => {
        var h = window.innerHeight;
        class_popup_wrapper.style.height = h + "px"
        class_popup_list.style.height = (h - 130) + "px";
        // class_popup_wrapper.style.height = "917px";
        bodybb.style.overflowY = "hidden";
        // class_flag = 0;
        window.addEventListener('resize', watch_window_height);
        class_popup_wrapper.style.transition = "height 500ms";
    })

    class_popup_close.addEventListener('click', event => {
        class_popup_wrapper.style.height = "0px";
        bodybb.style.overflowY = "auto";
    })

    function watch_window_height() {
        var h = window.innerHeight;
        class_popup_wrapper.style.transition = "all 0s";
        class_popup_wrapper.style.height = h + "px";
        class_popup_list.style.height = (h - 130) + "px";
        if (h < 860) {
            class_popup_list.style.overflowY = "scroll";
        } else {
            class_popup_list.style.overflowY = "auto";
        }
        console.log(h);
    }
}
// 手机看鼠标移入切换二维码效果
{
    var nav1_phone = document.getElementById("nav1_phone");
    var nav1_erweima = document.getElementById("nav1_erweima");
    nav1_phone.addEventListener('mouseover', () => {
        nav1_erweima.style.display = "block";
        nav1_phone.style.display = "none";
    })
    nav1_erweima.addEventListener('mouseout', () => {
        nav1_erweima.style.display = "none";
        nav1_phone.style.display = "block";
    })
    nav1_phone.addEventListener('mouseout', () => {
        nav1_erweima.style.display = "none";
        nav1_phone.style.display = "block";
    })
    nav1_erweima.addEventListener('mouseover', () => {
        nav1_erweima.style.display = "block";
        nav1_phone.style.display = "none";
    })
}
// 直播导视右侧点击按钮旋转
{
    var rightt = document.getElementById("rightt");
    var rightt_i = document.getElementById('rightt').getElementsByTagName("i")[0];
    rightt.addEventListener('click', event => {
        rightt_i.classList.add("ani");
        setTimeout(() => {
            rightt_i.classList.remove("ani");
        }, 400)
    })
}

// 直播导视滑动效果
var pro_left = document.getElementById("pro_left");
var pro_right = document.getElementById("pro_right");
var pro_li = document.getElementById("pro_ul").getElementsByTagName('li')[0];
var pro_width = 0;
var pro_ul = document.getElementById("pro_ul");
var pro_con = document.getElementById("pro_con");

function pro_lieidth_fun() {
    if (window.innerWidth >= 1350 && window.innerWidth <= 1683) {
        width = 228.99;
    } else if (window.innerWidth >= 1684 && window.innerWidth <= 1899) {
        width = 238.97;
    } else if (window.innerWidth >= 1900) {
        width = 235.99;
    } else {
        width = 227;
    }
    return width;
}
// 一共有20个li
console.log(pro_li.offsetWidth);
// 获取每一个li的宽度
var pro_li_width = pro_li.offsetWidth;
console.log(pro_con.offsetWidth);
// 获取页面有多少个li
var pro_number = (pro_con.offsetWidth / pro_lieidth_fun()).toFixed();
console.log(pro_number);
// 到第几个li
var pro_count = 0;
var clickflag = 0;
pro_right.addEventListener('click', event => {
    var clickflag = 1;
    // 表示页面点击之后第一个盒子是第几个li(pro_count),
    //pro_number就是获取567但是在click之前就获取好了
    var pro_number_now = (pro_con.offsetWidth / pro_lieidth_fun()).toFixed();
    // 如果没有进行缩放页面,当前的number与现在的number相同
    if (pro_number == pro_number_now) {
        pro_count = Math.abs(parseInt(pro_ul.style.marginLeft) / proconwidth());
        pro_count = parseInt(pro_number) + parseInt(pro_count);
        if ((parseInt(pro_count) + parseInt(pro_number)) > 20) {
            //如果是6662的情况，当等于18时，18+6>20,直接让盒子变成20-6，就是剩下的都显示，
            console.log("显示剩下的");
            pro_count = 20 - pro_number;
            console.log(parseInt(pro_lieidth_fun() * pro_count));
            pro_ul.style.marginLeft = "-" + parseInt(proconwidth() * pro_count) + "px";
            return;
        }
        pro_ul.style.marginLeft = "-" + parseInt(proconwidth() * pro_count) + "px";
    } else {
        pro_number == pro_number_now;
        pro_count = Math.abs(parseInt(pro_ul.style.marginLeft) / proconwidth());
        pro_count = parseInt(pro_number) + parseInt(pro_number_now);
        if ((parseInt(pro_count) + parseInt(pro_number_now)) > 20) {
            console.log("显示剩下的");
            //如果是6662的情况，当等于18时，18+6>20,直接让盒子变成20-6，就是剩下的都显示，
            pro_count = 20 - pro_number_now;
            pro_ul.style.marginLeft = "-" + parseInt(proconwidth() * pro_count) + "px";
            return;
        }
        pro_ul.style.marginLeft = "-" + parseInt(proconwidth() * pro_count) + "px";
    }
})

function prolli_width() {
    var pro_li_wid = pro_li.offsetWidth;
    return pro_li_wid;
}
pro_left.addEventListener('click', event => {
    // var clickflag = 2;
    var pro_number_now = (pro_con.offsetWidth / pro_lieidth_fun()).toFixed();
    if (pro_number == pro_number_now) {
        // 表示页面点击之后第一个盒子是第几个li(pro_count),
        //pro_number就是获取567但是在click之前就获取好了
        var pro_count = Math.abs(parseInt(pro_ul.style.marginLeft) / proconwidth());
        console.log(pro_count);
        pro_number_now = (pro_con.offsetWidth / pro_lieidth_fun()).toFixed();
        // 如果没有进行缩放页面,当前的number与现在的number相同
        pro_count = parseInt(pro_count) - parseInt(pro_number);
        if ((parseInt(pro_count) - parseInt(pro_number_now)) < 20) {
            console.log("显示剩下的");
            pro_count = 0;
            pro_ul.style.marginLeft = "-" + parseInt(proconwidth() * pro_count) + "px";
            return;
        }
        pro_ul.style.marginLeft = "-" + parseInt(pro_count * proconwidth()) + "px";
    } else {
        pro_number == pro_number_now;
        pro_count = Math.abs(parseInt(pro_ul.style.marginLeft) / proconwidth());
        pro_count = parseInt(pro_count) - parseInt(pro_number);
        if ((parseInt(pro_count) - parseInt(pro_number_now)) < 20) {
            console.log("显示剩下的");
            //如果是6662的情况，当等于18时，18+6>20,直接让盒子变成20-6，就是剩下的都显示，
            pro_count = 0;
            pro_ul.style.marginLeft = "-" + parseInt(proconwidth() * pro_count) + "px";
            return;
        }
        pro_ul.style.marginLeft = "-" + parseInt(pro_count * proconwidth()) + "px";
    }
})

window.addEventListener('resize', () => {
    if (window.innerWidth >= 1350 && window.innerWidth <= 1683) {
        pro_ul.style.marginLeft = "-" + parseInt(229 * pro_count) + "px";
    } else if (window.innerWidth >= 1684 && window.innerWidth <= 1899) {
        pro_ul.style.marginLeft = "-" + parseInt(239 * pro_count) + "px";
    } else if (window.innerWidth >= 1900) {
        pro_ul.style.marginLeft = "-" + parseInt(236 * pro_count) + "px";
    } else {
        pro_ul.style.marginLeft = "-" + parseInt(227 * pro_count) + "px";
    }
})

function proconwidth() {
    if (window.innerWidth >= 1350 && window.innerWidth <= 1683) {
        pro_li_widthnow = 229;
    } else if (window.innerWidth >= 1684 && window.innerWidth <= 1899) {
        pro_li_widthnow = 239;
    } else if (window.innerWidth >= 1900) {
        pro_li_widthnow = 236;
    } else {
        pro_li_widthnow = 227;
    }
    return pro_li_widthnow;
}
pro_li_widthnow = proconwidth();



// 粘性导航栏动画效果

var navli_i = document.getElementsByClassName("navli_i");
var dialog = document.getElementsByClassName("dialog");
var navli = document.getElementsByClassName("navli");
console.log(navli);
console.log(dialog);
var dialog1 = document.getElementById("dialog1");
for (var i = 0; i < navli.length; i++) {
    navigationfun(i);
}

function navigationfun(index) {
    navli[index].addEventListener('mouseover', (event) => {
        console.log(event.target);
        if (index == 0) {
            console.log(0);
            if (window.innerWidth < 1683) {
                dialog[index].style.height = "173px";
            } else {
                dialog[index].style.height = "237px";
            }
        }
        if (index == 1) {
            console.log(1);
            if (window.innerWidth < 1683) {
                dialog[index].style.height = "225px";
            } else {
                dialog[index].style.height = "293px";
            }
        }
        if (index == 2) {
            if (window.innerWidth < 1683) {
                dialog[index].style.height = "141px";
            } else {
                dialog[index].style.height = "188px";
            }
        }
        if (index == 3) {
            if (window.innerWidth < 1683) {
                dialog[index].style.height = "347px";
            } else {
                dialog[index].style.height = "443px";
            }
        }
        navli_i[index].style.background = "url(https://p3.img.cctvpic.com/photoAlbum/templet/common/DEPA1628231077516717/icon2.png) no-repeat center center";
        navli_i[index].classList.remove("animation-rotate180");
        navli_i[index].classList.add("animation-rotate");
        dialog[index].style.boxShadow = "0px 2px 4px 2px rgb(0 0 0 / 20%)";
    })
    navli[index].addEventListener('mouseout', () => {
        dialog[index].style.height = "0px";
        navli_i[index].style.background = "url(https://p3.img.cctvpic.com/photoAlbum/templet/common/DEPA1628231077516717/icon1.png) no-repeat center center";
        navli_i[index].classList.remove("animation-rotate");
        navli_i[index].classList.add("animation-rotate180");
        dialog[index].style.boxShadow = "none";
    })
}



// 粘性导航的栏目大全内容渲染
{
    var dialog1_material = {
        href: {
            0: "https://tv.cctv.com/cctv1/index.shtml",
            1: "https://tv.cctv.com/cctv2/index.shtml",
            2: "https://tv.cctv.com/cctv3/index.shtml",
            3: "https://tv.cctv.com/cctv4asia/index.shtml",
            4: "http://tv.cctv.com/cctv4europe/index.shtml",
            5: "https://tv.cctv.com/cctv4america/index.shtml",
            6: "https://tv.cctv.com/cctv5/index.shtml",
            7: "https://tv.cctv.com/cctv5plus/index.shtml",
            8: "https://tv.cctv.com/cctv6/index.shtml",
            9: "https://tv.cctv.com/cctv7/index.shtml",
            10: "https://tv.cctv.com/cctv8/index.shtml",
            11: "https://tv.cctv.com/cctv9/index.shtml",
            12: "https://tv.cctv.com/cctv10/index.shtml",
            13: "https://tv.cctv.com/cctv11/index.shtml",
            14: "https://tv.cctv.com/cctv12/index.shtml",
            15: "https://tv.cctv.com/cctv13/index.shtml",
            16: "https://tv.cctv.com/cctv14/index.shtml",
            17: "https://tv.cctv.com/cctv15/index.shtml",
            18: "https://tv.cctv.com/cctv16",
            19: "https://tv.cctv.com/cctv17/index.shtml",
            20: "https://tv.cctv.com/igocctv/index.shtml",
        },
        src: {
            0: "https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2021/8/16/1629103584480_890.png",
            1: "https://p4.img.cctvpic.com/photoAlbum/page/performance/img/2021/8/16/1629103580398_438.png",
            2: "https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2021/8/16/1629103576424_839.png",
            3: "https://p5.img.cctvpic.com/photoAlbum/page/performance/img/2021/9/2/1630550058411_61.png",
            4: "https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2021/9/2/1630550072014_112.png",
            5: "https://p4.img.cctvpic.com/photoAlbum/page/performance/img/2021/9/2/1630550081230_815.png",
            6: "https://p4.img.cctvpic.com/photoAlbum/page/performance/img/2021/8/16/1629103564221_455.png",
            7: "https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2021/8/16/1629103559889_527.png",
            8: "https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2021/8/16/1629103555008_27.png",
            9: "https://p5.img.cctvpic.com/photoAlbum/page/performance/img/2021/10/27/1635316384588_606.png",
            10: "https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2021/8/16/1629103545840_281.png",
            11: "https://p3.img.cctvpic.com/photoAlbum/page/performance/img/2021/8/16/1629103541537_570.png",
            12: "https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2021/8/16/1629103522202_464.png",
            13: "https://p1.img.cctvpic.com/photoAlbum/page/performance/img/2021/8/16/1629103518125_115.png",
            14: "https://p1.img.cctvpic.com/photoAlbum/page/performance/img/2021/8/16/1629103514143_75.png",
            15: "https://p3.img.cctvpic.com/photoAlbum/page/performance/img/2021/8/16/1629103509483_94.png",
            16: "https://p1.img.cctvpic.com/photoAlbum/page/performance/img/2021/8/16/1629103504911_769.png",
            17: "https://p1.img.cctvpic.com/photoAlbum/page/performance/img/2021/8/16/1629103498267_722.png",
            18: "https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2021/10/25/1635161516494_338.png",
            19: "https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2021/8/16/1629103493765_400.png",
            20: "https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2021/9/30/1632991649680_885.png"
        }
    }

    var column_all_ul = document.getElementById("column_all_ul");
    var column_all_ul_str = "";
    for (var i in dialog1_material.href) {
        column_all_ul_str += `
    <li>
        <a href="${ dialog1_material.href[i] }">
            <img src="${ dialog1_material.src[i] }" alt="">
        </a>
    </li>
    `;
    }
    column_all_ul_str += `<div class='clear'></div>`
    column_all_ul.innerHTML = column_all_ul_str;
    var column_all_li = document.getElementById("navigation_ul").getElementsByTagName('li');
    column_all_li[8].classList.add('last');
    column_all_li[17].classList.add('last');
    var allpd1_ul = document.getElementById("allpd1_ul");
    allpd1_ul.innerHTML = column_all_ul_str;
    var nav_dia_ul = document.getElementById("nav_dia_ul");
    nav_dia_ul.innerHTML = column_all_ul_str;
    // 综合
    var dia_material = [
        ["新闻联播", "焦点访谈", "等着我", "晚间新闻"],
        ["经典咏流传", "挑战不可能", "故事里的中国", "今日说法"],
        ["时代楷模发布厅", "开讲啦", "我有传家宝", "第一动画乐园"],
        ["动物世界", "人与自然", "正大综艺", "人口"],
        ["国际艺苑", "生活提示", "中华民族", "秘境之眼"],
        ["典籍里的中国", "美术经典中的党史", "中国诗词大会", "生活圈"]
    ];
    // 财经
    var dia_material2 = [
        ["对话", "经济半小时", "经济信息联播", "第一时间"],
        ["消费主张", "是真的吗", "创业英雄汇", "一槌定音"],
        ["生财有道", "职场健康课", "央视财经评论", "回家吃饭"],
        ["中国经济大讲堂", "正点财经", "天下财经", "生活家"],
        ["魅力中国城"]
    ]
    // 综艺
    var dia_material3 = [
        ["金牌喜剧班", "我的艺术清单", "走在回家的路上", "你好生活第三季"],
        ["舞蹈世界", "文化十分", "越战越勇", "黄金100秒"],
        ["星光大道", "开门大吉", "非常6+1", "2020我要上春晚"],
        ["向幸福出发", "艺览天下", "幸福账单", "天天把歌唱"],
        ["回声嘹亮", "喜上加喜", "中国文艺报道"]
    ]
    // 中文国际
    var dia_material4 = [
        ["环球综艺秀", "美食中国", "深度国际", "中国新闻"],
        ["今日关注", "今日亚洲", "中国文艺", "海峡两岸"],
        ["远方的家", "中国舆论场", "国家记忆", "记住乡愁"],
        ["国宝·发现", "今日环球", "华人故事", "中国缘"],
        ["鲁健访谈", "中华医药"]
    ]
    // 体育
    var dia_material5 = [
        ["北京2022", "欧冠开场哨", "天下足球", "体育晨报"],
        ["体坛快讯", "体育新闻", "体育世界", "体谈"],
        ["足球之夜", "篮球公园", "棋牌乐"]
    ]
    // 电影
    var dia_material6 = [
        ["今日影评"],
        ["中国电影报道"]
    ]
    // 国防军事
    var dia_material7 = [
        ["谁是终极英雄", "军事科技", "军营的味道", "军迷行天下"],
        ["五星剧场", "国防军事早报", "防务新观察", "军事报道"],
        ["军歌嘹亮", "砺剑", "讲武堂", "军事纪实"],
        ["老兵你好", "正午国防军事", "军事制高点", "军事纪录"],
        ["第二战场", "兵器面面观", "世界战史", "国防故事"],
        ["军武零距离"]
    ]
    // 电视剧
    var dia_material8 = [
        ["剧说很好看"],
        ["星推荐"]
    ]
    // 记录
    var dia_material9 = [
        ["寰宇视野", "发现", "人文地理", "时代"],
        ["特别呈现", "真相", "自然", "万象"],
        ["9视频", "故事·中国", "活力·源", "微9"]
    ]
    // 科教
    var dia_material10 = [
        ["百家讲坛", "地理·中国", "自然传奇", "味道"],
        ["健康之路", "探索·发现", "透视新科技", "实验现场"],
        ["科幻地带", "科学动物园", "时尚科技秀", "人物·故事"],
        ["考古公开课", "跟着书本去旅行", "百家说故事", "读书"],
        ["解码科技史", "创新进行时", "中国影像方志"]
    ]
    // 戏曲
    var dia_material11 = [
        ["戏曲青年说", "一鸣惊人", "九州大戏台", "CCTV空中剧院"],
        ["中国京剧音配像精粹", "梨园闯关我挂帅", "梨园周刊", "角儿来了"],
        ["过把瘾", "名段欣赏", "青春戏苑", "名家书场"],
        ["宝贝亮相吧", "典藏", "中国京剧像音像集萃", "了不起的戏曲"]
    ]
    // 社会与法
    var dia_material12 = [
        ["警察特训营", "小区大事", "法律讲堂生活版", "一线"],
        ["法律讲堂文史版", "夜线", "热线12", "方圆剧阵"],
        ["夕阳红", "生命线", "见证", "天网"],
        ["从心开始", "现场", "道德观察", "心理访谈"],
        ["热心话", "法治深壹度", "全网追踪", "律师来了"],
        ["决不掉队"]
    ]
    // 新闻
    var dia_material13 = [
        ["焦点访谈", "面对面", "国际时讯", "环球视线"],
        ["每周质量报告", "法治在线", "新闻直播间", "共同关注"],
        ["午夜新闻", "新闻30分", "朝闻天下", "24小时"],
        ["新闻调查", "新闻1+1", "世界周刊", "东方时空"],
        ["新闻周刊", "军情时间到"]
    ]
    // 少儿
    var dia_material14 = [
        ["周末动画片", "快乐体验", "小小智慧树", "智力快车"],
        ["音乐快递", "英雄出少年", "快乐大巴", "动漫世界"],
        ["新闻袋袋裤", "大风车", "七巧板", "大手牵小手"],
        ["智慧树", "动感特区", "动画大放映", "看我72变"],
        ["快乐童行", "风车剧场"]
    ]
    // 音乐
    var dia_material15 = [
        ["乐享汇", "全球中文音乐榜上榜", "一起音乐吧", "影视留声机"],
        ["CCTV音乐厅", "风华国乐", "民歌·中国", "精彩音乐汇"],
        ["中国音乐电视", "乐游天下", "音乐人生", "音乐公开课"],
        ["聆听时刻", "中国节拍", "合唱先锋", "音乐周刊"],
        ["童声唱"]
    ]
    // 体育赛事
    var dia_material16 = [
        ["冰球冰球", "ATP周刊", "冰天雪地"]
    ]
    // 农业农村
    var dia_material17 = [
        ["中国三农报道", "三农群英汇", "乡村大舞台", "我的美丽乡村"],
        ["致富经", "田间示范秀", "乡间纪事", "乡理乡亲"],
        ["乡村振兴面对面", "谁知盘中餐", "乡土中国", "大地讲堂"],
        ["攻坚日记", "地球村日记", "我爱发明", "农业气象"],
        ["超级新农人", "田野里的歌声", "振兴路上"]
    ]

    // 栏目大全
    var dialog_ul2 = document.getElementById("dialog_ul2");
    var dialog_ul2_str = "";
    var dialog_ul2_material = ["综合", "财经", "综艺", "中文国际", "体育", "电影", "国防军事", "电视剧", "纪录", "科教", "戏曲", "社会与法", "新闻", "少儿", "音乐", "体育赛事", "农业农村"];
    for (let i in dialog_ul2_material) {
        dialog_ul2_str += `
    <li class='dia_title'>
        <a class='dia_title_a'>${ dialog_ul2_material[i] }</a>
    </li>
    `
    }
    dialog_ul2.innerHTML = dialog_ul2_str;
}
// 粘性导航的栏目大全效果
{
    function dialmcom_ul_fun(material, str, id) {
        for (var i = 0; i < material.length; i++) {
            str += `
        <li>`
            for (let j = 0; j < material[i].length; j++)
                str += `
            <div class="list">
                <a>${ material[i][j] }</a>
            </div> `
            str += `
        </li>`
        }
        id.innerHTML = str;
    }

    // 综合
    var dialmcom_ul0 = document.getElementById("dialmcom_ul0");
    var dialmcom_ul_str = "";
    dialmcom_ul_fun(dia_material, dialmcom_ul_str, dialmcom_ul0);
    // 财经
    var dialmcom_ul2 = document.getElementById("dialmcom_ul2");
    var dialmcom_ul_str2 = "";
    dialmcom_ul_fun(dia_material2, dialmcom_ul_str2, dialmcom_ul2);
    // 综艺
    var dialmcom_ul3 = document.getElementById("dialmcom_ul3");
    var dialmcom_ul_str3 = "";
    dialmcom_ul_fun(dia_material3, dialmcom_ul_str3, dialmcom_ul3);
    // 中文国际"
    var dialmcom_ul4 = document.getElementById("dialmcom_ul4");
    var dialmcom_ul_str4 = "";
    dialmcom_ul_fun(dia_material4, dialmcom_ul_str4, dialmcom_ul4);
    // 体育"
    var dialmcom_ul5 = document.getElementById("dialmcom_ul5");
    var dialmcom_ul_str5 = "";
    dialmcom_ul_fun(dia_material5, dialmcom_ul_str5, dialmcom_ul5);
    // 电影"
    var dialmcom_ul6 = document.getElementById("dialmcom_ul6");
    var dialmcom_ul_str6 = "";
    dialmcom_ul_fun(dia_material6, dialmcom_ul_str6, dialmcom_ul6);
    // 国防军事"
    var dialmcom_ul7 = document.getElementById("dialmcom_ul7");
    var dialmcom_ul_str7 = "";
    dialmcom_ul_fun(dia_material7, dialmcom_ul_str7, dialmcom_ul7);
    // 电视剧"
    var dialmcom_ul8 = document.getElementById("dialmcom_ul8");
    var dialmcom_ul_str8 = "";
    dialmcom_ul_fun(dia_material8, dialmcom_ul_str8, dialmcom_ul8);
    // 纪录"
    var dialmcom_ul9 = document.getElementById("dialmcom_ul9");
    var dialmcom_ul_str9 = "";
    dialmcom_ul_fun(dia_material9, dialmcom_ul_str9, dialmcom_ul9);

    // 科教"
    var dialmcom_ul10 = document.getElementById("dialmcom_ul10");
    var dialmcom_ul_str10 = "";
    dialmcom_ul_fun(dia_material10, dialmcom_ul_str10, dialmcom_ul10);

    // 戏曲"
    var dialmcom_ul11 = document.getElementById("dialmcom_ul11");
    var dialmcom_ul_str11 = "";
    dialmcom_ul_fun(dia_material11, dialmcom_ul_str11, dialmcom_ul11);

    // 社会与法"
    var dialmcom_ul12 = document.getElementById("dialmcom_ul12");
    var dialmcom_ul_str12 = "";
    dialmcom_ul_fun(dia_material12, dialmcom_ul_str12, dialmcom_ul12);

    // 新闻"
    var dialmcom_ul13 = document.getElementById("dialmcom_ul13");
    var dialmcom_ul_str13 = "";
    dialmcom_ul_fun(dia_material13, dialmcom_ul_str13, dialmcom_ul13);

    // 少儿"
    var dialmcom_ul14 = document.getElementById("dialmcom_ul14");
    var dialmcom_ul_str14 = "";
    dialmcom_ul_fun(dia_material14, dialmcom_ul_str14, dialmcom_ul14);

    // 音乐"
    var dialmcom_ul15 = document.getElementById("dialmcom_ul15");
    var dialmcom_ul_str15 = "";
    dialmcom_ul_fun(dia_material15, dialmcom_ul_str15, dialmcom_ul15);

    // 体育赛事"
    var dialmcom_ul16 = document.getElementById("dialmcom_ul16");
    var dialmcom_ul_str16 = "";
    dialmcom_ul_fun(dia_material16, dialmcom_ul_str16, dialmcom_ul16);

    // 农业农村"
    var dialmcom_ul17 = document.getElementById("dialmcom_ul17");
    var dialmcom_ul_str17 = "";
    dialmcom_ul_fun(dia_material17, dialmcom_ul_str17, dialmcom_ul17);

    var dia_title = document.getElementsByClassName("dia_title");
    // // console.log(dia_title);
    var dialmcom_ul = document.getElementsByClassName("dialmcom_ul");
    for (var i = 0; i < dia_title.length; i++) {
        dis_click_fun(i);

    }
    var dia_title_a = document.getElementsByClassName("dia_title_a");

    function dis_click_fun(index) {
        dia_title[index].addEventListener('click', (event) => {
            dia_title[index].style.background = "white";
            dia_title_a[index].style.color = "#0084ff";
            dia_title_a[index].style.fontWeight = "700";
            dialmcom_ul[index].style.display = "block";
            for (let j = 0; j < dia_title.length; j++) {
                if (index != j) {
                    dialmcom_ul[j].style.display = "none";
                    dia_title[j].style.background = "rgb(242, 242, 242)";
                    dia_title_a[j].style.color = "black";
                    dia_title_a[j].style.fontWeight = "400";
                }
            }
        })
    }
}
// 侧边导航条内容渲染
{
    var float_ul = document.getElementById("float_ul");
    var float_ul_material = ["今日热门", "直播导视", "精品", "片库", "看点", "央视大全", "手机访问", "返回顶部"];
    var float_ul_str = "";
    for (let i in float_ul_material) {
        float_ul_str += `
    <li>
        <a class="float_nav_a${ i }">${ float_ul_material[i] }</a>
    </li>
    `;
    }
    // console.log(float_ul_str);
    float_ul.innerHTML = float_ul_str;
}
// 侧边导航条滚动到对应的位置

var float_li = float_ul.getElementsByTagName('li');
float_li[7].onclick = () => {
    float_li[7].classList.add('cur');
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
float_li[0].onclick = () => {
    float_li[0].classList.add('cur');
    window.scrollTo({
        top: oTopfun0(),
        behavior: "smooth"
    });
}
float_li[1].onclick = () => {
    float_li[1].classList.add('cur');
    window.scrollTo({
        top: oTopfun1(),
        behavior: "smooth"
    });
}
float_li[2].onclick = () => {
    float_li[2].classList.add('cur');
    window.scrollTo({
        top: oTopfun2(),
        behavior: "smooth"
    });
}
float_li[3].onclick = () => {
    float_li[3].classList.add('cur');
    window.scrollTo({
        top: oTopfun3(),
        behavior: "smooth"
    });
}
float_li[4].onclick = () => {
    float_li[4].classList.add('cur');
    window.scrollTo({
        top: oTopfun4(),
        behavior: "smooth"
    });
}
float_li[5].onclick = () => {
    float_li[5].classList.add('cur');
    window.scrollTo({
        top: oTopfun5(),
        behavior: "smooth"
    });
}
// 热门
function oTopfun0() {
    if (window.innerWidth >= 1350 && window.innerWidth <= 1683) {
        top0 = 584.;
    } else if (window.innerWidth >= 1684 && window.innerWidth <= 1899) {
        top0 = 755.;
    } else if (window.innerWidth >= 1900) {
        top0 = 736.;
    } else {
        top0 = 499.;
    }
    return top0;
}
// 直播
function oTopfun1() {
    if (window.innerWidth >= 1350 && window.innerWidth <= 1683) {
        top1 = 1003.;
    } else if (window.innerWidth >= 1684 && window.innerWidth <= 1899) {
        top1 = 1179.;
    } else if (window.innerWidth >= 1900) {
        top1 = 1240.;
    } else {
        top1 = 875.;
    }
    return top1;
}
// 精品
function oTopfun2() {
    if (window.innerWidth >= 1350 && window.innerWidth <= 1683) {
        top2 = 1656.;
    } else if (window.innerWidth >= 1684 && window.innerWidth <= 1899) {
        top2 = 1950.;
    } else if (window.innerWidth >= 1900) {
        top2 = 2022.;
    } else {
        top2 = 1521.;
    }
    return top2;
}
// 片库
function oTopfun3() {
    if (window.innerWidth >= 1350 && window.innerWidth <= 1683) {
        top3 = 2084.;
    } else if (window.innerWidth >= 1684 && window.innerWidth <= 1899) {
        top3 = 2480.;
    } else if (window.innerWidth >= 1900) {
        top3 = 2603.;
    } else {
        top3 = 1867.;
    }
    return top3;
}
// 看点
function oTopfun4() {
    if (window.innerWidth >= 1350 && window.innerWidth <= 1683) {
        top4 = 2494.;
    } else if (window.innerWidth >= 1684 && window.innerWidth <= 1899) {
        top4 = 2980.;
    } else if (window.innerWidth >= 1900) {
        top4 = 3104.;
    } else {
        top4 = 2279.;
    }
    return top4;
}
// 大全
function oTopfun5() {
    if (window.innerWidth >= 1350 && window.innerWidth <= 1683) {
        top5 = 4830.;
    } else if (window.innerWidth >= 1684 && window.innerWidth <= 1899) {
        top5 = 5617.;
    } else if (window.innerWidth >= 1900) {
        top5 = 5417.;
    } else {
        top5 = 4749.;
    }
    return top5;
}
// 当滚动条滚动到相应效果的时候对应的变蓝色

var oTop = document.body.scrollTop || document.documentElement.scrollTop;
// 滚动条高度
function toptop() {
    var oTop = document.body.scrollTop || document.documentElement.scrollTop;
    // console.log(oTop);
    // 今日热门
    if (oTop < oTopfun0()) {
        float_li[0].classList.add('cur');
        for (var j = 0; j < float_li.length; j++) {
            if (j != 0) {
                float_li[j].classList.remove('cur');
            }
        }
    }
    // 直播导视
    if (oTop >= oTopfun0() && oTop < oTopfun1()) {
        float_li[1].classList.add('cur');
        for (var j = 0; j < float_li.length; j++) {
            if (j != 1) {
                float_li[j].classList.remove('cur');
            }
        }
    }
    // 精品
    if (oTop >= oTopfun1() && oTop < oTopfun2()) {
        float_li[2].classList.add('cur');
        for (var j = 0; j < float_li.length; j++) {
            if (j != 2) {
                float_li[j].classList.remove('cur');
            }
        }
    }
    // 片库
    if (oTop >= oTopfun2() && oTop < oTopfun3()) {
        float_li[3].classList.add('cur');
        for (var j = 0; j < float_li.length; j++) {
            if (j != 3) {
                float_li[j].classList.remove('cur');
            }
        }
    }
    // 看点
    if (oTop >= oTopfun3() && oTop < oTopfun4()) {
        float_li[4].classList.add('cur');
        for (var j = 0; j < float_li.length; j++) {
            if (j != 4) {
                float_li[j].classList.remove('cur');
            }
        }
    }
    // 央视大全
    if (oTop >= oTopfun4()) {
        float_li[5].classList.add('cur');
        for (var j = 0; j < float_li.length; j++) {
            if (j != 5) {
                float_li[j].classList.remove('cur');
            }
        }
    }
}

window.addEventListener("scroll", toptop);

float_li[6].innerHTML = `
<a class="float_nav_a">手机访问
    <div class="code" id='float_li_code'>
        <img src="https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2019/11/4/1572837805113_481.jpg">
        <p>扫一扫<br>手机继续看</p>
    </div>
</a>
`;
// 手机访问鼠标移入二维码弹出
var float_li_code = document.getElementById("float_li_code");
float_li[6].addEventListener('mouseover', () => {
    float_li_code.classList.remove("animation_phone_hover");
    float_li_code.classList.add("animation_phone");
})
float_li[6].addEventListener('mouseout', () => {
    float_li_code.classList.remove("animation_phone");
    float_li_code.classList.add("animation_phone_hover");
})

// 点击按钮跳转百度搜索框,js实现
{
    function jumpPage(searchValue) {
        window.location.href = "http://www.baidu.com/s?ie=UTF-8&wd=" + searchValue;
    }
    // 按Enter键,执行事件
    function entersearch(event) {
        if (event.keyCode == 13) {
            to();
        }
    }
    // 按钮点击触发函数
    function to() {
        var searchValue = document.getElementById("firstSearchtext").value;
        jumpPage(searchValue);
    }
}

// 懒加载函数

var lazy_img = document.getElementsByClassName("lazy_img");

// 获取到浏览器顶部的距离
function getTop(e) {
    return e.offsetTop;
}

// 懒加载实现
function lazyload(lazyimg) {
    // 可视区域高度
    var h = window.innerHeight;
    //滚动区域高度
    var s = document.documentElement.scrollTop || document.body.scrollTop;
    for (var i = 0; i < lazyimg.length; i++) {
        if ((h + s) > getTop(lazyimg[i])) {
            lazydoing(i);
        }
    }
}
lazyload(lazy_img);


function lazydoing(i) {
    var temp = new Image();
    temp.src = lazy_img[i].getAttribute('data-src'); //只会请求一次
    temp.onload = function () {
        lazy_img[i].src = lazy_img[i].getAttribute('data-src')
    }
}

// 到距离顶部某个高度是顶部和侧边导航条才出现
var top1;
var navigation_wrapper = document.getElementById("navigation_wrapper");
var float_wrapper = document.getElementById("float_wrapper");
window.onscroll = () => {
    // 滚动执行函数
    lazyload(lazy_img);
    top1 = document.documentElement.scrollTop;
    if (top1 > 500) {
        setTimeout(() => {
            navigation_wrapper.style.opacity = "1";
        }, 500);
        navigation_wrapper.style.display = "block";
        float_wrapper.style.display = "block";
    } else {
        navigation_wrapper.style.opacity = "0";
        navigation_wrapper.style.display = "none";
        float_wrapper.style.display = "none";
    }
}

var password = document.getElementById("password");
var text = document.getElementById("text");
text.addEventListener('click', () => {
    password.style.display = "block";
    text.style.display = "none";
})
window.addEventListener('click', () => {
    password.style.display = "none";
    text.style.display = "block";
})