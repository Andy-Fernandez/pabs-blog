# AGENTS.md

## Project Overview

This project is my personal website.

It is not just a developer portfolio and it is not just a blog.

It is a personal space on the internet where I can document the things I:

* build.
* learn
* think about
* read
* watch
* cook
* explore
* experience

The website should gradually become a personal archive of my interests, projects, thoughts and creative work.

The goal is to let someone understand not only what I do, but also how I think and what I care about.

---

# Core Idea

## Guiding Principle

> **The connection between everything here is me.**

The website is a living archive of who Pablo is and who he is becoming. It must
not present identity as finished or perfectly coherent. Preserve traces of the
process: finished work, attempts, mistakes, changing opinions, ordinary moments,
and unfinished questions. The handmade fanzine language is not a decorative skin;
it communicates that the archive was made by a person and is allowed to change.

When design or architecture decisions are unclear, prefer the option that makes
the site feel more like memory in motion and less like a conventional portfolio.

## Project Compasses

Use the project documents in this order:

1. `docs/VISUAL-COMPASS.md` is the primary implementation authority for how the
   site looks, feels, and behaves.
2. `docs/PERSONAL-COMPASS.md` decides what belongs and what the archive should
   reveal.
3. `docs/ROADMAP.md` records the current implementation order and open inputs.
4. Existing screens are implementation evidence, not design authority.

Do not blend these responsibilities. The Personal Compass is not public copy by
default, and the Visual Compass must not invent personal facts to complete a
composition.

The website revolves around two main concepts:

```text
Projects
Journal
```

## Projects

Projects represent things I have intentionally built.

They can include:

* software projects
* experiments
* university projects
* prototypes
* design work
* research
* creative projects

## Journal

The Journal represents everything I want to document or reflect on.

It can contain:

* thoughts
* essays
* movies
* books
* cooking
* technology
* things I learned
* life observations
* experiments
* short notes

Do not create a completely separate system for every interest.

Books, movies, cooking and thoughts should initially belong to the same Journal system.

---

# Main Goal

The main goal is:

> Publish quickly, keep the architecture simple, and allow the website to evolve naturally over time.

The website does not need to be complete before publishing.

Prefer shipping a simple version over building infrastructure for hypothetical future requirements.

---

# Technology

Use:

* Astro
* TypeScript
* Astro Components
* HTML
* CSS
* Markdown
* MDX only when needed
* Astro Content Collections

Avoid adding frameworks such as:

* React
* Vue
* Svelte

unless a specific feature genuinely needs client-side component state.

Do not introduce:

* a backend
* a database
* authentication
* a CMS

for the initial version.

---

# Architecture Philosophy

Follow these principles:

> Static first.

> Content first.

> Interactive only when necessary.

> Simple before abstract.

Astro components should be the default building block.

Avoid sending JavaScript to the browser unless actual interaction requires it.

Do not create architecture for requirements that do not currently exist.

---

# Initial Website Structure

The initial website should remain small.

```text
/
├── About
├── Projects
└── Journal
```

Possible routes:

```text
/
/about

/projects
/projects/[slug]

/writings
/writings/[slug]

/movies
/movies/[slug]

/books
/books/[slug]
```

Journal filtering can eventually provide views such as:

```text
All
Thoughts
Movies
Books
Cooking
Tech
Life
```

These filters should not require separate content systems.

---

# Homepage

The homepage should introduce me as a person rather than presenting a traditional résumé.

Possible structure:

```text
Introduction

Selected Projects

Lately

Latest Journal Entries

Footer
```

The homepage should answer:

* Who is this person?
* What are they making?
* What are they thinking about?
* What are they interested in lately?

Do not try to display everything.

Create curiosity and allow visitors to explore.

---

# Lately

The homepage may contain a small section called:

```text
Lately
```

It can contain things such as:

```text
Watching
Reading
Building
Cooking
Learning
```

Example:

```text
Watching
Aftersun

Reading
The Stranger

Building
Gotchu

Cooking
Homemade ramen
```

This should remain lightweight.

Do not build a complex tracking system for this in V1.

Static data or a small content file is acceptable.

---

# Content Architecture

Keep the number of Astro Content Collections small.

Initial structure:

```text
src/
├── components/
├── layouts/
├── pages/
├── styles/
│
├── content/
│   ├── journal/
│   └── projects/
│
└── content.config.ts
```

Do not create separate collections such as:

```text
books/
movies/
cooking/
thoughts/
```

unless there is a real architectural reason to do so later.

---

# Journal

Journal entries should be flexible.

Each entry has a `type` that describes what kind of entry it is.

Initial journal types:

```text
thought
movie
book
cooking
tech
life
```

More types can be added later if necessary.

Example:

```yaml
---
title: "I finally watched Aftersun"
description: "Some thoughts about memory, family and things we understand too late."
date: 2026-08-13
type: movie
subject: "Aftersun"
rating: 5
tags:
  - movies
  - memory
draft: false
---
```

