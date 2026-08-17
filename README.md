<<<<<<< HEAD
# SkillForge AI

**Learn Smarter. Build Faster. Get Hired.**

A modern, responsive React application that combines career discovery, skill analysis, personalized roadmaps, and learning resources in one platform. Built for college students, freshers, and career switchers.

## 📋 Evaluation 1 Features

### Core Pages
- **Home** - Landing page with hero section, statistics, testimonials, FAQ, and CTA
- **Careers** - Career explorer with search and filters
- **Career Details** - In-depth career information with roadmaps and skill requirements
- **Technologies** - Technology explorer with search and category/level filters
- **About** - Information about SkillForge, mission, values, and team
- **Contact** - Contact form with multiple contact methods

### Key Features
✅ **Interactive Career Discovery**
- 8+ diverse career paths with detailed information
- Search functionality with debounced queries
- Filter by domain and difficulty level
- Favorite careers with localStorage persistence

✅ **Technology Explorer**
- 12+ technologies with learning resources
- Category and level-based filtering
- Bookmark functionality
- Related career recommendations

✅ **Modern UI/UX**
- Responsive design (mobile, tablet, desktop)
- Dark/Light theme toggle with persistence
- Smooth animations with Framer Motion
- Loading states and empty states
- Toast notifications for user actions

✅ **User Data Persistence**
- Favorite careers saved to localStorage
- Bookmarked technologies saved to localStorage
- Recently viewed careers tracked
- Theme preference persisted

✅ **React Concepts Demonstrated**
- Functional components with hooks
- useState for state management
- useEffect for side effects
- Custom hooks (useLocalStorage, useFetch)
- React Router for navigation
- Component composition and reusability
- Props and prop drilling (minimal)
- Async/await and Fetch API

## 🚀 Tech Stack

- **Frontend Framework**: React 18
- **Bundler**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **Notifications**: React Hot Toast
- **Icons**: Lucide React
- **Package Manager**: npm

## 📁 Project Structure

```
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

## 🎨 Design System

### Colors
- **Primary**: Indigo (#4F46E5)
- **Secondary**: Emerald (#10B981)
- **Accent**: Amber (#F59E0B)
- **Dark BG**: Slate (#0F172A)

### Typography
- **Headings**: Poppins (bold)
- **Body**: Inter (regular)

### Components
- Cards with hover effects
- Buttons (primary, secondary, outline)
- Responsive grid layouts
- Modal-ready structure
- Skeleton loaders

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository** (or navigate to the project)
```bash
cd SkillForgeAi
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

The application will open in your browser at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📊 Features in Detail

### Search & Filtering
- **Debounced Search**: Optimized search with 300ms debounce
- **Multi-filter Support**: Filter by category, level, domain
- **Dynamic Filter Tags**: Visual representation of active filters
- **Clear Filters**: One-click reset to show all items

### Responsive Design
- **Mobile First**: Optimized for small screens
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Flexible Grids**: Auto-adjusting column layouts
- **Touch-friendly**: Larger buttons and spacing on mobile

### Animations
- **Page Transitions**: Smooth fade-in and slide-up animations
- **Card Hover**: Scale and shadow effects
- **Staggered Lists**: Sequential item animations
- **Lazy Loading**: Animations trigger on scroll

### Accessibility
- **Semantic HTML**: Proper heading hierarchy
- **ARIA Labels**: Form and button accessibility
- **Keyboard Navigation**: Focus states and tab order
- **Color Contrast**: WCAG compliant contrast ratios
- **Skip Links**: Future-ready for screen readers

## 🎯 User Flows

### Career Discovery Flow
1. Land on home page with hero and stats
2. Browse featured careers
3. Click "Explore Careers" to see all careers
4. Use search and filters to narrow down
5. Click on a career card to view details
6. Favorite careers for quick access
7. Career is added to favorites (localStorage)

### Technology Learning Flow
1. Visit Technologies page
2. Search for specific tech
3. Filter by category or level
4. Bookmark technologies of interest
5. View related careers for each tech

### Contact Flow
1. Click "Contact" in navigation
2. Fill out contact form
3. Submit message (with client-side validation)
4. Receive toast notification
5. Admin can implement backend later

## 📱 Mobile Optimization

- **Sticky Navigation**: Always accessible navbar
- **Responsive Grid**: 1 column on mobile, 2-3+ on desktop
- **Touch Targets**: 44px+ button heights
- **Readable Text**: Minimum 16px font sizes
- **Optimized Images**: SVG icons for crisp rendering
- **Mobile Menu**: Hamburger menu for navigation

## 🔄 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 React Concepts Covered

### Hooks
- `useState` - State management
- `useEffect` - Side effects and data fetching
- `useContext` - Context API usage
- `useMemo` - Performance optimization
- Custom hooks (useLocalStorage, useFetch)

### Components
- Functional components
- Component composition
- Reusable component libraries
- Props drilling patterns
- Conditional rendering

### Features
- Client-side routing
- Protected routes (structure ready)
- Dynamic routes with parameters
- Local state vs global state
- Form handling and validation

### Performance
- Memoization patterns
- Debounced searches
- Lazy component loading ready
- Image optimization with icons

## 🔜 Evaluation 2 Features (Planned)

- Authentication system
- User dashboard
- Skill tracker with CRUD
- Learning planner
- Global state management (Zustand/Redux)
- Protected routes
- Advanced forms with validation
- Progress tracking

## 🔜 Evaluation 3 Features (Planned)

- AI career advisor
- Analytics dashboard with charts
- Portfolio builder
- Interview preparation module
- Advanced UX improvements
- Testing (Jest + React Testing Library)
- Production deployment

## 🐛 Known Limitations / Future Improvements

- Mock data currently hardcoded (API integration coming in Eval 2)
- Form submissions simulate delay (backend coming soon)
- Protected routes structure ready but not enforced yet
- Analytics not yet implemented

## 📚 Learning Resources Used

This project demonstrates real-world patterns from:
- React documentation
- Tailwind CSS best practices
- Framer Motion animations
- React Router patterns
- Custom hook patterns
- Responsive design principles

## 💡 Tips for Extending

1. **Add More Careers/Technologies**: Edit `src/constants/data.js`
2. **Customize Colors**: Modify `tailwind.config.js` theme colors
3. **Change Typography**: Update font links in `index.html`
4. **Add New Pages**: Create file in `src/pages/` and add route in `App.jsx`
5. **Create Components**: Add to `src/components/` and import where needed

## 📧 Support

For questions or feedback about this project, contact: yashjagga884@gmail.com

## 📄 License

This project is part of the SkillForge AI educational initiative.

---

**SkillForge AI** - Empowering the next generation of tech professionals.
=======
# SkillForge-AI

SkillForge AI is a modern web platform where students discover career paths, analyse their current skills, generate personalised learning roadmaps, build project portfolios, track progress, explore internships, and prepare for interviews—all in one place.
Think of it as a combination of:
Roadmap.sh
LinkedIn Learning
GitHub Portfolio
Coursera Planner
ChatGPT Guidance
but designed for students.
This is not just another dashboard—it feels like a real startup.
Why this solves a real problem
Students constantly ask:
What should I learn next?
Which projects should I build?
Am I industry ready?
Which internships fit my skills?
How do I track everything?
Today they use 8–10 different websites.
SkillForge AI combines them into one platform.
>>>>>>> ad305aa0c92f13d85b1aee163cdcd1e7d6e0e5ae
