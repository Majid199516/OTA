import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { BusComponent } from "./bus/bus.component";

@Component({
  selector: 'header-tab',
  standalone: true,
  imports: [CommonModule, MatTabsModule, BusComponent,BusComponent],
  templateUrl: './header-tab.component.html',
  styleUrl: './header-tab.component.scss',
})
export class HeaderTabComponent {
requestMode: boolean= false
  matTabChanged($event: MatTabChangeEvent) {
    throw new Error('Method not implemented.');
  }
}
