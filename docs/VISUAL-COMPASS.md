# Pabs Life — Visual Compass

- **Status:** canonical design and interaction specification
- **Version:** 0.2
- **Last reviewed:** 2026-08-15
- **Content authority:** [Personal Compass](./PERSONAL-COMPASS.md)
- **Implementation plan:** [Roadmap](./ROADMAP.md)

Use this document to decide how Pabs Life looks, feels, and behaves. Use the
Personal Compass to decide what belongs and what the site should reveal. Use the
Roadmap for implementation order and current progress.

If code conflicts with this document, update the code or revise this compass
deliberately. Never invent personal facts, opinions, photographs, or biography to
complete a composition.

## How to use this document

The rules, tokens, relationships, and accessibility requirements below are
binding until this compass is intentionally revised.

Items labelled **working** are provisional. They can guide layout, but they are
not approved personal copy or content:

- `STILL BECOMING.`
- `PERSONAL ARCHIVE / ISSUE 001 / 2026`
- `OPEN THE 2026 ARCHIVE →`
- `ABOUT THIS HUMAN →`
- `MADE BY A PERSON`
- `NOT A PORTFOLIO / NOT ONE TOPIC / NOT FINISHED`
- sample archive entries and labels such as `P/26`

This revision also interprets a supplied `941 × 1672` homepage concept reviewed
on 2026-08-15. The image itself is not stored in this repository. Ask Pablo for
it when direct visual comparison is required.

Treat the concept as evidence for hierarchy, composition, materials, and component
relationships—not as a screenshot to reproduce. Its person, photographs, sample
entries, fixed coordinates, and rounded presentation frame are not production
content.

## 1. Identity

Pabs Life is not a conventional portfolio with a blog attached. It is a
**living personal archive** where projects, thoughts, films, books, photographs,
experiments, notes, food, unfinished ideas, and personal reflections can coexist.

The common category is not the medium:

> The connection between everything here is Pablo.

The site should feel like evidence of an ongoing life, not a presentation of a
finished identity.

> I am not presenting a finished identity. I am documenting an identity in motion.

### Creative north star

> Independent editorial publication × personal archive × restrained fanzine.

The system combines:

- **Editorial design:** strong typography, hierarchy, disciplined grids,
  whitespace, metadata, and photographic composition.
- **Analog archive language:** paper grain, photocopy texture, stamps, tape,
  handwritten marks, black-and-white photography, and slight imperfection.
- **Digital interface:** navigation, controls, responsive layout, accessibility,
  and restrained interaction.

The central rule is:

> The page may look handmade, but the system underneath must be disciplined.

The site should feel personal, curious, editorial, tactile, human, expressive,
intentional, slightly unfinished, and calm beneath its visual attitude.

It should not feel corporate, résumé-like, dashboard-like, randomly brutalist,
excessively chaotic, nostalgic for its own sake, or like a Spider-Punk imitation.
Spider-Punk and fanzine culture are influences, not the product.

## 2. System principles

1. **Compose mobile first.** Desktop expands the mobile hierarchy.
2. **Choose one dominant gesture per viewport.** Everything else supports it.
3. **Let content carry the identity.** Typography, spacing, imagery, and writing
   matter more than decoration.
4. **Keep imperfection controlled.** Irregularity is a deliberate layer over a
   consistent grid and interface.
5. **Keep blue rare.** It marks something current, selected, alive, or continuing.
6. **Use only two typography voices.** Condensed display and literary mono.
7. **Distinguish interface from artifact.** Digital controls are soft; physical
   notes and scraps are sharp.
8. **Make long-form pages calmer than the home page.**
9. **Use photography as archive evidence, not decoration.**
10. **Protect reading order and accessibility before visual fidelity.**

## 3. Composition

### Reference hierarchy

The homepage concept establishes four descending intensity zones:

1. **Header:** wordmark, language control, and menu trigger on one quiet rule.
2. **Hero poster:** archive label, statement, portrait, short introduction,
   actions, and a few restrained analog marks.
3. **Identity annotation:** one digital card paired with one physical note.
4. **Live archive:** current activity and recent additions at lower intensity.

Preserve this dominant-to-quiet sequence. Do not trace the concept into
fixed-position CSS.

### Mobile order

The home hero must remain understandable in this document order:

