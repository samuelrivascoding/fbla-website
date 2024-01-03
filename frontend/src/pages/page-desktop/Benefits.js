import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CompleteTitle from "../../components/CompleteTitle";
import BottomDesk from "../../components/BottomDesk";
import styles from "./Benefits.module.css";

const Benefits = () => {
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
    <div className={styles.benefits}>
      <main className={styles.benefits1}>
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
              src="/pexelsjensmahnke844874-11@2x.png"
            />
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

export default Benefits;
