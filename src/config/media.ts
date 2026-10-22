/**
 * Background videos for the full-width film bands.
 *
 * These are free clips from Pixabay (Pixabay Content License: free for commercial
 * use, no attribution required). They are currently loaded straight from Pixabay's
 * CDN. Before launch, download each clip, save it as public/video/<name>.mp4 and
 * change `src` to '/video/<name>.mp4', so the site never depends on another server.
 *
 * Best of all: replace them with 10 to 15 second clips filmed at a real café in
 * Dehradun (Deepak greeting a guest, a team briefing, chai being poured).
 */
export type Film = {
  src: string;
  poster: string;
  /** What the clip shows, for screen readers and for whoever replaces it. */
  label: string;
  /** Page on Pixabay, for licence records. */
  source: string;
};

export const films = {
  chai: {
    src: 'https://cdn.pixabay.com/video/2019/12/18/30329-380713873_large.mp4',
    poster: 'https://cdn.pixabay.com/video/2019/12/18/30329-380713873_tiny.jpg',
    label: 'Chai being poured at a tea stall in Mumbai',
    source: 'https://pixabay.com/videos/chai-mumbai-tandoori-mumbai-chai-30329/',
  },
  kitchen: {
    src: 'https://cdn.pixabay.com/video/2024/08/18/227134_large.mp4',
    poster: 'https://cdn.pixabay.com/video/2024/08/18/227134_tiny.jpg',
    label: 'A cook at the stove in an Indian kitchen',
    source: 'https://pixabay.com/videos/seafood-cook-pa-stove-india-food-227134/',
  },
  lobby: {
    src: 'https://cdn.pixabay.com/video/2016/05/12/3190-166339081_large.mp4',
    poster: 'https://cdn.pixabay.com/video/2016/05/12/3190-166339081_tiny.jpg',
    label: 'Soft-focus hotel lobby lights',
    source: 'https://pixabay.com/videos/hotel-lobby-blur-bokeh-indoors-3190/',
  },
} satisfies Record<string, Film>;
