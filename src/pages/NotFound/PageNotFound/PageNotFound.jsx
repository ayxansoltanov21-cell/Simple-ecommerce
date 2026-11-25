import styles from "../PageNotFound/PageNotFound.module.css";

function PageNotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.errorCode}>404</h1>

        <h2 className={styles.title}>Page Not Found</h2>

        <p className={styles.description}>
          Oops! The page you're looking for doesn't exist or may have been
          moved.
        </p>

        <button className={styles.homeButton}>Go Back Home</button>
      </div>
    </div>
  );
}

export default PageNotFound;
