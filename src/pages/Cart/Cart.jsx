import styles from "./Cart.module.css";
import Slider from "../../Components/Slider/Slider";

function Cart({ cart, setCart, lastAddedProduct, setLastAddedProduct }) {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  function increaseQuantity(id) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  function decreaseQuantity(id) {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function removeProduct(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  const recommendationCategory =
    lastAddedProduct?.category || cart[0]?.category;

  return (
    <section className={styles.cartPage}>
      <div className={styles.container}>
        <div className={styles.breadcrumb}>
          <span>Home</span>
          <span>/</span>
          <span>Cart</span>
        </div>

        <h1 className={styles.title}>Səbət ({totalQuantity})</h1>

        {cart.length === 0 ? (
          <div className={styles.emptyCart}>
            <h2>Səbət boşdur</h2>
            <p>Hələ səbətə heç bir məhsul əlavə etməmisiniz.</p>
          </div>
        ) : (
          <div className={styles.cartLayout}>
            <div className={styles.cartProducts}>
              {cart.map((item) => (
                <div className={styles.cartItem} key={item.id}>
                  <div className={styles.imageBox}>
                    <img src={item.image} alt={item.name} />
                  </div>

                  <div className={styles.productInfo}>
                    <h3>{item.name}</h3>
                    <p>{item.category}</p>

                    <p className={styles.price}>
                      {Number(item.price).toFixed(2)} ₼
                    </p>

                    <div className={styles.quantity}>
                      <button onClick={() => decreaseQuantity(item.id)}>
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button onClick={() => increaseQuantity(item.id)}>
                        +
                      </button>
                    </div>
                  </div>

                  <div className={styles.itemRight}>
                    <p className={styles.itemTotal}>
                      {(item.price * item.quantity).toFixed(2)} ₼
                    </p>

                    <button
                      className={styles.removeBtn}
                      onClick={() => removeProduct(item.id)}
                    >
                      Sil
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.summary}>
              <h2>Sifariş xülasəsi</h2>

              <div className={styles.summaryRow}>
                <span>Məhsullar ({totalQuantity})</span>
                <span>{subtotal.toFixed(2)} ₼</span>
              </div>

              <div className={styles.summaryRow}>
                <span>Çatdırılma</span>
                <span>0.00 ₼</span>
              </div>

              <div className={styles.summaryTotal}>
                <span>Total</span>
                <span>{subtotal.toFixed(2)} ₼</span>
              </div>

              <button className={styles.checkoutBtn}>Sifarişi tamamla</button>
            </div>
          </div>
        )}

        {recommendationCategory && (
          <div className={styles.recommendations}>
            <h2>Sizin üçün tövsiyələr</h2>

            <Slider
              category={recommendationCategory}
              cart={cart}
              setCart={setCart}
              setLastAddedProduct={setLastAddedProduct}
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;
