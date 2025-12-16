import { useEffect, useState } from "react";
import { isFavoriteSpell, toggleFavoriteSpell } from "../services/favorites";

function levelLabel(level) {
  if (level === 0) return "Cantrip";
  return `Level ${level}`;
}

export default function SpellCard({ spell, onSelectSpell }) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    setIsFav(isFavoriteSpell(spell.index));
  }, [spell.index]);

  function handleToggleFavorite(e) {
    e.stopPropagation();
    const newState = toggleFavoriteSpell(spell.index);
    setIsFav(newState);
  }

  return (
    <div className="card tome-card h-100">
      <div className="card-body d-flex flex-column">
        {/* Title + favorite */}
        <div className="d-flex justify-content-between align-items-start gap-2">
          <h5 className="card-title mb-2 me-2">{spell.name}</h5>

          <button
            type="button"
            className={`btn btn-sm ${
              isFav ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={handleToggleFavorite}
            title={isFav ? "Remove from My Book" : "Add to My Book"}
          >
            {isFav ? "★" : "☆"}
          </button>
        </div>

        {/* Level badge */}
        <div className="d-flex flex-wrap gap-2 mb-3">
          <span className="badge rounded-pill text-bg-dark">
            {levelLabel(spell.level ?? 0)}
          </span>
        </div>

        {/* Details */}
        <button
          className="btn btn-outline-primary w-100 mt-auto"
          onClick={() => onSelectSpell(spell.index)}
        >
          View details
        </button>
      </div>
    </div>
  );
}
