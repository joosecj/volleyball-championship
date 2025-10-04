'use client';

import { motion } from 'framer-motion';
import { Trophy, Medal, Crown, Clock, CheckCircle, PlayCircle } from 'lucide-react';
import { Bracket, BracketMatch, Group, Tournament } from '@/types/tournament';
import { areAllGroupMatchesCompleted, getBracketMatchStatus } from '@/utils/tournament';

interface BracketProps {
  bracket: Bracket;
  groups: Group[];
  tournament: Tournament;
}

// Função para obter os times classificados de cada grupo
function getQualifiedTeams(groups: Group[]) {
  const qualifiedTeams: { [key: string]: string } = {};
  
  groups.forEach(group => {
    // Ordena por vitórias (descendente)
    const sortedStandings = [...group.standings].sort((a, b) => b.wins - a.wins);
    
    // 1º e 2º colocados
    qualifiedTeams[`${group.id}#1`] = sortedStandings[0]?.teamName || `1º Grupo ${group.id}`;
    qualifiedTeams[`${group.id}#2`] = sortedStandings[1]?.teamName || `2º Grupo ${group.id}`;
  });
  
  return qualifiedTeams;
}

// Função para resolver os nomes dos times no chaveamento
function resolveTeamName(teamRef: string, qualifiedTeams: { [key: string]: string }, allGroupMatchesCompleted: boolean): string {
  // Se já é um nome de time (não uma referência), retorna como está
  if (!teamRef.includes('#') && !teamRef.includes('winner') && !teamRef.includes('loser')) {
    return teamRef;
  }
  
  // Se os jogos de grupo não terminaram, mostra placeholders didáticos
  if (!allGroupMatchesCompleted) {
    if (teamRef === 'A#1') return '1º do Grupo A';
    if (teamRef === 'A#2') return '2º do Grupo A';
    if (teamRef === 'B#1') return '1º do Grupo B';
    if (teamRef === 'B#2') return '2º do Grupo B';
    if (teamRef === 'winner(SF1)') return 'Vencedor SF1';
    if (teamRef === 'winner(SF2)') return 'Vencedor SF2';
    if (teamRef === 'loser(SF1)') return 'Perdedor SF1';
    if (teamRef === 'loser(SF2)') return 'Perdedor SF2';
    return teamRef;
  }
  
  // Se os jogos terminaram, resolve os nomes reais
  return qualifiedTeams[teamRef] || teamRef;
}

function getStatusIcon(status: string) {
  switch (status) {
    case 'completed':
      return <CheckCircle className="w-4 h-4 text-green-500" />;
    case 'in-progress':
      return <PlayCircle className="w-4 h-4 text-blue-500" />;
    default:
      return <Clock className="w-4 h-4 text-gray-400" />;
  }
}

function getStatusText(status: string) {
  switch (status) {
    case 'completed':
      return 'Finalizado';
    case 'in-progress':
      return 'Em andamento';
    default:
      return 'Agendado';
  }
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


function BracketMatchCard({ match, matchKey, qualifiedTeams, allGroupMatchesCompleted }: { match: BracketMatch; matchKey: string; qualifiedTeams: { [key: string]: string }; allGroupMatchesCompleted: boolean }) {
  const status = getBracketMatchStatus(match);
  const isCompleted = status === 'completed';
  
  // Resolve os nomes dos times
  const homeTeamName = resolveTeamName(match.home, qualifiedTeams, allGroupMatchesCompleted);
  const awayTeamName = resolveTeamName(match.away, qualifiedTeams, allGroupMatchesCompleted);
  
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
        <div className="flex items-center gap-1">
          {getStatusIcon(status)}
          <span className="text-xs text-[var(--text-light)]">
            {getStatusText(status)}
          </span>
        </div>
      </div>

      {/* Teams */}
      {isCompleted ? (
        /* Jogo Finalizado - Mostra apenas o vencedor */
        <div className="text-center py-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Trophy className="w-6 h-6 text-yellow-500" />
            <span className="text-xl font-bold text-[var(--text-dark)]">
              {match.homeScore && match.awayScore && match.homeScore > match.awayScore ? homeTeamName : awayTeamName}
            </span>
          </div>
          <div className="text-sm text-[var(--text-light)]">
            Vencedor
          </div>
          <div className="mt-2 text-lg font-semibold text-[var(--primary)]">
            {match.homeScore} - {match.awayScore}
          </div>
        </div>
      ) : (
        /* Jogo Pendente - Mostra VS */
        <div className="space-y-3">
          {/* Home Team */}
          <div className="flex items-center justify-between">
            <span className="font-medium text-[var(--text-dark)] truncate flex-1">
              {homeTeamName}
            </span>
            <div className="w-12 text-center">
              <span className="text-gray-400">-</span>
            </div>
          </div>

          {/* VS */}
          <div className="text-center">
            <span className="text-xs text-[var(--text-light)] font-medium">VS</span>
          </div>

          {/* Away Team */}
          <div className="flex items-center justify-between">
            <span className="font-medium text-[var(--text-dark)] truncate flex-1">
              {awayTeamName}
            </span>
            <div className="w-12 text-center">
              <span className="text-gray-400">-</span>
            </div>
          </div>
        </div>
      )}

    </motion.div>
  );
}

export function BracketComponent({ bracket, groups, tournament }: BracketProps) {
  const qualifiedTeams = getQualifiedTeams(groups);
  const bracketMatches = Object.entries(bracket);
  const allGroupMatchesCompleted = areAllGroupMatchesCompleted(tournament);

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

      {/* Chaveamento - Sempre mostra, mas com placeholders didáticos */}

      {/* Semifinals */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {bracketMatches.slice(0, 2).map(([matchKey, match], index) => (
          <motion.div
            key={matchKey}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <BracketMatchCard match={match} matchKey={matchKey} qualifiedTeams={qualifiedTeams} allGroupMatchesCompleted={allGroupMatchesCompleted} />
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
            <BracketMatchCard match={match} matchKey={matchKey} qualifiedTeams={qualifiedTeams} allGroupMatchesCompleted={allGroupMatchesCompleted} />
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
