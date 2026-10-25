# Xuan Yao — Academic Profile

Website: https://xuanwuji.github.io/

A restrained, bilingual academic homepage built with plain HTML, CSS, and JavaScript. The design emphasizes system typography, clear hierarchy, comfortable spacing, and accessible navigation.

English is the default for first-time visitors, including when JavaScript is unavailable. The language switcher preserves an explicit Chinese or English choice across visits.

## Update content

- `index.html`: English biography, research interests, bibliography, education, and contact text.
- `script.js`: Chinese and English translations, language switching, and saved preference.
- `styles.css`: responsive layout and visual styling.
- `portrait.jpg`: original portrait extracted from the author-provided CV.

Keep contact details as plain, obfuscated text. Do not add a telephone number, a raw email address, a mail link, or an unredacted CV file. Do not reconstruct email addresses in scripts or metadata. This text formatting reduces simple address harvesting but does not prevent all automated scraping.

## Content and publication status

Profile and education follow the author-provided CV. Project descriptions are deliberately brief; training scales, performance figures, experimental details, and internal workflows are omitted.

The bibliography distinguishes published papers, an accepted paper, and a manuscript under review. Acceptance and manuscript status follow the CV; an acceptance claim is not inferred from a preprint. Published entries link to their DOI. Author spelling on published entries follows public bibliographic records, where the name appears as Yao Xuan. The profile uses the author's preferred name, Xuan Yao.

Public references checked on 2026-10-25:

- https://doi.org/10.1016/j.bbrc.2026.153729
- https://doi.org/10.1093/bib/bbaf327
- https://arxiv.org/abs/2508.11190

## Preview and deployment

Run `python3 -m http.server 4173` in this directory, then open http://localhost:4173.

GitHub Pages serves the root of the `main` branch in `xuanwuji/xuanwuji.github.io`. The `.nojekyll` file enables direct static publishing. No external fonts, analytics, or runtime dependencies are required.
