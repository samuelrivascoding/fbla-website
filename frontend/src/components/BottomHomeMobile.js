import styles from "./BottomHomeMobile.module.css";

const BottomHomeMobile = () => {
  return (
    <div className={styles.bottom}>
      <div className={styles.innovateAndSell}>INNOVATE AND SELL ROOMBAS</div>
      <div className={styles.robosweepEmporium}>© 2023 ROBOSWEEP EMPORIUM</div>
      <div className={styles.termpolicy}>
        <div className={styles.robosweepEmporium}>{`Terms & Conditions`}</div>
        <div className={styles.robosweepEmporium}>Privacy Policy</div>
      </div>
    </div>
  );
};

export default BottomHomeMobile;
