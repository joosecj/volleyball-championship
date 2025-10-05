"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Navigation,
  ExternalLink,
  Clock,
  Car,
  Wifi,
} from "lucide-react";

export function Location() {
  const address =
    "R. Cel. Francisco Soares, 1345 - Centro, Nova Iguaçu - RJ, 26216-041";
  const venue = "Local Arena Portuga";

  // Obter a chave da API do Google Maps da variável de ambiente
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  // URLs para diferentes apps de navegação
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;
  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(address)}`;
  const appleMapsUrl = `https://maps.apple.com/?q=${encodeURIComponent(
    address
  )}`;

  const openInMaps = (url: string) => {
    window.open(url, "_blank");
  };

  // Função para gerar URL do mapa
  const getMapUrl = () => {
    // Por enquanto, sempre usar o mapa básico que funciona sem chave
    // Quando você tiver uma chave válida, descomente a linha abaixo e comente a atual
    return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.123456789!2d-43.451234567!3d-22.7654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQ1JzU1LjYiUyA0M8KwMjcnMDQuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr&q=${encodeURIComponent(
      address
    )}`;

    // Para usar com chave da API (quando tiver uma válida):
    // if (googleMapsApiKey && googleMapsApiKey !== 'sua_chave_aqui') {
    //   return `https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=${encodeURIComponent(address)}`;
    // } else {
    //   return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.123456789!2d-43.451234567!3d-22.7654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQ1JzU1LjYiUyA0M8KwMjcnMDQuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr&q=${encodeURIComponent(address)}`;
    // }
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
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full ml-2">
              Mapa Básico
            </span>
          </h3>
        </div>

        <div className="relative">
          <iframe
            src={getMapUrl()}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-80"
          />

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
    </div>
  );
}
