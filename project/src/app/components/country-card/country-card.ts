import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, Output } from '@angular/core';

import { RouterLink } from '@angular/router';
import { FadeInOnView } from '@directives/fade-in-on-view';

@Component({
  selector: 'app-country-card',
  standalone: true,
  imports: [DecimalPipe, RouterLink, FadeInOnView],
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
