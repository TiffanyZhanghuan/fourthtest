// 接口调用函数
function ajaxfun(url, callback) {
    const ajax = new XMLHttpRequest();
    ajax.open("GET", url, true);
    ajax.send();
    ajax.onreadystatechange = () => {
        if (ajax.readyState === 4) {
            if (typeof callback !== "function") {
                return;
            }
            if (ajax.status === 200) {
                const {
                    code,
                    data,
                    msg
                } = JSON.parse(ajax.responseText);
                // if (typeof callback === "function") {
                callback(data);
                // return null;
                // }
                return;
            }
            callback("没网了");
        }
    }
}
// 搜索热搜榜
ajaxfun("http://106.52.74.37:8000/getHotSearch", data => {
    // console.log(data);
    const hotSearchData = data.hotSearchData;
    var hotSearchstr = "";
    for (var i = 0; i < hotSearchData.length; i++) {
        hotSearchstr += "<a href='/' target='_blank'><i>" + hotSearchData[i].rank +
            "</i>" + hotSearchData[i].title + "</a>";
    }
    var hotSearchdiv = document.getElementById("hotSearchdiv");
    hotSearchdiv.innerHTML = hotSearchstr;
    var hotSearchdiv2 = document.getElementById("hotSearchdiv2");
    hotSearchdiv2.innerHTML = hotSearchstr;
});

