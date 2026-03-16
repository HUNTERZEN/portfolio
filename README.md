<div align="center">

# 🌐 Personal Portfolio Website

A sleek, modern developer portfolio built with **React 19** and **Vite 8** — designed to leave a lasting impression.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

</div>

---

## ✨ Overview

A premium, single-page portfolio website featuring a dark-themed glassmorphism design with fluid animations and responsive layouts. Built for performance and visual excellence, it delivers a smooth and immersive browsing experience across all devices.

---

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | Component-based UI framework |
| **Vite 8** | Lightning-fast build tooling & HMR |
| **Tailwind CSS v4** | Utility-first styling with custom design tokens |
| **Motion (Framer Motion)** | Smooth scroll-triggered animations & transitions |
| **Lucide React** | Clean, modern SVG icon library |
| **Google Fonts (Inter, JetBrains Mono)** | Premium typography |

---

## 🎨 Features

- **🖥️ Glassmorphism Navbar** — Sticky navigation bar with frosted-glass backdrop blur and smooth scroll-to-section links
- **🦸 Animated Hero Section** — Bold entrance animations with dynamic gradient text effects
- **📖 About Section** — Clean, structured layout with visual cards and highlights
- **⚡ Skills Grid** — Interactive skill cards with hover effects and categorized expertise
- **📂 Projects Showcase** — Project cards with hover-reveal details, links, and tech tags
- **🔗 Footer with Socials** — Minimal footer with social media icons and a scroll-to-top button
- **📱 Fully Responsive** — Optimized layouts for desktop, tablet, and mobile devices
- **🌑 Premium Dark Theme** — Deep blacks with accent glows for a high-contrast, modern aesthetic
- **🎬 Micro-Animations** — Subtle motion effects throughout for a polished, interactive feel
- **🔍 SEO Optimized** — Open Graph meta tags, semantic HTML, and descriptive titles

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ui/              # Reusable UI primitives
│   │   ├── sections/        # Section-level layouts
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   └── Footer.jsx
│   ├── lib/                 # Utilities & helpers
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🛠️ Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server with HMR |
| `npm run build` | Create an optimized production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## 🧩 Customization

This portfolio is designed as a modular template. Each section is a self-contained React component making it easy to:

- **Swap content** — Update text, images, and links directly in each component
- **Add / remove sections** — Import or remove components from `App.jsx`
- **Adjust theming** — Modify colors, gradients, and spacing via Tailwind CSS utilities and `index.css`
- **Extend animations** — Customize Motion keyframes and transition configs per component

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built with ❤️ using React + Vite**

</div>
