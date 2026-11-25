
import styles from "./ProductNotFound.module.css";

function ProductNotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <span className={styles.icon}>🔍</span>
        </div>

        <span className={styles.errorCode}>404 ERROR</span>

        <h1 className={styles.title}>Product Not Found</h1>

        <p className={styles.description}>
          Sorry, we couldn't find the product you're looking for. It may have
          been removed or is currently unavailable.
        </p>

        <button className={styles.homeButton}>Back to Products</button>
      </div>
    </div>
  );
}

export default ProductNotFound;
