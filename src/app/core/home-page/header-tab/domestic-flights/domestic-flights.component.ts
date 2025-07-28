import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  NgLabelTemplateDirective,
  NgOptionTemplateDirective,
  NgSelectComponent,
} from '@ng-select/ng-select';

@Component({
  selector: 'domestic-flights',
  standalone: true,
  imports: [
    NgSelectComponent,
  ],
  templateUrl: './domestic-flights.component.html',
  styleUrl: './domestic-flights.component.scss',
})
export class DomesticFlightsComponent implements OnInit {
  public filghtsFormGroup: FormGroup;
  public cities: string[] = [
    'تهران',
    'اهواز',
    'شیراز',
    'مشهد',
    'بندر عباس',
    'اصفهان',
    'تبریز',
    'کیش',
  ];

  filghtTypes: string[] = ['یک طرفه', 'دوطرفه'];

  ngOnInit(): void {
    this.initalForm()
  }

  initalForm() {
    this.filghtsFormGroup = new FormGroup({
      origin: new FormControl(''),
      destination: new FormControl(''),
      filghtType: new FormControl(''),
      departureDate: new FormControl(''),
      returnDate: new FormControl(''),
      Passenger: new FormControl(''),
    });
  }

  filghtTypeChanged(event) {
    event === 'یک طرفه'
      ? this.filghtsFormGroup.controls['returnDate'].disable()
      : this.filghtsFormGroup.controls['returnDate'].enable();
  }
}
