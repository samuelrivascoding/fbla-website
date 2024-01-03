import { useMemo } from "react";
import styles from "./BottomDesk.module.css";

const BottomDesk = ({
  bottomHeight,
  innovateHeight,
  innovateWidth,
  innovateTop,
  innovateRight,
  innovateBottom,
  innovateLeft,
  innovatePadding,
  iNNOVATEANDSELLFontSize,
  iNNOVATEANDSELLFontWeight,
  infoTop,
  infoLeft,
  infoGap,
  rOBOSWEEPEMPORIUMFontSize,
  rOBOSWEEPEMPORIUMWidth,
  termpolicyGap,
  termsConditionsFontSize,
  termsConditionsWidth,
  privacyPolicyFontSize,
  privacyPolicyWidth,
}) => {
  const bottomStyle = useMemo(() => {
    return {
      height: bottomHeight,
    };
  }, [bottomHeight]);

  const innovateStyle = useMemo(() => {
    return {
      height: innovateHeight,
      width: innovateWidth,
      top: innovateTop,
      right: innovateRight,
      bottom: innovateBottom,
      left: innovateLeft,
      padding: innovatePadding,
    };
  }, [
    innovateHeight,
    innovateWidth,
    innovateTop,
    innovateRight,
    innovateBottom,
    innovateLeft,
    innovatePadding,
  ]);

  const iNNOVATEANDSELLStyle = useMemo(() => {
    return {
      fontSize: iNNOVATEANDSELLFontSize,
      fontWeight: iNNOVATEANDSELLFontWeight,
    };
  }, [iNNOVATEANDSELLFontSize, iNNOVATEANDSELLFontWeight]);

  const infoStyle = useMemo(() => {
    return {
      top: infoTop,
      left: infoLeft,
      gap: infoGap,
    };
  }, [infoTop, infoLeft, infoGap]);

  const rOBOSWEEPEMPORIUM1Style = useMemo(() => {
    return {
      fontSize: rOBOSWEEPEMPORIUMFontSize,
      width: rOBOSWEEPEMPORIUMWidth,
    };
  }, [rOBOSWEEPEMPORIUMFontSize, rOBOSWEEPEMPORIUMWidth]);

  const termpolicyStyle = useMemo(() => {
    return {
      gap: termpolicyGap,
    };
  }, [termpolicyGap]);

  const termsConditionsStyle = useMemo(() => {
    return {
      fontSize: termsConditionsFontSize,
      width: termsConditionsWidth,
    };
  }, [termsConditionsFontSize, termsConditionsWidth]);

  const privacyPolicyStyle = useMemo(() => {
    return {
      fontSize: privacyPolicyFontSize,
      width: privacyPolicyWidth,
    };
  }, [privacyPolicyFontSize, privacyPolicyWidth]);

  return (
    <div className={styles.bottom} style={bottomStyle}>
      <div className={styles.innovate} style={innovateStyle}>
        <div className={styles.innovateAndSell} style={iNNOVATEANDSELLStyle}>
          INNOVATE AND SELL ROOMBAS
        </div>
      </div>
      <div className={styles.info} style={infoStyle}>
        <b className={styles.robosweepEmporium} style={rOBOSWEEPEMPORIUM1Style}>
          © 2023 ROBOSWEEP EMPORIUM
        </b>
        <div className={styles.termpolicy} style={termpolicyStyle}>
          <b
            className={styles.termsConditions}
            style={termsConditionsStyle}
          >{`Terms & Conditions`}</b>
          <b className={styles.privacyPolicy} style={privacyPolicyStyle}>
            Privacy Policy
          </b>
        </div>
      </div>
    </div>
  );
};

export default BottomDesk;
