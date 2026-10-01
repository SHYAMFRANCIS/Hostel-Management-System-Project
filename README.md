# Hostel Management System

[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-purple?logo=vite)](https://vitejs.dev/)
[![MUI](https://img.shields.io/badge/MUI-v6-blue?logo=mui)](https://mui.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A hackathon-ready **hostel management MVP** for streamlining hostel operations: role-based dashboards, attendance tracking (including an auto-attendance view), leave and outing-pass management, missing-item reporting, student records, and app settings. The working application lives in `dashboard/` — a **React + Vite** single-page app styled with **MUI** and **Tailwind CSS**, with a centralized in-browser data service (mock data + `localStorage` auth) so it runs instantly with no backend.

## Features

- **Role-based access** — Login/Register with `localStorage` session persistence; student vs. staff views (`Login.jsx`, `Register.jsx`, `App.jsx`).
- **Dashboard** — Overview with stat cards and Recharts visualisations (`Dashboard.jsx`, `StatsCard.jsx`, `components/charts`).
- **Attendance** — Staff attendance management plus student self-view and an auto-attendance view (`Attendance.jsx`).
- **Leave requests & outing passes** — Create, list, and manage leave/outing requests (`LeaveRequests.jsx`).
- **Missing items** — Report and track missing items (`MissingItems.jsx`).
- **Student management** — Student records view (`Students.jsx`).
- **Settings** — App/user settings (`Settings.jsx`).
- **Central data service** — `DataService` class with pub/sub (`subscribe`/`notifyListeners`) over in-memory stores seeded from `hostelData.js`/`mockData.js` (`services/dataService.js`).
- **Supabase-ready** — `@supabase/supabase-js` is installed as a dependency for a future backend migration; the current data layer is local mock data.

## Tech Stack

| Layer   | Technology |
|---------|------------|
| UI      | React 18, React DOM 18 |
| Build   | Vite 5 (`@vitejs/plugin-react`) |
| Design  | MUI v6 (`@mui/material`, Emotion), Tailwind CSS 3.4, PostCSS |
| Charts  | Recharts |
| Data    | Local `DataService` + mock data; `@supabase/supabase-js` installed for future use |
| Quality | ESLint 9 (`eslint.config.js`) |
| Package manager | pnpm 10 (`packageManager: pnpm@10.10.0`) |

## Project Structure

```text
Hostel-Management-System-Project/
├── dashboard/                  # The runnable web app
│   ├── src/
│   │   ├── App.jsx             # Auth gate, navigation, view switching
│   │   ├── main.jsx            # Entry point
│   │   ├── index.css           # Global styles
│   │   ├── components/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Attendance.jsx
│   │   │   ├── LeaveRequests.jsx
│   │   │   ├── MissingItems.jsx
│   │   │   ├── Students.jsx
│   │   │   ├── Settings.jsx
│   │   │   ├── Login.jsx / Register.jsx
│   │   │   ├── Header.jsx / Sidebar.jsx / StatsCard.jsx
│   │   │   └── charts/         # Recharts components
│   │   ├── services/dataService.js
│   │   └── data/hostelData.js, mockData.js
│   ├── index.html              # Title: "Hostel Management System"
│   ├── package.json            # Scripts: dev, build, lint, preview
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
├── cover/                      # Cover images
├── .wiki.md                    # Original project summary/brief
├── .MGXEnv.json / .MGXTools    # Builder-tool metadata (not app code)
└── workspace/                  # Git submodule placeholder (empty)
```

> **Note:** `workspace/` is a submodule reference with no resolvable content — safe to ignore. Builder metadata (`.MGX*`) is not part of the app.

## Installation

**Prerequisites:** Node.js 18+ and [pnpm 10](https://pnpm.io/).

```bash
git clone https://github.com/SHYAMFRANCIS/Hostel-Management-System-Project.git
cd Hostel-Management-System-Project/dashboard

pnpm install
```

## Usage

```bash
pnpm run dev      # Start dev server (Vite)
pnpm run build    # Production build
pnpm run preview  # Preview the production build
pnpm run lint     # ESLint over ./src
```

Open the dev-server URL, register a user (stored in `localStorage` under `hostelUser`), and navigate via the sidebar: **Dashboard → Attendance → Leave Requests → Missing Items → Students → Settings**.

### Examples

- **Student flow:** Register → view `my-attendance` → raise a leave/outing request → report a missing item.
- **Staff flow:** Log in → review all leave requests in `LeaveRequests` → manage `Attendance` → browse `Students`.

## Configuration / Environment

No environment file is required — the app runs entirely on local mock data. To migrate to a real backend, add Supabase credentials and repoint `services/dataService.js` to Supabase queries (`@supabase/supabase-js` is already a dependency).

## Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/my-change`).
3. Run `pnpm run lint` and `pnpm run build` before submitting.
4. Open a pull request describing the change and how it was tested.

## License

No `LICENSE` file is present in this repository. The code is shared publicly by the author; if you intend to reuse it, please confirm licensing with the repository owner. (This README defaults to referencing MIT — a `LICENSE` file should be added to make that explicit.)
