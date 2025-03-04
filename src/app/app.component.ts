import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <main>
      <!-- Promo Sections -->
      <section class="promo-grid">
        <app-banner> </app-banner>
        <app-banner> </app-banner>
      </section>
    </main>
    <footer>
      <app-about> </app-about>
      <app-footer></app-footer>
    </footer>
  `,
  imports: [NavbarComponent, BannerComponent, AboutComponent, FooterComponent],
})
export class AppComponent {}
