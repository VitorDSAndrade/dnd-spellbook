// src/services/api.js

const BASE_URL = "https://www.dnd5eapi.co/api/2014";

// Vai buscar a lista de magias
export async function fetchSpells() {
  const res = await fetch(`${BASE_URL}/spells`);

  if (!res.ok) {
    throw new Error("Erro ao carregar lista de magias");
  }

  const data = await res.json();

  // A API devolve um objeto com { count, results: [...] }
  return data.results ?? data;
}

export async function fetchSpellByIndex(index) {
  const res = await fetch(`${BASE_URL}/spells/${index}`);

  if (!res.ok) {
    throw new Error("Erro ao carregar detalhes da magia");
  }

  return res.json();
}