The body contains the actual reflection.

---

# Movie Entries

Movie entries belong to Journal.

They should focus on what I thought or felt about the movie rather than trying to recreate IMDb or Letterboxd.

Possible metadata:

```yaml
---
title: "I finally watched Aftersun"
date: 2026-08-13
type: movie
subject: "Aftersun"
rating: 5
---
```

Keep metadata minimal.

The writing is more important than the data.

---

# Book Entries

Book entries also belong to Journal.

Example:

```yaml
---
title: "Some thoughts after reading The Stranger"
date: 2026-08-20
type: book
subject: "The Stranger"
author: "Albert Camus"
rating: 4
---
```

Book entries can contain:

* reactions
* ideas
* quotes worth discussing
* disagreements
* philosophical reflections
* things learned

Do not turn this into a book database.

---

# Cooking Entries

Cooking also belongs to Journal.

Entries can document:

* recipes I tried
* experiments
* food I learned to make
* mistakes
* improvements
* photos
* small stories around cooking

Example:

```yaml
---
title: "My first attempt at homemade ramen"
date: 2026-08-24
type: cooking
tags:
  - ramen
  - cooking
---
```

The entry does not need to behave like a formal recipe unless I want it to.

Personal context and experimentation are encouraged.

---

# Thought Entries

Thought entries can be short or long.

They may contain:

* observations
* philosophical ideas
* questions
* things I am trying to understand
* reflections about technology
* personal ideas
* lessons learned

Example:

```yaml
---
title: "Why I think we underestimate boredom"
date: 2026-08-29
type: thought
---
```

Do not force every thought into a long-form article.

Short writing is valid.

---

# Tech Entries

Technical content should also live in Journal when it represents something I learned, explored or want to explain.

Examples:

```text
Why I chose Astro for my personal website

Things I learned implementing a design system

What I misunderstood about authentication

Notes from experimenting with computer vision
```

Technical posts should remain personal and understandable rather than reading like generated documentation.

---

# Projects

Projects represent substantial things I have built or actively worked on.

Project pages should tell the story behind the work.

They should explain:

* What was the idea?
* Why did I build it?
* What problem was I trying to solve?
* What decisions did I make?
* What did I learn?
* What was difficult?
* What would I change today?

Avoid reducing projects to technology badges.

Possible metadata:

```yaml
---
title: "Gotchu"
description: "A booking experience for local barbershops."
year: 2026
status: active
featured: true
tags:
  - astro
  - typescript
---
```

Project pages can contain:

* screenshots
* process
* architecture
* design decisions
* lessons
* links
* experiments

Projects should feel like stories of things I created.

---

# Visual Direction

The canonical specification is `docs/VISUAL-COMPASS.md`.

The creative north star is:

> Independent editorial publication × personal archive × restrained fanzine.

The site should feel monochrome, typographic, tactile, human, intentionally
unfinished, and calm beneath its visual attitude. Spider-Punk and fanzine culture
are influences, not the product.

Apply these rules throughout the implementation:

* Compose mobile first; desktop expands the mobile hierarchy.
* Give each viewport one dominant visual gesture.
* Keep roughly 85–90% paper, 8–12% ink, and less than 5% archive blue.
* Use at most two typography voices: condensed display and literary mono.
* Resolve deliberate asymmetry and overlaps onto a 4/8/12-column grid.
* Give digital controls soft geometry and physical paper objects sharp geometry.
* Reuse a small analog vocabulary—tape, stamp, hand-drawn line, paper note,
  circular line, blue dot, and arrow—with consistent meanings.
* Make long-form pages substantially calmer than the homepage.
* Treat documentary photography as archive evidence, not decoration.
* Never let texture, collage, or controlled imperfection damage accessibility or
  reading order.

The page may look handmade, but the system underneath must be disciplined.

---

# Content Is the Main Visual Element

Typography, spacing and content should create most of the visual identity.

Do not rely on:

* excessive gradients
* excessive glassmorphism
* dozens of cards
* constant animations
* huge decorative hero sections
* visual effects without purpose

Images, typography and whitespace can carry the experience.

---

# Design System

Keep the initial design system small.

Define foundations first:

```text
Colors
Typography
Spacing
Content width
Border radius
Transitions
```

Use CSS custom properties.

Example:

```css
:root {
  --paper: #f7f7f5;
  --paper-pure: #ffffff;
  --paper-muted: #f1f1f1;
  --ink: #070707;
  --ink-soft: #202020;
  --gray-mid: #737373;
  --gray-line: #d6d7d8;
  --blue: #809fcf;
  --blue-dark: #6f8fc3;
  --blue-soft: #c3d2ec;

  --content-width: 720px;
  --page-width: 1180px;

  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 22px;
  --radius-pill: 999px;

  --motion-fast: 120ms;
  --motion-base: 180ms;
  --motion-slow: 300ms;
}
```

