import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CustomSelectComponent } from '@components/custom-select/custom-select';

@Component({
  selector: 'app-search-toolbar',
  standalone: true,
  imports: [ReactiveFormsModule, CustomSelectComponent],
  templateUrl: './search-toolbar.html',
  styleUrl: './search-toolbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchToolbar {
  selectedCountry: string | null = null;
}
