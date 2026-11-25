import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import products from "../../mock/products";
import styles from '../ProductDetails/Details.module.css'
import ProductNotFound from '../NotFound/ProductNotFound/ProductNotFound';
function Details() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find((x) => x.id === Number(id));

    setProduct(foundProduct || null);
  }, [id]);

  if (!product) {
    return <ProductNotFound/>;
  }

return (
  <section className={styles.detailsSection}>
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <span>Home</span>
        <span>/</span>
        <span>Products</span>
        <span>/</span>
        <strong>{product.name}</strong>
      </div>

      <div className={styles.detailsCard}>
        {/* Product Image */}
        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            <img
              src={product.image}
              alt={product.name}
              className={styles.productImage}
            />
            <span className={styles.category}>{product.category}</span>
          </div>
        </div>

        {/* Product Information */}
        <div className={styles.infoSection}>
          <span className={styles.productLabel}>PREMIUM PRODUCT</span>

          <h1 className={styles.productName}>{product.name}</h1>

          <div className={styles.rating}>
            <span className={styles.stars}>★★★★★</span>
            <span className={styles.ratingValue}>{product.rating}</span>
            <span className={styles.reviewText}>Customer Rating</span>
          </div>

          <p className={styles.description}>{product.description}</p>

          <div className={styles.divider}></div>

          <div className={styles.priceSection}>
            <span className={styles.priceLabel}>Price</span>
            <h2 className={styles.price}>${product.price}</h2>
          </div>

          <div className={styles.stockStatus}>
            <span className={styles.stockDot}></span>
            In Stock
          </div>

          <div className={styles.actions}>
            <button className={styles.addToCart}>Add to Cart</button>

            <button className={styles.buyNow}>Buy Now</button>
          </div>

          <div className={styles.features}>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>🚚</span>
              <div>
                <h4>Free Delivery</h4>
                <p>On orders over $100</p>
              </div>
            </div>

            <div className={styles.feature}>
              <span className={styles.featureIcon}>↩</span>
              <div>
                <h4>Easy Returns</h4>
                <p>30 days return policy</p>
              </div>
            </div>

            <div className={styles.feature}>
              <span className={styles.featureIcon}>🛡️</span>
              <div>
                <h4>Secure Payment</h4>
                <p>100% secure checkout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

}

export default Details;
