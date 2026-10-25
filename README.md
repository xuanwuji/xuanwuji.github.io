# EZRA — personal website

Website: https://xuanwuji.github.io/

A lightweight, bilingual personal homepage. Plain HTML, CSS, and JavaScript; no build tools or third-party runtime dependencies. Includes mobile layouts, keyboard focus styles, reduced-motion support, a custom 404 page, and basic search metadata.

## Editing

- `index.html`: Chinese content, public project links, metadata.
- `script.js`: English translations. The language preference is stored locally in the visitor's browser.
- `styles.css`: layout and colors.
- `water-study.svg`: original abstract cover illustration (not scientific data).
- `favicon.svg`: site icon.

## Preview locally

Run `python3 -m http.server 4173` in this folder, then visit http://localhost:4173.

## GitHub Pages

Repository: `xuanwuji/xuanwuji.github.io`.
In Settings → Pages select **Deploy from a branch**, **main**, and **/(root)**. Save. `.nojekyll` serves the static files directly. Future commits to `main` automatically update the site.

## Content sources

Initial content was checked against public sources on 2026-10-25:

- https://github.com/xuanwuji — display name, affiliation field, country, and “Be water” bio.
- https://github.com/xuanwuji/SpatialCL — spatial transcriptomics and contrastive learning description.
- https://github.com/xuanwuji/pHLAformer — prediction targets and model description.
- https://github.com/xuanwuji/pdb2voronoi — structure visualization description.

The site summarizes repository descriptions and does not claim independent validation of their scientific results. No private repositories, unpublished materials, personal email, publication record, or inferred job title are included.
