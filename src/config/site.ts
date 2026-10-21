/**
 * Site content that still needs confirming.
 *
 * Anything set to `null` shows up on the site as a highlighted [placeholder]
 * and is left out of search-engine data. Fill these in before launch —
 * `npm run build` prints a list of what is still missing.
 */
export const site = {
  name: 'The Second Visit',
  owner: 'Deepak Thapliyal',
  description:
    'Practical, on-site hospitality mentorship for café and restaurant owners in Dehradun — guest experience, staff training, feedback and stock — taught in your café, before you open.',
  city: 'Dehradun',
  region: 'Uttarakhand',

  /** Shown as e.g. "+91 98765 43210". Also used for WhatsApp. */
  phoneDisplay: null as string | null,
  /** Same number in international format with no spaces, e.g. "+919876543210". */
  phoneE164: null as string | null,
  email: null as string | null,
  instagram: null as { handle: string; url: string } | null,
  linkedin: null as { label: string; url: string } | null,

  /** "Starting from" fee, digits only with commas, e.g. "4,999". */
  priceFrom: null as string | null,
  /** How many working days Deepak takes to reply, e.g. "2". */
  replyDays: null as string | null,
  /** e.g. "3–6 PM, Mon–Sat". */
  bestTimeToCall: null as string | null,

  /** Confirmed previous roles for the About page, newest first. */
  previousRoles: [] as { years: string; role: string; place: string }[],

  /** Footer credit. */
  agency: { name: 'Klytos Labs', url: null as string | null },
};

export const telHref = () => (site.phoneE164 ? `tel:${site.phoneE164}` : '/contact/');
export const waHref = (text = "Hi Deepak, I'd like to book a free chai pe charcha for my café.") =>
  site.phoneE164
    ? `https://wa.me/${site.phoneE164.replace(/\D/g, '')}?text=${encodeURIComponent(text)}`
    : '/contact/';
export const mailHref = () => (site.email ? `mailto:${site.email}` : '/contact/');

/** Escape text for use inside set:html strings. */
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

/** Returns the value, or a highlighted placeholder, as HTML. */
export const phHtml = (value: string | null | undefined, label: string) =>
  value ? esc(value) : `<span class="ph">[${esc(label)}]</span>`;

export const missingContent = () =>
  Object.entries({
    phoneDisplay: site.phoneDisplay,
    phoneE164: site.phoneE164,
    email: site.email,
    instagram: site.instagram,
    linkedin: site.linkedin,
    priceFrom: site.priceFrom,
    replyDays: site.replyDays,
    bestTimeToCall: site.bestTimeToCall,
    previousRoles: site.previousRoles.length ? 'ok' : null,
  })
    .filter(([, v]) => !v)
    .map(([k]) => k);
