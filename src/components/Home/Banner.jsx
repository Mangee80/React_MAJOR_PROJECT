import styles from "./Banner.module.css";
import Carousel from "./Carousel";
const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <Carousel />
      <div className={styles.bottom}>
        <p>Unlock a World of Entertainment.</p>
      </div>
    </div>
  );
};

export default Banner;
