import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractInputComponent } from './../abstract-input-component';
import { Component, forwardRef, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-input-with-label',
  templateUrl: './input-with-label.component.html',
	styleUrls: ['./input-with-label.component.css'],
	providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputWithLabelComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputWithLabelComponent extends AbstractInputComponent {
	override placeholder: string = 'Enter something...';
	override required = true;

	@Input()
  label: string = 'Label';

  get asterix(): string {
    return this.inputRequired ? ' *' : '';
  }
}
