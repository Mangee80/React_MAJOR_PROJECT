import Info from "../components/Browse/Info";
import Weather from "../components/Browse/Weather";
import Notes from "../components/Browse/Notes";
import News from "../components/Browse/News";
import Timer from "../components/Browse/Timer";
import { useNavigate } from "react-router-dom";
import styles from "./Browse.module.css";

const Browse = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/movies");
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <Info />
          <Weather />
          <Timer />
        </div>
        <div>
          <Notes />
        </div>
        <div>
          <News />
        </div>
      </div>
      <button className={styles.nextButton} onClick={handleClick}>
        Next Page
      </button>
    </div>
  );
};

export default Browse;