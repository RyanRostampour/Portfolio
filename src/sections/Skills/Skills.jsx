import { motion } from "framer-motion";
import styles from "./SkillsStyles.module.css";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};
import htmlIcon from "../../assets/html.svg";
import cssIcon from "../../assets/css.svg";
import javascriptIcon from "../../assets/javascript.svg";
import pythonIcon from "../../assets/python.svg";
import javaIcon from "../../assets/java.svg";
import cIcon from "../../assets/c.svg";
import mysqlIcon from "../../assets/mysql.svg";
import reactIcon from "../../assets/react.svg";
import vueIcon from "../../assets/vue.svg";
import bootstrapIcon from "../../assets/bootstrap.svg";
import scikitlearnIcon from "../../assets/scikitlearn.svg";
import gitIcon from "../../assets/git.svg";
import linuxIcon from "../../assets/linux.svg";
import androidIcon from "../../assets/android.svg";
import pytorchIcon from "../../assets/pytorch.svg";
import SkillList from "../../common/SkillList";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <motion.h1
        className="sectionTitle"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        Skills
      </motion.h1>
      <motion.div
        className={styles.skillList}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <motion.span variants={itemVariants}><SkillList src={pythonIcon} skill="Python" /></motion.span>
        <motion.span variants={itemVariants}><SkillList src={javaIcon} skill="Java" /></motion.span>
        <motion.span variants={itemVariants}><SkillList src={cIcon} skill="C" /></motion.span>
        <motion.span variants={itemVariants}><SkillList src={javascriptIcon} skill="JavaScript" /></motion.span>
        <motion.span variants={itemVariants}><SkillList src={htmlIcon} skill="HTML" /></motion.span>
        <motion.span variants={itemVariants}><SkillList src={cssIcon} skill="CSS" /></motion.span>
        <motion.span variants={itemVariants}><SkillList src={mysqlIcon} skill="SQL" /></motion.span>
      </motion.div>
      <hr />
      <motion.div
        className={styles.skillList}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <motion.span variants={itemVariants}><SkillList src={reactIcon} skill="React" /></motion.span>
        <motion.span variants={itemVariants}><SkillList src={vueIcon} skill="Vue.js" /></motion.span>
        <motion.span variants={itemVariants}><SkillList src={bootstrapIcon} skill="Bootstrap" /></motion.span>
        <motion.span variants={itemVariants}><SkillList src={scikitlearnIcon} skill="scikit-learn" /></motion.span>
        <motion.span variants={itemVariants}><SkillList src={androidIcon} skill="Android SDK" /></motion.span>
      </motion.div>
      <hr />
      <motion.div
        className={styles.skillList}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <motion.span variants={itemVariants}><SkillList src={pytorchIcon} skill="PyTorch" /></motion.span>
        <motion.span variants={itemVariants}><SkillList src={gitIcon} skill="Git" /></motion.span>
        <motion.span variants={itemVariants}><SkillList src={linuxIcon} skill="Linux" /></motion.span>
      </motion.div>
    </section>
  );
}

export default Skills;
