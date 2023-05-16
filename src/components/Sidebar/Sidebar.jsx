import { NavLink } from "react-router-dom";
import styles from "../../styles/Sidebar.module.css";

export const Sidebar = () => {
  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>CATEGORIES</div>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li className="">
            <NavLink>Link</NavLink>
          </li>
        </ul>
      </nav>

      <div className={styles.footer}>
        <a href="/" target="_blank" className={styles.link}>
          Help
        </a>
        <a href="/" target="_blank" className={styles.link}>
          Terms & Conditions
        </a>
      </div>
    </section>
  );
};
