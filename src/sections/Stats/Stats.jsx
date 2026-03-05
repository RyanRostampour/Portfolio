import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./StatsStyles.module.css";

function StatItem({ value, decimals = 0, suffix = "", label, sublabel, delay = 0 }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    let startTime;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * value;
      setDisplay(decimals ? Math.round(current * 10) / 10 : Math.round(current));
      if (progress < 1) requestAnimationFrame(step);
    };

    const timeout = setTimeout(() => requestAnimationFrame(step), delay);
    return () => clearTimeout(timeout);
  }, [isInView, value, decimals, delay]);

  return (
    <motion.div
      ref={ref}
      className={styles.stat}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: delay / 1000 }}
    >
      <span className={styles.number}>
        {display}{suffix}
      </span>
      <span className={styles.label}>{label}</span>
      {sublabel && <span className={styles.sublabel}>{sublabel}</span>}
    </motion.div>
  );
}

function Stats() {
  return (
    <section className={styles.container}>
      <StatItem
        value={92.5} decimals={1} suffix="%" delay={0}
        label="Detection Accuracy"
        sublabel="LLM backdoor detection research"
      />
      <StatItem
        value={0} suffix="" delay={150}
        label="False Positives"
        sublabel="across all test datasets"
      />
      <StatItem
        value={3} suffix="+" delay={300}
        label="Projects"
        sublabel="open source on GitHub"
      />
      <StatItem
        value={10} suffix="+" delay={450}
        label="Technologies"
        sublabel="languages, frameworks & tools"
      />
    </section>
  );
}

export default Stats;
