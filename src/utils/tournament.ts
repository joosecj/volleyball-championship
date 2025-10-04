import { Tournament, Match } from '@/types/tournament';

// Função para verificar se todos os jogos de grupo terminaram
export function areAllGroupMatchesCompleted(tournament: Tournament): boolean {
  return tournament.schedule.every(match => 
    match.status === 'completed' && 
    match.homeScore !== null && 
    match.awayScore !== null
  );
}

// Função para obter o status de um jogo (padronizada)
export function getMatchStatus(match: Match): 'pending' | 'completed' | 'in-progress' {
  if (match.status) {
    return match.status;
  }
  if (match.homeScore !== null && match.awayScore !== null && match.homeScore !== undefined && match.awayScore !== undefined) {
    return 'completed';
  }
  return 'pending';
}

// Função para verificar se um jogo está finalizado
export function isMatchCompleted(match: Match): boolean {
  return getMatchStatus(match) === 'completed';
}

// Função para verificar se um jogo está em andamento
export function isMatchInProgress(match: Match): boolean {
  return getMatchStatus(match) === 'in-progress';
}

// Função para verificar se um jogo está pendente
export function isMatchPending(match: Match): boolean {
  return getMatchStatus(match) === 'pending';
}

// Função para obter o status de um jogo do chaveamento (padronizada)
export function getBracketMatchStatus(match: { homeScore?: number | null; awayScore?: number | null; status?: 'pending' | 'completed' | 'in-progress' }): 'pending' | 'completed' | 'in-progress' {
  if (match.status) {
    return match.status;
  }
  if (match.homeScore !== null && match.awayScore !== null && match.homeScore !== undefined && match.awayScore !== undefined) {
    return 'completed';
  }
  return 'pending';
}
