import { useEffect, useState } from 'react';
import './taimer.css';

function Taimer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  let taimer;

  useEffect(() => {
    taimer = setInterval(() => {
      setSeconds(seconds + 1);

      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);
    return () => clearInterval(taimer);
  });

  const run = () => {
    taimer = setInterval(() => {
      setSeconds(seconds + 1);

      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);
    return () => clearInterval(taimer);
  };

  const restart = () => {
    setSeconds(0);
    setMinutes(0);
  };

  const stop = () => {
    clearInterval(taimer);
  };

  const start = () => run();

  return (
    <div className="timer">
      <div className="container">
        <div className="timer_container">
          <h4>
            {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </h4>
          <button className="restart btn-restart" type="button" onClick={restart} />
          <button className="stop btn-stop" type="button" onClick={stop} />
          <button className="stop btn-start" type="button" onClick={start} />
        </div>
      </div>
    </div>
  );
}

export default Taimer;
