# CLAUDE.md — SkillForge AI

## 1. Project Overview

**Project:** SkillForge AI  
**Tagline:** Learn smarter. Build faster. Get hired.

SkillForge AI is a modern, startup-style career and skill roadmap platform for students. It combines career discovery, skill analysis, personalized roadmaps, project portfolios, progress tracking, internship discovery, and interview preparation in one application.

The product should feel like a real SaaS/startup product rather than a basic college React project.

### Product Inspiration

- Roadmap.sh — learning roadmaps
- LinkedIn Learning — learning resources
- GitHub — developer portfolios
- Coursera — course planning
- ChatGPT — personalized guidance

### Target Users

- College students
- Freshers
- Self-learners
- Coding bootcamp students
- Career switchers

---

## 2. Main Product Goals

Build a polished, responsive React application that demonstrates:

- Strong UI/UX
- Component-based architecture
- Responsive design
- API integration
- Authentication
- CRUD operations
- State management
- Routing
- Forms and validation
- Performance optimization
- Testing
- Deployment
- AI-powered career guidance

The application should progressively grow across three evaluation stages.

---

# 3. Development Roadmap

## Evaluation 1 — Weeks 1–5
### Theme: Interactive Career Discovery Platform

Build the foundation of the application.

### Required Features

- Landing page
- Hero section
- Responsive navbar
- Animated statistics
- FAQ
- Testimonials
- Light/dark theme
- Career explorer
- Search careers
- Technology explorer
- Technology filters
- Skill cards
- Career details page
- Learning timeline UI
- Roadmap preview
- Favourite careers
- Recently viewed careers
- Bookmark functionality
- Toast notifications
- Loading skeletons
- Responsive layouts
- LocalStorage persistence

### React Concepts

Use and demonstrate:

- Components
- JSX
- Props
- State
- `useState`
- `useEffect`
- Fetch API
- Async/await
- Browser storage

### Initial Pages

- Home
- Careers
- Career Details
- Technologies
- About
- Contact

---

## Evaluation 2 — Weeks 6–10
### Theme: Complete Learning Platform

Extend the application into a personalized student dashboard.

### Authentication

Implement mock authentication first:

- Login
- Signup
- Forgot password
- Protected routes

### Dashboard

Include:

- Welcome card
- Continue learning
- Progress overview
- Recommended skills
- Roadmap builder
- Learning goals

### Skill/Roadmap CRUD

Users should be able to:

- Add skills
- Edit skills
- Delete skills
- Mark skills/tasks complete

### Learning Planner

Support:

- Daily goals
- Weekly goals
- Deadlines
- Progress tracking

### Search

Search across:

- Technologies
- Careers
- Courses
- Projects

### Filters

Support filters such as:

- Beginner
- Intermediate
- Advanced
- Free/Paid
- Duration
- Domain

### Routing

Use React Router with:

- Dynamic routes
- Nested routes
- Protected routes

### State Management

Use Context API for:

- Authentication
- Theme
- User preferences

Use either **Zustand** or **Redux Toolkit** for larger application state such as:

- Dashboard
- Skills
- Roadmaps
- Notifications
- Search
- Filters

Do not duplicate responsibilities unnecessarily between Context and the global store.

### Forms

Implement:

- Validation
- Error states
- Password strength
- Good empty/loading/error states

React Hook Form + Zod may be used, or clean custom validation.

### Performance

Demonstrate:

- `useMemo`
- `useCallback`
- `React.memo`

---

## Evaluation 3 — Weeks 11–16
### Theme: Startup-Quality Product

Turn SkillForge AI into a polished, production-style product.

### AI Career Advisor

Use an AI API.

Users provide:

- Interests
- Current skills
- Career goals

The system returns:

- Suggested career
- Missing skills
- Personalized learning plan
- Recommended projects

### Analytics Dashboard

Display:

- Skills completed
- Weekly progress
- Learning streak
- Time spent learning
- Favourite domains

Use charts for visual progress.

### Portfolio Generator

Generate/manage:

- Portfolio website data
- Resume summary
- Skills showcase
- Projects

### Interview Preparation

Include:

- Interview questions
- Flashcards
- Quizzes
- Topic-based preparation

