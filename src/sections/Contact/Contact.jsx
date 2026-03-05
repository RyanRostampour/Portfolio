import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./ContactStyles.module.css";

const ease = [0.25, 0.46, 0.45, 0.94];

function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const res = await fetch("https://formspree.io/f/xzzpdlve", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(e.target),
    });
    if (res.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className={styles.container}>
      <motion.h1
        className="sectionTitle"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease }}
      >
        Contact
      </motion.h1>

      {status === "success" ? (
        <motion.div
          className={styles.success}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease }}
        >
          <p>Message sent! I&apos;ll get back to you soon.</p>
        </motion.div>
      ) : (
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease, delay: 0.15 }}
        >
          <div className={styles.field}>
            <input type="text" name="name" id="name" placeholder=" " required />
            <label htmlFor="name">Name</label>
          </div>
          <div className={styles.field}>
            <input type="email" name="email" id="email" placeholder=" " required />
            <label htmlFor="email">Email</label>
          </div>
          <div className={`${styles.field} ${styles.fieldTextarea}`}>
            <textarea name="message" id="message" placeholder=" " required></textarea>
            <label htmlFor="message">Message</label>
          </div>
          {status === "error" && (
            <p className={styles.errorMsg}>Something went wrong. Please try again.</p>
          )}
          <button
            className={`hover ${styles.submit}`}
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Submit"}
          </button>
        </motion.form>
      )}
    </section>
  );
}

export default Contact;
