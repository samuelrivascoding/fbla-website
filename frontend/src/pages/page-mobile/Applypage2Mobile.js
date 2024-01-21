import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CompleteTitle from "../../components/CompleteTitle";
import BottomDesk from "../../components/BottomDesk";
import styles from "./Applypage2Mobile.module.css";

const Applypage2Mobile = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.applypage2Mobile}>
      <main className={styles.applypage}>
        <CompleteTitle
          onButtonClick={onButtonClick}
          titleRight="10.21%"
          titleLeft="14.02%"
          completeTitleMobileHeight="114.8px"
          buttonPadding="0"
          buttonTop="calc(50% - 51.6px)"
          buttonLeft="calc(50% - 151px)"
          buttonBorderRadius="2.95px"
          buttonWidth="50px"
          buttonHeight="20px"
          buttonRight="unset"
          buttonDisplay="unset"
          buttonFlexDirection="unset"
          buttonAlignItems="unset"
          buttonJustifyContent="unset"
          buttonBoxSizing="unset"
          labelPosition="absolute"
          labelHeight="75.16%"
          labelWidth="58.47%"
          labelTop="12.74%"
          labelRight="20.63%"
          labelBottom="12.1%"
          labelLeft="20.9%"
          labelDisplay="unset"
          labelFlexDirection="unset"
          labelAlignItems="unset"
          labelJustifyContent="unset"
          labelPosition1="absolute"
          labelHeight1="100%"
          labelWidth1="100%"
          labelTop1="0px"
          labelLeft1="0px"
          labelFontSize="12px"
          labelAlignSelf="unset"
          titleHeight="69.08%"
          titleWidth="75.76%"
          titleTop="23.08%"
          titleBottom="7.84%"
          titleGap="2.92px"
          rOBOSWEEPEMPORIUMFontSize="32px"
          rOBOSWEEPEMPORIUMWidth="236.5px"
          ellipseDivWidth="73.8px"
          ellipseDivHeight="56.3px"
          ellipse2="/ellipse-111@2x.png"
        />
        <div className={styles.content}>
          <div className={styles.completionPageWrapper}>
            <div className={styles.completionPage}>
              <img
                className={styles.checkmarkCircledIcon11}
                alt=""
                src="/211642-checkmark-circled-icon-1-1.svg"
              />
              <div className={styles.aRobosweepEmporium}>
                A RoboSweep Emporium representative will be getting in contact
                with you shortly!
              </div>
            </div>
          </div>
        </div>
        <BottomDesk
          bottomHeight="59.9px"
          innovateHeight="26.38%"
          innovateWidth="37.1%"
          innovateTop="17.2%"
          innovateRight="31.52%"
          innovateBottom="56.43%"
          innovateLeft="31.38%"
          innovatePadding="2.9166667461395264px"
          iNNOVATEANDSELLFontSize="8px"
          iNNOVATEANDSELLFontWeight="bold"
          infoTop="calc(50% + 0.85px)"
          infoLeft="calc(50% - 177.5px)"
          infoGap="98.25px"
          rOBOSWEEPEMPORIUMFontSize="8px"
          rOBOSWEEPEMPORIUMWidth="104.6px"
          termpolicyGap="9.82px"
          termsConditionsFontSize="8px"
          termsConditionsWidth="90.4px"
          privacyPolicyFontSize="8px"
          privacyPolicyWidth="68.3px"
        />
      </main>
    </div>
  );
};

export default Applypage2Mobile;
