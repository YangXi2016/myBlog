// class EventRecord {
//     constructor(pic, desc) {
//         this.pic = pic;
//         this.desc = desc;
//     }
// }
// class PicDesc {
//     constructor(pic, desc) {
//         this.pic = pic;
//         this.desc = desc;
//     }
// }
// class DateRecord {
//     constructor(date,title,picDescs,desc,eventRecords,eventPics) {
//         this.date = date;
//         this.title = title;
//         this.picDescs = picDescs;
//         this.desc = desc;
//         this.eventRecords = eventRecords;
//         this.eventPics = eventPics;
//     }
// }

let loveRecords = [
    {
        date: '2019-05-23',
        title: '心声缘起时',
        desc: '心声上加了位小姐姐，下班后一般寒暄，倒是没有太尬。倒是她冒出来一句“小哥哥，您要接续接触吗”，下了我一跳。这小姐姐很直呀！难道以前和女孩子聊天总冷场就是因为对方冷漠而已？',
        pics: [
            {
                url: '2019-05-23-初次寒暄.jpg',
                desc: '初次寒暄'
            }
        ],
    },
    {
        date: '2019-05-26',
        title: '约饭初相见',
        desc: `和心声小姐姐聊得蛮投机的，对方很主动，“推动”着我约了个饭……
        今晚和心声小姐姐吃了个饭，唱了个歌。交流中规中矩，但没出啥问题，总算又有了饭友。（ps.第一次通过“相亲”渠道直接进入约会流程……）`,
        pics: [
            {
                url: '2019-05-23-初次约会之地.jpg',
                desc: '初次约会之地'
            }
        ],
    },
    {
        date: '2019-06-01',
        title: '儿童节快乐！',
        desc: `
        6.1“儿童节”？去蛋糕DIY店做手工感受下童年的气息，去莲花山看了看灯光秀，看到小孩子在玩跳房子，回五和喝了点小酒。混混沌沌的一天就这么度过。
        （ps.今天和心声小姐姐的约会氛围在慢热中升温，手工DIY比想象中的无趣，商场溜达毫无亮点。等到晚上来到书城和莲花山，四下转悠也总觉得氛围没有踩到点上。感觉今天就要这么凉了。然而待一场灯光秀后，一起找了个座椅休息，开始互诉心声，两个人反正自在了很多。其倒是阐明了进一步发展的想法，以及对浪漫爱情的憧憬。她对我蛮有好感的，她在我眼里也是一个不错有趣的女孩。不过我却是从没和这种女孩深入接触过，心中还是有一些忐忑。更多的，却也还是憧憬和期盼。
        莲花山上待足了两场灯光秀，才返程。趁着时下的氛围不错，提议在回家前到“匆匆那年”清吧小坐一会，其也是“矫情”的答应了。清吧里灯光幽暗，气氛迷离，酒水作伴。只是简单聊聊天，情绪却也是直线升温。晚上送她回去时，便已是十指相扣。进度，比我想象中快。
        ）
        `,
        pics: [
            "2019-06-01-六一儿童节制作蛋糕.jpg",
            "2019-06-01-六一儿童节莲花山跳房子.jpg"
        ],
    },
    {
        date: '2019-06-02',
        title: '约会标准流程',
        desc: `
        和阿莲约了个电影&点都德。觉得自己有些无趣。也可能是《哥斯拉》太无聊了吧。
        （ps.发现自己真正是个无趣的人。更准确的说，是个嫌麻烦的人。本来以为今天可以好好休息一下的，然而昨晚阿莲说今天有汉子准备约她看电影，疯狂激我行动。于是我便约了她看电影。以为看脸电影就可以送她回家了，又说想玩。完全没安排呀。只得继续找吃的。折腾去找“点都德”、“重庆火锅”。阿莲倒是没嫌弃什么，自己却是压力山大。后面饭也吃完了，时候还早，接着手机马上没电的由头，才把阿莲送了回去。然而，今天明显有些扫兴……
        ）`,
    },
    {
        date: '2019-06-03',
        title: '撒娇女人最好命',
        desc: `
        和阿莲聊了聊情侣准则，被提（cuo)了不少好男友准则……
        女生很注重细节的，要每天晚上聊天，要每天说早晚安，要学会安排怎么出去玩，要每天浇水……
        女生矫情起来真可怕。`,
    },
    {
        date: '2019-06-05',
        title: '挑剔女友教做人（男票）',
        desc: `
        今晚被提意见了，教做人（男票）。
        （ps.没有做好阿莲要求的这些细节，又有些言行不检点，于是今天被音频批了一顿。原来真正的一般的女孩子真的是这样哒。然后又画风一转，“我身边的朋友都说你这样子根本就不在于我，不过我还是对你很抱有期望的”。然后自己也便见势献殷勤，也忘了自己说了些什么，反正最后她也便乐呵开心了起来，聊过来两三个小时……危机解除。
        哎，战战兢兢，如履薄冰。哄女孩子真的是一门艺术。自己从小太大就太高傲了，试试不一样的相处方式吧。）`,
    },
    {
        date: '2019-06-08',
        title: '瓜熟蒂落收获时',
        desc: `
        浪到疲惫的一天~
        上午去壹方城预约“外婆家”吃杭帮菜，久违的回忆的味道。大学时候部门聚餐最爱的地方。
        然后逛着逛着配了一身嘻哈风格的穿搭，感觉还不赖，新尝试，新改变。
        然后沿路去了南山博物馆，在“大象中原———河南古代文明之光”专题展厅里逛悠逛悠了一个多小时。
        等到气温逐渐凉下来，再去不远的“荷兰花卉小镇”拍照游玩。今天的深圳蓝是真的惊艳！每一张照片都是那么让人舒适惬意。
        到了饭点，又回到壹方城觅食，排了胡桃里，竟然要等27桌。便临时去另一家精酿啤酒店里点了吃喝。吃到尾声，胡桃里的排号也到了，索性又去胡桃里网红餐吧二次消费。不得不说，胡桃里的灯光和音乐，真的很舒服。

        （ps.感觉阿莲（女孩子）在感情中真的很有套路诶。各种为我创造机会。虽然她总说我有趣，但其实在大的方针动作上，都是她创造的机会，才有我发挥的空间~

        又是标志性的一天。阿莲喜欢灯光暗一点，氛围好一点的饭店。恋爱中的小情调还是需要滴。于是乎，又选了小酒馆一起小酌调情。胡桃里的氛围真的很棒，要不是地铁11点截止，怕是会在这里沉醉到深夜。然而在这个荷尔蒙飙升的夜里，我带她回了狼窝，美名其曰家里有花瓶正好可以送她装花。
        可真正领回家了，反而是不知所措。她倒是像回到自己家，吃吃水果，躺着看看视频。我赶紧收拾一下这邋遢的房间……然而啥事不做总觉得氛围不对，想要亲热，却又欲情故纵，疯狂暗示表白。好吧，确实缺少一次仪式性的正式表白。临时在网上订了一捧玫瑰，仓促间拼凑出言语来个表白。于是，她来了一句，那我陪你到3点吧……妈耶，我困得要死啦，还有一两个小时呢，强撑着一起找电影看吧。熬到了3点，竟然又不回去了。好吧，都这么明显了，就在我这里睡吧……两个迷迷糊糊的人抱着一起互诉寂寞，一番亲热。反正我是没过多久就耐不住睡死了，等我7点中途醒来，阿莲却是不见了。

        耍朋友是真真烧钱呀！一路打车奶茶几十上百，“被买”一套衣服几百，晚上两个小酒馆坐坐，又是三四百，送个花，又是两百。肉疼。
        不过这样的感觉才是我设想中的恋爱，阿莲是我的药引。
        ）`,
        pics: [
            "2019-06-08-外婆家约饭.jpg",
            "2019-06-08-花卉小镇小憩.jpg",
            "2019-06-08-胡桃里音乐餐吧.jpg",
            "2019-06-08-嘻哈风新皮肤.jpg"
        ]
    },
    {
        date: '2019-06-09',
        title: '爱情纪念日',
        desc: `
        收到《三体艺术插画集》，如获珍宝！第一次收到这么对胃口的礼物！
        （今晚去见阿莲，本以为把她昨晚落在我家的东西送回去就可以回来补觉了，然而没那么容易……一个吃个饭，一起逛悠，然后一个劲像我要礼物。我猛地以为自己上套了。她希望这一天能够特殊，能够定期有个小惊喜以温存。顿时有些哑口。总之后面的时间都被她搞得有点沉闷，自己也不知道说啥。于是，手机又要没电了，又以这个借口先行送她回去。【手机总在关键时刻缺点助我一臂之力~】
        带她回到家却说有东西要送个我，就是这个插画集。相当贵重了，顿时感动得热泪盈眶，兴奋得手舞足蹈，竟然能送给我这么对胃口的礼物，如获珍宝！对她的好感度，顿时砰砰砰砰地网上蹿，也消除了一些我对她不好的顾虑。然而，接下来，我也要准备给她的礼物了。
        ）`,
        pics: [
            "2019-06-09-牵手成功心花怒放.jpg",
            "2019-06-09-三体艺术插画集1.jpg",
            "2019-06-09-三体艺术插画集2.jpg",
        ],
    },
    {
        date: '2019-06-11',
        title: '爱情纪念册',
        desc: `
        花了两天，准备了一个绚丽动感的网页——“爱情纪念册”，并带上了一首打油诗，总结了认识的过程。
        happyyoung.net/anniversary
        >日料馆里初相识,
        K T V内共知悉。
        莲花山上心交错,
        匆匆那年意朦胧。
        也曾不懂女人心，
        迷途知返促膝谈。
        情深意切共端阳，
        夫妻双双把家还。
        `,
    },
    {
        date: '2019-07-12',
        title: '喜结莲李戒指到',
        desc: `
        “喜结莲李”~戒指收到。然而戴着实在不习惯~
        精致与粗糙，美女与野兽的对比。
        阿莲在我们这段感情中比我更多一份勇敢
        `,
        pics: [
            "2019-07-12-喜结莲李戒指_男.jpg",
            "2019-07-12-喜结莲李戒指_女.jpg",
        ],
    },
    {
        date: '2019-07-28',
        title: '拉黑/开车——恩威并施',
        desc: `
        一大早起来，发现被阿莲拉黑了。早安、视频发不出，电话几通都挂机。赶紧发个短信补救一下。

        在去漂流的车上，阿莲总算回消息了。一番劝慰，又可以正常的“开车了”。

        今晚又是和阿莲开车的一天，尺度略大，略去n万字。
        `,
    },
    {
        date: '2019-08-03',
        title: '暴躁女友初显形',
        desc: `
        今晚和阿莲的约饭，一波三折，竟然搞得我动了火，她生了气。罪过罪过。还是不能和女孩子讲道理的。哄就完事了。    不要总是抱着提供方案的思路去解决问题，可以试着从人的角度去解决问题。
        `,
    },
    {
        date: '2019-08-04',
        title: '海底捞的异地约饭',
        desc: `
        晚上独自一人去海底捞吃火锅。这是我第二次一个人吃火锅。不过这次却没那么落寞。海底捞的服务很到位，关键是有一位可爱的人儿也在陪我远程吃着火锅聊着天。Nice。
        `,
        pics: [
            "2019-08-04-海底捞的异地约饭.jpg",
        ],
    },


    {
        date: '2019-08-11',
        title: '异地观影——烈火英雄',
        desc: `
        和阿莲虽然在异地，但还是要在一起共同做一些情侣们做的事。比如说在同一时候去看同一场电影，然后再共同分享。
        《烈火英雄》第一部触到我泪点的电影。感谢消防战士为人民的负重前行。还希望这类影片能让人们认识到“无名英雄”们的贡献，也促进人们消防意识的提升。
        一部好的电影，情节和氛围都很到位。着重渲染的英雄情怀确实让我潸然泪下了。很高兴这一两年里看到电影质量的稳定提升，好的电影应该有好的票房回报。
        `,
        pics: [
            "2019-08-11-烈火英雄观影.jpg",
        ],
    },

    {
        date: '2019-08-17',
        title: '相聚深圳，好久不见',
        desc: `
        深圳一别，带着些心酸和无奈。和好后，也对这段情感的走向不太自信。这次相聚，将是我们情感的一剂强心针。
        本准备中秋再去，深圳相聚的，但耐不住阿莲盛情邀请，找了个没有台风的周末便连夜了过去。
        到了深圳大清早的，阿莲也还没起床，先去酒店放个行李，再到她楼下候个大半小时，这才接到。
        早上先去弓客联盟玩了玩射箭，阿莲完爆我。准劲比我强多了。还加了老板娘微信准备来挑战更长赛道跟专业的设备。
        中午逛到了一家火锅店，红红火火谭鸭血，象征我们的情感走势。
        下午约到UK网红KTV，想起第一次见面时就越KTV，自己一句不敢唱，害怕吓跑了小姐姐，这一次我也鼓起勇气唱了几首许巍水木年华的歌曲。不再那么腼腆。KTV大堂及各过道间，格调小资适合拍照。
        晚上就在商场了找了个精酿啤酒馆喝酒唠嗑。然而这里并不适合当主餐，于是又排了胡桃里的号。重温告白日的氛围。
        回到酒店也不晚了。难以想象竟然在一天之内做了这么多活动，累瘫在床上。
        
        第二天，本该就这么返程回杭了，为了陪阿莲过一个完整的周末，便请了一天假。上午送莲莲回去洗漱打扮一下，在maxcity逛逛街，在老长沙黑白电视吃个午饭，下午5点不到在楼兰吃个饭，晚上会酒店珍惜这最后难得的相处时光以及吃个宵夜。
        `,
        pics: [
            "2019-08-17-弓客联盟神箭手.jpg",
            "2019-08-17-谭鸭血老火锅.jpg",
            "2019-08-17-UK网红KTV打卡.jpg",
            "2019-08-17-胡桃里音乐餐吧.jpg",
        ],
    },

    {
        date: '2019-08-22',
        title: '深圳出差试探',
        desc: `
        项目组虽然根据地在杭州，但一大波人都在东莞出差（各地团队集中办公）。看着他们来来回回，我也想试试能否去东莞出个差。顺便去复燃个旧情。
        `,
        pics: [
            "2019-08-22-出差意愿试探.jpg", 
        ],
    },

    {
        date: '2019-09-08',
        title: '我俩的故事',
        desc: `
        收到莲莲的纪念日礼物——《我俩的故事》，讲述的是一对眷侣佳话——平如美裳，从初识到相守再到生死分别的70多年时光，有爱情的甜蜜，有平凡的生活。愿我俩的爱情能一直坚守下去。
        `,
        pics: [
            "2019-09-08-我俩的故事.jpg", 
        ],
    },

    {
        date: '2019-09-11',
        title: '明月当空，美人如虹',
        desc: `
        明月当空，美人如虹。思君心切切，不日到余杭。
        中秋将至，礼物先行。正好缺一款耳机，莲莲就为我邮来了一副精致的蓝牙耳机。Nice！
        `,
        pics: [
            "2019-09-11-中秋节礼物.jpg", 
        ],
    },

    {
        date: '2019-09-15',
        title: '中秋相聚日',
        desc: `
        今早收到阿莲的消息，说是没赶上今早的车，来不了，往返的票也都退了。赶紧给她大电话哄她，然后就被套路了——莲莲竟然已经到达杭州了！这弯转得触不及防。
        为了阿莲的中秋杭州行，我策划了两三个组合式的行程，时间排得满满的，一定要给阿莲留下完美的印象。
        先到钟点房把阿莲接回家中，二房东们正好要出门，在家里好生招待阿莲。准备给她做个炖个腊排骨的，不过最后好像煮糊了，囧？。午饭后，带她去到了酒店，休整了一波，就在附近的龙湖天街逛吃了，本来想找新安江奶酸菜鱼吃的，只找到了舟东奶酸菜鱼将就。阿莲这一身，很适合夜景耶，又纯又御。
        
        第二天，出门前，还去理发店找tony老师打理了一下，两个人感觉都是甜美风了。我们先去西湖边的银泰商圈逛吃，那人流量是真的多。本来准备去外婆家就餐的，奈何排队太长长，找了另一家人也超多的杭州特色餐厅弄堂里就餐。餐后绕着西湖继续逛，然而我的兴致才方兴未艾，莲莲的脚就受不了了，改为观光车游行。之后直奔浙大紫金港校区，应阿莲要求去走访我和初恋遍历过的地方……奈何校园太大，带她横穿校园，走走停停也就快到饭点了。想找记忆中的奶酸菜鱼无果，退而求其次找到了飚锅串串，很合我与阿莲的口味。今天这一天下来，咱俩已甚是疲惫了。
        
        第三天，将阿莲又接回了家里，在家里一起做个午饭，唠唠嗑温存一下。下午还抽空出去又唱了歌KTV。说来也乌龙，竟然差点在前台和服务员吵了起来。莲莲霸气。坚决捍卫自己的权利。
        
        嫦娥奔月，你（wo）奔向我(ni)。辛苦阿莲的舟车劳顿，咱俩有一个完整的中秋三天相聚时光。爱你么么哒！
        `,
        pics: [
            "2019-09-13-甜美和服莲.jpg",
            "2019-09-13-潮女莲.jpg",
            "2019-09-13-潮男喜.jpg",
            "2019-09-14-活力拍档.jpg",
            "2019-09-14-弄堂里の一餐.jpg",
            "2019-09-14-重返紫金港情人坡.jpg",
            "2019-09-15-中秋相聚恩爱时.jpg", 
        ],
    },

    {
        date: '2019-10-10',
        title: '纪念日礼物——挎包、华为手表',
        desc: `
        之前向组织表达了想要出差东莞的意愿。我也凭借自己优异的能力争取到了到东莞封闭集中办公的机会。国庆节一过就飞了过来。当然，还有件事就是哄女票啦。
        又是每月纪念日。这次莲莲给我挑了一款潮男挎包，按时收到。然而我给莲莲准备的华为手表，却没能在今天按时送到，又是哄不好的一天。
        (ps. 今天leader给我沟通了HMS会展人员抽调的事，准备把我输送过去，确实我的情况最适合。不知后面将如何发展）
        `,
        pics: [
            "2019-10-10-阿莲送的潮男挎包.jpg", 
        ],
    },

    {
        date: '2019-10-27',
        title: '重归深圳——Shopping',
        desc: `
        因为HMS会战的原因，我又回深圳啦！兜兜转转又一圈，爱情又回来啦！可以和莲莲多多厮守了。
        这是重归深圳之后的和莲莲的第一次逛吃，在她楼下等了大半个小时，窝了一肚子火。每次都是这样……女人呀女人。可看到她婀娜多姿时，气也就消了。男人呀男人。
        和莲莲去八号仓，给我置办了全身套装，给她的黑色蕾丝长裙配上了贝雷帽，气质更显典雅。在帅哥靓女的路上携手共进。
        `,
        pics: [
            "2019-10-27-和美美的阿莲逛吃八号仓.jpg",
            "2019-10-27-阿莲为我挑的全套装扮.jpg",
        ],
    },
    {
        date: '2019-11-09',
        title: '纪念日活动——石居日料',
        desc: `
        纪恋日日常活动，附上可盐可甜的莲莲以及如仓鼠般可爱的七喜。
        `,
        pics: [
            "2019-11-09-美美的阿莲.jpg", 
            "2019-11-09-萌萌的七喜.jpg", 
        ],
    },
    {
        date: '2019-11-10',
        title: '同居第一天：抄手教学',
        desc: `
        开心，超级开心！要搬到莲莲家里去同居了！一切都是那么自然，水到渠成顺风顺水。
        我这行李量，真是拎包入住。然后周日就开始准备乔迁新居宴——入住新家包一次抄手煮一次饭是我的习俗。带着莲莲教他包抄手，学得超级快。一看就有贤妻良母的潜质。
        `,
        pics: [
            "2019-11-10-抄手成果图.jpg", 
        ],
    },
    
    {
        date: '2019-11-17',
        title: '海底捞庆生——for阿莲',
        desc: `
        祝我最可爱的阿莲姐姐生日快乐，永远十八岁！
        第一次在海底捞（给）别人过生，气氛还蛮好的，莲莲这个寿星乐得合不来嘴呀。虽然她和她姐凑在一起过生，但莲莲看起来也太幸福了。
        `,
        pics: [
            "2019-11-17-海底捞庆生1.jpg", 
            "2019-11-17-海底捞庆生2.jpg", 
        ],
    },
        
    {
        date: '2019-11-24',
        title: '深圳湾人才公园夜游',
        desc: `
        自从上次和师兄和方老师在人才公园简单逛了下，就心心恋恋着带阿莲来这块风水宝地逛逛夜景。城市灯光的人造美景和公园湿地的自然气息结合得相当自然融洽。
        发现苹果手机拍自然美景尤其是城市灯光，还原度超高，和人眼看到的美景相差无几。但在拍昏暗灯光下的人像时，让人大跌眼镜，美美的莲莲被我拍得没了光彩……
        `,
        pics: [
            "2019-11-24-人才公园夜景.jpg",
            "2019-11-24-死亡打光.jpg",
            "2019-11-24-游归coco至.jpg",  
        ],
    },

    {
        date: '2019-11-30',
        title: '朴实无华的单休周末',
        desc: `
        每一个单休的周末，都是这么朴实无华且枯燥。莲莲在家里偷偷摸摸地为我包好了抄手，给了我一个大大的惊喜。
        第二天也一起去买菜做饭以报答阿莲。晚上还煎了两块牛排搞个烛光晚餐，Nice！
        `,
        pics: [
            "2019-11-30-莲莲偷偷包的抄手.jpg",
            "2019-12-01-朴实无华的午餐.jpg",
            "2019-12-01-起泡酒配牛排.jpg",
        ],
    },

    {
        date: '2019-12-07',
        title: '半周年纪念日——惠州海滨温泉旅',
        desc: `
        为了庆祝咱俩的半周年纪念日，策划了一次大一点的周末游。为了省事，选择了惠州的海滨温泉报团游。
        先是坐大巴来到了海滨，一行人坐船出海看渔船打捞。（莲莲因为怕太阳晒黑裹得严严实实还不肯去，和我又是赌气了良久）。渔船出海也就一个噱头，一个大网撒下去，没有几个虾兵蟹将…… 然后坐着快艇在沿海狂飙了几圈，体会到了海风嗖嗖的快感。
        之后便送到了温泉酒店，泡了几个小时的温泉。现在这个温度，泡温泉里还真不愿意出来。浴场特别的大，温泉种类也特别的多，人也不算太多，两个人泡得很是安逸。
        之后大巴将我们统一送到了酒店，现在是淡季，自己在外面大排档里简单吃了下，竟然在饭菜了发现了小虫子，坏了莲莲的心情，也对这些大排档餐饮业丧失了信任……
        第二天旅游团一起去打CS射箭了，玩得还蛮尽兴的，弹药量很足。中午去吃了柳岩海胆炒饭大餐，在预期值之上。
        这是我的第一次报团游，总的体验来说还不错，省事，性价比也还蛮高的。温泉有机会还可以再泡泡。对于我们这些社畜来说，真是不错的恢复能量的活动。
        晚上回家在一家情侣餐厅就餐比个心。
        `,
        pics: [
            "2019-12-07-渔船出海.jpg",
            "2019-12-07-海上美景.jpg",
            "2019-12-07-抱在一起都是比心的形状.jpg",
            "2019-12-07-泡温泉.jpg",
            "2019-12-08-饭前比心.jpg",
        ],
    },

    {
        date: '2019-12-25',
        title: '猫咖馆游玩',
        desc: `
        圣诞节到了，下完班也带莲莲出去溜达透透气。来到附近的一家猫咖馆，找猫主子们吸点精气回复回复能量。
        猫咪们似乎更愿意和莲莲互动，用一只逗猫棒惹得人家原地起飞。当然大部分还是荣辱不惊，慵懒佛系，需要我们好生服侍。以后有了自己的房子或回了重庆，咱俩也要养个小主子。
        `,
        pics: [
            "2019-12-25-猫咖钓猫.jpg",
            "2019-12-25-猫咖撸猫.jpg",
        ],
    },

    {
        date: '2019-12-29',
        title: '欧洲小镇一日游',
        desc: `
        抢到了HMS项目组的溪村一日游家属卡，带上莲莲去溪村感受一下欧洲小镇的情怀。
        童话小镇里，更适合甜美之风。在暖洋洋的阳光下，坐着小火车穿行在“欧洲各国”的城市间中，在城堡建筑的迷宫里探险，在湖畔草甸间取景拍照。
        因为此前在这上了近一年的班，对这里也很是熟悉。当真是百看不厌，不逊色于任何特色小镇或度假村。华为的格调还是高！
        `,
        pics: [
            "2019-12-29-欧洲小镇一日游1.jpg",
            "2019-12-29-欧洲小镇一日游2.jpg",
            "2019-12-29-欧洲小镇一日游3.jpg",
        ],
    },

    {
        date: '2019-12-31',
        title: '19——20跨年夜',
        desc: `
        2019，彼此走进对方的生活；今晚，我们一起跨进开心的2020。
        和莲莲的第一个跨年夜！今晚预约了开心麻花的《谈判专家》。华夏艺术中心附近的人流量在可控范围的多。白天吃吃喝喝，晚上看完话剧也能正常回家，一个比较顺利的跨年夜。
        `,
        pics: [
            "2019-12-31-开心麻花共跨年.jpg"
        ],
    },



    {
        date: '2020-01-18',
        title: '盛大惊喜——我的生日',
        desc: `
        周六醒来，迷迷糊糊听到外面有声音，阿莲说她今早要洗头，也就没多想。可待回笼觉之后，走出卧室一看。好家伙，家里成为庆典现场了。满地的气球难以落脚，墙上的七喜哥哥happybirthday甚是喜庆。这是为我一个人精心准备的生日庆典，我这一辈子都没有收到过这么大的惊喜，从来没有人为我的生日准备得这么隆重。对着阿莲就是一阵搂搂抱抱，卿卿我我以平复心情。
        中午我们在家点了点都德，配上阿莲为我准备的水果蛋糕。犹如活在天堂了。
        晚上约了三俩好友继续在海底楼聚餐吃蛋糕，今天也算圆满了，Nice！
        
        我的阿莲最好最棒最贴心的！
        `,
        pics: [
            "2020-01-18-满屋子的生日惊喜.jpg",
            "2020-01-18-我的生日蛋糕.jpg",
            "2020-01-18-海底捞做寿星.jpg",
        ],
    },

    {
        date: '2020-01-22',
        title: '春节前一聚',
        desc: `
        临到节前，深圳才稍稍降下了温，莲莲带我买了件外套才有了人形。
        然和在临走前一两天，一起和她姐约了年前最后一顿饭秀了波恩爱。
        `,
        pics: [
            "2020-01-22-节前腐败.jpg",
        ],
    },

    {
        date: '2020-02-09',
        title: '疫情居家厨艺赞',
        desc: `
        至春节返深之后，就被居家令限制在家，发动了被动技能——做菜
        除了日常炒菜，偶尔也做做甜点饮品，火锅香锅。我这边提前上班之后，莲莲每日给我准备爱心便当，虽然寒碜了点，但健康方便。毕竟能有此待遇，已是幸福至极。
        `,
        pics: [
            "2020-02-23-自制水果酸奶.jpg",
            "2020-02-09-超大份麻辣香锅.jpg",
            "2020-02-21-简易便当.jpg",
        ],
    },

    {
        date: '2020-02-14',
        title: '情人节情侣表',
        desc: `
        收到我的礼物，女票喜笑颜开；
        收到女票的礼物，我目瞪狗呆！
        DW手表情侣款，戴在阿莲的手上，感觉好精致唯美。
        `,
        pics: [
            "2020-02-14-情人节情侣表.jpg",
        ],
    },

    {
        date: '2020-02-18',
        title: '高中日记现世，情感风雨飘摇',
        desc: `
        莲莲对我的过往总是十分感兴趣，而有学生时代又有着写日记的习惯。很自然的，阿莲总会翻阅我我随身携带的日记本。
        今天上午，我在公司上班好好的，收到阿莲的一句“我恨你”！旁敲侧击算是知道是日记本的锅了。必定是里面的一些敏感信息刺激到阿莲了。
        阿莲怒火难消，甚至要直接将我行李打包撵出去。事态紧急，刻不容缓，只得紧急从公司赶回家中，当面安抚沟通认错。
        高中的一场烂桃花，对于有情感洁癖的阿莲来说是一场晴天霹雳。然而看到了蛛丝马迹之后，却是进行了地毯式全方位无死角的日志检索。待我回到家中，对我已是坚定的决裂表态。
        第一次见到阿莲这么大的阵仗，我也是又慌又急。阿莲面对我低身下气的道歉，针插不进，水泼不进，只是一边啜泣一边咒骂。我只得像个狗皮膏药般粘着。吵不散，骂不走，撵不动。流下两滴真诚的泪水。就这么耗了好久好久，都到了下午，阿莲的气才有了一点点的平缓。接受她的思想教育。
        
        在情感上，两个人的三观还有较大的差异。还得互相沟通磨合。不过一般只有她教育我的份……
        `,
        pics: [
            "2020-02-18-高中绝密档案.jpg"
        ],
    },

    {
        date: '2020-02-23',
        title: 'Rick And Morty超赞礼物',
        desc: `
        莲莲挑礼物真的是超用心的，竟然给我买了Rick And Morty插画集典藏版。手感超好，人物超全。爱了爱了，一个绝佳的收藏品。
        除了插画集，莲莲又还偷偷给我做了星空投影器，配上星空风格的床头背景布。关上灯，躺在床上，犹如游离在太空之间。思绪缥缈，魂牵梦绕。
        `,
        pics: [
            "2020-02-23-Rick and Morty插画集.jpg",
            "2020-02-23-Rick and Morty插画集荧光.jpg",
            "2020-02-23-星光投影仪效果.jpg",
            "2020-02-24-Rick.jpg",
            "2020-02-24-Morty.jpg",
        ],
    },


    {
        date: '2020-03-15',
        title: '疫情后首浪——聚餐理发',
        desc: `
        返深后，大门不出二门不迈，大家严防死守。不过最近总算逐渐可控，允许外出堂食了。
        于是趁着周末，莲莲约了她姐出来吃牛肉火锅，讨论疫情及体重
        `,
        pics: [
            "2020-03-15-饭前臭美.jpg",
            "2020-03-15-渣女带波浪.jpg",
        ],
    },


    {
        date: '2020-03-22',
        title: '拍照的乐趣',
        desc: `
        春天到了，就算不出门，也要把自己打扮得美美搭。
        于是乎，最近莲莲就一个劲的臭美，帮她拍拍照，也拍拍马屁。哇，莲莲你风姿百态，绝色美人，我俩珠联璧合~
        `,
        pics: [
            "2020-03-21-恩爱的喜结莲李.jpg",
            "2020-03-21-傲娇莲.jpg",
            "2020-03-22-和服知性莲.jpg",
            "2020-03-22-娇羞惹人怜.jpg",
            "2020-03-16-双马尾的小奶妞.jpg",
        ],
    },

    {
        date: '2020-03-29',
        title: '草长莺飞——福田踏青',
        desc: `
        疫情期间，在家里憋了良久，进城去溜达溜达，感受下春天的气息。
        `,
        pics: [
            "2020-03-29-莲花山一游.jpg",
        ],
    },

    {
        date: '2020-05-01',
        title: '为了幸福——向岳父岳母家启程',
        desc: `
        见家长咯，见家长去咯。一大早去机场赶飞机，迎着清晨的第一缕阳光走进机场，满怀期待与小激动。（然后在转机过程中又吵架了……）
        莲莲爸妈定居在云南边境小镇，这路途比较波折。早上五六点出门，下午到她家稍作休整就得吃晚饭了。
        对云南一直很有好感。毕业穷游在此，对这里的好山好水很是享受。最后一段旅程，在山路十八弯之间盘旋，蓝天白云清晰明亮，到了小镇上，大片大片的稻田犹如日系动漫一般，穿行在花中。
        第二天早上，赶了个晚集。小镇道路两旁的小商贩和我老家过年差不多。出去吃个稀奇看个稀奇。然后陪阿莲去看看她的小学，带我到她的记忆中走走。
        丈母娘家饭菜的口味很和我胃口。猪肚这类好东西一上桌，我就知道双方家庭的口味肯定相差无几。还有他们自己做的小龙虾，现杀现炒的黄鳝。吃起来都是那么的亲切。
        莲莲她爸爸不善言辞，她妈妈和姐姐也不是唠叨的人，交流过程中我倒不没什么压力。不过也对双合的未来及若干核心问题进行了初步交流。对于婚假上的习俗和要求，几乎没做什么额外提及。莲莲爸妈对这些好像不太熟悉…… 不过在同居问题上，她爸妈还相对保守——整个假期莲莲都是和她妈妈一起睡的，我们也没说咱俩同居的事。莲莲后面和她爸妈商量下半年同居的事还被训了。（不过六一之后莲莲告诉她爸妈同居时，也是水到渠成的）
        第三天，一大家子去了西双版纳原始森林公园，看那孔雀飞舞，还十分震撼有意思。因为疫情期间，人员不算太多，逛着很是静怡舒适。
        `,
        pics: [
            "2020-05-01-向云南进发.jpg",
            "2020-05-01-云南的天.jpg",
            "2020-05-02-丈母娘家的饭菜口味很和我胃口.jpg",
            "2020-05-02-乡村风景照.jpg",
            "2020-05-03-国家森林公园一游.jpg",
        ],
    },

    {
        date: '2020-05-20',
        title: '520例行任务',
        desc: `
        又是一个准备惹女朋友生气的日子。前些日子自己说好不过520节日的，今天上班就开始埋怨别人有花她没有。然后我这个憨憨，下班后买完花问她是放家里还是带到地铁站等她。见她没回复就憨憨的空手去了。接到她已经是火冒三丈了，然后给她赔礼道歉，卑躬屈膝，才在吃饭中哄好。
        哎，女孩子想要花，只是想要在众人面前炫耀自己的魅力或者男朋友，你把花放在家里等着下崽吗?
        `,
        pics: [
            "2020-05-20-520的爱情任务.jpg"
        ],
    },

    {
        date: '2020-06-07',
        title: '古装摄影新尝试',
        desc: `
        周年纪念日马上到啦，安排了古装摄影来留住我们年轻时的美好。
        阿莲穿上古装的那一刻，让我有种穿越般的感觉。特别正的大家闺秀的感觉，落落大方，韵味十足。整个摄影的过程中，俩人含情脉脉的眼神交流，让摄影小哥都吃醋了。
        一套青色素衣走青梅竹马风，远离俗世烟火，读书舞剑、两小无猜的闲适光阴；一套红装走新婚燕尔风，或抚琴弄扇，或正坐堂前，古典的喜庆幸福寓意。
        `,
        pics: [
            "2020-06-07-古装摄影1.jpg",
            "2020-06-07-古装摄影2.jpg",
            "2020-06-07-古装摄影3.jpg",
            "2020-06-07-古装摄影4.jpg",
            "2020-06-07-古装摄影5.jpg",
            "2020-06-07-古装摄影6.jpg",
            "2020-06-07-古装摄影7.jpg",
            "2020-06-07-古装摄影8.jpg",
            "2020-06-07-古装摄影9.jpg",
        ],
    },

    {
        date: '2020-06-09',
        title: '周年纪念日重回初见地',
        desc: `
        恋爱一周年纪念日，赶趟在了工作日，也就简简单单吃个晚餐——在我们初次相见的地方。
        相识一年多了，磕磕绊绊，现在总算稳定下来守候在了彼此的身边。之前是你将我们俩的关系牢牢拽紧，现在是我为了彼此更长远的未来而争取努力着。
        莲莲在这一年多的时间真正是越长越美丽了。风格百般变化，却怎么撩动着我的心。

        `,
        pics: [
            "2020-06-09-石居再聚.jpg"
        ],
    },
    
    {
        date: '2020-06-14',
        title: '新发型新装扮新气象',
        desc: `
        戴上情侣手表，情侣项链，情侣戒指，再一起去搞个潮流发型，出去逛吃逛吃买卖吗去！
        帅哥靓女的感觉，我自己都觉得赏心悦目。给莲莲买的新衣服些手感观感超棒。忍不住拉着在外多溜溜多拍拍。
        `,
        pics: [
            "2020-06-14-新发型.jpg",
            "2020-06-14-新衣服.jpg",
        ],
    },

    {
        date: '2020-06-26',
        title: '端午节华侨城双日游',
        desc: `
        疫情期间，端午节也不敢出远门，就近打卡深圳的热门景点。
        因为疫情的原因，出行还不是太方便，在入住酒店时有些繁琐。于是在各种扫码过程中，阿莲又发飙暴走了。登记入住，是还得安抚阿莲，心累。
        酒店直接连着景区内部，景区还算方便。景区内人并不多，很多游玩项目也没有完全开放。首先玩了大摆锤等游乐园项目，太过刺激，以后不太想玩了。后面等着玩激流勇进又排了一个多小时的队，再在园区里的观光区溜达溜达，下午就这么过去了。天气很好，景色宜人，阿莲这个小吊带夏装也很诱人。
        趁着天还没黑，我们又搭车去了黑山谷，那里还有赠送的温泉浴，毕竟上次半周年庆的温泉浴留下了不错的印象。酒店里的温泉池并不多，比较普通。不过它就处在一大片湖水边上，景色倒是十分惬意。   到了晚上，还有夏日祭烧烤机演出活动。然而我们的酒店还在另一个山头，不敢再多做逗留，尽快打道回府。回去路上，因为天黒路不熟，还险些迷失在山头里。最后搭上以为酒店员工的车有惊无险的回到了自己的酒店。
        第二天睡了个懒觉。继续玩昨天没排上的丛林飞跃。两个人驾驶一辆车在丛林轨道中飞驰，看山看树看孔雀。而后又去排缆车上山顶。山顶的景色那真是美不胜收，一边是海湾岛屿一览无遗，一边是草甸别墅赏心悦目。走走停停，就是享受。
        而后坐景区大巴来到茵特拉根小镇，才发现是昨晚迷路的地方。这里就是一片欧洲小镇风格的度假村，但说实话，不及溪村欧洲小镇的十分之一。不过这里的氛围还不错，坐坐旋转木马玩玩水，也是很休闲了。
        东部华侨城总的来说还是很具有可玩性的，只可惜因为疫情有好些项目停摆了，有机会还可以带家长过来享受享受。
        `,
        pics: [
            "2020-06-25-七喜独照.jpg",
            "2020-06-25-阿莲独照.jpg",
            "2020-06-25-秘术_色诱之术.jpg",
            "2020-06-25-泡温泉.jpg",
            "2020-06-26-缆车上山.jpg",
            "2020-06-26-山顶观海.jpg",
            "2020-06-26-旋转木马1.jpg",
            "2020-06-26-旋转木马2.jpg",
        ],
    },

    {
        date: '2020-06-29',
        title: '医院急诊陪伴照顾',
        desc: `
        也许是周末的自制小火锅没处理干净吧，今天阿莲直接来了个急性肠胃炎。我也是遭受过这个苦的。莲莲在腹泻的摧残下，整个人都完全瘫了。本想熬到第二天再去医院，但莲莲深夜一点钟了还是又拉又痛。便急忙拉到医院急诊去就医。
        上半场还因为疼痛在我身上撒气，下半场又虚弱得不能自理。送到医院后，又磨了一两个小时才吊上了盐水。这过程，莲莲一个劲的撑唤着，脸色苍白无力，我也是记得分身乏术，一个劲在厕所和各医护人员间奔波。
        约莫三点之后，阿莲才躺上病床，疼痛感才逐渐减轻，守着她入睡。疲惫中带着责任感，以后莲莲的人生路上，跟大更难的痛苦也有我共同面对。
        `,
        pics: [
            "2020-06-29-急性肠胃炎急诊.jpg"
        ],
    },

    {
        date: '2020-07-05',
        title: '虽迟但到，女票的手工纪念册',
        desc:  `
        虽迟但到，女票的馈赠，很有意义，是我们爱情的记录<－biubiu－⊂(\`ω\´∩)。
        当我老了，走不动了，咱俩，把这回忆录翻开，幸福的感觉充溢全身。
        我也准备搞一个电子版的恋爱回忆录，记录生活中的美好，以及争吵
        `,
        pics: [
            "2020-07-05-爱情纪念册封面.jpg",
            "2020-07-05-爱情纪念册序言.jpg",
            "2020-07-05-爱情纪念册内容1.jpg",
            "2020-07-05-爱情纪念册内容2.jpg",
        ],
    },

    
    {
        date: '2020-07-26',
        title: '聚餐唱歌的一天',
        desc: `
        这周莲莲她姐做东请客吃饭，想来她姐俩也好久没聚过了。
        莲莲在KTV的灯光下就像女神带上了光环，仙女回到了仙界。So Beautiful!
        `,
        pics: [
            "2020-07-26-KTV内的阿莲.jpg",
            "2020-07-26-KTV内的合照.jpg",
            "2020-07-26-聚餐美食.jpg"
        ],
    },

    {
        date: '2020-08-15',
        title: '自家做东的一顿饭',
        desc: `
        这不前两日去莲莲她姐家做客，吃饭唱歌招待周到。这周礼尚往来也请客吃饭，让阿莲多叙叙姐妹情。
        满桌的菜，观感上完全比不上她姐的手艺。这做饭频率日渐降低，厨艺也逐渐荒废了。
        `,
        pics: [
            "2020-08-15-自家做东的一顿饭.jpg",
        ],
    },

    
    {
        date: '2020-08-20',
        title: '合种的第一颗胡杨',
        desc: `
        从认识其就开始给对方浇水，然后合种爱情树，本来准备在九月九号天长地久日种下我们的爱情树的，不过胡杨树苗不是每日的都有的，在今天抢到了一颗提前种下。阿莲真棒，抢到了胡杨！
        `,
        pics: [
            "2020-08-20-合种的第一颗胡杨.jpg",
            "2020-08-20-美美的阿莲.jpg"
        ],
    },

    {
        date: '2020-08-22',
        title: '一如既往悠闲的周末生活',
        desc: `
        周末健健身，吃吃烤鱼，逛逛商场，顺便get了彼此的第一套情侣服。Nice！
        `,
        pics: [
            "2020-08-22-地铁里的一只小王八.jpg",
            "2020-08-22-爱上川北凉粉.jpg",
            "2020-08-23-第一套情侣服get.jpg"
        ],
    },

    {
        date: '2020-08-30',
        title: '配阿莲去查过敏原',
        desc: `
        查了过敏原，牛肉和鸡蛋竟然不能吃！对于阿莲这个健身爱好者来说，真是个噩耗。不过莲莲自控力一向很好，以后皮肤会变更更好的！
        `,
        pics: [
            "2020-08-30-偷吃的小机灵鬼.jpg"
        ],
    },

    {
        date: '2020-09-05',
        title: '你若安好，那还得了',
        desc: `
        记不太清那晚的事了，好像看戏前逛街闹了不愉快，进场前还吵架要回家，然后前前前小半场跟我冷战了一会，看我时就牵着手欢天喜地回家了。
        `,
        pics: [
            "2020-09-05-话剧亮场.jpg",
        ],
    },

    {
        date: '2020-10-01',
        title: '国庆返乡共婵娟',
        desc: `
        国庆的日子太幸福啦！（虽然在机场又又又闹别扭生闷气了~）
        请假一天，提前返乡，还能赶在国庆假期请回到母校给我妹开家长会，以及带阿莲游历我的中学乐园。感觉将这浓密的爱情酸臭味带入校园，有些于心不忍。
        国庆第一天，便是某某亲戚的结婚宴席，收拾到九十点钟一家人才拖出了门。然后陪着我和阿莲吃了7元豆花饭。来到婚礼上，阿莲初次见到了我妈妈娘家的各个亲戚，莲莲倒也没有拘谨，张弛有度。傍晚，一家人溜达到滨江路去，拍了几张情侣照及家庭合照以留念。
        国庆第二天，先去五爸那理了个精神的发型，约到了高中损友死党刘晨。莲莲很欣赏他的直爽，毕竟从他嘴里了解到了我高中的各种边角小料和为人品行。一起吃的双椒鱼，简直爽歪歪。额，对了，今天川普好像确诊新冠了，普天同庆。下午刘晨就要归队了，我和阿莲继续一路闲逛，从滨江路又爬到泽胜，只为了去傍边吃一碗回忆里的手工肥肠粉！晚上回到家，一家人又搓起了麻将，圆了我爸妈搓家搭子的梦，也让我妹端茶送水收到了她的红包。
        国庆第三天，约到了钟典，又来到泽胜广场边逛边喝边闲聊。也通过他这一个窗口了解重庆的市场行情，以后回归重庆还有很多需要彼此帮扶的呢。中午一起吃的串串火锅，毕竟阿莲可是心心念念了好久的重庆火锅。之后也和钟典的女朋友打了个照面，踩雷一起观影了《姜子牙》。晚上回老家去看外公和姨妈们，又是吃的火锅，双重暴击。 ps.重庆乡镇的消费是真的低，一众9人才吃了不到400元。
        国庆第四天，一家人去KTV唱歌，我爸应该还是第一次去KTV吧，我妈跟我妹之前已经被带去过了。给我爸我妈点了好些老哥，气氛便自然的活跃了起来，现在一家5口很是热闹。阿莲也很放得开呀，可以配合我又唱又跳。特别有范特别有韵味。图片大误！晚上一家人又去了大舅家里，趁着国庆假期把他的生日操办一下，然而又是火辣火辣的火锅。今晚这一顿，肉特别特别多。不过阿莲因为我表哥劝酒，我喝了两口，就生了闷气。事后我妈又是赞赏阿莲又是训责我……
        国庆第五天，今天依旧是走亲戚的一天，下清溪到我大爸家吃生日宴。看到他们家的娃哟，一个个似雨后春笋般往上冒。中学生怎么看着都有180啦哟，我记得一年前我还是可以俯视他们的……
        `,
        pics: [
            "2020-09-30-启程机场.jpg",
            "2020-09-30-校园重游.jpg",
            "2020-10-01-清晨的豆花饭.jpg",
            "2020-10-01-他人婚宴.jpg",
            "2020-10-01-情侣合影.jpg",
            "2020-10-01-家庭合照.jpg",
            "2020-10-02-超带感的双椒长江鱼.jpg",
            "2020-10-02-逛街随手拍.jpg",
            "2020-10-02-老味道手工肥肠粉.jpg",
            "2020-10-02-全家上牌桌.jpg",
            "2020-10-03-串串火锅.jpg",
            "2020-10-04-KTV里自在唱.jpg"
        ],        
    },

    {
        date: '2020-10-06',
        title: '重庆夜游休闲逛',
        desc: `
        今儿吃过午饭就携阿莲启程上重庆主城了，在这个国庆长假抽给我俩一个短暂的双人旅行（ps：作为重庆人，我自己对主城并不熟悉）
        当天晚上就直接去了重庆最热网红打卡点——洪崖洞。这个独居特色的巴渝吊脚楼的确具有摄人心魂的魔力，顺崖而上，高低错落、依山而建，再配上这通明灯光，犹如一盏璀璨明灯，吸引着我们芸芸众生。
        楼外取景，楼内觅食。洪崖洞内的羊角豆干让阿莲很是喜爱，口感上佳，不柴不腻，开胃爽口；寻找特色小吃时，发现了涪陵油醪糟，被阿莲吐槽为啥在涪陵时不带她吃。哈哈！ （回深圳后，我们又网购了羊角豆干和涪陵油醪糟）

        第二天，我们上午转战磁器口，买麻花，扎彩辫，以及走访那些才被大水淹没过的商铺，也是蛮有趣的。下午去到朝天门商圈拍照取景，顺便再了解了解附近房价。晚上回到九街网吧一条街感受这成片成片灯红酒绿的氛围。 Over
        `,
        pics: [
            "2020-10-06-洪崖洞合影.jpg",
            "2020-10-07-磁器口扎彩辫.jpg",
            "2020-10-07-磁器口随手拍.jpg",
            "2020-10-07-朝天门随手拍.jpg",
            "2020-10-07-比翼天使.jpg"
        ],
    },

    {
        date: '2020-10-11',
        title: '婚约初定',
        desc: `
        今天和阿莲去弄牙齿，然后就莫名生闷气又跑到她姐那去了。待我找到她时，竟然在和她妈妈聊到我俩的婚约安排了。
        双方父母意见，大家都觉得满意OK，倒也没有什么外部障碍的。结与不结，良辰吉日咋选，其实已经是我俩自己的事了。
        前些日子，阿莲方才和我聊到结婚的日程安排，这就将初步计划公之于父母了，进一步感受到了人生的紧迫感，一切都已在路上。
        明年69日，领证办卡时。
        `,
        pics: [
        ],        
    },

    {
        date: '2020-10-18',
        title: '制作家乡特产——炸酥肉',
        desc: `
        国庆这才过去一两周，咱俩这嘴呀，就禁不住怀恋重庆的特色小吃了。这不重家里捎过来了正宗的红薯粉嘛，正好可以做做小酥肉解解馋。
        两次下油锅，将酥肉炸得外焦里酥，趁热捞起，配上阿莲的云南秘制辣椒面，吃在嘴里，热腾腾，香酥酥，辣椒面带动着味蕾的跳动。Nice!
        `,
        pics: [
            "2020-10-18-炸酥肉.jpg",
            "2020-10-18-酥肉成果图.jpg",
        ],        
    },
    
    {
        date: '2020-10-24',
        title: '阿莲带我进健身房',
        desc: `
        念叨几天的陪阿莲去健身房，拖到今天总算达成了。在健身房里阿莲陪我练了各种器械，作为我的专属私教为我讲解各个部位肌肉的锻炼。在各个肌肉力量的练习中，不得不忏愧自己比阿莲都弱了不止一点半点，尤其是核心及腹部力量。这就是坚持的力量呀！
        先以阿莲为目标，多多练习健身吧
        `,
        pics: [
            "2020-10-24-阿莲的健身照1.jpg",
            "2020-10-24-阿莲的健身照2.jpg",
        ],        
    },

    {
        date: '2020-11-02',
        title: '与诡异邻居的莫名冲突',
        desc: `
        大清早（阿莲）被窗外的滴水声烦醒，出去一探究竟，然后在租客群里质问大清早洗衣服不拧干晾外面阳台上。
        在讨论中，有个人的发言总是和大家不在一个频道上，感觉有些神经质质的，到了后面，似乎表现出一些些暴力倾向。
        后面和房东沟通，发现就是我们隔壁的一位。更恶心的是，到了晚上10点多钟，竟然放起来大分贝的DJ，群里质问也不理睬也不消停。
        阿莲突然一阵后怕，担心对方精神有问题，惹不起惹不起。可这哪睡得着。出门直接去敲她的门，然后就引来屋里的一阵骂娘。又反复试探了几次，已经确定此人是无法沟通的主了，一怒之下报了警。
        这下引得房东有些不开心，阿莲都有些担忧，我这血气之下意难平，岂容他人狂妄无人。后面警察也还确实来调解了，我也没出面，警察沟通一阵后，隔壁确实没了动静。重症确实得用猛药。
        经过此次事件之后，阿莲想搬家的心更急切了
        `,
        pics: [
            "2020-11-02-诡异邻居的胡言乱语.jpg",
        ]

    },

    {
        date: '2020-11-07',
        title: '婚检进行时',
        desc: `
        婚检孕检；返程溜达深圳湾，晚上欢乐海岸happy ending
        `,
        pics: [
            "2020-11-07-民政局一览.jpg",
            "2020-11-07-婚检信息表.jpg",
            "2020-11-07-深圳湾小憩.jpg",
            "2020-11-07-深圳湾溜达.jpg",
            "2020-11-07-欢乐海岸的音乐晚餐.jpg"
        ]
    },

    {
        date: '2020-11-10',
        title: '莲莲首次接驾',
        desc: `
        今晚本来还在培训会议中听课，莲莲让我早点下班，拿完夜宵就走。我也就急急忙忙把会议转到手机上，边走边听。可谁知我都走到地铁口，竟然让我回公司楼下等她。又是一个乌龙的小惊喜！
        一个工作受挫，一个工作繁忙，能在下班之后，一起在这云谷CBD走走逛逛，吃吃喝喝，也是个小确幸，洗涤掉工作上的疲惫。
        `,
        pics: [
            "2020-11-10-接驾犒赏喜茶.jpg",
            "2020-11-10-天安云谷的城市灯火.jpg",
        ]
    },


    {
        date: '2020-11-21',
        title: '搬入新家新气象',
        desc: `
        周六搬家，心里感慨到，“简直是搬了个超市”。周日接着搬，原来还是个“百货超市”[流泪]
        花瓶都有六个，帽子，包包十几个，发圈几大盒，鞋子几大袋，书也三大箱，口罩湿巾纸巾等生活用品都以袋记，几乎所有东西都有n多备份。
        女票为这个家付出了太多[流泪]～这个周末被淹没在行李里有感。
        `,
        pics: [
            "2020-11-21-搬家行李第一波.jpg",
            "2020-11-22-搬家行李第二波.jpg"
        ]
    },

    {
        date: '2020-11-28',
        title: '新家惬意周末',
        desc: `
        下班回家前，和阿莲精挑细选了几簇鲜花。一份冷淡素雅风格，一份暖色系奔放风格。在屋内都找到了它们合适的位置，让人看了心旷神怡，心情愉悦。
        周日早起，在家继续搞这个恋爱回忆录，中午和莲莲各自下厨搞了一份菜以做迁居宴。
        `,
        pics: [
            "2020-11-28-鲜花入新家1.jpg",
            "2020-11-28-鲜花入新家2.jpg",
            "2020-11-28-新家一瞥.jpg",
            "2020-11-29-周末简餐.jpg"
        ]
    },

    {
        date: '2020-12-05',
        title: '重游惠州海滨游上篇——1.5周年纪念日快乐',
        desc: `
        一年之后故地重游，看着波涛泛起浪花，一如既往地温柔，你也还在我身边，这让我有种错觉，似乎时间从未流逝，它载着我们，过尽千帆，直至生命尽头。
        同样的时间地点人物，不一样的玩法。
        到了巽寮湾，首先开始了帆船出海的活动。一开始坐在高的一侧，尽情欣赏着海上的波光粼粼。然而返航时陡然跌到接近水面，又是扶着女票，又是撑着绳索，心惊胆战。后面坦然得直接倒在船舷上，反倒轻松的玩起了水。
        中午吃过午饭去玩了CS。和一年前一样的地方，略过。
        下午送到酒店，五星级标准的酒店的确NB，名副其实的海景房。坐在阳台看着美景，赏心悦目。
        傍晚又到了一处海滩进行烧烤。趁着落日余晖，唱着KTV。女票上手烧烤，喂饱了我这个大胃王。之后放着烟火，围着篝火，玩着游戏。如此乐哉！
        晚上回到酒店，看着海上生明月，与莲共此时。
        又是一次难忘的纪念日回忆呢～
        `,
        pics: [
            "2020-12-05-酒店美景1.jpg",

            "2020-12-05-帆船出海.jpg",
            "2020-12-05-海水粼粼波光.jpg",

            "2020-12-05-酒店美景2.jpg",
            "2020-12-05-海滩落日余晖1.jpg",
            "2020-12-05-海滩落日余晖2.jpg",
            "2020-12-05-海滩烧烤.jpg",
            "2020-12-05-海滩烟火.jpg",
            "2020-12-05-海上生明月.jpg",
        ]
    },

    {
        date: '2020-12-06',
        title: '重游惠州海滨游下篇——莲莲生日快乐',
        desc: `
        看完海滨的日出全过程，不经感叹：世间的美好，不过如此！  随手一拍都是大片的感觉。 日出的见证下，我的心上人，将和我永远的依靠在一起。
        在今天，也迎来了阿莲的破壳日，和莲莲又开心的度过了一年！今年注定是不平凡的一年，平安喜乐好运莲莲！
        (ps. 今天一天有些身体不适，多些莲莲包容照顾我。虽然晚上回家终究还是惹她生气了。回家就躺睡，除了这个恋爱日记就没有什么其他礼物。)
        `,
        pics: [
            "2020-12-06-海滨日出之心上人.jpg",

            "2020-12-06-海滨日出之鱼肚白.jpg",
            "2020-12-06-海滨日出之将升未升.jpg",

            "2020-12-06-海滨日出之爱心偎依.jpg",
            "2020-12-06-海滨日出之双重爱心.jpg",
            "2020-12-06-海滨日出之朝阳下的索吻1.jpg",
            "2020-12-06-海滨日出之朝阳下的索吻2.jpg",
            "2020-12-06-海滨日出之墨镜下的美人.jpg",
            "2020-12-06-海滨日出之冷酷帅哥.jpg",
            "2020-12-06-海滨日出东升.jpg",
            "2020-12-06-海滨日出之沙雕造型.jpg",
            "2020-12-06-海滨耍酷.jpg",
            "2020-12-06-海边大长腿.jpg",
            "2020-12-06-玻璃栈道上的海景.jpg",
            "2020-12-06-壁纸般的海水.jpg",
            "2020-12-06-海滨荡秋千.jpg",
            "2020-12-06-海滨打水漂.jpg",
            "2020-12-06-退房前合影.jpg"
        ]
    },

    {
        date: '2020-12-09',
        title: '纪念日日常活动',
        desc: `
        今天的纪念日，又是在工作日，加上上周末已经秀得够多看，就简单找了家日料一起享受晚餐时光。just so so.
        `,
    },

    {
        date: '2020-12-12',
        title: '莲莲的第三次生日',
        desc: `
        生日嘛，不可或缺的就是和自己的亲朋好友凑在一起happy啦。上周阿莲没能约上自己的闺蜜们，这周补上。
        女生之间在一起就免不了释放自己买买买的天性。
        `,
        pics: [
            "2020-12-12-逛街莲.jpg",
            "2020-12-12-阿莲爱的36cake抹茶.jpg",
            "2020-12-12-和莲的生日合影.jpg"
        ]
    },

    {
        date: '2020-12-24',
        title: '平安夜的小确幸',
        desc: `
        最近项目上的事忙得我晕头转向，在这平安夜的晚上，竟还在埋头加班。索性阿莲温柔体贴，亲自赶到我的公司陪我。
        带着我给她买的卤大妈，来到我司楼下的奶茶店。一遍唠嗑一遍秀恩爱，好生幸福！
        `,
        pics: [
            "2020-12-24-平安夜的小确幸.jpg",
        ]
    },

    {
        date: '2020-12-27',
        title: '8号仓逛吃',
        desc: `
        2020年最后一个周末，给我买了一身装备，吃了一顿好吃的。太二酸菜鱼。19年重回深圳后与阿莲的第一次约会地。
        `,
        pics: [
            "2020-12-27-8号仓逛吃.jpg"
        ]
    },

    {
        date: '2021-01-10',
        title: '胖哥俩肉蟹煲',
        desc: `
        元旦去长沙逛吃，这周公司年会又去珠海参加盛宴。正好完美的避开我暗无天日的加班时光。不过周日莲莲回家还是得好生款待的。
        晚起赖到下午一两点再去接阿莲，然后就近在maxcity里吃了肉蟹煲。一锅的分量还是很足的，吃的很是满足。
        `,
        pics: [
            "2021-01-10-胖哥俩肉蟹煲.jpg"
        ]
    },

    {
        date: '2021-01-21',
        title: '阿莲健身成果图',
        desc: `
        我在加班，莲在运动。
        我俩都有美好的未来。
        单纯秀一波女票的美好身材~
        `,
        pics: [
            "2021-01-21-阿莲健身照1.jpg",
            "2021-01-21-阿莲健身照2.jpg"
        ]
    },

    {
        date: '2021-01-23',
        title: '忙里偷闲过周末',
        desc: `
        工作压得生活喘不过气来。做不完的工作，转不完的版本，已经快要忘记周末的滋味了。周六又是一如既往的加班准备版本转测。不过拖莲莲的福，今晚直接在公司楼下的电影院看了一场电影《心灵奇旅》，一部比较放松治愈的动画片。  幸福就是以为今天又要忙到12点，结果竟然可以提前去看一部电影。
        `,
        pics: [
            "2021-01-23-心灵奇旅电影之约.jpg"
        ]
    },

    {
        date: '2021-01-24',
        title: '磕磕绊绊又一岁',
        desc: `
        今天没有往日周末那么累，早上还起来吃了个早餐。毕竟莲莲还要早起出门见客户。下午总算有时间去理了个头发，神清气爽。去超市给阿莲买下周的伙食，还买了抄手叶晚上在家包抄手。
        晚上莲莲回来，带着我的生日礼物——乐高机甲。可以，这很男孩子。可阿莲看我的反应不够激烈，整个人就拉下了脸来。也许是周末没能休息好，一晚上的阴阳怪气，撒野闹脾气。
        这乐高拼也不是，不拼也不是。拼吧，没个几个小时，搞不出来的，今晚别想善终。不拼吧，一个劲抱怨我不喜欢礼物。男人难做呀。
        `,
        pics: [
            "2021-01-24-炫酷机甲外包装.jpg",
            "2021-01-24-乐高机甲8袋装.jpg",
            "2021-01-24-生日水饺.jpg"
        ]
    },

    {
        date: '2021-01-26',
        title: '公司楼下盼君归',
        desc: `
        今天莲莲又强烈要求来公司接我了，盼着能催促我早点下班。然而当她九点钟来到公司楼下时，我忙于环境部署切换中，难以脱身。不尽快把这些工作问题处理掉，则直接影响了组员们进一步的开发调试。先让金丰兄定位hold住，自己赶紧下楼把莲莲这尊大佛安抚住。在楼下找到了卤味小吃，配上奈雪的茶，和阿莲唠唠喝喝，稳住军心。待阿莲心态平和后，请命归岗，保证10点半下班，这才得以脱身。
        摸摸莲莲，最近加班不能多多陪陪你。年关将近，彼此扶持吧。
        `,
        pics: [
            "2021-01-26-公司楼下盼君归.jpg",
        ]
    },

    {
        date: '2021-01-27',
        title: '下班共觅食',
        desc: `
        今天没有那么紧急的事，和莲莲约了共同下班。想吃鱼去，结果那个点，要么停电要么打烊。最后找了绿茶餐厅，点了个酸菜鱼。虽不是专门做鱼的，但口感还真不错。再配上“中产水果”——车厘子。最近莲莲好了好几斤车厘子……
        `,
        pics: [
            "2021-01-27-餐前车厘子.jpg",
        ]
    },

    {
        date: '2021-01-30',
        title: '第一次到莲莲公司接下班',
        desc: `
        今天下班，一反往常之势，莲莲还滞留在公司里。以前每次接阿莲，都是在地铁口，今天我要亲自去她公司接她犒劳犒劳。于是乎，赶到她公司，接她吃了一大盆鱼。解了我俩的馋。
        两个人点了2斤7两的鱼，竟然还剩了好些。酸菜鱼头配菜等，打包回家。第二天下面吃，真香！
        `,
        pics: [
            "2021-01-30-椒游黑鱼.jpg",
        ]
    },

    {
        date: '2021-02-06',
        title: '生日会记事',
        desc: `
        生日礼物乐高积木战士成品show time；
        补上小年的生日会，预祝新年快乐；
        回家路上在花店阿莲拍照，被老板补刀“拍照被女朋友骂过吧”。老板拍的效果确实比我好一丢丢。
        `,
        pics: [
            "2021-02-06-乐高机甲成品图1.jpg",
            "2021-02-06-乐高机甲成品图2.jpg",
            "2021-02-06-海底捞生日会留影.jpg",
            "2021-02-06-美女择花.jpg",
        ]
    },

    {
        date: '2021-02-17',
        title: '返深波折，见面惊喜',
        desc: `
        本来下午三点的飞机，早上出门前发现短信通知，换到了晚上7点多的航班。这一波，可不就把自己的节奏打乱，更被说还得被阿莲一番轰炸。赶紧在网上看能否重新退票找合适的航班。也是幸运，换到了下午2点的航班。
        路上忽悠着阿莲晚上10点钟才到家。估摸着她下午五六点也正在回家的路上，正好可以到家提前给他个惊喜。
        然鹅！在机场到回家的地铁上，收到阿莲的视频，被地铁语音暴露了。但更巧的是，我们竟然在同一班地铁上！缘分呀！两人一起回家一起出门一起吃酸菜鱼。返深的幸福~
        `
    },

    {
        date: '2021-02-19',
        title: '无题',
        desc: `
        今天莲莲的螺蛳粉到了，让我给她拍个照，说是螺蛳粉包装和她睡衣很配。我也觉得。
        `,
        pics: [
            "2021-02-19-螺蛳粉友情代言.jpg",
        ]
    },

    {
        date: '2021-02-21',
        title: '周末记事0221',
        desc: `
        早上陪莲莲去医院做个检查，也就顺道在商场逛吃一波。
        就近找到椒游黑鱼的店，但是这次的店，感觉比上次的略逊一筹
        买鞋必逛百丽，今天阿莲挑了双老爹鞋，配上一张酷酷的照，我也买了双安特运动鞋，整个人很显活力。
        晚上在家里炖上自家的腊猪脚，醇厚浓香，汤泡饭都格外美味。周一还可以带到公司去继续干。
        `,
        pics: [
            "2021-02-21-鞋店留影1.jpg",
            "2021-02-21-鞋店留影2.jpg",
            "2021-02-21-鞋店留影3.jpg",
            "2021-02-21-煸香腊猪脚.jpg",
            "2021-02-21-腊猪脚一锅炖.jpg",
            "2021-02-21-腊猪脚成果图.jpg",
        ]
    },

    {
        date: '2021-02-28',
        title: '周末记事0228',
        desc: `
        月末周六，下班回来，还得去接健身回来的阿莲~
        周日又一大早去医院跑一趟，回来时候尚早，又陪着阿莲去剪头发，吃烤鱼。（ps.这次吃的混椒魔王味很Nice）
        今晚又是腊味餐宴。腊肉肥瘦均匀，开胃下饭；腊肠和饭一起煮格外喷香；再来个水煮儿菜解腻；爽歪歪。
        `,
        pics: [
            "2021-02-27-健身后的营养补充.jpg",
            "2021-02-28-探鱼新口味.jpg",
            "2021-02-28-腊肉切盘.jpg",
            "2021-02-28-腊肠丁蒸饭.jpg",
            "2021-02-28-简单晚餐.jpg",
        ]
    },

]

export default loveRecords
