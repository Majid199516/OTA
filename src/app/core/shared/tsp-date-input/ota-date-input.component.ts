import {
  Component,
  EventEmitter,
  Input,
  Output,
  forwardRef,
} from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import moment from 'jalali-moment';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ota-date-input',
  templateUrl: './ota-date-input.component.html',
  styleUrls: ['./ota-date-input.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    MatIconModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => otaDateInputComponent),
      multi: true,
    },
  ],
})
export class otaDateInputComponent {
  @Input() disabled: boolean = false;
  @Input() componentDisabled: boolean = false;
  @Input() inputMandatory: boolean = false;
  @Input() maxDate: Date;
  @Input() minDate: Date;
  @Input() unit: string = undefined;
  @Input() label: string;
  @Input() isHaveClear: boolean = false;
  @Input() placeholder: string = ' ';
  @Input() infoIcon: boolean = false;
  @Input() tooltip: string = '';
  @Input() isValid: boolean = true;
  @Output() clear: EventEmitter<null> = new EventEmitter<null>(null);

  constructor() {}

  date: any = null;

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any) {
    if (Number(value)) {
      this.date = moment(Number(value));
    } else if (value !== undefined || value !== null) {
      this.date = value;
    } else {
      this.date = undefined;
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  valueEntered(event) {
    this.date = event;
    this.onChange(toTimestamp(event));

    function toTimestamp(strDate) {
      const isoStr = strDate;
      const date = new Date(isoStr);
      const timestamp = date.getTime();
      return timestamp;
    }
  }

  clearInput(date) {
    this.clear.emit(undefined);
  }
}
