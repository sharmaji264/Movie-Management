import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css',
})
export class AlertComponent {
  @Output() close = new EventEmitter<void>();
  @Output() yes = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
  onYes() {
    this.yes.emit();
  }
}
