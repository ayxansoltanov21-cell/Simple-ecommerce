import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          MyWebsite
        </Link>

        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Link to="/" className={styles.link}>
                Home
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link to="/blog" className={styles.link}>
                Blog
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link to="/about" className={styles.link}>
                About
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link to="/products" className={styles.link}>
                Products
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link to="/contact" className={styles.link}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <Link to="/login" className={styles.loginBtn}>
          Login
        </Link>
      </div>
    </header>
  );
}

export default Header;
