
    var length_effect_material = {
        0: ["https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2022/2/14/1644804550080_310.jpg",
            "https://p5.img.cctvpic.com/photoAlbum/page/performance/img/2022/2/14/1644804553798_792.jpg"
        ],
        1: ["https://p5.img.cctvpic.com/photoAlbum/page/performance/img/2021/11/1/1635750815955_286.jpg",
            "https://p3.img.cctvpic.com/photoAlbum/page/performance/img/2021/11/1/1635750820110_363.jpg"
        ],
        2: ["https://p1.img.cctvpic.com/photoAlbum/page/performance/img/2022/5/23/1653292720850_456.jpg",
            "https://p5.img.cctvpic.com/photoAlbum/page/performance/img/2022/5/23/1653292735771_809.jpg"
        ],
        3: ["https://p4.img.cctvpic.com/photoAlbum/page/performance/img/2021/11/5/1636094495371_928.jpg",
            "https://p1.img.cctvpic.com/photoAlbum/page/performance/img/2021/11/5/1636094501213_495.jpg"
        ],
        4: ["https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2021/11/15/1636960533560_281.jpg",
            "https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2022/2/7/1644203385027_888.jpg"
        ],
        5: ["https://p3.img.cctvpic.com/photoAlbum/page/performance/img/2021/10/25/1635139370993_83.jpg",
            "https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2022/1/10/1641780661149_405.jpg"
        ],
        6: ["https://p4.img.cctvpic.com/photoAlbum/page/performance/img/2022/1/24/1642992333211_593.jpg",
            "https://p3.img.cctvpic.com/photoAlbum/page/performance/img/2022/1/24/1642992327779_190.jpg"
        ],
        7: ["https://p4.img.cctvpic.com/photoAlbum/page/performance/img/2021/10/25/1635139763158_840.jpg",
            "https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2021/10/25/1635139689737_721.jpg"
        ]
    }
    // console.log(length_effect_material[0][0]);
    var length_effect_str = "";
    var length_effect_con = document.getElementById("length_effect_con");
    for (let i in length_effect_material) {
        // console.log(i);
        length_effect_str += `
    <div class="length_effect_item `
        if (i == 5) {
            length_effect_str += `end3`
        }
        if (i == 6) {
            length_effect_str += `end2`
        }
        if (i == 7) {
            length_effect_str += `end1`
        }
        length_effect_str += `">
    
        <!-- 绝对定位脱离文档流 -->
        <div class="img_wrap">
            <div class="img">
                <a href="/"><img src="${ length_effect_material[i][0] }" alt=""></a>
            </div>
            <div class="img_hover">
                <a href="/"><img src="${ length_effect_material[i][1] }" alt=""></a>                         
            </div>
            <div class="clear"></div>
        </div>
    </div>
    `
    }
    length_effect_con.innerHTML = length_effect_str;
    var length_effect_item = document.getElementsByClassName("length_effect_item");
    // console.log();
    // console.log(document.documentElement.clientWidth);
    var mediaWidth = window.innerWidth;
    // console.log(length_effect_material.length);
    var lengthset = undefined;
    var lastElement = undefined;
    var flag = 1;

    function length_effect_ev(i) {
        var lenglast = undefined;

        //1350到1683就是
        // 如果是7个则后三个就是456 就是number-1 -2 -3
        // 获取当前width长度765px
        // 如果i是前四个

        length_effect_item[i].addEventListener('mouseover', function () {

            clearTimeout(lengthset);
            if (window.innerWidth >= 1350 && window.innerWidth <= 1683) {
                length_effect_item[i].style.width = "795px";
            } else if (window.innerWidth >= 1684 && window.innerWidth <= 1899) {
                length_effect_item[i].style.width = "846px";
            } else if (window.innerWidth >= 1900) {
                length_effect_item[i].style.width = "846px";
            } else {
                length_effect_item[i].style.width = "766px";
            }

            var number = 0;
            for (let j = 0; j < length_effect_item.length; j++) {
                if (window.getComputedStyle(length_effect_item[j]).display == "inline-block") {
                    number++;
                }
            }
            console.log(number);
            // 一共又number个盒子
            // 如果触发的是倒数三个就是number-1 -2 -3 就是
            if (i >= number - 3) {
                console.log("嘿嘿");
                if (i == number - 3) {
                    length_effect_item[number - 4].style.width = "0px";
                    length_effect_item[number - 4].style.padding = "0px";
                    length_effect_item[number - 2].style.width = "0px";
                    length_effect_item[number - 2].style.padding = "0px";
                    length_effect_item[number - 1].style.width = "0px";
                    length_effect_item[number - 1].style.padding = "0px";
                    // length_effect_item[number - 5].style.padding = "0px";
                    flag = 0;
                }
            }
            if (i >= number - 2) {
                console.log("嘿嘿");
                if (i == number - 2) {
                    length_effect_item[number - 4].style.width = "0px";
                    length_effect_item[number - 4].style.padding = "0px";
                    length_effect_item[number - 3].style.width = "0px";
                    length_effect_item[number - 3].style.padding = "0px";
                    length_effect_item[number - 1].style.width = "0px";
                    length_effect_item[number - 1].style.padding = "0px";
                    // length_effect_item[number - 5].style.padding = "0px";
                    flag = 0;
                }
            }
            if (i >= number - 1) {
                console.log("嘿嘿");
                if (i == number - 1) {
                    length_effect_item[number - 4].style.width = "0px";
                    length_effect_item[number - 4].style.padding = "0px";
                    length_effect_item[number - 3].style.width = "0px";
                    length_effect_item[number - 3].style.padding = "0px";
                    length_effect_item[number - 2].style.width = "0px";
                    length_effect_item[number - 2].style.padding = "0px";
                    // length_effect_item[number - 5].style.padding = "0px";
                    flag = 0;
                }
            }
        })
        length_effect_item[i].addEventListener('mouseout', function () {
            if (window.innerWidth >= 1350 && window.innerWidth <= 1683) {
                length_effect_item[i].style.width = "185px";
                if (flag == 0) {
                    for (let j = 0; j < length_effect_item.length; j++) {
                        length_effect_item[j].removeAttribute('style');
                    }
                }
                lengthset = setTimeout(() => {
                    for (let j = 0; j < length_effect_item.length; j++) {
                        length_effect_item[j].removeAttribute('style');
                    }
                }, 700)
            } else if (window.innerWidth >= 1684 && mediaWidth <= 1899) {
                length_effect_item[i].style.width = "198px";
                if (flag == 0) {
                    for (let j = 0; j < length_effect_item.length; j++) {
                        length_effect_item[j].removeAttribute('style');
                    }
                }
                lengthset = setTimeout(() => {
                    for (let j = 0; j < length_effect_item.length; j++) {
                        length_effect_item[j].removeAttribute('style');
                    }
                }, 700)
            } else if (window.innerWidth >= 1900) {
                length_effect_item[i].style.width = "198px";
                if (flag == 0) {
                    for (let j = 0; j < length_effect_item.length; j++) {
                        length_effect_item[j].removeAttribute('style');
                    }
                }
                lengthset = setTimeout(() => {
                    for (let j = 0; j < length_effect_item.length; j++) {
                        length_effect_item[j].removeAttribute('style');
                    }
                }, 700)
            } else {
                length_effect_item[i].style.width = "178px";
                if (flag == 0) {
                    for (let j = 0; j < length_effect_item.length; j++) {
                        length_effect_item[j].removeAttribute('style');
                    }
                }
                lengthset = setTimeout(() => {
                    for (let j = 0; j < length_effect_item.length; j++) {
                        length_effect_item[j].removeAttribute('style');
                    }
                }, 700)
            }
        })
    }
    for (let i = 0; i < length_effect_item.length; i++) {
        length_effect_ev(i);
    }
