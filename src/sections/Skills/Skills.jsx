import { motion } from "framer-motion";
import styles from "./SkillsStyles.module.css";
import SectionTitle from "../../common/SectionTitle";

const categories = [
  { name: "Languages", skills: ["Python", "Java", "JavaScript", "C", "SQL", "HTML / CSS"] },
  { name: "AI & Machine Learning", skills: ["PyTorch", "TensorFlow", "Hugging Face", "scikit-learn", "NumPy", "NLP / LLMs"] },
  { name: "Web & Frameworks", skills: ["React", "Vue.js", "Node.js", "Bootstrap", "Express"] },
  { name: "Tools & Platforms", skills: ["Git", "Linux", "Android SDK"] },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, delay: i * 0.03, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <SectionTitle>Skills</SectionTitle>
      <div className={styles.grid}>
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.name}
            className={styles.card}
            custom={ci}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            <span className={styles.categoryName}>{cat.name}</span>
            <div className={styles.tags}>
              {cat.skills.map((skill, si) => (
                <motion.span
                  key={skill}
                  className={styles.tag}
                  custom={ci * 6 + si}
                  variants={tagVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
