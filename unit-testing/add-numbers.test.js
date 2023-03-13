import { addNumbers } from './add-numbers';
import { expect, it } from 'vitest';

// When you are coming up with your unit test you will have to have a description of what you are testing.
// It should read like a sentence.

// Example Test1: The test should provide a sum for all number values in the array.
it('should provide a sum for all numbers in the array', () => {
  // Defining the initial setup variables
  let numberArray = [1, 2];
  let expectedResult = 3;
  // Run the test
  let result = addNumbers(numberArray);
  expect(result).toBe(expectedResult);
});

// Example: what the array had something other than number in it?
it('should result in a NaN of the test has one or more invalid numbers', () => {
  let numberArray = [1, 'a'];
  // Run the test
  let result = addNumbers(numberArray);
  expect(result).toBeNaN();
});

// Example if array is a number that is a string it should still add it.
it('should return the correct sum if the numbers are a string', () => {
  let numberArray = [1, '2'];
  let expectedResult = 3;
  // Run the Test
  let result = addNumbers(numberArray);
  expect(result).toBe(expectedResult);
});

// Example: Empty Array expecting 0
it('should return ??? if an empty array is provided', () => {
  let numberArray = [];
  let expectedResult = 0;
  // Run the Test
  let result = addNumbers(numberArray);
  expect(result).toBe(expectedResult);
});
