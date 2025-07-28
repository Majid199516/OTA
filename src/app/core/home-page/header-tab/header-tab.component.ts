import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { BusComponent } from "./bus/bus.component";
import { DomesticFlightsComponent } from "./domestic-flights/domestic-flights.component";
import { InternationalFlightsComponent } from "./international-flights/international-flights.component";
import { TrainComponent } from "./train/train.component";
import { TourComponent } from "./tour/tour.component";
import { HotelComponent } from "./hotel/hotel.component";
import { AccommodationsComponent } from "./accommodations/accommodations.component";

@Component({
  selector: 'header-tab',
  standalone: true,
  imports: [CommonModule, MatTabsModule, BusComponent, DomesticFlightsComponent, InternationalFlightsComponent, TrainComponent, TourComponent, HotelComponent, AccommodationsComponent],
  templateUrl: './header-tab.component.html',
  styleUrl: './header-tab.component.scss',
})
export class HeaderTabComponent {
requestMode: boolean= false
  matTabChanged($event: MatTabChangeEvent) {
    throw new Error('Method not implemented.');
  }
}
