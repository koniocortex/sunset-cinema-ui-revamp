# Images

Drop production assets here. Aside from the logo files below, placeholders are
pure CSS/SVG so the page still renders with almost zero assets.

## Logo files

| File                  | What it is                                              | Used by |
|-----------------------|--------------------------------------------------------|---------|
| `scc-logo.png`        | Full lockup, **white** wordmark — for dark backgrounds  | Header + footer brand (`.brand-logo`) |
| `scc-logo-full.png`   | Full lockup, **black** wordmark — for light backgrounds | reference (supplied original) |
| `scc-mark.png`        | Camera mark only (orange), no wordmark                  | favicon |

Header/footer use the real `scc-logo.png` lockup as-is — mark + serif wordmark,
white on the charcoal ground. The wordmark stays visible at every breakpoint
(header ~50px tall, ~44px on mobile). It is a vertically-stacked lockup, so
"CINEMA CLUB" is necessarily small at header size — if that needs to read larger,
ask the brand for a **horizontal** lockup and swap the `src`.

## What still needs real images

| Placeholder in markup            | Replace with                                              |
|----------------------------------|----------------------------------------------------------|
| `.ticket-image` (CSS gradient)   | Event poster / still, 4:3, ~800×600, `<img>` inside it    |
| `.logo-chip` (text)              | Partner + press logos as `<img>` (SVG or transparent PNG) |
| `#gallery` section (not built)   | Photo grid from past screenings                           |
| Social / OG preview              | `og-image.jpg` 1200×630 at project root                   |

## Partner logo treatment

Logos sit directly on the dark canvas — no white strip. `css/styles.css` already
has the rule:

```css
.logo-chip img{ filter:grayscale(1) brightness(1.8); opacity:0.6; }
.logo-chip:hover img{ filter:grayscale(1) brightness(2.4); opacity:1; }
```

so any coloured logo renders as a consistent light silhouette. Prefer single-path
SVGs; fall back to transparent PNGs at 2× the display height (~44px tall).
