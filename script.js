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
  const chinese = Object.fromEntries(nodes.map(node=>[node.dataset.i18n,node.innerHTML]));
  const button = document.querySelector('[data-language]');
  let language = 'zh';
  try { if (localStorage.getItem('academic-language') === 'en') language='en'; } catch (_) {}
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
