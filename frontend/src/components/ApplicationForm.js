import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import styles from "./ApplicationForm.module.css";
import ErrorPopUp from "./ErrorPopUp";

const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3005/application';

const ApplicationForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phonenumber: '',
    jobposition: 'customersupportspecialist', // Default value
  });

  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Error! Please fill out all fields.");
  const [emailValid, setEmailValid] = useState(true);
  const [phoneNumberValid, setPhoneNumberValid] = useState(true); // Add this line
  

  const onInputChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: fieldValue,
    }));

    if (fieldName === 'email') {
      if (fieldValue.trim() === '' || validateEmail(fieldValue)) {
        setEmailValid(true);
      } else {
        setEmailValid(false);
      }
    } else if (fieldName === 'phonenumber') {
      if (fieldValue.trim() === '' || validatePhoneNumber(fieldValue)) {
        setPhoneNumberValid(true);
      } else {
        setPhoneNumberValid(false);
      }
  }
};

  const emailRegex = /^\S+@\S+\.\S+$/;
  const phoneRegex = /^[0-9]{10}$/;



  const validateEmail = (email) => {
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    return phoneRegex.test(phoneNumber);
  };

  const onButton1Click = useCallback(async () => {
    console.log('Submitting form...');

    if (
      formData.firstname.trim() === '' ||
      formData.lastname.trim() === '' ||
      formData.email.trim() === '' ||
      formData.phonenumber.trim() === ''
    ) {
      setErrorMessage("Error! Please fill out all fields.");
      setShowErrorPopup(true);
      return;
    }
  
    try {
      

      if (!validateEmail(formData.email)) {
        setErrorMessage("Error! Please enter a valid email address.");
        setShowErrorPopup(true);
        return;
      }
  
      if (!phoneNumberValid) {
        setErrorMessage("Error! Please enter a valid phone number (10 digits).");
        setShowErrorPopup(true);
        return;
      }

      const response = await axios.post(backendUrl, formData);

      if (response.status === 200) {
        console.log('Form data submitted successfully');
        navigate("/applypage2");
      } else {
        console.error('Form submission failed');
        setErrorMessage("Error! Something went wrong with the submission.");
        setShowErrorPopup(true);
      }

      } catch (error) {
      console.error('Error submitting form data:', error);
      setErrorMessage("Error! Something went wrong with the submission.");
      setShowErrorPopup(true);
    }
  }, [navigate, formData]);

  const closeErrorPopup = () => {
    console.log('Closing error popup...');
    setShowErrorPopup(false);
  };

  return (
    <div className={styles.applicationForm}>
      <div className={styles.applicationFormInner}>
        <div className={styles.applicationFormWrapper}>
          <h1 className={styles.applicationForm1}>Application Form</h1>
        </div>
      </div>
      <div className={styles.firstname}>
        <div className={styles.div}>First Name</div>
        <input
          className={styles.textBlock}
          name="firstname"
          placeholder="Text"
          type="text"
          value={formData.firstname}
          onChange={onInputChange}
        />
      </div>
      <div className={styles.lastname}>
        <div className={styles.div}>Last Name</div>
        <input
          className={styles.textBlock}
          name="lastname"
          placeholder="Text"
          type="text"
          value={formData.lastname}
          onChange={onInputChange}
        />
      </div>
      <div className={styles.firstname}>
        <div className={styles.div}>Email</div>
        <input
          className={`${styles.textBlock} ${!emailValid ? styles.invalidInput : ''}`}
          name="email"
          placeholder="Text"
          type="email"
          value={formData.email}
          onChange={onInputChange}
        />
      </div>
      <div className={styles.firstname}>
        <div className={styles.div}>Phone Number</div>
        <input
          className={`${styles.textBlock} ${!phoneNumberValid ? styles.invalidInput : ''}`}
          name="phonenumber"
          placeholder="Text"
          type="tel"
          value={formData.phonenumber}
          onChange={onInputChange}
        />
      </div>
      <div className={styles.jobposition}>
        <div className={styles.div}>Job Position Applying for</div>
        <select
          className={styles.textBlock4}
          name="jobposition"
          value={formData.jobposition}
          onChange={onInputChange}
        >
          <option value="customersupportspecialist">Customer Support Specialist</option>
          <option value="salesassociate">Sales Associate</option>
          <option value="marketingspecialist">Marketing Specialist</option>
        </select>
      </div>
      <button className={styles.button} onClick={onButton1Click}>
        <div className={styles.label}>
          <b className={styles.label1}>Submit</b>
        </div>
      </button>
      {showErrorPopup && <ErrorPopUp onClose={closeErrorPopup} errorMessage={errorMessage} />}
    </div>
  );
};

export default ApplicationForm;
