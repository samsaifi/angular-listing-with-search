import { Housinglocation } from './../housinglocation';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="   bg-blue-50 rounded-md overflow-hidden pb-5">
      <div class=" max-h-64 overflow-hidden">
        <img
          [src]="housingLocation.photo"
          class="img-responsive aspect-[1/1]"
        />
      </div>
      <div class="p-5">
        <h2
          class="text-lg w-full text-blue-600 font-semibold  border-b pb-3 border-blue-500 mb-3"
        >
          {{ housingLocation.name }}
        </h2>
        <p>{{ housingLocation.city }},{{ housingLocation.state }}</p>
        <a
          [routerLink]="['/details', housingLocation.id]"
          class=" bg-blue-400 text-white  p-2 px-5 text-xs rounded-lg float-end inline-block"
          >More ..</a
        >
      </div>
    </div>
  `,
  styleUrl: './housing-location.component.css',
})
export class HousingLocationComponent {
  @Input() housingLocation!: Housinglocation;
}
