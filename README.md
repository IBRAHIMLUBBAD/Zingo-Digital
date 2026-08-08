# Zingo Digital — Public Website

This package is the public-facing website and core UI patterns for Zingo Digital, built from
`Zingo_Digital_Project_Specification_EN.pdf` (v1.0, Aug 8 2026). It's a static HTML/CSS/JS site —
no build step required — designed so a development team can move it into the platform's real
stack (Next.js + TypeScript + PostgreSQL, per section 16 of the spec) with minimal rework.

## What's included

| Page | Maps to spec section | Purpose |
|---|---|---|
| `index.html` | §1, §2, §21, §23 | Homepage — value proposition, service categories, order flow, roadmap |
| `services.html` | §2 | Full service catalog across the 5 categories |
| `service-detail.html` | §3, §9, §10 | Example of a **dynamic service order form** (PDF editing) — the pattern every service page should follow |
| `profile.html` | §7 | Public digital profile page — what an NFC card / QR code resolves to (`zingo.digital/u/username`) |
| `dashboard.html` | §5, §4, §11 | Customer dashboard — order list, status timeline, invoices |
| `login.html` | §5 | Login / registration (tabbed, single page) |
| `about.html` | §1, §26 | Company / platform story |
| `contact.html` | — | Contact form |

Each `.html` file is self-contained (inline CSS + JS) so it can be opened directly or dropped into
any static host as-is. There is no shared external stylesheet by design — see **Next steps** below
for how to de-duplicate this once the project moves into a component framework.

## Design system

Defined as CSS custom properties at the top of every page's `<style>` block:

- **Color** — `--ink` (near-black), `--paper` (off-white), `--lime` / `--lime-deep` (brand accent,
  from the logo), `--charcoal` (dark surface), `--grey` (secondary text), `--mint` (tinted section
  background).
- **Type** — `Space Grotesk` (display/headings), `Inter` (body), `IBM Plex Mono` (order numbers,
  status codes, eyebrows — anything "data-like").
- **Motif** — a pixel/grid language echoing the logo's dissolving chevron, used for the hero visual,
  decorative scatter (`data-scatter`), and the catalog's `SVC.01…` coding, which mirrors how
  services are actually identified in the admin panel and database (§15).

Reusing the same tokens across the future admin panel and dashboard keeps customer-facing and
internal UI visually related without being identical.

## Why the pages look the way they do

- **`service-detail.html`** is deliberately built as a generic template, not a one-off page — text
  swapped in from an admin-managed field list (upload, description, page range, turnaround) is
  exactly what the **Service Form Engine** (§9) should render for *any* service, not just PDF
  editing. When the form engine ships, this page's form markup should be generated from
  `service_fields`, not hand-coded per service.
- **`dashboard.html`** shows order status (§4), payment status (§10), and file/invoice access (§6,
  §11) as separate concerns, matching the spec's explicit separation of order status from payment
  status.
- **Order numbers** (`ZG-2026-000125`) and **invoice numbers** (`INV-2026-0091`) follow the format
  implied by the spec and are placeholder/sample data only.

## Next steps for development

1. **Move into Next.js.** Each page's `<main>` content becomes a route (`/`, `/services`,
   `/services/[slug]`, `/u/[username]`, `/dashboard`, `/login`, `/about`, `/contact`). Extract the
   shared `<style>` block into a global stylesheet or Tailwind config using the same custom
   properties, and the header/footer into layout components.
2. **Wire the service catalog to real data.** `services.html` and `service-detail.html` are static
   today; they should read from the `services` / `service_fields` tables (§15) once the admin panel
   and Service Form Engine exist, so a new service appears automatically without a new page.
3. **Replace mock content** in `dashboard.html` and `profile.html` with authenticated data from the
   `orders`, `payments`, `invoices`, and `digital_profiles` tables.
4. **Admin panel (§13)** is intentionally not included in this package — it's an internal tool and
   was out of scope for the public site, but should reuse the same design tokens.
5. **Payments, file storage, PDF invoice generation, and QR/NFC logic** are represented here as UI
   only (forms, summaries, sample invoices) — see §10, §6, §11, §8 of the spec for the backend
   requirements those screens need to be wired to.

## Build/roadmap alignment

The homepage's "Roadmap" section mirrors §21 of the spec directly:

- **Phase 1 — Core**: catalog, dynamic forms, orders, files, payments, invoices, dashboard, admin.
- **Phase 2 — Identity**: QR generator, digital profile, NFC.
- **Phase 3 — Builder**: website builder + templates.
- **Phase 4 — Scale**: automation, analytics, subscriptions, business accounts.

Keep shipping in that order — the order/payment/file core should be stable before the identity and
builder modules are layered on, per the spec's explicit guidance in §21 and §26.
