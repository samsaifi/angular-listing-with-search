import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template: `
    <header class="bg-blue-50 p-4">
      <div class=" flex flex-wrap">
        <div class="    w-1/12">
          <a [routerLink]="['/']">
            <img
              class="brand-logo w-10 "
              src="/assets/logo.svg"
              alt="logo"
              aria-hidden="true"
            />
          </a>
        </div>
        <div class="  h-12 w-9/12"></div>
        <div class="  h-12 w-2/12"></div>
      </div>
    </header>
  `,
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
