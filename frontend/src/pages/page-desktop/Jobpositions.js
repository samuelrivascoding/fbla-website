import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CompleteTitle from "../../components/CompleteTitle";
import BottomDesk from "../../components/BottomDesk";
import styles from "./Jobpositions.module.css";

const Jobpositions = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/benefits");
  }, [navigate]);

  return (
    <div className={styles.jobpositions}>
      <main className={styles.jobpositions1}>
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
        <section className={styles.content}>
          <div className={styles.photos}>
            <div className={styles.pexelsPhoto38234881}>
              <img
                className={styles.pexelsPhoto38234881Icon}
                alt=""
                src="/pexelsphoto3823488-11@2x.png"
              />
            </div>
            <div className={styles.pexelsYanKrukau88674331}>
              <img
                className={styles.pexelsPhoto38234881Icon}
                alt=""
                src="/pexelsyankrukau8867433-1-11@2x.png"
              />
            </div>
          </div>
          <div className={styles.completeInfo}>
            <div className={styles.jobPositionsWrapper}>
              <h1 className={styles.jobPositions}>Job Positions</h1>
            </div>
            <div className={styles.completeInfoChild} />
            <div className={styles.textbody}>
              <div className={styles.customerSupport}>
                <div className={styles.customerSupportSpecialist}>
                  Customer Support Specialist
                </div>
                <div className={styles.providingCustomerService}>
                  Providing customer service, assisting with product inquiries,
                  troubleshooting, and handling after-sales support.
                </div>
              </div>
              <div className={styles.customerSupport}>
                <div className={styles.customerSupportSpecialist}>
                  Sales Associate
                </div>
                <div className={styles.providingCustomerService}>
                  <p className={styles.responsibleForSelling}>
                    Responsible for selling Roombas.
                  </p>
                  <p className={styles.responsibleForSelling}>&nbsp;</p>
                  <p className={styles.responsibleForSelling}>
                    Assisting customers, providing information, and guiding them
                    in choosing the right products.
                  </p>
                </div>
              </div>
              <div className={styles.customerSupport}>
                <div className={styles.customerSupportSpecialist}>
                  Marketing Specialist
                </div>
                <div className={styles.providingCustomerService}>
                  <p className={styles.responsibleForSelling}>
                    Planning and executing marketing campaigns to promote
                    Roombas.
                  </p>
                  <p className={styles.responsibleForSelling}>&nbsp;</p>
                  <p className={styles.responsibleForSelling}>
                    Creating content, social media management, and organizing
                    promotional events.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
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

export default Jobpositions;
