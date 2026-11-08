import { Search } from "lucide-react";
import "./SearchBar.css";

export default function SearchBar({ value, onChange }) {
  return (
    <label className="search">
      <Search size={18} aria-hidden="true" />
      <input
        type="search"
        value={value}
        placeholder="Título o género, por ejemplo “sci-fi”"
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}
