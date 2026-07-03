# Margin & Spine — Authority Book Studio

The official website for **Margin & Spine**, a boutique authority book studio for founders, consultants, coaches, and executives. Book strategy, ghostwriting, editing, cover design, and publishing — presented as a cinematic "live book production studio."

Built as a fast, framework-free static site: pure HTML, CSS, and vanilla JavaScript. No build step required.

## Project structure

```
margin-and-spine-website/
├── index.html              # All content and copy lives here
├── css/
│   └── styles.css          # Full design system (brand tokens at the top)
├── js/
│   └── main.js             # All interactions (no libraries)
├── assets/
│   ├── icons/              # favicon.svg (add apple-touch-icon.png, 180×180)
│   ├── images/             # future photos/graphics
│   └── og/                 # add og-image.jpg here (1200×630) for social previews
├── docs/
│   └── launch-checklist.md # everything to do before/after going live
├── robots.txt
├── sitemap.xml
├── package.json            # optional — local preview server only
└── .gitignore
```

## Run locally

No install needed. Either:

**Option 1 — just open it.** Double-click `index.html`. Everything works from the file system.

**Option 2 — local server (recommended, mirrors production):**

```bash
npx serve .
# → http://localhost:3000
```

Or with Python: `python3 -m http.server 8000`

## Deploy on GitHub Pages

1. Push this repo to GitHub (see commands below).
2. In your repo: **Settings → Pages**.
3. Under *Build and deployment*, set Source to **Deploy from a branch**, branch **main**, folder **/ (root)**. Save.
4. Your site goes live at `https://YOUR-USERNAME.github.io/margin-and-spine-website/` within a minute or two.
5. Custom domain: add it under Settings → Pages → Custom domain, then point your DNS (CNAME to `YOUR-USERNAME.github.io`).

> Note: GitHub Pages cannot receive form submissions by itself — use Formspree for the contact form (see below).

## Deploy on Netlify

1. Go to [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project**.
2. Connect your GitHub account and pick this repo.
3. Build command: *(leave empty)*. Publish directory: `/` (root). Deploy.
4. Custom domain: **Site settings → Domain management → Add custom domain**, then follow the DNS instructions.

Netlify also supports built-in form handling — see next section.

## Connect the contact form

The inquiry form currently shows a success message without sending anywhere. Open `index.html` and search for **`FORM BACKEND`** — the comment there walks you through both options:

- **Formspree** (works everywhere, incl. GitHub Pages): create a free form at formspree.io and add `method="POST" action="https://formspree.io/f/YOUR_FORM_ID"` to the `<form>` tag.
- **Netlify Forms** (Netlify hosting only): add `method="POST" name="inquiry" data-netlify="true"` to the `<form>` tag plus the honeypot field shown in the comment.

No JavaScript changes are needed — `js/main.js` detects a configured backend automatically and switches from demo mode to real submission.

## Update content

Everything a non-developer needs is in `index.html`, in reading order:

| What | Where |
|---|---|
| Headline, intro, stats | `<section class="hero">` |
| Pipeline / dashboard rows | `<section id="studio">` |
| Process stages | `<section id="process">` (six `j-panel` blocks) |
| Services & pricing | `<section id="services">` |
| Case studies | `<section id="work">` |
| Testimonials | search `tst-card` — replace placeholder quotes |
| Founder note | `<section id="about">` |
| Email address | search `hello@marginandspine.studio` |
| Live activity feed items | `feedPool` array in `js/main.js` |
| Brand colors & fonts | `:root { … }` at the top of `css/styles.css` |

Also search **`TODO`** in `index.html` for the canonical URL, OG image, and favicon placeholders, and see `docs/launch-checklist.md` before going live.

## Tech notes

- No frameworks, no dependencies, no build step — deploys anywhere static files are served.
- Google Fonts (Fraunces + Inter) load with `preconnect` + `display=swap`.
- Animations are GPU-friendly (`transform`/`opacity`), use IntersectionObserver, and respect `prefers-reduced-motion`.
- All visuals are hand-built CSS/SVG — no stock images to license or optimize.

---

© Margin & Spine. Founded by Ubaid Ur Rahman.
