//  Write a function that takes an array of numbers and returns the sum of the numbers.
// For - of - loop

let numbers = [1, 2, 3, 4];

const number1 = addNumbers(numbers);

export function addNumbers(numbers) {
  let total = 0;
  for (let number of numbers) {
    total = total + +number;
    console.log(total);
  }
  return Number(total);
}





console.log('Returned Number:', number1);
