# Pabs Life

**The connection between everything here is me.**

Pabs Life is a personal, creative, constantly evolving archive of the things I
build, think, learn, observe, and make. It does not try to present a perfect or
finished version of me. It preserves traces of the process: projects, films,
books, food, ideas, experiments, failures, and curiosities that are shaping who
I become.

The site should feel like an independent editorial publication crossed with a
personal archive and a restrained fanzine: human, tactile, expressive, readable,
and made by hand without becoming chaotic.

## Project compasses

- [`docs/VISUAL-COMPASS.md`](docs/VISUAL-COMPASS.md) is the canonical visual and
  interaction direction.
- [`docs/PERSONAL-COMPASS.md`](docs/PERSONAL-COMPASS.md) guides what belongs and
  what the archive should reveal.
- [`docs/ROADMAP.md`](docs/ROADMAP.md) tracks the rebrand and the personal inputs
  still needed.

## Structure

- `Projects` contains things I intentionally build.
- `Writings`, `Movies`, and `Books` are the public views into one simple Journal
  content collection, so different interests can feel distinct without creating
  separate publishing systems.
- Year pages such as `/2026` preserve a chronological view of both.
- English is the default interface; Spanish lives under `/es`.

## Development

```sh
npm install
npm run dev
npm run build
```

Built with Astro, TypeScript, Markdown, and native CSS. The site is static by
default and intentionally has no framework UI, backend, database, authentication,
or CMS.
