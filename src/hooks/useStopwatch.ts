import { useEffect, useState } from 'react';

export default function usesStopwatch (isRunning: boolean): number {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
    if (!isRunning) {
      return;
    }

    const intervalId = setInterval(() => {
      setSeconds((currentSeconds) => currentSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  return seconds;
}