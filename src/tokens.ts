export const BRAND = {
  black: "#0A0A0A",
  gold: "#D4B254",
  goldSoft: "#B8994A",
  cream: "#EDE8DC",
  creamDim: "rgba(237, 232, 220, 0.6)",
  charcoal: "#1A1A1A",
  hallOfFame: "#5CA86E",
  hallOfShame: "#C24545",
} as const;

export type BrandColor = keyof typeof BRAND;

export const FONT = {
  display: "Space Grotesk, system-ui, sans-serif",
  mono: "Space Mono, ui-monospace, monospace",
} as const;

export const FPS = 30;
