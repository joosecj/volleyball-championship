'use client';

import { motion } from 'framer-motion';
import { MapPin, Navigation, ExternalLink, Clock, Car, Wifi } from 'lucide-react';

export function Location() {
  const address = "R. Cel. Francisco Soares, 1345 - Centro, Nova Iguaçu - RJ, 26216-041";
  const venue = "Local Atrena Portuga";
  
  // URLs para diferentes apps de navegação
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(address)}`;
  const appleMapsUrl = `https://maps.apple.com/?q=${encodeURIComponent(address)}`;

  const openInMaps = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-2xl font-bold text-[var(--text-dark)] mb-2">
          📍 Localização
        </h2>
        <p className="text-[var(--text-light)]">
          Encontre facilmente o local do torneio
        </p>
      </motion.div>

      {/* Informações do Local */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <div className="flex items-start gap-4 mb-4">
          <div className="bg-[var(--primary)] p-3 rounded-lg">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-[var(--text-dark)] mb-2">
              {venue}
            </h3>
            <p className="text-[var(--text-light)] leading-relaxed">
              {address}
            </p>
          </div>
        </div>

        {/* Botões de Navegação */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => openInMaps(googleMapsUrl)}
            className="flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            <Navigation className="w-4 h-4" />
            Google Maps
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => openInMaps(wazeUrl)}
            className="flex items-center justify-center gap-2 bg-purple-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors"
          >
            <Car className="w-4 h-4" />
            Waze
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => openInMaps(appleMapsUrl)}
            className="flex items-center justify-center gap-2 bg-gray-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Apple Maps
          </motion.button>
        </div>
      </motion.div>

      {/* Mapa do Google */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white rounded-xl shadow-lg overflow-hidden"
      >
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-[var(--text-dark)] flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[var(--primary)]" />
            Mapa do Local
          </h3>
        </div>
        
        <div className="relative">
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dOWWgUjqUaU&q=${encodeURIComponent(address)}`}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-80"
          />
          
          {/* Overlay com botão para abrir no app */}
          <div className="absolute top-4 right-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openInMaps(googleMapsUrl)}
              className="bg-white/90 backdrop-blur-sm text-[var(--primary)] px-4 py-2 rounded-lg font-semibold shadow-lg hover:bg-white transition-colors flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Abrir no App
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Informações Adicionais */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Horário de Funcionamento */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-500 p-2 rounded-lg">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-[var(--text-dark)]">
              Horário do Torneio
            </h3>
          </div>
          <div className="space-y-2 text-[var(--text-light)]">
            <p><strong>Início:</strong> 09:00</p>
            <p><strong>Previsão de término:</strong> 18:00</p>
            <p className="text-sm text-gray-500 mt-2">
              Chegue com 30 minutos de antecedência para check-in
            </p>
          </div>
        </div>

        {/* Informações do Local */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-500 p-2 rounded-lg">
              <Wifi className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-[var(--text-dark)]">
              Informações do Local
            </h3>
          </div>
          <div className="space-y-2 text-[var(--text-light)]">
            <p><strong>Estacionamento:</strong> Disponível no local</p>
            <p><strong>Wi-Fi:</strong> Gratuito</p>
            <p><strong>Vestiários:</strong> Disponíveis</p>
            <p><strong>Área de descanso:</strong> Sim</p>
          </div>
        </div>
      </motion.div>

      {/* Dicas de Chegada */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-xl p-6 text-white"
      >
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Navigation className="w-5 h-5" />
          💡 Dicas para Chegar
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold mb-2">🚗 De Carro:</p>
            <ul className="space-y-1 opacity-90">
              <li>• Estacionamento gratuito no local</li>
              <li>• Acesso fácil pela R. Cel. Francisco Soares</li>
              <li>• Sinalização do evento na entrada</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">🚌 Transporte Público:</p>
            <ul className="space-y-1 opacity-90">
              <li>• Ônibus para o Centro de Nova Iguaçu</li>
              <li>• Estação de trem próxima</li>
              <li>• Uber/Taxi disponível na região</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
