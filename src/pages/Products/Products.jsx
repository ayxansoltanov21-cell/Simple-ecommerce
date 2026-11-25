import Card from "../../Components/Card/Card";
import products from "../../mock/products";
import styles from "./Products.module.css";

function Products({ cart, setCart, setLastAddedProduct }) {
  return (
    <section className={styles.productsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <span className={styles.subtitle}>OUR COLLECTION</span>

            <h1 className={styles.title}>All Products</h1>

            <p className={styles.description}>
              Discover our latest products and find what you need.
            </p>
          </div>

          <span className={styles.productCount}>
            {products.length} Products
          </span>
        </div>

        <div className={styles.productsGrid}>
          {products.map((product) => (
            <Card
              key={product.id}
              product={product}
              cart={cart}
              setCart={setCart}
              setLastAddedProduct={setLastAddedProduct}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
