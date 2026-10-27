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
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.1, ease }}
      >
        <motion.img
          className={styles.hero}
          src={heroImg}
          alt="Profile Picture of Ryan Rostampour"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </motion.div>
      <div className={styles.info}>
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
        >
          <span className={styles.badgeDot} />
          M.Sc. CS · University of Windsor
        </motion.div>
        <div className={styles.nameBlock}>
          <div className={styles.nameWrapper}>
            <motion.span
              className={styles.gradientName}
              initial={{ y: "115%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              Ryan
            </motion.span>
          </div>
          <div className={styles.nameWrapper}>
            <motion.span
              className={styles.gradientName}
              initial={{ y: "115%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
            >
              Rostampour
            </motion.span>
          </div>
        </div>
        <motion.h2
          className={styles.subtitle}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease }}
        >
          Software Developer & M.Sc. CS
        </motion.h2>
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7, ease }}
        >
          <a
            href="https://www.linkedin.com/in/ryan-rostampour-201a81201/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="LinkedIn Icon" />
          </a>
          <a href="https://github.com/RyanRostampour" target="_blank">
            <img src={githubIcon} alt="GitHub Icon" />
          </a>
        </motion.span>
        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.85, ease }}
        >
          Building software that's intelligent and reliable -<br />
          from full-stack apps to ML-powered research tools.
        </motion.p>
        <motion.a
          href="/Ryan_Rostampour_Resume.pdf"
          download="Ryan_Rostampour_Resume.pdf"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0, ease }}
        >
          <button className="hover">Resume</button>
        </motion.a>
      </div>
      <a href="#about" className={styles.scrollIndicator} aria-label="Scroll to about">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </a>
    </section>
  );
}

export default Hero;
