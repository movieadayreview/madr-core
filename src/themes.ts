/**
 * The Theme type's color slots are positional, not literal:
 *   - `black`     — backdrop / dominant fill (literal black for dark themes,
 *                   off-white for light themes)
 *   - `cream`     — primary type / foreground
 *   - `creamDim`  — muted/secondary type (rgba)
 *   - `gold`      — primary accent
 *   - `goldSoft`  — secondary/muted accent
 *
 * Names kept for backward compatibility — the gold-on-black launch theme is
 * the brand baseline, and a lot of scene code reads `t.gold` directly.
 */
export type Theme = {
  name: string;
  black: string;
  gold: string;
  goldSoft: string;
  cream: string;
  creamDim: string;
  grainIntensity: number;
  vignetteIntensity: number;
};

export const THEMES = {
  // ── On-brand baseline ────────────────────────────────────────────────────
  launch: {
    name: "launch",
    black: "#0A0A0A",
    gold: "#D4B254",
    goldSoft: "#B8994A",
    cream: "#EDE8DC",
    creamDim: "rgba(237, 232, 220, 0.6)",
    grainIntensity: 0.08,
    vignetteIntensity: 0.55,
  },
  // Tighter, magazine-ish — duller gold, more grain, more vignette.
  editorial: {
    name: "editorial",
    black: "#0A0A0A",
    gold: "#B8994A",
    goldSoft: "#8F7736",
    cream: "#EDE8DC",
    creamDim: "rgba(237, 232, 220, 0.55)",
    grainIntensity: 0.12,
    vignetteIntensity: 0.7,
  },
  // Dimmer cream, deeper black — pairs with the Don't Judge Us audio brand.
  podcast: {
    name: "podcast",
    black: "#060606",
    gold: "#D4B254",
    goldSoft: "#9A7F3A",
    cream: "#D8D3C5",
    creamDim: "rgba(216, 211, 197, 0.5)",
    grainIntensity: 0.1,
    vignetteIntensity: 0.75,
  },

  // ── Pillars beyond the launch palette ────────────────────────────────────
  // Cinema-classic black-on-deeper-black with an ice-blue pop. Heavy grain,
  // strong vignette — meant to feel like a noir trailer.
  noir: {
    name: "noir",
    black: "#020308",
    gold: "#A9CFE8",
    goldSoft: "#7FA9C1",
    cream: "#F0F0F0",
    creamDim: "rgba(240, 240, 240, 0.55)",
    grainIntensity: 0.16,
    vignetteIntensity: 0.85,
  },
  // Inverted — light off-white background with charcoal type, single-color
  // accent. No grain, no vignette. Cleanest editorial read.
  minimal: {
    name: "minimal",
    black: "#F4F2EC",
    gold: "#0A0A0A",
    goldSoft: "#3A3A3A",
    cream: "#1A1A1A",
    creamDim: "rgba(26, 26, 26, 0.55)",
    grainIntensity: 0.0,
    vignetteIntensity: 0.0,
  },
  // Synthwave / midnight-club — deep aubergine bg, electric magenta accent,
  // subtle grain so the gradient doesn't band, soft vignette.
  neon: {
    name: "neon",
    black: "#0E0420",
    gold: "#FF38D2",
    goldSoft: "#9A2A8A",
    cream: "#EAD9FF",
    creamDim: "rgba(234, 217, 255, 0.55)",
    grainIntensity: 0.05,
    vignetteIntensity: 0.6,
  },
  // 35mm vintage — sepia-paper foreground on warm dark brown, golden-tan
  // accent, MAX grain + vignette to sell the film stock illusion.
  vintage: {
    name: "vintage",
    black: "#1C1108",
    gold: "#E0B473",
    goldSoft: "#A8814A",
    cream: "#F4E8D5",
    creamDim: "rgba(244, 232, 213, 0.55)",
    grainIntensity: 0.2,
    vignetteIntensity: 0.85,
  },
} as const satisfies Record<string, Theme>;

export type ThemeName = keyof typeof THEMES;

// IMPORTANT: kept in sync by hand with THEMES above. Used as a Zod enum
// in @madr/compositions/compositions/shared.ts; if a theme exists in THEMES
// but is missing here, it won't validate as a prop.
export const THEME_NAMES: [ThemeName, ...ThemeName[]] = [
  "launch",
  "editorial",
  "podcast",
  "noir",
  "minimal",
  "neon",
  "vintage",
];

export const getTheme = (name: ThemeName): Theme => THEMES[name];
