import { Component } from '@angular/core';

interface Match {
  group: string;
  groupColor: string;
  homeTeam: string;
  homeFlag: string;
  awayTeam: string;
  awayFlag: string;
  homeScore: number;
  awayScore: number;
  date: string;
  time: string;
  stadium: string;
  closingTime: string;
}

@Component({
  selector: 'app-upcoming-matches',
  imports: [],
  templateUrl: './upcoming-matches.html',
  styleUrl: './upcoming-matches.scss',
})
export default class UpcomingMatches {
  /** List of upcoming matches */
  readonly matches: Match[] = [
    {
      group: 'Grupo F',
      groupColor: '#ef233c',
      homeTeam: 'Aurora FC',
      homeFlag: '🟡',
      awayTeam: 'Atlántico United',
      awayFlag: '🔵',
      homeScore: 2,
      awayScore: 1,
      date: 'Hoy',
      time: '17:00',
      stadium: 'Estadio del Sol',
      closingTime: '02:15:30',
    },
    {
      group: 'Grupo G',
      groupColor: '#0757ff',
      homeTeam: 'Pacífico City',
      homeFlag: '🟢',
      awayTeam: 'Montaña SC',
      awayFlag: '🟤',
      homeScore: 1,
      awayScore: 1,
      date: 'Hoy',
      time: '20:00',
      stadium: 'Estadio del Sol',
      closingTime: '05:15:30',
    },
    {
      group: 'Grupo H',
      groupColor: '#ffc400',
      homeTeam: 'Río FC',
      homeFlag: '🔴',
      awayTeam: 'Desierto United',
      awayFlag: '🟠',
      homeScore: 3,
      awayScore: 2,
      date: 'Mañana',
      time: '14:00',
      stadium: 'Estadio del Sol',
      closingTime: '23:15:30',
    },
  ];

  /** Handles predict button click */
  onPredictClick(match: Match): void {
    console.log('Predict:', match.homeTeam, 'vs', match.awayTeam);
  }

  /** Handles view all click */
  onViewAllClick(): void {
    console.log('View all matches');
  }

  /** Handles score change */
  onScoreChange(match: Match, team: 'home' | 'away', value: number): void {
    if (team === 'home') {
      match.homeScore = value;
    } else {
      match.awayScore = value;
    }
    console.log('Score changed:', match.homeTeam, match.homeScore, '-', match.awayScore, match.awayTeam);
  }
}
