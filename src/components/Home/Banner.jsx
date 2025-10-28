import styles from "./Banner.module.css";
import Carousel from "./Carousel";
import useTypewriter from "../../hooks/useTypewriter";
const Banner = () => {
  const typedText = useTypewriter("Unlock a World of Entertainment.", 100);
  return (
    <div className={styles.bannerContainer}>
      <Carousel />
      <div className={styles.bottom}>
        <p>{typedText}</p>
      </div>
    </div>
  );
};

export default Banner;
