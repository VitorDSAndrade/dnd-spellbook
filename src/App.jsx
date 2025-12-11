import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Spells from "./pages/Spells";
import SpellDetail from "./pages/SpellDetail";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedSpellIndex, setSelectedSpellIndex] = useState(null);

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

      <main className="flex-fill container">
        {currentPage === "home" && <Home />}

        {currentPage === "spells" && (
          <Spells onSelectSpell={handleSelectSpell} />
        )}

        {currentPage === "detail" && selectedSpellIndex && (
          <SpellDetail
            spellIndex={selectedSpellIndex}
            onBack={handleBackToList}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}
