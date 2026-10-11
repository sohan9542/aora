# Aora

Aora is a **learning project**: a React Native (Expo) video-sharing app UI inspired by the popular JavaScript Mastery Aora tutorial. It demonstrates file-based routing, NativeWind styling, auth-screen patterns, and a tabbed main experience.

This repository is **UI-focused**. Backend authentication, video uploads, and feeds are not connected yet. Tab screens are intentional placeholders.

**Author:** [Sohanur Rahman](https://github.com/sohan9542) (`sohan9542`)

## Features

- Onboarding splash with brand imagery and CTA into email auth
- Sign-in / sign-up screens with client-side form validation
- Password visibility toggle on form fields
- Bottom-tab shell (Home, Bookmark, Create, Profile)
- Search route scaffold (`/search/[query]`)
- Custom Poppins fonts and a dark primary theme via NativeWind / Tailwind

## Tech stack

| Area     | Choice                                               |
| -------- | ---------------------------------------------------- |
| Runtime  | React Native 0.76, Expo SDK 52                       |
| Routing  | Expo Router (file-based)                             |
| Styling  | NativeWind 4 + Tailwind CSS                          |
| Language | JavaScript / TypeScript (mixed; root layouts in TS)  |
| Tests    | Jest + jest-expo                                     |
| Quality  | ESLint (expo + prettier), Prettier, TypeScript check |
| CI       | GitHub Actions                                       |

## Architecture

```
app/                 Expo Router screens & layouts
  (auth)/            Sign-in / sign-up stack
  (tabs)/            Main tab navigator shell
  search/            Dynamic search route
  index.tsx          Onboarding entry
  _layout.tsx        Root stack, fonts, splash
components/          Reusable UI (button, form field, tab icon)
constants/           Image & icon asset maps
lib/                 Pure helpers (form validation)
assets/              Fonts, icons, marketing images
__tests__/           Unit tests for core logic
```

Navigation flow:

1. `index` → Continue with Email → `(auth)/sign-in`
2. Auth stack links between sign-in and sign-up
3. `(tabs)` hosts the main app shell (placeholders until API work)
4. `search/[query]` is registered for future search results

## Live link

No public Expo Go / store / web deployment is published for this repo yet.

## Local setup

### Prerequisites

- Node.js 20+
- npm 10+
- Expo Go on a device, or iOS Simulator / Android emulator

### Install & run

```bash
npm install
npm start
```

Then press `i` / `a` / `w` for iOS, Android, or web, or scan the QR code with Expo Go.

```bash
npm run android   # Expo → Android
npm run ios       # Expo → iOS
npm run web       # Expo → web
```

## Environment variables

Copy `.env.example` to `.env` if you later wire a backend (e.g. Appwrite). Names only are documented there; the current UI build does not require env vars to run.

| Variable                                   | Purpose               |
| ------------------------------------------ | --------------------- |
| `EXPO_PUBLIC_APPWRITE_ENDPOINT`            | Appwrite API endpoint |
| `EXPO_PUBLIC_APPWRITE_PROJECT_ID`          | Appwrite project id   |
| `EXPO_PUBLIC_APPWRITE_DATABASE_ID`         | Database id           |
| `EXPO_PUBLIC_APPWRITE_USER_COLLECTION_ID`  | Users collection      |
| `EXPO_PUBLIC_APPWRITE_VIDEO_COLLECTION_ID` | Videos collection     |
| `EXPO_PUBLIC_APPWRITE_STORAGE_ID`          | Storage bucket        |

## Scripts

| Script                 | Description               |
| ---------------------- | ------------------------- |
| `npm start`            | Start Expo dev server     |
| `npm run lint`         | ESLint via `expo lint`    |
| `npm run format`       | Format with Prettier      |
| `npm run format:check` | Prettier check (CI)       |
| `npm test`             | Jest unit tests (CI mode) |
| `npm run test:watch`   | Jest watch mode           |
| `npm run typecheck`    | `tsc --noEmit`            |

## Project status / honesty note

Built as a hands-on Expo Router + NativeWind exercise. Expect polished onboarding/auth UI and clear placeholders for home/create/profile/search until a backend is added. Do not treat this as a production app or published product.

## License

No license file is included in this repository. All rights reserved by the author unless otherwise stated.
