# Zingo Digital — Phase 1 Scaffold

**This is a structure, not a running app.** Per the Phase 1 Developer Brief's Mandatory Approval
Gate (§21), no business logic (auth, orders, payments, storage) has been implemented yet. What's
here is the concrete shape the architecture in `ARCHITECTURE.md` describes: real folders, a real
Prisma schema, real config — every page and API route is a documented stub that returns `501` or
`null` until its milestone is approved and built.

Read **`ARCHITECTURE.md`** first — it's the actual deliverable for review (system architecture,
ERD, folder/API structure, auth/storage/payment/invoice plans, i18n plan, and a milestone-by-
milestone timeline).

## What's real here

- `prisma/schema.prisma` — the full Phase 1 database schema, matching the approved ERD.
- `src/i18n/*`, `src/middleware.ts` — working English/Arabic locale routing and RTL wiring.
- `tailwind.config.ts`, `src/app/globals.css` — the static prototype's design tokens, ported.
- Every route under `src/app/` — the intended URL structure, each with a comment naming which
  milestone implements it and what it depends on.
- Every file under `src/lib/` — the module boundaries (auth, storage, payments, invoices, email,
  validation), each documented with its intended responsibilities.

## What's intentionally not here

Login logic, order creation, payment processing, file upload/download, invoice PDF rendering,
and admin CRUD — all pending your sign-off on `ARCHITECTURE.md`, then built in the milestone order
listed there (M0 → M8).

## Running this scaffold

This won't do anything useful yet (no auth, no data), but to confirm it boots once dependencies
are installed:

```bash
npm install
cp .env.example .env        # fill in DATABASE_URL at minimum
npx prisma generate
npm run dev
```

## Next step

Review `ARCHITECTURE.md`, answer the four open questions at the end of it (payment gateway,
storage provider, Arabic numeral style, admin bilingual scope), and implementation starts at
milestone M0.
