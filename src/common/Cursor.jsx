import { useEffect, useRef } from "react";
import styles from "./Cursor.module.css";

function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;
    let hovering = false;
    let animId;

    const LERP = 0.18;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%))`;
    };

    const onOver = (e) => {
      if (e.target.closest("a, button, [role='button'], .hover")) {
        if (!hovering) {
          hovering = true;
          dot.style.opacity = "0";
          dot.style.transform += " scale(0)";
          ring.style.transform = ring.style.transform + " scale(1.7)";
          ring.style.borderColor = "rgba(255,255,255,0.7)";
        }
      }
    };

    const onOut = (e) => {
      if (!e.relatedTarget?.closest("a, button, [role='button'], .hover")) {
        if (hovering) {
          hovering = false;
          dot.style.opacity = "1";
          ring.style.borderColor = "rgba(255,255,255,0.4)";
        }
      }
    };

    const tick = () => {
      ringX += (mouseX - ringX) * LERP;
      ringY += (mouseY - ringY) * LERP;

      const scale = hovering ? 1.75 : 1;
      ring.style.transform = `translate(calc(${ringX}px - 50%), calc(${ringY}px - 50%)) scale(${scale})`;

      animId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    animId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className={styles.dot} />
      <div ref={ringRef} className={styles.ring} />
    </>
  );
}

export default Cursor;
