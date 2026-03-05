import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          link="https://github.com/RyanRostampour/Detecting-Sleeper-Agents-in-LLMs-via-Semantic-Drift-Analysis"
          h3="LLM Sleeper Agent Detection"
          p="Detecting backdoored LLMs in real time via semantic drift analysis and canary baseline monitoring. Achieved 92.5% accuracy and zero false positives."
          tags={["Python", "PyTorch", "Sentence-BERT", "Transformers"]}
          accent="linear-gradient(135deg, #6a11cb, #2575fc)"
        />
        <ProjectCard
          link="https://github.com/RyanRostampour/Binary-Decision-Diagrams-for-Prime-Number-Detection"
          h3="Prime Number Classification"
          p="Comparing BDD, Decision Tree, and Neural Network approaches for prime classification across 16–24-bit integers. Neural network achieved 92–95% accuracy."
          tags={["Python", "scikit-learn", "BDD", "Neural Network"]}
          accent="linear-gradient(135deg, #11998e, #38ef7d)"
        />
        <ProjectCard
          link="https://github.com/RyanRostampour/Portfolio"
          h3="Portfolio"
          p="Personal portfolio built with React and Vue.js featuring dark/light mode, responsive design, and a functional contact form."
          tags={["React", "Vue.js", "CSS Modules", "Vite"]}
          accent="linear-gradient(135deg, #f7971e, #ffd200)"
        />
      </div>
    </section>
  );
}

export default Projects;
