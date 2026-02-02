class Vehicle {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  displayInfo() {
    return `This Vehicle is a ${this.year} ${this.brand} ${this.model}.`;
  }

  speedUp(increase) {
    return `The ${this.brand} ${this.model} speeds up by ${increase} mph.`;
  }

  brake(decrease) {
    return `The ${this.brand} ${this.model} slows down by ${decrease} mph.`;
  }
}
class Car extends Vehicle {
  constructor(brand, model, year, doors) {
    super(brand, model, year);
    this.doors = doors;
  }

  displayCarInfo() {
    return `${this.displayInfo()} It has ${this.doors} doors.`;
  }
}

class Motorcycle extends Vehicle {
  constructor(brand, model, year, type) {
    super(brand, model, year);
    this.type = type;
  }

  displayMotorcycleInfo() {
    return `${this.displayInfo()} It is a ${this.type} motorcycle.`;
  }
}

const myCar = new Car("Toyota", "Camry", 2020, 4);
console.log(myCar.speedUp(30));
