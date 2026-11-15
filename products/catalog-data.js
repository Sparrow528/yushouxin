/* 云桥国际 · 展厅数据字典
 * 由 products/index.html 抽出，四语内容原样保留。
 * 加会员改 MEMBERS，加品类改四语字典 + CAT_I18N，加产品不用动这个文件。
 */
const LANGS = ['zh','en','fr','ar'];
const LANG_LABELS = {zh:'中文',en:'EN',fr:'FR',ar:'عربي'};

const I18N = {
 zh: {
 brand:'云桥国际 · 会员专属平台', brand_sub:'YUNQIAO INTERNATIONAL MEMBERS PLATFORM',
 nav_products:'产品', nav_members:'会员企业', nav_market:'市场', nav_partners:'合作伙伴', nav_services:'服务',
 platform_name:'云桥国际文化交流有限公司', platform_sub:'会员专属平台 · 优质产品展示',
 platform_desc:'精选会员企业优质产品，向海内外意向客户展示。',
 back:'返回产品', loading:'加载中...', no_products:'暂无产品',
 sec_factory_tag:'工厂', factory_title:'工厂环境', factory_sub:'从原料到成品的完整生产线',
 sec_quality_tag:'质量', quality_title:'质量控制', quality_sub:'21年零质量投诉，四道质检把关', test_title:'测试设备',
 sec_design_tag:'设计', design_title:'设计能力', design_sub:'自有设计团队，支持来样定制',
 sec_cert_tag:'证书', cert_title:'认证证书', cert_sub:'通过国际社会责任与商业道德认证',
 foot_co:'云桥国际文化交流有限公司 · 会员专属平台', foot:'为会员企业提供产品展示服务',
 by:'由 {name} 提供', view_member:'查看企业介绍', popcorn_view:'爆米花视角',
 member_list_title:'会员企业', back_to_list:'返回列表',
 label_products:'款产品', label_members:'家会员',
 pc_cosmetic:'化妆包', pc_bags:'包类产品', pc_school:'书包', pc_backpack:'背包', pc_woman:'女包',
 pc_clothing:'服装纺织', pc_beauty:'美妆个护', pc_home:'家居日用', pc_food:'食品饮料', pc_fd_freeze:'冻干水果', pc_fd_snack:'休闲零食', pc_fd_tea:'茶饮', pc_fd_drink:'饮品', pc_fd_raw:'原料',
 pc_mom_baby:'母婴用品', pc_electronics:'电子电器', pc_phone_acc:'手机配件', pc_luggage:'行李箱', pc_sports:'运动户外', pc_furniture:'家装建材',
 pc_jewelry:'珠宝饰品', pc_stationery:'办公文教', pc_teaching_equipment:'教学设备', pc_auto:'汽车配件', pc_used_car:'二手车', pc_vehicle_service:'二手车服务', pc_other:'其他',
 pc_tomato:'番茄', pc_pepper:'辣椒', pc_watermelon:'西瓜', pc_rootstock:'砧木', pc_squash:'南瓜', pc_melon:'甜瓜', pc_cucumber:'黄瓜', pc_bitter_gourd:'苦瓜',
 pc_carrot:'胡萝卜', pc_radish:'萝卜', pc_cabbage:'甘蓝', pc_chinese_cabbage:'白菜', pc_broccoli:'花椰菜', pc_onion:'洋葱', pc_bunching_onion:'大葱', pc_leafy:'叶菜', pc_m_series:'M系列', pc_pmh_series:'PMH系列', pc_pmu_series:'PMU系列', pc_pmc_series:'PMC系列', pc_mps_series:'MPS系列', pc_le_series:'LE系列', pc_l_series:'L系列', pc_pl_series:'PL系列', pc_rmc_series:'RMC系列', pc_rmh_series:'RMH系列', pc_rlc_series:'RLC系列', pc_rlh_series:'RLH系列', pc_transparent:'透明屏系列',
 fc_sample:'样品间', fc_warehouse:'仓库', fc_cut:'裁剪车间', fc_sew:'缝纫车间', fc_inspect:'检验包装车间',
 qc1t:'原料检验', qc1d:'', qc2t:'裁剪/印花检验', qc2d:'', qc3t:'生产过程巡检', qc3d:'', qc4t:'成品检验', qc4d:'',
 desc_placeholder:'（产品介绍待补充）', close:'关闭', label_desc:'产品介绍', label_specs:'规格', products_title:'产品展示', products_sub:'该会员企业的产品',
 },
 en: {
 brand:'Yunqiao International', brand_sub:'MEMBERS PLATFORM',
 nav_products:'Products', nav_members:'Members', nav_market:'Markets', nav_partners:'Partners', nav_services:'Services',
 platform_name:'Yunqiao International Cultural Exchange Co., Ltd.', platform_sub:'Members Exclusive Platform · Quality Products',
 platform_desc:'Curated quality products from member enterprises, showcased to customers worldwide.',
 back:'Back to Products', loading:'Loading...', no_products:'No products yet',
 sec_factory_tag:'FACTORY', factory_title:'Factory Environment', factory_sub:'Complete production line from raw material to finished goods',
 sec_quality_tag:'QUALITY', quality_title:'Quality Control', quality_sub:'Zero quality complaint in 21 years, 4-stage inspection', test_title:'Testing Equipment',
 sec_design_tag:'DESIGN', design_title:'Design Capability', design_sub:'In-house design team, sample customization supported',
 sec_cert_tag:'CERTIFICATES', cert_title:'Certificates', cert_sub:'BSCI & SMETA certified',
 foot_co:'Yunqiao International Cultural Exchange Co., Ltd. · Members Platform', foot:'Product display service for member enterprises',
 by:'Provided by {name}', view_member:'View Company', popcorn_view:'Popcorn View',
 member_list_title:'Member Enterprises', back_to_list:'Back to List',
 pc_cosmetic:'Cosmetic Bags', pc_bags:'Bag Products', pc_school:'School Bags', pc_backpack:'Backpacks', pc_woman:'Woman Bags',
 pc_clothing:'Clothing & Textile', pc_beauty:'Beauty & Personal Care', pc_home:'Home & Living', pc_food:'Food & Beverage', pc_fd_freeze:'Freeze-dried Fruit', pc_fd_snack:'Snacks', pc_fd_tea:'Tea', pc_fd_drink:'Beverages', pc_fd_raw:'Raw Materials',
 pc_mom_baby:'Mom & Baby', pc_electronics:'Electronics', pc_phone_acc:'Phone Accessories', pc_luggage:'Luggage', pc_sports:'Sports & Outdoor', pc_furniture:'Furniture & Decor',
 pc_jewelry:'Jewelry & Accessories', pc_stationery:'Office & Stationery', pc_teaching_equipment:'Teaching Equipment', pc_auto:'Auto Parts', pc_used_car:'Used Cars', pc_vehicle_service:'Vehicle Services', pc_other:'Other',
 pc_tomato:'Tomato', pc_pepper:'Pepper', pc_watermelon:'Watermelon', pc_rootstock:'Rootstock', pc_squash:'Squash', pc_melon:'Melon', pc_cucumber:'Cucumber', pc_bitter_gourd:'Bitter Gourd',
 pc_carrot:'Carrot', pc_radish:'Radish', pc_cabbage:'Cabbage', pc_chinese_cabbage:'Chinese Cabbage', pc_broccoli:'Cauliflower', pc_onion:'Onion', pc_bunching_onion:'Bunching Onion', pc_leafy:'Leafy Greens', pc_m_series:'M Series', pc_pmh_series:'PMH Series', pc_pmu_series:'PMU Series', pc_pmc_series:'PMC Series', pc_mps_series:'MPS Series', pc_le_series:'LE Series', pc_l_series:'L Series', pc_pl_series:'PL Series', pc_rmc_series:'RMC Series', pc_rmh_series:'RMH Series', pc_rlc_series:'RLC Series', pc_rlh_series:'RLH Series', pc_transparent:'Transparent Series',
 fc_sample:'Sample Room', fc_warehouse:'Warehouse', fc_cut:'Cut Workshop', fc_sew:'Sewing Workshop', fc_inspect:'Inspect & Package Workshop',
 qc1t:'Raw material inspection', qc1d:'', qc2t:'Cut / print part inspection', qc2d:'', qc3t:'Patrol inspection', qc3d:'', qc4t:'Final inspection', qc4d:'',
 desc_placeholder:'(Description to be added)', close:'Close', label_desc:'Description', label_specs:'Specifications',
 },
 fr: {
 brand:'Yunqiao International', brand_sub:'PLATEFORME DES MEMBRES',
 nav_products:'Produits', nav_members:'Membres', nav_market:'Marchés', nav_partners:'Partenaires', nav_services:'Services',
 platform_name:'Yunqiao International Culture Exchange Co., Ltd.', platform_sub:'Plateforme Membres · Produits de Qualité',
 platform_desc:'Sélection de produits de qualité des entreprises membres, présentés aux clients du monde entier.',
 back:'Retour aux Produits', loading:'Chargement...', no_products:'Aucun produit',
 sec_factory_tag:'USINE', factory_title:'Environnement d\'Usine', factory_sub:'Ligne de production complète, de la matière première au produit fini',
 sec_quality_tag:'QUALITÉ', quality_title:'Contrôle Qualité', quality_sub:'Zéro plainte qualité en 21 ans, inspection en 4 étapes', test_title:'Équipement de Test',
 sec_design_tag:'DESIGN', design_title:'Capacité de Design', design_sub:'Équipe de design interne, personnalisation sur échantillon',
 sec_cert_tag:'CERTIFICATS', cert_title:'Certificats', cert_sub:'Certifié BSCI & SMETA',
 foot_co:'Yunqiao International Culture Exchange Co., Ltd. · Plateforme Membres', foot:'Service de présentation de produits pour les entreprises membres',
 by:'Fourni par {name}', view_member:'Voir l\'Entreprise', popcorn_view:'Vue Popcorn',
 member_list_title:'Entreprises Membres', back_to_list:'Retour à la liste',
 pc_cosmetic:'Sacs Cosmétiques', pc_bags:'Sacs', pc_school:'Cartables', pc_backpack:'Sacs à Dos', pc_woman:'Sacs Femme',
 pc_clothing:'Vêtements & Textile', pc_beauty:'Beauté & Soins', pc_home:'Maison & Vie', pc_food:'Alimentation', pc_fd_freeze:'Fruits Lyophilisés', pc_fd_snack:'Collations', pc_fd_tea:'Thé', pc_fd_drink:'Boissons', pc_fd_raw:'Matières Premières',
 pc_mom_baby:'Maternité & Bébé', pc_electronics:'Électronique', pc_phone_acc:'Accessoires Téléphone', pc_luggage:'Valises', pc_sports:'Sport & Plein Air', pc_furniture:'Meubles & Déco',
 pc_jewelry:'Bijoux & Accessoires', pc_stationery:'Bureau & Papeterie', pc_teaching_equipment:'Équipement Pédagogique', pc_auto:'Pièces Auto', pc_used_car:'Voitures d\'Occasion', pc_vehicle_service:'Services Véhicules', pc_other:'Autres',
 pc_tomato:'Tomate', pc_pepper:'Poivron', pc_watermelon:'Pastèque', pc_rootstock:'Porte-greffe', pc_squash:'Courge', pc_melon:'Melon', pc_cucumber:'Concombre', pc_bitter_gourd:'Concombre Amer',
 pc_carrot:'Carotte', pc_radish:'Radis', pc_cabbage:'Chou', pc_chinese_cabbage:'Chou Chinois', pc_broccoli:'Chou-fleur', pc_onion:'Oignon', pc_bunching_onion:'Ciboule', pc_leafy:'Légumes-feuilles', pc_m_series:'Série M', pc_pmh_series:'Série PMH', pc_pmu_series:'Série PMU', pc_pmc_series:'Série PMC', pc_mps_series:'Série MPS', pc_le_series:'Série LE', pc_l_series:'Série L', pc_pl_series:'Série PL', pc_rmc_series:'Série RMC', pc_rmh_series:'Série RMH', pc_rlc_series:'Série RLC', pc_rlh_series:'Série RLH', pc_transparent:'Série Transparente',
 fc_sample:'Salle d\'Échantillons', fc_warehouse:'Entrepôt', fc_cut:'Atelier de Coupe', fc_sew:'Atelier de Couture', fc_inspect:'Atelier d\'Inspection',
 qc1t:'Inspection matière première', qc1d:'', qc2t:'Inspection coupe/impression', qc2d:'', qc3t:'Inspection en cours', qc3d:'', qc4t:'Inspection finale', qc4d:'',
 desc_placeholder:'(Description à ajouter)', close:'Fermer', label_desc:'Description', label_specs:'Spécifications',
 },
 ar: {
 brand:'يونتشياو الدولية · منصة الأعضاء', brand_sub:'منصة الأعضاء يونتشياو الدولية',
 nav_products:'المنتجات', nav_members:'الأعضاء', nav_market:'الأسواق', nav_partners:'الشركاء', nav_services:'خدمات',
 platform_name:'شركة يونتشياو الدولية للتبادل الثقافي', platform_sub:'منصة الأعضاء · منتجات عالية الجودة',
 platform_desc:'منتجات مختارة من الشركات الأعضاء، معروضة للعملاء حول العالم.',
 back:'العودة إلى المنتجات', loading:'جارٍ التحميل...', no_products:'لا توجد منتجات',
 sec_factory_tag:'المصنع', factory_title:'بيئة المصنع', factory_sub:'خط إنتاج كامل من المواد الخام إلى المنتج النهائي',
 sec_quality_tag:'الجودة', quality_title:'مراقبة الجودة', quality_sub:'صفر شكوى جودة في 21 عاماً، تفتيش في 4 مراحل', test_title:'معدات الاختبار',
 sec_design_tag:'التصميم', design_title:'قدرة التصميم', design_sub:'فريق تصميم داخلي، تخصيص حسب العينة',
 sec_cert_tag:'الشهادات', cert_title:'شهادات الاعتماد', cert_sub:'حاصل على شهادات BSCI و SMETA',
 foot_co:'شركة يونتشياو الدولية للتبادل الثقافي · منصة الأعضاء', foot:'خدمة عرض المنتجات للشركات الأعضاء',
 by:'مقدم من {name}', view_member:'عرض الشركة', popcorn_view:'عرض البوب كورن',
 member_list_title:'الشركات الأعضاء', back_to_list:'العودة إلى القائمة',
 pc_cosmetic:'حقائب مستحضرات', pc_bags:'حقائب', pc_school:'حقائب مدرسية', pc_backpack:'حقائب ظهر', pc_woman:'حقائب نسائية',
 pc_clothing:'ملابس ونسيج', pc_beauty:'تجميل وعناية', pc_home:'منزل ومعيشة', pc_food:'أغذية ومشروبات', pc_fd_freeze:'فواكه مجففة', pc_fd_snack:'وجبات خفيفة', pc_fd_tea:'شاي', pc_fd_drink:'مشروبات', pc_fd_raw:'مواد خام',
 pc_mom_baby:'أمومة وطفولة', pc_electronics:'إلكترونيات', pc_phone_acc:'إكسسوارات الهاتف', pc_luggage:'حقائب سفر', pc_sports:'رياضة وهواية', pc_furniture:'أثاث وديكور',
 pc_jewelry:'مجوهرات وإكسسوارات', pc_stationery:'مكتبية وقرطاسية', pc_teaching_equipment:'معدات تعليمية', pc_auto:'قطع سيارات', pc_used_car:'سيارات مستعملة', pc_vehicle_service:'خدمات المركبات', pc_other:'أخرى',
 pc_tomato:'طماطم', pc_pepper:'فلفل', pc_watermelon:'بطيخ', pc_rootstock:'أصل التطعيم', pc_squash:'قرع', pc_melon:'شمام', pc_cucumber:'خيار', pc_bitter_gourd:'قرع مر',
 pc_carrot:'جزر', pc_radish:'فجل', pc_cabbage:'ملفوف', pc_chinese_cabbage:'ملفوف صيني', pc_broccoli:'قرنبيط', pc_onion:'بصل', pc_bunching_onion:'بصل أخضر', pc_leafy:'خضروات ورقية', pc_m_series:'سلسلة M', pc_pmh_series:'سلسلة PMH', pc_pmu_series:'سلسلة PMU', pc_pmc_series:'سلسلة PMC', pc_mps_series:'سلسلة MPS', pc_le_series:'سلسلة LE', pc_l_series:'سلسلة L', pc_pl_series:'سلسلة PL', pc_rmc_series:'سلسلة RMC', pc_rmh_series:'سلسلة RMH', pc_rlc_series:'سلسلة RLC', pc_rlh_series:'سلسلة RLH', pc_transparent:'سلسلة شاشات شفافة',
 fc_sample:'غرفة العينات', fc_warehouse:'المستودع', fc_cut:'ورشة القص', fc_sew:'ورشة الخياطة', fc_inspect:'ورشة التفتيش والتغليف',
 qc1t:'تفتيش المواد الخام', qc1d:'', qc2t:'تفتيش القص/الطباعة', qc2d:'', qc3t:'تفتيش دوري', qc3d:'', qc4t:'تفتيش نهائي', qc4d:'',
 desc_placeholder:'(الوصف سيتم إضافته لاحقاً)', close:'إغلاق', label_desc:'وصف المنتج', label_specs:'المواصفات',
 }
};

