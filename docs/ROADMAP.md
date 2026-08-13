# Website V1 Roadmap

This document tracks what the first publishable version needs and the few
decisions that should be made before or during implementation.

The goal is to publish a small, personal website that can grow naturally.

## V1 Outcome

Version 1 is ready when someone can:

- understand who Pablo is and what he cares about
- explore selected projects
- read journal entries about different interests
- see what Pablo is interested in lately
- navigate comfortably on mobile and desktop

## Decisions

Only decide what is needed for V1. Use the recommended option when there is no
strong preference yet; it can be changed later.

### Confirmed

- [x] **Languages:** English by default, with a visitor-controlled Spanish option
  - Use English for the default interface and routes. Visitors can switch the site
    interface to Spanish.
  - Entries may be written in either language and will declare their language in
    the content metadata. Do not require every entry to be translated.
- [x] **Display name:** `Pablo Fernandez (Pabs)`
- [x] **Homepage introduction (working copy):**
  `Hi this is me Pabs love create, feel and innate observer`
  - Preserve this voice for now. Review the final wording when the real homepage
    content is added.
- [x] **Visual personality:** monochrome Spider-Punk editorial fanzine
  - Use photocopy and halftone texture, mixed heavy sans-serif and typewriter
    typography, sharp or torn edges, collage layers, and occasional sticker-like
    elements.
  - Keep the expressive treatment controlled around long-form writing so Journal
    entries remain comfortable to read.
- [x] **Core palette:** white `#FFFFFF`, black `#000000`, and newspaper gray
  `#1A1A1A`
  - Treat black and white as the main contrast. Add another accent color later only
    if it has a clear purpose.
- [x] **Architecture and deployment:** static Astro site on a simple static host
- [x] **Analytics:** Cloudflare Web Analytics
  - Use its basic page views, visits, top URLs, and referrers. This is enough for V1
    and does not require a custom analytics dashboard.

### Needed Before Design

- [x] Use a concise `EN / ES` language control in the shared navigation
- [x] Write or approve the Spanish version of the homepage introduction

### Needed Before Adding Content

- [ ] Choose 2 projects to publish first
- [ ] Choose 4-6 journal entries to publish first
- [ ] Decide which external links to show: email, GitHub, LinkedIn, or others
- [ ] Gather available project screenshots and personal images
- [ ] Write the first `Lately` items: Watching, Reading, Building, Cooking, and
  Learning

### Needed Before Launch

- [ ] Choose the specific static hosting provider
- [ ] Choose the initial domain or temporary deployment URL

## Build Checklist

### 1. Foundations

- [x] Replace the Astro starter homepage and metadata
- [x] Create global CSS variables for colors, typography, spacing, widths, borders,
  radius, and transitions
- [x] Create `BaseLayout`
- [x] Create `Header`, `Footer`, and `Container`
- [x] Add English and Spanish interface dictionaries with English as the fallback
- [x] Add static localized routes and preserve the current page when switching
  languages where a translation exists
- [x] Add reusable page title, description, and Open Graph metadata
- [x] Replace the starter favicon
- [x] Add a reduced-motion mode for any collage or sticker animation

### 2. Content

- [x] Create the `projects` content collection
- [x] Create the `journal` content collection
- [x] Add simple schemas in `src/content.config.ts`
- [x] Add `language: en | es` to project and journal content
- [x] Support journal types: thought, movie, book, cooking, tech, and life
- [x] Exclude draft content from production pages
- [x] Add the first real project and journal entry early to guide the design

### 3. Pages

- [x] Build `/` with Introduction, Selected Projects, Lately, and Latest Journal
  Entries
- [x] Build `/about`
- [x] Build `/projects`
- [x] Build `/projects/[slug]`
- [x] Build `/writings`
- [x] Build `/writings/[slug]`
- [x] Build a simple `404` page

### 4. Reusable Components

- [x] Create `ProjectPreview`
- [x] Create `JournalEntryPreview`
- [x] Create `LatelyItem`
- [ ] Create `Tag` only if tags are displayed in more than one place
- [x] Create shared prose styles for project and journal bodies

### 5. Content For Launch

- [x] Add a real homepage introduction
- [ ] Add the About page copy
- [ ] Publish at least 2 project stories
- [ ] Publish at least 4 journal entries across different types
- [ ] Add current `Lately` content
- [ ] Add meaningful images with useful alt text

### 6. Quality And Launch

- [ ] Test the main routes on mobile and desktop
- [ ] Check keyboard navigation, heading order, contrast, and focus states
- [ ] Confirm text and images do not overflow or overlap
- [ ] Confirm every public page has a useful title and description
- [ ] Run `npm run build`
- [ ] Review the production build in a browser
- [ ] Add the Cloudflare Web Analytics beacon to the shared layout
- [ ] Verify visits and page views after the first production deployment
- [ ] Deploy the site

## Not In V1

Do not delay launch for:

- authentication or user accounts
- a database, backend, or CMS
- comments, likes, or social features
- advanced search or filtering
- separate collections for books, movies, cooking, or thoughts
- newsletters or recommendation systems
- complex animations
- an analytics dashboard

## Recommended First Milestone

Build one complete path through the site:

1. Shared layout and navigation
2. Homepage
3. Projects collection with one real project
4. Journal collection with one real entry
5. Mobile and desktop visual review

Once this milestone feels personal and readable, use the same foundations to
complete the remaining pages and content.