1. Header
2. Archive label
3. Main statement
4. Editorial photograph or portrait
5. Introductory copy
6. Primary actions
7. Supporting modules

On narrow screens, change line breaks, stack modules, reposition photography, and
remove decoration. Do not shrink a desktop collage until it fits.

### Responsive translation

- **Mobile:** use normal reading order; avoid headline/portrait overlap when it
  harms readability; stack actions and supporting cards.
- **Tablet:** allow the portrait and one supporting artifact to offset across the
  grid.
- **Desktop:** let the statement occupy about seven columns and the portrait four
  or five, with one controlled overlap when it remains readable.
- Keep stamps, rings, tape, and other decorative marks out of the content and
  focus order.

## 4. Home contracts

### Header

The compact header contains:

1. the `Pabs Life` wordmark;
2. the `EN / ES` language control;
3. a real menu button with an accessible name and at least a `44 × 44px` target.

`PABS` appears as display text on paper; `FILE` is reversed in a compact black
field. Align all three controls to the same baseline zone and separate the header
with one fine ink rule.

Do not squeeze many links into tiny type or hide destinations. A menu trigger may
remain at wide widths if it is clearer than dense inline navigation; confirm that
choice with real content and usability, not the concept image alone.

### Hero

The hero is the strongest visual moment and has one dominant gesture.

Working archive label:

`PERSONAL ARCHIVE / ISSUE 001 / 2026`

Treat it as compact catalog metadata: black field, white uppercase mono, restrained
rounded geometry.

Working statement:

> STILL BECOMING.

Use enormous condensed uppercase type, very tight line-height, strong ink, careful
line breaks, and only subtle print irregularity. It may interact with the portrait,
but the full statement must stay readable.

Working introduction:

> A personal archive of thoughts, projects, films, books, and traces—collected in
> real time.
>
> This is where I document the process of becoming.

Keep final introductory copy human and short, with a target measure of `32–40ch`.

Working actions:

- `OPEN THE 2026 ARCHIVE →`: black field, white mono.
- `ABOUT THIS HUMAN →`: paper field, ink border, black mono.

Both actions share dimensions, alignment, interaction states, and a minimum
`44px` touch target. They may invert or move the arrow slightly, but must not
jump or rotate.

On wide screens:

- place the archive label above the statement;
- let the statement own roughly 60–65% of the width;
- offset the portrait into the statement's field without hiding essential words;
- keep the introduction and actions in a quieter area below;
- place the authorship stamp near the portrait, never over the face;
- use at most one pale-blue circular line and one meaningful archive badge.

On mobile, express the same relationship through sequence instead of overlap.

### Photography

Photography is archive evidence. Prefer:

- black and white;
- medium-to-high contrast;
- subtle grain;
- minimal retouching;
- natural gestures and ordinary moments;
- documentary rather than commercial framing.

Prefer a real, approved photograph of Pablo. Do not recreate another person's pose
or likeness, use an unapproved concept portrait, or substitute generic stock. Until
real photography exists, use an honest empty or typographic state.

A portrait may cross display typography only when the interaction adds meaning and
preserves contrast, words, and reading order.

### Supporting modules

**Identity in motion** is a philosophical card, not ordinary navigation. It may
pair one calm digital card with one taped paper note. Neither competes with the
hero.

**Currently** is a static V1 view of what is happening now: watching, reading,
building, cooking, or learning. A small blue dot may mark it as current.

**Recent additions** is one chronological stream where projects, notes, films,
books, photographs, and life entries coexist. Rows share structure and omit
thumbnails when no meaningful image exists.

`CURRENTLY` and `RECENT ADDITIONS` should share their outer frame, border,
radius, heading rhythm, and current-state language. Their contents may differ.

## 5. Foundations

### Hierarchy

Use four levels:

- **Loud:** hero or editorial statement.
- **Medium:** photography or one editorial card.
- **Calm:** body copy.
- **Quiet:** metadata, labels, and dates.

Do not combine a giant headline, dominant photograph, oversized card, loud texture,
and several annotations at full intensity.

### Color

