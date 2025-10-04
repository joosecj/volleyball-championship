'use client';

import { motion } from 'framer-motion';
import { Clock, CheckCircle, PlayCircle } from 'lucide-react';
import { Match, Team } from '@/types/tournament';

interface MatchesProps {
  matches: Match[];
  teams: Team[];
}

function getTeamName(teamId: number, teams: Team[]): string {
  const team = teams.find(t => t.id === teamId);
  return team?.name || `Time ${teamId}`;
}

function getMatchStatus(match: Match): 'pending' | 'completed' | 'in-progress' {
  if (match.homeScore !== undefined && match.awayScore !== undefined) {
    return 'completed';
  }
  if (match.status === 'in-progress') {
    return 'in-progress';
  }
  return 'pending';
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

export function Matches({ matches, teams }: MatchesProps) {
  const allTeams = teams.flatMap(group => group.teams);

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-2xl font-bold text-[var(--text-dark)] mb-2">
          ⚽ Jogos da Fase de Grupos
        </h2>
        <p className="text-[var(--text-light)]">
          12 jogos - todos contra todos dentro de cada grupo
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {matches.map((match, index) => {
          const status = getMatchStatus(match);
          const homeTeam = getTeamName(match.home, allTeams);
          const awayTeam = getTeamName(match.away, allTeams);
          
          return (
            <motion.div
              key={match.game}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-4 border border-gray-100"
            >
              {/* Match Header */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-[var(--text-light)]">
                  Jogo {match.game}
                </span>
                <div className="flex items-center gap-1">
                  {getStatusIcon(status)}
                  <span className="text-xs text-[var(--text-light)]">
                    {getStatusText(status)}
                  </span>
                </div>
              </div>

              {/* Teams */}
              <div className="space-y-3">
                {/* Home Team */}
                <div className="flex items-center justify-between">
                  <span className="font-medium text-[var(--text-dark)] truncate flex-1">
                    {homeTeam}
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
                    {awayTeam}
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

              {/* Match Result */}
              {status === 'completed' && match.homeScore !== undefined && match.awayScore !== undefined && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 pt-3 border-t border-gray-100"
                >
                  <div className="text-center">
                    <span className="text-sm font-semibold text-[var(--text-dark)]">
                      {match.homeScore > match.awayScore ? homeTeam : awayTeam}
                    </span>
                    <span className="text-xs text-[var(--text-light)] ml-1">
                      venceu
                    </span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
