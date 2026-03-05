import styles from "./ProjectCard.module.css";

function ProjectCard({ link, h3, p, tags, accent }) {
  return (
    <div
      className={styles.card}
      style={{ backgroundImage: accent || "linear-gradient(135deg, #0987f2, #6dd5fa)" }}
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
    </div>
  );
}

export default ProjectCard;
