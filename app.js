class MultistoryBuilding {
  constructor(numberOfApartments) {
    this.numberOfApartments = numberOfApartments;
    this.apartments = [];
  }

  addApartment(apartment) {
    this.apartments.push(apartment);
  }

  printData() {
    document.write(`Дом с ${this.numberOfApartments} квартирами: <br>`);
    this.apartments.forEach((apartment, index) => {
      document.write(`Квартира №${index + 1}: <br>`);
      apartment.printData();
    });
  }
}

class Apartment {
  constructor(numberOfResidents) {
    this.numberOfResidents = numberOfResidents;
    this.residents = [];
  }

  addResident(resident) {
    this.residents.push(resident);
  }

  printData() {
    document.write(`Количество жильцов: ${this.numberOfResidents} <br>`);
    this.residents.forEach((resident, index) => {
      document.write(`Жилец №${index + 1}: ${resident.name}, возраст ${resident.age} <br>`);
    });
  }
}

class Resident {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

function createButton() {
  const button = document.createElement("button");
	button.innerHTML = "Создать";
  const body = document.querySelector('body');
  body.appendChild(button);
  button.addEventListener('click', createBuilding)
}

function createBuilding() {
  const numberOfApartments = parseInt(prompt("Введите количество квартир в доме:"));
  const building = new MultistoryBuilding(numberOfApartments);

  for (let i = 0; i < numberOfApartments; i++) {
    const numberOfResidents = parseInt(prompt(`Введите количество жильцов в квартире №${i + 1}:`));
    const apartment = new Apartment(numberOfResidents);
    building.addApartment(apartment);

    for (let j = 0; j < numberOfResidents; j++) {
      const name = prompt(`Введите имя жильца №${j + 1} в квартире №${i + 1}:`);
      const age = parseInt(prompt(`Введите возраст жильца №${j + 1} в квартире №${i + 1}:`));
      const resident = new Resident(name, age);
      apartment.addResident(resident);
    }
  }

  building.printData();
}

function createBuilding() {
  const numberOfApartments = parseInt(prompt("Введите количество квартир в доме:"));

  if (isNaN(numberOfApartments) || numberOfApartments === 0) {
    alert("Некорректное количество квартир");
    return;
  }

  const building = new MultistoryBuilding(numberOfApartments);

  for (let i = 0; i < numberOfApartments; i++) {
  let numberOfResidents = parseInt(prompt(`Введите количество жильцов в квартире №${i + 1}:`));
  if (isNaN(numberOfResidents) || numberOfResidents === 0) {
    alert("Некорректное количество жильцов");
    return;
  }
  
  const apartment = new Apartment(numberOfResidents);
  building.addApartment(apartment);
  
  for (let j = 0; j < numberOfResidents; j++) {
    const name = prompt(`Введите имя жильца №${j + 1} в квартире №${i + 1}:`);
  
    if (name === "") {
      alert("Имя жильца не может быть пустым");
      return;
    }
  
    const ageString = prompt(`Введите возраст жильца №${j + 1} в квартире №${i + 1}:`);
    const age = parseInt(ageString);
  
    if (isNaN(age) || ageString === "") {
      alert("Некорректный возраст жильца");
      return;
    }
  
    const resident = new Resident(name, age);
    apartment.addResident(resident);
  }
}

building.printData();
}  


window.addEventListener('load', createButton)