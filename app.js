// Сутність "Людина"
class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  info() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

// Сутність "Автомобіль"
class Car {
  constructor(brand, model, year, licensePlate, owner) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.licensePlate = licensePlate;

    if (owner.age < 18) {
      console.log("Owner must be at least 18 years old.");
    } else {
      this.owner = owner;
    }
  }

  info() {
    console.log(`${this.year} ${this.brand} ${this.model}, License Plate: ${this.licensePlate}`);
    console.log("Owner:");
    this.owner.info();
  }
}

const v = new Human("V", 20);
const rx7 = new Car("Mazda", "RX-7", 1999, "NC2077VV", v);

const johnny = new Human("Johnny", 100);
const porsche = new Car("Porsche", "911(930)", 1977, "NC1977CP", johnny);

const takumi = new Human("Takumi", 18);
const hachiroku = new Car("Toyota", "Sprinter Trueno AE86", 1986, "13-954", takumi);

rx7.info();
porsche.info();
hachiroku.info();
