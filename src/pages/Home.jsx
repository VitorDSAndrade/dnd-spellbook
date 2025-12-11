// src/pages/Home.jsx
export default function Home() {
  return (
    <div className="mt-4">
      <h1>D&D 5e Spellbook</h1>

      <p>
        This website is a simple spell encyclopedia inspired by{" "}
        <strong>Dungeons & Dragons 5th Edition (2014)</strong>.  
        Here, users can browse and explore different spells from the game.
      </p>

      <p>
        All spell data is loaded in real time from the public REST API:{" "}
        <a
          href="https://www.dnd5eapi.co"
          target="_blank"
          rel="noreferrer"
        >
          https://www.dnd5eapi.co
        </a>
        . This API provides information about spells, classes, monsters,
        equipment and other official D&D content.
      </p>

      <p>
        Use the navigation menu to access the spell list and view each spell's
        detailed description.
      </p>
    </div>
  );
}
