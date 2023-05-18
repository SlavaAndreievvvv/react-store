import { Link } from "react-router-dom";
import styles from "../../styles/Categories.module.css";

export const Categories = ({ title, products = [], amount }) => {
  const list = products.filter((_, i) => i < amount);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.list}>
        {list.map(({ id, name, image }) => {
          return (
            <Link key={id} to={`/categories/${id}`} className={styles.item}>
              <div
                className={styles.image}
                style={{ backgroundImage: `url(${image[0]})` }}
              />
              <h3 className={styles.title}>{name}</h3>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
