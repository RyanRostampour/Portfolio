import { motion } from "framer-motion";

function SectionTitle({ children }) {
  return (
    <motion.h1
      className="sectionTitle"
      initial={{ opacity: 0, y: 36, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.h1>
  );
}

export default SectionTitle;
