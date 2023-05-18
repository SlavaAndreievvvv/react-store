import { Link } from "react-router-dom";
import styles from "../../styles/Products.module.css";

export const Products = ({ title, style = {}, products = [], amount }) => {
  const list = products.filter((_, i) => i < amount);

  return (
    <section className={styles.products} style={style}>
      {title && <h1>{title}</h1>}
      <div className={styles.list}>
        {list.map(({ id, images, title, category: { name: cat }, price }) => (
          <Link to={`/products/${id}`} key={id} className={styles.product}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${images[0]})` }}
            />

            <div className={styles.wrapper}>
              <h2 className={styles.title}>{title}</h2>
              <div className={styles.cat}>{cat}</div>
              <div className={styles.info}>
                <div className={styles.prices}>{price}$</div>
                <div className={styles.oldPrice}>
                  {Math.floor(price * 0.8)}$
                </div>
                <div className={styles.purchases}>
                  {Math.floor(Math.random() * 20 + 1)} purchased
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
