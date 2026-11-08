import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import Billboard from "./components/Billboard/Billboard";
import Header from "./components/Header/Header";
import PremiereSection from "./components/PremiereSection/PremiereSection";
import { rawMovies } from "./data/rawMovies";
import { adaptMovies } from "./utils/movieAdapter";

const movies = adaptMovies(rawMovies);

export default function App() {
  // Favorites live here: Header (count) and the cards (toggle) both need them.
  const [favoriteIds, setFavoriteIds] = useState(() => new Set());

  const toggleFavorite = (movie) => {
    const wasFavorite = favoriteIds.has(movie.id);
    setFavoriteIds((previous) => {
      const next = new Set(previous);
      if (wasFavorite) next.delete(movie.id);
      else next.add(movie.id);
      return next;
    });
    // The card only calls onToggle; how the message is shown is decided here.
    toast(wasFavorite ? `Quitaste “${movie.title}” de favoritas` : `Añadiste “${movie.title}” a favoritas`);
  };

  return (
    <>
      <Header favoritesCount={favoriteIds.size} />
      <main className="page">
        <Billboard movies={movies} favoriteIds={favoriteIds} onToggleFavorite={toggleFavorite} />
        <PremiereSection />
      </main>
      <Toaster position="bottom-center" />
    </>
  );
}
