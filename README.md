# @madr/core

Single source of truth for the MADR brand system and Remotion composition metadata. Consumed by `madr-trailers`, `madr-brand`, and `movie-a-day-review`.

## Exports

| Path                      | Contents                                                |
| ------------------------- | ------------------------------------------------------- |
| `@madr/core`              | Everything (re-exports all named exports below)         |
| `@madr/core/tokens`       | `BRAND`, `FONT`, `FPS`, raw token values                |
| `@madr/core/themes`       | `THEMES`, `ThemeName`, `getTheme`, `THEME_NAMES`        |
| `@madr/core/compositions` | `CompositionId`, `VARIANT_COMPOSITIONS`, `DEFAULTS`, labels |
| `@madr/core/voice`        | `VOICE`, Zod schemas for structured voice guide          |
| `@madr/core/tokens.css`   | CSS custom properties version of `BRAND` + `FONT`       |
| `@madr/core/logo/*.svg`   | MADR logo SVGs (monograms, wordmarks, lockups)          |

## Installing in a consumer

Add a local file dependency to the consumer's `package.json`:

```json
{
  "dependencies": {
    "@madr/core": "file:../madr-core"
  }
}
```

Then run `npm install` in the consumer. Re-run after editing `madr-core` source (or use `npm link` for live updates during development).

## Why no build step

All exports are raw TypeScript. Consumers (`madr-trailers` via Remotion/esbuild, `movie-a-day-review` via Next.js/SWC) can bundle `.ts` directly. This keeps the package lightweight and avoids a compile loop during development.

## Known sync responsibility

The defaults in `src/compositions.ts` must stay in sync with the `defaultProps` literals in `madr-trailers/src/Root.tsx`. The Studio "Save" feature writes to those literals, so they can't be replaced with imports. When trailers are edited in Studio and Saved, mirror the changes here.
