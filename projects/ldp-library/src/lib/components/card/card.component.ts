import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Simple Card
 */
@Component({
  selector: 'ldp-card',
  template: `
    <div class="card">
      <div class="title">{{ title }}<div>
      <div class="description" *ngIf="opened">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .card { border: 1px solid black; border-radius: 10px }
    .title { margin: 10px }
    .description { padding: 10px; font-style: italic; }
  `]
})
export class CardComponent {

  /**
   * The title of the cart
   */
  @Input() title: string;

  /**
   * State of the card
   */
  @Input() opened: boolean;

  /**
   * Click of the tile bar
   */
  @Output() toggle = new EventEmitter<void>();

}
