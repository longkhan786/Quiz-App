import { useEffect, useState } from "react";

// million-ignore
export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);
    return () => clearTimeout(timer);
  }, [onTimeout, timeout]);

  useEffect(() => {
    const intervel = setInterval(() => {
      setRemainingTime((prev) => prev - 100);
    }, 100);

    return () => clearInterval(intervel);
  }, []);
  return (
    <progress
      id="question-time"
      max={timeout}
      className={mode}
      value={remainingTime}
    ></progress>
  );
}
