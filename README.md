# 🏐 Torneio de Duplas - Beach Vôlei

Landing page para torneio de duplas de beach vôlei da Escola Professor Cezar.

## 🚀 Tecnologias

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animações
- **Shadcn UI** - Componentes
- **Yarn** - Package manager

## 📱 Características

- **Mobile-first** - Design responsivo
- **Animações suaves** - Framer Motion
- **Tempo real** - Contador regressivo
- **Interativo** - Navegação por abas
- **Moderno** - UI/UX atual
- **Simples** - Edição direta no JSON

## 🏗️ Estrutura

```
src/
├── app/                 # App Router (Next.js 15)
├── components/          # Componentes React
├── data/               # Dados do torneio (JSON)
├── styles/             # Estilos globais
└── types/              # Definições TypeScript
```

## 🎯 Como Atualizar o Torneio

### Método Simples (Recomendado)

1. **Edite o arquivo JSON**:
   ```bash
   # Abra o arquivo de dados
   nano src/data/tournament.json
   ```

2. **Execute o script de atualização**:
   ```bash
   ./update-tournament.sh
   ```

### Método Manual

1. **Edite os dados**:
   - Abra `src/data/tournament.json`
   - Atualize resultados, classificações, etc.

2. **Faça o build**:
   ```bash
   yarn build
   ```

3. **Deploy**:
   ```bash
   vercel --prod
   ```

## ⚽ Como Adicionar Vitórias e Resultados

### 1. Atualizar Resultados dos Jogos

Para cada jogo finalizado, edite a seção `schedule` no `tournament.json`:

```json
{
  "schedule": [
    {
      "game": 1,
      "home": 1,           // ID do time da casa
      "away": 2,           // ID do time visitante
      "homeScore": 21,     // Pontos do time da casa
      "awayScore": 18,     // Pontos do time visitante
      "status": "completed" // Status: "pending", "in-progress", "completed"
    }
  ]
}
```

### 2. Atualizar Classificações dos Grupos

Após cada jogo, atualize as vitórias/derrotas na seção `standings`:

```json
{
  "groups": [
    {
      "id": "A",
      "color": "blue",
      "teams": [...],
      "standings": [
        {
          "teamId": 1,
          "teamName": "Saulo & Jadi",
          "wins": 2,        // Número de vitórias
          "losses": 1       // Número de derrotas
        },
        {
          "teamId": 2,
          "teamName": "Wagner & Emílio",
          "wins": 1,
          "losses": 2
        }
      ]
    }
  ]
}
```

### 3. Exemplo Prático

**Jogo 1: Saulo & Jadi (21) vs Wagner & Emílio (18)**

1. **Atualizar o jogo**:
   ```json
   {
     "game": 1,
     "home": 1,
     "away": 2,
     "homeScore": 21,
     "awayScore": 18,
     "status": "completed"
   }
   ```

2. **Atualizar as classificações**:
   ```json
   "standings": [
     {
       "teamId": 1,
       "teamName": "Saulo & Jadi",
       "wins": 1,    // +1 vitória
       "losses": 0
     },
     {
       "teamId": 2,
       "teamName": "Wagner & Emílio",
       "wins": 0,
       "losses": 1   // +1 derrota
     }
   ]
   ```

### 4. Regras de Classificação

- **Os 2 primeiros de cada grupo avançam** para as semifinais
- **Critério de desempate**: Número de vitórias
- **Times classificados** aparecem destacados em amarelo
- **Troféu** indica times que avançam

### 5. Atualizar Jogos do Chaveamento

Para jogos do chaveamento, edite a seção `bracket` no `tournament.json`:

```json
{
  "bracket": {
    "SF1": {
      "home": "A#1", 
      "away": "B#2", 
      "homeScore": 21, 
      "awayScore": 18, 
      "status": "completed"
    },
    "SF2": {
      "home": "B#1", 
      "away": "A#2", 
      "homeScore": null, 
      "awayScore": null, 
      "status": "pending"
    }
  }
}
```

**Status possíveis:**
- `"pending"`: Jogo agendado (mostra VS)
- `"in-progress"`: Jogo em andamento
- `"completed"`: Jogo finalizado (mostra vencedor)

### 6. Fluxo de Atualização

1. **Durante o jogo**: `status: "in-progress"`
2. **Após o jogo**: 
   - Atualize `homeScore` e `awayScore`
   - Mude `status` para `"completed"`
   - Atualize `wins`/`losses` dos times
3. **Execute o script**: `./update-tournament.sh`
4. **Deploy automático** (se configurado)

## 📝 Estrutura dos Dados

### Grupos
```json
{
  "groups": [
    {
      "id": "A",
      "color": "blue",
      "teams": [
        {"id": 1, "name": "Saulo & Jadi"},
        {"id": 2, "name": "Wagner & Emílio"}
      ]
    }
  ]
}
```

### Jogos
```json
{
  "schedule": [
    {
      "game": 1,
      "home": 1,
      "away": 2,
      "homeScore": 21,
      "awayScore": 18,
      "status": "completed"
    }
  ]
}
```

### Chaveamento
```json
{
  "bracket": {
    "SF1": {"home": "A#1", "away": "B#2"},
    "SF2": {"home": "B#1", "away": "A#2"},
    "ThirdPlace": {"home": "loser(SF1)", "away": "loser(SF2)"},
    "Final": {"home": "winner(SF1)", "away": "winner(SF2)"}
  }
}
```

## 🎨 Personalização

### Cores
Edite `src/styles/tokens.css`:
```css
:root {
  --primary: #379EC8;      /* Azul claro */
  --secondary: #244157;    /* Azul escuro */
  --accent: #F2C15C;       /* Dourado */
}
```

### Logo
Substitua `public/logo.jpeg` pela sua logo.

### Patrocinadores
Adicione imagens em `public/img/patrocinadores/` e atualize o JSON.

## 🚀 Deploy

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Netlify
```bash
# Build
yarn build

# Deploy pasta .next
```

## 📱 Responsividade

- **Mobile**: 1-2 colunas
- **Tablet**: 2-3 colunas  
- **Desktop**: 3-5 colunas
- **Breakpoints**: sm, md, lg, xl

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
yarn dev

# Build
yarn build

# Atualizar torneio
./update-tournament.sh

# Deploy
vercel --prod
```

## 📄 Licença

MIT License - Projeto educacional