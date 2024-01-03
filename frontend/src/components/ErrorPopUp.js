import { useState, useEffect } from 'react';
import styles from "./ErrorPopUp.module.css";

const ErrorPopUp = ({ onClose, errorMessage = "An error occurred." }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    console.log('ErrorPopUp mounted with message:', errorMessage);
    const timeoutId = setTimeout(() => {
      setIsActive(true);
    }, 100);

    return () => clearTimeout(timeoutId);
    console.log('ErrorPopUp unmounted');
  }, [errorMessage]);



  return (
    <p className={`${styles.errorText} ${isActive && styles.active}`}
    onClick={() => {
      setIsActive(false); // Trigger the fade-out effect

      // Wait for the transition to complete before triggering onClose
      setTimeout(() => {
        onClose();
      }, 300); // Adjust the time based on your CSS transition duration
    }}>
      {errorMessage}
    </p>
  );
};

export default ErrorPopUp;
