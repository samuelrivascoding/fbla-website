import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CompleteTitle from "../../components/CompleteTitle";
import BottomDesk from "../../components/BottomDesk";
import styles from "./JobpositionsMobile.module.css";

const JobpositionsMobile = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/benefits");
  }, [navigate]);

  return (
    <div className={styles.jobpositionsMobile}>
      <main className={styles.jobpositionsMobile1}>
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
        <section className={styles.content}>
          <div className={styles.photos}>
            <div className={styles.pexelsPhoto38234881}>
              <img
                className={styles.pexelsPhoto38234881Icon}
                alt=""
                src="/pexelsphoto3823488-1@2x.png"
              />
            </div>
            <div className={styles.pexelsYanKrukau88674331}>
              <img
                className={styles.pexelsPhoto38234881Icon}
                alt=""
                src="/pexelsyankrukau8867433-1-1@2x.png"
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

export default JobpositionsMobile;
