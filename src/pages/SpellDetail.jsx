import { useEffect, useState } from "react";
import { fetchSpellByIndex } from "../services/api";
import { isFavoriteSpell, toggleFavoriteSpell } from "../services/favorites";

function levelLabel(level) {
  if (level === 0) return "Cantrip";
  return `Level ${level}`;
}

export default function SpellDetail({ spellIndex, onBack }) {
  const [spell, setSpell] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchSpellByIndex(spellIndex);
        setSpell(data);
      } catch (err) {
        setError(err.message || "Error loading spell details");
      } finally {
        setLoading(false);
      }
    }

    if (spellIndex) {
      load();
      setIsFav(isFavoriteSpell(spellIndex));
    }
  }, [spellIndex]);

  function handleToggleFavorite() {
    const newState = toggleFavoriteSpell(spellIndex);
    setIsFav(newState);
  }

  if (loading) return <p className="mt-4">Loading spell details...</p>;
  if (error) return <p className="mt-4 text-danger">Error: {error}</p>;
  if (!spell) return <p className="mt-4">Spell not found.</p>;

  const {
    name,
    level,
    casting_time,
    range,
    duration,
    components,
    material,
    desc,
    higher_level,
    classes,
    school,
    ritual,
    concentration,
  } = spell;

  return (
    <div className="mt-3">
      {/* Top actions */}
      <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
        <button className="btn btn-secondary" onClick={onBack}>
          ← Back to Spell List
        </button>

        <button
          type="button"
          className={`btn ${isFav ? "btn-primary" : "btn-outline-primary"}`}
          onClick={handleToggleFavorite}
          title={isFav ? "Remove from My Book" : "Add to My Book"}
        >
          {isFav ? "★ Favorited" : "☆ Add to My Book"}
        </button>
      </div>

      {/* Header */}
      <div className="mb-3">
        <h2 className="mb-2">{name}</h2>

        <div className="d-flex flex-wrap gap-2">
          <span className="badge rounded-pill text-bg-dark">
            {levelLabel(level ?? 0)}
          </span>

          {school?.name && (
            <span className="badge rounded-pill text-bg-warning">
              {school.name}
            </span>
          )}

          {ritual && <span className="badge rounded-pill text-bg-secondary">Ritual</span>}
          {concentration && (
            <span className="badge rounded-pill text-bg-secondary">Concentration</span>
          )}
        </div>
      </div>

      <div className="row g-3">
        {/* Left: stats in a card */}
        <div className="col-lg-5">
          <div className="card shadow-sm">
            <div className="card-header fw-semibold">Spell Details</div>

            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between">
                <span className="fw-semibold">Casting Time</span>
                <span className="text-end">{casting_time ?? "—"}</span>
              </li>

              <li className="list-group-item d-flex justify-content-between">
                <span className="fw-semibold">Range</span>
                <span className="text-end">{range ?? "—"}</span>
              </li>

              <li className="list-group-item d-flex justify-content-between">
                <span className="fw-semibold">Duration</span>
                <span className="text-end">{duration ?? "—"}</span>
              </li>

              <li className="list-group-item">
                <div className="fw-semibold">Components</div>
                <div>{components ? components.join(", ") : "—"}</div>
                {material && (
                  <div className="mt-2 small">
                    <span className="fw-semibold">Material:</span> {material}
                  </div>
                )}
              </li>

              {classes?.length ? (
                <li className="list-group-item">
                  <div className="fw-semibold">Available For</div>
                  <div>{classes.map((c) => c.name).join(", ")}</div>
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        {/* Right: description blocks */}
        <div className="col-lg-7">
          <div className="card shadow-sm">
            <div className="card-header fw-semibold">Description</div>
            <div className="card-body">
              {Array.isArray(desc) ? (
                desc.map((p, i) => (
                  <p key={i} className="mb-2">
                    {p}
                  </p>
                ))
              ) : (
                <p className="mb-0">{desc ?? "No description available."}</p>
              )}
            </div>
          </div>

          {higher_level ? (
            <div className="card shadow-sm mt-3">
              <div className="card-header fw-semibold">At Higher Levels</div>
              <div className="card-body">
                {Array.isArray(higher_level) ? (
                  higher_level.map((p, i) => (
                    <p key={i} className="mb-2">
                      {p}
                    </p>
                  ))
                ) : (
                  <p className="mb-0">{higher_level}</p>
                )}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
