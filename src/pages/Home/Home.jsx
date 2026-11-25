import { useNavigate } from "react-router-dom";

import Slider from "../../Components/Slider/Slider";
import products from "../../mock/products";

import styles from "../Home/Home.module.css";

function Home({ cart, setCart, setLastAddedProduct }) {
  const navigate = useNavigate();

  const laptop = products.find((item) => item.category === "LAPTOP");

  const phone = products.find((item) => item.category === "PHONE");

  const featuredProduct = laptop || products[0];

  const categories = [
    {
      name: "Laptops",
      category: "LAPTOP",
      description: "Powerful devices for your work.",
      image: laptop?.image,
    },
    {
      name: "Smartphones",
      category: "PHONE",
      description: "Stay connected everywhere.",
      image: phone?.image,
    },
  ];

  return (
    <main className={styles.home}>
      {/* HERO SECTION */}

      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>
              <span className={styles.badgeDot}></span>
              NEW COLLECTION 2026
            </span>

            <h1>
              Technology
              <br />
              That Moves
              <br />
              <span>With You.</span>
            </h1>

            <p>
              Discover premium electronics, powerful laptops and innovative
              gadgets designed to make your everyday life better.
            </p>

            <div className={styles.heroButtons}>
              <button
                className={styles.primaryBtn}
                onClick={() => navigate("/products")}
              >
                Explore Products
                <span>→</span>
              </button>

              <button
                className={styles.secondaryBtn}
                onClick={() => navigate("/about")}
              >
                Discover More
              </button>
            </div>

            <div className={styles.heroStats}>
              <div>
                <h3>Premium</h3>
                <span>Quality products</span>
              </div>

              <div className={styles.statDivider}></div>

              <div>
                <h3>Secure</h3>
                <span>Shopping experience</span>
              </div>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.visualCircle}></div>

            <div className={styles.visualLabel}>
              <span>FEATURED PRODUCT</span>
              <strong>Editor's Choice</strong>
            </div>

            {featuredProduct && (
              <div className={styles.featuredImage}>
                <img src={featuredProduct.image} alt={featuredProduct.name} />
              </div>
            )}

            {featuredProduct && (
              <div className={styles.floatingCard}>
                <div className={styles.floatingInfo}>
                  <span>OUR PICK</span>
                  <h3>{featuredProduct.name}</h3>
                </div>

                <strong>${Number(featuredProduct.price).toFixed(2)}</strong>
              </div>
            )}

            <div className={styles.visualDecoration}>✦</div>
          </div>
        </div>

        <div className={styles.heroBottom}>
          <span>SCROLL TO DISCOVER</span>
          <span className={styles.scrollLine}></span>
        </div>
      </section>

      {/* BENEFITS SECTION */}

      <section className={styles.benefits}>
        <div className={styles.benefit}>
          <div className={styles.benefitIcon}>↗</div>
          <div>
            <h3>Free Shipping</h3>
            <p>On selected orders</p>
          </div>
        </div>

        <div className={styles.benefit}>
          <div className={styles.benefitIcon}>◇</div>
          <div>
            <h3>Secure Payment</h3>
            <p>Safe transactions</p>
          </div>
        </div>

        <div className={styles.benefit}>
          <div className={styles.benefitIcon}>↻</div>
          <div>
            <h3>Easy Returns</h3>
            <p>Hassle-free returns</p>
          </div>
        </div>

        <div className={styles.benefit}>
          <div className={styles.benefitIcon}>♧</div>
          <div>
            <h3>24/7 Support</h3>
            <p>We're here to help</p>
          </div>
        </div>
      </section>

      {/* CATEGORIES SECTION */}

      <section className={styles.categoriesSection}>
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionSubtitle}>EXPLORE OUR STORE</span>

            <h2>
              Shop by <span>Category</span>
            </h2>

            <p>Find the perfect technology for your lifestyle.</p>
          </div>

          <button
            className={styles.viewAll}
            onClick={() => navigate("/products")}
          >
            View All Products →
          </button>
        </div>

        <div className={styles.categories}>
          {categories.map((item) => (
            <div
              className={styles.categoryCard}
              key={item.category}
              onClick={() => navigate("/products")}
            >
              <div className={styles.categoryText}>
                <span>EXPLORE COLLECTION</span>
                <h3>{item.name}</h3>
                <p>{item.description}</p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/products");
                  }}
                >
                  Shop Now <span>→</span>
                </button>
              </div>

              <div className={styles.categoryImage}>
                {item.image && <img src={item.image} alt={item.name} />}
              </div>

              <span className={styles.categoryNumber}>
                0{categories.indexOf(item) + 1}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* LAPTOP PRODUCTS */}

      <section className={styles.sliderSection}>
        <div className={styles.sliderHeader}>
          <div>
            <span className={styles.sectionSubtitle}>
              POWER AND PERFORMANCE
            </span>

            <h2>
              Explore <span>Laptops</span>
            </h2>

            <p>Powerful performance for work, study and creativity.</p>
          </div>

          <button
            className={styles.viewAll}
            onClick={() => navigate("/products")}
          >
            See All →
          </button>
        </div>

        <Slider
          category="LAPTOP"
          cart={cart}
          setCart={setCart}
          setLastAddedProduct={setLastAddedProduct}
        />
      </section>

      {/* PROMO BANNER */}

      <section className={styles.promo}>
        <div className={styles.promoContent}>
          <span>UPGRADE YOUR EVERYDAY</span>

          <h2>
            Better Technology.
            <br />
            Better Living.
          </h2>

          <p>
            Find your next favorite device and experience technology in a whole
            new way.
          </p>

          <button onClick={() => navigate("/products")}>
            Start Shopping <span>→</span>
          </button>
        </div>

        <div className={styles.promoDecoration}>
          <div className={styles.promoCircle}></div>
          <span>TECH</span>
          <span>2026</span>
        </div>
      </section>

      {/* PHONE PRODUCTS */}

      <section className={styles.sliderSection}>
        <div className={styles.sliderHeader}>
          <div>
            <span className={styles.sectionSubtitle}>SMARTER CONNECTIONS</span>

            <h2>
              Latest <span>Smartphones</span>
            </h2>

            <p>Explore the latest devices and stay connected.</p>
          </div>

          <button
            className={styles.viewAll}
            onClick={() => navigate("/products")}
          >
            See All →
          </button>
        </div>

        <Slider
          category="PHONE"
          cart={cart}
          setCart={setCart}
          setLastAddedProduct={setLastAddedProduct}
        />
      </section>

      {/* NEWSLETTER */}

      <section className={styles.newsletter}>
        <div>
          <span>STAY UPDATED</span>
          <h2>Technology never stops. Neither do we.</h2>
          <p>Explore our latest products and discover new arrivals.</p>
        </div>

        <button onClick={() => navigate("/products")}>
          Explore Collection →
        </button>
      </section>
    </main>
  );
}

export default Home;
