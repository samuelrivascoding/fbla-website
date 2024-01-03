import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CompleteTitle from "../../components/CompleteTitle";
import ApplicationForm from "../../components/ApplicationForm";
import BottomDesk from "../../components/BottomDesk";
import styles from "./ApplypageMobile.module.css";

const ApplypageMobile = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/benefits");
  }, [navigate]);

  return (
    <div className={styles.applypageMobile}>
      <main className={styles.applypage}>
        <CompleteTitle
          onButtonClick={onButtonClick}
          titleRight="10.22%"
          titleLeft="14.03%"
          completeTitleMobileHeight="114.8px"
          buttonPadding="0"
          buttonTop="calc(50% - 51.6px)"
          buttonLeft="calc(50% - 151px)"
          buttonBorderRadius="2.95px"
          buttonWidth="37.8px"
          buttonHeight="15.7px"
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
          labelFontSize="8px"
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
          ellipse2="/ellipse-1@2x.png"
        />
        <ApplicationForm
          applicationFormFontSize="32px"
          firstnameWidth="384px"
          lastnameWidth="384px"
          emailWidth="384px"
          phonenumberWidth="384px"
          jobpositionWidth="384px"
          onButton1Click={onButtonClick}
        />
        <BottomDesk
          bottomHeight="59.9px"
          innovateHeight="26.38%"
          innovateWidth="28.12%"
          innovateTop="17.2%"
          innovateRight="36.01%"
          innovateBottom="56.43%"
          innovateLeft="35.87%"
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

export default ApplypageMobile;
