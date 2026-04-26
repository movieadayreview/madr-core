/**
 * Source of truth for composition metadata used by programmatic renderers
 * (the main app's /admin/trailers DB seeds, GitHub Actions render workflow,
 * and any other automation).
 *
 * IMPORTANT: madr-trailers/src/Root.tsx keeps its own inline `defaultProps`
 * literals because Remotion Studio's "Save" feature writes back to those
 * literals. Keep these two in sync by hand — edit here when Studio is
 * the one that changes copy/timing, and mirror.
 */

import type { ThemeName } from "./themes.js";

export type CompositionId =
  | "Teaser15"
  | "Trailer30"
  | "Trailer60"
  | "Trailer60Short"
  | "TodaysReview"
  | "QuoteCard"
  | "Top5Countdown";

export const COMPOSITION_LABELS: Record<CompositionId, string> = {
  Teaser15: "Teaser (15s)",
  Trailer30: "Trailer (30s)",
  Trailer60: "Trailer (60s)",
  Trailer60Short: "Trailer (60s flat, social)",
  TodaysReview: "Today's Review (~16s)",
  QuoteCard: "Quote Card (~9s)",
  Top5Countdown: "Top 5 Countdown (~40s)",
};

export type Variant = "landscape" | "square" | "vertical";

export const VARIANT_COMPOSITIONS: Record<
  CompositionId,
  Record<Variant, string>
> = {
  Teaser15: {
    landscape: "Teaser15",
    square: "Teaser15Square",
    vertical: "Teaser15Vertical",
  },
  Trailer30: {
    landscape: "Trailer30",
    square: "Trailer30Square",
    vertical: "Trailer30Vertical",
  },
  Trailer60: {
    landscape: "Trailer60",
    square: "Trailer60Square",
    vertical: "Trailer60Vertical",
  },
  Trailer60Short: {
    landscape: "Trailer60Short",
    square: "Trailer60ShortSquare",
    vertical: "Trailer60ShortVertical",
  },
  TodaysReview: {
    landscape: "TodaysReview",
    square: "TodaysReviewSquare",
    vertical: "TodaysReviewVertical",
  },
  QuoteCard: {
    landscape: "QuoteCard",
    square: "QuoteCardSquare",
    vertical: "QuoteCardVertical",
  },
  Top5Countdown: {
    landscape: "Top5Countdown",
    square: "Top5CountdownSquare",
    vertical: "Top5CountdownVertical",
  },
};

export const VARIANT_LABELS: Record<Variant, string> = {
  landscape: "Landscape (1920×1080)",
  square: "Square (1080×1080)",
  vertical: "Vertical (1080×1920)",
};

export const VARIANT_DIMENSIONS: Record<
  Variant,
  { width: number; height: number }
> = {
  landscape: { width: 1920, height: 1080 },
  square: { width: 1080, height: 1080 },
  vertical: { width: 1080, height: 1920 },
};

// Default frame to capture as the per-config thumbnail when the user hasn't
// chosen one. Picked to land on a moment where the headline / hero element is
// fully revealed for each composition. Override per-config via
// remotion_configs.thumbnail_frame in the main app.
export const COMPOSITION_THUMB_DEFAULT_FRAME: Record<CompositionId, number> = {
  Teaser15: 240,        // mid-tagline, headline fully revealed
  Trailer30: 270,       // mid-brand-beats
  Trailer60: 540,       // mid-brand-beats
  Trailer60Short: 540,  // mid-brand-beats
  TodaysReview: 120,    // movie poster + title composed
  QuoteCard: 90,        // quote fully revealed
  Top5Countdown: 600,   // mid-countdown hero frame
};

export const THEME_OPTIONS = [
  "launch",
  "editorial",
  "podcast",
  "noir",
  "minimal",
  "neon",
  "vintage",
] as const;

export type OutroProps = {
  type: "qr" | "simple";
  url: string;
  displayUrl: string;
  durationFrames: number;
};

