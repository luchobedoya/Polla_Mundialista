import { Component, HostListener, computed, effect, input, model, output } from '@angular/core';

export type ModalSize = '' | 'sm' | 'lg' | 'xl' | 'fullscreen';

export type ModalActionVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'link';

export interface ModalAction {
  id: string;
  label: string;
  variant?: ModalActionVariant;
  cssClass?: string;
  disabled?: boolean;
  dismissOnClick?: boolean;
}

@Component({
  selector: 'app-modal-view',
  imports: [],
  templateUrl: './modal-view.html',
  styleUrl: './modal-view.scss',
})
export class ModalView {
  readonly modalId = input('appModal');
  readonly title = input('');
  readonly ariaLabel = input<string | null>(null);
  readonly body = input<string | null>(null);
  readonly size = input<ModalSize>('');
  readonly centered = input(false);
  readonly scrollable = input(false);
  readonly showHeader = input(true);
  readonly showCloseButton = input(true);
  readonly showFooter = input(true);
  readonly closeOnBackdrop = input(true);
  readonly closeOnEscape = input(true);
  readonly actions = input<ModalAction[]>([
    { id: 'close', label: 'Cerrar', variant: 'secondary', dismissOnClick: true },
    { id: 'save', label: 'Guardar cambios', variant: 'primary' },
  ]);

  readonly isOpen = model(false);

  readonly opened = output<void>();
  readonly closed = output<void>();
  readonly actionSelected = output<ModalAction>();

  readonly titleId = computed(() => `${this.modalId()}Label`);
  readonly dialogClasses = computed(() => {
    const classes = ['modal-dialog'];
    const size = this.size();

    if (size) {
      classes.push(`modal-${size}`);
    }

    if (this.centered()) {
      classes.push('modal-dialog-centered');
    }

    if (this.scrollable()) {
      classes.push('modal-dialog-scrollable');
    }

    return classes.join(' ');
  });

  private previousOpenState = this.isOpen();

  private readonly openStateEffect = effect(() => {
    const isOpen = this.isOpen();

    if (isOpen === this.previousOpenState) {
      return;
    }

    this.previousOpenState = isOpen;

    if (isOpen) {
      this.opened.emit();
      return;
    }

    this.closed.emit();
  });

  @HostListener('document:keydown.escape', ['$event'])
  onEscape(event: Event): void {
    if (!this.isOpen() || !this.closeOnEscape()) {
      return;
    }

    event.preventDefault();
    this.hide();
  }

  show(): void {
    this.isOpen.set(true);
  }

  hide(): void {
    this.isOpen.set(false);
  }

  onBackdropClick(event: MouseEvent): void {
    if (!this.closeOnBackdrop() || event.target !== event.currentTarget) {
      return;
    }

    this.hide();
  }

  onAction(action: ModalAction): void {
    if (action.disabled) {
      return;
    }

    this.actionSelected.emit(action);

    if (action.dismissOnClick) {
      this.hide();
    }
  }

  buttonClass(action: ModalAction): string {
    if (action.cssClass) {
      return action.cssClass;
    }

    return `btn btn-${action.variant ?? 'primary'}`;
  }
}
