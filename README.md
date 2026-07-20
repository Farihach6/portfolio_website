# Fariha Chaudhary — Personal Portfolio

A responsive, single-page personal portfolio built with plain HTML, CSS, and JavaScript for the
iCodeGuru "Zero to Gen AI Developer" Bootcamp — Week 2 Assignment (Module 2: Web App Development).

**Live demo:** _add your Vercel URL here after deploying_
**Repository:** https://github.com/Farihach6/my-portfolio

## Overview

The site is a single page (`index.html`) with these sections:

- **Hero** — name, role, and a short intro, inside a gradient header with navigation
- **About** — a short bio
- **Skills** — grouped skill cards (Languages & Mobile, Backend & Data, AI & Design)
- **Projects** — six real project cards (Expense Tracker Pro, SecureHer, MedConnect, Daily Digest
  CLI, Task API, Graph Algorithm Toolkit)
- **Live Demo** — two `fetch()`-powered widgets pulling a random quote and a random joke from
  public APIs, each with loading and error states
- **Certifications** — Coursera certificates (Google, IBM, Meta)
- **Contact** — a working client-side contact form plus a footer with email, GitHub, and LinkedIn
  links

### Bonus features implemented

- Smooth scroll for in-page navigation (`scroll-behavior: smooth`)
- A second `fetch()` call to an independent API (joke API, alongside the quote API)
- Card lift hover animation (`transform: translateY(...)` + `transition`) on skill, project, and
  API cards
- A styled contact form with name, email, and message fields

## Folder Structure

```
my-portfolio/
├── index.html        # Page structure and content (semantic HTML)
├── styles.css         # All styling: reset, layout, Flexbox, responsive design, dark mode
├── script.js          # Dark mode toggle, fetch calls, contact form handling
├── profile.svg        # Hero profile image (initials avatar)
├── vercel.json        # Vercel deployment configuration (clean URLs)
├── .gitignore
└── README.md
```

No build tools, frameworks, or dependencies are required — this is a static site that runs
directly in the browser.

## Installation / Local Setup

1. Clone or download this folder.
2. Open `index.html` directly in a browser, **or** serve it locally for the best experience:
   ```bash
   npx serve .
   ```
   or, with Python:
   ```bash
   python3 -m http.server 5500
   ```
3. Visit `http://localhost:5500` (or the port shown in your terminal).

No environment variables or `.env` file are needed — the two public APIs used
(`api.quotable.io` and `official-joke-api.appspot.com`) require no API key.

## Push to GitHub

```bash
git init
git add .
git commit -m "my portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/my-portfolio.git
git push -u origin main
```

## Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up with **Continue with GitHub**.
2. Click **Add New Project**, find `my-portfolio` in your repositories, and click **Import**.
3. Set the Framework Preset to **Other**. Leave all other settings at their defaults — no build
   command or output directory is required for this static site.
4. Click **Deploy** and wait for the "Congratulations!" screen.
5. Open the generated `*.vercel.app` URL to confirm the site loads correctly, then test it on
   mobile as well.

Every future `git push` to `main` will automatically redeploy the live site.

## Requirement Completion Checklist

| Area | Requirement | Status |
|---|---|---|
| **HTML Structure** | Full boilerplate (DOCTYPE, `lang`, charset, viewport, title, CSS link, bottom script tag) | ✅ |
| | `header` with `nav` (logo left, 4 links right: `#about #skills #projects #contact`) | ✅ |
| | Hero inside `header`: `h2` name, subtitle, `img` with `alt` | ✅ |
| | `main` with `#about`, `#skills` (4+ `.skill-card`), `#projects` (2+ `.project-card` with `h3` + paragraph) | ✅ (13 skill cards, 6 project cards) |
| | `footer#contact` with `&copy;` entity and `mailto:` link | ✅ |
| | Semantic tags only — no layout `div`s | ✅ |
| **CSS Styling** | Universal reset (`margin/padding: 0`, `box-sizing: border-box`) + global font/background/text | ✅ |
| | Gradient header (two colors), white text, generous padding | ✅ |
| | Flexbox `nav`: `space-between`, `align-items: center`, no bullets/underlines | ✅ |
| | Centered hero, `max-width` + `margin: 0 auto`, circular profile image with white border | ✅ |
| | Flexbox skills container: `flex-wrap`, `gap`, `justify-content: center` | ✅ |
| | Card styling: white background, padding, rounded corners, box-shadow | ✅ |
| | At least one `:hover` effect | ✅ (multiple: cards, buttons, nav links, toggle) |
| | `@media (max-width: 768px)` — nav and skills switch to column | ✅ |
| | Dark footer (`#333333`), white centered text, top margin | ✅ |
| **JavaScript** | `script.js` linked at bottom of `body` | ✅ |
| | Dark mode button toggles `body.dark-mode` via `classList.toggle`, updates emoji | ✅ |
| | `getElementById` + `addEventListener` used (no inline `onclick`) | ✅ |
| | `fetch()` call with Loading → data → friendly error handling | ✅ (quote API + joke API) |
| **GitHub** | Public repo with `index.html`, `styles.css`, `script.js` | ⬜ _(complete after you push)_ |
| **Vercel Deployment** | Live URL opens and displays the portfolio | ⬜ _(complete after you deploy)_ |
| **Personalisation** | Real name, real skills, real projects, no placeholder text | ✅ |
| **Bonus B1** | Smooth scroll on nav links | ✅ |
| **Bonus B2** | Second independent `fetch()` API | ✅ |
| **Bonus B3** | Card lift hover animation with `transform` + `transition` | ✅ |
| **Bonus B4** | Contact form (name, email, message) | ✅ |
| **Bonus B5** | Custom domain | ⬜ _(optional, your choice)_ |

The two ⬜ items depend on you pushing to GitHub and deploying to Vercel yourself, as planned —
everything else is fully implemented and ready to go.
