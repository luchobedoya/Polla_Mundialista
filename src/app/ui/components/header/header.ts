import { Component, computed, signal } from '@angular/core';
import { ModalAction, ModalSize, ModalView } from '../modal-view/modal-view';

interface HeaderModalConfig {
  modalId: string;
  title: string;
  body: string;
  size: ModalSize;
  centered: boolean;
  scrollable: boolean;
  closeOnBackdrop: boolean;
  closeOnEscape: boolean;
  actions: ModalAction[];
}

@Component({
  selector: 'app-header',
  imports: [ModalView],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export default class Header {
  showNavBar: boolean = false;
  readonly infoModalConfig: HeaderModalConfig = {
    modalId: 'headerInfoModal',
    title: 'Polla Mundialista 2026',
    body: 'Ejemplo de modal parametrizado desde Header usando inputs, outputs y signals.',
    size: 'lg',
    centered: true,
    scrollable: false,
    closeOnBackdrop: true,
    closeOnEscape: true,
    actions: [
      { id: 'close', label: 'Cerrar', variant: 'secondary', dismissOnClick: true },
      { id: 'ranking', label: 'Ver ranking', variant: 'primary' },
    ],
  };

  readonly rulesModalConfig: HeaderModalConfig = {
    modalId: 'headerRulesModal',
    title: 'Reglas rápidas',
    body: 'Cada llamado puede enviar un título, contenido, tamaño, comportamiento de cierre y botones distintos.',
    size: '',
    centered: true,
    scrollable: true,
    closeOnBackdrop: false,
    closeOnEscape: true,
    actions: [
      { id: 'later', label: 'Luego', variant: 'secondary', dismissOnClick: true },
      { id: 'accept', label: 'Entendido', variant: 'success', dismissOnClick: true },
    ],
  };

  readonly modalOpen = signal(false);
  readonly modalConfig = signal<HeaderModalConfig>(this.infoModalConfig);
  readonly modalResultMessage = signal('Selecciona una acción del modal para verla reflejada aquí.');

  readonly modalParameters = computed(() => [
    { label: 'Modal ID', value: this.modalConfig().modalId },
    { label: 'Tamaño', value: this.modalConfig().size || 'default' },
    { label: 'Centrado', value: this.modalConfig().centered ? 'sí' : 'no' },
    { label: 'Cierra con backdrop', value: this.modalConfig().closeOnBackdrop ? 'sí' : 'no' },
    { label: 'Cierra con Escape', value: this.modalConfig().closeOnEscape ? 'sí' : 'no' },
  ]);

  openModal(config: HeaderModalConfig): void {
    this.modalConfig.set(config);
    this.modalResultMessage.set('Selecciona una acción del modal para verla reflejada aquí.');
    this.modalOpen.set(true);
  }

  handleModalAction(action: ModalAction): void {
    this.modalResultMessage.set(`Output recibido desde ModalView: ${action.label}`);

    if (action.id === 'ranking') {
      console.log('Ejemplo: navegar al ranking desde el Header');
    }
  }

  onModalOpened(): void {
    console.log('Modal abierto desde Header:', this.modalConfig().modalId);
  }

  onModalClosed(): void {
    console.log('Modal cerrado desde Header:', this.modalConfig().modalId);
  }


}
