import { motion } from "framer-motion";
import styles from "./ProjectCard.module.css";

function ProjectCard({ link, h3, p, tags, accent, glowColor, variants }) {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--mx", `${x}%`);
    e.currentTarget.style.setProperty("--my", `${y}%`);
  };

  return (
    <motion.div
      className={styles.card}
      variants={variants}
      style={{
        backgroundImage: accent || "linear-gradient(135deg, #0987f2, #6dd5fa)",
        "--glow": glowColor || "rgba(9, 135, 242, 0.3)",
        "--mx": "50%",
        "--my": "50%",
      }}
      onMouseMove={handleMouseMove}
    >
      <div className={styles.body}>
        <h3 className={styles.title}>{h3}</h3>
        <p className={styles.description}>{p}</p>
        {tags && (
          <div className={styles.tags}>
            {tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        )}
        <a href={link} target="_blank" rel="noreferrer" className={styles.link}>
          View on GitHub →
        </a>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
