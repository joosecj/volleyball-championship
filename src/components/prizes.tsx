"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Crown, Gift } from "lucide-react";
import { Prize } from "@/types/tournament";

interface PrizesProps {
  prizes: Prize[];
}

function getPrizeIcon(place: number) {
  switch (place) {
    case 1:
      return <Crown className="w-8 h-8 text-yellow-500" />;
    case 2:
      return <Medal className="w-8 h-8 text-gray-400" />;
    case 3:
      return <Medal className="w-8 h-8 text-amber-600" />;
    default:
      return <Gift className="w-8 h-8 text-[var(--primary)]" />;
  }
}

function getPrizeColor(place: number) {
  switch (place) {
    case 1:
      return "from-yellow-400 to-yellow-600";
    case 2:
      return "from-gray-300 to-gray-500";
    case 3:
      return "from-amber-500 to-amber-700";
    default:
      return "from-[var(--primary)] to-[var(--secondary)]";
  }
}

function PrizeCard({ prize }: { prize: Prize }) {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
        prize.place === 1 ? "ring-2 ring-yellow-400 ring-opacity-50" : ""
      }`}
    >
      <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        <div className="text-center">
          {getPrizeIcon(prize.place)}
          <div className="mt-1 text-xs text-[var(--text-light)]">
            {prize.place === 1
              ? "Troféu"
              : prize.place === 2
              ? "Medalha Prata"
              : "Medalha Bronze"}
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="text-center">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-white font-semibold text-sm mb-2 bg-gradient-to-r ${getPrizeColor(
              prize.place
            )}`}
          >
            {getPrizeIcon(prize.place)}
            {prize.title}
          </div>

          {prize.subtitle && (
            <p className="text-sm text-[var(--text-light)] mb-3">
              {prize.subtitle}
            </p>
          )}

          <div className="space-y-1">
            {prize.prizes.map((prizeItem, prizeIndex) => (
              <div
                key={prizeIndex}
                className="text-sm text-[var(--text-dark)] bg-gray-50 rounded-lg p-2"
              >
                {prizeItem}
              </div>
            ))}
          </div>
        </div>
      </div>

      {prize.place === 1 && (
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">★</span>
        </div>
      )}
    </div>
  );
}

export function Prizes({ prizes }: PrizesProps) {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-2xl font-bold text-[var(--text-dark)] mb-2">
          🏆 Premiação
        </h2>
        <p className="text-[var(--text-light)]">
          Prêmios incríveis para os campeões
        </p>
      </motion.div>

      {/* Pódio Layout */}
      <div className="relative">
        {/* Mobile: Layout vertical */}
        <div className="block md:hidden space-y-6">
          {prizes.map((prize, index) => (
            <motion.div
              key={prize.place}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <PrizeCard prize={prize} />
            </motion.div>
          ))}
        </div>

        <div className="hidden md:block">
          <div className="flex items-end justify-center gap-3 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-80 transform translate-y-4"
            >
              <PrizeCard prize={prizes[1]} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-80 transform scale-105"
            >
              <PrizeCard prize={prizes[0]} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-80 transform translate-y-4"
            >
              <PrizeCard prize={prizes[2]} />
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-6 p-6 bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] rounded-xl text-white text-center"
      >
        <Trophy className="w-8 h-8 mx-auto mb-3" />
        <h3 className="text-lg font-semibold mb-2">
          🎉 Todos os Participantes Ganham!
        </h3>
        <p className="text-sm opacity-90">
          Além dos prêmios principais, todos os participantes recebem
          certificado de participação e lembranças do torneio.
        </p>
      </motion.div>
    </div>
  );
}
