# Personal Portfolio — Ryan Rostampour

A high-performance personal portfolio built with React 18 and Vite. Features a canvas-based neural network background, smooth scroll animations, dark/light theme switching with the View Transitions API, and a fully responsive layout.

**Live site:** [ryanrostampour.netlify.app](https://ryanrostampour.netlify.app)

---

## Features

- **Neural network background** — Canvas animation with mouse repulsion, frame-rate-independent movement (delta time normalized to 60 fps), and theme-aware colors
- **Entrance animations** — Framer Motion `whileInView` reveals with staggered children across every section
- **Hero name reveal** — Overflow-clipped slide-up animation for each name line
- **Theme switching** — Dark/light toggle with View Transitions API crossfade; persisted via `localStorage`
- **Active nav tracking** — `IntersectionObserver` highlights the current section link as you scroll
- **Scroll progress bar** — Fixed indicator at the top of the viewport
- **Contact form** — Formspree-backed with loading, success, and error states
- **Responsive** — Mobile-first layout with a fullscreen hamburger menu below 768 px

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build tool | Vite 7 |
| Animation | Framer Motion 12 |
| Styling | CSS Modules + CSS custom properties |
| Typography | Space Grotesk · JetBrains Mono (Google Fonts) |
| Background | HTML Canvas API (custom, no library) |
| Contact | Formspree |
| Deployment | Netlify |

---

## Project Structure

```
src/
├── common/
│   ├── NeuralBackground.jsx   # Canvas animation
│   ├── ProjectCard.jsx        # Reusable project card
│   ├── ScrollProgress.jsx     # Top scroll indicator
│   ├── SectionTitle.jsx       # Animated section heading
│   └── ThemeContext.jsx       # Dark/light theme provider
├── sections/
│   ├── Nav/                   # Fixed nav with active-link tracking
│   ├── Hero/                  # Name reveal, floating image, CTA
│   ├── About/                 # Bio and pull-quote
│   ├── Projects/              # Project cards
│   ├── Stats/                 # Key metrics
│   ├── Skills/                # 2×2 skill category grid
│   ├── Experience/            # Work and research history
│   ├── Contact/               # Formspree contact form
│   └── Footer/
├── App.jsx
└── App.css                    # Global tokens, typography, theming
```

---

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Clone the repo
git clone https://github.com/RyanRostampour/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The dev server runs at `http://localhost:5173`.

```bash
# Production build
npm run build

# Preview production build locally
npm run preview
```

---

## Deployment

The site is deployed on Netlify via continuous deployment from the `main` branch. Every push to `main` triggers a new build automatically.

To deploy your own fork:
1. Push the repo to GitHub
2. Connect it to a new Netlify site
3. Set build command to `npm run build` and publish directory to `dist`

---

## License

MIT
