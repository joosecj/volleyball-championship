'use client';

import { motion } from 'framer-motion';
import { Trophy, Medal, Crown, Gift } from 'lucide-react';
import { Prize } from '@/types/tournament';

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
      return 'from-yellow-400 to-yellow-600';
    case 2:
      return 'from-gray-300 to-gray-500';
    case 3:
      return 'from-amber-500 to-amber-700';
    default:
      return 'from-[var(--primary)] to-[var(--secondary)]';
  }
}

function getPlaceText(place: number) {
  switch (place) {
    case 1:
      return '🥇 1º Lugar';
    case 2:
      return '🥈 2º Lugar';
    case 3:
      return '🥉 3º Lugar';
    default:
      return `${place}º Lugar`;
  }
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {prizes.map((prize, index) => (
          <motion.div
            key={prize.place}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Prize Image */}
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  {getPrizeIcon(prize.place)}
                  <div className="mt-2 text-sm text-[var(--text-light)]">
                    Imagem do prêmio
                  </div>
                </div>
              </div>

              {/* Prize Info */}
              <div className="p-6">
                <div className="text-center">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-white font-semibold text-sm mb-3 bg-gradient-to-r ${getPrizeColor(prize.place)}`}>
                    {getPrizeIcon(prize.place)}
                    {getPlaceText(prize.place)}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-[var(--text-dark)] mb-2">
                    {prize.title}
                  </h3>
                  
                  <div className="text-[var(--text-light)] text-sm">
                    {prize.place === 1 && (
                      <p>Kit completo com smartwatch e fones de última geração</p>
                    )}
                    {prize.place === 2 && (
                      <p>Óculos esportivo de alta qualidade</p>
                    )}
                    {prize.place === 3 && (
                      <p>Medalhas personalizadas do torneio</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              {prize.place === 1 && (
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">★</span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-8 p-6 bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] rounded-xl text-white text-center"
      >
        <Trophy className="w-8 h-8 mx-auto mb-3" />
        <h3 className="text-lg font-semibold mb-2">
          🎉 Todos os Participantes Ganham!
        </h3>
        <p className="text-sm opacity-90">
          Além dos prêmios principais, todos os participantes recebem certificado de participação e lembranças do torneio.
        </p>
      </motion.div>
    </div>
  );
}
