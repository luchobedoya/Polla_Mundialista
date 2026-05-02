import { Component, Input } from '@angular/core';

interface League {
  name: string;
  participants: number;
  position: number;
  totalParticipants: number;
  icon: string;
}

@Component({
  selector: 'app-league-cta',
  imports: [],
  templateUrl: './league-cta.html',
  styleUrl: './league-cta.scss',
})
export default class LeagueCta {
  /** Variant: 'leagues' shows My Leagues list, 'cta' shows join/create CTA */
  @Input() variant: 'leagues' | 'cta' = 'leagues';

  /** User's leagues data */
  readonly leagues: League[] = [
    { name: 'Liga de Amigos', participants: 12, position: 2, totalParticipants: 12, icon: '🏆' },
    { name: 'Familia Mundialista', participants: 8, position: 1, totalParticipants: 8, icon: '🔴' },
    { name: 'Oficina Champions', participants: 16, position: 5, totalParticipants: 16, icon: '🟡' },
  ];

  /** Handles click on a league item */
  onLeagueClick(league: League): void {
    console.log('League clicked:', league.name);
  }

  /** Handles view all leagues */
  onViewAllLeaguesClick(): void {
    console.log('View all leagues');
  }

  /** Handles create league CTA */
  onCreateLeagueClick(): void {
    console.log('Create league');
  }

  /** Handles join league CTA */
  onJoinLeagueClick(): void {
    console.log('Join league');
  }
}