// 轮播图接口
ajaxfun("http://106.52.74.37:8000/getSwiper", data => {
    // console.log(data);
    const liveData = data.liveData;
    // console.log(liveData);
    // 正在热播
    const liveState = liveData.liveState;
    // console.log(liveState);
    const livePlay = liveData.livePlay;
    // console.log(livePlay);
    const imgSrc = livePlay[0].imgSrc;
    // console.log(imgSrc);
    var conslide = "";
    // for(let i in livePlay){
    //     conslide += "<li><div class='image'><a href='/'target='_blank'><img src='" + livePlay[i].imgSrc + "'></a></div>" +
    //         "<div class='title'><a href=' " + livePlay[i].link + "'>" + livePlay[i].name + "</a> </div></li>";
    // }
    // 正在热播轮播图
    for (let i in livePlay) {
        conslide += `
            <li class='conli'>
                <div class="image">
                    <a href="" target="_blank">
                        <img src="${ livePlay[i].imgSrc }" />
                    </a>
                </div>
                <div class="title">
                    <a href="${ livePlay[i].link }" target="_blank">${ livePlay[i].name }</a>
                </div>
            </li>
        `;
    }
    conslide += `<div class='clear'></div>`;
    var conul = document.getElementById("conul");
    var conli = document.getElementById("conul").getElementsByClassName("conli");
    conul.innerHTML = conslide;
    // 右侧导航栏
    // 精彩推荐
    const recommendData = data.recommendData;
    // console.log(recommendData);
    const recomendContent = recommendData.recomendContent;
    // console.log(recomendContent);
    // console.log(recomendContent[0].imgSrc);
    var swiperPagination = document.getElementById("swiper-pagination");
    var bulletstr = "";
    for (let i in recomendContent) {
        bulletstr += `<div class="bullet">
            <a href="/" target="_blank">${ recomendContent[i].title }</a>
        </div>`;
    }
    swiperPagination.innerHTML = bulletstr;
    // 精彩推荐
    var recommendData_container = document.getElementById("recommendData_container");
    var recommendData_str = "";
    for (let i in recomendContent) {
        recommendData_str += `
            <div class="swiper-img" style="display: none;">
                <a href="">
                    <img src="${ recomendContent[i].imgSrc }" alt="">
                </a>
            </div>
        `
    }
    recommendData_container.innerHTML = recommendData_str;
    var bullet = document.getElementById("swiper-pagination").getElementsByClassName("bullet");
    var bulleta = document.getElementById("swiper-pagination").getElementsByTagName("a");
    var recommendimg = document.getElementById("recommendData_container").getElementsByClassName("swiper-img");
    console.log(recommendimg);
    var liveon = document.getElementById("liveon");
    var liveco = document.getElementById("liveco");
    var livePlay_container = document.getElementById("livePlay_container");
    var sliderbtn = document.getElementById("slider-btn");

    var index = 0;
    for (let i = 0; i < bullet.length; i++) {
        // 图片的显示
        bullet[i].addEventListener('mouseover', event => {
            recommendimg[i].style.display = "block";
            bulleta[i].style.color = "#0084ff";
            for (let j = 0; j < bullet.length; j++) {
                if (j != i) {
                    recommendimg[j].style.display = "none";
                    bulleta[j].style.color = "#fff";
                }
            }
            livePlay_container.style.display = "none";
            sliderbtn.style.display = "none";
            liveon.classList.add("onhover");
            liveco.classList.add("cohover");
            // console.log(123);
            clearInterval(playtimer);
            index = i;
            // console.log(index);
        })
        recommendimg[i].addEventListener('mouseout', event => {
            index = i + 1;
            playtimer = setInterval(autoplay, 2000);
            // console.log(546);
        })
        bullet[i].addEventListener('mouseout', event => {
            index = i + 1;
            // console.log(546);
            playtimer = setInterval(autoplay, 2000);
        })
        recommendimg[i].addEventListener('mouseover', () => {
            clearInterval(playtimer);
            // console.log(123);
            index = i + 1;
            // console.log(index);
        })
    }

    liveon.addEventListener('mouseover', event => {
        livePlay_container.style.display = "block";
        sliderbtn.style.display = "block";
        for (let j = 0; j < bullet.length; j++) {
            recommendimg[j].style.display = "none";
            bulleta[j].style.color = "#fff";
        }
        liveon.classList.remove("onhover");
        liveco.classList.remove("cohover");
        // console.log(123);
        // 正在热播文字触发停止计时器
        clearInterval(playtimer);
    })
    // 移除开始计时器
    liveon.addEventListener('mouseout', () => {
        index = 1;
        playtimer = setInterval(autoplay, 2000);
    })
    // 正在热播背景图触发停止计时器
    livePlay_container.addEventListener('mouseover', event => {
        clearInterval(playtimer);
        // console.log(12345);
    })
    // 移除开始
    livePlay_container.addEventListener('mouseout', event => {
        index = 1;
        // console.log(45678);
        playtimer = setInterval(autoplay, 2000);
    })
    // 正在热播里面的列表触发停止计时器
    for (let i = 0; i < conli.length; i++) {
        conli[i].addEventListener('mouseover', event => {
            clearInterval(playtimer);
        })
    }
    // 定时器
    function chanpic(i) {
        recommendimg[i - 1].style.display = "block";
        bulleta[i - 1].style.color = "#0084ff";
        for (let j = 0; j < bullet.length; j++) {
            if (j != i - 1) {
                recommendimg[j].style.display = "none";
                bulleta[j].style.color = "#fff";
            }
        }
        livePlay_container.style.display = "none";
        sliderbtn.style.display = "none";
        liveon.classList.add("onhover");
        liveco.classList.add("cohover");
    }

    function chanpic1() {
        // console.log("chanpic1");
        livePlay_container.style.display = "block";
        sliderbtn.style.display = "block";
        for (let j = 0; j < bullet.length; j++) {
            recommendimg[j].style.display = "none";
            bulleta[j].style.color = "#fff";
        }
        liveon.classList.remove("onhover");
        liveco.classList.remove("cohover");
    }

    function autoplay() {
        if (index == 0) {
            chanpic1();
            index++;
        } else {
            chanpic(index++);
        }
        if (index == 7) {
            index = 0;
        }
        // console.log(index);
    }
    playtimer = setInterval(autoplay, 2000);

})

