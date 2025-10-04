import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "🏐 Torneio de Duplas - Escola Professor Cezar",
  description: "Acompanhe o torneio de duplas de beach vôlei da Escola Professor Cezar. Grupos, jogos, chaveamento e premiação em tempo real.",
  keywords: "beach vôlei, torneio, duplas, esporte, Professor Cezar",
  authors: [{ name: "Escola de Beach Vôlei Professor Cezar" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#379EC8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
