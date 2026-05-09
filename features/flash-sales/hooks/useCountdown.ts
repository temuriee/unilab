"use client";

import { useState, useEffect } from "react";

interface TimeLeft {
  hours: string;
  minutes: string;
  seconds: string;
}

export function useCountdown(endsAt: Date): TimeLeft {
  const calculate = (): TimeLeft => {
    const diff = Math.max(0, endsAt.getTime() - Date.now());
    const totalSeconds = Math.floor(diff / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return {
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculate);

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(calculate()), 1000);
    return () => clearInterval(interval);
  }, [endsAt]);

  return timeLeft;
}
