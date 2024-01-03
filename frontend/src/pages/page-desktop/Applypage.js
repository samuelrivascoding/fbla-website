import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CompleteTitle from "../../components/CompleteTitle";
import ApplicationForm from "../../components/ApplicationForm";
import BottomDesk from "../../components/BottomDesk";
import styles from "./Applypage.module.css";

const Applypage = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/benefits");
  }, [navigate]);



  return (
    <div className={styles.applypage}>
      <main className={styles.applypage1}>
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
          <ApplicationForm />
          <div className={styles.image}>
            <div className={styles.facebookJobsJobFacebookBra}>
              <img
                className={styles.facebookJobsJobFacebookBraIcon}
                alt=""
                src="/8757563-facebook-jobs-job-facebook-brand-application-icon-1@2x.png"
              />
              <div className={styles.facebookJobsJobFacebookBraChild} />
            </div>
          </div>
        </div>
        <BottomDesk
          bottomHeight="122px"
          innovateHeight="26.15%"
          innovateWidth="35.43%"
          innovateTop="17.3%"
          innovateRight="32.35%"
          innovateBottom="56.56%"
          innovateLeft="32.22%"
          innovatePadding="5.9375px"
          iNNOVATEANDSELLFontSize="16px"
          iNNOVATEANDSELLFontWeight="unset"
          infoTop="calc(50% + 1px)"
          infoLeft="calc(50% - 361.3px)"
          infoGap="200px"
          rOBOSWEEPEMPORIUMFontSize="17px"
          rOBOSWEEPEMPORIUMWidth="213px"
          termpolicyGap="20px"
          termsConditionsFontSize="17px"
          termsConditionsWidth="184px"
          privacyPolicyFontSize="17px"
          privacyPolicyWidth="139px"
        />
      </main>
    </div>
  );
};

export default Applypage;
