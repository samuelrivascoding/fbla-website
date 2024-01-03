import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CompleteTitleHomeMobile from "../../components/CompleteTitleHomeMobile";
import BottomHomeMobile from "../../components/BottomHomeMobile";
import styles from "./HomepageMobile.module.css";

const HomepageMobile = () => {
  return (
    <div className={styles.homepageMobile}>
      <div className={styles.genericpage}>
        <CompleteTitleHomeMobile />
        <div className={styles.content}>
          <div className={styles.contentInner}>
            <div className={styles.wrapperRectangle3Wrapper}>
              <div className={styles.wrapperRectangle3}>
                <img
                  className={styles.wrapperRectangle3Child}
                  alt=""
                  src="/rectangle-3@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.textbody}>
            <div className={styles.aboutUs}>
              <div className={styles.aboutUsWrapper}>
                <h1 className={styles.aboutUs1}>ABOUT US</h1>
              </div>
            </div>
            <div className={styles.textbodyInner}>
              <div className={styles.welcomeToRobosweepEmporiumWrapper}>
                <div className={styles.welcomeToRobosweepContainer}>
                  <p className={styles.welcomeToRobosweep}>
                    Welcome to RoboSweep Emporium, where innovation meets
                    Roombas. As a dedicated hub for cutting-edge home cleaning
                    technology, we pride ourselves on being the ultimate
                    destination for Roomba connoisseurs.
                  </p>
                  <p className={styles.welcomeToRobosweep}>&nbsp;</p>
                  <p className={styles.welcomeToRobosweep}>
                    In partnership with iRobot, we understand the significance
                    of a clean and comfortable home environment. We also
                    understand the importance of not using up time to clean.
                  </p>
                  <p className={styles.welcomeToRobosweep}>&nbsp;</p>
                  <p className={styles.welcomeToRobosweep}>
                    {" "}
                    With a focus on revolutionizing household chores, we've
                    curated a specialized collection of Roomba robotic vacuums
                    to cater to the diverse needs of our customers. Our mission
                    is to offer not just products, but a seamless, intelligent
                    cleaning experience that transforms the way you maintain
                    your living space.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BottomHomeMobile />
      </div>
    </div>
  );
};

export default HomepageMobile;
