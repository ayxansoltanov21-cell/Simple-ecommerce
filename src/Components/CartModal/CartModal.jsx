import { useNavigate } from "react-router-dom";
import styles from "./CartModal.module.css";

function CartModal({ setShowModal, cart = [] }) {
  const navigate = useNavigate();

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className={styles.overlay} onClick={() => setShowModal(false)}>
      <div className={styles.cartDrawer} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>Ürün sepete eklendi.</h2>

          <button
            className={styles.closeButton}
            onClick={() => setShowModal(false)}
          >
            &times;
          </button>
        </div>

        <p className={styles.cartCount}>Sepetinizde {totalQuantity} ürün var</p>

        <div className={styles.products}>
          {cart.map((item) => (
            <div className={styles.productSection} key={item.id}>
              <div className={styles.productImage}>
                <img src={item.image} alt={item.name} />
              </div>

              <div className={styles.productInfo}>
                <h3>{item.name}</h3>
                <p>{item.category}</p>
                <span>Adet: {item.quantity}</span>
              </div>

              <div className={styles.priceSection}>
                <p className={styles.currentPrice}>
                  {(item.price * item.quantity).toFixed(2)} ₼
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <button
            className={styles.cartButton}
            onClick={() => {
              setShowModal(false);
              navigate("/products/cart");
            }}
          >
            Sepete git
          </button>

          <button
            className={styles.checkoutButton}
            onClick={() => {
              setShowModal(false);
              navigate("/products/cart");
            }}
          >
            Sipariş verin
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
