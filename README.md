# Nexia Living — Website

Marketing website for **Nexia Living**, a design-led living and investment platform
(a partnership of Cover Projects & Shorea Capital). *We craft experiences, not just spaces.*

This is a static, multi-page site built with plain HTML, CSS, and a small amount of
vanilla JavaScript — **no build step and no dependencies**. It can be hosted anywhere
that serves static files (GitHub Pages, Netlify, Vercel, S3, etc.).

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home |
| `about.html` | About Us (mission & vision, who we are, market opportunity, brands, story, ecosystem, the people) |
| `services.html` | Our Services (services, values, track record) |
| `portfolio.html` | Portfolio (living categories, brands, The Initial Residence / The Initial Sama / You+) |
| `living-development.html` | Living Development Services |
| `careers.html` | Careers |
| `media.html` | Media (press, investor relations, social) |
| `contact.html` | Contact Us |

Shared across every page:

- `styles.css` — the full design system (colors, typography, components)
- `shared.js` — navigation (mobile menu), scroll reveals, small interactions
- `assets/` — images and logos (~56 files)

Fonts (Archivo, Inter, Fraunces) are loaded from Google Fonts via `<link>` in each page.

## Run locally

No tooling required — just serve the folder:

```bash
# Python 3
python3 -m http.server 8000
# then open http://localhost:8000
```

or with Node:

```bash
npx serve .
```

Opening the HTML files directly via `file://` also works, but a local server is
recommended so relative asset paths resolve exactly as they will in production.

## Deploy to GitHub Pages

1. Create a new repository and push these files (with `index.html` at the repo root).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source: Deploy from a branch**, choose your
   default branch (e.g. `main`) and the `/ (root)` folder, then **Save**.
4. Your site publishes at `https://<username>.github.io/<repo>/` within a minute or two.

The included empty `.nojekyll` file tells GitHub Pages to serve the files as-is
(skipping Jekyll processing), which is what you want for a plain static site.

### Quick push

```bash
git init
git add .
git commit -m "Nexia Living website"
git branch -M main
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```

## Editing notes

- All copy and structure live directly in the `.html` files.
- Global look-and-feel is controlled by CSS variables in `:root` at the top of `styles.css`
  (navy / cream / clay palette, spacing, the fixed frame border, etc.).
- Images are referenced with relative paths like `assets/<name>.jpg` — keep the
  `assets/` folder alongside the HTML.

## License / assets

Site code is provided for Nexia Living. Brand names, logos, and photography are the
property of their respective owners and are included here for the Nexia Living site only.
