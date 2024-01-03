import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CompleteTitle from "../../components/CompleteTitle";
import BottomDesk from "../../components/BottomDesk";
import styles from "./Applypage2.module.css";

const Applypage2 = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.applypage2}>
      <section className={styles.applypage21}>
        <CompleteTitle
          onButtonClick={onButtonClick}
          titleRight="10.21%"
          titleLeft="14.02%"
          completeTitleMobileHeight="233.6px"
          buttonPadding="var(--padding-9xs) var(--padding-base)"
          buttonTop="calc(50% - 105px)"
          buttonLeft="14.04%"
          buttonBorderRadius="6px"
          buttonWidth="9.01%"
          buttonHeight="unset"
          buttonRight="76.96%"
          buttonDisplay="flex"
          buttonFlexDirection="column"
          buttonAlignItems="center"
          buttonJustifyContent="center"
          buttonBoxSizing="border-box"
          labelPosition="unset"
          labelHeight="unset"
          labelWidth="unset"
          labelTop="unset"
          labelRight="unset"
          labelBottom="unset"
          labelLeft="unset"
          labelDisplay="flex"
          labelFlexDirection="row"
          labelAlignItems="center"
          labelJustifyContent="flex-start"
          labelPosition1="relative"
          labelHeight1="unset"
          labelWidth1="unset"
          labelTop1="unset"
          labelLeft1="unset"
          labelFontSize="17px"
          labelAlignSelf="stretch"
          titleHeight="69.14%"
          titleWidth="75.77%"
          titleTop="23.12%"
          titleBottom="7.75%"
          titleGap="5.94px"
          rOBOSWEEPEMPORIUMFontSize="65px"
          rOBOSWEEPEMPORIUMWidth="481.5px"
          ellipseDivWidth="150.2px"
          ellipseDivHeight="114.6px"
          ellipse2="/ellipse-151@2x.png"
        />
        <div className={styles.content}>
          <div className={styles.completionPageWrapper}>
            <div className={styles.completionPage}>
              <img
                className={styles.checkmarkCircledIcon11}
                alt=""
                src="/211642-checkmark-circled-icon-1-11.svg"
              />
              <div className={styles.aRobosweepEmporium}>
                A RoboSweep Emporium representative will be getting in contact
                with you shortly!
              </div>
            </div>
          </div>
        </div>
        <BottomDesk />
      </section>
    </div>
  );
};

export default Applypage2;
