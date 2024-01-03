import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CompleteTitle from "../../components/CompleteTitle";
import BottomDesk from "../../components/BottomDesk";
import styles from "./BenefitsMobile.module.css";

const BenefitsMobile = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAvailPositionClick = useCallback(() => {
    navigate("/jobpositions");
  }, [navigate]);

  const onApplicationFormClick = useCallback(() => {
    navigate("/applypage");
  }, [navigate]);

  return (
    <div className={styles.benefitsMobile}>
      <main className={styles.benefits}>
        <CompleteTitle
          onButtonClick={onButtonClick}
          titleRight="10.21%"
          titleLeft="14.02%"
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
          ellipse2="/ellipse-111@2x.png"
        />
        <div className={styles.content}>
          <div className={styles.textbody}>
            <div className={styles.title}>
              <div className={styles.benefitsForWorkingHereWrapper}>
                <h1 className={styles.benefitsForWorking}>
                  Benefits for working here
                </h1>
              </div>
              <div className={styles.titleInner}>
                <div className={styles.frameChild} />
              </div>
            </div>
            <div className={styles.alltext}>
              <div className={styles.continuosGrowth}>
                <div className={styles.continuousLearningAnd}>
                  Continuous Learning and Growth
                </div>
                <div className={styles.weInvestInOurEmployeesGrWrapper}>
                  <div className={styles.weInvestIn}>
                    We invest in our employees' growth. There are training
                    programs, mentorship opportunities, and career development
                    workshops to further develop your expertise in developing
                    Roombas
                  </div>
                </div>
              </div>
              <div className={styles.adoptARoomba}>
                <div className={styles.adoptARoomba1}>Adopt a Roomba</div>
                <div className={styles.weInvestInOurEmployeesGrWrapper}>
                  <div className={styles.allOfOur}>
                    All of our employees get FREE Roombas. Our Roombas are
                    premium quality and make excellent tools for the household.
                    Set them to clean while you're out, and return to a spotless
                    home.
                  </div>
                </div>
              </div>
              <div className={styles.communityAndCollaboration}>
                <div className={styles.communityAndCollaboration1}>
                  Community and Collaboration
                </div>
                <div className={styles.weInvestInOurEmployeesGrWrapper}>
                  <div className={styles.workAlongsideLikeMinded}>
                    Work alongside like-minded individuals passionate about
                    robotics and Roombas. Our collaborative environment
                    encourages teamwork, allowing for the exchange of ideas and
                    Roombas
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.buttons}>
              <button
                className={styles.availposition}
                id="availposbutton"
                onClick={onAvailPositionClick}
              >
                <div className={styles.label}>
                  <b className={styles.label1}>Available Positions</b>
                </div>
              </button>
              <button
                className={styles.availposition}
                id="appformbutton"
                onClick={onApplicationFormClick}
              >
                <div className={styles.label}>
                  <b className={styles.label1}>Application Form</b>
                </div>
              </button>
            </div>
          </div>
          <div className={styles.pexelsJensMahnke8448741}>
            <img
              className={styles.pexelsJensMahnke8448741Icon}
              alt=""
              src="/pexelsjensmahnke844874-1@2x.png"
            />
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

export default BenefitsMobile;
