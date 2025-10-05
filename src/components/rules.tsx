"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  XCircle,
  Info,
  Users,
  Trophy,
  Clock,
  AlertTriangle,
} from "lucide-react";
import { TournamentRules, Rule } from "@/types/tournament";

interface RulesProps {
  rules: TournamentRules;
}

function RuleCard({ rule, index }: { rule: Rule; index: number }) {
  const getIcon = () => {
    switch (rule.type) {
      case "prohibited":
        return <XCircle className="w-5 h-5 text-red-500" />;
      case "allowed":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "info":
        return <Info className="w-5 h-5 text-blue-500" />;
      default:
        return <Info className="w-5 h-5 text-gray-500" />;
    }
  };

  const getCardStyle = () => {
    switch (rule.type) {
      case "prohibited":
        return "border-l-4 border-red-500 bg-red-50";
      case "allowed":
        return "border-l-4 border-green-500 bg-green-50";
      case "info":
        return "border-l-4 border-blue-500 bg-blue-50";
      default:
        return "border-l-4 border-gray-500 bg-gray-50";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${getCardStyle()}`}
    >
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-1">
            {getIcon()}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">{rule.icon}</span>
              <h3 className="font-semibold text-[var(--text-dark)]">
                {rule.title}
              </h3>
            </div>
            <p className="text-sm text-[var(--text-dark)] font-medium mb-2">
              {rule.description}
            </p>
            {rule.details && (
              <p className="text-xs text-[var(--text-light)]">
                {rule.details}
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function RuleSection({ 
  section, 
  index 
}: { 
  section: { title: string; rules: Rule[] }; 
  index: number 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="space-y-4"
    >
      <h3 className="text-xl font-bold text-[var(--text-dark)] mb-4 flex items-center gap-2">
        {section.title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {section.rules.map((rule, ruleIndex) => (
          <RuleCard 
            key={rule.id} 
            rule={rule} 
            index={ruleIndex} 
          />
        ))}
      </div>
    </motion.div>
  );
}

export function Rules({ rules }: RulesProps) {
  return (
    <div className="space-y-8">
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
          Conheça todas as regras e regulamentos organizados por categoria
        </p>
      </motion.div>

      {/* Quick Info Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <div className="bg-white rounded-lg p-4 shadow-md text-center">
          <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
          <h3 className="font-semibold text-sm text-[var(--text-dark)] mb-1">
            Pontuação
          </h3>
          <p className="text-xs text-[var(--text-light)]">
            Set: {rules.regularSetPoints}pts
            <br />
            Final: {rules.finalPoints}pts
          </p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-md text-center">
          <Clock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
          <h3 className="font-semibold text-sm text-[var(--text-dark)] mb-1">
            Troca de Lado
          </h3>
          <p className="text-xs text-[var(--text-light)]">
            Aos {rules.sideSwitchAt} pontos
          </p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-md text-center">
          <AlertTriangle className="w-8 h-8 text-orange-500 mx-auto mb-2" />
          <h3 className="font-semibold text-sm text-[var(--text-dark)] mb-1">
            Tempo Técnico
          </h3>
          <p className="text-xs text-[var(--text-light)]">
            {rules.timeoutPerTeam} pedido
            <br />
            {rules.timeoutDuration}s de duração
          </p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-md text-center">
          <Users className="w-8 h-8 text-green-500 mx-auto mb-2" />
          <h3 className="font-semibold text-sm text-[var(--text-dark)] mb-1">
            Arbitragem
          </h3>
          <p className="text-xs text-[var(--text-light)]">
            Colaborativa
            <br />
            Espírito esportivo
          </p>
        </div>
      </motion.div>

      {/* Rule Sections */}
      <div className="space-y-8">
        <RuleSection section={rules.gameSystem} index={0} />
        <RuleSection section={rules.prohibitedActions} index={1} />
        <RuleSection section={rules.allowedActions} index={2} />
        <RuleSection section={rules.generalRules} index={3} />
      </div>

      {/* Tiebreaker Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-xl p-6 text-white text-center"
      >
        <h3 className="text-lg font-semibold mb-2">
          🏆 Critérios de Desempate
        </h3>
        <p className="text-sm opacity-90">
          {rules.tiebreakers
            .map((tiebreaker) => {
              switch (tiebreaker) {
                case "wins":
                  return "Número de vitórias";
                case "headToHead":
                  return "Confronto direto";
                case "pointDiff":
                  return "Diferença de pontos";
                default:
                  return tiebreaker;
              }
            })
            .join(" → ")}
        </p>
      </motion.div>
    </div>
  );
}