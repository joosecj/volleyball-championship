"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

interface CountdownProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const difference = +targetDate - +new Date();
  let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};

const formatTime = (num: number) => String(num).padStart(2, "0");

export function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    calculateTimeLeft(targetDate)
  );
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(targetDate);
      setTimeLeft(newTimeLeft);

      if (
        newTimeLeft.days === 0 &&
        newTimeLeft.hours === 0 &&
        newTimeLeft.minutes === 0 &&
        newTimeLeft.seconds === 0
      ) {
        setIsExpired(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (isExpired) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
          <Clock className="w-4 h-4" />O torneio já começou!
        </div>
      </motion.div>
    );
  }

  const timeUnits = [
    {
      value: timeLeft.days,
      label: "Dia",
      plural: "Dias",
      show: timeLeft.days > 0,
    },
    { value: timeLeft.hours, label: "Hora", plural: "Horas", show: true },
    { value: timeLeft.minutes, label: "Minuto", plural: "Minutos", show: true },
    {
      value: timeLeft.seconds,
      label: "Segundo",
      plural: "Segundos",
      show: true,
    },
  ].filter((unit) => unit.show);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="inline-flex items-center gap-2 mb-4">
        <Clock className="w-5 h-5 text-[var(--primary)]" />
        <span className="text-lg font-semibold text-[var(--text-dark)]">
          Acompanhe o torneio em tempo real
        </span>
      </div>

      <div className="flex justify-center gap-4 flex-wrap">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md p-4 min-w-[80px]"
          >
            <div className="text-2xl font-bold text-[var(--primary)]">
              {formatTime(unit.value)}
            </div>
            <div className="text-xs text-[var(--text-light)] font-medium">
              {unit.value === 1 ? unit.label : unit.plural}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 text-sm text-[var(--text-light)]">
        {timeLeft.days > 0
          ? "até o início do torneio"
          : "restam para o início do torneio"}
      </div>
    </motion.div>
  );
}
