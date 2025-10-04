'use client';

import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertTriangle, Users, Trophy, Clock } from 'lucide-react';
import { TournamentRules } from '@/types/tournament';

interface RulesProps {
  rules: TournamentRules;
}

export function Rules({ rules }: RulesProps) {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-2xl font-bold text-[var(--text-dark)] mb-2">
          📋 Regras do Torneio
        </h2>
        <p className="text-[var(--text-light)]">
          Conheça todas as regras e regulamentos atualizados
        </p>
      </motion.div>

      {/* Resumo das Regras Principais */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
      >
        <div className="bg-white rounded-lg p-4 shadow-md text-center">
          <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
          <h3 className="font-semibold text-sm text-[var(--text-dark)] mb-1">Pontuação</h3>
          <p className="text-xs text-[var(--text-light)]">
            Set: {rules.regularSetPoints}pts<br />
            Final: {rules.finalPoints}pts
          </p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-md text-center">
          <Clock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
          <h3 className="font-semibold text-sm text-[var(--text-dark)] mb-1">Troca de Lado</h3>
          <p className="text-xs text-[var(--text-light)]">
            Aos {rules.sideSwitchAt} pontos
          </p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-md text-center">
          <AlertTriangle className="w-8 h-8 text-orange-500 mx-auto mb-2" />
          <h3 className="font-semibold text-sm text-[var(--text-dark)] mb-1">Tempo Técnico</h3>
          <p className="text-xs text-[var(--text-light)]">
            {rules.timeoutPerTeam} por dupla<br />
            {rules.timeoutDuration}s cada
          </p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-md text-center">
          <Users className="w-8 h-8 text-green-500 mx-auto mb-2" />
          <h3 className="font-semibold text-sm text-[var(--text-dark)] mb-1">Arbitragem</h3>
          <p className="text-xs text-[var(--text-light)]">
            Colaborativa<br />
            Fair play
          </p>
        </div>
      </motion.div>

      {/* Regras Detalhadas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rules.detailedRules.map((rule, index) => (
          <motion.div
            key={rule.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Rule Header */}
            <div className="px-6 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{rule.icon}</span>
                <h3 className="font-semibold text-lg">
                  {rule.title}
                </h3>
              </div>
            </div>

            {/* Rule Content */}
            <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-100">
              <div className="space-y-4">
                {/* Descrição Principal */}
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-800 text-sm font-medium">
                      {rule.description}
                    </p>
                  </div>
                </div>

                {/* O que é Permitido */}
                {rule.allowed && (
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-800 text-sm">
                        <span className="font-medium text-green-600">✅ {rule.allowed}</span>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Critérios de Classificação */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-8 p-6 bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] rounded-xl text-white"
      >
        <div className="text-center">
          <Trophy className="w-8 h-8 mx-auto mb-3" />
          <h3 className="text-lg font-semibold mb-3">
            🏆 Critérios de Classificação
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="font-semibold">1º Critério:</span><br />
              Número de vitórias
            </div>
            <div>
              <span className="font-semibold">2º Critério:</span><br />
              Confronto direto
            </div>
            <div>
              <span className="font-semibold">3º Critério:</span><br />
              Saldo de pontos
            </div>
          </div>
        </div>
      </motion.div>

      {/* Importante */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="mt-6 p-6 bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)] rounded-xl text-white"
      >
        <div className="text-center">
          <AlertTriangle className="w-8 h-8 mx-auto mb-3" />
          <h3 className="text-lg font-semibold mb-2">
            ⚠️ Importante
          </h3>
          <p className="text-sm opacity-90">
            Em caso de dúvidas sobre as regras, consulte a organização do torneio. 
            O fair play e o respeito são fundamentais para o sucesso do evento.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
