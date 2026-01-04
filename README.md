# 🧙‍♂️ D&D 5e Spellbook

<div align="center">

![D&D Spellbook Banner](https://img.shields.io/badge/D%26D-5e%20Spellbook-8B0000?style=for-the-badge&logo=dungeonsanddragons&logoColor=white)
[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge)](https://dnd-spellbook-two.vercel.app)
[![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

**A modern, responsive web application for browsing and managing D&D 5th Edition spells**

[Live Demo](https://dnd-spellbook-two.vercel.app) • [Report Bug](https://github.com/VitorDSAndrade/dnd-spellbook/issues) • [Request Feature](https://github.com/VitorDSAndrade/dnd-spellbook/issues)

</div>

---

## 📖 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Screenshots](#-screenshots)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [API Reference](#-api-reference)
- [Key Features Explained](#-key-features-explained)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

## 🎯 About

**D&D 5e Spellbook** is a comprehensive web application designed for Dungeons & Dragons 5th Edition players and Dungeon Masters. Browse through hundreds of official D&D spells, search and filter by various criteria, and save your favorites to your personal spellbook—all with a beautiful, theme-appropriate UI that evokes the feel of an ancient magical tome.

This project demonstrates modern React development practices, API integration, state management, and responsive design principles, all while providing genuine utility for the D&D community.

### 🎲 Why This Project?

- **For Players**: Quickly look up spell details during gameplay without flipping through rulebooks
- **For DMs**: Reference spell mechanics and effects on the fly
- **For Character Builders**: Browse and compare spells when leveling up your spellcaster
- **For Developers**: Learn React best practices through a real-world application

---

## ✨ Features

### 🔍 **Comprehensive Spell Browser**
- Browse all official D&D 5e spells from the SRD (System Reference Document)
- Real-time search by spell name
- Instant results as you type

### 📊 **Advanced Sorting & Filtering**
- **Sort by Name**: Alphabetical (A→Z) or reverse (Z→A)
- **Sort by Level**: Cantrips to 9th level or reverse
- **Filter by Level**: View only spells of a specific level (0-9)
- Combined sorting and filtering for precise results

### 📄 **Smart Pagination**
- Configurable page size (10, 25, 50, or 100 spells per page)
- Page number display and navigation
- Total spell count tracking
- Maintains state across navigation

### ⭐ **Personal Spellbook ("My Book")**
- Save favorite spells with one click
- Persistent storage using browser localStorage
- Visual indicators for favorited spells
- Dedicated "My Book" page to view all favorites
- Remove spells from favorites easily

### 📜 **Detailed Spell Information**
Each spell displays comprehensive information:
- **Basic Info**: Name, level, school of magic
- **Casting Details**: Casting time, range, duration
- **Components**: Verbal (V), Somatic (S), Material (M) with material descriptions
- **Full Description**: Complete spell effect text
- **Higher Levels**: Scaling effects when cast at higher levels
- **Classes**: Which classes can cast the spell

### 🎨 **Themed UI/UX**
- Custom "Old Tome" aesthetic with parchment textures
- D&D-inspired color scheme and typography
- Responsive design for desktop, tablet, and mobile
- Smooth animations and transitions
- Accessible and user-friendly interface

### ⚡ **Performance & UX**
- Loading states with indicators
- Error handling and user-friendly messages
- Empty state handling
- Optimized API calls
- Fast navigation with React Router

---

## 📸 Screenshots

<div align="center">

### Home Page - Spell List
![Spell List](https://via.placeholder.com/800x450/2c1810/f4e8d0?text=Spell+List+View)
*Browse and search through all available spells*

### Spell Detail Page
![Spell Detail](https://via.placeholder.com/800x450/2c1810/f4e8d0?text=Detailed+Spell+Information)
*View complete spell information and mechanics*

### My Book - Favorites
![My Book](https://via.placeholder.com/800x450/2c1810/f4e8d0?text=Your+Favorite+Spells)
*Access your personal collection of saved spells*

### Mobile Responsive
![Mobile View](https://via.placeholder.com/300x600/2c1810/f4e8d0?text=Mobile+View)
*Fully responsive on all devices*

</div>

> **Note**: Replace placeholder images with actual screenshots from your deployed application

---

## 🛠️ Tech Stack

### **Frontend Framework**
- **React 18+** - Modern UI library with hooks
- **Vite** - Lightning-fast build tool and dev server

### **Routing & Navigation**
- **React Router DOM** - Client-side routing

### **Styling**
- **Bootstrap 5** - Responsive component framework
- **Custom CSS** - Theme-specific styling for old tome aesthetic

### **Data & API**
- **Fetch API** - HTTP requests to D&D 5e API
- **LocalStorage API** - Persistent favorites storage

### **Development Tools**
- **ESLint** - Code quality and consistency
- **Git** - Version control
- **npm** - Package management

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16.0.0 or higher)
- **npm** (v7.0.0 or higher) or **yarn**
- A modern web browser
- Git (for cloning the repository)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/VitorDSAndrade/dnd-spellbook.git
   cd dnd-spellbook
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or with yarn:
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   or with yarn:
   ```bash
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to the URL shown in the terminal (typically `http://localhost:5173`)

### Build for Production

To create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

---

## 📁 Project Structure

```
dnd-spellbook/
│
├── public/                      # Static assets
│   └── vite.svg                 # Vite logo
│
├── src/                         # Source files
│   ├── components/              # Reusable React components
│   │   ├── Navbar.jsx          # Navigation bar component
│   │   ├── Footer.jsx          # Footer component
│   │   └── SpellCard.jsx       # Individual spell card component
│   │
│   ├── pages/                   # Page components (routes)
│   │   ├── Home.jsx            # Main spell list page
│   │   ├── SpellDetail.jsx    # Individual spell details page
│   │   ├── Spells.jsx          # Spell browsing page
│   │   └── MyBook.jsx          # Favorites/saved spells page
│   │
│   ├── services/                # API and utility services
│   │   ├── api.js              # D&D 5e API integration
│   │   └── favorites.js        # LocalStorage favorites management
│   │
│   ├── App.jsx                  # Main app component with routing
│   ├── main.jsx                 # Application entry point
│   └── index.css                # Global styles and theme
│
├── .gitignore                   # Git ignore rules
├── eslint.config.js             # ESLint configuration
├── index.html                   # HTML entry point
├── package.json                 # Project dependencies and scripts
├── package-lock.json            # Locked dependency versions
├── vite.config.js               # Vite configuration
└── README.md                    # This file
```

### Key Files Explained

#### **Components** (`src/components/`)
- **`Navbar.jsx`**: Top navigation with links to Home, Spells, and My Book
- **`Footer.jsx`**: Footer with attribution and links
- **`SpellCard.jsx`**: Reusable card component displaying spell summary

#### **Pages** (`src/pages/`)
- **`Home.jsx`**: Landing page with featured spells
- **`Spells.jsx`**: Main spell browser with search, sort, and filter
- **`SpellDetail.jsx`**: Detailed view of a single spell
- **`MyBook.jsx`**: User's saved favorite spells

#### **Services** (`src/services/`)
- **`api.js`**: Functions for fetching data from D&D 5e API
- **`favorites.js`**: Functions for managing favorites in localStorage

---

## 🌐 API Reference

This project uses the **D&D 5e API** - a free, open RESTful API for D&D 5th Edition data.

### Base URL
```
https://www.dnd5eapi.co
```

### Main Endpoints Used

#### Get All Spells
```http
GET /api/spells
```
Returns a list of all available spells with basic information.

**Response Example:**
```json
{
  "count": 319,
  "results": [
    {
      "index": "acid-arrow",
      "name": "Acid Arrow",
      "level": 2,
      "url": "/api/spells/acid-arrow"
    }
  ]
}
```

#### Get Spell Details
```http
GET /api/spells/{spell-index}
```
Returns complete information about a specific spell.

**Response Example:**
```json
{
  "index": "fireball",
  "name": "Fireball",
  "level": 3,
  "school": {
    "name": "Evocation"
  },
  "casting_time": "1 action",
  "range": "150 feet",
  "components": ["V", "S", "M"],
  "material": "A tiny ball of bat guano and sulfur",
  "duration": "Instantaneous",
  "desc": [
    "A bright streak flashes from your pointing finger..."
  ],
  "higher_level": [
    "When you cast this spell using a spell slot..."
  ],
  "classes": [
    {
      "name": "Sorcerer"
    },
    {
      "name": "Wizard"
    }
  ]
}
```

### API Documentation
For complete API documentation, visit: [https://www.dnd5eapi.co/docs](https://www.dnd5eapi.co/docs)

---

## 🎓 Key Features Explained

### 1. **Favorites System**

The favorites system uses browser localStorage to persist user selections across sessions.

**How it works:**
```javascript
// Save to favorites
const saveFavorite = (spell) => {
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  favorites.push(spell);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

// Check if favorited
const isFavorite = (spellIndex) => {
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  return favorites.some(fav => fav.index === spellIndex);
};
```

**Benefits:**
- No backend required
- Instant save/load
- Works offline
- Private to user's browser

### 2. **Search & Filter Logic**

The application implements client-side search and filtering for instant results:

```javascript
// Filter by search term
const filteredSpells = spells.filter(spell =>
  spell.name.toLowerCase().includes(searchTerm.toLowerCase())
);

// Filter by level
const levelFiltered = searchTerm === ''
  ? filteredSpells
  : filteredSpells.filter(spell => spell.level === selectedLevel);

// Sort
const sortedSpells = [...levelFiltered].sort((a, b) => {
  if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
  if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
  if (sortBy === 'level-asc') return a.level - b.level;
  if (sortBy === 'level-desc') return b.level - a.level;
});
```

### 3. **Pagination System**

Efficient pagination to handle hundreds of spells:

```javascript
const indexOfLastSpell = currentPage * spellsPerPage;
const indexOfFirstSpell = indexOfLastSpell - spellsPerPage;
const currentSpells = sortedSpells.slice(indexOfFirstSpell, indexOfLastSpell);

const totalPages = Math.ceil(sortedSpells.length / spellsPerPage);
```

### 4. **Responsive Design**

Using Bootstrap's grid system and custom media queries:

```css
/* Mobile first approach */
.spell-card {
  width: 100%;
}

/* Tablet */
@media (min-width: 768px) {
  .spell-card {
    width: 48%;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .spell-card {
    width: 31%;
  }
}
```

---

## 🚢 Deployment

This project is deployed on **Vercel** for optimal performance and automatic deployments.

### Deploy Your Own

#### Deploy to Vercel (Recommended)

1. Fork this repository to your GitHub account
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your forked repository
5. Vercel will automatically detect Vite and configure the build settings
6. Click "Deploy"

Your site will be live in minutes!

#### Deploy to Netlify

1. Fork this repository
2. Visit [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub account and select the repository
5. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"

#### Deploy to GitHub Pages

1. Install the gh-pages package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/dnd-spellbook",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/dnd-spellbook/',
     plugins: [react()],
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### Reporting Bugs

1. Check if the bug has already been reported in [Issues](https://github.com/VitorDSAndrade/dnd-spellbook/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable

### Suggesting Features

1. Create an issue with the "enhancement" label
2. Describe the feature and its benefits
3. Provide examples or mockups if possible

### Pull Requests

1. **Fork** the repository
2. **Create** a new branch (`git checkout -b feature/AmazingFeature`)
3. **Make** your changes
4. **Test** thoroughly
5. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
6. **Push** to the branch (`git push origin feature/AmazingFeature`)
7. **Open** a Pull Request

#### Code Style Guidelines

- Use functional components with hooks
- Follow existing code formatting
- Add comments for complex logic
- Ensure responsive design
- Test on multiple browsers

---

## 📋 Roadmap

### Planned Features

- [ ] **Advanced Filtering**
  - Filter by school of magic
  - Filter by class
  - Filter by components required
  - Multi-select filters

- [ ] **Search Enhancements**
  - Search by description keywords
  - Search by class
  - Fuzzy search implementation

- [ ] **User Features**
  - Export favorites as PDF
  - Share spellbook link
  - Print-friendly spell cards
  - Custom spell notes

- [ ] **UI Improvements**
  - Dark mode toggle
  - Alternative themes
  - Animation improvements
  - Accessibility enhancements

- [ ] **Additional Content**
  - Homebrew spell support
  - Spell slot calculator
  - Character spell list builder
  - Spell comparison tool

- [ ] **Technical Improvements**
  - TypeScript migration
  - Unit and integration tests
  - Performance optimizations
  - Offline support (PWA)

---

## 🐛 Known Issues

- Pagination resets when changing filters (by design, but could be improved)
- localStorage is browser-specific (favorites don't sync across devices)
- Limited to SRD content (no content from paid sourcebooks)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### Third-Party Licenses

- **D&D 5e API**: Open source API for D&D 5e data
- **Bootstrap**: MIT License
- **React**: MIT License
- **Vite**: MIT License

### Legal Disclaimer

This project uses data from the **Dungeons & Dragons 5th Edition Systems Reference Document (SRD)**, which is made available by Wizards of the Coast under the Open Gaming License (OGL).

**Dungeons & Dragons** is a trademark of Wizards of the Coast LLC. This project is not affiliated with, endorsed, sponsored, or specifically approved by Wizards of the Coast LLC.

---

## 👤 Author

**Vitor Andrade**

- GitHub: [@VitorDSAndrade](https://github.com/VitorDSAndrade)
- LinkedIn: [Connect with me](https://linkedin.com/in/yourprofile) <!-- Add your LinkedIn -->
- Portfolio: [yourportfolio.com](https://yourportfolio.com) <!-- Add your portfolio -->

---

## 🙏 Acknowledgments

- **[D&D 5e API](https://www.dnd5eapi.co/)** - For providing free access to D&D data
- **Wizards of the Coast** - For creating D&D and making the SRD available
- **React Community** - For excellent documentation and ecosystem
- **Bootstrap Team** - For the responsive framework
- **Vite Team** - For the blazing-fast build tool

---

## 📞 Support

If you find this project helpful:

- ⭐ **Star** this repository
- 🐛 **Report** bugs or issues
- 💡 **Suggest** new features
- 📢 **Share** with fellow D&D players
- ☕ **Buy me a coffee** (if you add a donation link)

---

## 📚 Additional Resources

### Learning React
- [React Official Docs](https://react.dev/)
- [React Router Docs](https://reactrouter.com/)

### D&D Resources
- [D&D Official Site](https://dnd.wizards.com/)
- [D&D Beyond](https://www.dndbeyond.com/)
- [SRD Document](https://dnd.wizards.com/resources/systems-reference-document)

### Web Development
- [MDN Web Docs](https://developer.mozilla.org/)
- [Bootstrap Documentation](https://getbootstrap.com/docs/)
- [Vite Documentation](https://vitejs.dev/)

---

<div align="center">

**Made with ❤️ and ✨ for the D&D community**

*May your spells always hit and your saving throws never fail!* 🎲

[⬆ Back to Top](#-dd-5e-spellbook)

</div>