### Project Showcase

Allow users to add:

- Project images
- GitHub link
- Demo link
- Description

### Advanced UX / Performance

Implement where appropriate:

- Infinite scroll
- Pagination
- Debounced search
- Lazy loading
- Route-level code splitting

### Testing

Test:

- Components
- Hooks
- Utilities
- Important user flows

Use Jest + React Testing Library.

### Deployment

Deploy to Vercel.

Use environment variables for:

- API keys
- API URLs
- Other secrets/configuration

**Never hardcode secrets or API keys in source code.**

---

# 4. Complete Feature Set

The application should eventually support:

1. Landing Page
2. Responsive Layout
3. Hero Animation
4. Dark Mode
5. Career Explorer
6. Skill Cards
7. Technology Explorer
8. Search
9. Filters
10. Sorting
11. Career Details
12. Roadmaps
13. Favourite Careers
14. Recently Viewed Careers
15. Login
16. Signup
17. Dashboard
18. CRUD Skill Tracker
19. Learning Planner
20. Goal Tracker
21. Notifications
22. Toasts
23. Protected Routes
24. Nested Routes
25. Dynamic Routes
26. GitHub Profile Viewer
27. Project Gallery
28. Portfolio Builder
29. Interview Questions
30. Quiz Module
31. Analytics Dashboard
32. Charts
33. Infinite Scroll
34. Pagination
35. Debounced Search
36. Custom Hooks
37. Theme Context
38. Redux/Zustand Store
39. Performance Optimization
40. Lazy Loading
41. Code Splitting
42. Unit Testing
43. Error Boundaries
44. Skeleton Loading
45. Vercel Deployment

Prioritize the core product before bonus features.

---

# 5. Application Pages

Create the following route structure:

```text
/
├── Home
├── Careers
├── Careers/:careerId
├── Technologies
├── Dashboard
├── Planner
├── Skill Tracker
├── Portfolio
├── Analytics
├── Interview Prep
├── Profile
├── Settings
├── Login
├── Signup
└── *
    └── Not Found
```

Protected pages should require authentication.

---

# 6. Component Architecture

Use reusable components instead of putting large amounts of logic inside page components.

Recommended hierarchy:

```text
App
├── Layout
│   ├── Navbar
│   ├── Sidebar
│   └── Footer
│
├── Pages
│   ├── Home
│   ├── Dashboard
│   ├── Career Explorer
│   ├── Planner
│   └── Analytics
│
└── Shared
    ├── SearchBar
    ├── Filters
    ├── Cards
    ├── Modal
    ├── Toast
    ├── Charts
    ├── Loader
    └── Pagination
```

Prefer small, reusable components with clear responsibilities.

---

# 7. Recommended Folder Structure

```text
src/
├── assets/
├── components/
│   ├── common/
│   ├── layout/
│   ├── dashboard/
│   ├── roadmap/
│   └── portfolio/
├── pages/
├── hooks/
├── context/
├── store/
├── services/
├── api/
├── utils/
├── constants/
├── routes/
├── tests/
├── styles/
├── App.jsx
└── main.jsx
```

### Responsibilities

- `components/` — reusable UI
- `pages/` — route-level screens
- `hooks/` — reusable React logic
- `context/` — lightweight global contexts
- `store/` — Zustand/Redux state
- `services/` — business/data service logic
- `api/` — API clients and requests
- `utils/` — helper functions
- `constants/` — application constants
- `routes/` — routing configuration
- `tests/` — test files
- `styles/` — global/theme styles

---

# 8. State Management Architecture

### Context API

Use Context for:

- Authentication
- Theme
- User settings/preferences

### Zustand or Redux Toolkit

Use the global store for:

- Roadmaps
- Skills
- Dashboard data
- Notifications
- Search state
- Filters
- Other shared application state

### LocalStorage

Use LocalStorage for:

- Theme preference
- Favourite careers
- Recent searches
- Recently viewed careers
- Other lightweight client preferences

Avoid storing sensitive information in LocalStorage.

---

# 9. API Integrations

Potential APIs:

