import React from 'react';
import styles from "./Form.module.css";
import useSignUpForm from '../../hooks/useSignUpForm';

const SignUpForm = () => {
  const {
    formValues,
    errors,
    isLoading,
    showSuccess,
    progress,
    handleChange,
    handleSubmit,
  } = useSignUpForm();

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
        <div className={styles.superApp}>Super App</div>
        <p className={styles.createYourNew1}>Create a new account</p>
        
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
          Email <span className={styles.separator}>|</span> Google
        </p>
        <form onSubmit={handleSubmit}>
          <input 
              onChange={handleChange}
              value={formValues.name}
              type="text"
              name="name"
              placeholder="Name"
              className={errors.name ? styles.errorInput : ''}
            />
          {errors.name && <p className={styles.error}>{errors.name}</p>}
          
          <input
              onChange={handleChange}
              value={formValues.username}
              type="text"
              name="username"
              placeholder="Username"
              className={errors.username ? styles.errorInput : ''}
            />
          {errors.username && <p className={styles.error}>{errors.username}</p>}

          <input
              onChange={handleChange}
              value={formValues.mail}
              type="email"
              name="mail"
              placeholder="Email"
              className={errors.mail ? styles.errorInput : ''}
            />
          {errors.mail && <p className={styles.error}>{errors.mail}</p>}

          <input
              onChange={handleChange}
              value={formValues.mobile}
              type="tel"
              name="mobile"
              placeholder="Mobile (10 digits)"
              className={errors.mobile ? styles.errorInput : ''}
            />
          {errors.mobile && <p className={styles.error}>{errors.mobile}</p>}

          <label>
            <input 
              onChange={handleChange}
              checked={formValues.check}
              type="checkbox"
              name="check"
            />
            Share my registration data with Superapp 
          </label>
          {errors.check && <p className={styles.error}>{errors.check}</p>}

          <button 
            type="submit" 
            disabled={isLoading}
            className={isLoading ? styles.loadingButton : ''}
          >
            {isLoading ? 'Creating Account...' : 'SIGN UP'}
          </button>
          <footer className={styles.footer}>
            <p>
              By clicking on Sign up. you agree to Superapp
              <span>Terms and Conditions of Use</span>
            </p>
            <p>
              To learn more about how Superapp collects, user, shares and protects
              your personal data please head Superapp
              <span>Privacy Policy</span>
            </p>
          </footer>
        </form>
     </div>
  )
}

export default SignUpForm;
