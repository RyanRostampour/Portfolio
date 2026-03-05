import styles from "./SkillsStyles.module.css";
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
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={pythonIcon} skill="Python" />
        <SkillList src={javaIcon} skill="Java" />
        <SkillList src={cIcon} skill="C" />
        <SkillList src={javascriptIcon} skill="JavaScript" />
        <SkillList src={htmlIcon} skill="HTML" />
        <SkillList src={cssIcon} skill="CSS" />
        <SkillList src={mysqlIcon} skill="SQL" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={reactIcon} skill="React" />
        <SkillList src={vueIcon} skill="Vue.js" />
        <SkillList src={bootstrapIcon} skill="Bootstrap" />
        <SkillList src={scikitlearnIcon} skill="scikit-learn" />
        <SkillList src={androidIcon} skill="Android SDK" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={pytorchIcon} skill="PyTorch" />
        <SkillList src={gitIcon} skill="Git" />
        <SkillList src={linuxIcon} skill="Linux" />
      </div>
    </section>
  );
}

export default Skills;
