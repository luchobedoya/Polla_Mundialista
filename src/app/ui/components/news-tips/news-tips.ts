import { Component } from '@angular/core';

interface NewsCard {
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

@Component({
  selector: 'app-news-tips',
  imports: [],
  templateUrl: './news-tips.html',
  styleUrl: './news-tips.scss',
})
export default class NewsTips {
  /** List of news/tips cards */
  readonly cards: NewsCard[] = [
    {
      title: 'Guía rápida de la polla',
      description: 'Aprende a jugar y ganar más puntos.',
      icon: '📖',
      gradient: 'linear-gradient(135deg, #ffc400 0%, #ff9500 100%)',
    },
    {
      title: 'Sistema de puntuación',
      description: 'Conoce cómo se asignan los puntos.',
      icon: '🏅',
      gradient: 'linear-gradient(135deg, #0757ff 0%, #0546d4 100%)',
    },
    {
      title: 'Tips para acertar más',
      description: 'Estrategias que te acercan a la cima.',
      icon: '💡',
      gradient: 'linear-gradient(135deg, #12b76a 0%, #0d9256 100%)',
    },
    {
      title: 'Reglas básicas',
      description: 'Todo lo que debes saber en minutos.',
      icon: '📋',
      gradient: 'linear-gradient(135deg, #0757ff 0%, #3b82f6 100%)',
    },
  ];

  /** Handles read more click */
  onReadMoreClick(card: NewsCard): void {
    console.log('Read more:', card.title);
  }
}
