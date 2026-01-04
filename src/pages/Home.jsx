// src/pages/Home.jsx
export default function Home() {
  return (
    <div className="mt-4">
      <h1 className="tome-title mb-3">D&amp;D 5e Spellbook</h1>

      {/* Intro */}
      <div className="card tome-panel mb-3">
        <div className="card-body">
          <p className="mb-2">
            This website is a library for the spells of{" "}
            <strong>Dungeons &amp; Dragons 5th Edition (2014)</strong>.
            You can browse spells, open full details, and build{" "}
            <strong>My Book</strong> (your personal favourites) for quick
            reference during a session.
          </p>

          <p className="mb-0">
            All spell data is loaded in real time from the public REST API:{" "}
            <a href="https://www.dnd5eapi.co" target="_blank" rel="noreferrer">
              https://www.dnd5eapi.co
            </a>
            .
          </p>
        </div>
      </div>

      {/* Quick glossary */}
      <div className="card tome-panel mb-4">
        <div className="card-header">Quick Glossary</div>
        <div className="card-body">
          <div className="d-flex flex-wrap gap-2">
            <span className="badge rounded-pill text-bg-dark">Cantrip</span>
            <span className="badge rounded-pill text-bg-dark">Spell Level</span>
            <span className="badge rounded-pill text-bg-dark">Spell Slot</span>
            <span className="badge rounded-pill text-bg-dark">Casting Time</span>
            <span className="badge rounded-pill text-bg-dark">Range</span>
            <span className="badge rounded-pill text-bg-dark">Duration</span>
            <span className="badge rounded-pill text-bg-dark">Components (V/S/M)</span>
            <span className="badge rounded-pill text-bg-dark">Concentration</span>
            <span className="badge rounded-pill text-bg-dark">Ritual</span>
            <span className="badge rounded-pill text-bg-dark">Upcasting</span>
          </div>
          <p className="mt-3 mb-0">
            New to D&amp;D magic? Open the sections below — they explain how spells work
            in a beginner-friendly way.
          </p>
        </div>
      </div>

      {/* Interactive explanations */}
      <div className="accordion" id="spellbookAccordion">
        {/* What are spells */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What are spells in D&amp;D 5e?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#spellbookAccordion"
          >
            <div className="accordion-body">
              <p className="mb-2">
                A <strong>spell</strong> is a magical effect a character can cast, such as
                dealing damage (e.g., <em>Fireball</em>), healing allies (e.g., <em>Cure Wounds</em>),
                controlling the battlefield (e.g., <em>Web</em>), or gathering information
                (e.g., <em>Detect Magic</em>).
              </p>
              <p className="mb-0">
                Spells are usually tied to a <strong>class</strong> (Wizard, Cleric, Bard, etc.),
                and each spell has rules that tell you how it works: level, casting time, range,
                duration, and components.
              </p>
            </div>
          </div>
        </div>

        {/* Levels & cantrips */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Spell Levels vs Character Level (and Cantrips)
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#spellbookAccordion"
          >
            <div className="accordion-body">
              <p className="mb-2">
                In D&amp;D, <strong>spell level</strong> is not the same as your character level.
                Spells go from <strong>0 (Cantrips)</strong> to <strong>9</strong>.
              </p>
              <ul className="mb-2">
                <li>
                  <strong>Cantrips (Level 0)</strong>: basic magic you can cast{" "}
                  <strong>as many times as you want</strong>.
                </li>
                <li>
                  <strong>Level 1–9 spells</strong>: stronger effects that usually require{" "}
                  <strong>spell slots</strong>.
                </li>
              </ul>
              <p className="mb-0">
                As you level up, you gain access to higher-level spells and more spell slots.
              </p>
            </div>
          </div>
        </div>

        {/* Slots & preparing */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Spell Slots, “Known” vs “Prepared” spells
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#spellbookAccordion"
          >
            <div className="accordion-body">
              <p className="mb-2">
                Most classes cast spells using <strong>spell slots</strong>. Think of slots as
                your “magical ammunition” for the day.
              </p>
              <ul className="mb-2">
                <li>
                  <strong>Known spells</strong>: you permanently know a limited list
                  (common for Sorcerer, Bard, Warlock).
                </li>
                <li>
                  <strong>Prepared spells</strong>: you choose a subset each day from a bigger list
                  (common for Cleric, Druid, Paladin; Wizards also prepare from their spellbook).
                </li>
              </ul>
              <p className="mb-0">
                When you cast most spells, you spend a slot of that spell’s level (or higher).
                Slots usually reset after a <strong>long rest</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Components */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Components (V, S, M) — what do they mean?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#spellbookAccordion"
          >
            <div className="accordion-body">
              <p className="mb-2">
                Components tell you what is required to cast the spell:
              </p>
              <ul className="mb-2">
                <li>
                  <strong>V (Verbal)</strong>: you must speak magical words (you can’t be silenced).
                </li>
                <li>
                  <strong>S (Somatic)</strong>: you need hand gestures (hands must be free).
                </li>
                <li>
                  <strong>M (Material)</strong>: you need specific items (sometimes a focus can replace them).
                </li>
              </ul>
              <p className="mb-0">
                If a spell lists <strong>Material</strong> with a gold cost, you usually need that exact item.
              </p>
            </div>
          </div>
        </div>

        {/* Concentration, Ritual, Upcasting */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Concentration, Ritual casting, and Upcasting
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#spellbookAccordion"
          >
            <div className="accordion-body">
              <ul className="mb-2">
                <li>
                  <strong>Concentration</strong>: you can maintain only{" "}
                  <strong>one concentration spell at a time</strong>. Taking damage may force a check.
                </li>
                <li>
                  <strong>Ritual</strong>: some spells can be cast without spending a slot,
                  but they take longer (if your class allows ritual casting).
                </li>
                <li>
                  <strong>Upcasting</strong>: casting a spell using a higher-level slot can make it stronger
                  (damage, targets, duration, etc., depending on the spell).
                </li>
              </ul>
              <p className="mb-0">
                In this Spellbook, check each spell’s details page to see if it has these rules.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="card tome-panel mt-4">
        <div className="card-body d-flex flex-wrap align-items-center justify-content-between gap-2">
          <div>
            <strong>Ready to explore?</strong>
            <div className="small">
              Use the navigation menu to open the Spell List, then click a spell to read full details.
            </div>
          </div>

          <div className="d-flex gap-2">
            <span className="badge text-bg-dark">Tip</span>
            <span className="small">
              Star ⭐ spells to save them in <strong>My Book</strong>.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
