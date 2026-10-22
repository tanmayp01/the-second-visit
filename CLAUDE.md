# The Second Visit: project rules

Website for Deepak Thapliyal's hospitality mentorship, Dehradun. Astro, static, hosted on Vercel.

## The site must never look vibe-coded

Never use:

- purple or decorative gradients
- pill-shaped ("whale") buttons; buttons are square-cornered
- fake reviews, testimonials, metrics or customer counters
- invented hero text or claims not confirmed by Deepak
- emoji or emoji icons
- em dashes in visitor-facing copy
- over-the-top scroll animation, cursor animation, preloaders or curtains
- AI-generated photos, videos or copy

Facts about Deepak come only from the brief or from him. Anything unconfirmed stays a visible placeholder in `src/config/site.ts`.

## Launch requirements

Do not launch until all of these are true. `npm run launch-check` verifies them:

- a custom domain is connected and `SITE_URL` points to it
- favicon set is in place
- no "made with" or AI tags anywhere
- Privacy Policy (`/privacy/`) and Terms and Conditions (`/terms/`) pages exist, are complete and have been reviewed by a lawyer
- every placeholder in `src/config/site.ts` is filled in
- the Web3Forms key is set
- background videos are self-hosted in `public/video/`

## Design system

- Headings: Cormorant Garamond. Body: Jost. Self-hosted via Fontsource.
- White and ivory backgrounds, ink text, one gold accent, deep evergreen for dark bands.
- Motion is restrained: short fade-ins, button fills, a slow video zoom. Everything respects `prefers-reduced-motion`.
