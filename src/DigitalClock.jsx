import { useState, useEffect } from "react";

import FormatSwitcher from "./FormatSwitcher";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  const [format, setFormat] = useState(24);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  function formatTime(format) {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    if (format == "12") {
      const meridiem = hours < 12 ? "AM" : "PM";
      hours = hours % 12 || hours;
      return `${padZero(hours)} : ${padZero(minutes)} : ${padZero(seconds)} ${meridiem}`;
    } else if (format == "24") {
      return `${padZero(hours)} : ${padZero(minutes)} : ${padZero(seconds)}`;
    }
  }

  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <>
      <div className="buttons-container">
        <FormatSwitcher format={setFormat} />
      </div>
      <div className="clock">
        <div className="numbers">{formatTime(format)}</div>
      </div>
    </>
  );
}

export default DigitalClock;
