import styles from "./ProjectsStyles.module.css";
import mastermind from "../../assets/mastermind.png";
import flightsimulator from "../../assets/flightsimulator.png";
import currencyConverter from "../../assets/currencyConverter.png";
import portfolio from "../../assets/portfolio.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={flightsimulator}
          link="https://github.com/RyanRostampour/Detecting-Sleeper-Agents-in-LLMs-via-Semantic-Drift-Analysis"
          h3="Sleeper Agents"
          p="LLM Sleeper Agents via Semantic Drift Analysis"
        />
        <ProjectCard
          src={currencyConverter}
          link="https://github.com/RyanRostampour/Binary-Decision-Diagrams-for-Prime-Number-Detection"
          h3="Prime Number Binary Decision Diagrams"
          p="Binary Decision Diagrams for Prime Number Detection"
        />
        <ProjectCard
          src={mastermind}
          link="https://github.com/comp2800/project/tree/FlightSimulator"
          h3="Flight Simulator"
          p="3D Flight Simulator Game"
        />
        <ProjectCard
          src={portfolio}
          link="https://github.com/RyanRostampour/Portfolio"
          h3="Portfolio"
          p="Current Portfolio"
        />
      </div>
    </section>
  );
}

export default Projects;
