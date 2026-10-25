(() => {
  'use strict';
  const english = {
    skip: 'Skip to content', navAbout: 'About', navWork: 'Work', navConnect: 'Connect',
    heroLine: 'Where computation meets life.<br>Stay curious. Keep exploring.',
    heroDescription: 'Hi, I’m EZRA. This is a collection of my public projects, from representations of biological data to molecular interaction prediction and structural visualization.',
    explore: 'Explore projects', newTab: ' (opens in a new tab)', aboutHeading: 'A little about me',
    aboutLead: 'Starting with data.<br>Exploring the complexity of life.',
    aboutBody: 'My public projects bring computational methods to biological data, spanning spatial transcriptomics, peptide–HLA binding prediction, and geometric representations of protein structures. Code, method descriptions, and usage information are available in each GitHub repository.',
    topic1: 'Representation learning', topic2: 'Molecular interactions', topic3: 'Scientific visualization',
    workHeading: 'Selected projects', workIntro: 'Representations, predictions, and a view of structure.',
    spatialDescription: 'A contrastive learning workflow for spot representations in spatial transcriptomics data.', spatialTag: 'Contrastive learning',
    phlaDescription: 'A Transformer architecture with cross-attention for predicting peptide–HLA binding specificity and affinity.',
    voronoiDescription: 'A module for converting protein PDB structures into Voronoi diagrams and visualizing structural information.',
    viewRepo: 'View GitHub repository in a new tab', allProjects: 'Browse all public repositories',
    connectHeading: 'Keep ideas<br><em>in motion.</em>', connectBody: 'Let’s talk about projects, code, and new ideas.<br>Find me on GitHub.', connectLink: 'Find me on GitHub', source: 'Site source'
  };
  const elements = [...document.querySelectorAll('[data-i18n]')];
  const chinese = Object.fromEntries(elements.map(el => [el.dataset.i18n, el.innerHTML]));
  const toggle = document.querySelector('[data-language]');
  let language = 'zh';
  try { if (localStorage.getItem('ezra-language') === 'en') language = 'en'; } catch (_) {}
  function renderLanguage() {
    const dictionary = language === 'en' ? english : chinese;
    elements.forEach(el => { if (dictionary[el.dataset.i18n]) el.innerHTML = dictionary[el.dataset.i18n]; });
    document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN';
    toggle.innerHTML = `${language === 'en' ? '中文' : 'EN'} <span aria-hidden="true">↗</span>`;
    toggle.setAttribute('aria-label', language === 'en' ? '切换为中文' : 'Switch to English');
    document.querySelector('[data-nav]').setAttribute('aria-label', language === 'en' ? 'Main navigation' : '主导航');
    document.querySelector('.wordmark').setAttribute('aria-label', language === 'en' ? 'EZRA home' : 'EZRA 首页');
    document.querySelector('.topic-list').setAttribute('aria-label', language === 'en' ? 'Project themes' : '项目主题');
    document.querySelector('meta[name="description"]').content = language === 'en' ? 'EZRA (xuanwuji). Public projects in spatial transcriptomics, peptide–HLA binding prediction, and protein structure visualization.' : 'EZRA（xuanwuji）的个人主页。探索空间转录组表征学习、肽-HLA 结合预测与蛋白结构可视化。';
  }
  toggle.addEventListener('click', () => {
    language = language === 'zh' ? 'en' : 'zh'; renderLanguage();
    try { localStorage.setItem('ezra-language', language); } catch (_) {}
  });
  document.querySelector('[data-year]').textContent = String(new Date().getFullYear());
  renderLanguage();
})();
