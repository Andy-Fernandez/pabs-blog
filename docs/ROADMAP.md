# PABS FILE Rebrand Roadmap

- **Status:** active implementation checklist
- **Current phase:** Phase 2 — home review
- **Last reviewed:** 2026-08-15
- **Design authority:** [Visual Compass](./VISUAL-COMPASS.md)
- **Content authority:** [Personal Compass](./PERSONAL-COMPASS.md)

This roadmap records **what changes, in what order, and what is still missing**.
It does not define visual or personal direction.

Update checkboxes when work lands. If a task needs a new design rule, revise the
Visual Compass first. If it needs personal information that is not known, leave
the task open and ask Pablo rather than inventing it.

The active product slice is the home page. Other routes remain available as calm
visual previews, but their full design is deferred until Pablo reopens that scope.

## Baseline to preserve

- Astro, TypeScript, Astro components, Markdown, and native CSS.
- Static-first rendering with no UI framework, backend, database, auth, or CMS.
- Two content collections: `projects` and `journal`.
- Journal types: `thought`, `movie`, `book`, `cooking`, `tech`, and `life`.
- English as the default interface and Spanish under `/es`.
- Existing routes, schemas, draft filtering, and layouts unless a focused usability
  issue requires a change.
- The living-archive idea: different traces are connected by Pablo.

## Current implementation snapshot

The former visual layer has been replaced. The current implementation includes:

- the v0.2 palette, two typography voices, spacing, radius, motion, and texture;
- a compact header with full navigation and language switching;
- a mobile-first home with one dominant statement, Pablo's approved documentary
  portrait, current activity, recent entries, and one selected project;
- a shared calm preview language for secondary routes and long-form content;
- base-path-safe internal navigation for local and GitHub Pages builds;
- an installable PWA foundation with manifest, app icons, and offline fallback.

The remaining gaps are final personal copy, more approved documentary material,
and Pablo's acceptance of the home composition.

This snapshot describes the repository on 2026-08-15. Update or remove an item when
the related phase is completed.

## Phase 0 — align the rules

**Status:** complete

- [x] Establish the Visual Compass as the canonical design authority.
- [x] Keep historical visual-document paths as pointers rather than parallel specs.
- [x] Separate personal truth from visual expression in the Personal Compass.
- [x] Reconcile type-of-trace navigation with the two-collection architecture.
- [x] Review the supplied homepage concept and separate binding relationships from
  placeholder people, copy, and entries.
- [x] Record the document hierarchy in `AGENTS.md` and `README.md`.

## Phase 1 — foundations and shared shell

**Status:** implemented; visual review pending

- [x] Replace the global palette with the Visual Compass tokens.
- [x] Define the two typography voices and choose a maintainable delivery method.
- [x] Define a small spacing scale, 4/8/12-column grid, content measure, radius
  scale, borders, and three motion timings.
- [x] Reduce global texture to a near-subconscious layer.
- [x] Reserve soft shadows for physical artifacts; remove heavy offset shadows from
  ordinary digital cards.
- [x] Standardize focus rings, touch targets, icon weight, and reduced motion.
- [x] Rework `Header` and `Footer` as calm shared infrastructure.
- [x] Make the wordmark, language control, and complete navigation usable at every
  width.
- [x] Verify the shell at narrow mobile, wide mobile, tablet, and desktop widths.

**Done when:** a plain content page already feels like PABS FILE before any collage
or special home composition is added.

## Phase 2 — home

**Status:** implemented; awaiting Pablo's review

- [x] Build the hero in the canonical mobile order: header, label, statement,
  portrait, copy, actions, supporting modules.
- [x] Keep `STILL BECOMING.` as working copy until Pablo approves or replaces it.
- [x] Use only approved documentary imagery; provide an honest non-image state until
  it exists.
- [x] Give both hero actions equal dimensions and complete interaction states.
- [x] Limit the hero to one portrait composition, one paper note, and at most one
  supporting motif.
- [x] Expand the mobile hierarchy into one controlled statement/portrait gesture on
  wide screens.
- [x] Rework `Lately` into a lightweight current-status module.
- [x] Merge recent content into one chronological archive stream.
- [x] Give `CURRENTLY` and `RECENT ADDITIONS` the same card language.
- [x] Use thumbnails only when entries have meaningful approved imagery.
- [x] Present selected projects as stories and traces, not technology cards.

**Done when:** the first phone viewport feels bold and personal, one gesture is
dominant, and the page remains understandable without decoration.

## Phase 3 — archive and detail pages

**Status:** deferred; routes currently show visual previews only

- [ ] Create one archive-list language for Projects and Journal views.
- [ ] Distinguish trace types through labels and metadata, not separate design
  systems.
- [ ] Calm article headers and bodies to the `68ch` reading measure.
- [ ] Limit each detail page to one meaningful annotation treatment.
- [ ] Let project pages support screenshots and process without making the story
  secondary.
- [ ] Add related and previous/next navigation only when content volume justifies it.
- [ ] Confirm titles, descriptions, Open Graph metadata, dates, language attributes,
  and draft behavior on representative routes.

**Done when:** a film reflection and a technical note are distinct traces but
clearly belong to the same archive.

## Phase 4 — real personal content

- [ ] Replace generic About copy with Pablo's approved current story.
- [ ] Replace placeholder `Lately` items with true current items.
- [ ] Complete two real project stories.
- [ ] Publish four to six Journal entries representing more than one part of life.
- [ ] Add approved project screenshots and documentary photographs with meaningful
  alt text.
- [ ] Choose public contact links.
- [ ] Review English and Spanish copy for natural voice; translations are optional
  per entry.

**Done when:** removing the styling would still leave a site that could only belong
to Pablo.

## Phase 5 — quality and publish

- [x] Add the PWA manifest, required app icons, and an offline service worker.
- [ ] Test primary routes with keyboard and assistive-technology basics.
- [ ] Check heading order, focus, contrast, touch targets, alt text, language, and
  reduced motion.
- [x] Check text, image, collage, and metadata overflow at representative widths.
- [ ] Run the Visual Compass acceptance test on the home page and two detail pages.
- [x] Run the production build and review it locally.
- [ ] Confirm the host, production URL, canonical URLs, and deployment config.
- [ ] Add privacy-respecting analytics only if Pablo still wants it for V1.
- [ ] Publish.

## Inputs needed from Pablo

The implementation can begin without these. Content completion cannot.

- [ ] A short answer to “Who are you right now?” in Pablo's natural words.
- [ ] Three to five subjects he keeps returning to.
- [ ] Two projects and the real story behind each.
- [ ] Current Watching, Reading, Building, Cooking, and Learning items.
- [ ] One possible portrait and several ordinary documentary photographs.
- [ ] A decision about which Personal Compass material may be public, private, or
  expressed indirectly.
- [ ] Preferred public links and contact method.
- [ ] Phrases in English or Spanish that feel especially natural or wrong.
- [ ] Hosting provider and production domain or temporary URL.

## Release gate

The rebrand is ready to publish when:

- [ ] the first impression is curiosity, not “developer portfolio”;
- [ ] mobile feels composed rather than compressed;
- [ ] shared interface behavior is consistent;
- [ ] different traces feel connected by one person;
- [ ] long-form reading is calm;
- [ ] no personal facts or imagery have been invented;
- [ ] the Visual Compass acceptance test passes;
- [ ] the production build and primary routes pass quality review.

## Outside this rebrand

Do not delay publication for authentication, a database, a CMS, comments, likes,
advanced search, separate collections for each interest, elaborate animation, a
newsletter system, recommendations, social features, or an analytics dashboard.