- GitHub REST API
- Dev.to API
- Hacker News API
- DummyJSON API
- REST Countries API
- Roadmap.sh data or static roadmap JSON
- Firebase/Supabase for authentication/database if needed
- OpenRouter or Gemini API for AI career guidance

API integrations should be isolated from UI components.

Use loading, success, empty, and error states for every asynchronous feature.

---

# 10. UI/UX Design System

### Colors

```text
Primary:   Indigo #4F46E5
Secondary: Emerald #10B981
Accent:    Amber #F59E0B
Dark BG:   Slate #0F172A
Light BG:  White
```

### Typography

Use:

- Poppins
- Inter

### Libraries

- Lucide React — icons
- Framer Motion — animations
- Recharts — charts
- React Hot Toast — notifications

### Design Direction

The UI should feel:

- Modern
- Clean
- Premium
- Student-focused
- Startup-like
- Responsive
- Accessible

Avoid excessive animations. Animations should support usability rather than distract from content.

---

# 11. Responsive Design

The application must work well on:

- Mobile
- Tablet
- Laptop
- Desktop

Test navigation, cards, grids, forms, tables, charts, modals, and dashboards at different screen sizes.

Do not design desktop-only layouts.

---

# 12. Performance Rules

Use optimization only where it provides value.

Recommended techniques:

- `useMemo` for expensive derived calculations
- `useCallback` for callbacks passed to memoized children
- `React.memo` for suitable reusable components
- Debouncing for search
- Pagination for large datasets
- Infinite scrolling where appropriate
- Lazy loading
- Route-level code splitting
- Image optimization
- API result caching/memoization where appropriate

Avoid premature optimization.

---

# 13. Error / Loading / Empty States

Every data-driven page should handle:

```text
Loading
Success
Empty
Error
```

Use:

- Skeleton loaders
- Empty-state components
- Error messages
- Retry actions
- Toast notifications when appropriate

Do not leave blank screens while data is loading.

---

# 14. Coding Standards

When modifying or creating code:

1. Prefer clean, readable React.
2. Use functional components.
3. Use meaningful component and variable names.
4. Keep components reasonably small.
5. Avoid duplicated logic.
6. Extract reusable logic into hooks/utilities.
7. Keep API logic separate from UI.
8. Keep state ownership clear.
9. Do not introduce dependencies without a reason.
10. Do not hardcode secrets.
11. Preserve existing functionality when adding features.
12. Do not rewrite unrelated files unnecessarily.
13. Follow the existing project's formatting conventions.
14. Keep accessibility in mind.
15. Make responsive behavior part of the implementation, not an afterthought.

---

# 15. Accessibility

Where applicable:

- Use semantic HTML.
- Provide accessible labels.
- Support keyboard navigation.
- Use visible focus states.
- Use ARIA attributes when necessary.
- Maintain sufficient color contrast.
- Do not rely solely on color to communicate information.

---

# 16. Development Strategy

Build incrementally.

### Phase 1 — Foundation

Start with:

- Project setup
- Routing
- Global styles
- Design system
- Navbar
- Footer
- Layout
- Home page
- Career explorer
- Technology explorer

### Phase 2 — Interactive Features

Add:

- Search
- Filters
- Career details
- Favourites
- Recently viewed
- LocalStorage
- Loading states
- Toasts

### Phase 3 — User Platform

Add:

- Authentication
- Dashboard
- Protected routes
- Skill CRUD
- Planner
- Goals
- Global state

### Phase 4 — Advanced Product

Add:

- GitHub integration
- Portfolio
- Analytics
- Interview preparation
- AI career advisor

### Phase 5 — Production Polish

Add:

- Testing
- Error boundaries
- Performance optimization
- Lazy loading
- Code splitting
- Accessibility
- Responsive refinement
- Deployment

Do not attempt to implement all 45 features simultaneously.

---

# 17. Weekly Timeline

## Evaluation 1

- Week 1 — UI & Layout
- Week 2 — Components
- Week 3 — API Integration
- Week 4 — Search & LocalStorage
- Week 5 — Polish & Responsive Design

## Evaluation 2

- Week 6 — Router
- Week 7 — Dashboard
- Week 8 — CRUD + Forms
- Week 9 — Context + Redux/Zustand
- Week 10 — Optimization

## Evaluation 3

