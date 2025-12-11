import { useEffect, useState } from "react";
import { fetchSpells } from "../services/api";
import SpellCard from "../components/SpellCard";

export default function Spells({ onSelectSpell }) {
  const [spells, setSpells] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [levelFilter, setLevelFilter] = useState("all");

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchSpells();
        setSpells(data);
      } catch (err) {
        setError(err.message || "Error loading spells");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  // Build unique level options
  const levelOptions = Array.from(
    new Set(
      spells
        .map((s) => s.level)
        .filter((lvl) => lvl !== undefined && lvl !== null)
    )
  ).sort((a, b) => a - b);

  // Filter + sort
  const filteredSpells = spells
    .filter((spell) => {
      const matchesSearch = spell.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesLevel =
        levelFilter === "all" || spell.level === Number(levelFilter);

      return matchesSearch && matchesLevel;
    })
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      }
      return b.name.localeCompare(a.name);
    });

  if (loading) return <p>Loading spells...</p>;
  if (error) return <p className="text-danger">Error: {error}</p>;

  return (
    <div className="mt-4">
      <h2 className="mb-3">Spell List</h2>

      {/* Search + Sort + Level filter */}
      <div className="row mb-3 g-2">
        <div className="col-lg-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search for spells..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="col-md-3">
          <select
            className="form-select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Name (A → Z)</option>
            <option value="desc">Name (Z → A)</option>
          </select>
        </div>

        <div className="col-md-3">
          <select
            className="form-select"
            value={levelFilter}
            onChange={(e) => setLevelFilter(e.target.value)}
          >
            <option value="all">All Levels</option>
            {levelOptions.map((lvl) => (
              <option key={lvl} value={lvl}>
                Level {lvl}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Spell cards */}
      <div className="row g-3">
        {filteredSpells.map((spell) => (
          <div key={spell.index} className="col-md-4">
            <SpellCard spell={spell} onSelectSpell={onSelectSpell} />
          </div>
        ))}
      </div>
    </div>
  );
}
