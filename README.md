# AIKTC Website Clone

A responsive React single-page application inspired by the public website of Anjuman-I-Islam's Kalsekar Technical Campus (AIKTC). It recreates selected campus information and includes a student attendance lookup using sample data.

> This is an educational front-end prototype. It is not an official AIKTC service and is not connected to the college's systems.

## Pages

The application uses **one HTML entry point** (`index.html`). React Router renders each page at a clean URL without a separate `.html` file per page.

| Route         | Page contents                                                                  |
| ------------- | ------------------------------------------------------------------------------ |
| `/`           | Campus identity, hero, programme highlights, news, events, and admissions link |
| `/about`      | Campus overview, vision, mission, and statistics                               |
| `/programs`   | Engineering, Architecture, and Pharmacy programme links                        |
| `/attendance` | Roll-number attendance lookup demo                                             |
| `/news`       | Selected campus updates linking to official articles                           |
| `/events`     | Selected campus events linking to official event pages                         |
| `/admissions` | Admissions enquiry dialog and programme links                                  |

The header and footer are shared across routes. Local navigation uses React Router; selected links open AIKTC's official website or other external destinations.

## Technology

- React and React DOM for the interface
- React Router for client-side routing and navigation
- TypeScript for application code and type checking
- Vite for the development server and production build
- CSS for layout, visual styles, and responsive breakpoints

### How Routing Works

`src/main.tsx` mounts the React app inside `BrowserRouter`. Its `Routes` table maps URLs such as `/attendance` and `/programs` to page components. `Link` and `NavLink` change routes without reloading the whole document. The active navigation item follows the current route.

Some existing content sections in `src/components/` return static HTML strings which are inserted into React pages. The shared layout, routes, and interactive UI are handled in React. The attendance lookup data and behavior are in `src/components/attendance.ts`.

## Run Locally

Requirements: Node.js and npm.

Install dependencies:

```sh
npm install
```

Start Vite's development server:

```sh
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173/`. Visit pages through the site navigation or directly open routes such as `/attendance` and `/programs`.

Create a production build (includes TypeScript checking):

```sh
npm run build
```

Serve the production build locally:

```sh
npm run preview
```

### Deployment Note

This app uses `BrowserRouter`, so the production web server must return `index.html` for unknown paths. Configure this SPA fallback before deployment; otherwise a direct visit or refresh on `/attendance` may return a 404 even though navigation works inside the app.

## Attendance Demo

Try one of these sample roll numbers; matching ignores letter case:

- `24CO23`
- `23CO41`
- `24CO17`
- `23CO08`
- `24CO36`
- `23CO52`

The attendance percentages, class totals, and subject breakdowns are hard-coded examples in `src/components/attendance.ts`. Unknown numbers display a not-found message. No real student records are fetched, stored, or transmitted.

## Project Structure

```text
.
├── index.html                  # The only HTML entry point
├── package.json                # Dependencies and npm scripts
├── tsconfig.json               # TypeScript and React JSX settings
└── src/
    ├── main.tsx                # React app, shared layout, and route table
    ├── style.css               # Main visual system and responsive styles
    ├── refinements.css         # Additional section and page styles
    └── components/
        ├── about.ts             # About section and statistic content
        ├── attendance.ts        # Attendance demo records and lookup behavior
        ├── content.ts           # News, events, and video content sections
        ├── hero.ts              # Hero section content
        ├── identity.ts          # Campus identity and updates strip
        └── programs.ts          # Programme overview cards
```

    `header.ts` and `footer.ts` are leftover HTML-string helpers from the original implementation; the current React header and footer are defined in `src/main.tsx`.

## Features and Limitations

- Responsive site layout with shared navigation and client-side routes.
- Mobile navigation menu and search dialog UI.
- Attendance lookup with sample records and an unknown-roll message.
- Admissions enquiry dialog with browser-required fields.
- The search dialog does not search the site.
- The admissions form does not send or store submissions.
- Attendance is fake demonstration data and must not be treated as real student information.
- Some images, logos, and fonts load from external services and require internet access.
- News, event, and programme content is a selected snapshot; use the official links for current information.

## Viva Summary

> This project recreates selected parts of AIKTC's website as a responsive React single-page application. React Router provides clean client-side routes for the home page, campus information, programmes, news, events, admissions, and an attendance demo. The attendance lookup uses local sample records; the project has no backend and does not connect to official college systems.
