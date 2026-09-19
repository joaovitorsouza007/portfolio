# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary — Recruiters:** HR and technical evaluators screening João Vitor for Fullstack development jobs. Their job is to quickly judge capability: real projects, stack, and clarity, then decide whether to invite him.
- **Secondary — Consulting clients:** People hiring João for web development/consulting. Their job is to judge trustworthiness, results, and how easy it is to get in touch.
- **Visitors:** Anyone who lands on the site, reads projects/education/experience, and leaves comments (social proof for the two audiences above).
- **Author — João (operator):** Logs into a hidden admin area (email + password) to add/edit/delete projects, reply to and remove comments, and view per-browser metrics.

## Product Purpose

Provide Jean Vitor Souza da Silva's personal portfolio: a single place that gathers his real projects, education, professional experience, and testimonials so recruiters and clients can evaluate him quickly and contact him. Success = being contacted and hired for development roles or consulting work.

## Positioning

A portfolio that demonstrates real work, not just a list of skills. Each project ships with its repository and a live demo; education, experience, and testimonials back the picture. A neighboring candidate page cannot truthfully copy these shipped projects and proofs.

## Operating Context

- Content is entirely in Portuguese (pt-BR); the site targets Brazilian recruiters and clients.
- Recruiters typically skim **Início → Sobre mim → Formação → Experiências → Projetos** and download the CV PDF in one click.
- Clients evaluate by reading testimonials and opening project demos/repositories.
- The author maintains the site through an admin login (credentials in `js/config.js`, gitignored): add/edit/delete projects, reply/remove comments, and view visit counts and most-clicked projects.
- All site data lives in each visitor's browser (localStorage); there is no server, no accounts for visitors, and metrics are explicitly per-browser (MVP scope).
- The author is an 18-year-old in São Paulo - SP, in his second semester of Análise e Desenvolvimento de Sistemas at IFSP Gru (night course) and a 2025 graduate of the Técnico em Desenvolvimento de Sistemas at Etec Itaquera.

## Capabilities and Constraints

- Static site: HTML + CSS + JavaScript + Bootstrap 5 + Bootstrap Icons, no build step, no package manager.
- Frontend-only persistence (localStorage): comments and projects are per-visitor; the author's edits do not reach other visitors' browsers.
- LocalStorage size limits: large images may fail to save and trigger an alert.
- Admin access is a single email/password pair read from a gitignored config file; no server-side enforcement.
- Sections: hero, sobre, formação, experiências, projetos (admin CRUD + "mais visto" badge), comentários (submit, author reply, delete), contato, footer, plus modals for login, project form, comment form, reply, and metrics.
- Accessibility baseline present in code: `lang="pt-BR"`, meta description, image alt text, and `prefers-reduced-motion` support. No formal accessibility standard is set.
- Deployment target is not confirmed (Vercel is referenced in `.gitignore` and by project demos, but not stated as the site's host).
- Undecided: which of the two shipped default testimonials are real (see Evidence on Hand).

## Brand Commitments

## Brand Commitments (atualizado)

- Nome: João Vitor Souza da Silva; marca "JV."
- Idioma: Português (pt-BR); voz profissional mas acessível.
- Contato: contato.ssilvajoao13@gmail.com, WhatsApp +55 11 93909-8656,
  LinkedIn joão-vitor-souza-da-silva, GitHub joaovitorsouza007.
- CV: assets/CvJoao.pdf (download em 1 clique).
- Direção visual: **revista em `shape`**. A intenção original 
  "moderna e chamativa" foi substituída por **Proof Ledger** — 
  editorial, calmo e crível, orientado a evidências. Ver DESIGN.md.

## Evidence on Hand

- **Two shipped projects** (in `js/script.js`), each with repository + live demo:
  - FinView — financial organizer (React, Node.js, Express, Prisma, PostgreSQL, Tailwind); repo `github.com/joaovitorsouza007/finview`, demo `finview-ivory.vercel.app`, cover `assets/finview-capa.jpg`.
  - Portfólio Graziela Souza — showcase for a researcher/social scientist (React 19, Vite 8, Tailwind CSS v4); repo `github.com/joaovitorsouza007/graziela-portfolio`, demo `graziela-portfolio.vercel.app`, cover `assets/graziela-capa.jpg`.
- **Demo/testimonial content:** the two default comments are a confirmed mix of real and placeholder. The Graziela Souza comment ties to a shipped real client project (owner of the site above); the "Mariana Lopes" comment is unverified. Future work must not present unverified comments as real proof.
- **Identity assets:** `assets/hero.jpg`, `assets/foto-perfil.jpg`, `assets/favicon.svg`, `assets/apple-touch-icon.png`.
- **Experience:** one internship, F4Fly 4Tech, 2023–2024 (web development, WordPress, high-fidelity interface design, Office).
- **Absences worth protecting:** no client list, case studies, employment history beyond that internship, press coverage, or real analytics beyond per-browser counts. These must not be fabricated.

## Product Principles

1. **Proof over claims.** Real projects with repos and live demos carry the case; the skills list is secondary framing.
2. **Respect the recruiter's time.** One click to the CV and friction-free contact paths; scannable sections starting with the strongest proof.
3. **Self-serve authoring.** João can keep the site current through the admin UI without touching code or redeploying.
4. **Honest evidence.** Only real work and verifiable testimonials; placeholders are demo content, never presented as proof.
5. **True to context.** Brazilian Portuguese, honest junior-positioned framing, and accurate academic/experience details.