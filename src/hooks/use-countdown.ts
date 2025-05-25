import { useEffect, useState } from "react";

import { pad } from "@/config/utils";

export const useCountdown = (targetUnixTs: number) => {
  const nowUnixTs = Date.now();
  const [timeLeft, setTimeLeft] = useState(targetUnixTs - nowUnixTs);
  useEffect(() => {
    const interval = setInterval(() => {
      const delta = targetUnixTs - Date.now();
      if (delta <= 0) {
        setTimeLeft(0);
        clearInterval(interval);
      } else {
        setTimeLeft(delta);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetUnixTs]);

  const totalSeconds = Math.max(0, Math.floor(timeLeft / 1000));
  const seconds = pad(totalSeconds % 60);
  const minutes = pad(Math.floor(totalSeconds / 60) % 60);
  const hours = pad(Math.floor(totalSeconds / 3600) % 24);
  const days = pad(Math.floor(totalSeconds / 86400));
  const timeLeftFormatted = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  return { timeLeft, timeLeftFormatted };
};
