import React from 'react';
import Banner from '../components/Home/Banner.jsx';
import SignUpForm from '../components/Home/SignUpForm.jsx';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Banner />
      <SignUpForm />
    </div>
  );
};

export default Home;