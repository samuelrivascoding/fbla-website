import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CompleteTitleHome.module.css";

const CompleteTitleHome = () => {
  const navigate = useNavigate();

  const onApplyContainerClick = useCallback(() => {
    navigate("/benefits");
  }, [navigate]);

  return (
    <section className={styles.completeTitle}>
      <nav className={styles.buttons}>
        <b className={styles.locations}>Locations</b>
        <b className={styles.locations}>Contact</b>
        <div className={styles.apply} onClick={onApplyContainerClick}>
          <b className={styles.label}>Apply</b>
        </div>
        <button className={styles.shopWrapper}>
          <b className={styles.shop}>Shop</b>
        </button>
      </nav>
      <div className={styles.title}>
        <img className={styles.titleChild} alt="" src="/ellipse-13@2x.png" />
        <h1 className={styles.robosweepEmporium}>
          <p className={styles.robosweep}>ROBOSWEEP</p>
          <p className={styles.robosweep}>EMPORIUM</p>
        </h1>
      </div>
    </section>
  );
};

export default CompleteTitleHome;
