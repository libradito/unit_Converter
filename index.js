const toggle = document.getElementById("theme");
const page = document.querySelector("body");
const convertionsArray = document.getElementsByClassName("convertions");
const numberInput = document.getElementById("numberInput");
const button = document.querySelector("button");

function toggleTheme() {
  if (toggle.checked) {
    page.classList.replace("light", "dark");
  } else {
    page.classList.replace("dark", "light");
  }
}

toggle.addEventListener("click", toggleTheme, false);

/* .toFixed(3) */
function toConvert(num) {
  const number = num;
  const textArray = [];
  /* Length */
  let meters_feet = number * 3.2808;
  let feet_meters = number / 3.2808;
  textArray[0] = `${number} meters = ${meters_feet.toFixed(
    3
  )} feet | ${number} feet = ${feet_meters.toFixed(3)} meters`;
  /* Volume */
  let liters_gallons = number / 3.78541;
  let gallons_liters = number * 3.78541;
  textArray[1] = `${number} liters = ${liters_gallons.toFixed(
    3
  )} gallons | ${number} gallons = ${gallons_liters.toFixed(3)} liters`;
  /*  Mass */
  let kilos_pounds = number * 2.205;
  let pounds_kilos = number / 2.205;
  textArray[2] = `${number} kilos = ${kilos_pounds.toFixed(
    3
  )} pounds | ${number} pounds = ${pounds_kilos.toFixed(3)} kilos`;

  return textArray;
}

function conversion() {
  const nuevoArray = toConvert(numberInput.value);
  nuevoArray.forEach((text, index) => {
    convertionsArray[index].lastElementChild.textContent = text;
  });
}

button.addEventListener("click", conversion);
