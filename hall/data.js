// hall data v1  (28 sample products, Chinese labels)
const HALL = {
  zones: [
  {
    "id": "bags",
    "name": "箱包",
    "en": "Bags & Luggage",
    "count": 27,
    "filter": "none",
    "hot": {
      "left": "8%",
      "top": "30%",
      "width": "20%",
      "height": "40%"
    }
  },
  {
    "id": "electronics",
    "name": "电子电器",
    "en": "Electronics",
    "count": 17,
    "filter": "hue-rotate(200deg) saturate(1.2)",
    "hot": {
      "left": "30%",
      "top": "18%",
      "width": "18%",
      "height": "34%"
    }
  },
  {
    "id": "auto",
    "name": "汽车",
    "en": "Automotive",
    "count": 12,
    "filter": "hue-rotate(0deg) saturate(1.1) brightness(0.9)",
    "hot": {
      "left": "52%",
      "top": "18%",
      "width": "18%",
      "height": "34%"
    }
  },
  {
    "id": "home",
    "name": "家居生活",
    "en": "Home & Living",
    "count": 12,
    "filter": "hue-rotate(30deg) saturate(0.9)",
    "hot": {
      "left": "74%",
      "top": "30%",
      "width": "20%",
      "height": "40%"
    }
  },
  {
    "id": "food",
    "name": "食品饮料",
    "en": "Food & Beverage",
    "count": 32,
    "filter": "hue-rotate(-20deg) saturate(1.3)",
    "hot": {
      "left": "8%",
      "top": "68%",
      "width": "20%",
      "height": "26%"
    }
  },
  {
    "id": "stationery",
    "name": "办公文教",
    "en": "Stationery",
    "count": 3,
    "filter": "hue-rotate(180deg) saturate(0.8)",
    "hot": {
      "left": "32%",
      "top": "62%",
      "width": "16%",
      "height": "26%"
    }
  },
  {
    "id": "veg",
    "name": "蔬菜种子",
    "en": "Seeds & Vegetables",
    "count": 24,
    "filter": "hue-rotate(90deg) saturate(1.2)",
    "hot": {
      "left": "54%",
      "top": "62%",
      "width": "16%",
      "height": "26%"
    }
  }
],
  products: [
  {
    "id": 102,
    "name": "化妆包四件套 时尚印花系列",
    "zone": "bags",
    "subcat": "化妆包",
    "company": "北京量子动力贸易",
    "img": "images/cosmetic/stage_cosmetic_series3.jpg",
    "specs": "材质:牛津布|规格:四件套|用途:化妆品收纳",
    "price": "询价",
    "desc": "时尚印花化妆包四件套，颜值与实用兼具。"
  },
  {
    "id": 101,
    "name": "化妆包四件套 精致便携系列",
    "zone": "bags",
    "subcat": "化妆包",
    "company": "北京量子动力贸易",
    "img": "images/cosmetic/stage_cosmetic_series2.jpg",
    "specs": "材质:牛津布|规格:四件套|用途:化妆品收纳",
    "price": "询价",
    "desc": "精致化妆包四件套，多规格组合，满足不同收纳需求。"
  },
  {
    "id": 100,
    "name": "化妆包四件套 旅行收纳系列",
    "zone": "bags",
    "subcat": "化妆包",
    "company": "北京量子动力贸易",
    "img": "images/cosmetic/stage_cosmetic_series1.jpg",
    "specs": "材质:牛津布|规格:四件套|用途:化妆品收纳",
    "price": "询价",
    "desc": "轻便化妆包四件套，大容量分层收纳，旅行出差随身携带。"
  },
  {
    "id": 55,
    "name": "猎魔女团PU三角包 5205",
    "zone": "bags",
    "subcat": "包类",
    "company": "شركة يونتشياو الدولية للتبادل الثقافي",
    "img": "images/bags/天扬_s4_r8.jpg",
    "specs": "21.5×3.5×8.5cm",
    "price": "",
    "desc": "52系列PU三角包，猎魔女团主题，PU材质。"
  },
  {
    "id": 79,
    "name": "外墙清洗机器人",
    "zone": "electronics",
    "subcat": "电子电器",
    "company": "智能保温杯厂商",
    "img": "images/robot/robot4.jpg",
    "specs": "负压吸附 · 锁水自清洁 · 物业清洗标准",
    "price": "",
    "desc": "史河外墙清洗机器人，索式多腔负压吸附，锁水式自清洁，满足物业清洗标准，用于高层建筑外墙清洗。"
  },
  {
    "id": 78,
    "name": "风电塔筒检测机器人",
    "zone": "electronics",
    "subcat": "电子电器",
    "company": "智能保温杯厂商",
    "img": "images/robot/robot3.jpg",
    "specs": "立面定位±1cm · 多机协同 · 无损检测",
    "price": "",
    "desc": "史河风电塔筒检测机器人，立面自主定位导航，多机协同无损检测，用于风电塔筒检测维护。"
  },
  {
    "id": 77,
    "name": "化工罐防腐机器人",
    "zone": "electronics",
    "subcat": "电子电器",
    "company": "智能保温杯厂商",
    "img": "images/robot/robot2.jpg",
    "specs": "防爆认证 · 化工罐体防腐 · 第三代产品",
    "price": "",
    "desc": "史河化工罐防腐机器人，第三代防爆除锈机器人，获首个防爆合格证，用于化工罐体防腐除锈作业。"
  },
  {
    "id": 76,
    "name": "船舶除锈机器人",
    "zone": "electronics",
    "subcat": "电子电器",
    "company": "智能保温杯厂商",
    "img": "images/robot/robot1.jpg",
    "specs": "超高压水射流 · 作业高度200m · 效率提升3-5倍",
    "price": "",
    "desc": "史河船舶除锈机器人，超高压水射流除锈，效率较人工提升3-5倍，作业高度200m，船舶行业市占率超70%。"
  },
  {
    "id": 9,
    "name": "汽车制动系统 S/ABS Assembly",
    "zone": "auto",
    "subcat": "汽车配件",
    "company": "Yunqiao International Culture Exchange Co., Ltd.",
    "img": "images/auto/foosung_brake.jpg",
    "specs": "类型:S/ABS总成|工艺:冲压/焊接/电泳|认证:IATF16949|特点:CAE优化设计|应用:制动系统",
    "price": "询价",
    "desc": "厚成精工生产的S/ABS制动系统总成，含Base Ass'y和Insulator Ass'y。精密冲压成型，焊接装配，电泳防腐涂装。产品经CAE分析优化，确保钢板成型部位抗开裂、抗拉伸起皱。"
  },
  {
    "id": 8,
    "name": "汽车悬架总成 Base Ass'y",
    "zone": "auto",
    "subcat": "汽车配件",
    "company": "Yunqiao International Culture Exchange Co., Ltd.",
    "img": "images/auto/foosung_suspension.jpg",
    "specs": "工艺:冲压/焊接/电泳|认证:IATF16949(至2027)|应用:乘用车/商用车悬架|客户:万都/万向/蓝讯",
    "price": "询价",
    "desc": "厚成精工专业生产的汽车悬架Base Assembly总成件，采用精密冲压+焊接+电泳涂装全工艺链制造。适用于各类乘用车/商用车悬架系统，配套万都、万向、蓝讯等知名车企。IATF16949体系认证保障。"
  },
  {
    "id": 34,
    "name": "日产途乐 二手大型SUV",
    "zone": "auto",
    "subcat": "二手车",
    "company": "汇智国科船舶智能装备",
    "img": "images/usedcar/car7.jpg",
    "specs": "车型:全尺寸SUV|品牌:Nissan",
    "price": "询价",
    "desc": "全尺寸硬派越野SUV，中东沙漠标配车型，地位象征。"
  },
  {
    "id": 33,
    "name": "现代途胜 二手SUV",
    "zone": "auto",
    "subcat": "二手车",
    "company": "汇智国科船舶智能装备",
    "img": "images/usedcar/car6.jpg",
    "specs": "车型:紧凑SUV|品牌:Hyundai",
    "price": "询价",
    "desc": "韩系紧凑SUV，性价比高，设计时尚，中东/东南亚新兴市场增速快。"
  },
  {
    "id": 65,
    "name": "星星壶 MK-24",
    "zone": "home",
    "subcat": "家居日用",
    "company": "浙江实达皮革服饰有限公司",
    "img": "images/home/保温杯_s1_r25.jpg",
    "specs": "800ML",
    "price": "",
    "desc": "经典星星壶保温壶，800ML大容量。"
  },
  {
    "id": 64,
    "name": "吊带壶 MK-22",
    "zone": "home",
    "subcat": "家居日用",
    "company": "浙江实达皮革服饰有限公司",
    "img": "images/home/保温杯_s1_r23.jpg",
    "specs": "800ML",
    "price": "",
    "desc": "便携吊带保温壶，800ML大容量。"
  },
  {
    "id": 63,
    "name": "大理石星星壶 MK-20",
    "zone": "home",
    "subcat": "家居日用",
    "company": "浙江实达皮革服饰有限公司",
    "img": "images/home/保温杯_s1_r21.jpg",
    "specs": "800ML",
    "price": "",
    "desc": "星星壶系列保温壶，大理石纹设计，800ML大容量。"
  },
  {
    "id": 60,
    "name": "温显史迪仔保温杯 MK-10",
    "zone": "home",
    "subcat": "家居日用",
    "company": "浙江实达皮革服饰有限公司",
    "img": "images/home/保温杯_s1_r11.jpg",
    "specs": "500ML",
    "price": "",
    "desc": "智能温显保温杯，史迪仔IP授权，500ML容量。"
  },
  {
    "id": 99,
    "name": "济州三多水矿泉水（家庭装）",
    "zone": "food",
    "subcat": "食品",
    "company": "二手车出口服务",
    "img": "images/food/qzl_sanshui_family.jpg",
    "specs": "韩国进口 · 家庭装",
    "price": "",
    "desc": "韩国济州三多水矿泉水家庭装，大容量，火山岩层天然矿泉水。"
  },
  {
    "id": 98,
    "name": "济州三多水矿泉水（便携装）",
    "zone": "food",
    "subcat": "食品",
    "company": "二手车出口服务",
    "img": "images/food/qzl_sanshui_550ml.jpg",
    "specs": "韩国进口 · 便携装",
    "price": "",
    "desc": "韩国济州三多水矿泉水便携装，火山岩层天然矿泉水。"
  },
  {
    "id": 97,
    "name": "济州三多水矿泉水",
    "zone": "food",
    "subcat": "食品",
    "company": "二手车出口服务",
    "img": "images/food/qzl_sanshui_2L.jpg",
    "specs": "韩国进口 · 矿泉水",
    "price": "",
    "desc": "韩国济州特别自治道开发公社出品，济州三多水矿泉水，源自济州岛火山岩层。"
  },
  {
    "id": 96,
    "name": "艾唯倪迪迪长米饼",
    "zone": "food",
    "subcat": "食品",
    "company": "二手车出口服务",
    "img": "images/food/qzl_iwen_didi_long.jpg",
    "specs": "有机 · 长米饼",
    "price": "",
    "desc": "韩国艾唯倪迪迪长米饼，一根米饼双重营养。"
  },
  {
    "id": 52,
    "name": "三角包网纱笔袋 6503（莫兰迪色）",
    "zone": "stationery",
    "subcat": "办公文教",
    "company": "شركة يونتشياو الدولية للتبادل الثقافي",
    "img": "images/stationery/天扬_s3_r5.jpg",
    "specs": "22.5×3.5×8.5cm",
    "price": "",
    "desc": "加厚尼龙网纱笔袋，三角造型，莫兰迪色系。"
  },
  {
    "id": 51,
    "name": "三角包网纱笔袋 6502（黑白灰）",
    "zone": "stationery",
    "subcat": "办公文教",
    "company": "شركة يونتشياو الدولية للتبادل الثقافي",
    "img": "images/stationery/天扬_s3_r2.jpg",
    "specs": "22.5×3.5×8.5cm",
    "price": "",
    "desc": "加厚尼龙网纱笔袋，三角造型，黑白灰配色。"
  },
  {
    "id": 14,
    "name": "四角包网纱笔袋",
    "zone": "stationery",
    "subcat": "办公文教",
    "company": "شركة يونتشياو الدولية للتبادل الثقافي",
    "img": "images/stationery/ty6602_pencil.jpg",
    "specs": "型号:6602|材质:加厚尼龙网纱|尺寸:23×6×6cm|包装:240个/件|特点:大容量",
    "price": "询价",
    "desc": "加厚尼龙网纱四角笔袋，型号6602，尺寸23×6×6cm，240个/件。比三角包容量更大，黑白灰/莫兰迪色/复古色可选，实用与美观兼具。"
  },
  {
    "id": 240,
    "name": "洋葱 1",
    "zone": "veg",
    "subcat": "洋葱",
    "company": "行李箱厂商",
    "img": "images/shinong/onion-1.jpg",
    "specs": "",
    "price": "询价",
    "desc": "产品介绍待补充"
  },
  {
    "id": 242,
    "name": "洋葱 3",
    "zone": "veg",
    "subcat": "洋葱",
    "company": "行李箱厂商",
    "img": "images/shinong/onion-3.jpg",
    "specs": "",
    "price": "询价",
    "desc": "产品介绍待补充"
  },
  {
    "id": 241,
    "name": "洋葱 2",
    "zone": "veg",
    "subcat": "洋葱",
    "company": "行李箱厂商",
    "img": "images/shinong/onion-2.jpg",
    "specs": "",
    "price": "询价",
    "desc": "产品介绍待补充"
  },
  {
    "id": 192,
    "name": "胡萝卜 3",
    "zone": "veg",
    "subcat": "胡萝卜",
    "company": "行李箱厂商",
    "img": "images/shinong/carrot-3.jpg",
    "specs": "",
    "price": "询价",
    "desc": "产品介绍待补充"
  }
]
};
