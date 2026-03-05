import { motion } from "framer-motion";
import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <motion.h1
        className="sectionTitle"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        Projects
      </motion.h1>
      <motion.div
        className={styles.projectsContainer}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <ProjectCard
          variants={itemVariants}
          link="https://github.com/RyanRostampour/Detecting-Sleeper-Agents-in-LLMs-via-Semantic-Drift-Analysis"
          h3="LLM Sleeper Agent Detection"
          p="Detecting backdoored LLMs in real time via semantic drift analysis and canary baseline monitoring. Achieved 92.5% accuracy and zero false positives."
          tags={["Python", "PyTorch", "Sentence-BERT", "Transformers"]}
          accent="linear-gradient(135deg, #6a11cb, #2575fc)"
          glowColor="rgba(37, 117, 252, 0.35)"
        />
        <ProjectCard
          variants={itemVariants}
          link="https://github.com/RyanRostampour/Binary-Decision-Diagrams-for-Prime-Number-Detection"
          h3="Prime Number Classification"
          p="Comparing BDD, Decision Tree, and Neural Network approaches for prime classification across 16–24-bit integers. Neural network achieved 92–95% accuracy."
          tags={["Python", "scikit-learn", "BDD", "Neural Network"]}
          accent="linear-gradient(135deg, #11998e, #38ef7d)"
          glowColor="rgba(17, 153, 142, 0.35)"
        />
        <ProjectCard
          variants={itemVariants}
          link="https://github.com/RyanRostampour/Portfolio"
          h3="Portfolio"
          p="Personal portfolio built with React and Vue.js featuring dark/light mode, responsive design, and a functional contact form."
          tags={["React", "Vue.js", "CSS Modules", "Vite"]}
          accent="linear-gradient(135deg, #f7971e, #ffd200)"
          glowColor="rgba(247, 151, 30, 0.35)"
        />
      </motion.div>
    </section>
  );
}

export default Projects;
