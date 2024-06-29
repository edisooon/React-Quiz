import { useState, useEffect } from "react";

export default function QuestionTimer({ time, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(time);

  useEffect(() => {
    const timer = setTimeout(onTimeout, time);
    return () => {
      clearTimeout(timer);
    };
  }, [time, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 10);
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={time} />;
}
