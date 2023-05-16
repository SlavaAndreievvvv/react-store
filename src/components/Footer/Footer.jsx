import { Link } from "react-router-dom";

import { ROUTES } from "../../utils/routes";
import LOGO from "../../images/logo.svg";

import styles from "../../styles/Footer.module.css";

export const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="logo" />
        </Link>
      </div>

      <div className={styles.rights}>
        Developed by{" "}
        <a href="/" target="_blank" rel="noreferrer">
          Slava Andreiev
        </a>
      </div>

      <div className={styles.socials}>
        <a href="/" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`/public/sprite.svg#instagram`} />
          </svg>
        </a>
        <a href="/" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`/public/sprite.svg#facebook`} />
          </svg>
        </a>
        <a href="/" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`/public/sprite.svg#youtube`} />
          </svg>
        </a>
      </div>
    </section>
  );
};
