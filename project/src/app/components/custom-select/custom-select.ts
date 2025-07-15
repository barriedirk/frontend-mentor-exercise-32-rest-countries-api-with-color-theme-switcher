import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, ViewChild, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-select',
  standalone: true,
  templateUrl: './custom-select.html',
  styleUrls: ['./custom-select.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectComponent),
      multi: true,
    },
  ],
})
export class CustomSelectComponent implements ControlValueAccessor {
  @Input() options: string[] = [];
  @Input() placeholder = 'Select an option';

  @Input() value: string | null = null;
  @Output() valueChange = new EventEmitter<string>();

  @ViewChild('triggerButton') triggerButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('optionsList') optionsListRef!: ElementRef<HTMLUListElement>;

  isOpen = false;
  focusedIndex = -1;

  isDisabled = false;
  private usingFormControl = false;

  constructor(private elRef: ElementRef) {}

  private scrollToFocused(): void {
    if (!this.optionsListRef || this.focusedIndex < 0) return;

    const listElement = this.optionsListRef.nativeElement;
    const optionElements = listElement.querySelectorAll('li');

    const focusedEl = optionElements[this.focusedIndex] as HTMLElement;

    if (focusedEl) {
      focusedEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }

  onChange: (_: any) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(val: string | null): void {
    this.value = val;
    this.usingFormControl = true;
  }

  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.isDisabled = disabled;
  }

  toggleDropdown(): void {
    if (this.isDisabled) return;
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      this.focusedIndex = this.options.indexOf(this.value || '') || 0;

      setTimeout(() => {
        this.optionsListRef?.nativeElement?.focus();
        this.scrollToFocused();
      }, 0);
    }
  }

  selectOption(option: string): void {
    this.value = option;
    this.focusedIndex = this.options.indexOf(option);
    this.onTouched();

    if (this.usingFormControl) {
      this.onChange(option);
    } else {
      this.valueChange.emit(option);
    }

    this.isOpen = false;

    setTimeout(() => this.triggerButton?.nativeElement?.focus(), 0);
  }

  onKeyDown(event: KeyboardEvent): void {
    const maxIndex = this.options.length - 1;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.focusedIndex = this.focusedIndex + 1 > maxIndex ? 0 : this.focusedIndex + 1;
        this.scrollToFocused();
        break;

      case 'ArrowUp':
        event.preventDefault();
        this.focusedIndex = this.focusedIndex - 1 < 0 ? maxIndex : this.focusedIndex - 1;
        this.scrollToFocused();
        break;

      case 'Enter':
        event.preventDefault();
        if (this.focusedIndex >= 0 && this.focusedIndex <= maxIndex) {
          this.selectOption(this.options[this.focusedIndex]);
        }
        break;

      case 'Escape':
        this.isOpen = false;
        this.triggerButton?.nativeElement?.focus();
        break;
    }
  }

  @HostListener('document:click', ['$event.target'])
  closeOnOutsideClick(target: EventTarget | null): void {
    if (target instanceof HTMLElement && !this.elRef.nativeElement.contains(target)) {
      this.isOpen = false;
    }
  }
}
