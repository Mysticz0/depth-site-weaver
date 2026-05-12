
# Dr. Kenneth Feiner, PsyD — Practice Website

A calm, depth-oriented multi-page site inspired by pvdpsych.com. Built on the existing TanStack Start + Tailwind v4 stack with shared layout components, full SEO per route, and accessible, responsive design.

## Design system (src/styles.css)

Replace the default tokens with the warm, professional palette (in oklch):
- `--background` cream `#F7F3EC`
- `--foreground` charcoal `#2A2A2A`
- `--primary` deep teal `#2C5F5D` / foreground cream
- `--accent` terracotta `#C97B5C` / foreground cream
- `--muted` warm gray `#7A736B`
- `--card`, `--border`, `--ring` derived from the above
- Custom tokens: `--color-utility-bar` (dark teal), `--font-serif`, `--font-sans`, `--shadow-soft`, `--radius` (14px)

Typography: load Cormorant Garamond (headings) and Inter (body) via Google Fonts in `__root.tsx` head links. Set `font-serif` and `font-sans` Tailwind utilities through `@theme` mappings. Body line-height 1.7, generous section padding.

Mandala motif: a small inline SVG component (`<MandalaMark />`) used as logo, favicon, faint background watermark on hero/quote bands, and as feature-card icons (variants by rotation/stroke).

## Routes (file-based, TanStack Start)

```
src/routes/
  __root.tsx          → shared shell, fonts, JSON-LD, header + footer
  index.tsx           → Home
  about.tsx           → About
  services.tsx        → Services
  approach.tsx        → Approach
  fees.tsx            → Fees & Insurance
  contact.tsx         → Contact
```

Each route file sets its own `head()` with unique title, description, og:title, og:description.

## Shared components (src/components/)

- `Header.tsx` — top utility bar (hours / address / phone) + main nav (logo, links, terracotta "Request a Consultation" CTA). Mobile: hamburger drawer using existing shadcn `sheet`.
- `Footer.tsx` — 4-column footer (logo+tagline+PT badge, hours, contact, newsletter form) + bottom bar with disclaimers and 988 crisis note.
- `MandalaMark.tsx` — SVG logo/icon component, size + opacity props.
- `SectionHeading.tsx`, `FeatureCard.tsx`, `SpecialtyChip.tsx`, `QuoteBand.tsx`, `CTASection.tsx` — small presentational primitives reused across pages.
- `FadeIn.tsx` — IntersectionObserver-based wrapper for subtle on-scroll fade/translate.

Shadcn primitives reused: `button`, `card`, `input`, `textarea`, `label`, `sheet`, `accordion` (for fees FAQ).

## Page contents (using the spec's copy verbatim)

1. **Home** — hero with mandala watermark + two CTAs + trust line; intro paragraph; 3-pillar feature row; "Who I Work With" two-column with image; specialties grid (16 chips); quote band; final CTA.
2. **About** — headshot placeholder + bio; "My Approach" subsection; credentials card (license #008171, Yeshiva PsyD 1984, NYU psychoanalytic training, 35+ years).
3. **Services** — 5 stacked service blocks with icon + description + "who it's for" bullets.
4. **Approach** — long-form essay with 5 sections (Psychodynamic, Relational, Family Systems, Psychoanalytic Foundations, What to Expect).
5. **Fees & Insurance** — pricing table ($400 across the board), sliding scale note, payment methods, OON insurance explanation, accordion FAQ, Good-Faith Estimate / No Surprises Act block.
6. **Contact** — contact info card + form (Name, Email, Phone, Best Time to Call, Message; submit → console.log + toast); embedded Google Map iframe of 220 E 26th St; HIPAA + confidentiality note.

## Imagery

Generate a small set of warm, calming images via `imagegen` (saved to `src/assets/`):
- `hero-brownstone.jpg` — soft-light Manhattan brownstone exterior, abstract
- `who-i-work-with.jpg` — warm interior with plants, natural light
- `headshot-placeholder.jpg` — neutral professional placeholder
- (Mandala used as SVG, no image needed.)

All `<img>` tags get descriptive alt text; lazy-loaded.

## SEO & accessibility

- Per-route `head()` with title (<60 chars), meta description (<160 chars), og:* and twitter:* tags.
- JSON-LD on root: `Person` (Kenneth Feiner) + `MedicalBusiness` (address, telephone, hours, license, areaServed: NY).
- Single H1 per page, semantic landmarks (`header`, `nav`, `main`, `footer`), focus-visible rings, WCAG AA contrast on the chosen palette, `tel:` and `mailto:` links, form labels associated.

## Technical notes

- No backend yet — newsletter and contact forms call `console.log` and show a sonner toast.
- Fonts loaded via Google Fonts `<link>` in root `head.links` (preconnect + stylesheet).
- Animations: pure CSS + small IntersectionObserver hook; no Motion/GSAP dependency.
- All colors via semantic Tailwind tokens; no raw hex in components.
- Favicon: write a small mandala SVG to `public/favicon.svg` and reference in root head.

## Out of scope (this pass)

- Real form submission backend, real newsletter signup, real auth.
- CMS / blog.
- Booking integration.
