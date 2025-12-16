import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Spells from "./pages/Spells";
import SpellDetail from "./pages/SpellDetail";
import MyBook from "./pages/MyBook";
import { fetchSpells } from "./services/api";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedSpellIndex, setSelectedSpellIndex] = useState(null);

  // NEW: keep all spells in App so MyBook can use them
  const [allSpells, setAllSpells] = useState([]);
  const [spellsLoading, setSpellsLoading] = useState(true);
  const [spellsError, setSpellsError] = useState(null);

  useEffect(() => {
    async function loadSpells() {
      try {
        setSpellsLoading(true);
        setSpellsError(null);
        const data = await fetchSpells();
        setAllSpells(data);
      } catch (err) {
        setSpellsError(err.message || "Error loading spells");
      } finally {
        setSpellsLoading(false);
      }
    }

    loadSpells();
  }, []);

  function handleNavigate(page) {
    setCurrentPage(page);
  }

  function handleSelectSpell(index) {
    setSelectedSpellIndex(index);
    setCurrentPage("detail");
  }

  function handleBackToList() {
    setCurrentPage("spells");
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="flex-fill container my-4 p-4 shadow-lg">

        {currentPage === "home" && <Home />}

        {currentPage === "spells" && (
          <>
            {spellsLoading && <p>Loading spells...</p>}
            {spellsError && <p className="text-danger">Error: {spellsError}</p>}
            {!spellsLoading && !spellsError && (
              <Spells onSelectSpell={handleSelectSpell} spellsFromApp={allSpells} />
            )}
          </>
        )}

        {currentPage === "mybook" && (
          <>
            {spellsLoading && <p>Loading spells...</p>}
            {spellsError && <p className="text-danger">Error: {spellsError}</p>}
            {!spellsLoading && !spellsError && (
              <MyBook allSpells={allSpells} onSelectSpell={handleSelectSpell} />
            )}
          </>
        )}

        {currentPage === "detail" && selectedSpellIndex && (
          <SpellDetail spellIndex={selectedSpellIndex} onBack={handleBackToList} />
        )}
      </main>

      <Footer />
    </div>
  );
}
