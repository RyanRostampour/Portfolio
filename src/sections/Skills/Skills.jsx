import styles from "./SkillsStyles.module.css";
import htmlIcon from "../../assets/html.png";
import cssIcon from "../../assets/css.png";
import javascriptIcon from "../../assets/javascript.svg";
import typescriptIcon from "../../assets/typescript.svg";
import reactIcon from "../../assets/react.svg";
import nodejsIcon from "../../assets/node.svg";
import vueIcon from "../../assets/vue.svg";
import tailwindIcon from "../../assets/tailwind.svg";
import reduxIcon from "../../assets/redux.svg";
import webpackIcon from "../../assets/webpack.svg";
import gitIcon from "../../assets/git.svg";
import jestIcon from "../../assets/jest.png";
import bootstrapIcon from "../../assets/bootstrap.svg";
import SkillList from "../../common/SkillList";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={htmlIcon} skill="HTML" />
        <SkillList src={cssIcon} skill="CSS" />
        <SkillList src={javascriptIcon} skill="JavaScript" />
        <SkillList src={typescriptIcon} skill="TypeScript" />
        <SkillList src={nodejsIcon} skill="Node" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={reactIcon} skill="React" />
        <SkillList src={vueIcon} skill="Vue" />
        <SkillList src={tailwindIcon} skill="Tailwind CSS" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={reduxIcon} skill="Redux" />
        <SkillList src={webpackIcon} skill="Webpack" />
        <SkillList src={gitIcon} skill="Git" />
        <SkillList src={jestIcon} skill="Jest" />
        <SkillList src={bootstrapIcon} skill="Bootstrap" />
      </div>
    </section>
  );
}

export default Skills;
