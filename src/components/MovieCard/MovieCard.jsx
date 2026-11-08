import { Heart } from "lucide-react";
import "./MovieCard.css";

export default function MovieCard({ movie, isFavorite, onToggle }) {
  return (
    <article className="card">
      <div className="card__poster" style={{ "--hue": movie.hue }}>
        <span>{movie.title}</span>
      </div>
      <div className="card__body">
        <h3>{movie.title}</h3>
        <p className="card__meta">
          {movie.year}
          {movie.rating !== null && ` · ★ ${movie.rating.toFixed(1)}`}
        </p>
        <p className="card__genres">{movie.genres.join(", ") || "Género por confirmar"}</p>
        <button
          type="button"
          className={`card__fav${isFavorite ? " card__fav--on" : ""}`}
          aria-pressed={isFavorite}
          onClick={() => onToggle(movie)}
        >
          <Heart size={16} fill={isFavorite ? "currentColor" : "none"} aria-hidden="true" />
          {isFavorite ? "Quitar de favoritas" : "Añadir a favoritas"}
        </button>
      </div>
    </article>
  );
}
