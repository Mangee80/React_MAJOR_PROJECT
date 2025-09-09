
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useSignUpForm = () => {
  const [formValues, setFormValues] = useState({
    check: false,
    name: '',
    username: '',
    mail: '',
    mobile: '',
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

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
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === 'checkbox' ? checked : value,
    });
    // Clear error for the field being edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formValues.name.trim()) newErrors.name = 'Please enter your name';
    if (!formValues.username.trim()) newErrors.username = 'Please enter a username';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formValues.mail.trim() || !emailRegex.test(formValues.mail)) {
      newErrors.mail = 'Please enter a valid email address';
    }
    const mobileRegex = /^[0-9]{10}$/;
    if (!formValues.mobile.trim() || !mobileRegex.test(formValues.mobile)) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }
    if (!formValues.check) newErrors.check = 'Please accept the terms';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        localStorage.setItem('userData', JSON.stringify(formValues));
        setShowSuccess(true);
        setIsLoading(false);
        setTimeout(() => {
          navigate('/genre');
        }, 1500);
      }, 1000);
    }
  };

  return {
    formValues,
    errors,
    isLoading,
    showSuccess,
    progress,
    handleChange,
    handleSubmit,
  };
};

export default useSignUpForm;
