(() => {
  'use strict';
  const english = {
    skip:'Skip to content', navResearch:'Research', navPublications:'Publications', navExperience:'Background', navContact:'Contact',
    role:'Ph.D. student in Computer Science', affiliation:'University of Tsukuba · Tsukuba, Japan',
    bio:'My research focuses on AI for RNA therapeutics, particularly generative modeling and optimization of functional RNA and coding sequences, with related interests in single-cell omics and immunoinformatics.',
    newTab:' (opens in a new tab)', researchHeading:'Research interests', rnaHeading:'RNA generative modeling', rnaText:'Generative design and optimization of functional RNA and coding sequences.', singleHeading:'Single-cell omics', singleText:'Representation learning for single-cell data with hybrid quantum–classical methods.', immuneHeading:'Immunoinformatics', immuneText:'Peptide–HLA interaction prediction and computational analysis of TCR–pMHC.',
    publicationsHeading:'Publications & manuscripts', authorNote:'Also published as Yao Xuan. <sup>†</sup> Equal contribution.', published:'Published', acceptedLabel:'Preprint 2025', accepted:'Accepted', acceptedVenue:'(accepted)', preprint:'Preprint', underReview:'Under review', manuscript:'Research manuscript · Under review',
    experienceHeading:'Education & experience', expected:'(expected)', tsukuba:'University of Tsukuba', phdDegree:'Ph.D. in Computer Science · In progress', supervisor:'Supervisor: ', jointMentors:'Joint mentors: ', sustech:'Southern University of Science and Technology', msDegree:'M.S. in Bioinformatics', hunan:'Hunan University', bsDegree:'B.S. in Biotechnology', internshipHeading:'Research internship', present:'Present', internRole:'Algorithm Research Intern · Software Algorithm Division', internText:'Research on hybrid quantum–classical algorithms for single-cell omics.', contactHeading:'Get in touch', contactText:'I welcome conversations about RNA modeling, computational biology, and related research.', backTop:'Back to top ↑'
  };
  const nodes = [...document.querySelectorAll('[data-i18n]')];
  const chinese = {
    "skip": "跳转到正文",
    "navResearch": "研究",
    "navPublications": "论文",
    "navExperience": "经历",
    "navContact": "联系",
    "role": "计算机科学博士生",
    "affiliation": "筑波大学 · 日本筑波",
    "bio": "我的研究关注面向 RNA 治疗的人工智能方法，重点是功能 RNA 与编码序列的生成建模和优化，并涉及单细胞组学与免疫信息学。",
    "newTab": "（新标签页打开）",
    "researchHeading": "研究方向",
    "rnaHeading": "RNA 生成建模",
    "rnaText": "面向功能 RNA 与编码序列的生成设计和优化。",
    "singleHeading": "单细胞组学",
    "singleText": "单细胞数据的表征学习与量子–经典计算方法。",
    "immuneHeading": "免疫信息学",
    "immuneText": "肽–HLA 相互作用预测与 TCR–pMHC 计算分析。",
    "publicationsHeading": "论文与手稿",
    "authorNote": "论文署名亦见 Yao Xuan。<sup>†</sup> 表示同等贡献。",
    "published": "已发表",
    "acceptedLabel": "预印本 2025",
    "accepted": "已接收",
    "acceptedVenue": "（已接收）",
    "preprint": "预印本",
    "underReview": "审稿中",
    "manuscript": "研究手稿 · 审稿中",
    "experienceHeading": "教育与经历",
    "expected": "（预计）",
    "tsukuba": "筑波大学",
    "phdDegree": "计算机科学 · 博士在读",
    "supervisor": "导师：",
    "jointMentors": "联合指导：",
    "sustech": "南方科技大学",
    "msDegree": "生物信息学 · 硕士",
    "hunan": "湖南大学",
    "bsDegree": "生物技术 · 学士",
    "internshipHeading": "研究实习",
    "present": "至今",
    "internRole": "算法研究实习生 · 软件算法部",
    "internText": "参与面向单细胞组学的量子–经典混合算法研究。",
    "contactHeading": "学术交流",
    "contactText": "欢迎就 RNA 建模、计算生物学及相关研究交流。",
    "backTop": "返回顶部 ↑"
  };
  const button = document.querySelector('[data-language]');
  let language = 'en';
  try { const saved = localStorage.getItem('academic-language'); if (saved === 'zh' || saved === 'en') language = saved; } catch (_) {}
  function render() {
    const dict=language==='en'?english:chinese;
    nodes.forEach(node=>{node.innerHTML=dict[node.dataset.i18n];});
    document.documentElement.lang=language==='en'?'en':'zh-CN';
    button.textContent=language==='en'?'中文':'EN';
    button.setAttribute('aria-label',language==='en'?'切换为中文':'Switch to English');
    document.querySelector('.nav').setAttribute('aria-label',language==='en'?'Main navigation':'主导航');
    document.querySelector('.brand').setAttribute('aria-label',language==='en'?'Xuan Yao home':'Xuan Yao 首页');
    document.querySelector('.portrait img').alt=language==='en'?'Portrait of Xuan Yao':'Xuan Yao 的照片';
    document.querySelectorAll('.email').forEach(node=>node.setAttribute('aria-label',language==='en'?'Email: '+node.textContent:'电子邮箱：'+node.textContent));
    document.querySelector('meta[name="description"]').content=language==='en'?'Xuan Yao, Computer Science Ph.D. student at the University of Tsukuba. AI for RNA therapeutics, single-cell omics, and immunoinformatics.':'Xuan Yao，筑波大学计算机科学博士生。研究方向包括面向 RNA 治疗的人工智能、单细胞组学与免疫信息学。';
  }
  button.addEventListener('click',()=>{language=language==='en'?'zh':'en';render();try{localStorage.setItem('academic-language',language);}catch(_) {}});
  document.querySelector('[data-year]').textContent=String(new Date().getFullYear());
  render();
})();