let lang = 'zh';
function t(k){ return (I18N[lang] && I18N[lang][k]) || I18N.zh[k] || k; }


const MEMBERS = [
 {
 id:'stage-leather', name:'浙江实达皮革服饰有限公司', nameEn:'ZHEJIANG STAGE LEATHER APPAREL CO., LTD.',
 nameFr:'ZHEJIANG STAGE LEATHER APPAREL CO., LTD.', nameAr:'شركة تشجيانغ شتاج ليثير للملابس الجلدية',
 category:'箱包制造', categoryEn:'Bags Manufacturing', categoryFr:'Fabrication de Sacs', categoryAr:'تصنيع الحقائب',
 intro:'2004年成立，21年专注服饰/箱包的设计、开发与生产，通过 BSCI、SMETA 认证。',
 introEn:'Established in 2004, 21 years specializing in clothes/bags design, development and production. BSCI & SMETA certified.',
 introFr:'Fondée en 2004, 21 ans de spécialisation en conception/développement de vêtements et sacs. Certifiée BSCI & SMETA.',
 introAr:'تأسست عام 2004، 21 عاماً من التخصص في تصميم وتطوير وإنتاج الملابس والحقائب. حاصلة على شهادات BSCI و SMETA.',
 hasDetail:true,
 },
 {
 id:'huizhi-guoke', name:'汇智国科船舶智能装备', nameEn:'HUIZHI GUOKE MARINE INTELLIGENT EQUIPMENT',
 nameFr:'HUIZHI GUOKE ÉQUIPEMENT MARITIME INTELLIGENT', nameAr:'هويتشي قوهكي للمعدات البحرية الذكية',
 category:'智能装备/水下机器人', categoryEn:'Intelligent Equipment / Underwater Robotics', categoryFr:'Équipement Intelligent / Robotique Sous-marine', categoryAr:'معدات ذكية / روبوتات تحت الماء',
 intro:'专注模块化智能水下作业机器人（ROV）研发与服务，核心产品集成超声探伤、空化清洗、水质监测三大功能模块。全向矢量推进、AI缺陷识别、100m水深作业能力，服务于航运船舶、海上风电、水利大坝、港口设施等领域，替代高危潜水作业，降本增效40%以上。',
 introEn:'Specializing in modular intelligent underwater ROV R&D and services. Core product integrates ultrasonic inspection, cavitation cleaning, and water quality monitoring. All-direction vector propulsion, AI defect recognition, 100m depth capability. Serving shipping, offshore wind, dams, and port infrastructure. Replacing dangerous diving operations, reducing costs by 40%+.',
 introFr:'Spécialisé dans les ROV sous-marins intelligents modulaires. Produit principal intégrant inspection ultrasonique, nettoyage par cavitation et surveillance de la qualité de l\'eau. Propulsion vectorielle omnidirectionnelle, reconnaissance IA des défauts, capacité 100m de profondeur.',
 introAr:'متخص في تطوير وخدمات الروبوتات المائية الذكية المعيارية. منتج رئيسي يدمج الفحص بالموجات فوق الصوتية والتنظيف بالتكييف ومراقبة جودة المياه. دفع متجهي شامل، تعرف AI على العيوب، عمق 100م.',
 hasDetail:false,
 },
 {
 id:'foosung-nb', name:'厚成精工(宁波)汽车部件有限公司', nameEn:'NINGBO FOOSUNG PRECISION CO., LTD.',
 nameFr:'NINGBO FOOSUNG PRECISION CO., LTD.', nameAr:'نينغبو فوسونغ بريسيشن للقطع السيارات',
 category:'汽车悬架/制动系统', categoryEn:'Automotive Suspension & Brake Systems', categoryFr:'Suspension et Systèmes de Freinage Automobile', categoryAr:'أنظمة التعليق والفرامل للسيارات',
 intro:'韩资企业，隶属韩国厚成精工集团。2011年落户宁波，专业生产汽车悬架装置（Base Ass\'y、UPP Ass\'y）和制动系统（S/ABS）。具备冲压、焊接、电泳涂装全工艺链，通过IATF16949等体系认证（至2027年）。客户涵盖万都、万向、蓝讯等知名车企。',
 introEn:'Korean-invested enterprise, part of Foosung Precision Group. Established in Ningbo in 2011, specializing in automotive suspension (Base Ass\'y, UPP Ass\'y) and brake systems (S/ABS). Full process chain: stamping, welding, e-coating. IATF16949 certified (through 2027). Customers include Mando, Wanxiang, Lanxun.',
 introFr:'Entreprise à capital coréen, filiale du groupe Foosung Precision. Établie à Ningbo en 2011, spécialisée en suspension automobile et systèmes de freinage. Chaîne complète: emboutissage, soudage, cataphorèse. Certifiée IATF16949 (jusqu\'en 2027).',
 introAr:'شركة كورية الاستثمار، جزء من مجموعة فوسونغ. تأسست في نينغبو 2011، متخصصة في أنظمة التعليق والفرامل للسيارات. سلسلة إنتاج كاملة: ختم، لحام، طلاء كهربائي. شهادة IATF16949.',
 hasDetail:false,
 },
 {
 id:'tianyang-stationery', name:'天扬文具', nameEn:'TIANYANG STATIONERY',
 nameFr:'TIANYANG STATIONERY', nameAr:'تيانيانغ للأدوات المكتبية',
 category:'箱包/文具', categoryEn:'Bags & Stationery', categoryFr:'Sacs et Papeterie', categoryAr:'حقائب وأدوات مكتبية',
 intro:'专业文具箱包制造商，产品线覆盖手提袋、牛津布包、网纱笔袋、PU包、背包等全品类。拥有迪士尼三丽鸥等IP授权，产品远销海外，性价比突出。',
 introEn:'Professional stationery & bag manufacturer. Full product line: handbags, Oxford cloth bags, mesh pencil cases, PU bags, backpacks. Licensed by Disney & Sanrio. Strong cost-performance ratio for overseas markets.',
 introFr:'Fabricant professionnel de sacs et papeterie. Produits sous licence Disney & Sanrio. Excellent rapport qualité-prix.',
 introAr:'شركة متخصصة في الأدوات المكتبية والحقائب. منتجات مرخصة من ديزني وسانريو.',
 hasDetail:false,
 },
 {
 id:'thermal-cup-maker', name:'智能保温杯厂商', nameEn:'SMART THERMAL CUP MANUFACTURER',
 nameFr:'FABRICANT DE GOBELETS THERMIQUES', nameAr:'مصنّع أكواب حرارية ذكية',
 category:'保温杯/水壶', categoryEn:'Thermal Cups & Flasks', categoryFr:'Gobelets Thermiques', categoryAr:'أكواب حرارية',
 intro:'专业保温杯水壶制造商，产品线涵盖智能温显杯、星星壶、太阳壶、子弹头杯、弹跳杯等150+款式。500ML-1000ML全容量覆盖，316不锈钢内胆，真空双层隔热，现货+定制灵活供应。',
 introEn:'Professional thermal cup manufacturer with 150+ models: smart temp display cups, star pots, bullet cups, pop-top cups. 500-1000ML capacity, 316 stainless steel, vacuum insulated. In-stock + custom available.',
 introFr:'Fabricant professionnel de gobelets thermiques, 150+ modèles. Acier 316, isolation vide. Stock + personnalisation.',
 introAr:'مصنّع متخصص للأكواب الحرارية، أكثر من 150 طراز. فولاذ 316، عزل مفرغ.',
 hasDetail:false,
 },
 {
 id:'usedcar-service', name:'二手车出口服务', nameEn:'USED CAR EXPORT SERVICE',
 nameFr:'SERVICE D\'EXPORTATION VOITURES D\'OCCASION', nameAr:'خدمة تصدير السيارات المستعملة',
 category:'二手车出口/改装/检测', categoryEn:'Used Car Export / Modification / Inspection', categoryFr:'Export VO / Modification / Inspection', categoryAr:'تصدير سيارات مستعملة',
 intro:'专业二手车出口一站式服务商，覆盖车辆检测评估、出口合规、右舵改装、目标国认证适配、国际物流、清关代理。主攻中东/非洲/东南亚/中亚市场，Toyota/Honda/Nissan/BMW等主流品牌整车出口，年出口量持续增长。',
 introEn:'Professional used car export one-stop service: inspection, compliance, RHD modification, destination certification, logistics, customs. Focus on Middle East/Africa/SE Asia/Central Asia markets.',
 introFr:'Service d\'exportation de voitures d\'occasion: inspection, conformité, modification volant à droite, logistique. Marchés: Moyen-Orient/Afrique/Asie du SE.',
 introAr:'خدمة تصدير سيارات مستعملة شاملة: فحص وامتثال وتعديل وخدمات لوجستية. أسواق: الشرق الأوسط/أفريقيا/آسيا.',
 hasDetail:false,
 },
 {
 id:'allens-house', name:"Allen's House", nameEn:"Allen's House",
 nameFr:"Allen's House", nameAr:"Allen's House",
 category:'消费电子/数据线', categoryEn:'Consumer Electronics / Cables', categoryFr:'Électronique Grand Public / Câbles', categoryAr:'إلكترونيات استهلاكية / كابلات',
 intro:"Allen's House 消费电子品牌（HICELL 技术支持），专业生产高品质数据线/充电线，符合 CE、RoHS 标准，支持 OEM/ODM 贴牌。",
 introEn:"Allen's House consumer electronics brand (powered by HICELL), specialized in high-quality data/charging cables, CE & RoHS compliant, OEM/ODM available.",
 introFr:"Marque d'électronique grand public Allen's House (propulsée par HICELL), spécialisée dans les câbles de données/charge de haute qualité, conforme CE & RoHS, OEM/ODM disponible.",
 introAr:"علامة Allen's House للإلكترونيات الاستهلاكية (بدعم من HICELL)، متخصصة في كابلات البيانات/الشحن عالية الجودة، متوافقة مع CE وRoHS.",
 hasDetail:false,
 },
 {
 id:'luggage-maker', name:'行李箱厂商', nameEn:'Luggage Manufacturer',
 nameFr:'Fabricant de Valises', nameAr:'مصنّع حقائب سفر',
 category:'行李箱/箱包', categoryEn:'Luggage & Cases', categoryFr:'Valises & Bagages', categoryAr:'حقائب سفر',
 intro:'专业行李箱制造商，覆盖ABS、PC、铝框、布箱等多种材质，20/24/28寸全尺寸。',
 introEn:'Professional luggage manufacturer, covering ABS, PC, aluminum frame, fabric cases in 20/24/28 inch.',
 introFr:'Fabricant professionnel de valises en ABS, PC, cadre aluminium et tissu.',
 introAr:'مصنّع محترف لحقائب السفر بعدة خامات وأحجام.',
 hasDetail:false,
 },
 {
 id:'shihe-robot', name:'史河机器人', nameEn:'SHIHE ROBOT',
 nameFr:'SHIHE ROBOT', nameAr:'شيخي روبوت',
 category:'高空特种机器人', categoryEn:'Aerial Special Robots', categoryFr:'Robots Aériens Spéciaux', categoryAr:'روبوتات جوية خاصة',
 intro:'史河机器人成立于2015年，清华大学博士团队创建，国家专精特新"小巨人"、国家高新技术企业。国内首家实现高空机器人产业化，产品覆盖船舶除锈、化工防腐、风电检测、外墙清洗等场景。',
 introEn:'Shihe Robot, founded in 2015 by a Tsinghua PhD team, is a national "Little Giant" and high-tech enterprise. First in China to industrialize aerial robots, covering ship rust removal, chemical anti-corrosion, wind turbine inspection, and facade cleaning.',
 introFr:'Shihe Robot, fondée en 2015 par une équipe de doctorants de Tsinghua, première entreprise chinoise à industrialiser les robots aériens.',
 introAr:'شيخي روبوت، تأسست عام 2015 على يد فريق دكتوراه من تسينغهوا، أول شركة صينية تصنّع الروبوتات الجوية صناعياً.',
 hasDetail:false,
 },
 {
 id:'liangzi-dongli', name:'北京量子动力贸易', nameEn:'Beijing Liangzi Dongli Trading',
 nameFr:'Beijing Liangzi Dongli Trading', nameAr:'بكين ليانغزي دونغلي للتجارة',
 category:'进口食品饮料代理', categoryEn:'Imported Food & Beverage Agency', categoryFr:'Agence Alimentaire Importée', categoryAr:'وكالة أغذية ومشروبات مستوردة',
 intro:'北京量子动力贸易有限公司成立于2014年，坐落于望京SOHO，综合性营销公司。代理韩国济州三多水、艾唯倪健康零食、OKF饮料等品牌，线上覆盖天猫/京东/抖音，线下覆盖7-11/盒马/胖东来等渠道，获中韩贸易突出贡献奖。',
 introEn:'Beijing Liangzi Dongli Trading Co., Ltd., founded in 2014 in Wangjing SOHO. Agency for Korean brands Jeju Samdasoo, ivenet snacks, OKF beverages. Online: Tmall/JD/Douyin; offline: 7-11/Hema/Pang Dong Lai. Awarded China-Korea Trade Contribution Award.',
 introFr:'Fondée en 2014, agence de marques coréennes (Samdasoo, ivenet, OKF).',
 introAr:'تأسست عام 2014، وكالة علامات كورية (سامداسو، إيفنيت، OKF).',
 hasDetail:false,
 },
 {
 id:'shinong-seed', name:'北京世农种苗有限公司', nameEn:'BEIJING SHINONG SEED CO., LTD.',
 nameFr:'BEIJING SHINONG SEED CO., LTD.', nameAr:'شركة بكين شينونغ للبذور المحدودة',
 category:'蔬菜种子育种/生产/销售', categoryEn:'Vegetable Seed Breeding / Production / Sales', categoryFr:'Sélection / Production / Vente de Semences Maraîchères', categoryAr:'تربية وإنتاج وبيع بذور الخضروات',
 intro:'成立于1994年，韩国 NONGWOO BIO（农友生物，隶属韩国农协）在中国的全资子公司。主营蔬菜种子育种、生产与销售，覆盖番茄、辣椒、西瓜、砧木、南瓜、甜瓜、黄瓜、苦瓜、胡萝卜、萝卜、甘蓝、白菜、花椰菜、洋葱、大葱、叶菜等16大品类。',
 introEn:'Founded in 1994, a wholly-owned Chinese subsidiary of NONGWOO BIO (Korea, part of the National Agricultural Cooperative Federation). Specialized in vegetable seed breeding, production and sales, covering 16 categories: tomato, pepper, watermelon, rootstock, squash, melon, cucumber, bitter gourd, carrot, radish, cabbage, Chinese cabbage, cauliflower, onion, bunching onion and leafy greens.',
 introFr:'Fondée en 1994, filiale chinoise à 100% de NONGWOO BIO (Corée, groupe de la Fédération Nationale Coopérative Agricole). Spécialisée en sélection, production et vente de semences maraîchères, couvrant 16 catégories: tomate, poivron, pastèque, porte-greffe, courge, melon, concombre, concombre amer, carotte, radis, chou, chou chinois, chou-fleur, oignon, ciboule et légumes-feuilles.',
 introAr:'تأسست عام 1994، وهي شركة تابعة مملوكة بالكامل لشركة نونغوو بايو الكورية (التابعة للاتحاد التعاوني الزراعي الوطني). متخصصة في تربية وإنتاج وبيع بذور الخضروات، وتغطي 16 فئة: طماطم، فلفل، بطيخ، أصل التطعيم، قرع، شمام، خيار، قرع مر، جزر، فجل، ملفوف، ملفوف صيني، قرنبيط، بصل، بصل أخضر، وخضروات ورقية.',
  hasDetail:false,
 },
 {
  id:'herun-bolan', name:'海南禾润斑兰生物科技有限公司', nameEn:'Hainan Herun Bolan Biotechnology Co., Ltd.',
  nameFr:'Hainan Herun Bolan Biotechnology Co., Ltd.', nameAr:'شركة هاينان هيرون بولان للتكنولوجيا الحيوية',
  category:'食品饮料 / 斑兰特产', categoryEn:'Food & Beverage / Pandan Specialty', categoryFr:'Alimentation / Spécialité Pandan', categoryAr:'أغذية ومشروبات / خاصية البندان',
  intro:'海南禾润斑兰生物专注斑兰（香露兜）系列产品研发，涵盖冻干水果、斑兰零食、斑兰茶饮、斑兰饮品与斑兰原料五大类，将海南热带特色植物与茶饮、烘焙场景结合。',
  introEn:'Hainan Herun Bolan Biotechnology specializes in pandan (Pandanus amaryllifolius) product series: freeze-dried fruits, pandan snacks, pandan teas, pandan drinks and pandan raw materials.',
  introFr:'Hainan Herun Bolan Biotechnology spécialisée dans la série pandan: fruits lyophilisés, snacks pandan, thés pandan, boissons pandan et matières premières pandan.',
  introAr:'متخصصة في سلسلة البندان: فواكه مجففة بالتجميد، وجبات خفيفة، شاي، مشروبات ومواد خام البندان.',
  hasDetail:false,
 },
 {
  id:'zhixue-school', name:'山东智学教学设备有限公司', nameEn:'SHANDONG ZHIXUE TEACHING EQUIPMENT CO., LTD.',
  nameFr:'SHANDONG ZHIXUE ÉQUIPEMENT PÉDAGOGIQUE', nameAr:'شاندونغ تشيشيو لمعدات التدريس',
  category:'教学设备/实验室/功能教室', categoryEn:'Teaching Equipment / Labs / Classrooms', categoryFr:'Équipement Pédagogique / Laboratoires / Salles', categoryAr:'معدات تعليمية / مختبرات / فصول',
  intro:'山东智学教学设备有限公司，品牌「智学校园」，现代化智能实验室专业厂家，集科研、生产、销售、专业化于一体。产品覆盖幼儿园、中小学学科功能教室、职校实训器材、高教教学仪器设备等，提供理化生实验室、通用技术、创客、VR、机器人、书法、国学等成套实验室与功能教室设施及仪器。',
  introEn:'Shandong Zhixue Teaching Equipment Co., Ltd., brand "Zhixue Xiaoyuan", is a professional modern smart laboratory manufacturer integrating R&D, production and sales. Products cover kindergartens, primary/secondary school subject classrooms, vocational training equipment and higher education teaching instruments, providing complete labs and functional classrooms (physics/chemistry/biology labs, maker, VR, robotics, calligraphy, Chinese studies, etc.) with supporting instruments.',
  introFr:'Shandong Zhixue Teaching Equipment Co., Ltd., marque "Zhixue Xiaoyuan", fabricant professionnel de laboratoires intelligents modernes intégrant R&D, production et vente. Produits couvrant jardins d\'enfants, salles de classe, équipements de formation professionnelle et instruments d\'enseignement supérieur.',
  introAr:'شاندونغ تشيشيو لمعدات التدريس، علامة "تشيشيو شياويوان"، شركة متخصصة في المختبرات الذكية الحديثة تجمع بين البحث والإنتاج والمبيعات. تغطي المنتجات رياض الأطفال وفصول المدارس ومعدات التدريب المهني وأدوات التعليم العالي.',
  hasDetail:false,
 },
 {
  id:'mulinsen', name:'木林森股份有限公司', nameEn:'MLS CO., LTD. (MULINSEN)',
  nameFr:'MLS CO., LTD. (MULINSEN)', nameAr:'شركة مولينسن المحدودة (إم إل إس)',
  category:'LED显示屏/半导体照明', categoryEn:'LED Display / Semiconductor Lighting', categoryFr:'Écrans LED / Éclairage à Semi-conducteurs', categoryAr:'شاشات LED / إضاءة أشباه الموصلات',
  intro:'木林森股份有限公司（股票代码：002745）成立于1997年，全球LED行业规模头部企业，构建从半导体芯片、LED灯珠到完整显示面板的全产业链垂直整合。业务覆盖LED外延芯片、驱动芯片、LED灯珠、显示面板及室内外固装/租赁/透明显示屏等，产品出口150多个国家，拥有1900+全球授权专利。',
  introEn:'MLS Co., Ltd. (MULINSEN, stock code: 002745), founded in 1997, is a global top-tier LED enterprise with full vertical integration from semiconductor chips and LED packages to complete display panels. Product range covers LED epitaxial chips, driver ICs, LED lamps, display panels, and indoor/outdoor fixed-installation, rental, and transparent LED displays, exported to 150+ countries with 1900+ global patents.',
  introFr:'MLS Co., Ltd. (MULINSEN, code boursier : 002745), fondée en 1997, est un leader mondial du LED avec intégration verticale complète, des puces semi-conducteurs aux panneaux d\'affichage. Gamme couvrant puces épitaxiées, drivers, lampes LED, panneaux et écrans LED intérieurs/extérieurs fixes, location et transparents, exportés vers 150+ pays, 1900+ brevets.',
  introAr:'شركة مولينسن المحدودة (إم إل إس، رمز السهم: 002745)، تأسست عام 1997، وهي من كبار شركات الصمام الثنائي الباعث للضوء عالمياً، بدمج رأسي كامل من رقائق أشباه الموصلات إلى لوحات العرض. منتجاتها تغطي رقائق الباعث المكشوف وشرائح القيادة ومصابيح LED ولوحات العرض والشاشات الداخلية والخارجية الثابتة والإيجارية والشفافة، مصدرة لأكثر من 150 دولة مع 1900+ براءة اختراع.',
  hasDetail:false,
 },
];

