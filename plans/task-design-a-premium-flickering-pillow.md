# Plan: Uday Cherri — Premium Portfolio Ecosystem

## Context

Uday Cherri is a multidisciplinary creator with three professional alter-egos. This is not a standard portfolio — it's a tiered identity ecosystem. Visitors first encounter Uday as "The Architect," then choose to enter one of three distinct worlds (designer, developer, security researcher). Each world must feel completely different in layout, typography, motion, color, and component language.

The build is a green-field React app. `src/app/App.tsx` is empty. No `@make-kits` design system is installed. The stack is: **React 18 + Tailwind CSS v4 + react-router 7 + motion 12 + lucide-react + radix-ui primitives** (shadcn components already exist in `src/app/components/ui/`).

---

## Architecture

### Routing (`react-router` 7 — already installed)

```
/                        → Core: Arrival + Uday Cherri Home
/journey                 → Core: Timeline
/work                    → Core: Featured Work
/contact                 → Core: Contact
/yuukaycee               → YuuKayCee: Home
/yuukaycee/work          → YuuKayCee: Gallery
/yuukaycee/case-studies  → YuuKayCee: Case Studies
/yuukaycee/nyx-bureau    → YuuKayCee: NYX Bureau
/yuukaycee/archive       → YuuKayCee: Archive
/yuukaycee/contact       → YuuKayCee: Contact
/spy                     → Spy D. Veloper: Home
/spy/projects            → Spy: Projects
/spy/systems             → Spy: Systems
/spy/experiments         → Spy: Experiments
/spy/open-source         → Spy: Open Source
/spy/contact             → Spy: Contact
/cyb3r                   → CYB3R-BO1: Home
/cyb3r/research          → CYB3R: Research
/cyb3r/security-projects → CYB3R: Security Projects
/cyb3r/ctf-archive       → CYB3R: CTF Archive
/cyb3r/blog              → CYB3R: Blog
/cyb3r/contact           → CYB3R: Contact
/project/:id             → Shared: Project deep-dive page
```

### File Structure

```
src/app/
  App.tsx                          # Router root

  data/
    content.ts                     # All mock content (projects, timeline, etc.)

  pages/
    core/CoreHome.tsx              # Arrival + full Uday Cherri scroll experience
    core/CoreJourney.tsx
    core/CoreWork.tsx
    core/CoreContact.tsx

    yuukaycee/YuuKayCeeLayout.tsx  # Aurora world wrapper (CSS vars + fonts)
    yuukaycee/YuuKayCeeHome.tsx
    yuukaycee/YuuKayCeeWork.tsx
    yuukaycee/YuuKayCeeCaseStudies.tsx
    yuukaycee/YuuKayCeeNYX.tsx
    yuukaycee/YuuKayCeeArchive.tsx
    yuukaycee/YuuKayCeeContact.tsx

    spy/SpyLayout.tsx              # Future Systems Lab wrapper
    spy/SpyHome.tsx
    spy/SpyProjects.tsx
    spy/SpySystems.tsx
    spy/SpyExperiments.tsx
    spy/SpyOpenSource.tsx
    spy/SpyContact.tsx

    cyb3r/CyberLayout.tsx          # Research Ops Center wrapper
    cyb3r/CyberHome.tsx
    cyb3r/CyberResearch.tsx
    cyb3r/CyberSecurityProjects.tsx
    cyb3r/CyberCTF.tsx
    cyb3r/CyberBlog.tsx
    cyb3r/CyberContact.tsx

    project/ProjectPage.tsx        # Universal project deep-dive

  components/
    core/ArrivalScreen.tsx         # Full-screen animated intro
    core/CoreNav.tsx               # Minimal serif navigation
    core/PhilosophySection.tsx     # Beliefs + motto
    core/JourneyTimeline.tsx       # Vertical milestone timeline
    core/FeaturedWork.tsx          # 3 work teasers
    core/IdentityDiscovery.tsx     # Gateway to the three worlds
    core/FeaturedWorkCard.tsx

    yuukaycee/AuroraNav.tsx
    yuukaycee/WorkGallery.tsx
    yuukaycee/CaseStudyCard.tsx
    yuukaycee/ProfileArea.tsx

    spy/SpyNav.tsx
    spy/ProjectCard.tsx
    spy/SystemsGrid.tsx
    spy/ProfileArea.tsx

    cyb3r/CyberNav.tsx
    cyb3r/SecurityCard.tsx
    cyb3r/CTFCard.tsx
    cyb3r/ProfileArea.tsx

    shared/PageTransition.tsx      # AnimatePresence wrapper
    shared/ProjectPageTemplate.tsx # Reused project layout
    shared/BackToCore.tsx          # Return to Uday Cherri link
```

