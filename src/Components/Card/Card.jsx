import { useNavigate } from "react-router-dom";
import { useState } from "react";

import styles from "./Card.module.css";
import CartModal from "../CartModal/CartModal";

function Card({ product, cart = [], setCart, setLastAddedProduct }) {
  const { id, name, category, price, image, description, rating } = product;

  const [isAdded, setIsAdded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  function addCart() {
    setCart((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);

      if (existingProduct) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [
        {
          ...product,
          quantity: 1,
        },
        ...prev,
      ];
    });

    setLastAddedProduct?.(product);
    setIsAdded(true);
    setShowModal(true);
  }

  return (
    <>
      <div className={styles.card}>
        <div
          className={styles.imageContainer}
          onClick={() => navigate("/product-details/" + id)}
        >
          <img src={image} alt={name} className={styles.image} />

          <span className={styles.category}>{category}</span>

          <button
            className={styles.favoriteBtn}
            title="Favorite"
            onClick={(e) => e.stopPropagation()}
          >
            ♡
          </button>
        </div>

        <div className={styles.content}>
          <div className={styles.rating}>
            <span className={styles.star}>★</span>
            <span>{rating}</span>
            <span className={styles.ratingText}> / 5</span>
          </div>

          <h3 className={styles.name}>{name}</h3>

          <p className={styles.description}>{description}</p>

          <div className={styles.footer}>
            <div className={styles.price}>
              <span className={styles.currency}>$</span>
              {price}
            </div>

            <button className={styles.addBtn} onClick={addCart}>
              <span>+</span>
              {isAdded ? "Added" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>

      {showModal && <CartModal cart={cart} setShowModal={setShowModal} />}
    </>
  );
}

export default Card;
