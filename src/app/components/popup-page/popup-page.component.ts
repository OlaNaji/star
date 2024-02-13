import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup-page',
  templateUrl: './popup-page.component.html',
  styleUrls: ['./popup-page.component.css']
})
export class PopupPageComponent {
  @Input() imageUrl: string = '';
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  closePopup() {
    this.close.emit();
  }
}
