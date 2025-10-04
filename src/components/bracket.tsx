'use client';

import { motion } from 'framer-motion';
import { Trophy, Medal, Crown } from 'lucide-react';
import { Bracket, BracketMatch } from '@/types/tournament';

interface BracketProps {
  bracket: Bracket;
  onUpdateBracketResult?: (matchKey: keyof Bracket, homeScore: number, awayScore: number) => void;
}

function getMatchIcon(matchKey: string) {
  switch (matchKey) {
    case 'SF1':
    case 'SF2':
      return <Medal className="w-4 h-4" />;
    case 'ThirdPlace':
      return <Medal className="w-4 h-4" />;
    case 'Final':
      return <Crown className="w-4 h-4" />;
    default:
      return <Trophy className="w-4 h-4" />;
  }
}

function getMatchTitle(matchKey: string) {
  switch (matchKey) {
    case 'SF1':
      return 'Semifinal 1';
    case 'SF2':
      return 'Semifinal 2';
    case 'ThirdPlace':
      return '3º Lugar';
    case 'Final':
      return 'Final';
    default:
      return 'Jogo';
  }
}

function getMatchColor(matchKey: string) {
  switch (matchKey) {
    case 'SF1':
    case 'SF2':
      return 'var(--primary)';
    case 'ThirdPlace':
      return 'var(--accent)';
    case 'Final':
      return 'var(--secondary)';
    default:
      return 'var(--primary)';
  }
}

function BracketMatchCard({ match, matchKey }: { match: BracketMatch; matchKey: string }) {
  const status = match.status || 'pending';
  const isCompleted = status === 'completed';
  const isInProgress = status === 'in-progress';
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-4 border-2 border-gray-100 hover:border-[var(--primary)] transition-colors"
    >
      {/* Match Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {getMatchIcon(matchKey)}
          <span className="font-semibold text-[var(--text-dark)]">
            {getMatchTitle(matchKey)}
          </span>
        </div>
        <div 
          className="px-2 py-1 rounded-full text-xs font-medium text-white"
          style={{ backgroundColor: getMatchColor(matchKey) }}
        >
          {isCompleted ? 'Finalizado' : isInProgress ? 'Em andamento' : 'Agendado'}
        </div>
      </div>

      {/* Teams */}
      <div className="space-y-3">
        {/* Home Team */}
        <div className="flex items-center justify-between">
          <span className="font-medium text-[var(--text-dark)] truncate flex-1">
            {match.home}
          </span>
          <div className="w-12 text-center">
            {match.homeScore !== undefined ? (
              <span className="text-lg font-bold text-[var(--primary)]">
                {match.homeScore}
              </span>
            ) : (
              <span className="text-gray-400">-</span>
            )}
          </div>
        </div>

        {/* VS */}
        <div className="text-center">
          <span className="text-xs text-[var(--text-light)] font-medium">VS</span>
        </div>

        {/* Away Team */}
        <div className="flex items-center justify-between">
          <span className="font-medium text-[var(--text-dark)] truncate flex-1">
            {match.away}
          </span>
          <div className="w-12 text-center">
            {match.awayScore !== undefined ? (
              <span className="text-lg font-bold text-[var(--primary)]">
                {match.awayScore}
              </span>
            ) : (
              <span className="text-gray-400">-</span>
            )}
          </div>
        </div>
      </div>

      {/* Winner */}
      {isCompleted && match.homeScore !== undefined && match.awayScore !== undefined && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="mt-4 pt-3 border-t border-gray-100"
        >
          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <Trophy className="w-4 h-4 text-yellow-500" />
              <span className="font-semibold text-[var(--text-dark)]">
                {match.homeScore > match.awayScore ? match.home : match.away}
              </span>
            </div>
            <span className="text-xs text-[var(--text-light)]">
              venceu
            </span>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export function BracketComponent({ bracket }: BracketProps) {
  const bracketMatches = Object.entries(bracket);

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-2xl font-bold text-[var(--text-dark)] mb-2">
          🏆 Chaveamento Eliminatório
        </h2>
        <p className="text-[var(--text-light)]">
          Semifinais e finais do torneio
        </p>
      </motion.div>

      {/* Semifinals */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {bracketMatches.slice(0, 2).map(([matchKey, match], index) => (
          <motion.div
            key={matchKey}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <BracketMatchCard match={match} matchKey={matchKey} />
          </motion.div>
        ))}
      </div>

      {/* Finals */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {bracketMatches.slice(2).map(([matchKey, match], index) => (
          <motion.div
            key={matchKey}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: (index + 2) * 0.2 }}
          >
            <BracketMatchCard match={match} matchKey={matchKey} />
          </motion.div>
        ))}
      </div>

      {/* Tournament Flow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-8 p-6 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-xl text-white"
      >
        <h3 className="text-lg font-semibold mb-3 text-center">
          🏐 Como Funciona o Chaveamento
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
          <div className="text-center">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="font-bold">1</span>
            </div>
            <p>1º A × 2º B</p>
          </div>
          <div className="text-center">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="font-bold">2</span>
            </div>
            <p>1º B × 2º A</p>
          </div>
          <div className="text-center">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="font-bold">3</span>
            </div>
            <p>Perdedores → 3º lugar</p>
          </div>
          <div className="text-center">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="font-bold">4</span>
            </div>
            <p>Vencedores → Final</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