function getMemberName(m){
 if(lang==='zh') return m.name;
 if(lang==='fr') return m.nameFr || m.nameEn;
 if(lang==='ar') return m.nameAr || m.nameEn;
 return m.nameEn;
}
function getMemberCategory(m){
 if(lang==='zh') return m.category;
 if(lang==='fr') return m.categoryFr || m.categoryEn;
 if(lang==='ar') return m.categoryAr || m.categoryEn;
 return m.categoryEn;
}
function getMemberIntro(m){
 if(lang==='zh') return m.intro;
 if(lang==='fr') return m.introFr || m.introEn;
 if(lang==='ar') return m.introAr || m.introEn;
 return m.introEn;
}

/* 产品多语言：查 PRODUCT_I18N 映射，查不到则回退中文原文 */
function getProductName(p){
 if(lang==='zh') return p.name;
 var tr = (window.PRODUCT_I18N && window.PRODUCT_I18N[p.id] && window.PRODUCT_I18N[p.id][lang]);
 if(tr && tr.name) return tr.name;
 /* 世农种苗占位产品无人工翻译：按「品类 序号」用当前语言拼接，避免外语界面显示中文名 */
 if(p.member_id==='shinong-seed' && CAT_I18N[p.category]){
  var num = String(p.name||'').replace(/[^0-9]/g,'');
  return t(CAT_I18N[p.category]) + (num ? ' ' + num : '');
 }
 return p.name;
}
function getProductDesc(p){
 var d = p.description;
 if(lang==='zh') return d;
 var tr = (window.PRODUCT_I18N && window.PRODUCT_I18N[p.id] && window.PRODUCT_I18N[p.id][lang]);
 if(tr && tr.desc) return tr.desc;
 /* 中文占位文案在外语界面下沉为本地化的「待补充」提示 */
 if(p.member_id==='shinong-seed' && d === '产品介绍待补充') return '';
 return d;
}

