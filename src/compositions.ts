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
  | "Trailer60Short";

export const COMPOSITION_LABELS: Record<CompositionId, string> = {
  Teaser15: "Teaser (15s)",
  Trailer30: "Trailer (30s)",
  Trailer60: "Trailer (60s)",
  Trailer60Short: "Trailer (60s flat, social)",
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

export const THEME_OPTIONS = ["launch", "editorial", "podcast"] as const;

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
};
