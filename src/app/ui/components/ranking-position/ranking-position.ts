import { Component } from '@angular/core';

interface RankingUser {
  position: number;
  name: string;
  points: string;
  isCurrent: boolean;
  medal?: 'gold' | 'silver' | 'bronze';
}

@Component({
  selector: 'app-ranking-position',
  imports: [],
  templateUrl: './ranking-position.html',
  styleUrl: './ranking-position.scss',
})
export default class RankingPosition {
  /** List of users in the ranking */
  readonly users: RankingUser[] = [
    { position: 1, name: 'Valentina M.', points: '1.560 pts', isCurrent: false, medal: 'gold' },
    { position: 2, name: 'Diego A.', points: '1.420 pts', isCurrent: false, medal: 'silver' },
    { position: 3, name: 'Laura G.', points: '1.380 pts', isCurrent: false, medal: 'bronze' },
    { position: 4, name: 'Andrés P.', points: '1.310 pts', isCurrent: false },
    { position: 5, name: 'Sebastián L.', points: '1.280 pts', isCurrent: false },
    { position: 7, name: 'Camilo R. (Tú)', points: '1.250 pts', isCurrent: true },
  ];

  /** Handles click on view full ranking */
  onViewFullRankingClick(): void {
    console.log('View full ranking');
  }

  /** Handles click on a user row */
  onUserClick(user: RankingUser): void {
    console.log('User clicked:', user.name);
  }
}
