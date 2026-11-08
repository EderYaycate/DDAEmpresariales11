import { useEffect, useState } from "react";

// Returns `value` only after it has stopped changing for `delay` ms.
export function useDebounce(value, delay = 300) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timerId);
  }, [value, delay]);

  return debounced;
}
