import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export default class NavBar {
  /** Currently active navigation item */
  activeItem = 'inicio';

  /** Navigation menu items */
  readonly navItems = [
    { key: 'inicio', label: 'Inicio', icon: '🏠' },
    { key: 'partidos', label: 'Partidos', icon: '⚽' },
    { key: 'predicciones', label: 'Mis Predicciones', icon: '🎯' },
    { key: 'ranking', label: 'Ranking', icon: '📊' },
    { key: 'reglas', label: 'Reglas', icon: '📋' },
  ];

  /** Handles click on a navigation item */
  onNavItemClick(key: string): void {
    this.activeItem = key;
    console.log('Navigate to:', key);
  }
}
