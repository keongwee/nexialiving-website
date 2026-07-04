# Nexia Living — Website

Marketing website for **Nexia Living**, a design-led living and investment platform
(a partnership of Cover Projects & Shorea Capital). *We craft experiences, not just spaces.*

Static, multi-page site built with plain HTML, CSS, and vanilla JavaScript — **no build step,
no dependencies**. Host it anywhere that serves static files (GitHub Pages, Netlify, Vercel, S3…).

## Pages
| File | Page |
| --- | --- |
| `index.html` | Home |
| `about.html` | About Us (mission & vision, who we are, market opportunity, brands, story, shareholders & ecosystem, the people) |
| `services.html` | Our Services (services, values, track record) |
| `portfolio.html` | Portfolio (living categories, brands, The Initial Residence / The Initial Sama / You+) |
| `living-development.html` | Living Development Services (brands, capabilities, track record, what we deliver) |
| `careers.html` | Careers |
| `media.html` | Media (press, investor relations, social) |
| `contact.html` | Contact Us |

Shared across every page: `styles.css` (design system), `shared.js` (nav, mobile menu, scroll reveals),
and `assets/` (images & logos). Fonts (Archivo, Inter, Fraunces) load from Google Fonts.

## Run locally
```bash
python3 -m http.server 8000    # then open http://localhost:8000
```
or `npx serve .`

## Deploy to GitHub Pages
1. Push these files with `index.html` at the repo root.
2. **Settings → Pages → Build and deployment → Deploy from a branch**, choose `main` and `/ (root)`, Save.
3. Live at `https://<username>.github.io/<repo>/`.

The empty `.nojekyll` file makes GitHub Pages serve everything as-is (no Jekyll processing).

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
- Copy and structure live in the `.html` files.
- Global look-and-feel is controlled by CSS variables in `:root` at the top of `styles.css`.
- Images use relative paths like `assets/<name>.jpg` — keep the `assets/` folder next to the HTML.

## Assets
Brand names, logos, and photography are the property of their respective owners and are included
here for the Nexia Living site only.
