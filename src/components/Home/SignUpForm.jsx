import React, { useState, useEffect } from 'react';
import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  
  const [formValues, setformValues] = useState({
    check: false,
    name: "",
    username: "",
    mail: "",
    mobile: "",
  });

  const [nameError, setNameError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [mailError, setMailError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [signUpError, setSignUpError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  // Calculate form completion progress
  useEffect(() => {
    let completed = 0;
    if (formValues.name.trim()) completed++;
    if (formValues.username.trim()) completed++;
    if (formValues.mail.trim()) completed++;
    if (formValues.mobile.trim()) completed++;
    if (formValues.check) completed++;
    
    setProgress((completed / 5) * 100);
  }, [formValues]);

  const handleChange = (e) => {
    setformValues({ ...formValues, [e.target.name]: e.target.value})
    // Clear errors when user starts typing
    if (e.target.name === 'name') setNameError(false);
    if (e.target.name === 'username') setUserNameError(false);
    if (e.target.name === 'mail') setMailError(false);
    if (e.target.name === 'mobile') setMobileError(false);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateMobile = (mobile) => {
    const mobileRegex = /^[0-9]{10}$/;
    return mobileRegex.test(mobile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;
    
    // Name validation
    if (!(formValues.name.trim().length > 0)) {
      setNameError(true);
      valid = false;
    } else {
      setNameError(false);
    }
    
    // Username validation
    if (!(formValues.username.trim().length > 0)) {
      setUserNameError(true);
      valid = false;
    } else {
      setUserNameError(false);
    }
    
    // Email validation
    if (!(formValues.mail.trim().length > 0) || !validateEmail(formValues.mail)) {
      setMailError(true);
      valid = false;
    } else {
      setMailError(false);
    }
    
    // Mobile validation
    if (!(formValues.mobile.trim().length > 0) || !validateMobile(formValues.mobile)) {
      setMobileError(true);
      valid = false;
    } else {
      setMobileError(false);
    }
    
    // Checkbox validation
    if (!formValues.check) {
      setSignUpError(true);
      valid = false;
    } else {
      setSignUpError(false);
    }
    
    if (valid) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        window.localStorage.setItem("userData", JSON.stringify(formValues));
        setShowSuccess(true);
        setIsLoading(false);
        setTimeout(() => {
          navigate("/genre");
        }, 1500);
      }, 1000);
    }
  };

  if (showSuccess) {
    return (
      <div className={styles.formContainer}>
        <div className={styles.successMessage}>
          <h2>🎉 Success!</h2>
          <p>Account created successfully!</p>
          <p>Redirecting to genre selection...</p>
        </div>
      </div>
    );
  }

  return (
     <div className={styles.formContainer}>
        <div className={styles.superApp}>Super app</div>
        <p className={styles.createYourNew1}>Create your new account</p>
        
        {/* Progress Bar */}
        <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill} 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className={styles.progressText}>{Math.round(progress)}% Complete</span>
        </div>
        
        <p>
          Email <span style={{color: "green" }}>|</span> Google
        </p>
        <form>
          <input 
              onChange={(e) => handleChange(e)}
              type="text"
              name="name"
              placeholder="Name"
              className={nameError ? styles.errorInput : ''}
            >
          </input>
          {nameError ? (
            <p className={styles.error}>Please enter your name</p>
          ) : (
            null
          )}
          <input
              onChange={(e) => handleChange(e)}
              type="text"
              name="username"
              placeholder="Username"
              className={userNameError ? styles.errorInput : ''}
            >
          </input>
          {userNameError ? (
            <p className={styles.error}>Please enter a username</p>
          ) : (
            null
          )}
          <input
              onChange={(e) => handleChange(e)}
              type="email"
              name="mail"
              placeholder="Email"
              className={mailError ? styles.errorInput : ''}
            >
          </input>
          {mailError ? (
            <p className={styles.error}>Please enter a valid email address</p>
          ) : (
            null
          )}
          <input
              onChange={(e) => handleChange(e)}
              type="tel"
              name="mobile"
              placeholder="Mobile (10 digits)"
              className={mobileError ? styles.errorInput : ''}
            >
          </input>
          {mobileError ? (
            <p className={styles.error}>Please enter a valid 10-digit mobile number</p>
          ) : (
            null
          )}
          <label>
            <input 
              onChange={(e) => 
                setformValues({
                  ...formValues,
                  [e.target.name]: e.target.checked,
                })
              }
              type="checkbox"
              name="check"
            />
            Share my registration data with Superapp 
          </label>
          {signUpError ? <p className={styles.error}>Please accept the terms</p> : null}
          <button 
            type="submit" 
            onClick={(e) => handleSubmit(e)}
            disabled={isLoading}
            className={isLoading ? styles.loadingButton : ''}
          >
            {isLoading ? 'Creating Account...' : 'SIGN UP'}
          </button>
          <footer className={styles.footer}>
            <p>
              By clicking on Sign up. you agree to Superapp
              <span style={{ color: "green" }}>Terms and Conditions of Use</span>
            </p>
            <p>
              To learn more about how Superapp collects, user, shares and protects
              your personal data please head Superapp
              <span style={{ color: "green" }}>Privacy Policy</span>
            </p>
          </footer>
        </form>
     </div>
  )
}

export default SignUpForm;