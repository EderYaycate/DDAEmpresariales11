import { Clapperboard, Heart } from "lucide-react";
import { useWindowSize } from "../../hooks/useWindowSize";
import "./Header.css";

// Receives only a number, never the favorites list.
export default function Header({ favoritesCount }) {
  const { width } = useWindowSize();
  const isCompact = width < 600;

  return (
    <header className="header">
      <div className="header__brand">
        <Clapperboard size={24} aria-hidden="true" />
        <span>{isCompact ? "Cartelera" : "Cartelera de cine"}</span>
      </div>
      <div className="header__favorites" aria-live="polite">
        <Heart size={18} aria-hidden="true" />
        <span>{isCompact ? favoritesCount : `${favoritesCount} favoritas`}</span>
      </div>
    </header>
  );
}