---

## Visual Language System

Each identity injects its own CSS custom properties into its layout wrapper. No global theme mutations.

### Core — "The Nexus"
| Token | Value |
|---|---|
| Background | `#F7F4EE` (Ivory) |
| Foreground | `#1C1C1C` (Graphite) |
| Accent | `#B8A46A` (Champagne Gold) |
| Secondary text | `#6B6B6B` (Silver) |
| Headline font | Cormorant Garamond (serif) |
| Body font | Inter (sans) |
| Motion | Slow fade + translate-y (700ms ease) |

### YuuKayCee — "Aurora"
| Token | Value |
|---|---|
| Background | `#0C0A15` (deep dark) |
| Foreground | `#EEE9F8` (soft light) |
| Primary | `#A78BFA` (Soft Violet) |
| Accent1 | `#67E8F9` (Cyan) |
| Accent2 | `#FDBA8C` (Peach) |
| Accent3 | `#C4B5FD` (Lavender) |
| Gold | `#F0C060` |
| Headline font | Playfair Display (editorial serif) |
| Body font | DM Sans |
| Motion | Organic float, stagger, blur-in (500ms) |

### Spy D. Veloper — "Future Systems Lab"
| Token | Value |
|---|---|
| Background | `#080C18` (Deep Navy) |
| Foreground | `#F0EEE5` (Off White) |
| Accent | `#CC1234` (Crimson) |
| Grid line | `rgba(240,238,229,0.06)` |
| Headline font | Space Grotesk (geometric) |
| Code font | JetBrains Mono |
| Body font | Space Grotesk |
| Motion | Fast mechanical slide (250ms ease-out) |

### CYB3R-BO1 — "Research Operations Center"
| Token | Value |
|---|---|
| Background | `#0F1318` (Charcoal) |
| Foreground | `#E2EAF0` (light) |
| Primary | `#10B981` (Emerald) |
| Accent | `#2DD4BF` (Turquoise) |
| Secondary | `#6B7280` (Steel Gray) |
| Font (all) | IBM Plex Mono + IBM Plex Sans |
| Motion | Scan reveal, character-by-character, signal animations |

---

## Key Experience Details

### Arrival Screen (`ArrivalScreen.tsx`)
- Full-viewport, black background
- Name "Uday Cherri" types in letter by letter (staggered)
- "The Architect" fades in below with a subtle gold underline
- "Building across worlds. Growing beyond them." appears
- After ~3.5s, a fade transition reveals the Core Homepage
- Stored in `sessionStorage` so it only plays once per session

### Core Homepage (single-page scroll)
Sections in order:
1. **Hero** — Full viewport, large serif heading, short introduction, scroll indicator
2. **Philosophy** — 6 belief statements in a structured grid
3. **Journey** — Vertical timeline with milestone cards
4. **Selected Work** — 3 cards (one from each discipline)
5. **Identity Discovery** — Three large gateway panels

### Identity Discovery Section
Three full-width panels side by side (or stacked on mobile):
- **YuuKayCee** panel: violet/aurora gradient, "The Creator", preview of design work
- **Spy D. Veloper** panel: navy/crimson grid, "The Builder", code snippet aesthetic
- **CYB3R-BO1** panel: charcoal/emerald, "The Researcher", terminal aesthetic
- Each panel has a "Enter" CTA that navigates to the identity's route
- Hover state previews the world (color bleeds in, typography shifts slightly)