const CAT_I18N = {
 cosmetic:'pc_cosmetic', bags:'pc_bags', school:'pc_school', backpack:'pc_backpack', woman:'pc_woman',
 clothing:'pc_clothing', beauty:'pc_beauty', home:'pc_home', food:'pc_food', fd_freeze:'pc_fd_freeze', fd_snack:'pc_fd_snack', fd_tea:'pc_fd_tea', fd_drink:'pc_fd_drink', fd_raw:'pc_fd_raw',
 mom_baby:'pc_mom_baby', electronics:'pc_electronics', phone_acc:'pc_phone_acc', luggage:'pc_luggage', sports:'pc_sports', furniture:'pc_furniture',
 jewelry:'pc_jewelry', stationery:'pc_stationery', teaching_equipment:'pc_teaching_equipment', auto:'pc_auto', used_car:'pc_used_car', vehicle_service:'pc_vehicle_service', other:'pc_other',
 /* 世农种苗 16 个蔬菜种子品类 */
 tomato:'pc_tomato', pepper:'pc_pepper', watermelon:'pc_watermelon', rootstock:'pc_rootstock', squash:'pc_squash', melon:'pc_melon',
 cucumber:'pc_cucumber', bitter_gourd:'pc_bitter_gourd', carrot:'pc_carrot', radish:'pc_radish', cabbage:'pc_cabbage', chinese_cabbage:'pc_chinese_cabbage',
 broccoli:'pc_broccoli', onion:'pc_onion', bunching_onion:'pc_bunching_onion', leafy:'pc_leafy', m_series:'pc_m_series', pmh_series:'pc_pmh_series', pmu_series:'pc_pmu_series', pmc_series:'pc_pmc_series', mps_series:'pc_mps_series', le_series:'pc_le_series', l_series:'pc_l_series', pl_series:'pc_pl_series', rmc_series:'pc_rmc_series', rmh_series:'pc_rmh_series', rlc_series:'pc_rlc_series', rlh_series:'pc_rlh_series', transparent:'pc_transparent'
};

