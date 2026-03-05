import styles from "./FooterStyles.module.css";

function Footer() {
  return (
    <footer id="footer" className={styles.container}>
      <p>&copy; 2026 Ryan Rostampour. All Rights Reserved.</p>
      <a href="#hero" className={styles.backToTop} aria-label="Back to top">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </a>
    </footer>
  );
}

export default Footer;
