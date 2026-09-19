---
name: Portfólio João Vitor
description: Dark ledger portfolio that rests its case on shipped projects, repositories and live demos.
colors:
  ink-navy: "#1a1e29"
  registry-blue: "#132de4"
  registry-blue-hover: "#0e21bd"
  verification-green: "#00784b"
  paper-white: "#ffffff"
  archive-white: "#fafbfc"
typography:
  display:
    fontFamily: "\"Space Grotesk\", system-ui, sans-serif"
    fontSize: "clamp(2.375rem, 1.375rem + 4vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.1
  headline:
    fontFamily: "\"Space Grotesk\", system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1.25rem + 0.8vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.1
  title:
    fontFamily: "\"Inter\", system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.1
  body:
    fontFamily: "\"Inter\", system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "\"Inter\", system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.1
  scale: ["12px", "14px", "16px", "20px", "24px", "32px", "48px", "64px"]
rounded:
  sm: "6px"
  md: "8px"
  circle: "50%"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.registry-blue}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.sm}"
    padding: "6px 12px"
  button-primary-lg:
    backgroundColor: "{colors.registry-blue}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
  button-primary-hover:
    backgroundColor: "{colors.registry-blue-hover}"
    textColor: "{colors.paper-white}"
  badge-skill:
    backgroundColor: "rgba(19, 45, 228, 0.12)"
    textColor: "{colors.registry-blue}"
    rounded: "{rounded.sm}"
  badge-skill-outline:
    textColor: "{colors.ink-navy}"
    rounded: "{rounded.sm}"
  card:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.ink-navy}"
    rounded: "{rounded.sm}"
    padding: "16px"
  input:
    textColor: "#212529"
    rounded: "{rounded.sm}"
---

# Design System: Portfólio João Vitor

## Overview

**Creative North Star: "The Proof Ledger"**

The portfolio is a bound registry: a dark lead cover (the navy hero), numbered fields (the alternating paper and archive sections), and a single decisive stamp (the green). A recruiter reads the page the way an auditor reads a dossier — quiet surfaces, strong headings, and proof (repos, demos, projects) sitting highest in the doc. Nothing on the page is louder than the work itself.

The system is two-toned neutrality with two named registration colors: Registry Blue for every primary action and fact marker, Verification Green reserved for "verified" moments — section underlines and author replies. Ink Navy anchors the structure (nav, hero, footer); Paper and Archive whites alternate the body fields so the page reads as pages, not a dashboard.

Motion is a whisper. Feedback is translateY-only (5px), 0.2–0.25s ease, never scale, never glow, never colorstorms. The aesthetic discipline is the anti-slop guardrail: no glass, no neon gradients, no stock-photo grease, no pill-everything — sharp corners at 6px, circles reserved for people photos only.

**Key Characteristics:**
- Dossier structure: dark lead cover, alternately inked (Paper) and archived (Archive) fields down the page.
- Two registration colors only — Blue acts, Green stamps. Neither ever becomes a page background.
- Strong 700-weight section headings on quiet 1rem/1.5 body text; labels are bold 0.75rem badges.
- Flat by default; the only ambient elevation is Bootstrap's `shadow-sm` on cards and the profile photo.
- Feedback grammar: small vertical translates (5px), 0.2–0.25s `ease`, nothing else.

## Colors

A registry palette: ink on paper, with exactly two registration inks.

