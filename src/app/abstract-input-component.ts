import { AbstractModelComponent } from './abstract-model-component';
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({ template: '' })
export class AbstractInputComponent extends AbstractModelComponent<string> {
	@Input()
  readonly: boolean = false;

  @Input()
  required: boolean = false;

  @Input()
  placeholder: string = '';

  @Input()
  type: string = 'text';

  @Output()
  onBlur: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  onFocus: EventEmitter<void> = new EventEmitter<void>();

  get inputReadonly(): boolean {
    return this.readonly || typeof this.readonly !== 'boolean';
  }

  get inputRequired(): boolean {
    return this.required || typeof this.required !== 'boolean';
  }
}
