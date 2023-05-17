import { useSelector } from "react-redux";

import { NavLink } from "react-router-dom";
import styles from "../../styles/Sidebar.module.css";

export const Sidebar = ({ amount }) => {
  const { list } = useSelector(({ categories }) => categories);

  const FilteredList = list.filter((_, i) => i < amount);

  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>CATEGORIES</div>
      <nav>
        <ul className={styles.menu}>
          {FilteredList.map(({ id, name }) => (
            <li key={id}>
              <NavLink
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ""}`
                }
                to={`/categories/${id}`}
              >
                {name}
              </NavLink>
            </li>
          ))}
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
