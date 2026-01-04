# 🧙‍♂️ D&D 5e Spellbook

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge)](https://dnd-spellbook-two.vercel.app)
[![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

**A React web application to browse Dungeons & Dragons 5th Edition spells**

[View Live Demo](https://dnd-spellbook-two.vercel.app)

</div>

---

## 📖 About the Project

This project was developed as a React class assignment, consuming a public REST API. The application allows D&D players to search, filter, and save their favorite spells, with a themed interface inspired by ancient magic tomes.

---

## 🌐 API Used

### **D&D 5e API** - `https://www.dnd5eapi.co`

A free public REST API that provides official Dungeons & Dragons 5th Edition data (SRD - System Reference Document).

### How the API Works

The API is organized into different resources (spells, monsters, classes, etc.). For this project, I used the **spells** resource.

#### **Main Endpoint - List**
```
GET https://www.dnd5eapi.co/api/spells
```

**Response:**
```json
{
  "count": 319,
  "results": [
    {
      "index": "acid-arrow",
      "name": "Acid Arrow",
      "level": 2,
      "url": "/api/spells/acid-arrow"
    },
    ...
  ]
}
```

This endpoint returns a list with all available spells, including:
- `index` - Unique spell identifier
- `name` - Spell name
- `level` - Spell level (0-9, where 0 = cantrip)
- `url` - Endpoint to get complete details

#### **Detail Endpoint**
```
GET https://www.dnd5eapi.co/api/spells/{index}
```

**Example:**
```
GET https://www.dnd5eapi.co/api/spells/fireball
```

**Response:**
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
  "concentration": false,
  "desc": [
    "A bright streak flashes from your pointing finger..."
  ],
  "higher_level": [
    "When you cast this spell using a spell slot of 4th level or higher..."
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

### How I Implemented the API

#### 1. **API Service** (`src/services/api.js`)

I created functions to consume the endpoints:

```javascript
const BASE_URL = 'https://www.dnd5eapi.co/api';

// Fetch spell list
export const fetchSpells = async () => {
  const response = await fetch(`${BASE_URL}/spells`);
  const data = await response.json();
  return data.results;
};

// Fetch spell details
export const fetchSpellDetail = async (index) => {
  const response = await fetch(`${BASE_URL}/spells/${index}`);
  const data = await response.json();
  return data;
};
```

#### 2. **Usage in List** (`src/pages/Spells.jsx`)

```javascript
const [spells, setSpells] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  const loadSpells = async () => {
    try {
      setLoading(true);
      const data = await fetchSpells();
      setSpells(data);
    } catch (err) {
      setError('Error loading spells');
    } finally {
      setLoading(false);
    }
  };
  
  loadSpells();
}, []);
```

#### 3. **Usage in Detail** (`src/pages/SpellDetail.jsx`)

```javascript
const { index } = useParams(); // URL parameter
const [spell, setSpell] = useState(null);

useEffect(() => {
  const loadSpell = async () => {
    try {
      setLoading(true);
      const data = await fetchSpellDetail(index);
      setSpell(data);
    } catch (err) {
      setError('Error loading details');
    } finally {
      setLoading(false);
    }
  };
  
  loadSpell();
}, [index]);
```

---

## ✨ Implemented Features

### ✅ Requirements Met

- ✅ **React project with Vite**
- ✅ **Public API consumption** (list + detail)
- ✅ **Navbar and Footer** - Navigation and footer on all pages
- ✅ **Home page** - Explains the theme and API used
- ✅ **List page** - Shows all spells from the API
- ✅ **Detail page** - Complete information for each spell
- ✅ **Extra features:**
  - 🔍 **Search** - Filter spells by name
  - 🎯 **Filters** - Filter by spell level (0-9)
  - 📊 **Sorting** - Sort by name (A-Z, Z-A) or level
  - 📄 **Pagination** - Choose how many spells to show per page (10/25/50/100)
  - ⭐ **Favorites** - Save favorite spells (localStorage)
- ✅ **State handling:**
  - ⏳ Loading - Loading indicator
  - ❌ Error - Error message on failure
  - 📭 No data - Message when no results
- ✅ **Responsive interface** - Bootstrap 5 + custom CSS

### 🎨 Design and UX

- Themed interface with "ancient tome" style
- D&D-inspired color palette
- Fully responsive (mobile, tablet, desktop)
- Smooth animations and transitions

---

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Page navigation
- **Bootstrap 5** - CSS framework
- **LocalStorage API** - Favorites persistence
- **Fetch API** - HTTP requests
- **CSS3** - Custom styles

---

## 📁 Project Structure

```
dnd-spellbook/
├── public/                   # Static files
├── src/
│   ├── components/           # Reusable components
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Footer.jsx       # Footer
│   │   └── SpellCard.jsx    # Spell card
│   │
│   ├── pages/               # Application pages
│   │   ├── Home.jsx         # Home page (explains project and API)
│   │   ├── Spells.jsx       # Spell list
│   │   ├── SpellDetail.jsx  # Spell detail
│   │   └── MyBook.jsx       # Favorite spells
│   │
│   ├── services/            # Services
│   │   ├── api.js          # Functions to consume the API
│   │   └── favorites.js    # Favorites management (localStorage)
│   │
│   ├── App.jsx              # Main component with routes
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
│
├── index.html               # Base HTML
├── package.json             # Dependencies
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

---

## 🚀 How to Run

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/VitorDSAndrade/dnd-spellbook.git
cd dnd-spellbook
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

4. **Open your browser:**

Navigate to `http://localhost:5173`

### Production Build

To create the optimized production version:

```bash
npm run build
```

Files will be in the `dist/` folder

To preview the build:

```bash
npm run preview
```

---

## 📦 Project Delivery

This project includes:

✅ **Complete source code** on GitHub: [https://github.com/VitorDSAndrade/dnd-spellbook](https://github.com/VitorDSAndrade/dnd-spellbook)

✅ **ZIP file** of the project (without `node_modules`)

✅ **README** with installation and execution instructions

✅ **Online application** (deployed on Vercel): [https://dnd-spellbook-two.vercel.app](https://dnd-spellbook-two.vercel.app)

---

## 🎯 Extra Features Implemented

### 1. **Search System**
Real-time search by spell name, with instant results as the user types.

### 2. **Level Filters**
Allows filtering spells by level (0 = Cantrip, 1-9 = spell slot levels).

### 3. **Sorting**
- By name (A→Z or Z→A)
- By level (Cantrip→9 or 9→Cantrip)

### 4. **Pagination**
Configurable pagination system that allows choosing how many spells to display per page (10, 25, 50, or 100).

### 5. **Favorites System**
Allows saving favorite spells using localStorage, creating a "personal book" that persists between sessions.

---

## 🔄 State Handling

### Loading
```javascript
{loading && (
  <div className="text-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
)}
```

### Error
```javascript
{error && (
  <div className="alert alert-danger" role="alert">
    {error}
  </div>
)}
```

### No Data
```javascript
{!loading && !error && spells.length === 0 && (
  <div className="alert alert-info">
    No spells found.
  </div>
)}
```

---

## 📱 Responsiveness

The application is fully responsive, adapting to different screen sizes:

- **Mobile** (< 768px): Single column layout
- **Tablet** (768px - 1024px): 2-column grid
- **Desktop** (> 1024px): 3-column grid

Uses Bootstrap's grid system and custom CSS media queries.

---

## 📄 License

Project developed for educational purposes as a React class assignment.

**Legal Note:** Dungeons & Dragons is a registered trademark of Wizards of the Coast LLC. This project uses data from the System Reference Document (SRD) under the Open Gaming License (OGL). Not affiliated with Wizards of the Coast.

---

## 👤 Author

**Vitor Andrade**

- GitHub: [@VitorDSAndrade](https://github.com/VitorDSAndrade)
- Project: [dnd-spellbook](https://github.com/VitorDSAndrade/dnd-spellbook)
- Demo: [https://dnd-spellbook-two.vercel.app](https://dnd-spellbook-two.vercel.app)

---

## 🙏 Acknowledgments

- [D&D 5e API](https://www.dnd5eapi.co/) - Free public API
- [Wizards of the Coast](https://dnd.wizards.com/) - D&D SRD
- [React](https://react.dev/) - UI framework
- [Vite](https://vitejs.dev/) - Build tool
- [Bootstrap](https://getbootstrap.com/) - CSS framework

---

<div align="center">

**React Class Project - 2024/2025** 🎲

</div>