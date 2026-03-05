import styles from "./SkillList.module.css";

function SkillList({ src, skill }) {
  return (
    <span className={styles.item}>
      <img src={src} alt={skill} />
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;