const COMMON_OUTRO: OutroProps = {
  type: "qr",
  url: "https://movieadayreview.com",
  displayUrl: "movieadayreview.com",
  durationFrames: 150,
};

export const DEFAULTS: Record<CompositionId, Record<string, unknown>> = {
  Teaser15: {
    theme: "launch" satisfies ThemeName,
    grain: true,
    vignette: true,
    logoDurationFrames: 180,
    tagline: {
      eyebrow: "Movie A Day Review",
      headline: "One movie. One review. Every day.",
      durationFrames: 150,
    },
    outro: { ...COMMON_OUTRO, durationFrames: 120 },
    captions: [],
  },

  Trailer30: {
    theme: "launch" satisfies ThemeName,
    grain: true,
    vignette: true,
    logoDurationFrames: 180,
    intro: {
      eyebrow: "Est. 2025",
      headline: "One movie. One review. Every day.",
      subhead: "That's the promise. The rest is extras.",
      durationFrames: 180,
    },
    beats: [
      {
        label: "The Review",
        title: "One film. Every day.",
        blurb: "A new review, seven days a week — no filler, no fluff.",
        durationFrames: 120,
      },
      {
        label: "Tiernight",
        title: "Rank it with friends.",
        blurb: "Collaborative tier lists for the nights you can't agree.",
        durationFrames: 120,
      },
      {
        label: "Don't Judge Us",
        title: "The podcast.",
        blurb: "One host, one guest, the films they can't stop defending.",
        durationFrames: 120,
      },
    ],
    quote: {
      enabled: false,
      quote: "The review I read every morning.",
      attribution: "Reader",
      durationFrames: 120,
    },
    closer: { headline: "Watch. Rank. Discuss.", durationFrames: 90 },
    outro: COMMON_OUTRO,
    captions: [],
  },

  Trailer60: {
    theme: "launch" satisfies ThemeName,
    grain: true,
    vignette: true,
    logoDurationFrames: 210,
    manifesto: {
      eyebrow: "Movie A Day Review",
      headline: "One movie. One review. Every day.",
      subhead: "That's the promise. The rest is extras.",
      durationFrames: 240,
    },
    stats: {
      enabled: true,
      headline: "The shape of it",
      items: [
        { value: "365", label: "Reviews / year" },
        { value: "1", label: "Podcast" },
        { value: "∞", label: "Opinions" },
      ],
      durationFrames: 150,
    },
    beats: [
      {
        label: "The Review",
        title: "One film. Every day.",
        blurb:
          "A new review every day of the week. Honest, unhurried, and written for people who actually watch the thing.",
        durationFrames: 180,
      },
      {
        label: "Tiernight",
        title: "Rank it together.",
        blurb:
          "Collaborative tier lists, ELO matchups, and a plan for the nights nobody can agree on what to watch.",
        durationFrames: 180,
      },
      {
        label: "Don't Judge Us",
        title: "The podcast.",
        blurb:
          "One host, one guest, one week. The films they love, the films they'll defend, and the takes they won't apologize for.",
        durationFrames: 180,
      },
      {
        label: "Stream Finder",
        title: "Where to watch.",
        blurb:
          "Every film we cover, mapped to the services you already pay for. No more guessing.",
        durationFrames: 180,
      },
    ],
    quote: {
      enabled: false,
      quote: "The only movie site I trust to tell me the truth.",
      attribution: "MADR reader",
      durationFrames: 150,
    },
    promise: {
      eyebrow: "The extras",
      headline: "A podcast. Tier lists. A place to argue.",
      subhead: "Because one review is never enough.",
      durationFrames: 240,
    },
    closer: { headline: "Watch. Rank. Discuss.", durationFrames: 180 },
    outro: { ...COMMON_OUTRO, durationFrames: 240 },
    captions: [],
  },

  Trailer60Short: {
    theme: "launch" satisfies ThemeName,
    grain: true,
    vignette: true,
    logoDurationFrames: 210,
    manifesto: {
      eyebrow: "Movie A Day Review",
      headline: "One movie. One review. Every day.",
      subhead: "That's the promise. The rest is extras.",
      durationFrames: 210,
    },
    stats: {
      enabled: true,
      headline: "The shape of it",
      items: [
        { value: "365", label: "Reviews / year" },
        { value: "1", label: "Podcast" },
        { value: "∞", label: "Opinions" },
      ],
      durationFrames: 150,
    },
    beats: [
      {
        label: "The Review",
        title: "One film. Every day.",
        blurb:
          "A new review every day of the week. Honest, unhurried, and written for people who actually watch the thing.",
        durationFrames: 150,
      },
      {
        label: "Tiernight",
        title: "Rank it together.",
        blurb:
          "Collaborative tier lists, ELO matchups, and a plan for the nights nobody can agree on what to watch.",
        durationFrames: 150,
      },
      {
        label: "Don't Judge Us",
        title: "The podcast.",
        blurb:
          "One host, one guest, one week. The films they love, the films they'll defend, and the takes they won't apologize for.",
        durationFrames: 150,
      },
      {
        label: "Stream Finder",
        title: "Where to watch.",
        blurb:
          "Every film we cover, mapped to the services you already pay for. No more guessing.",
        durationFrames: 150,
      },
    ],
    quote: {
      enabled: false,
      quote: "The only movie site I trust to tell me the truth.",
      attribution: "MADR reader",
      durationFrames: 150,
    },
    promise: {
      eyebrow: "The extras",
      headline: "A podcast. Tier lists. A place to argue.",
      subhead: "Because one review is never enough.",
      durationFrames: 210,
    },
    closer: { headline: "Watch. Rank. Discuss.", durationFrames: 180 },
    outro: { ...COMMON_OUTRO, durationFrames: 240 },
    captions: [],
  },

  TodaysReview: {
    theme: "launch" satisfies ThemeName,
    grain: true,
    vignette: true,
    logoDurationFrames: 60,
    movie: {
      title: "Past Lives",
      year: "2023",
      posterUrl: "",
      durationFrames: 150,
    },
    verdict: {
      label: "Verdict",
      rating: "9/10",
      blurb:
        "Quietly devastating. Greta Lee anchors a film about the lives we don't live.",
      durationFrames: 180,
    },
    outro: { ...COMMON_OUTRO, durationFrames: 90 },
    captions: [],
  },

  QuoteCard: {
    theme: "launch" satisfies ThemeName,
    grain: true,
    vignette: true,
    pullQuote: {
      text: "The review I read every morning.",
      attribution: "Reader",
      durationFrames: 180,
    },
    outro: { ...COMMON_OUTRO, durationFrames: 90 },
    captions: [],
  },

  Top5Countdown: {
    theme: "launch" satisfies ThemeName,
    grain: true,
    vignette: true,
    logoDurationFrames: 60,
    intro: {
      eyebrow: "This week",
      headline: "Top 5 movies to watch",
      durationFrames: 90,
    },
    items: [
      {
        rank: 5,
        title: "Past Lives",
        rating: "9/10",
        blurb: "Quietly devastating.",
        durationFrames: 150,
      },
      {
        rank: 4,
        title: "Anatomy of a Fall",
        rating: "8.5/10",
        blurb: "Courtroom thriller as marriage autopsy.",
        durationFrames: 150,
      },
      {
        rank: 3,
        title: "Killers of the Flower Moon",
        rating: "9/10",
        blurb: "Scorsese's most patient film.",
        durationFrames: 150,
      },
      {
        rank: 2,
        title: "Oppenheimer",
        rating: "9.5/10",
        blurb: "Nolan shoots physics like a heist.",
        durationFrames: 150,
      },
      {
        rank: 1,
        title: "The Holdovers",
        rating: "9/10",
        blurb: "A quiet masterpiece.",
        durationFrames: 180,
      },
    ],
    outro: { ...COMMON_OUTRO, durationFrames: 120 },
    captions: [],
  },
};
