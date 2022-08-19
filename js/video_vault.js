window.onload = function () {

    // 片库素材
    let video_vault_menu = {
        // 电影类型
        label: {
            0: ["都市", "革命", "农村", "战争", "谍战", "古装", "其他", "都市"],
            1: ["剧情", "冒险", "奇幻", "益智", "童话", "亲子", "校园", "益智"],
            2: ["人文历史", "社会", "人文历史", "自然", "人文历史", "探索", "人文历史", "社会"],
            3: ["科教", "青少", "新闻", "青少", "经济", "新闻", "新闻", "新闻"]
        },
        // 鼠标移动后出现的视频
        hover_gif: {
            0: ["https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2022/7/27/1658888624686_203.gif",
                "https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2021/7/21/1626852030029_385.gif",
                "https://p3.img.cctvpic.com/photoAlbum/page/performance/img/2022/7/18/1658110622654_790.gif",
                "https://p3.img.cctvpic.com/photoAlbum/page/performance/img/2022/7/14/1657763032556_615.gif",
                "https://p4.img.cctvpic.com/photoAlbum/page/performance/img/2021/10/21/1634801325805_44.gif",
                "https://p3.img.cctvpic.com/photoAlbum/page/performance/img/2022/1/4/1641278735603_806.gif",
                "https://p3.img.cctvpic.com/photoAlbum/templet/common/DEPA1628231077516717/zwPic1_1.gif",
                "https://p3.img.cctvpic.com/photoAlbum/templet/common/DEPA1628231077516717/zwPic1_1.gif"
            ],
            1: ["https://p3.img.cctvpic.com/photoAlbum/templet/common/DEPA1628231077516717/zwPic1_1.gif",
                "https://p3.img.cctvpic.com/photoAlbum/templet/common/DEPA1628231077516717/zwPic1_1.gif",
                "https://p4.img.cctvpic.com/photoAlbum/page/performance/img/2021/9/13/1631512495143_635.gif",
                "https://p3.img.cctvpic.com/photoAlbum/page/performance/img/2020/11/17/1605582270263_466.gif",
                "https://p4.img.cctvpic.com/photoAlbum/page/performance/img/2021/12/20/1639977809271_987.gif",
                "https://p5.img.cctvpic.com/photoAlbum/page/performance/img/2022/7/11/1657505974674_166.gif",
                "https://p3.img.cctvpic.com/photoAlbum/page/performance/img/2022/3/22/1647914608562_333.gif",
                "https://p3.img.cctvpic.com/photoAlbum/templet/common/DEPA1628231077516717/zwPic1_1.gif"
            ],
            2: ["https://p3.img.cctvpic.com/photoAlbum/templet/common/DEPA1628231077516717/zwPic1_1.gif",
                "https://p3.img.cctvpic.com/photoAlbum/page/performance/img/2020/12/14/1607936528092_607.gif",
                "https://p3.img.cctvpic.com/photoAlbum/templet/common/DEPA1628231077516717/zwPic1_1.gif",
                "https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2021/9/30/1632987877963_674.gif",
                "https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2020/11/16/1605515202780_234.gif",
                "https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2020/12/17/1608175049951_205.gif",
                "https://p3.img.cctvpic.com/photoAlbum/templet/common/DEPA1628231077516717/zwPic1_1.gif",
                "https://p3.img.cctvpic.com/photoAlbum/templet/common/DEPA1628231077516717/zwPic1_1.gif"
            ],
            3: ["https://p4.img.cctvpic.com/photoAlbum/page/performance/img/2021/4/25/1619330668522_492.gif",
                "https://p1.img.cctvpic.com/photoAlbum/page/performance/img/2022/7/18/1658111104366_893.gif",
                "https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2021/3/1/1614573391909_993.gif",
                "https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2020/12/24/1608782310548_0.gif",
                "https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2021/10/27/1635322781385_600.gif",
                "https://p1.img.cctvpic.com/photoAlbum/page/performance/img/2022/6/27/1656295615883_28.gif",
                "https://p3.img.cctvpic.com/photoAlbum/templet/common/DEPA1628231077516717/zwPic1_1.gif",
                "https://p3.img.cctvpic.com/photoAlbum/templet/common/DEPA1628231077516717/zwPic1_1.gif"
            ]
        },
        // 电影名字
        common_h3: {
            0: ["《小镇警事》", "《烽火抗大》", "《高山清渠》", "《滹沱儿女》", "《密查》", "《少年神探狄仁杰》", "《家道颖颖之大考2020》", "《生活万岁》"],
            1: ["《小精灵萨米》", "《百变校巴》第八季", "《小神驾到》", "《熊猫博士》", "《布鲁斯特公鸡》", "《小鹿蓝蓝》", "《大王日记》", "《超级工程小分队》"],
            2: ["《古书复活记》", "《篮球少年》", "《永恒之轴》", "《祁连山国家公园》", "《炮火下的国宝》", "《水下中国》", "《河西走廊（2022）》", "《城市之岛》"],
            3: ["《飞向月球》第二季", "《推开世界的门》", "《交通中国》", "《远方的童谣》", "《脱贫，健康先行》", "《香江永奔流》", "《直播大湾区》", "《大美边疆行》"]
        },
        // 电影介绍
        hover_span: {
            0: ["带您走进虎啸镇派出所，和所长郑路生、教导员吴迪、警花魏凌一起体味基层警察的工作和生活。", "讲述了抗日军政大学从筹备、建设到管理的艰难过程，讴歌抗大顽强不屈、艰苦奋斗的传统和精神。",
                "主要表现了黄大发由一名普通的农民成长为一名优秀的中国共产党党员的过程。", "根据严肃报告文学作品《寻找平山团》改编而来，讲的是在抗日战争期间成长起来的平山团的故事。",
                "该剧讲述了在国共合作的关键时期，共产党高级将领宣侠父离奇失踪，中共地下党员武仲明介入调查真相的故事。",
                "该剧以古代悬疑推理破案为题材，讲述盛唐时期，少年狄仁杰上京都参加明经考试之后所遭遇的一系列故事。",
                "主人公作为驻村第一书记，在脱贫攻坚战中秉持“扶人先扶人心”理念，最后成功帮助贫困户脱贫致富的感人故事。",
                "讲述父亲老曾在昏迷醒来后反思自我，帮助四个子女找回生活、理解生活、拥抱生活的温情故事。"
            ],
            1: ["该片讲述的是一只叫作萨米的小精灵和5个孩子生活在一起的故事。", "校巴游学团将开启全新的游学之旅，在百变校巴的带领下，与奇思妙想的游学团们共同解决问题，共同成长。",
                "中国首部神话题材科普动画，让孩子主动去探索世界、观察世界，并实现孩子内心的幻想。", "每当小伙伴遇到问题，熊猫博士总会施以援手，面对未知的挑战和问题，他总是有许多解决方法。",
                "每当有朋友提出问题，或是遇到困难, 布鲁斯特公鸡和小女孩玛吉就会到一个奇妙的世界中去寻求解决办法。", "本片讲述了在松鼠小镇中生活的小鹿蓝蓝与家人、朋友的日常生活。",
                "从一只名叫“大王”的橘猫视角切入，讲述了前来支教的小王老师与一群乡村小学的孩子们之间发生的故事。", "建造、拆除、维修！当阳光海湾需要翻新，就一定能看到超级工程小分队的身影。"
            ],
            2: ["本片采访拍摄数十位古籍保护专家与学者，记录他们在工作中的行动与努力，探寻背后的付出与坚持。", "通过对一支少年篮球队的观察，记录热血青春下的勇于追求、拼搏的果敢精神，以及他们内心深处的自我成长。",
                "以北京中轴线为叙述主题，围绕不同时代发生的人与事展开叙述，解读中轴线的文化内涵及文化价值。", "通过祁连山野生动物的故事，展示了祁连山完整的生物链，记录生活在这里的野生动物的生存状况。",
                "展现抗战期间中国珍贵古籍的坎坷命运，讲述抢救保护古籍的艰辛故事，赞美守护文明的抗争精神。", "通过独特视角，展现中国境内多彩的水下世界，发现鲜为人知的水下秘境，感受不一样的美。",
                "系统梳理了河西走廊甚至整个中国西部的历史，呈现出跨越千年的雄壮、辉煌与苍凉。", "生活在崇明岛的人们经历着从向自然索取，到将生态破坏，再到与自然和谐共处的探索之路。"
            ],
            3: ["用大量独家一手素材或首次公开的科学成果，为观众深入浅出地解读月球探索中的中国智慧。", "以符合青少年收视特点的精品纪录片为主要内容，帮助孩子们在暑期生活中开拓视野了解世界。",
                "本片全方位、立体化、多角度展示新中国的交通事业，记录中国交通人沧桑追梦的建设征程。", "在民间音乐、民俗文化、地域生存环境的大背景下，发掘梳理优秀童谣，探究其隐藏的文化基因。",
                "健康扶贫，是脱贫攻坚战中的一场重要战役。此片展现了我国健康扶贫的历史性成就。", "全景式呈现香港回归祖国后，特别是党的十八大以来，香港取得的历史性成就、历史性变革和未来的光明前景。",
                "通过访谈、短片、连线等方式，多角度为您讲述发生在大湾区的人物故事。", "通过空中、水下、360度等独特视角，展现边疆的江宽海阔，物阜民丰，生活巨变。"
            ]

        },
        // common图片的地址
        common_src: {
            0: ["https://p4.img.cctvpic.com/photoAlbum/page/performance/img/2022/7/27/1658888416098_5.jpg",
                "https://p3.img.cctvpic.com/photoAlbum/page/performance/img/2021/7/21/1626850585315_375.jpg",
                "https://p1.img.cctvpic.com/photoAlbum/page/performance/img/2022/7/18/1658110455054_945.jpg",
                "https://p3.img.cctvpic.com/photoAlbum/page/performance/img/2022/7/14/1657762694384_670.jpg",
                "https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2021/10/21/1634800841155_191.jpg",
                "https://p4.img.cctvpic.com/photoAlbum/page/performance/img/2022/1/4/1641278460145_600.jpg",
                "https://p4.img.cctvpic.com/photoAlbum/page/performance/img/2021/10/11/1633935446002_618.jpg",
                "https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2021/3/4/1614839149714_872.jpg"
            ],
            1: ["https://p3.img.cctvpic.com/photoAlbum/page/performance/img/2022/7/28/1658972022264_702.jpg",
                "https://p4.img.cctvpic.com/photoAlbum/page/performance/img/2022/7/22/1658453576831_947.jpg",
                "https://p4.img.cctvpic.com/photoAlbum/page/performance/img/2021/9/13/1631512489815_153.jpg",
                "https://p3.img.cctvpic.com/photoAlbum/page/performance/img/2020/11/17/1605582264893_551.jpg",
                "https://p5.img.cctvpic.com/photoAlbum/page/performance/img/2021/12/20/1639977530445_240.jpg",
                "https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2022/7/11/1657505720279_774.jpg",
                "https://p4.img.cctvpic.com/photoAlbum/page/performance/img/2022/3/22/1647914305160_964.jpg",
                "https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2021/9/27/1632707789851_119.jpg"
            ],
            2: ["https://p5.img.cctvpic.com/photoAlbum/page/performance/img/2021/1/27/1611728351753_202.jpg",
                "https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2020/12/14/1607936523487_340.jpg",
                "https://p4.img.cctvpic.com/photoAlbum/page/performance/img/2021/2/3/1612328177639_582.jpg",
                "https://p3.img.cctvpic.com/photoAlbum/page/performance/img/2021/9/30/1632987875302_149.jpg",
                "https://p4.img.cctvpic.com/photoAlbum/page/performance/img/2020/11/16/1605515199462_891.jpg",
                "https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2020/12/17/1608175045212_162.jpg",
                "https://p4.img.cctvpic.com/photoAlbum/page/performance/img/2022/7/4/1656928493852_745.jpg",
                "https://p1.img.cctvpic.com/photoAlbum/page/performance/img/2020/12/15/1608015802083_917.jpg"
            ],
            3: ["https://p4.img.cctvpic.com/photoAlbum/page/performance/img/2021/4/25/1619330838485_266.jpg",
                "https://p5.img.cctvpic.com/photoAlbum/page/performance/img/2022/7/18/1658110989031_615.jpg",
                "https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2021/3/1/1614573383060_252.jpg",
                "https://p4.img.cctvpic.com/photoAlbum/page/performance/img/2020/12/24/1608782305445_517.jpg",
                "https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2021/10/27/1635322456615_889.jpg",
                "https://p3.img.cctvpic.com/photoAlbum/page/performance/img/2022/6/27/1656295536826_539.jpg",
                "https://p4.img.cctvpic.com/photoAlbum/page/performance/img/2022/6/21/1655776486082_94.jpg",
                "https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2022/6/19/1655651049783_492.jpg"
            ]
        }
    }
    // 获取ul父级节点
    var video_vault_inside = document.getElementById("video_vault_inside");
    // 创建空字符串
    var video_vault_str = "";

    for (var i = 0; i < 4; i++) {
        video_vault_str += `
					<ul class="video_vault_ul `
        if (i == 0) {
            video_vault_str += `visible`
        } else {
            video_vault_str += `invisible`
        }
        video_vault_str += `" id="video_vault_ul">
					`
        for (let j in video_vault_menu.label[0]) {
            video_vault_str += `
						<li style="z-index: 1;" class="video_vault_li `
            if (j == 5) {
                video_vault_str += `end3`
            }
            if (j == 6) {
                video_vault_str += `end2`
            }
            if (j == 7) {
                video_vault_str += `end1`
            }
            video_vault_str += `">
							<!-- 视频轮播 -->
							<div class="video_vault_con" id="video_vault_con">
								<div class="common">
									<div class="img">
										<a href="">
											<img data-src="${ video_vault_menu.common_src[i][j] }" alt="" class='lazy_img'>
										</a>
									</div>
									<div class="text">
										<a href="">${ video_vault_menu.common_h3[i][j] }</a>
									</div>
								</div>
								<div class="hover" style="display: none;">
									<div class="img">
										<a href="">
											<img data-src="${ video_vault_menu.hover_gif[i][j] }" alt="" class='lazy_img'>
										</a>
									</div>
									<div class="text">
										<h3>
											<a href="">
												${ video_vault_menu.common_h3[i][j] }
											</a>
										</h3>
										<span>
											<a href="">${ video_vault_menu.hover_span[i][j] }</a>
										</span>
										<div class="label">
											<a href="">
												${ video_vault_menu.label[i][j] }
											</a>
										</div>
									</div>
								</div>
							</div>
							<!-- 类型注释 -->
							<div class="video_vault_typeLabel">
								<a href="/">${ video_vault_menu.label[i][j] }</a>
							</div>
						</li>`
        }
        video_vault_str += `
						<div class="clear"></div>
					</ul>
			`
    }

    // 传入字符串参数
    video_vault_inside.innerHTML = video_vault_str;
    // 获取节点
    var video_vault_right_a = document.getElementById("video_vault_right").getElementsByTagName('a');

    var video_vault_hover = document.querySelectorAll("#video_vault_con .hover");

    var video_vault_con = document.getElementsByClassName("video_vault_con");
    // 鼠标移动到obj上该obj添加cur的class，移除则取消
    // function add_re_class(index, obj1, obj2, obj_class) 
    // 直播导视下方图片调用该函数
    for (let index = 0; index < video_vault_right_a.length; index++) {
        add_re_class(index, video_vault_right_a, video_vault_right_a, "cur");
    }
    // 鼠标移动到obj1上出发事件使obj2出现，移除使得obj2消失
    // function beblock(obj1, obj2, i)
    // 片库调用该函数
    for (let index = 0; index < video_vault_con.length; index++) {
        beblock(video_vault_con, video_vault_hover, index);
    }

    let timeId = -1;
    let lastElement = undefined;
    let index = undefined;
    // 动画效果函数
    document.getElementById("video_vault_right").addEventListener('mouseover', ev => {
        // children用来记录四个ul，并利用...将其提取出来
        const children = [...document.querySelector('#video_vault_inside').children];
        // console.log(1);
        // 判断是第几个li
        for (let i = 0; i < children.length; i++) {
            // const element = array[index];
            if (ev.target == video_vault_right_a[i]) {
                index = i;
                break;
            }
        }
        // const index = ev.target.dataset['index'];
        // if (!index || lastIndex === parseInt(index)) {
        //     return;
        // }
        // 上一个ul而且是在300ms之内迅速切换到下一张的时候，如果是存在的则之间让其消失然后让记录值变成undefined
        if (lastElement) {
            // 延迟停止
            clearTimeout(timeId);
            if (children[index] !== lastElement) {
                lastElement.style.display = 'none';
                lastElement = undefined;
            }
        }
        // 提取ul和对应的下标
        children.forEach((element, idx) => {
            // console.log(element,idx);
            const classList = element.classList;
            // 如果该ul和鼠标触发函数对应的下标相同的话，加入动画效果且可见
            if (idx === parseInt(index)) {
                element.style.display = 'flex';
                classList.remove('invisible');
                classList.add('visible');
            }
            // 如果不是则找到上一个可见的，加入退出动画效果，并记录为上一个值，在定时器结束过后，上一个值记作undefined，
            else if (classList.contains('visible')) {
                classList.replace('visible', 'invisible');
                lastElement = element;
                // 间隔后消失
                timeId = setTimeout(() => {
                    element.style.display = 'none';
                    lastElement = undefined;
                }, 300);
            }
        });
        // console.log(lastElement);
        // lastElement = element;
        lastIndex = parseInt(index);
    });

    // 下方的拉长效果部分
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
    // var lastElement = undefined;
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
            // console.log(number);
            // 一共又number个盒子
            // 如果触发的是倒数三个就是number-1 -2 -3 就是
            if (i >= number - 3) {
                // console.log("嘿嘿");
                if (i == number - 3) {
                    length_effect_item[number - 4].style.width = "0px";
                    length_effect_item[number - 4].style.padding = "0px";
                    length_effect_item[number - 2].style.width = "0px";
                    length_effect_item[number - 2].style.padding = "0px";
                    length_effect_item[number - 1].style.width = "0px";
                    length_effect_item[number - 1].style.padding = "0px";
                    flag = 0;
                }
            }
            if (i >= number - 2) {
                // console.log("嘿嘿");
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
                // console.log("嘿嘿");
                if (i == number - 1) {
                    length_effect_item[number - 4].style.width = "0px";
                    length_effect_item[number - 4].style.padding = "0px";
                    length_effect_item[number - 3].style.width = "0px";
                    length_effect_item[number - 3].style.padding = "0px";
                    length_effect_item[number - 2].style.width = "0px";
                    length_effect_item[number - 2].style.padding = "0px";
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
}