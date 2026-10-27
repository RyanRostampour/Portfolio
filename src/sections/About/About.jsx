import { motion } from "framer-motion";
import styles from "./AboutStyles.module.css";
import SectionTitle from "../../common/SectionTitle";

const ease = [0.25, 0.46, 0.45, 0.94];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

function About() {
  return (
    <section id="about" className={styles.container}>
      <SectionTitle>About</SectionTitle>
      <motion.div
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <motion.p variants={itemVariants} className={styles.lead}>
          I&apos;m a software developer and Computer Science graduate student at the
          University of Windsor, where I work as a Graduate Research Assistant building
          software at the intersection of ML and security.
        </motion.p>
        <motion.blockquote variants={itemVariants} className={styles.highlight}>
          I think the best engineers are the ones who understand how systems fail,
          not just how they succeed.
        </motion.blockquote>
        <motion.p variants={itemVariants}>
          My background spans full-stack development, machine learning, and systems
          programming. One of my most significant projects achieved 92.5% accuracy
          detecting backdoored LLMs - combining semantic drift analysis with
          activation-level inspection to expose hidden behaviors that survive fine-tuning.
        </motion.p>
        <motion.p variants={itemVariants}>
          I care about software that is both intelligent and reliable, and I bring that
          mindset whether I&apos;m building a web app, a CLI tool, or an ML pipeline.
        </motion.p>
      </motion.div>
    </section>
  );
}

export default About;
