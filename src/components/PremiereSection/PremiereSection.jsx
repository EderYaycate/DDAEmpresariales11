import { RefreshCw } from "lucide-react";
import { usePremieres } from "../../hooks/usePremieres";
import PremiereCarousel from "../PremiereCarousel/PremiereCarousel";
import Skeleton from "../Skeleton/Skeleton";
import "./PremiereSection.css";

// Open /?premieres=error to see the error state.
const simulateError = new URLSearchParams(window.location.search).get("premieres") === "error";

export default function PremiereSection() {
  const { status, data, error, retry } = usePremieres({ simulateError });

  return (
    <section className="premieres" aria-labelledby="premieres-title" aria-busy={status === "loading"}>
      <h2 id="premieres-title">Próximos estrenos</h2>

      {status === "loading" && (
        <div className="premieres__skeletons">
          {[0, 1, 2].map((n) => (
            <div key={n}>
              <Skeleton height="190px" />
              <Skeleton width="60%" height="1rem" className="skeleton--gap" />
              <Skeleton width="90%" height="0.8rem" className="skeleton--gap" />
            </div>
          ))}
        </div>
      )}

      {status === "error" && (
        <div className="premieres__error" role="alert">
          <p>{error}</p>
          <button type="button" onClick={retry}>
            <RefreshCw size={16} aria-hidden="true" /> Reintentar
          </button>
        </div>
      )}

      {status === "success" && <PremiereCarousel premieres={data} />}
    </section>
  );
}
