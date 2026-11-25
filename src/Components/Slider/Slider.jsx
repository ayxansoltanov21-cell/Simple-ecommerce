import { useRef } from "react";

import styles from "./Slider.module.css";
import products from "../../mock/products";
import Card from "../Card/Card";

function Slider({
  category = "LAPTOP",
  cart = [],
  setCart,
  setLastAddedProduct,
}) {
  const sliderRef = useRef(null);

  const filteredProducts = products.filter(
    (product) => product.category === category,
  );

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  if (filteredProducts.length === 0) {
    return null;
  }

  return (
    <div className={styles.sliderContainer}>
      <h2 className={styles.sliderTitle}>{category} məhsulları</h2>

      <button className={`${styles.arrow} ${styles.left}`} onClick={scrollLeft}>
        &#10094;
      </button>

      <div className={styles.slider} ref={sliderRef}>
        {filteredProducts.map((product) => (
          <div className={styles.slideItem} key={product.id}>
            <Card
              product={product}
              cart={cart}
              setCart={setCart}
              setLastAddedProduct={setLastAddedProduct}
            />
          </div>
        ))}
      </div>

      <button
        className={`${styles.arrow} ${styles.right}`}
        onClick={scrollRight}
      >
        &#10095;
      </button>
    </div>
  );
}

export default Slider;