### Identity Layout Wrappers
Each layout component (`YuuKayCeeLayout`, `SpyLayout`, `CyberLayout`):
- Sets CSS custom properties for the identity
- Loads identity-specific Google Fonts via inline `<style>` or class
- Renders the identity's navigation
- Includes a subtle "Return to Uday Cherri" breadcrumb

### Navigation per Identity
- **Core**: Minimal, centered, Cormorant Garamond, horizontal links
- **YuuKayCee**: Left-side vertical nav (desktop), aurora accent on active
- **Spy D. Veloper**: Top bar, monospaced labels, crimson active indicator, grid-aligned
- **CYB3R-BO1**: Minimal monospace top bar, emerald active dot, status-bar aesthetic

### Profile Image Areas
Each identity home has a prominent profile image area using `ImageWithFallback` from `src/app/components/figma/ImageWithFallback.tsx`. Since no real images exist, these render as **intentionally designed placeholder compositions** — geometric abstractions that embody the identity's visual language (not grey boxes).

### Project Page (`ProjectPage.tsx`)
Universal template with identity-aware styling (reads identity from route prefix):
- Cover (full-width image/placeholder)
- Overview (2-col: brief + metadata)
- Problem statement
- Approach
- Process (timeline or steps)
- Visuals (masonry or full-width gallery)
- Outcome + key results
- Lessons Learned

---

## Content Data (`src/app/data/content.ts`)

Mock content structure:
```ts
// Timeline milestones for Uday Cherri
// 4 featured projects (design, dev, security + cross-disciplinary)
// YuuKayCee: 6 work items, 2 case studies, NYX Bureau info
// Spy: 5 projects, 3 systems, 4 experiments, open source repos
// CYB3R: 3 research entries, 4 security projects, CTF archive
```

---

## Fonts (`src/styles/fonts.css`)
Add Google Fonts imports:
- Cormorant Garamond (300, 400, 500, 600)
- Playfair Display (400, 500, 700)
- Space Grotesk (300, 400, 500, 600, 700)
- IBM Plex Mono (400, 500)
- IBM Plex Sans (300, 400, 500)
- Inter (400, 500)

---

## Motion Strategy (`motion` package)
- Use `AnimatePresence` + `motion.div` for page transitions
- Core transitions: `opacity 0→1, y 20→0`, duration 0.7s
- YuuKayCee: staggered children with blur (`filter: blur(4px)→0`)
- Spy: `x -20→0` mechanical slide, no blur
- CYB3R: custom scan-line reveal using keyframes + stagger
- Scroll-triggered animations via `useInView` from `motion/react`

---

## Implementation Order

1. **`src/styles/fonts.css`** — Google Fonts imports
2. **`src/app/data/content.ts`** — All mock content
3. **`src/app/App.tsx`** — Router setup with all routes
4. **Core pages** — ArrivalScreen → CoreHome → CoreJourney → CoreWork → CoreContact
5. **YuuKayCee world** — Layout → Home → Work → CaseStudies → NYX → Archive → Contact
6. **Spy D. Veloper world** — Layout → Home → Projects → Systems → Experiments → OpenSource → Contact
7. **CYB3R-BO1 world** — Layout → Home → Research → SecurityProjects → CTF → Blog → Contact
8. **ProjectPage** — Universal deep-dive template
9. **Polish** — Page transitions, cursor behavior, scroll reveals

---

## Verification

1. Navigate to `/` — arrival animation plays, fades to Uday Cherri homepage
2. Scroll through all core sections — philosophy, timeline, work, identity gateways
3. Click "Enter" on YuuKayCee portal — world transformation, Aurora palette loads, Playfair Display renders
4. Navigate YuuKayCee sub-pages — work gallery, case studies, NYX Bureau
5. Click "Return to Uday Cherri" — smooth transition back to core
6. Repeat for Spy D. Veloper and CYB3R-BO1
7. Click a project card — project page loads with full structure
8. Verify no emojis, no skill bars, no stock imagery, no filler
9. Verify each identity feels like a completely different visual world
