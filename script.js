// VARIABLES

let weight = parseInt(prompt('Enter your weight (kg)'));
let height = parseFloat(prompt('Enter your height (m)'));
let gender = prompt('Enter your gender as M or F');
let bmiCatergory;

// BMI CALCULATE
let bmi = weight / height ** 2;

// OUTPUT
console.log(`Your bmi is: ${bmi}`);