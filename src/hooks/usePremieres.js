import { useCallback, useEffect, useState } from "react";
import { rawPremieres } from "../data/rawMovies";
import { adaptMovies } from "../utils/movieAdapter";

// Simulates a network request. States: "loading" | "success" | "error".
// With simulateError, the first attempt fails and a retry succeeds.
export function usePremieres({ simulateError = false, delay = 1500 } = {}) {
  const [state, setState] = useState({ status: "loading", data: [], error: null });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setState({ status: "loading", data: [], error: null });

    const timerId = setTimeout(() => {
      if (cancelled) return;
      if (simulateError && attempt === 0) {
        setState({
          status: "error",
          data: [],
          error: "No pudimos cargar los estrenos. Revisa tu conexión e inténtalo de nuevo.",
        });
      } else {
        setState({ status: "success", data: adaptMovies(rawPremieres), error: null });
      }
    }, delay);

    return () => {
      cancelled = true;
      clearTimeout(timerId);
    };
  }, [attempt, simulateError, delay]);

  const retry = useCallback(() => setAttempt((n) => n + 1), []);
  return { ...state, retry };
}
