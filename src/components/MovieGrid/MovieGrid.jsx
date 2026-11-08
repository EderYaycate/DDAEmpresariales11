import { useWindowSize } from "../../hooks/useWindowSize";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieGrid.css";

function columnsFor(width) {
  if (width < 600) return 1;
  if (width < 900) return 2;
  if (width < 1200) return 3;
  return 4;
}

export default function MovieGrid({ movies, filter, favoriteIds, onToggleFavorite }) {
  const { width } = useWindowSize();

  if (movies.length === 0) {
    return (
      <p className="empty">
        Ninguna película coincide con “{filter}”. Prueba con otro título o con un género.
      </p>
    );
  }

  return (
    <div className="grid" style={{ gridTemplateColumns: `repeat(${columnsFor(width)}, 1fr)` }}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavorite={favoriteIds.has(movie.id)}
          onToggle={onToggleFavorite}
        />
      ))}
    </div>
  );
}