// 今日热门接口获取
ajaxfun("http://106.52.74.37:8000/getHotTopic", data => {
    // console.log(data);
    const hotTopicData = data.hotTopicData;
    // console.log(hotTopicData);
    var hotTopiclass = ["first", "", "", "", "end3", "end2", "end1", "", "", "", "end3", "end2", "end1"];
    var hotTopstr = "";
    // console.log(hotTopiclass[0].img);
    for (var i = 0; i < hotTopicData.length; i++) {
        hotTopstr += `
        <li class="${ hotTopiclass[i] }">
            <div class="image">
                <a href="${ hotTopicData[i].img.link }" target="_blank">
                    <img src="${ hotTopicData[i].img.src }" alt="">
                </a>
            </div>
            `
        if (i === 0) {
            hotTopstr += `<div class="text">
                            <div class="title">
                                <a href="${ hotTopicData[i].title.link }">${ hotTopicData[i].title.text }</a>
                            </div>
                            <div class="brief">${ hotTopicData[i].brief }</div>
                        </div>`
        } else {
            hotTopstr += `<div class="title">
                            <a target="_blank" href="${ hotTopicData[i].title.link }">${ hotTopicData[i].title.text }</a>
                        </div>
                    </li>`

        }

    }
    var hotTodayul = document.getElementById("hotTodayul");
    hotTodayul.innerHTML = hotTopstr;
});

// 直播导视接口获取
ajaxfun("http://106.52.74.37:8000/getLiveGuide", data => {
    // console.log(data);
    var program_str = "";
    var pro_ul = document.getElementById("pro_ul");
    for (let i in data) {
        // console.log(i);
        program_str += `
         <li>
            <div class="li_con">
                <div class="img">
                    <a href="${ data[i].img.link }" target="_blank">
                        <img src="${ data[i].img.src }"
                            alt="">
                        <span>${ data[i].topic }</span>
                    </a>
                </div>
                <div class="title">
                    <a href="/" target="_blank">${ data[i].time.startTime }-${ data[i].time.endTime+ i }</a>
                </div>
                <div class="brief">
                    <a href="" target="_blank">${ data[i].itemName }</a>
                </div>
            </div>
            <!-- 蓝色的下划线 -->
            <span class="li_line">
            </span>
        </li>
        `
    }
    program_str += `<div class='clear'></div>`
    pro_ul.innerHTML = program_str;
})

