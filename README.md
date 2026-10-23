# The Second Visit website

Hospitality mentorship by **Deepak Thapliyal**, Dehradun. Built by Klytos Labs with [Astro](https://astro.build) as a fast, static site.

- **Pages:** Home, The mentorship, About Deepak, Contact, Privacy Policy, Terms and Conditions, 404
- **No server needed.** Enquiries are emailed through [Web3Forms](https://web3forms.com).
- **Fonts:** Libre Caslon Display (headings), Jost (labels, navigation, buttons) and Libre Franklin (body), all open-source (SIL Open Font License), self-hosted via Fontsource so there are no external font requests. Tiro Devanagari Hindi for the Hindi touches.
- **Background videos:** three full-width film bands. See *Videos* below.

## Launch rules

Read `CLAUDE.md` for the house rules (no gradients, pill buttons, fake reviews or numbers, emoji, em dashes, AI imagery or heavy animation).

We do not launch until all of these are done. Run the gate to check:

```bash
SITE_URL=https://yourdomain.in PUBLIC_WEB3FORMS_KEY=your-key npm run launch-check
```

It fails until: a custom domain is set, the favicons exist, there are no "made with" or AI tags, the Privacy Policy and Terms pages exist, every placeholder in `src/config/site.ts` (including the `legal` details) is filled in, the form key is set and the videos are self-hosted.

The Privacy Policy (`/privacy/`) and Terms and Conditions (`/terms/`) were written to match exactly what this site does. They are not legal advice: have a lawyer review both before launch, and update them if you add analytics, cookies or payments.

## Run it locally

Requires Node 18.20+ (Node 22 recommended, see `.nvmrc`).

```bash
npm install
cp .env.example .env     # then fill in the values
npm run dev              # http://localhost:4321
npm run build            # production build into dist/
npm run preview          # serve the production build
```

In `npm run dev` the enquiry form simulates a successful send if no Web3Forms key is set, so you can test the flow without emailing anyone.

## Before launch: content checklist

Everything Deepak still needs to confirm lives in **`src/config/site.ts`**. Any value left as `null` shows on the site as a yellow **[placeholder]**, and `npm run build` prints what is still missing.

| Field | Example |
|---|---|
| `phoneDisplay` / `phoneE164` | `+91 98765 43210` / `+919876543210`, also used for WhatsApp |
| `email` | `hello@thesecondvisit.in` |
| `instagram`, `linkedin` | `{ handle: '@thesecondvisit', url: 'https://instagram.com/…' }` |
| `priceFrom` | `4,999` |
| `replyDays`, `bestTimeToCall` | `2`, `3–6 PM, Mon–Sat` |
| `previousRoles` | `[{ years: '2016–2019', role: '…', place: '…' }]` |
| `agency.url` | Klytos Labs website for the footer credit |
| `legal.operator`, `legal.address` | Legal name of whoever runs the business, and a postal address |
| `legal.effectiveDate`, `legal.retention` | Date the policies take effect; how long enquiries are kept, e.g. `12 months` |

Held back until approved (switch on in code once confirmed):

- **About → Deepak's quote**: `quoteApproved` in `src/pages/about.astro`
- **Mentorship → "What language are sessions in?"**: `languageConfirmed` in `src/pages/mentorship.astro`
- **Testimonials** are not shown until real ones exist.
- The session flow, morning timings and "usually before 12 or 1 PM" are written as indicative. Check them with Deepak.

## Photos

Home page photos are picked up by name from `src/assets/photos/`, so adding one is just dropping in a file with the right name (JPG, PNG or WebP, at least 1600 px on the long side). Astro resizes it to modern formats automatically.

| File name | Where | Shape |
|---|---|---|
| `area-welcome` | Mentorship list: the welcome and the goodbye | 4:5 |
| `area-feedback` | Mentorship list: feedback and complaints | 4:5 |
| `area-training` | Mentorship list: training your team | 4:5 |
| `area-standards` | Mentorship list: service standards | 4:5 |
| `area-stock` | Mentorship list: stock and inventory | 4:5 |
| `area-routines` | Mentorship list: workflows and routines | 4:5 |
| `journey-1-chai` to `journey-5-lunch` | Journey steps I to V (`journey-1-chai`, `journey-2-entrance`, `journey-3-plan`, `journey-4-session`, `journey-5-lunch`) | 4:3 |
| `compare-before`, `compare-after` | Before / after slider. Same café, same camera position | 4:3 |

**Stand-in images.** `src/assets/photos/temporary/` holds AI stand-ins with the same names (never of Deepak). A real photo with the same name in `src/assets/photos/` always wins. `npm run launch-check` fails until the temporary folder is empty. The stand-ins also live in the Figma file "The Second Visit: site photos", one frame per file name, ready to export as JPG.

Photos of Deepak (home intro, About, Mentorship) stay as placeholders until real photographs exist. They are passed to `<Photo>` directly in the page.

## Videos

The film bands are set in **`src/config/media.ts`**. They currently stream free Pixabay clips (Pixabay Content License: free for commercial use, no credit needed) straight from Pixabay's CDN:

- `chai`: chai being poured in Mumbai (philosophy band, Home)
- `kitchen`: a cook at the stove in an Indian kitchen (the morning format, Home and Mentorship)
- `lobby`: soft-focus hotel lobby lights (About)

Before launch:

1. Watch each clip and swap any you don't like (search pixabay.com/videos).
2. Download the chosen files, put them in `public/video/`, and change each `src` to `/video/<file>.mp4`. Keep them under about 8 MB each, at 1080p.
3. Better still, film 10–15 second clips at a real café in Dehradun (Deepak greeting a guest, a team briefing, chai being poured) and use those instead.

Videos play muted and looped, only while on screen. There is no on-screen pause control. Visitors with "reduce motion" switched on see a still frame.

## Enquiry form (Web3Forms)

1. Go to <https://web3forms.com>, enter **Deepak's email**, and copy the access key.
2. Add it as `PUBLIC_WEB3FORMS_KEY` in the hosting dashboard (and in `.env` locally).
3. Redeploy, then send a test enquiry.

Submissions include name, phone, café name, stage, team size, message and preferred contact method. There's a honeypot field for spam. Without JavaScript the form still posts directly to Web3Forms. If the key is missing in production, the form shows "call or WhatsApp" instead of failing silently.

## Deploy

Set these environment variables on the host:

- `SITE_URL`: the live address, e.g. `https://thesecondvisit.in` (used for canonical links, the sitemap and social cards)
- `PUBLIC_WEB3FORMS_KEY`

**Vercel:** Add New → Project → import the GitHub repo. The framework is detected as Astro; `vercel.json` sets the headers. Add the environment variables, then deploy.

**Netlify:** Add new site → Import from Git. `netlify.toml` sets the build command, Node 22 and the headers. Add the environment variables, then deploy.

Then attach the domain in the host's dashboard. HTTPS is automatic.

## What's in the box

```
src/
  config/site.ts        content still to confirm (phone, email, price…)
  layouts/Base.astro    <head>, SEO, Open Graph, JSON-LD, header/footer, mobile Call/Book bar
  styles/global.css     design tokens, type, buttons, forms, all motion
  config/media.ts       background video clips
  components/           Header, Footer, EnquiryForm, Faq, Photo, Film (video band), Icon
  pages/                index, mentorship, about, contact, 404, robots.txt
public/                 favicon.svg, favicon.ico, apple-touch-icon.png, og.png (social card)
scripts/                render-images.py re-renders og.png and the touch icon
```

**SEO:** per-page titles and descriptions, canonical URLs, Open Graph and Twitter cards, `ProfessionalService` structured data (contact details are added automatically once filled in), `sitemap-index.xml` and `robots.txt`.

**Accessibility:** skip link, visible focus rings, real buttons, links and labels, a native `<details>` FAQ, a keyboard-closable mobile menu (Esc), form errors announced and linked to their fields, and text contrast of at least 4.5:1.

**Motion:** gentle fade-ins and the video bands. Animations live behind `prefers-reduced-motion: no-preference`; with "reduce motion" on, the site is static and the videos are paused.

---

The Second Visit is Deepak Thapliyal's independent initiative and is not affiliated with SOCIAL.
