import { Component } from '@angular/core';

@Component({
  selector: 'app-housing-search',
  standalone: true,
  imports: [],
  template: `
    <section class="w-full  ">
      <form class="flex h-12 bg-red-50 ">
        <input
          type="text"
          class=" w-3/4 pl-3"
          placeholder="Filter by city"
          #filter
        />
        <button
          class="primary"
          class=" w-1/4 text-center bg-blue-600 text-white"
          type="button"
          (click)="filterResults(filter.value)"
        >
          Search
        </button>
      </form>
    </section>
  `,
  styleUrl: './housing-search.component.css',
})
export class HousingSearchComponent {}