// 看点接口获取
ajaxfun("http://106.52.74.37:8000/getHighLight", data => {
    // console.log(data);
    // 视频资源
    var highlightData = data.highlightData;
    // console.log(highlightData);

    // 看点右侧超链接
    var navigation = data.navigation;
    // console.log(navigation);
    var watch_focus_span = document.getElementById("watch_focus_span");
    var watch_focus_span_str = "";
    for (let i in navigation) {
        watch_focus_span_str += `
            <a target="_blank" href="${ navigation[i].link }">${ navigation[i].text }</a>
        `
    }
    watch_focus_span.innerHTML = watch_focus_span_str;

    var watch_focus_li_class = ["", "", "", "end3", "end2", "end1", "", "", "", "end3", "end2", "end1", "", "", "", "end3", "end2", "end1", "", "", "", "end3", "end2", "end1", "", "", "", "end3", "end2", "end1", "", "", "", "end3", "end2", "end1", "", "", "", "end3", "end2", "end1", "", "", "", "end3", "end2", "end1", "", "", "", "end3", "end2", "end1", "", "", "", "end3", "end2", "end1", "", "", "", "end3", "end2", "end1", "", "", "", "end3", "end2", "end1"];
    var watch_focus_ul = document.getElementById("watch_focus_ul");
    var watch_focus_ul_str = "";
    // 只要前18个
    for (var i = 0; i < 18; i++) {
        watch_focus_ul_str += `
            <li class=" ${watch_focus_li_class[i]} ">
                <div class="image">
                    <a href="${ highlightData[i].img.link }" target="_blank">
                        <img src="${ highlightData[i].img.src }" alt="">
                    </a>
                </div>
                <div class="text">
                    <div class="title">
                        <a href="${ highlightData[i].title.link }">
                        ${ highlightData[i].title.text }
                        </a>
                    </div>
                    <div class="brief">
                        <a href="${ highlightData[i].keyword.link }">${ highlightData[i].keyword.text }</a>
                    </div>
                </div>
            </li>
        `
    }
    watch_focus_ul_str += "<div class='clear' ></div>";
    watch_focus_ul.innerHTML = watch_focus_ul_str;


    // 听音
    var listen_voice_ul = document.getElementById("listen_voice_ul");
    // 19+18
    var listen_voice_ul_str = "";
    for (var i = 18; i < 36; i++) {
        listen_voice_ul_str += `
        <li class=" ${watch_focus_li_class[i]} ">
            <div class="image">
                <a href="${ highlightData[i].img.link }" target="_blank">
                    <img src="${ highlightData[i].img.src }" alt="">
                </a>
            </div>
            <div class="text">
                <div class="title">
                    <a href="${ highlightData[i].title.link }">
                    ${ highlightData[i].title.text }
                    </a>
                </div>
                <div class="brief">
                    <a href="${ highlightData[i].keyword.link }">${ highlightData[i].keyword.text }</a>
                </div>
            </div>
        </li>
    `
    }
    listen_voice_ul_str += "<div class='clear' ></div>";
    listen_voice_ul.innerHTML = listen_voice_ul_str;

    // 年代剧推荐
    var time_play_ul = document.getElementById("time_play_ul");
    var time_play_ul_str = "";
    for (var i = 36; i < 54; i++) {
        time_play_ul_str += `
        <li class=" ${watch_focus_li_class[i]} ">
            <div class="image">
                <a href="${ highlightData[i].img.link }" target="_blank">
                    <img src="${ highlightData[i].img.src }" alt="">
                </a>
            </div>
            <div class="text">
                <div class="title">
                    <a href="${ highlightData[i].title.link }">
                    ${ highlightData[i].title.text }
                    </a>
                </div>
                <div class="brief">
                    <a href="${ highlightData[i].keyword.link }">${ highlightData[i].keyword.text }</a>
                </div>
            </div>
        </li>
    `
    }
    time_play_ul_str += "<div class='clear' ></div>";
    time_play_ul.innerHTML = time_play_ul_str;
})

