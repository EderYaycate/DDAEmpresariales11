import "./Skeleton.css";

// Placeholder shown while a section is loading.
export default function Skeleton({ width = "100%", height = "1rem", className = "" }) {
  return <div className={`skeleton ${className}`} style={{ width, height }} aria-hidden="true" />;
}
