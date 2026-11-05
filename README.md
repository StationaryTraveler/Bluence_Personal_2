# Bluence Personal Carbon Copilot

Complete source package of published release 6, including Welcome (E), Today (T), Footprint (F), Actions (P), Check-ups (G), Account and contextual utilities (A/U).

Source commit: 605d8f83cbd26b7278ac4ad04a073f8a488c359f

## Run locally

Install Node.js 22.12 or newer (Node 24 LTS recommended). From this directory run:

```sh
npm ci
npm run dev
```

Open the local address printed by Vite, then visit /personal/welcome or /personal/today. Explore offers separate illustrative journeys. Package dependencies require internet access during installation.

## Production build

```sh
npm run build
npm run preview
```

The included dist directory is the built website. Configure production hosting to serve dist and return index.html for /personal/* routes. Serve through HTTP, rather than opening index.html directly.

## Package contents

- app, components, lib and main.tsx contain screens, shared UI, data models, validation, navigation and workflow logic.
- public contains logos, Fig/Olive imagery and local fonts.
- design-system and docs contain design and workflow references.
- scripts contains the existing regression checks.
- integration contains reference material for future services.
- package.json and package-lock.json define reproducible dependencies.

## Current capabilities and limits

Journey data is saved in browser local storage. Exports and deletion apply to those local records. Sample journeys are separate. Passwordless email authentication, cross-device persistence, email reminders, a validated personal calculation service and live AI remain integration work. Changed assessment inputs can be saved as drafts but cannot generate a new personal footprint. Unchanged-input sample check-ups demonstrate completed review flows.

Hosting platform access is separate from a Bluence account. The hosting manifest retains the existing site identifier for reference. Deploy to your own hosting configuration when moving the code.

## Checks

With Node 24, run:

```sh
node scripts/check-today.mjs
node scripts/check-footprint.mjs
node scripts/check-actions.mjs
node scripts/check-navigation.mjs
```

Dependencies, Git metadata, credentials and user browser records are excluded from this package. SOURCE_HASHES.json refers to the original supplied archive, rather than this release.

Bluence is a product of PLANET-B.
