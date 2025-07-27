import { Component } from '@angular/core';
import { HeaderTabComponent } from "./header-tab/header-tab.component";

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [HeaderTabComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
