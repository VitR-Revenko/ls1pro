"use strict";

const genderObj = {
  m: "Male",
  f: "Female",
};

const languagesObj = {
  ua: "Ukrainian",
  en: "English",
  de: "Deutsch",
  jp: "Japanese",
  ru: "Russian",
};

const data = [];

document.querySelector('input[type="button"]').addEventListener("click", function () {
  const myForm = document.myForm;

  // First name:
  const firstName = myForm.firstName.value;
  data.push(`Your first name is ${firstName}`);

  // Last name:
  const lastName = myForm.lastName.value;
  data.push(`Your last name is ${lastName}`);

  // Date of birth:
  const birthDate = myForm.birthDate.value;
  data.push(`Your date of birth is ${birthDate}`);

  // Radio button:
  const gender = myForm.gender.value;
  data.push(`Your gender is: ${genderObj[gender]}`);

  // City:
  const city = myForm.city;
  data.push(`You live in ${city.options[city.selectedIndex].textContent}`);

  // Address:
  const address = myForm.address.value;
  data.push(`You live at ${address}`);

  // Checkbox:
  const languagesElems = myForm.lang;
  const checkedLanguages = [];
  for (let i = 0; i < languagesElems.length; i++) {
    if (languagesElems[i].checked) {
      checkedLanguages.push(languagesObj[languagesElems[i].value]);
    }
  }
  data.push(`Languages You know: ${checkedLanguages.join(", ")}`);

  // Show data:
  const container = document.getElementById("wrap");
  container.innerHTML = "";
  data.forEach((el) => {
    const elem = document.createElement("div");
    elem.textContent = el;
    container.appendChild(elem);
  });
});
