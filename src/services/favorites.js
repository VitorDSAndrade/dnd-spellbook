const STORAGE_KEY = "dnd_spellbook_favorite_spells_v1";

export function getFavoriteSpellIndexes() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function isFavoriteSpell(index) {
  return getFavoriteSpellIndexes().includes(index);
}

export function addFavoriteSpell(index) {
  const current = getFavoriteSpellIndexes();
  if (!current.includes(index)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...current, index]));
  }
}

export function removeFavoriteSpell(index) {
  const current = getFavoriteSpellIndexes();
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(current.filter((x) => x !== index))
  );
}

export function notifyFavoritesChanged() {
  // Dispara um evento para atualizar componentes na mesma página
  window.dispatchEvent(new Event("favorites-changed"));
}


export function toggleFavoriteSpell(index) {
  const fav = isFavoriteSpell(index);
  if (fav) {
    removeFavoriteSpell(index);
    notifyFavoritesChanged();
    return false;
  } else {
    addFavoriteSpell(index);
    notifyFavoritesChanged();
    return true;
  }
}

export function clearFavoriteSpells() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
  notifyFavoritesChanged();
}