| Token | Value | Role |
|---|---:|---|
| `paper` | `#F7F7F5` | Primary canvas |
| `paper-pure` | `#FFFFFF` | Elevated paper |
| `paper-muted` | `#F1F1F1` | Secondary surfaces |
| `ink` | `#070707` | Primary text |
| `ink-soft` | `#202020` | Secondary black |
| `gray-mid` | `#737373` | Metadata |
| `gray-line` | `#D6D7D8` | Dividers |
| `blue` | `#809FCF` | Primary accent |
| `blue-dark` | `#6F8FC3` | Interactive accent |
| `blue-soft` | `#C3D2EC` | Soft accent surface |

Target roughly 85–90% paper, 8–12% ink, and less than 5% blue.

Use blue for a current-state dot, selected arrow, small status mark, occasional
line, or scope-changing action. It is not the default color for links, cards, or
all interactive states.

### Typography

Use at most two font families.

**Display voice:** a condensed grotesk for hero statements, issue numbers, and
editorial declarations.

```css
font-weight: 800;
text-transform: uppercase;
letter-spacing: -0.035em;
line-height: 0.82;
```

Anton, League Gothic, and Oswald describe the intended character; the final choice
depends on delivery and reading quality. Texture only very large display type.

**Archive voice:** a literary typewriter or monospaced face for body copy,
navigation, buttons, metadata, lists, notes, dates, and captions. Courier Prime,
IBM Plex Mono, Space Mono, and DM Mono are possible directions.

The archive voice must feel human, not like a developer console. Adjust size,
weight, line-height, and measure for long reading instead of adding a third family.

### Grid and spacing

- Mobile: 4 columns, `20px` page padding, `12px` gaps.
- Tablet: 8 columns.
- Desktop: 12 columns, `1180px` maximum width, `40px` page padding, `20px`
  gaps.

All deliberate asymmetry and overlaps resolve onto the grid. Use a small spacing
scale; avoid one-off margins that compensate for weak composition.

### Shape, borders, and shadows

```css
--radius-sm: 8px;
--radius-md: 14px;
--radius-lg: 22px;
--radius-pill: 999px;
```

- Digital cards: usually `18–24px`.
- Buttons: usually `10–14px`.
- Pills: fully rounded.
- Paper notes and scraps: `0–4px`.
- Digital borders: about `1.5–2px` ink.
- Internal dividers: `1px` gray line or low-opacity ink.
- Shadows: soft and limited to physical paper artifacts.

Do not put the browser inside the concept image's large rounded outer frame by
default. Avoid thick offset sticker shadows and heavy borders on every component.

### Analog motifs

Use this small vocabulary consistently:

| Motif | Meaning |
|---|---|
| Tape | Temporary attachment or annotation |
| Stamp | Authorship, date, or archive status |
| Hand-drawn line | Emphasis |
| Paper note | Observation or temporary thought |
| Circular line | Motion, recurrence, or iteration |
| Blue dot | Current, active, or alive |
| Arrow | Navigation or continuation |

Allowed imperfection includes one slight rotation, quiet paper/scanner grain,
monochrome photo grain, imperfect underlines, subtle ink irregularity, and small
physical offsets.

Do not use random spacing, arbitrary fonts, inconsistent borders, uncontrolled
rotation, random shadows, clutter, or multiple accents.

Keep global texture around `0.015–0.045` opacity. If it is noticed before the
content, it is too strong.

### Motion

```css
--motion-fast: 120ms;
--motion-base: 180ms;
--motion-slow: 300ms;
```

Allowed motion:

- arrow movement of `3–5px`;
- image scale no greater than `1.02`;
- underline extension;
- subtle color inversion;
- card movement of `1–2px`.

Avoid parallax, springs, animated gradients, moving grain, and cursor effects.
Always respect `prefers-reduced-motion`.

## 6. Component language

Create an Astro component only after a rule repeats or when it materially improves
readability. Keep existing `Container`, `Header`, `Footer`, content layouts,
and preview concepts unless implementation proves they need focused changes.

Shared visual contracts:

- **Archive label:** black catalog label with white uppercase mono.
- **Portrait card:** tall documentary image, fine border, large digital radius,
  and optional meaningful badge outside the subject's face.
- **Primary/secondary actions:** shared geometry with filled and outlined states.
- **Editorial card:** soft digital container, fine border, generous padding, one
  statement, short explanation, and at most one action.
- **Paper note:** near-square physical paper, minimal radius, one slight rotation,
  one strip of tape, and one short annotation.
