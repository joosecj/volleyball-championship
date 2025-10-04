'use client';

import { motion } from 'framer-motion';
import { Heart, ExternalLink } from 'lucide-react';
import Image from 'next/image';
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
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
        {sponsors.map((sponsor, index) => (
          <motion.div
            key={sponsor.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <div className="bg-white rounded-lg shadow-md p-3 sm:p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[var(--primary)]">
              {/* Sponsor Logo */}
              <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300 p-2 sm:p-4">
                <Image
                  src={sponsor.logo}
                  alt={`Logo ${sponsor.name}`}
                  width={160}
                  height={160}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Sponsor Name */}
              <div className="text-center">
                <h3 className="font-semibold text-[var(--text-dark)] mb-1 text-sm sm:text-base">
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
          className="inline-flex items-center gap-2 bg-gray-200 text-[var(--primary)] px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
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