// 央视大全接口
ajaxfun("http://106.52.74.37:8000/getProgram", data => {
    // console.log(data);
    var programData = data.programData;
    // console.log(programData);
    // var cctv_daqo_button_tbody = document.getElementById("cctv_daqo_button_tbody");
    let cctv_daqo_button_tr1 = document.getElementById("cctv_daqo_button_tr1");
    var cctv_daqo_button_str1 = "";
    var cctv_daqo_button_tr2 = document.getElementById("cctv_daqo_button_tr2");
    var cctv_daqo_button_str2 = "";
    var cctv_daqo_button_td = document.getElementsByClassName("cctv_daqo_button_td");
    var cctv_daqo_box = document.getElementsByClassName("cctv_daqo_box");
    // 第一列
    for (var i = 0; i < 9; i++) {
        cctv_daqo_button_str1 += `
            <td class="cctv_daqo_button_td `
        if (i == 0) {
            cctv_daqo_button_str1 += `cur`
        }
        cctv_daqo_button_str1 += `">
                <a>
                    ${ programData[i].name }
                    <br/>
                    <i>${ programData[i].topic }</i>
                </a>
                <span></span>
            </td>
        `
    }
    cctv_daqo_button_tr1.innerHTML = cctv_daqo_button_str1;
    // 第二列
    for (var i = 9; i < 18; i++) {
        cctv_daqo_button_str2 += `
            <td class="cctv_daqo_button_td">
                <a>
                    ${ programData[i].name }
                    <br/>
                    <i>${ programData[i].topic }</i>
                </a>
                <span></span>
            </td>
        `
    }
    cctv_daqo_button_tr2.innerHTML = cctv_daqo_button_str2;
    // 点击变红函数
    function cctv_daqo_button_fun(i) {
        cctv_daqo_button_td[i].onclick = () => {
            cctv_daqo_button_td[i].classList.add('cur');
            cctv_daqo_box[i].style.display = "block";
            for (let j in cctv_daqo_button_td) {
                // try {
                var result = cctv_daqo_button_td[j].className.search('cur');
                // } catch (i) {
                //     console.log("");
                // }
                if (result > 0) {
                    if (i != j) {
                        // try {
                        cctv_daqo_button_td[j].classList.remove('cur');
                        cctv_daqo_box[j].style.display = "none";
                        // } catch (i) {
                        //     console.log("");
                        // }
                    }
                }
            }
        }
    }
    // 调用点击变红函数
    for (let i in cctv_daqo_button_td) {
        cctv_daqo_button_fun(i);
    }

    var cctv_daqo_material = {
        a1: {
            0: "晚间新闻",
            1: "探秘三星堆（一套）-10",
            2: "综艺喜乐汇-2022-729 国家宝藏展演季 惟石能言",
            3: "新闻联播",
            4: "足球之夜-特别节目-瞬息万变",
            5: "实况录像-2022年世界女排联赛总决赛 1/4决赛精选3",
            6: "大罗剑侠",
            7: "对手3/37",
            8: "大决战第16集",
            9: "故事中国2022-230",
            10: "科学动物园-2022-32",
            11: "人世间（精编版）22/58",
            12: "热线12-2022-158",
            13: "环球视线",
            14: "淬火成钢-31/34",
            15: "合唱先锋2022-65-歌声与微笑",
            16: "实况录像（奥林匹克）-2022年世界田径锦标赛 7",
            17: "我爱发明-2022-141"
        },
        a2: {
            0: "荣宝斋（一套）-2022-3",
            1: "职场健康课-2022-32",
            2: "综艺喜乐汇-2022-619 小舍得 16/42",
            3: "觉醒年代-（四套）-33/43",
            4: "实况录像-2022年世界击剑锦标赛 3",
            5: "实况录像-2021/2022赛季世界斯诺克锦标赛 精选3",
            6: "音乐电影欣赏",
            7: "对手4/37",
            8: "湾区儿女第14集",
            9: "活力·源2022-249",
            10: "自然传奇-2022-186",
            11: "人世间（精编版）23/58",
            12: "天网-2022-158",
            13: "24小时",
            14: "淬火成钢-32/34",
            15: "CCTV音乐厅-2022-224-名家名曲（118）",
            16: "实况录像（奥林匹克）-北京冬奥会 单板滑雪男子U型场地决赛",
            17: "田间示范秀-2022-204"
        }
    };


    var cctv_daqo_con = document.getElementById("cctv_daqo_con");
    var programList = programData[0].programList[1];
    // console.log(programList);
    var cctv_daqo_con_str = "";
    for (let i in programData) {
        cctv_daqo_con_str += `
            <div class="cctv_daqo_box">
                <div class="cctv_daqo_box_left">
                    <div class="imgbox">
                        <div class="image">
                            <a href="${ programData[i].img.link }" target="_blank">
                                <img src="${ programData[i].img.src }"
                                    alt="">
                            </a>
                        </div>
                        <div class="text">
                            <p>正在播出：</p>
                            <a href="" target="_blank">${ cctv_daqo_material.a1[i] }</a>
                            <p>精彩预告：</p>
                            <a href="">${ cctv_daqo_material.a2[i] }</a>
                        </div>
                    </div>
                </div>
                <div class="cctv_daqo_box_right">
                    <div class="listbox">
                        <table width="100%">
                            <tbody>
                                <tr>
                                `
        for (let j = 0; j < programData[i].programList.length; j++) {
            cctv_daqo_con_str += `
                                    <td>
                                        <a href="${ programData[i].programList[j].href }" target="_blank">${ programData[i].programList[j].text }</a>
                                    </td>`
            if (j % 6 == 5) {
                cctv_daqo_con_str += `</tr>`
            }
        }
        cctv_daqo_con_str += `
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class='clear'></div>
            </div>
        `
    }
    cctv_daqo_con_str += "<div class='clear'></div>"
    cctv_daqo_con.innerHTML = cctv_daqo_con_str;
})