/* 静态兜底：Supabase不可用时用本地图片 */
var FALLBACK = [];
[{k:'cosmetic',n:3},{k:'bags',n:2},{k:'school',n:1},{k:'backpack',n:1},{k:'woman',n:1}].forEach(function(c){
 for(var i=1;i<=c.n;i++) FALLBACK.push({id:1000+FALLBACK.length,name:t(CAT_I18N[c.k]||c.k)+' '+i,category:c.k,price:null,description:'',image:'images/'+c.k+'/'+c.k+i+'.jpg',specs:'',member_id:'stage-leather'});
});

/* 一级分组：只决定「归到哪一组、按什么顺序」，组内品类来自数据本身。
 * 新增品类即使不写进这里，也会自动落到「其他」，不会消失。 */
const CATEGORY_GROUPS = [
 { key:'bags', label:'箱包', cats:['cosmetic','bags','school','backpack','woman','luggage'] },
 { key:'electronics', label:'电子电器', cats:['electronics','phone_acc'] },
 { key:'auto', label:'汽车', cats:['auto','used_car','vehicle_service'] },
 { key:'home', label:'家居生活', cats:['home','mom_baby'] },
 { key:'food', label:'食品饮料', cats:['food','fd_freeze','fd_snack','fd_tea','fd_drink','fd_raw'] },
 { key:'fashion', label:'服饰美妆', cats:['clothing','beauty','jewelry'] },
 { key:'stationery', label:'办公文教', cats:['stationery','teaching_equipment'] },
 { key:'sports', label:'运动户外', cats:['sports','furniture'] },
 { key:'seed', label:'蔬菜种子', cats:['tomato','pepper','watermelon','rootstock','squash','melon','cucumber','bitter_gourd','carrot','radish','cabbage','chinese_cabbage','broccoli','onion','bunching_onion','leafy'] },
 { key:'led', label:'LED显示屏', cats:['m_series','pmh_series','pmu_series','pmc_series','mps_series','le_series','l_series','pl_series','rmc_series','rmh_series','rlc_series','rlh_series','transparent'] },
 { key:'other', label:'其他', cats:['other'] },
];
