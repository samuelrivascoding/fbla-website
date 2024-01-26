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
  }, [errorMessage]);



  return (
    <p className={`${styles.errorText} ${isActive && styles.active}`}
    onClick={() => {
      setIsActive(false);
      setTimeout(() => {
        onClose();
      }, 300);
    }}>
      {errorMessage}
    </p>
  );
};

export default ErrorPopUp;
