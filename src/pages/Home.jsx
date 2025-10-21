import React from "react";
import styles from "./Home.module.css";
import SignUpForm from "../components/Home/SignUpForm";
import Banner from "../components/Home/Banner";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <SignUpForm />
      </div>
      <div className={styles.right}>
        <Banner />
      </div>
    </div>
  );
};

export default Home;