### Primary
- **Registry Blue** (#132de4): the only acting color. Primary buttons, icon anchors on the Sobre field, metric totals, filled skill badges, and every primary CTA including WhatsApp. Hover darkens to Registry Blue Hover (#0e21bd) — same hue, so the button never changes identity. Read as "this is the field you can operate."
- **Verification Green** (#00784b): the stamping color. Section-title underlines, author reply blocks, and verified badges — never a button fill, never a hover fill, never a page background. Read as "this part has been checked." The deep value keeps every green-text use at AA (≥4.5:1 on Paper, Archive and the reply tint) instead of the old 2.28:1. Rarity is the point.

### Neutral
- **Ink Navy** (#1a1e29): the darkness. Navbar, hero base, footer, and ghost-button ink.
- **Archive White** (#fafbfc): alternating section fields (Formação, Projetos, Contato fields live on it).
- **Paper White** (#ffffff): default surface — cards, modals, un-alternated sections (Sobre, Experiências, Comentários).

### Named Rules
**The Stamp Rule.** Verification Green marks at most small, verified moments — underline, reply, badge — and stays under ~10% of any screen. It is never a section background and never a control fill. Its rarity is the point.
**The Two-Ink Rule.** Blue acts (buttons, links, data), green stamps (verified marks). No third accent; a state that needs color uses one of these two.

## Typography

**Display Font:** Space Grotesk (700) — display and headline roles only.
**Body Font:** Inter (400/500/600) — title, subtitle, body, meta and label roles.

**Character:** Two dependable grotesques that read as a filed dossier, not a novelty face. Space Grotesk 700 is reserved for the ledger's stamped moments — the hero name and every section heading. Inter carries everything that must be read (400), skimmed (500) or acted on (600). Personality comes from those role assignments, the weight contrast and the green underline, never from a third face.

### Hierarchy
Scale: 12 / 14 / 16 / 20 / 24 / 32 / 48 / 64 (px). Headings run at line-height 1.1; body at 1.6.
- **Display** (Space Grotesk 700, clamp(2.375rem → 4rem), 1.1): the hero name "João Vitor Souza" only.
- **Headline** (Space Grotesk 700, clamp(1.5rem → 2rem), 1.1): every section title, always paired with the 4px × 60px green rule.
- **Title** (Inter 600, 1.5rem, 1.1): card titles in Formação, Experiências, Projetos — one full scale step below a headline.
- **Subtitle** (Inter 500, 1.25rem, 1.6): lead paragraphs (hero cargo, Sobre intro, Contato) and highlighted claims like the Experiências destaque.
- **Body** (Inter 400, 1rem, 1.6): paragraphs, lists, captions. Reading lines cap near 72ch; lead and claim lines are held shorter.
- **Meta** (Inter 400, 0.875rem, 1.6): card subtitles and quiet supporting lines.
- **Label** (Inter 600, 0.75rem, 1.1): badges, chips, section tags.

**Hero hierarchy.** Name (Display 700) → cargo (Inter 400, 1.25–1.5rem, ~86% white on navy, tracked 0.01em) → CTA (1rem buttons). Three levels separated by weight, size and tone — never by decoration.

### Named Rules
**The Ledger-Line Rule.** Section headings always sit on the 4px × 60px green rule (border-radius 2px, 8px below). No floating headers, no italic tilts, no decorative underlines anywhere else.

## Layout

Bootstrap 12-column grid on the standard responsive container. Every content section is `py-5` (48px vertical), which creates the clean page-break rhythm between fields. Sections alternate Paper (Sobre, Experiências, Comentários) and Archive (Formação, Projetos, Contato) to read as numbered dossier pages.

The fixed top nav occupies 70px + `scroll-padding-top: 70px`, so anchors land exactly under the ledger spine. Card columns use `g-4` gutters (24px). The hero is `min-height: 100dvh` on the navy overlay. Bleed notes, not bordered panels — flat "cuts" between sections instead of outlined boxes.

Mobile (≤575.98px): hero Display drops to 2.375rem, the cargo line to 1.25rem, and the profile photo squares down to 170px from 220px. The nav collapses to the hamburger. Nothing else recomposes; gutters sit on a 16px floor (container and gutter-row horizontal padding never collapse below the `md` spacing token) and `py-5` rhythm holds. The hero CTAs stack full-width to keep primary-first order. Touch targets hold ≥44px (coarse pointers and the ≤991.98px collapsed nav: buttons, `btn-sm`, admin controls, nav links, toggler, close and form fields).

## Elevation & Depth

**Flat by default.** Cards are `border-0` with no rest elevation; the only ambient shadow is Bootstrap's `shadow-sm` (`0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)`) applied to section cards and the profile photo. Depth is conveyed three other ways: tonal alternation (Archive vs Paper fields), the navy gradient overlay over the hero photograph, and a single 5px translateY lift on card hover.

### Shadow Vocabulary
- **Ambient Low** (`0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)`): the `shadow-sm` resting depth under cards and photos. Low, structural, never diffuse or glowing.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows exist at exactly one ambient strength; hover adds movement (translateY), never more shadow, never a glow, never scale.

## Shapes

Angular and quiet: 6px (`0.375rem`) corner radius for buttons, cards, inputs, badges, modals — the Bootstrap default, un-rounder. Large form modals use 8px (`0.5rem`). Circles are reserved for people: the profile photo and comment avatars are `rounded-circle` (50%), never decorative elements. The section-title rule is a 2px-radius sliver (4px × 60px). Project cover images square-cut (no radius), `aspect-ratio: 2/1`, `object-fit: contain` on Archive.

No pills, no squircle chasers, no clipped diagonals.

## Components

### Buttons
- **Shape:** 6px radius (8px for `btn-lg`), 1px border on ghost variants.
- **Primary:** Registry Blue fill, Paper text, padding 6px 12px (8px 16px at `lg`), font-weight 400. **Hover / active:** Registry Blue Hover (#0e21bd) fill — the same blue darkened, never a color swap. **Focus:** standard Bootstrap ring.
- **Stamp (non-interactive):** Verification Green is a mark, not a button. It underlines headings, edges author replies and fills verified badges; it is never a fill for `.btn-primary`, `.btn-accent` or any control. There is no green button in the system.
- **Ghost / Outline:** colored text + 1px border (Ink/Blue per context); hover fills solid with Paper text. The nav and hero `btn-outline-light` deliberately keeps a transparent hover (white border/text only) to stay quiet on the dark spine.

### Badges / Chips
- **Style:** 6px radius, 0.75rem, weight 700, padding 0.35em 0.65em. Not pills.
- **Skill:** translucent Registry Blue (`rgba(19, 45, 228, 0.12)`) background, Registry Blue text — soft skills on the Sobre field.
- **Skill-Outline:** transparent, Ink Navy text, 1px Ink Navy border — hard skills.

### Cards / Containers
- **Corner Style:** 6px.
- **Background:** Paper White.
- **Shadow Strategy:** `shadow-sm` ambient low at rest (see Elevation).
- **Border:** none (`border-0`); separation comes from field tonal cuts.
- **Internal Padding:** 16px (`card-body` 1rem scale).
- **Behavior:** hover lifts 5px (`translateY(-5px)`, 0.25s ease). Project covers top each card at 2/1, contained, Archive background.

### Inputs / Fields
- **Style:** 1px border, 6px radius, 1rem/1.5 text, `#212529` text color.
- **Focus:** standard Bootstrap focus ring (0.25rem ring, `rgba(13, 110, 253, 0.25)` default).
- **Error:** Bootstrap danger alert for login failures. Disabled: Bootstrap `.btn` / default disabled transparency.

### Navigation
- **Style:** fixed top bar on Ink Navy, Paper text. Brand is "JV." with a Verification Green period. Links 1rem, gap `lg-4` right-aligned. Active `Início` link tints Paper; hover uses the navbar-dark default (`.8` white).
- **Mobile:** Bootstrap hamburger collapses the list; the Admin / Métricas outline buttons stay below the list as full-width-ish `btn-sm` rows.

### Section Title (signature)
Inline-block 700 headline with a 4px × 60px Verification Green rule (2px radius) 8px under the baseline. The single most repeated pattern — it is the ledger's page numbering.

### Comment Reply (signature)
Verification Green-stamped author reply: 3px left border in Verification Green, 6px radius, tinted `rgba(0, 120, 75, 0.08)` background, padding 10px 14px. Reads as an affixed note from the ledger owner.

## Do's and Don'ts

### Do:
- **Do** keep the dossier alternation: Paper fields, then Archive fields, clean `py-5` page breaks.
- **Do** let the projects carry the case — they are already the tallest content on the page; never dress education/experience above them.
- **Do** keep Verification Green a small stamp (~≤10% of any screen): underline, reply, badge.
- **Do** keep motion tiny and mechanical: translateY-only (max 5px), 0.2–0.25s `ease`.
- **Do** keep every heading on the 4px × 60px green rule, weight 700.
- **Do** reserve rounded circles for people photos and avatars only.
- **Do** honor `prefers-reduced-motion`: drop all transforms and transitions.

### Don't:
- **Don't** add glassmorphism, neon gradients, or purple-on-dark effects.
- **Don't** ship a corporate stock-photo hero; keep the real identity photograph under the navy overlay.
- **Don't** add decorative confetti, emoji, or playful micro-interactions.
- **Don't** round everything into pills; corners cap at 6px (8px large) and circles belong to photos only.
- **Don't** apply the blue-gradient SaaS marinade or a rigid corporate-template frame.
- **Don't** use italic-tilted headers or decorative underlines; the Ledger Line is the only rule.
- **Don't** introduce new card-float, glow, or scale hovers; feedback stays movement-first, fills reserved.
- **Don't** fill a button with Verification Green or swap a primary button's color on hover; the acting color is Registry Blue at rest and a darker Registry Blue on interaction.
- **Don't** let white text sit on Verification Green — it fails AA (2.28:1). Green carries ink, not paper.