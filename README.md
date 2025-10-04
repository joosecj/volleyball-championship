# 🏐 Torneio de Duplas - Escola Professor Cezar

Landing page mobile-first para acompanhamento do torneio de duplas de beach vôlei da Escola Professor Cezar.

## 🚀 Tecnologias Utilizadas

- **Next.js 15** com App Router
- **TypeScript** para tipagem estática
- **Tailwind CSS** para estilização
- **Shadcn UI** para componentes
- **Framer Motion** para animações
- **Yarn** como gerenciador de pacotes

## 📱 Funcionalidades

### ✅ Implementadas
- **Grupos**: Exibição dos grupos A e B com classificação
- **Jogos**: Lista de todos os jogos da fase de grupos
- **Chaveamento**: Semifinais e finais com animações
- **Premiação**: Exibição dos prêmios para 1º, 2º e 3º lugares
- **Regras**: Regulamento completo do torneio
- **Patrocinadores**: Seção de parceiros e apoiadores
- **Layout Responsivo**: Mobile-first design
- **Animações**: Transições suaves com Framer Motion

### 🎨 Design
- Paleta de cores personalizada baseada no logo
- Interface moderna e intuitiva
- Navegação por abas
- Cards informativos com hover effects
- Gradientes e sombras para profundidade

## 🏗️ Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página inicial
│   └── globals.css         # Estilos globais
├── components/
│   ├── groups.tsx          # Componente dos grupos
│   ├── matches.tsx         # Componente dos jogos
│   ├── bracket.tsx         # Componente do chaveamento
│   ├── prizes.tsx          # Componente da premiação
│   ├── rules.tsx           # Componente das regras
│   └── sponsors.tsx        # Componente dos patrocinadores
├── data/
│   └── tournament.json     # Dados mockados do torneio
├── styles/
│   └── tokens.css          # Variáveis CSS personalizadas
└── types/
    └── tournament.ts       # Tipos TypeScript
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- Yarn

### Instalação
```bash
# Clone o repositório
git clone <url-do-repositorio>
cd camp_volei

# Instale as dependências
yarn install

# Execute o projeto
yarn dev
```

O projeto estará disponível em `http://localhost:3000`

## 📊 Dados do Torneio

### Estrutura
- **8 duplas** divididas em **2 grupos de 4**
- **12 jogos** na fase de grupos
- **4 jogos** no chaveamento eliminatório

### Grupos
- **Grupo A (Azul)**: Saulo & Jadi, Wagner & Emílio, Diogo & Jonatan, Caio & Cadu
- **Grupo B (Laranja)**: Jorge & Jaque, Daniel & Alan, João & José, Cezar & Karen

### Sistema de Pontuação
- Set único de 15 pontos
- Final até 18 pontos
- A partir de 17x17, precisa abrir 2 de vantagem
- Troca de lado a cada 9 pontos

## 🎯 Deploy

O projeto está configurado para deploy no Vercel:

1. Conecte o repositório ao Vercel
2. Configure as variáveis de ambiente (se necessário)
3. Deploy automático a cada push na branch main

## 🎨 Paleta de Cores

- **Primário**: `#379EC8` (azul claro)
- **Primário Escuro**: `#092A50` (azul escuro)
- **Secundário**: `#145178` (azul marinho)
- **Destaque**: `#F2C15C` (dourado)
- **Fundo**: `#FFFFFF` (branco)
- **Texto**: `#0F1E2B` (azul escuro)

## 📱 Responsividade

- **Mobile First**: Design otimizado para dispositivos móveis
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Navegação**: Menu horizontal com scroll em dispositivos pequenos
- **Cards**: Layout em grid responsivo

## 🔧 Scripts Disponíveis

```bash
yarn dev          # Executa em modo desenvolvimento
yarn build        # Gera build de produção
yarn start        # Executa build de produção
yarn lint         # Executa linter
```

## 📄 Licença

Este projeto é propriedade da Escola de Beach Vôlei Professor Cezar.

---

Desenvolvido com ❤️ para o esporte e a comunidade de beach vôlei.