import { useEffect, useState } from "react";
import { fetchSpellByIndex } from "../services/api";

export default function SpellDetail({ spellIndex, onBack }) {
  const [spell, setSpell] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchSpellByIndex(spellIndex);
        setSpell(data);
      } catch (err) {
        setError(err.message || "Erro ao carregar detalhes da magia");
      } finally {
        setLoading(false);
      }
    }

    if (spellIndex) {
      load();
    }
  }, [spellIndex]);

  if (loading) return <p>Loading spell details...</p>;
  if (error) return <p className="text-danger">Erro: {error}</p>;
  if (!spell) return <p>Spell not found.</p>;

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
  } = spell;

  return (
    <div className="mt-4">
      <button className="btn btn-secondary mb-3" onClick={onBack}>
        ← Back to Spell List
      </button>

      <h2 className="mb-3">{name}</h2>

      <div className="row">
        <div className="col-md-6">
          <ul className="list-group mb-3">
            <li className="list-group-item">
              <strong>Level:</strong> {level ?? "—"}
            </li>
            <li className="list-group-item">
              <strong>Casting time:</strong> {casting_time ?? "—"}
            </li>
            <li className="list-group-item">
              <strong>Range:</strong> {range ?? "—"}
            </li>
            <li className="list-group-item">
              <strong>Duration:</strong> {duration ?? "—"}
            </li>
            <li className="list-group-item">
              <strong>Components:</strong>{" "}
              {components ? components.join(", ") : "—"}
            </li>
            {material && (
              <li className="list-group-item">
                <strong>Material Components:</strong> {material}
              </li>
            )}
            {school && (
              <li className="list-group-item">
                <strong>School of Magic:</strong> {school.name ?? "—"}
              </li>
            )}
          </ul>
        </div>

        <div className="col-md-6">
          <div className="mb-3">
            <h5>Duration</h5>
            {Array.isArray(desc) ? (
              desc.map((paragraph, idx) => (
                <p key={idx} className="mb-2">
                  {paragraph}
                </p>
              ))
            ) : (
              <p>{desc ?? "No description avaliable."}</p>
            )}
          </div>

          {higher_level && (
            <div className="mb-3">
              <h5>At Higher Levels</h5>
              {Array.isArray(higher_level) ? (
                higher_level.map((paragraph, idx) => (
                  <p key={idx} className="mb-2">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p>{higher_level}</p>
              )}
            </div>
          )}

          {classes && (
            <div className="mb-3">
              <h5>Classes that can cast this:</h5>
              <p>{classes.map((c) => c.name).join(", ")}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