- **Status/archive-list card:** shared outer frame, heading rhythm, dividers, and
  current-state mark.
- **Stamp:** authorship, date, or archive status—not generic decoration.

Possible component names include `ArchiveLabel`, `HeroStatement`,
`PortraitCard`, `EditorialCard`, `PaperNote`, `Stamp`, `StatusCard`,
`ArchiveListItem`, and `Tag`. This is vocabulary, not a required backlog.

Build in this order:

1. Foundations
2. Repeated primitives
3. Repeated editorial components
4. Page patterns
5. Pages according to the Roadmap

## 7. Information architecture

The public interface may organize content by type of trace:

```text
Home
Archive
├── Projects
└── Journal
    ├── Thoughts
    ├── Films
    ├── Books
    ├── Cooking
    ├── Tech
    └── Life
About
```

This does not create a collection for each type. The implementation keeps:

- `projects` for intentionally built work;
- `journal` for every other trace, distinguished by `type`.

Photographs may live inside those entries; they do not require a separate
`photo` collection or Journal type in V1.

Projects, Journal views, and years should feel like views into one archive rather
than separate brands.

## 8. Inner-page contracts

The home page may behave like a poster. Article and project bodies must behave like
long-form reading.

Recommended detail-page flow:

1. Type and date
2. Title
3. Introduction
4. Hero image when meaningful
5. Body
6. At most one useful pull quote or annotation treatment
7. Related or previous/next navigation only when the archive is deep enough

```css
max-width: 68ch;
line-height: 1.65;
```

Project pages may use more imagery, but their story—idea, decisions, difficulty,
learning, and what Pablo would change—remains primary.

## 9. Accessibility

The analog aesthetic must never damage usability.

Required:

- semantic HTML and heading order;
- readable contrast;
- visible keyboard focus;
- meaningful alternative text;
- `44 × 44px` minimum touch targets;
- no information communicated only by color;
- selectable body text;
- logical content and focus order;
- reduced-motion support;
- correct `lang` attributes for English and Spanish.

Decorative stamps, rings, tape, and repeated labels stay out of the accessibility
tree. Basic arrows, dots, circles, and menu lines should use HTML and CSS rather
than adding an icon dependency.

> The website may look like paper. It must never behave like paper.

## 10. Avoid

- **Generic brutalism:** black, white, large type, and borders are not enough;
  warmth, whitespace, photography, material contrast, and rhythm matter.
- **Unrestrained fanzine styling:** too many stickers, marks, rotations, textures,
  stamps, or type treatments destroy the calm.
- **A separate design system per section:** metadata, spacing, frames, and
  interactions belong to one archive.
- **Distributed blue:** rarity gives the accent meaning.
- **Homepage intensity on long-form pages:** reading comes first.
- **Concept art presented as truth:** replace or omit sample people, photographs,
  labels, and entries.
- **Decorative infrastructure:** do not create components, dependencies, or
  interaction for visual effects that do not solve a real need.

## 11. Acceptance test

Before accepting a screen, confirm:

- [ ] One element is clearly dominant.
- [ ] The composition works mobile first.
- [ ] Most of the screen remains paper and ink.
- [ ] Blue is rare and meaningful.
- [ ] Two typography voices are enough.
- [ ] Spacing, overlap, and asymmetry resolve onto the grid.
- [ ] Digital and physical objects use distinct shape and shadow rules.
- [ ] Every analog element communicates something.
- [ ] The interface works without decoration.
- [ ] Body copy is comfortable to read.
- [ ] Keyboard, touch, motion, language, and assistive-technology needs are met.
- [ ] The screen belongs to the same archive as the others.
- [ ] No sample identity or content is presented as Pablo's.
- [ ] The result preserves the concept's relationships without copying fixed
  coordinates or its outer presentation frame.

If several answers are no, the design has drifted away from Pabs Life.

## Direction in one sentence

> A living personal archive designed like an independent editorial publication:
> monochrome, typographic, tactile, and intentionally unfinished, with disciplined
> digital structure underneath its analog imperfections.

Pabs Life should never communicate “look how cool my portfolio is.” It should
communicate:

> This is what I have been making, seeing, thinking, feeling, and becoming.

The website does not exist to prove that Pablo has arrived. It exists to leave
traces of the journey.
