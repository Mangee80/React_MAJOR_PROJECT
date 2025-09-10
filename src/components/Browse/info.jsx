import Profile from "../../assets/profileBig.png";
import Chips from "../Global/Chips";
import styles from "./Info.module.css";
import useLocalStorage from "../../hooks/useLocalStorage";

const Info = () => {
  const info = useLocalStorage("userData");
  const genre = useLocalStorage("genres");

  if (!info || !genre) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div>
        <img src={Profile} className={styles.profileImage} />
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.name}>{info.name}</p>
        <p className={styles.mail}>{info.mail}</p>
        <p className={styles.username}>{info.username}</p>
        <Chips categories={genre} color={"#9F94FF"} />
      </div>
    </div>
  );
};

export default Info;