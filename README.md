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