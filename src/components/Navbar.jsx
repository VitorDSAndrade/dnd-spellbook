// src/components/Navbar.jsx
export default function Navbar({ currentPage, onNavigate }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <button
          className="navbar-brand btn btn-link text-decoration-none"
          onClick={() => onNavigate('home')}
        >
          D&D 5e Spellbook
        </button>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link ${currentPage === 'home' ? 'active' : ''}`}
                onClick={() => onNavigate('home')}
              >
                Home
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link btn btn-link ${currentPage === 'spells' ? 'active' : ''}`}
                onClick={() => onNavigate('spells')}
              >
                Spells
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
