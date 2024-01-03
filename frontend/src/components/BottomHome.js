import styles from "./BottomHome.module.css";

const BottomHome = () => {
  return (
    <section className={styles.bottom}>
      <div className={styles.info}>
        <b className={styles.robosweepEmporium}>© 2023 ROBOSWEEP EMPORIUM</b>
        <div className={styles.termpolicy}>
          <b className={styles.robosweepEmporium}>{`Terms & Conditions`}</b>
          <b className={styles.robosweepEmporium}>Privacy Policy</b>
        </div>
      </div>
      <div className={styles.innovate}>
        <div className={styles.robosweepEmporium}>
          INNOVATE AND SELL ROOMBAS
        </div>
      </div>
    </section>
  );
};

export default BottomHome;
