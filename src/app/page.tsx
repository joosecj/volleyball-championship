'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Trophy, Users, Calendar, Award, Heart, Camera } from 'lucide-react';
import { Groups } from '@/components/groups';
import { Matches } from '@/components/matches';
import { BracketComponent } from '@/components/bracket';
import { Prizes } from '@/components/prizes';
import { Sponsors } from '@/components/sponsors';
import { Rules } from '@/components/rules';
import tournamentData from '@/data/tournament.json';
import { Tournament } from '@/types/tournament';

const tournament = tournamentData as Tournament;

const navigationItems = [
  { id: 'groups', label: 'Grupos', icon: <Users className="w-5 h-5" /> },
  { id: 'matches', label: 'Jogos', icon: <Calendar className="w-5 h-5" /> },
  { id: 'bracket', label: 'Chaveamento', icon: <Trophy className="w-5 h-5" /> },
  { id: 'prizes', label: 'Premiação', icon: <Award className="w-5 h-5" /> },
  { id: 'rules', label: 'Regras', icon: <Heart className="w-5 h-5" /> },
  { id: 'sponsors', label: 'Patrocinadores', icon: <Camera className="w-5 h-5" /> },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState('groups');

  const renderSection = () => {
    switch (activeSection) {
      case 'groups':
        return <Groups groups={tournament.groups} />;
      case 'matches':
        return <Matches matches={tournament.schedule} teams={tournament.groups} />;
      case 'bracket':
        return <BracketComponent bracket={tournament.bracket} />;
      case 'prizes':
        return <Prizes prizes={tournament.prizes} />;
      case 'rules':
        return <Rules rules={tournament.rules} />;
      case 'sponsors':
        return <Sponsors sponsors={tournament.sponsors} />;
      default:
        return <Groups groups={tournament.groups} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--primary-light)] to-[var(--primary)]">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-dark)] mb-2">
              🏐 {tournament.event}
            </h1>
            <p className="text-[var(--text-light)] text-lg">
              Acompanhe o torneio em tempo real
            </p>
          </div>
        </div>
      </motion.header>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white shadow-md sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto py-4 gap-2">
            {navigationItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-[var(--primary)] text-white shadow-md'
                    : 'text-[var(--text-light)] hover:bg-gray-100 hover:text-[var(--text-dark)]'
                }`}
              >
                {item.icon}
                {item.label}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {renderSection()}
        </motion.div>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="bg-[var(--primary-dark)] text-white py-8 mt-12"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Event Info */}
            <div>
              <h3 className="font-semibold text-lg mb-3">🏐 Sobre o Evento</h3>
              <p className="text-sm opacity-90">
                Torneio de duplas de beach vôlei organizado pela Escola Professor Cezar. 
                Competição amigável com foco no desenvolvimento esportivo.
              </p>
            </div>

            {/* Gallery Info */}
            <div>
              <h3 className="font-semibold text-lg mb-3">📸 Galeria de Fotos</h3>
              <p className="text-sm opacity-90 mb-2">
                {tournament.gallery.provider}
              </p>
              <a 
                href={tournament.gallery.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] hover:underline text-sm"
              >
                Ver fotos do torneio
              </a>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-lg mb-3">📞 Contato</h3>
              <p className="text-sm opacity-90">
                Para dúvidas sobre o torneio, entre em contato com a organização.
              </p>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-6">
            <p className="text-sm opacity-75">
              © 2024 Escola de Beach Vôlei Professor Cezar. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}