/**
 * MADR voice & tone, as structured data.
 * The canonical narrative lives in madr-brand/voice.md — this file is the
 * machine-readable projection of it, for use by lint/validation tooling and
 * by components that need to render guide excerpts.
 *
 * No Zod here on purpose — this module ships as plain TS so consumers that
 * don't install zod (e.g. the main Next.js app) can import it cheaply.
 */

export const TAGLINE = "One movie. One review. Every day." as const;

export const PODCAST = {
  name: "Don't Judge Us",
  host: "Lenny",
  tagline: "A new guest. A new argument. Every week.",
  subtitle: "A movie & TV podcast · hosted by Lenny.",
  description:
    "Every week, Lenny invites a different guest to argue honestly about what they watched. Sometimes we agree. Usually we don't. Don't judge us — we won't judge you back.",
  guestNaming: "Lenny + [First Name]",
} as const;

export const VOICE_ATTRIBUTES = [
  {
    name: "Opinionated, not contrarian",
    description:
      "We have takes. We stand by them. We don't manufacture hot takes for engagement — we write what we actually think, even when it's boring.",
  },
  {
    name: "Warm, not fawning",
    description:
      "We love movies. We don't idolize filmmakers. Criticism is a sign of respect — the reader deserves honesty, and so does the movie.",
  },
  {
    name: "Conversational, not casual",
    description:
      "We write like the smartest person at the dinner party, not like a group chat. No \"tbh,\" no \"fr,\" no \"this slaps.\" But also no \"the director's auteurist vision.\" Find the line.",
  },
] as const;

export type VoiceContext =
  | "review"
  | "ig-feed"
  | "ig-story"
  | "letterboxd"
  | "podcast"
  | "dm";

export const CONTEXT_REGISTER: Record<VoiceContext, string> = {
  review: "Considered, structured, arguments with evidence",
  "ig-feed": "One sharp sentence + rating + link",
  "ig-story": "Casual, quick, first-person (\"watching this tonight\")",
  letterboxd: "Exact same tone as full review, shorter",
  podcast:
    "Conversational, loose, interview-adjacent. Lenny hosts; new guest each episode. Discussion, not editorial. No hot-take manufacturing, no roasting.",
  dm: "Warm, fast, no corporate voice",
};

export const VOCABULARY = {
  useEditorial: [
    "verdict",
    "rating",
    "ranked",
    "recommend",
    "hall-of-fame",
    "hall-of-shame",
    "worth it",
    "not worth it",
    "watchable",
    "unwatchable",
    "masterpiece",
    "misfire",
    "mid",
  ],
  usePodcast: [
    "what I watched",
    "here's the thing about",
    "I want to defend",
    "fight me on this",
    "honestly",
    "unpopular opinion",
    "the case for",
    "the case against",
  ],
  useSparingly: [
    "🎬",
    "🍿",
    "⭐",
    "★",
    "absolute best",
    "absolute worst",
  ],
  avoid: [
    "slaps",
    "ate",
    "no crumbs",
    "iconic",
    "obsessed",
    "🔥",
    "💯",
    "🥹",
    "❤️",
  ],
  never: [
    "absolute banger",
    "gatekeeping",
    "as a movie lover",
    "I'm not a film critic, but",
    "thoughts?",
    "roast",
    "destroy",
    "drag",
    "cook",
    "tear apart",
  ],
} as const;

/**
 * Caption formulas by content pillar. Each entry is a template string using
 * `{placeholders}` — intended as a starting point for validators and UI
 * hints, not a hard contract (copy should still read like prose).
 */
export type CaptionPattern = {
  id: string;
  label: string;
  formula: string;
  example: string;
  antiExample?: string;
};

export const CAPTION_PATTERNS: CaptionPattern[] = [
  {
    id: "todays-review",
    label: "Today's Review",
    formula: "{movie} — {rating}/10. {one-line take}. Full review: link in bio.",
    example:
      "*Perfect Days* — 9/10. Wim Wenders shot a man cleaning toilets in Tokyo and made one of the most moving films of the decade. Full review: link in bio.",
    antiExample:
      "OMG *Perfect Days* was 🔥🔥🔥 such a vibe 😭 tell me your thoughts!!",
  },
  {
    id: "quote-card",
    label: "Quote Card",
    formula: "{memorable line}. — from the {movie} review. {date}",
    example:
      "Nolan shoots physics like it's a heist. — from the *Oppenheimer* review. Jul 2023.",
  },
  {
    id: "hall-of-fame",
    label: "Hall of Fame",
    formula: "{rating}/10. Hall of Fame entry. {why in one sentence}.",
    example:
      "10/10. Hall of Fame. The rare sequel that knows exactly why the first one mattered.",
  },
  {
    id: "hall-of-shame",
    label: "Hall of Shame",
    formula:
      "{rating}/10. Hall of Shame. {why in one sentence — punch up, not down}.",
    example: "3/10. A two-hour trailer for a better film nobody made.",
  },
  {
    id: "versus",
    label: "Versus (Tiernight)",
    formula: "{A} or {B}? One dies tonight. Vote → Tiernight.",
    example:
      "*Heat* or *The Insider*? One of these Michael Mann films dies tonight. Vote on Tiernight.",
  },
  {
    id: "where-to-watch",
    label: "Where to Watch",
    formula:
      "{movie} — streaming on {service} in {region}. Full review: link in bio.",
    example:
      "*Past Lives* — streaming on Amazon Prime AU. Full review: link in bio.",
  },
  {
    id: "podcast-drop",
    label: "Podcast drop",
    formula: "Episode {n} · {one-line hook}. Listen → link in bio.",
    example:
      "Episode 07 · On *Perfect Days* and why cleaning toilets might be cinema. Listen → link in bio.",
    antiExample: "We roast *Madame Web* on this week's ep 🔥",
  },
];

export const VOICE = {
  tagline: TAGLINE,
  podcast: PODCAST,
  attributes: VOICE_ATTRIBUTES,
  contextRegister: CONTEXT_REGISTER,
  vocabulary: VOCABULARY,
  captionPatterns: CAPTION_PATTERNS,
} as const;
