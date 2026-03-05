import { useRef, useEffect } from "react";
import styles from "./CursorSpotlight.module.css";

function CursorSpotlight() {
  const ref = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      if (ref.current) {
        ref.current.style.background = `radial-gradient(650px circle at ${e.clientX}px ${e.clientY}px, rgba(9, 135, 242, 0.13), transparent 80%)`;
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return <div ref={ref} className={styles.spotlight} />;
}

export default CursorSpotlight;
