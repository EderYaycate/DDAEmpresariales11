// Adapter pattern: converts one raw API movie into the model the UI uses.
const FALLBACK_PLOT = "Sin sinopsis disponible.";

function hashToHue(text) {
  let hash = 0;
  for (const char of text) hash = (hash * 31 + char.charCodeAt(0)) % 360;
  return (hash * 47) % 360; // spread similar ids across the color wheel
}

export function adaptMovie(raw) {
  const rating = Number.parseFloat(raw.imdbRating);
  const genres = raw.Genre && raw.Genre !== "N/A" ? raw.Genre.split(",").map((g) => g.trim()) : [];
  return {
    id: raw.imdbID,
    title: raw.Title,
    year: Number(raw.Year),
    genres,
    rating: Number.isNaN(rating) ? null : rating,
    synopsis: raw.Plot && raw.Plot !== "N/A" ? raw.Plot : FALLBACK_PLOT,
    hue: hashToHue(raw.imdbID),
  };
}

export const adaptMovies = (rawList) => rawList.map(adaptMovie);
