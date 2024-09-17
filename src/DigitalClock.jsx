import { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const meridiem = hours < 12 ? "AM" : "PM";

    hours = hours % 12 || hours;

    return `${padZero(hours)} : ${padZero(minutes)} : ${padZero(seconds)} ${meridiem}`;
  }

  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <>
      <div className="clock">
        <div className="numbers">{formatTime()}</div>
      </div>
    </>
  );
}

export default DigitalClock;
