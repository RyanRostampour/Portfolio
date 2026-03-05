import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import styles from "./ScrollProgress.module.css";

function ScrollProgress() {
  const raw = useMotionValue(0);
  const smooth = useSpring(raw, { stiffness: 300, damping: 40, restDelta: 0.001 });
  const width = useTransform(smooth, (v) => `${v}%`);

  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      raw.set((scrollTop / (scrollHeight - clientHeight)) * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [raw]);

  return <motion.div className={styles.bar} style={{ width }} />;
}

export default ScrollProgress;
