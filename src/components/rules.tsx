'use client';

import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertTriangle, Users, Trophy, Clock } from 'lucide-react';
import { TournamentRules } from '@/types/tournament';

interface RulesProps {
  rules: TournamentRules;
}

export function Rules({ rules }: RulesProps) {
  const ruleSections = [
    {
      title: '📊 Sistema de Pontuação',
      icon: <Trophy className="w-6 h-6" />,
      color: 'var(--primary)',
      items: [
        `Set único de ${rules.setPoints} pontos`,
        `Final até ${rules.setPoints} pontos`,
        `A partir de ${rules.advantageFrom}x${rules.advantageFrom}, precisa abrir 2 de vantagem`,
        `Troca de lado a cada ${rules.sideSwitchEvery} pontos`
      ]
    },
    {
      title: '✅ Movimentos Permitidos',
      icon: <CheckCircle className="w-6 h-6" />,
      color: 'var(--success)',
      items: [
        'Bloqueio direto',
        'Ataque de qualquer tipo',
        'Manchete e espalmada',
        'Recuperação com um braço',
        'Toque de levantamento (se ombros perpendiculares)'
      ]
    },
    {
      title: '❌ Movimentos Proibidos',
      icon: <XCircle className="w-6 h-6" />,
      color: 'var(--error)',
      items: [
        'Passar de primeira de toque',
        'Pingar de ponta de dedo (exceto bico de pato)',
        'Bola no teto ou estrutura',
        'Bola fora da quadra'
      ]
    },
    {
      title: '🏆 Critérios de Classificação',
      icon: <Users className="w-6 h-6" />,
      color: 'var(--accent)',
      items: [
        '1º: Número de vitórias',
        '2º: Confronto direto',
        '3º: Saldo de pontos (feitos - sofridos)'
      ]
    },
    {
      title: '⚠️ Regras Especiais',
      icon: <AlertTriangle className="w-6 h-6" />,
      color: 'var(--warning)',
      items: [
        'Arbitragem colaborativa entre atletas',
        'Respeito e fair play sempre',
        'Decisões em conjunto quando necessário'
      ]
    },
    {
      title: '⏰ Horários e Cronograma',
      icon: <Clock className="w-6 h-6" />,
      color: 'var(--secondary)',
      items: [
        '12 jogos na fase de grupos',
        '4 jogos nas semifinais e finais',
        'Intervalos de 15 minutos entre jogos',
        'Cerimônia de premiação ao final'
      ]
    }
  ];

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
          Conheça todas as regras e regulamentos
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ruleSections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Section Header */}
            <div 
              className="px-6 py-4 text-white"
              style={{ backgroundColor: section.color }}
            >
              <div className="flex items-center gap-3">
                {section.icon}
                <h3 className="font-semibold text-lg">
                  {section.title}
                </h3>
              </div>
            </div>

            {/* Section Content */}
            <div className="p-6">
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (itemIndex * 0.05) }}
                    className="flex items-start gap-3"
                  >
                    <div 
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: section.color }}
                    />
                    <span className="text-[var(--text-dark)] text-sm">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Important Notice */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-8 p-6 bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] rounded-xl text-white"
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
