# Sunset Cinema Club — Website

UI revamp of [sunsetcinemaclub.in](https://sunsetcinemaclub.in/). Visual direction:
**Night Marquee** — near-black canvas, warm orange/gold accent glows, film-ticket
and marquee-bulb motifs. UX journeys are unchanged; this is a visual reskin.

## Status

Static, framework-agnostic scaffold — **Home**, **Events**, **Event detail**, **Venues**, **FAQs**, **Gallery**, **Gift Card** and **Join The Club** pages —
converted from the approved concept and made responsive. Ready to be wired into
the real stack.

## Structure

```
Website/
├── index.html          # Home page
├── events.html         # Mumbai events listing (venue filter + load more)
├── venues.html         # Mumbai venues grid (type filter)
├── event-detail.html   # Shared event template, populated from SCC_EVENTS via ?id=
├── faq.html            # Grouped accordions (General / Membership / Payment / Misc) + search
├── gallery.html        # City-filtered album cards + <dialog> lightbox with thumbnail strip
├── gift-card.html      # 2-step gift checkout (recipient → your details & pay), live card preview
├── join-the-club.html  # 2-step membership checkout (details → review & pay), plan card
├── cart.html           # 2-step ticket checkout: ?id=<event>[&session=<host>:<key>]
├── css/
│   └── styles.css       # All styles — tokens at top, responsive block at bottom
├── js/
│   └── main.js          # Mobile nav + city selector + events/venues filters (vanilla, no deps)
└── assets/
    └── images/          # Production images go here (see its README)
```

Header, footer and the membership promo strip are duplicated across the HTML
files — factor them into partials/components when you move to a framework or SSG.
Events/Venues content is hard-coded dummy data driven by `data-venue` / `data-type`
attributes; the JS filters are client-side only.

## v2 wireframe update (Oct 2026)

Desktop pass against `SCC_Wireframes_v2/desktop:*`. Key changes:

- **Header**: Events · Venues · Gift Card · FAQ · More (Gallery / Private Screening / About Us); city selector is now an outlined pill.
- **Promo strip** (slate `--slate`) on every inner page except Join; **footer** rebuilt (bulb row, 4 columns, centred copyright).
- **Event cards**: photo + type tag, title, venue, date/time, *View Details* + *Buy Now*. Cards are no longer one big link.
- **Buy flow**: *Buy Now* → `cart.html`. Events with a `sessions` block in `SCC_EVENTS` (demo: `la-la-land`) open the "Sunset Cinema Weekend" sessions popup first.
- Listings (events / venues / gallery) share one filter-pill + Load More script — see the `[data-listing]` contract in `main.js`.
- New shared blocks: `.banner--member` ("Not a member yet?"), `.stepper`, `.summary-card`, `.qty`, `.modal`, lightbox thumbnail strip.
- Placeholder photography: `assets/images/photos/screening-1..3.jpg` (real SCC photos), rotated across cards, heroes and albums.
- Demo voucher code everywhere: `SUNSET500` (₹500 off).

## Design tokens

Defined as CSS custom properties in `:root` (`css/styles.css`):

- **Brand orange** `--orange:#FF7733` — locked; keep any change minimal.
- Backgrounds: warm charcoal ladder — `--bg:#181715` `--bg-alt:#1E1D1A` `--bg-raised:#232220` `--bg-raised-2:#2B2A27`
- Text: `--ink:#F1EEE9` `--ink-muted` `--ink-faint`
- Accent: `--gold:#F3A61D`
- Lines: `--line` `--line-soft`
- Shape: `--radius-pill:999px` (every CTA, tag, chip, input), `--radius-card:16px` (cards, panels)
- Spacing: `--section-y` drives vertical rhythm (108px desktop, steps down responsively); `--wrap-pad` is the page gutter

## Fonts

Loaded from Google Fonts in `<head>`:

- **Big Shoulders Display** — display / headings (`.display`)
- **Space Grotesk** — body & UI (default `body` face) — sharp modern grotesque, shares DNA with Space Mono
- **Space Mono** — meta, eyebrows, ticket details (`.mono`)

Self-host these before launch if you want to drop the external request.

## Responsive breakpoints

| Width      | Behaviour                                                    |
|------------|-------------------------------------------------------------|
| > 1024px   | Full 3-up events, 5-up venues, 4-col footer                 |
| ≤ 1024px   | 2-up events, 3-up venues, 2-col footer                      |
| ≤ 900px    | Hamburger nav (drawer), tighter section padding            |
| ≤ 720px    | Single-column events, 2-up venues, stacked newsletter form |
| ≤ 480px    | Single-column venues + footer, reduced page padding        |

## Placeholders to replace

- Logo: real SCC lockup (`assets/images/scc-logo.png`, white-wordmark version) used as-is in header + footer; see `assets/images/README.md`
- `.ticket-image` / `.venue-card-image` — CSS gradient stand-ins for posters & venue photos
- `.logo-chip` — text stand-ins for partner / press logos (see `assets/images/README.md`)
- Events & Venues cards — dummy listings; wire to a real data source
- Header nav: **Events · Venues · Private Screening · Gift Card · More** (Gallery / About Us / FAQs). City selector is a ghost dropdown next to the logo; picking a city updates the label only (demo — not wired to routing/content)
- `#about`, `#private` — anchors only, pages not built yet
- Gallery tiles — `.tone-1`…`.tone-6` gradient stand-ins; swap for real photos (the lightbox copies the tone class — change `lbShow()` in `main.js` to set an `<img>` src)
- Gift card & Join forms — client-side validation + demo success state only; no payment backend. Join accepts the demo coupon `SUNSET500` (₹500 off) — replace `DEMO_CODES` with a server lookup
- Join The Club: the old site's illustrations are replaced by inline-SVG line icons in `.icon-badge`; the separate "benefits" section was merged into the plan card. No promo strip / newsletter on this page (it *is* the conversion page)
- All "Join The Club" CTAs point to `join-the-club.html`; the `#join` newsletter block ("Keep Me Informed") remains on other pages
- Form actions (`#join` newsletter, ticket CTAs, private-screening CTA) — no backend wired

## Run locally

No build step. Serve the folder with any static server:

```sh
npx serve .
# or
python3 -m http.server
```
