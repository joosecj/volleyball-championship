'use client';

import { motion } from 'framer-motion';
import { Trophy, Users } from 'lucide-react';
import { Group } from '@/types/tournament';

interface GroupsProps {
  groups: Group[];
}

interface GroupStandings {
  teamId: number;
  teamName: string;
  wins: number;
  losses: number;
  pointsFor: number;
  pointsAgainst: number;
  pointDiff: number;
}

function calculateStandings(group: Group): GroupStandings[] {
  // Mock standings calculation - in real app, this would be calculated from match results
  const standings: GroupStandings[] = group.teams.map((team, index) => ({
    teamId: team.id,
    teamName: team.name,
    wins: Math.floor(Math.random() * 3), // 0-2 wins
    losses: 2 - Math.floor(Math.random() * 3), // 0-2 losses
    pointsFor: Math.floor(Math.random() * 50) + 20,
    pointsAgainst: Math.floor(Math.random() * 50) + 20,
    pointDiff: 0
  }));

  // Calculate point difference
  standings.forEach(standing => {
    standing.pointDiff = standing.pointsFor - standing.pointsAgainst;
  });

  // Sort by wins, then head-to-head, then point difference
  return standings.sort((a, b) => {
    if (b.wins !== a.wins) return b.wins - a.wins;
    return b.pointDiff - a.pointDiff;
  });
}

export function Groups({ groups }: GroupsProps) {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-2xl font-bold text-[var(--text-dark)] mb-2">
          🏐 Fase de Grupos
        </h2>
        <p className="text-[var(--text-light)]">
          8 duplas divididas em 2 grupos de 4
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {groups.map((group) => {
          const standings = calculateStandings(group);
          const groupColor = group.color === 'blue' ? 'var(--group-blue)' : 'var(--group-orange)';
          
          return (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {/* Header */}
              <div 
                className="px-4 py-3 text-white font-semibold"
                style={{ backgroundColor: groupColor }}
              >
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Grupo {group.id}
                </div>
              </div>

              {/* Standings */}
              <div className="p-4">
                <div className="space-y-3">
                  {standings.map((standing) => (
                    <motion.div
                      key={standing.teamId}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className={`flex items-center justify-between p-3 rounded-lg ${
                        standings.indexOf(standing) === 0 ? 'bg-yellow-50 border-2 border-yellow-200' : 'bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          standings.indexOf(standing) === 0 ? 'bg-yellow-400 text-white' : 'bg-gray-200 text-gray-600'
                        }`}>
                          {standings.indexOf(standing) + 1}
                        </div>
                        <span className="font-medium text-[var(--text-dark)]">
                          {standing.teamName}
                        </span>
                        {standings.indexOf(standing) === 0 && <Trophy className="w-4 h-4 text-yellow-500" />}
                      </div>
                      
                      <div className="text-right text-sm">
                        <div className="font-semibold text-[var(--text-dark)]">
                          {standing.wins}V - {standing.losses}D
                        </div>
                        <div className="text-[var(--text-light)]">
                          {standing.pointDiff > 0 ? '+' : ''}{standing.pointDiff}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}