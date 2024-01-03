import { useMemo } from "react";
import styles from "./CompleteTitle.module.css";

const CompleteTitle = ({
  onButtonClick,
  titleRight,
  titleLeft,
  completeTitleMobileHeight,
  buttonPadding,
  buttonTop,
  buttonLeft,
  buttonBorderRadius,
  buttonWidth,
  buttonHeight,
  buttonRight,
  buttonDisplay,
  buttonFlexDirection,
  buttonAlignItems,
  buttonJustifyContent,
  buttonBoxSizing,
  labelPosition,
  labelHeight,
  labelWidth,
  labelTop,
  labelRight,
  labelBottom,
  labelLeft,
  labelDisplay,
  labelFlexDirection,
  labelAlignItems,
  labelJustifyContent,
  labelPosition1,
  labelHeight1,
  labelWidth1,
  labelTop1,
  labelLeft1,
  labelFontSize,
  labelAlignSelf,
  titleHeight,
  titleWidth,
  titleTop,
  titleBottom,
  titleGap,
  rOBOSWEEPEMPORIUMFontSize,
  rOBOSWEEPEMPORIUMWidth,
  ellipseDivWidth,
  ellipseDivHeight,
  ellipse2,
}) => {
  const titleStyle = useMemo(() => {
    return {
      right: titleRight,
      left: titleLeft,
      height: titleHeight,
      width: titleWidth,
      top: titleTop,
      bottom: titleBottom,
      gap: titleGap,
    };
  }, [
    titleRight,
    titleLeft,
    titleHeight,
    titleWidth,
    titleTop,
    titleBottom,
    titleGap,
  ]);

  const completeTitleMobileStyle = useMemo(() => {
    return {
      height: completeTitleMobileHeight,
    };
  }, [completeTitleMobileHeight]);

  const buttonStyle = useMemo(() => {
    return {
      padding: buttonPadding,
      top: buttonTop,
      left: buttonLeft,
      borderRadius: buttonBorderRadius,
      width: buttonWidth,
      height: buttonHeight,
      right: buttonRight,
      display: buttonDisplay,
      flexDirection: buttonFlexDirection,
      alignItems: buttonAlignItems,
      justifyContent: buttonJustifyContent,
      boxSizing: buttonBoxSizing,
    };
  }, [
    buttonPadding,
    buttonTop,
    buttonLeft,
    buttonBorderRadius,
    buttonWidth,
    buttonHeight,
    buttonRight,
    buttonDisplay,
    buttonFlexDirection,
    buttonAlignItems,
    buttonJustifyContent,
    buttonBoxSizing,
  ]);

  const labelStyle = useMemo(() => {
    return {
      position: labelPosition,
      height: labelHeight,
      width: labelWidth,
      top: labelTop,
      right: labelRight,
      bottom: labelBottom,
      left: labelLeft,
      display: labelDisplay,
      flexDirection: labelFlexDirection,
      alignItems: labelAlignItems,
      justifyContent: labelJustifyContent,
    };
  }, [
    labelPosition,
    labelHeight,
    labelWidth,
    labelTop,
    labelRight,
    labelBottom,
    labelLeft,
    labelDisplay,
    labelFlexDirection,
    labelAlignItems,
    labelJustifyContent,
  ]);

  const label1Style = useMemo(() => {
    return {
      position: labelPosition1,
      height: labelHeight1,
      width: labelWidth1,
      top: labelTop1,
      left: labelLeft1,
      fontSize: labelFontSize,
      alignSelf: labelAlignSelf,
    };
  }, [
    labelPosition1,
    labelHeight1,
    labelWidth1,
    labelTop1,
    labelLeft1,
    labelFontSize,
    labelAlignSelf,
  ]);

  const rOBOSWEEPEMPORIUMStyle = useMemo(() => {
    return {
      fontSize: rOBOSWEEPEMPORIUMFontSize,
      width: rOBOSWEEPEMPORIUMWidth,
    };
  }, [rOBOSWEEPEMPORIUMFontSize, rOBOSWEEPEMPORIUMWidth]);

  const ellipseDiv1Style = useMemo(() => {
    return {
      width: ellipseDivWidth,
      height: ellipseDivHeight,
    };
  }, [ellipseDivWidth, ellipseDivHeight]);

  return (
    <section
      className={styles.completeTitleMobile}
      style={completeTitleMobileStyle}
    >
      <button
        className={styles.button}
        onClick={onButtonClick}
        style={buttonStyle}
      >
        <div className={styles.label} style={labelStyle}>
          <b className={styles.label1} style={label1Style}>
            Back
          </b>
        </div>
      </button>
      <div className={styles.title} style={titleStyle}>
        <h1 className={styles.robosweepEmporium} style={rOBOSWEEPEMPORIUMStyle}>
          <p className={styles.robosweep}>ROBOSWEEP</p>
          <p className={styles.robosweep}>EMPORIUM</p>
        </h1>
        <div className={styles.titleInner} style={ellipseDiv1Style}>
          <img
            className={styles.instanceChild}
            alt=""
            src="/ellipse-11@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default CompleteTitle;
