#!/bin/bash

# Script para atualizar o torneio e fazer deploy
echo "🏐 Atualizando dados do torneio..."

# Verificar se o arquivo tournament.json existe
if [ ! -f "src/data/tournament.json" ]; then
    echo "❌ Arquivo src/data/tournament.json não encontrado!"
    exit 1
fi

# Fazer backup do arquivo atual
cp src/data/tournament.json src/data/tournament.json.backup
echo "✅ Backup criado: src/data/tournament.json.backup"

# Build da aplicação
echo "🔨 Fazendo build da aplicação..."
yarn build

if [ $? -eq 0 ]; then
    echo "✅ Build concluído com sucesso!"
    
    # Deploy para Vercel (se configurado)
    if command -v vercel &> /dev/null; then
        echo "🚀 Fazendo deploy para Vercel..."
        vercel --prod
    else
        echo "ℹ️  Vercel CLI não encontrado. Execute 'yarn build' e faça deploy manual."
    fi
else
    echo "❌ Erro no build. Restaurando backup..."
    mv src/data/tournament.json.backup src/data/tournament.json
    exit 1
fi

echo "🎉 Atualização concluída!"
