import { Component } from '@angular/core';
import { LogoComponent } from './logo/logo.component';
import { NavlistComponent } from './navlist/navlist.component';

@Component({
  selector: 'app-navbar',
  imports: [LogoComponent, NavlistComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
