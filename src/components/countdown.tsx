'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  targetDate: Date;
}

export function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        setIsExpired(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
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
          <Clock className="w-4 h-4" />
          O torneio já começou!
        </div>
      </motion.div>
    );
  }

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
        {/* Days */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-lg shadow-md p-4 min-w-[80px]"
        >
          <div className="text-2xl font-bold text-[var(--primary)]">
            {timeLeft.days.toString().padStart(2, '0')}
          </div>
          <div className="text-xs text-[var(--text-light)] font-medium">
            {timeLeft.days === 1 ? 'Dia' : 'Dias'}
          </div>
        </motion.div>

        {/* Hours */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-4 min-w-[80px]"
        >
          <div className="text-2xl font-bold text-[var(--primary)]">
            {timeLeft.hours.toString().padStart(2, '0')}
          </div>
          <div className="text-xs text-[var(--text-light)] font-medium">
            {timeLeft.hours === 1 ? 'Hora' : 'Horas'}
          </div>
        </motion.div>

        {/* Minutes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-lg shadow-md p-4 min-w-[80px]"
        >
          <div className="text-2xl font-bold text-[var(--primary)]">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </div>
          <div className="text-xs text-[var(--text-light)] font-medium">
            {timeLeft.minutes === 1 ? 'Minuto' : 'Minutos'}
          </div>
        </motion.div>

        {/* Seconds */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-lg shadow-md p-4 min-w-[80px]"
        >
          <div className="text-2xl font-bold text-[var(--primary)]">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </div>
          <div className="text-xs text-[var(--text-light)] font-medium">
            {timeLeft.seconds === 1 ? 'Segundo' : 'Segundos'}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-4 text-sm text-[var(--text-light)]"
      >
        até o início do torneio
      </motion.div>
    </motion.div>
  );
}
