import { useMemo, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import Banner from "../Banner/Banner";
import MovieGrid from "../MovieGrid/MovieGrid";
import SearchBar from "../SearchBar/SearchBar";

// Lowest common ancestor of Banner, SearchBar and MovieGrid: the filter lives here.
export default function Billboard({ movies, favoriteIds, onToggleFavorite }) {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 300);
  // Clearing the box applies immediately, so the three siblings never disagree.
  const activeFilter = (query === "" ? "" : debouncedQuery).trim();

  const visibleMovies = useMemo(() => {
    const needle = activeFilter.toLowerCase();
    if (!needle) return movies;
    return movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(needle) ||
        movie.genres.some((genre) => genre.toLowerCase().includes(needle))
    );
  }, [movies, activeFilter]);

  return (
    <section aria-labelledby="billboard-title">
      <Banner
        activeFilter={activeFilter}
        resultCount={visibleMovies.length}
        onClearFilter={() => setQuery("")}
      />
      <SearchBar value={query} onChange={setQuery} />
      <MovieGrid
        movies={visibleMovies}
        filter={activeFilter}
        favoriteIds={favoriteIds}
        onToggleFavorite={onToggleFavorite}
      />
    </section>
  );
}
