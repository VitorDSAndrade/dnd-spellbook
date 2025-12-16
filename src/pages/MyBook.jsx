import { useEffect, useMemo, useState } from "react";
import {
  clearFavoriteSpells,
  getFavoriteSpellIndexes,
} from "../services/favorites";
import SpellCard from "../components/SpellCard";

export default function MyBook({ allSpells, onSelectSpell }) {
  const [favoriteIndexes, setFavoriteIndexes] = useState([]);

  function refreshFavorites() {
    setFavoriteIndexes(getFavoriteSpellIndexes());
  }

  useEffect(() => {
    refreshFavorites();

    function onFavChanged() {
      refreshFavorites();
    }

    window.addEventListener("favorites-changed", onFavChanged);
    return () => window.removeEventListener("favorites-changed", onFavChanged);
  }, []);

  const favoriteSpells = useMemo(() => {
    return allSpells.filter((s) => favoriteIndexes.includes(s.index));
  }, [allSpells, favoriteIndexes]);

  function handleClear() {
    clearFavoriteSpells();
  }

  return (
    <div className="mt-4">
      <div className="d-flex align-items-start justify-content-between gap-3 mb-3">
        <div>
          <h2 className="mb-1">My Book ⭐</h2>
          <p className="text-muted mb-0">
            {favoriteIndexes.length} spell{favoriteIndexes.length === 1 ? "" : "s"} saved
          </p>
        </div>

        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={handleClear}
          disabled={favoriteIndexes.length === 0}
          title="Remove all saved spells"
        >
          Clear My Book
        </button>
      </div>

      {favoriteIndexes.length === 0 ? (
        <p>
          You haven’t added any favorite spells yet. Go to the spell list and
          press ☆.
        </p>
      ) : favoriteSpells.length === 0 ? (
        <p>Loading your favorite spells...</p>
      ) : (
        <div className="row g-3">
          {favoriteSpells.map((spell) => (
            <div key={spell.index} className="col-md-4">
              <SpellCard spell={spell} onSelectSpell={onSelectSpell} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
