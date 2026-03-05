import { motion } from "framer-motion";
import styles from "./AboutStyles.module.css";

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
      <motion.h1
        className="sectionTitle"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease }}
      >
        About
      </motion.h1>
      <motion.div
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <motion.p variants={itemVariants} className={styles.lead}>
          I&apos;m a Computer Science graduate student at the University of Windsor,
          where I work as a Graduate Research Assistant investigating how AI systems
          can be compromised — and how to stop it.
        </motion.p>
        <motion.p variants={itemVariants}>
          My research sits at the intersection of machine learning security and software
          engineering. I focus on the gap between what language models are designed to do
          and what they can be secretly made to do — building detection systems that
          identify backdoored models before they cause harm.
        </motion.p>
        <motion.p variants={itemVariants}>
          Outside of research, I build across the stack. I care about software that is
          both intelligent and reliable, and I think the best engineers are the ones who
          understand how systems fail, not just how they succeed.
        </motion.p>
      </motion.div>
    </section>
  );
}

export default About;
