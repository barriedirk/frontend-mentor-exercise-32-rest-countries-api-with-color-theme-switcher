import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, Output } from '@angular/core';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-country-card',
  standalone: true,
  imports: [DecimalPipe, RouterLink],
  templateUrl: './country-card.html',
  styleUrl: './country-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryCard {
  @Input() cca3!: string;
  @Input() alt!: string;
  @Input() imageFlag!: string;
  @Input() name!: string;
  @Input() population!: number;
  @Input() region!: string;
  @Input() capital!: string;
}
