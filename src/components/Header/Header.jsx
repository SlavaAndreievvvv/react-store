import { Link } from "react-router-dom";

import { ROUTES } from "../../utils/routes";
import LOGO from "../../images/logo.svg";
import AVATAR from "../../images/avatar.jpg";

import styles from "../../styles/Header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="logo" />
        </Link>
      </div>

      <div className={styles.info}>
        <div className={styles.user}>
          <div
            className={styles.avatar}
            style={{ backgroundImage: `url(${AVATAR})` }}
          />
          <div className={styles.username}>guest</div>
        </div>

        <form className={styles.form}>
          <div className={styles.icon}>
            <svg className="icon">
              <use xlinkHref={`/public/sprite.svg#search`} />
            </svg>
          </div>
          <div className={styles.styles}>
            <input
              type="search"
              name="search"
              placeholder="Search..."
              autoComplete="off"
              onChange={() => {}}
              value=""
            />
          </div>
          {false && <div className={styles.box}></div>}
        </form>

        <div className={styles.account}>
          <Link to={ROUTES.HOME} className={styles.favorites}>
            <svg className={styles["icon-fav"]}>
              <use xlinkHref={`/public/sprite.svg#heart`} />
            </svg>
          </Link>
          <Link to={ROUTES.CART} className={styles.cart}>
            <svg className={styles["icon-cart"]}>
              <use xlinkHref={`/public/sprite.svg#bag`} />
            </svg>
            <span className={styles.count}>2</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
