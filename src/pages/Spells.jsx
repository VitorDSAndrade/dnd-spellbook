import { useEffect, useMemo, useState } from "react";
import SpellCard from "../components/SpellCard";

export default function Spells({ onSelectSpell, spellsFromApp = [] }) {
  const [spells, setSpells] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("name-asc");
  const [levelFilter, setLevelFilter] = useState("all");

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);

  useEffect(() => {
    setSpells(spellsFromApp);
  }, [spellsFromApp]);

  const levelOptions = useMemo(() => {
    return Array.from(
      new Set(
        spells
          .map((s) => s.level)
          .filter((lvl) => lvl !== undefined && lvl !== null)
      )
    ).sort((a, b) => a - b);
  }, [spells]);

  const filteredSortedSpells = useMemo(() => {
    return spells
      .filter((spell) => {
        const matchesSearch = spell.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

        const matchesLevel =
          levelFilter === "all" || spell.level === Number(levelFilter);

        return matchesSearch && matchesLevel;
      })
      .sort((a, b) => {
        switch (sortOrder) {
          case "name-asc":
            return a.name.localeCompare(b.name);
          case "name-desc":
            return b.name.localeCompare(a.name);
          case "level-asc":
            return (a.level ?? 0) - (b.level ?? 0);
          case "level-desc":
            return (b.level ?? 0) - (a.level ?? 0);
          default:
            return 0;
        }
      });
  }, [spells, searchTerm, levelFilter, sortOrder]);

  useEffect(() => {
    setPage(1);
  }, [searchTerm, levelFilter, sortOrder, pageSize]);

  const total = filteredSortedSpells.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  const safePage = Math.min(page, totalPages);
  const startIndex = (safePage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, total);

  const pageSpells = filteredSortedSpells.slice(startIndex, endIndex);

  function prevPage() {
    setPage((p) => Math.max(1, p - 1));
  }

  function nextPage() {
    setPage((p) => Math.min(totalPages, p + 1));
  }

  return (
    <div className="mt-4">
      <h2 className="mb-3 tome-title">Spell List</h2>

      {/* Tome toolbar panel */}
      <div className="card tome-panel mb-3">
        <div className="card-body">
          <div className="row g-2 align-items-center">
            <div className="col-lg-5">
              <label className="form-label fw-semibold mb-1">Search</label>
              <input
                type="text"
                className="form-control"
                placeholder="Search for spells..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="col-md-3">
              <label className="form-label fw-semibold mb-1">Sort</label>
              <select
                className="form-select"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="name-asc">Name (A → Z)</option>
                <option value="name-desc">Name (Z → A)</option>
                <option value="level-asc">Spell Level (0 → 9)</option>
                <option value="level-desc">Spell Level (9 → 0)</option>
              </select>
            </div>

            <div className="col-md-2">
              <label className="form-label fw-semibold mb-1">Level</label>
              <select
                className="form-select"
                value={levelFilter}
                onChange={(e) => setLevelFilter(e.target.value)}
              >
                <option value="all">All</option>
                {levelOptions.map((lvl) => (
                  <option key={lvl} value={lvl}>
                    {lvl === 0 ? "Cantrip" : `Level ${lvl}`}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-2">
              <label className="form-label fw-semibold mb-1">Per page</label>
              <select
                className="form-select"
                value={pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
              >
                <option value={6}>6</option>
                <option value={12}>12</option>
                <option value={24}>24</option>
                <option value={48}>48</option>
              </select>
            </div>
          </div>

          <hr className="tome-divider" />

          <div className="d-flex flex-wrap gap-2 align-items-center justify-content-between">
            <span className="badge text-bg-dark">
              Showing {total === 0 ? 0 : startIndex + 1}–{endIndex} of {total}
            </span>

            <div className="d-flex align-items-center gap-2">
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={prevPage}
                disabled={safePage === 1}
              >
                Previous
              </button>

              <span className="small text-muted">
                Page <strong>{safePage}</strong> / {totalPages}
              </span>

              <button
                className="btn btn-outline-primary btn-sm"
                onClick={nextPage}
                disabled={safePage === totalPages || total === 0}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      {total === 0 ? (
        <p>No spells found for the current filters.</p>
      ) : (
        <div className="row g-3">
          {pageSpells.map((spell) => (
            <div key={spell.index} className="col-md-4">
              <SpellCard spell={spell} onSelectSpell={onSelectSpell} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
