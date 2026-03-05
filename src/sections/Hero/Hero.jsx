import { motion } from "framer-motion";
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/heroImg.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import { useTheme } from "../../common/ThemeContext";

const ease = [0.25, 0.46, 0.45, 0.94];

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <motion.div
        className={styles.colorModeContainer}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease }}
      >
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile Picture of Ryan Rostampour"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </motion.div>
      <motion.div
        className={styles.info}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.15 }}
      >
        <h1 className={styles.gradientName}>
          Ryan
          <br />
          Rostampour
        </h1>
        <h2>Software Developer & M.Sc. CS Student</h2>
        <span>
          <a
            href="https://www.linkedin.com/in/ryan-rostampour-201a81201/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="LinkedIn Icon" />
          </a>
          <a href="https://github.com/RyanRostampour" target="_blank">
            <img src={githubIcon} alt="GitHub Icon" />
          </a>
        </span>
        <p className={styles.description}>
          M.Sc. Computer Science student and Graduate Assistant at the
          University of Windsor. Specializing in machine learning and software
          development, with research focused on AI security and backdoor
          detection in large language models.
        </p>
        <a href="/Ryan_Rostampour_Resume.pdf" download="Ryan_Rostampour_Resume.pdf">
          <button className="hover">Resume</button>
        </a>
      </motion.div>
      <a href="#projects" className={styles.scrollIndicator} aria-label="Scroll to projects">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </a>
    </section>
  );
}

export default Hero;
