# Margin & Spine — Launch Checklist

Work through this top to bottom. Items marked **(required)** must be done before sharing the site publicly.

## Before launch

- [ ] **Connect the form backend (required).** Open `index.html`, search `FORM BACKEND`, follow Option A (Formspree) or B (Netlify Forms). Without this, inquiries go nowhere.
- [ ] **Set the canonical URL (required).** In `index.html`, replace every `https://www.YOURDOMAIN.com/` (canonical tag, OG tags, Twitter tags, JSON-LD) with your real domain. Do the same in `sitemap.xml` and `robots.txt`.
- [ ] **Add the OG image.** Create a 1200×630 image (dark forest background, brass "Margin & Spine" wordmark works well) and save it as `assets/og/og-image.jpg`. Test the preview at [opengraph.xyz](https://www.opengraph.xyz).
- [ ] **Finish the favicon set.** `assets/icons/favicon.svg` is included. Generate `apple-touch-icon.png` (180×180) from it — [realfavicongenerator.net](https://realfavicongenerator.net) does this in one step.
- [ ] **Replace placeholder testimonials.** Search `tst-card` in `index.html`; swap in real attributed quotes as clients grant permission, and delete the italic disclaimer line below them.
- [ ] **Review copy once end-to-end** — pricing, email address, response-time promises.

## Deploy

- [ ] Push to GitHub and enable GitHub Pages **or** connect the repo to Netlify (steps in README.md).
- [ ] **Add your custom domain** in GitHub Pages / Netlify settings and update DNS. Confirm HTTPS is active (both platforms issue certificates automatically).

## Test after deploy

- [ ] **Test on a real phone** — hero, mobile menu, journey tabs, before/after toggle, form.
- [ ] **Submit a test inquiry** and confirm it arrives in your email/Formspree/Netlify dashboard.
- [ ] Click every nav link and footer link.
- [ ] Run [PageSpeed Insights](https://pagespeed.web.dev) — expect strong scores; investigate anything below ~90.
- [ ] Check keyboard navigation: Tab through nav, journey tabs (arrow keys work), toggle, and form.

## After launch

- [ ] **Google Search Console**: verify your domain, then submit `https://YOURDOMAIN.com/sitemap.xml`.
- [ ] **Analytics (optional).** Plausible (paid, privacy-friendly, one script tag) or Google Analytics 4 (free). Paste the snippet just before `</head>` in `index.html`.
- [ ] Set up a professional email on the domain (e.g. hello@marginandspine.studio) if not already live.
- [ ] Add the site link to your LinkedIn, Upwork profile, and email signature.
- [ ] Calendar reminder: refresh case studies and testimonials quarterly.