- Week 11 — Authentication
- Week 12 — Analytics
- Week 13 — AI Advisor
- Week 14 — Testing
- Week 15 — Lazy Loading & Code Splitting
- Week 16 — Deployment & Final Polish

---

# 18. Demo Priorities

For demonstrations, prioritize features that visibly communicate product quality.

### Evaluation 1 Demo

Show:

1. Responsive landing page
2. Career exploration
3. Technology cards
4. Search
5. Filters
6. Favourites
7. LocalStorage persistence
8. Reusable components
9. API integration

### Evaluation 2 Demo

Show:

1. Login
2. Dashboard
3. Personalized roadmap
4. CRUD operations
5. Protected routes
6. Nested/dynamic routes
7. Search/filtering
8. State management

### Evaluation 3 Demo

Show:

1. AI career roadmap
2. Analytics
3. Progress charts
4. Portfolio generator
5. Interview preparation
6. Testing
7. Lazy loading
8. Code splitting
9. Production deployment

---

# 19. Viva Preparation

The implementation should make these concepts easy to explain.

### Evaluation 1

- Why split UI into components?
- What is the Virtual DOM?
- Why use `useEffect` for API calls?
- LocalStorage vs SessionStorage
- Why is responsive design important?

### Evaluation 2

- Why use Context API instead of prop drilling?
- Why use Redux Toolkit/Zustand alongside Context?
- Explain CRUD operations.
- How do protected routes work?
- When should `useMemo` and `useCallback` be used?

### Evaluation 3

- How does lazy loading improve performance?
- What is code splitting?
- Why use environment variables?
- How were components tested?
- How would the architecture scale if SkillForge AI became a startup?

---

# 20. Common Mistakes to Avoid

Do NOT:

- Put the entire application in one component.
- Mix Context and Redux/Zustand responsibilities without a clear reason.
- Repeatedly fetch identical API data without considering caching.
- Ignore loading, empty, and error states.
- Hardcode API keys.
- Use poor folder organization.
- Use inconsistent naming.
- Ignore mobile/tablet layouts.
- Add unnecessary dependencies.
- Over-engineer simple features.
- Build bonus features before the core product works.

---

# 21. Optional Bonus Features

Only implement these after the core application is stable:

- AI resume review
- Drag-and-drop roadmap builder
- Offline cached mode
- PWA support
- Gamification
- XP/badges/streaks
- Real-time notifications
- PDF roadmap export
- Voice career search
- Multi-language support
- Advanced accessibility

---

# 22. Claude's Working Rules

When working on this project:

### Before coding

1. Inspect the existing project structure.
2. Identify the current phase/evaluation.
3. Check existing dependencies before adding new ones.
4. Reuse existing components where possible.
5. Understand current routing and state management.

### While coding

1. Make the smallest coherent change needed.
2. Follow the architecture in this file.
3. Keep UI, state, and API responsibilities separated.
4. Preserve existing working features.
5. Handle loading/error/empty states.
6. Ensure responsive behavior.
7. Avoid hardcoded secrets.
8. Keep the UI consistent with the design system.

### After coding

1. Check for syntax/build errors.
2. Check affected routes/components.
3. Verify responsive behavior.
4. Verify that existing features still work.
5. Remove unused imports/code.
6. Summarize what changed and mention any remaining issues.

### Important

Do not blindly implement every feature described in this document. Treat the evaluation timeline as the source of development priority.

Build a functional, polished core first, then progressively expand SkillForge AI toward the full startup-quality vision.

---

# 23. Definition of Done

A feature is considered complete when:

- It works as intended.
- It fits the existing architecture.
- It is responsive.
- Loading/empty/error states are handled where applicable.
- It does not break existing functionality.
- It uses reusable components where appropriate.
- It follows the project's naming/style conventions.
- It does not expose secrets.
- It is reasonably accessible.
- It has tests when the feature is sufficiently important/complex.
- It has been checked for build/runtime errors.

---

## Final Product Vision

SkillForge AI should ultimately feel like a real student career platform:

> **Discover → Assess → Plan → Learn → Build → Track → Prepare → Get Hired**

The goal is not simply to demonstrate React features. Every technical feature should support a meaningful product experience.
