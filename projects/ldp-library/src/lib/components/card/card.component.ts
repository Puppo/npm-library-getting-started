import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UtilsService } from '../../services/utils.service';

/**
 * Simple Card
 */
@Component({
  selector: 'ldp-card',
  template: `
    <div class="card">
      <div class="title" (click)="toggle.emit()">{{ title }}<div>
      <div class="description" *ngIf="opened">
        <ng-content></ng-content>
        <hr />
        {{ utils.title }}
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

  constructor(
    public utils: UtilsService
  ) {}

}
