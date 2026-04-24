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
} as const satisfies Record<string, Theme>;

export type ThemeName = keyof typeof THEMES;

export const THEME_NAMES: [ThemeName, ...ThemeName[]] = [
  "launch",
  "editorial",
  "podcast",
];

export const getTheme = (name: ThemeName): Theme => THEMES[name];
