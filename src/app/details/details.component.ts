import { Housinglocation } from './../housinglocation';
import { HousingService } from './../housing.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `<section class="h-36 w-full bg-red-50">
    <article class=" flex flex-wrap  ">
      <div class=" w-1/2 order-2 pl-2">
        <img
          class=" aspect-[1/1] object-fill object-center"
          [src]="housingLocation?.photo"
          alt=" Exterior photo or {{ housingLocation?.name }}"
        />
      </div>
      <div class=" w-1/2 order-1 h-auto bg-blue-50">
        <section class=" p-5 ">
          <h2 class=" font-bold text-3xl py-2">{{ housingLocation?.name }}</h2>
          <p class="text-xl     px-2 py-2 mb-1">
            {{ housingLocation?.city }},{{ housingLocation?.state }}
          </p>
        </section>
        <section class="  p-5 mt-2">
          <h2
            class=" font-semibold text-2xl py-2 border-b border-gray-200 mb-3 "
          >
            About this Housing location
          </h2>
          <ul>
            <li class="text-xl block bg-gray-50 px-2 py-2 mb-1">
              Units available: {{ housingLocation?.availableUnits }}
            </li>
            <li class="text-xl block bg-gray-50 px-2 py-2 mb-1">
              Does this location have wifi: {{ housingLocation?.wifi }}
            </li>
            <li class="text-xl block bg-gray-50 px-2 py-2 mb-1">
              Does this location have laundry: {{ housingLocation?.laundry }}
            </li>
          </ul>
        </section>
      </div>
    </article>
    <section class="w-full bg-gray-500 mt-2 pb-10 block ">
      <h2
        class=" font-semibold text-2xl px-5 text-white py-2 border-b border-gray-200 mb-3 "
      >
        Apply now to live here
      </h2>
      <form class="" [formGroup]="applyForm" (submit)="submitApplication()">
        <div class="flex flex-wrap mt-2">
          <label for="first-name" class="w-1/3 px-5 text-white"
            >First Name</label
          >
          <input
            id="first-name"
            class="w-2/3 p-3 "
            type="text"
            formControlName="firstName"
          />
        </div>
        <div class="flex flex-wrap mt-2">
          <label for="last-name" class="w-1/3 px-5 text-white">Last Name</label>
          <input
            id="last-name"
            class="w-2/3 p-3 "
            type="text"
            formControlName="lastName"
          />
        </div>
        <div class="flex flex-wrap mt-2">
          <label for="email" class="w-1/3 px-5 text-white">Email</label>
          <input
            id="email"
            class="w-2/3 p-3 "
            type="email"
            formControlName="email"
          />
        </div>
        <div class="flex flex-wrap mt-2 px-5 w-full">
          <button
            type="submit"
            class="bg-blue-700 text-white p-2 float-end inline-block"
          >
            Apply now
          </button>
        </div>
      </form>
    </section>
  </section>`,
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId = -1;
  housingService = inject(HousingService);
  housingLocation: Housinglocation | undefined;
  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation =
      this.housingService.getHousingLocationById(housingLocationId);
  }

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
