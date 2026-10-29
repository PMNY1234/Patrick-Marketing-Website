# Patrick Marketing Website

Static site for [Patrick Marketing, Inc.](https://patrickmarketingny.com), hosted on Netlify. Plain HTML, CSS and a little JavaScript, with no build step and no CMS.

## Structure

```
index.html            Home page
404.html              Shown for any page that doesn't exist yet
assets/css/styles.css All styles (colour and type tokens at the top)
assets/js/main.js     Mobile menu, reduced-motion handling
assets/img/           Logo, case-study images, client logos (white, transparent PNG)
assets/video/         Hero showreel (compressed) and its poster frame
netlify.toml          Netlify publish settings and headers
```

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploys

Netlify deploys automatically from the `main` branch. Push to `main` and the live site updates in about a minute.
