import { useEffect, useState } from "react";
import { getFavoriteSpellIndexes } from "../services/favorites";

export default function Navbar({ currentPage, onNavigate }) {
  const [favCount, setFavCount] = useState(0);

  useEffect(() => {
    function refresh() {
      setFavCount(getFavoriteSpellIndexes().length);
    }

    refresh();
    window.addEventListener("favorites-changed", refresh);
    return () => window.removeEventListener("favorites-changed", refresh);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <button
          className="navbar-brand btn btn-link text-decoration-none"
          onClick={() => onNavigate("home")}
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
                className={`nav-link btn btn-link ${
                  currentPage === "home" ? "active" : ""
                }`}
                onClick={() => onNavigate("home")}
              >
                Home
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link btn btn-link ${
                  currentPage === "spells" ? "active" : ""
                }`}
                onClick={() => onNavigate("spells")}
              >
                Spells
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link btn btn-link d-flex align-items-center gap-2 ${
                  currentPage === "mybook" ? "active" : ""
                }`}
                onClick={() => onNavigate("mybook")}
              >
                My Book
                <span className="badge text-bg-danger">{favCount}</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
