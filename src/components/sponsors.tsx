'use client';

import { motion } from 'framer-motion';
import { Heart, ExternalLink } from 'lucide-react';
import { Sponsor } from '@/types/tournament';

interface SponsorsProps {
  sponsors: Sponsor[];
}

export function Sponsors({ sponsors }: SponsorsProps) {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-2xl font-bold text-[var(--text-dark)] mb-2">
          🤝 Patrocinadores
        </h2>
        <p className="text-[var(--text-light)]">
          Agradecemos aos nossos parceiros que tornaram este torneio possível
        </p>
      </motion.div>

      {/* Sponsors Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sponsors.map((sponsor, index) => (
          <motion.div
            key={sponsor.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[var(--primary)]">
              {/* Sponsor Logo Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[var(--primary)] rounded-lg flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-lg">
                      {sponsor.name.charAt(0)}
                    </span>
                  </div>
                  <div className="text-xs text-[var(--text-light)]">
                    Logo
                  </div>
                </div>
              </div>

              {/* Sponsor Name */}
              <div className="text-center">
                <h3 className="font-semibold text-[var(--text-dark)] mb-1">
                  {sponsor.name}
                </h3>
                <div className="flex items-center justify-center gap-1 text-xs text-[var(--text-light)]">
                  <Heart className="w-3 h-3" />
                  <span>Parceiro oficial</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Become a Sponsor */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-8 p-6 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-xl text-white text-center"
      >
        <h3 className="text-lg font-semibold mb-3">
          🚀 Quer ser um Patrocinador?
        </h3>
        <p className="text-sm opacity-90 mb-4">
          Apoie o esporte e ganhe visibilidade para sua marca
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 bg-white text-[var(--primary)] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          Saiba Mais
        </motion.button>
      </motion.div>

      {/* Thank You Message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center py-8"
      >
        <div className="inline-flex items-center gap-2 text-[var(--text-light)]">
          <Heart className="w-5 h-5 text-red-500" />
          <span className="text-lg font-medium">
            Obrigado por apoiar o beach vôlei!
          </span>
        </div>
      </motion.div>
    </div>
  );
}