Do not create dozens of tokens before they are actually needed.

---

# Components

Create reusable components when repetition exists.

Possible initial components:

```text
Header
Footer
Container
ProjectPreview
JournalEntryPreview
Tag
Prose
LatelyItem
```

Additional components should emerge from actual repetition.

Do not abstract something just because it could theoretically become reusable.

---

# Layouts

Possible layouts:

```text
BaseLayout
JournalLayout
ProjectLayout
```

Keep layouts responsible for structure rather than business logic.

---

# CSS

Prefer:

* native CSS
* CSS variables
* Astro scoped styles
* simple reusable utility classes when useful

Avoid introducing a large styling dependency simply to reproduce basic CSS.

The website should remain understandable without knowing a specific UI framework.

---

# TypeScript

Use TypeScript.

Prefer explicit and simple types.

Avoid:

* unnecessary generics
* clever abstractions
* excessive utility types
* complicated architecture
* premature patterns

Readable code is more important than clever code.

---

# Dependencies

Before installing a dependency, ask:

1. Can Astro already solve this?
2. Can HTML or CSS solve this?
3. Can a small amount of JavaScript solve this?
4. Does the dependency significantly simplify the implementation?
5. Will we realistically maintain it?

Do not install dependencies without a clear reason.

---

# Accessibility

Use semantic HTML.

Prefer:

```html
<header>
<nav>
<main>
<article>
<section>
<footer>
```

over unnecessary `<div>` nesting.

Interactive elements must support keyboard navigation.

Images should contain meaningful alt text when appropriate.

Maintain readable contrast and comfortable typography.

---

# Images

Images are important for this website.

They can appear in:

* project pages
* cooking entries
* movie entries
* travel or life entries
* journal posts

Use Astro's image capabilities where appropriate.

Do not over-optimize image infrastructure during V1.

---

# Performance

Prefer static rendering.

Avoid unnecessary client-side JavaScript.

Use Astro's strengths instead of trying to turn Astro into a traditional SPA.

Optimize important images where appropriate.

Do not sacrifice maintainability for insignificant performance improvements.

---

# SEO

Important pages should have:

* title
* description
* meaningful URL
* Open Graph metadata when appropriate

Journal entries should use semantic `<article>` markup.

SEO should remain simple and content-driven.

---

# Writing Style

Content should sound like me.

It can be:

* curious
* reflective
* informal
* technical
* philosophical
* humorous
* unfinished
* exploratory

Do not automatically rewrite personal writing into corporate or academic language.

Preserve personality.

Avoid making every entry sound perfectly polished.

The website should feel written by a human being.

---

# Development Rules for AI Agents

When modifying this repository:

1. Inspect the existing architecture before creating new patterns.
2. Prefer existing foundations and components.
3. Prefer Astro-native solutions.
4. Do not introduce React, Vue or Svelte without a concrete reason.
5. Do not install dependencies without explaining their value.
6. Keep changes small and focused.
7. Do not refactor unrelated code.
8. Do not create a backend unless explicitly requested.
9. Do not create a database unless explicitly requested.
10. Do not introduce a CMS unless explicitly requested.
11. Preserve the visual identity.
12. Preserve the personal character of the website.
13. Avoid overengineering.
14. Prefer readable code over clever abstractions.
15. Do not build features only because they might be useful someday.

---

# Decision Priority

When multiple solutions are possible, prefer:

```text
Simpler architecture
↓
Less code
↓
Fewer dependencies
↓
Less client-side JavaScript
↓
Better readability
↓
Easier maintenance
```

---

# V1 Definition

Version 1 is successful when I can:

* publish the website
* introduce myself
* show selected projects
* publish a Journal entry
* write about a movie
* write about a book
* share something I cooked
* publish technical or personal thoughts
* navigate comfortably
* have a visual identity that feels like me

Anything beyond this is optional.

---

# Things That Are Not Required for V1

Do not prioritize:

* comments
* likes
* user accounts
* authentication
* newsletter infrastructure
* databases
* CMS platforms
* advanced search
* complex filtering
* recommendation systems
* analytics dashboards
* social features
* sophisticated animations

These features can be evaluated after the website is already published.

---

# Future Possibilities

Possible future improvements include:

```text
Search
RSS
Newsletter
Guestbook
Now page
Favorites
Photo collections
Uses page
Reading archive
Movie archive
Recipe index
Interactive experiments
Analytics
CMS
```

These are possibilities, not current requirements.

Do not design V1 around them.

---

# Core Principle

When deciding whether something belongs in the project, ask:

> Does this help me create, express, document or share something meaningful?

If yes, it may belong.

If not, it probably does not need to exist yet.

And when deciding whether something needs more architecture, ask:

> Do I have this problem today?

If the answer is no, do not solve it yet.
