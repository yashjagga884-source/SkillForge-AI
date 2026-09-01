# SkillForge AI

**Learn Smarter. Build Faster. Get Hired.**

SkillForge AI is a modern, responsive React application that combines career discovery, skill analysis, personalized roadmaps, and learning resources in one platform. Built for college students, freshers, and career switchers.

## 🌟 About SkillForge AI

SkillForge AI is a modern web platform where students can discover career paths, analyse their current skills, generate personalised learning roadmaps, build project portfolios, track progress, explore internships, and prepare for interviews—all in one place.

Think of it as a combination of:

- Roadmap.sh
- LinkedIn Learning
- GitHub Portfolio
- Coursera Planner
- ChatGPT Guidance

But designed specifically for students.

### Why SkillForge AI Solves a Real Problem

Students constantly ask:

- What should I learn next?
- Which projects should I build?
- Am I industry ready?
- Which internships fit my skills?
- How do I track everything?

Today, students often use 8–10 different websites to answer these questions.

**SkillForge AI combines these experiences into one platform.**

---

## 📋 Core Features

### Career Discovery

- 8+ diverse career paths with detailed information
- Search functionality with debounced queries
- Filter by domain and difficulty level
- Detailed career roadmaps
- Required skill information
- Favorite careers with localStorage persistence
- Recently viewed career tracking

### Technology Explorer

- 12+ technologies with learning resources
- Category and level-based filtering
- Search functionality
- Bookmark functionality
- Related career recommendations
- Technology learning information

### Modern UI/UX

- Responsive design for mobile, tablet, and desktop
- Dark/Light theme toggle with persistence
- Smooth animations with Framer Motion
- Loading states and empty states
- Toast notifications for user actions
- Modern card-based interface
- Responsive navigation

### User Data Persistence

- Favorite careers saved to localStorage
- Bookmarked technologies saved to localStorage
- Recently viewed careers tracked
- Theme preference persisted

---

## 🚀 Tech Stack

- **Frontend Framework:** React 18
- **Bundler:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Routing:** React Router v6
- **Notifications:** React Hot Toast
- **Icons:** Lucide React
- **Package Manager:** npm

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── common/              # Reusable components
│   │   ├── CareerCard.jsx
│   │   ├── FilterBar.jsx
│   │   ├── SearchBar.jsx
│   │   ├── Skeleton.jsx
│   │   ├── TechCard.jsx
│   │   └── Toast.jsx
│   └── layout/              # Layout components
│       ├── Footer.jsx
│       ├── Layout.jsx
│       └── Navbar.jsx
├── context/
│   └── ThemeContext.jsx     # Theme management
├── hooks/
│   ├── useFetch.js          # Fetch data hook
│   └── useLocalStorage.js   # LocalStorage hook
├── pages/                   # Route pages
│   ├── About.jsx
│   ├── Careers.jsx
│   ├── CareerDetails.jsx
│   ├── Contact.jsx
│   ├── Home.jsx
│   ├── NotFound.jsx
│   └── Technologies.jsx
├── constants/
│   └── data.js              # Mock data
├── utils/
│   └── helpers.js           # Utility functions
├── App.jsx                  # Main app component
├── main.jsx                 # Entry point
├── index.css                # Global styles
└── index.html               # HTML template
```

---

## 🎨 Design System

### Colors

- **Primary:** Indigo (#4F46E5)
- **Secondary:** Emerald (#10B981)
- **Accent:** Amber (#F59E0B)
- **Dark Background:** Slate (#0F172A)

### Typography

- **Headings:** Poppins (bold)
- **Body:** Inter (regular)

### Components

- Cards with hover effects
- Primary, secondary, and outline buttons
- Responsive grid layouts
- Modal-ready structure
- Skeleton loaders
- Toast notifications

---

## 🔍 Search & Filtering

- **Debounced Search:** Optimized search with 300ms debounce
- **Multi-filter Support:** Filter by category, level, and domain
- **Dynamic Filter Tags:** Visual representation of active filters
- **Clear Filters:** One-click reset to show all items

---

## 📱 Responsive Design

- **Mobile First:** Optimized for small screens
- **Breakpoints:** sm (640px), md (768px), lg (1024px), xl (1280px)
- **Flexible Grids:** Auto-adjusting column layouts
- **Touch Friendly:** Larger buttons and spacing on mobile
- **Responsive Navigation:** Mobile hamburger menu

---

## ✨ Animations

- **Page Transitions:** Smooth fade-in and slide-up animations
- **Card Hover:** Scale and shadow effects
- **Staggered Lists:** Sequential item animations
- **Scroll Animations:** Animations triggered as content enters the viewport

---

## ♿ Accessibility

- Semantic HTML with proper heading hierarchy
- ARIA labels for forms and buttons
- Keyboard navigation
- Focus states and logical tab order
- Accessible color contrast
- Screen-reader-friendly structure

---

## 🎯 User Flows

### Career Discovery Flow

1. Land on the home page with hero section and statistics
2. Browse featured careers
3. Click **Explore Careers** to view all careers
4. Use search and filters to narrow down results
5. Click on a career card to view detailed information
6. Favorite careers for quick access
7. Career is saved to localStorage

### Technology Learning Flow

1. Visit the Technologies page
2. Search for a specific technology
3. Filter by category or level
4. Bookmark technologies of interest
5. View related careers for each technology

### Contact Flow

1. Click **Contact** in
