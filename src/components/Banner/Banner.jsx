import { X } from "lucide-react";
import "./Banner.css";

export default function Banner({ activeFilter, resultCount, onClearFilter }) {
  return (
    <div className="banner">
      <h2 id="billboard-title">En cartelera hoy</h2>
      {activeFilter ? (
        <p className="banner__filter">
          {resultCount} {resultCount === 1 ? "resultado" : "resultados"} para “{activeFilter}”
          <button type="button" className="banner__clear" onClick={onClearFilter}>
            <X size={14} aria-hidden="true" /> Limpiar filtro
          </button>
        </p>
      ) : (
        <p>Busca por título o género y marca tus favoritas.</p>
      )}
    </div>
  );
}
