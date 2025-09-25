# 📚 Book Quote Shorts

## Overview

Book Quote Shorts is a modern, dark-themed Single Page Application (SPA) designed to deliver inspiring literature quotes in a quick, engaging, reel-like carousel format. It simulates the experience of short-form content (like reels) but tailored for book quotes, offering smooth transitions, autoplay functionality, and interactive navigation.

## Features

* **Quote Carousel** – Displays a sequence of book quotes with associated covers, authors, and sources.
* **Auto-Play & Progress Bar** – Quotes automatically advance every 3.75s with a smooth progress bar.
* **Interactive Navigation** – Manual Prev/Next navigation & Play/Pause control. (Manual navigation stops auto-play to maintain focus.)
* **Responsive & Dark-First UI** – Built with a modern, dark color palette and optimized for mobile devices.
* **Smooth Animations** – Powered by Framer Motion for transitions, card effects, and interactive UI.
* **Book Gallery** – Dedicated section featuring animated book cards with hover effects.

## Technology Stack

| Category  | Technology                          |
| --------- | ----------------------------------- |
| Frontend  | React (Core UI)                     |
| Tooling   | Vite (Build Tool)                   |
| Styling   | Tailwind CSS v4 (Utility Framework) |
| Animation | Framer Motion (Animation Library)   |
| Routing   | React Router DOM v6                 |

## Installation

Before running the project locally, ensure you have the following installed:

* Node.js (LTS)
* Git

Then follow these steps:

```bash
# Clone the repository
git clone https://github.com/Sanjay9176/book-quote-shorts.git
cd book-quote-shorts

# Install dependencies
npm install

# Start development server
npm run dev
```

👉 The app will open at: `http://localhost:5173`

## Deployment (GitHub Pages)

This project is configured for seamless deployment to GitHub Pages.

### Configuration Check

* `vite.config.js` → `base: '/book-quote-shorts/'`
* `main.jsx` → `BrowserRouter` with `basename='/book-quote-shorts'`

### Deployment Steps

```bash
# Commit & push final changes
git add .
git commit -m "feat: deployment ready"
git push origin main

# Deploy to GitHub Pages
npm run deploy
```

✅ **Your site will be live at:**
👉 [https://Sanjay9176.github.io/book-quote-shorts/](https://Sanjay9176.github.io/book-quote-shorts/)

## Preview

<img width="1819" height="948" alt="1" src="https://github.com/user-attachments/assets/1d261510-cfc1-4f52-aaff-1a506da39107" />

<img width="1886" height="1026" alt="2" src="https://github.com/user-attachments/assets/ed578d1a-61fa-4df8-9b03-bbff2890ce02" />

<img width="1837" height="988" alt="3" src="https://github.com/user-attachments/assets/542b5976-b0d7-4e47-a68b-f4e5bfc4fd96" />

<img width="1919" height="747" alt="4" src="https://github.com/user-attachments/assets/a58d3582-c7a9-4f80-aaff-194e8a36795c" />

## Improvements

1. **Like & Share Buttons** – Extend interactivity by allowing users to like or share quotes.
2. **Search & Filter** – Add functionality to filter quotes by author, genre, or book.
3. **Offline Support** – Implement service workers for offline usage.
4. **Backend Integration** – Connect to a backend or database for dynamic quote management.
5. **Accessibility Enhancements** – Improve ARIA roles and keyboard navigation.

# [Sanjay Kumar Purohit]



