# NeuroPixel

Independent web design and development studio based in Palakkad, Kerala, India.

## Project structure

```
index.html                 # Main single-page website
assets/css/styles.css      # All styles (custom properties, no framework)
assets/js/main.js          # Vanilla JS: mobile menu, FAQ, contact form → WhatsApp
assets/images/             # Project mockup SVGs
favicon.svg                # Site favicon
robots.txt                 # Search engine directives
sitemap.xml                # Sitemap for SEO
404.html                   # Not-found page
README.md                  # This file
```

## How to run locally

This is a static HTML/CSS/JS site. No build step is required.

1. Open the folder in any local server. For example, with Python:

   ```bash
   python -m http.server 8000
   ```

   Then visit `http://localhost:8000`.

2. Or with Node (if you have `http-server`):

   ```bash
   npx http-server .
   ```

3. Or simply open `index.html` directly in a browser.

## How to test

- Open `index.html` and verify all navigation links scroll to the correct sections.
- Open the mobile menu, navigate, press Escape to close.
- Click every WhatsApp CTA — it should open `https://wa.me/919495050785` with the correct prefilled message.
- Click every email link — it should open `mailto:ajmalsworkshop@gmail.com`.
- Fill in and submit the contact form — it should open WhatsApp with your details.
- Test FAQ accordion with keyboard (Tab, Enter/Space).
- Resize the browser from 320 px to 1920 px and check for overflow or overlap.
- Open browser DevTools → Console — no errors should appear.

## Cloudflare Pages deployment

1. Push this repository to GitHub (or connect your Git repo to Cloudflare).
2. In Cloudflare Pages, create a new project and connect the repository.
3. Build settings:
   - **Framework preset:** None
   - **Build command:** (leave empty — no build required)
   - **Output directory:** `/` (repository root)
   - **Root directory:** `/` (repository root)
4. Deploy. The site is served from `index.html` at the root.
5. To add a custom domain, go to the Pages project → Custom domains → Add domain.

No build command or output directory configuration is necessary because all assets are static and located at the repository root.

## How to edit content

### Contact details
- WhatsApp number: `919495050785` (used in `wa.me` links throughout `index.html` and `assets/js/main.js`).
- Email: `ajmalsworkshop@gmail.com`.
- Both appear in `index.html` and `main.js` (`WA_BASE` constant).

### Prices and packages
- Edit package cards directly in `index.html` under the Pricing section.
- Add actual INR prices when ready. The note `Pricing depends on your project scope...` shows until prices are added.

### Portfolio projects
- Edit project items directly in `index.html` under the Work section.
- Each item: title, tags, description, image, and the `Concept project` badge.
- Place preview images in `assets/images/`.
- Only add a real link for genuine deployed projects; concept projects have no link.

## Accessibility

- Skip-to-content link, semantic landmarks, visible focus states.
- Mobile menu uses `aria-expanded`, `aria-controls`, closes on Escape and after navigation.
- FAQ accordion uses buttons with `aria-expanded` and associated panels.
- Form fields have labels, required attributes, inline errors, and `aria-invalid`.
- Respects `prefers-reduced-motion`.

## Performance

- No JavaScript framework, no tracking, no third-party scripts except Google Fonts (preconnected).
- SVG mockups are lightweight and local.
- Images lazy-load below the fold; hero images load normally.
- Target: LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1.

## Security & privacy

- No API keys or secrets in frontend source.
- No analytics or tracking.
- Contact form sends data only to WhatsApp via `wa.me` (client-side, no backend).
- No claim is made that form data is stored or delivered automatically.
