import { Component } from '@angular/core';
import { HomePageComponent } from "./core/home-page/home-page.component";
import { IconService } from './services/icon.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor (
    private iconService: IconService
  ){
    this.iconService.setup()
  }
  title = 'ota';
}
