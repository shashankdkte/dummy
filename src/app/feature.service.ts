import { Injectable } from '@angular/core';
// import * as faker from 'faker';
import { faker } from '@faker-js/faker';
import { Employee } from './models/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  private employees: Employee[];

  constructor() {
    this.employees = this.generateData();
   }

  generateData(): any[] {
    const employees:Employee[] = [];
    for (let i = 1; i <= 20; i++) {
      const values = ['Male', 'Female'];
const randomIndex = Math.floor(Math.random() * 2); // Generate a random index (0 or 1)
const randomValue = values[randomIndex];
      employees.push({
        id: i.toString(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        age: faker.datatype.number({ min: 20, max: 60 }),
        gender: randomValue,
        position: faker.name.jobTitle(),
        department: faker.commerce.department(),
        salary: faker.datatype.number({ min: 50000, max: 150000 }),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.stateAbbr(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
        hireDate: faker.date.past().toISOString().slice(0, 10),
        isActive: faker.datatype.boolean(),
        isManager: faker.datatype.boolean()
      });
    }
    return employees;
  }

  getDataForId(id: string): any {
    return this.employees.find(emp => emp.id === id);
  }
}