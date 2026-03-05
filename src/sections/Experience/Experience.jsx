import { motion } from "framer-motion";
import styles from "./ExperienceStyles.module.css";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

function Experience() {
  return (
    <section id="experience" className={styles.container}>
      <motion.h1
        className="sectionTitle"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        Experience
      </motion.h1>

      <div className={styles.columns}>
        <div className={styles.column}>
          <h2 className={styles.columnTitle}>Work</h2>
          <motion.div
            className={styles.timeline}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.div className={styles.item} variants={itemVariants}>
              <div className={styles.dot} />
              <div className={styles.content}>
                <span className={styles.date}>2025 – Present</span>
                <h3 className={styles.role}>Graduate Research Assistant</h3>
                <p className={styles.org}>University of Windsor</p>
                <p className={styles.desc}>
                  Conducting research on AI security and backdoor detection in large language models. Developed novel semantic drift analysis achieving 92.5% detection accuracy with zero false positives.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className={styles.column}>
          <h2 className={styles.columnTitle}>Education</h2>
          <motion.div
            className={styles.timeline}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.div className={styles.item} variants={itemVariants}>
              <div className={styles.dot} />
              <div className={styles.content}>
                <span className={styles.date}>2025 – Present</span>
                <h3 className={styles.role}>M.Sc. Computer Science</h3>
                <p className={styles.org}>University of Windsor</p>
                <p className={styles.desc}>
                  Specializing in machine learning and software development. Research focused on AI security, adversarial robustness, and backdoor detection in large language models.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
