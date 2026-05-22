# React TS Practice

The app is build with:

- React 19
- Typescript
- Websocket
- Tanstack Query
- Tanstack Router
- Vite
- Tailwind CSS
- Shadcn UI
- lucide-react for icons
- pegion-maps for map
- husky for pre-commit/push hooks
- FBD (Feature-Based Design) architecture

## Project Overview

This app simulates a pharmaceutial company dashboard with the following features:

- Dashboard with charts statistics
- Browsing meditians paginated list
- Ability to add to calendar/open in maps the process details
- Ability to start the process implemented with websocket echo server
- notifications/popups
- responsive navigation

App is deployed through Vercel on https://react-ts-practice-mauve.vercel.app/

## Functionality

- All charts are implemented through the Recharts library, and are displayed on the dashboard page.
- Routing is implemented via Tanstack Router file-based routing, with a root layout that includes the navigation and shared components. The app has three main routes: Dashboard ("/"), Tables ("/tables"), and Process ("/process").
- The theme is implemented with custom ThemeProvider and useTheme hook, allowing users to toggle between light and dark modes. The theme preference is stored in localStorage and applied on app load.
- The meditians list is fetched from the dummy API using Tanstack Query, the data is edited and extended in features/tables/api/getMeditians.ts, and memoized. The list of meditians is fetched dynamicaly in respect to the list page opened.
- When clicking on "Start process", a websocket connection is established with the echo server. When connected, it guides the user through a multi-step process: first selecting an age group, then selecting a dosage, with each selection sent to the server via JSON messages. The server echoes back confirmation messages that trigger stage transitions in the UI. Finally, based on the user's selections, the app calculates and displays whether the drug dosage was correct for the age group (success only with matching pairs like 0-17 with dose 2, 18-40 with dose 4, or 50-80 with dose 8).

## Pages

### Dashboard ("/")

- Displays charts and widgets with hardcoded pharmaceutical statistics data, including:
    - Top-level summary cards indicating the real-time status of medicines, vaccines, and products.
    - A main line chart tracking "Total tests" results (comparing completed vs. awaiting results) over a specific date range.
    - A bar chart displaying "Total tested drugs" over the last 7 days.
    - A secondary line chart showing recent "Drug approval rates".
    - A donut/pie chart breaking down the "Testing process" distribution across stages like Preclinical testing, Clinical trials, and Regulatory approval.
    - A radial gauge chart illustrating the "Number of people tested" ratio.

### Tables ("/tables")

- Displays a paginated list of meditians fetched from the dummy API using RTK Query
- On mobile screens, the list is displayed in a card format, while on desktop screens, it is displayed in a table format
- Renders detailed column data including location, start/end dates, visual success reactions, process progress bars, and multi-colored status indicators.
- The data for the table that was not on the dummyjson is completely calculated based on the item id.
- Includes functional pagination controls (Back, Next, and current page tracking) to navigate the dataset.

### Process ("/process")

- Displays the comprehensive details of a specific pharmaceutical trial or event (e.g., drug testing).
- Action Buttons & Integrations:
    - Start Process: A primary button that initiates the interactive multi-step workflow. As defined in the feature list, this establishes a WebSocket connection to the echo server to validate age groups and dosages.
- Add to Calendar: Dynamically generates a URL payload (visible on hover) to add the process schedule and details directly to the user's external Google calendar.
- Map Integrations: Renders an embedded OpenStreetMap interactive view of the facility, alongside dedicated buttons to open the exact coordinates in Google Maps or Apple Maps.
- UI & Layout Structure:
    - Built using reusable Shadcn UI components from the src/shared/ui/ folder, including standard Buttons, layout Cards for the main content, and Badges for the event Tags (e.g., "Medicine", "Vaccine").

## Shared UI

- UsePopup hook for showing popups with custom content
- Loading / error states
- Shared/ui -- folder with reusable shadcn UI components like buttons, etc

## Architecture

```text
# Project Structure

├── public
│ └── favicon.png
├── src
│ ├── app --- app entry point, global styles
│ │ ├── styles/
│ │ └── main.tsx
│ ├── features --- all features are located here, each feature has its own folder with components, api calls, config and types if needed
│ │ ├── dashboard
│ │ │ ├── components/
│ │ │ └── config/
│ │ ├── process
│ │ │ └── components/
│ │ └── tables
│ │ ├── api/
│ │ ├── components/
│ │ ├── config/
│ │ └── types/
│ ├── routes --- all routes are located here, each route has its own folder with the page component and route config
│ │ ├── \_\_root.tsx
│ │ ├── index.tsx
│ │ ├── process.tsx
│ │ └── tables.tsx
│ ├── shared
│ │ ├── assets
│ │ ├── components
│ │ │ ├── error/
│ │ │ ├── layout/
│ │ │ ├── loading/
│ │ │ ├── popup/
│ │ │ └── ui/
│ │ ├── config/
│ │ ├── hooks/
│ │ ├── lib/
│ │ └── providers/
│ └── routeTree.gen.ts
├── vscode/
├── components.json
├── eslint.config.js
├── index.html
├── package.json
├── pnpm-lock.yaml
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vercel.json --- Added so as vercel could correctly handle client side routing
└── vite.config.ts

```

## Installation

```bash
git clone <repository-url>

cd react-ts-practice

pnpm install
# To run the app in development mode:
pnpm dev

# To build the app for production:
pnpm build

```
