

export default function SpellCard({ spell, onSelectSpell }) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{spell.name}</h5>

        <button
          className="btn btn-outline-primary mt-auto"
          onClick={() => onSelectSpell(spell.index)}
        >
          View details
        </button>
      </div>
    </div>
  )
}
