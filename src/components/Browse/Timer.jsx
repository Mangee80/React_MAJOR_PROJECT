import up from "../../assets/up.png";
import down from "../../assets/down.png";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useState } from "react";
import styles from "./Timer.module.css";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [playing, setPlaying] = useState(false);

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  const renderTime = ({ remainingTime }) => {
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;

    return (
      <div className={styles.countdownCircle}>
        {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
      </div>
    );
  };

  const handleTimeChange = (unit, amount) => {
    if (unit === "hours") {
      setHours((prev) => Math.max(0, prev + amount));
    } else if (unit === "minutes") {
      setMinutes((prev) => {
        const newValue = prev + amount;
        if (newValue < 0) return 0;
        if (newValue > 59) return 59;
        return newValue;
      });
    } else if (unit === "seconds") {
      setSeconds((prev) => {
        const newValue = prev + amount;
        if (newValue < 0) return 0;
        if (newValue > 59) return 59;
        return newValue;
      });
    }
  };

  const totalSeconds = hours * 3600 + minutes * 60 + seconds;

  return (
    <div className={styles.timerContainer}>
      <div>
        <CountdownCircleTimer
          isPlaying={playing}
          duration={totalSeconds}
          colors={["#FF6A6A"]}
          onComplete={() => setPlaying(false)}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      <div className={styles.timeControls}>
        <div className={styles.timeUnits}>
          <div className={styles.timeUnit}>
            <p>Hours</p>
            <img src={up} alt="up arrow" className={styles.arrow} onClick={() => handleTimeChange("hours", 1)} />
            <p>{formatTime(hours)}</p>
            <img src={down} alt="down arrow" className={styles.arrow} onClick={() => handleTimeChange("hours", -1)} />
          </div>
          <div className={styles.timeUnit}>
            <p>Minutes</p>
            <img src={up} alt="up arrow" className={styles.arrow} onClick={() => handleTimeChange("minutes", 1)} />
            <p>{formatTime(minutes)}</p>
            <img src={down} alt="down arrow" className={styles.arrow} onClick={() => handleTimeChange("minutes", -1)} />
          </div>
          <div className={styles.timeUnit}>
            <p>Seconds</p>
            <img src={up} alt="up arrow" className={styles.arrow} onClick={() => handleTimeChange("seconds", 1)} />
            <p>{formatTime(seconds)}</p>
            <img src={down} alt="down arrow" className={styles.arrow} onClick={() => handleTimeChange("seconds", -1)} />
          </div>
        </div>
        <div className={styles.startButton} onClick={() => setPlaying((prev) => !prev)}>
          {playing ? <p>Pause</p> : <p>Start</p>}
        </div>
      </div>
    </div>
  );
};

export default Timer;
