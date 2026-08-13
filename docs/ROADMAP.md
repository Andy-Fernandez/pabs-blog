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

### Needed Before Design

- [ ] **Primary language:** English, Spanish, or bilingual
  - Recommended: choose one primary language for V1.
- [ ] **Display name:** decide how the name appears in the header and page title
  - Recommended: `Pablo Fernandez` unless another public name feels more natural.
- [ ] **Short introduction:** write 1-3 sentences for the homepage
- [ ] **Visual personality:** choose a general direction
  - Recommended: an editorial personal notebook with strong typography, generous
    whitespace, restrained color, and real project or journal images.
- [ ] **Accent color:** choose one recognizable accent color
  - Recommended: start with one accent and neutral background, text, and border
    colors. Avoid building a large theme system.

### Needed Before Adding Content

- [ ] Choose 2 projects to publish first
- [ ] Choose 4-6 journal entries to publish first
- [ ] Decide which external links to show: email, GitHub, LinkedIn, or others
- [ ] Gather available project screenshots and personal images
- [ ] Write the first `Lately` items: Watching, Reading, Building, Cooking, and
  Learning

### Needed Before Launch

- [ ] Choose a hosting provider
  - Recommended: use a simple static Astro deployment.
- [ ] Choose the initial domain or temporary deployment URL
- [ ] Decide whether basic privacy-friendly analytics are needed
  - Recommended: launch without analytics unless there is a current reason for it.

## Build Checklist

### 1. Foundations

- [ ] Replace the Astro starter homepage and metadata
- [ ] Create global CSS variables for colors, typography, spacing, widths, borders,
  radius, and transitions
- [ ] Create `BaseLayout`
- [ ] Create `Header`, `Footer`, and `Container`
- [ ] Add reusable page title, description, and Open Graph metadata
- [ ] Replace the starter favicon

### 2. Content

- [ ] Create the `projects` content collection
- [ ] Create the `journal` content collection
- [ ] Add simple schemas in `src/content.config.ts`
- [ ] Support journal types: thought, movie, book, cooking, tech, and life
- [ ] Exclude draft content from production pages
- [ ] Add the first real project and journal entry early to guide the design

### 3. Pages

- [ ] Build `/` with Introduction, Selected Projects, Lately, and Latest Journal
  Entries
- [ ] Build `/about`
- [ ] Build `/projects`
- [ ] Build `/projects/[slug]`
- [ ] Build `/journal`
- [ ] Build `/journal/[slug]`
- [ ] Build a simple `404` page

### 4. Reusable Components

- [ ] Create `ProjectPreview`
- [ ] Create `JournalEntryPreview`
- [ ] Create `LatelyItem`
- [ ] Create `Tag` only if tags are displayed in more than one place
- [ ] Create shared prose styles for project and journal bodies

### 5. Content For Launch

- [ ] Add a real homepage introduction
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
