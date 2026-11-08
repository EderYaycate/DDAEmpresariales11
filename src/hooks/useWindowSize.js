import { useEffect, useState } from "react";

const read = () => ({ width: window.innerWidth, height: window.innerHeight });

// Tracks the browser window size and cleans up its listener on unmount.
export function useWindowSize() {
  const [size, setSize] = useState(read);

  useEffect(() => {
    const onResize = () => setSize(read());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return size;
}
