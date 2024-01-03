import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CompleteTitleHomeMobile.module.css";

const CompleteTitleHomeMobile = () => {
  const navigate = useNavigate();

  const onApplyContainerClick = useCallback(() => {
    navigate("/benefits");
  }, [navigate]);

  return (
    <div className={styles.completetitle}>
      <div className={styles.frameParent}>
        <div className={styles.vectorWrapper}>
          <img className={styles.frameChild} alt="" src="/ellipse-13@2x.png" />
        </div>
        <div className={styles.robosweepEmporium}>
          <p className={styles.robosweep}>ROBOSWEEP</p>
          <p className={styles.robosweep}>EMPORIUM</p>
        </div>
      </div>
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
    </div>
  );
};

export default CompleteTitleHomeMobile;
