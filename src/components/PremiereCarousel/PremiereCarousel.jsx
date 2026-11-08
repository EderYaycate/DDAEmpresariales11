import { useWindowSize } from "../../hooks/useWindowSize";
import "./PremiereCarousel.css";

export default function PremiereCarousel({ premieres }) {
  const { width } = useWindowSize();
  const visible = width < 600 ? 1 : width < 900 ? 2 : 3;

  return (
    <ul className="carousel" style={{ "--visible": visible }}>
      {premieres.map((movie) => (
        <li key={movie.id} className="carousel__item" style={{ "--hue": movie.hue }}>
          <div className="carousel__poster">
            <span>{movie.title}</span>
          </div>
          <p className="carousel__genres">{movie.genres.join(", ")}</p>
          <p>{movie.synopsis}</p>
        </li>
      ))}
    </ul>
  );
}
