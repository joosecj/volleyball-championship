'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Trophy, Users, Calendar, Award, Heart, Camera, MapPin, Rocket } from 'lucide-react';
import Image from 'next/image';
import { Groups } from '@/components/groups';
import { Matches } from '@/components/matches';
import { BracketComponent } from '@/components/bracket';
import { Prizes } from '@/components/prizes';
import { Sponsors } from '@/components/sponsors';
import { Rules } from '@/components/rules';
import { Location } from '@/components/location';
import { Countdown } from '@/components/countdown';
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
  { id: 'location', label: 'Localização', icon: <MapPin className="w-5 h-5" /> },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState('groups');
  
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(9, 0, 0, 0);

  const renderSection = () => {
    switch (activeSection) {
      case 'groups':
        return <Groups groups={tournament.groups} />;
      case 'matches':
        return <Matches matches={tournament.schedule} groups={tournament.groups} />;
      case 'bracket':
        return <BracketComponent bracket={tournament.bracket} groups={tournament.groups} tournament={tournament} />;
      case 'prizes':
        return <Prizes prizes={tournament.prizes} />;
      case 'rules':
        return <Rules rules={tournament.rules} />;
      case 'sponsors':
        return <Sponsors sponsors={tournament.sponsors} />;
      case 'location':
        return <Location />;
      default:
        return <Groups groups={tournament.groups} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#244157] to-[#1a2f42]">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-gradient-to-b from-[#244157] via-[#2a4a5f] to-[#1a2f42] shadow-lg overflow-hidden"
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full opacity-20"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-white rounded-full opacity-20"></div>
          <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white rounded-full opacity-20"></div>
          <div className="absolute bottom-20 right-1/3 w-8 h-8 bg-white rounded-full opacity-20"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
          <div className="text-center">
            {/* Logo Container with Background */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8 relative flex justify-center items-center"
            >
              {/* Background Circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-white/10 to-[#244157]/30 rounded-full blur-2xl"></div>
              </div>
              
              {/* Logo */}
              <div className="relative z-10 p-4">
                <Image
                  src="/logo.jpeg"
                  alt="Torneio de Duplas – Escola de Beach Vôlei Professor Cezar"
                  width={300}
                  height={300}
                  className="mx-auto w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
            </motion.div>
            
            <Countdown targetDate={tomorrow} />
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
              © 2024 Escola de Beach Vôlei Professor Cezar. Todos os direitos reservados.<br />Feito por <a href="https://github.com/joosecj" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-yellow-300 hover:text-yellow-200 transition-colors"><Rocket className="w-4 h-4" /> José Carlos</a>
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}