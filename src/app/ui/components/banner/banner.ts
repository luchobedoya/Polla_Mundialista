import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.html',
  styleUrl: './banner.scss',
})
export default class Banner {
  /** Handles primary CTA click */
  onMakePredictionsClick(): void {
    console.log('Navigate to predictions');
  }

  /** Handles secondary CTA click */
  onViewRankingClick(): void {
    console.log('Navigate to ranking');
  }
}
