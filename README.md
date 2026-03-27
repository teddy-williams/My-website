# mavuso-williams.github.io

Personal website for **Mavuso Williams** — Aspiring SOC Analyst, threat detection enthusiast, TryHackMe Top 1%, and Cape Town native.

Live at: `https://teddy-williams.github.io` *(update with your actual URL)*

---

## About the project

A hand-built personal site with no frameworks, no build tools, and no dependencies beyond a Google Fonts import. Just HTML, CSS, and vanilla JavaScript — written to be easy to read, easy to edit, and fast to load.

The site serves as a home for my professional profile, a blog where I write about cybersecurity and life, and a landing page for my personal AI chatbot (coming soon).

---

## Pages

| File | Description |
|------|-------------|
| `index.html` | Homepage — hero, about snippet, latest posts, contact teaser |
| `about.html` | Full story, skills, timeline, values |
| `writing.html` | Blog index with category filters |
| `contact.html` | Contact form + social links |
| `ask.html` | Personal AI chatbot embed (placeholder — to be wired up) |
| `posts/*.html` | Individual blog post pages |

---

## Project structure

```
mavuso-site/
├── index.html
├── about.html
├── writing.html
├── contact.html
├── ask.html
│
├── css/
│   ├── style.css       # Global styles, nav, hero, layout, components
│   └── blog.css        # Blog index cards, individual post layout, TOC
│
├── js/
│   ├── main.js         # Nav toggle, active link, fade-up scroll, typed effect, contact form
│   └── blog.js         # Category filter, table-of-contents scroll tracking
│
├── posts/
│   └── what-is-a-soc.html   # Sample post — use as template for new articles
│
└── img/                # Drop your photos here
```

---

## Tech stack

- **HTML5** — semantic, accessible markup
- **CSS3** — custom properties, grid, flexbox, keyframe animations
- **Vanilla JavaScript** — no libraries, no bundler
- **Fonts** — [DM Serif Display](https://fonts.google.com/specimen/DM+Serif+Display) + [DM Sans](https://fonts.google.com/specimen/DM+Sans) + [DM Mono](https://fonts.google.com/specimen/DM+Mono) via Google Fonts
- **Form handling** — [Formspree](https://formspree.io) (free tier, no backend required)

---

## Getting started

No build step required. Clone and open.

```bash
git clone https://github.com/mavusowilliams/mavuso-williams.github.io.git
cd mavuso-williams.github.io
open index.html
```

Or serve it locally with Python if you want to test navigation between pages:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

---

## Setup checklist

- [ ] Add your photo to `img/` and uncomment the `<img>` tags in `index.html` and `about.html`
- [ ] Update your email, LinkedIn, GitHub, and TryHackMe links in `contact.html`
- [ ] Sign up at [formspree.io](https://formspree.io), create a form, and replace `YOUR_FORM_ID` in `contact.html`
- [ ] Update the live URL at the top of this README once deployed

**For the chatbot (ask.html):**
- [ ] Paste your chatbot iframe or script embed inside the marked comment block in `ask.html`

---

## Writing new blog posts

1. Duplicate `posts/what-is-a-soc.html` and rename it (e.g. `posts/my-new-post.html`)
2. Update the `<title>`, `<meta name="description">`, and all content inside `.post-body`
3. Update the table of contents `id` anchors in the sidebar to match your headings
4. Add a new card linking to it in `writing.html`

Post categories available: `security` · `learning` · `cape-town` · `life`  
To add a new category, add a filter button in `writing.html` and a matching `.cat--yourcat` style in `blog.css`.

---

## Deploying to GitHub Pages

1. Push this repo to GitHub — name it `your-username.github.io` for a root domain
2. Go to **Settings → Pages**
3. Set source to **Deploy from a branch** → `main` → `/ (root)`
4. Your site will be live at `https://yourusername.github.io` within a minute or two

---

## License

MIT — feel free to fork and make it your own. A credit or a star is appreciated but not required.

---

*Built with care in Cape Town. No frameworks harmed.*
