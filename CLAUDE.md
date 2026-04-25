# @madr/core — session state (2026-04-25)

## Purpose

Shared design system + composition metadata for the MADR ecosystem. Pure data + types — no React, no Remotion, no runtime side effects (`"sideEffects": false`). Consumed by:

- `madr-trailers` — `tokens`, `themes` re-exports
- `@madr/compositions` (sibling repo) — `tokens`, `themes` (regular dep)
- `movie-a-day-review` (`/admin/trailers` editor) — `compositions` (CompositionId / VARIANT_COMPOSITIONS / DEFAULTS / labels)
- Future: `madr-brand`, marketing site, etc.

## Exports

- `./tokens` — `BRAND` palette, `FONT` families, `FPS=30`
- `./themes` — `THEMES` (7 presets: launch / editorial / podcast / noir / minimal / neon / vintage), `THEME_NAMES` (Zod enum source), `getTheme(name)`
- `./compositions` — `CompositionId` union (7 templates), `VARIANT_COMPOSITIONS` (×3 variants each), `VARIANT_DIMENSIONS`, `COMPOSITION_LABELS`, `DEFAULTS` (programmatic seeds — must be kept in sync by hand with `madr-trailers/src/Root.tsx` defaultProps literals because Studio's Save-to-code requires inline literals there)
- `./voice` — structured voice guide as data (no Zod runtime cost; consumers can validate against shape if they want)
- `./tokens.css` — CSS custom-properties version, synced into `madr-brand/tokens-core.css` via `madr-brand/scripts/sync-tokens.mjs`
- `./logo/*.svg` — monograms / wordmarks / lockups

## Install in a consumer

```json
"@madr/core": "github:movieadayreview/madr-core"
```

Important: `npm install` caches the resolved git commit in package-lock.json. To pull a new commit on `master`, run `npm install @madr/core@github:movieadayreview/madr-core` to force re-resolution.

## Adding a new composition / theme

Themes: add to `THEMES` and `THEME_NAMES` in `src/themes.ts` in lockstep. The `gold` slot is positional (primary accent — can be any color), not literal gold.

Compositions: update `CompositionId`, `COMPOSITION_LABELS`, `VARIANT_COMPOSITIONS`, and `DEFAULTS` in `src/compositions.ts`. Then add the React component to `@madr/compositions`, and register it in `madr-trailers/src/Root.tsx` (× 3 variants with inline defaultProps). The main app picks the new ID up automatically because it iterates `COMPOSITION_LABELS` keys, but the new-trailer picker (`movie-a-day-review/src/app/admin/trailers/new/page.tsx`) has its own `ORDER` array — add the new ID there too.
