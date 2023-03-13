import { isPalindrome } from "./strings";
import { expect, it } from 'vitest';

// Create two tests that will pass if you supply "racecar" and another test testing one that will return false like "apple"

// extra bonus for multiple words.

it('should pass if the word is the same backwards as it is forwards', ()=>{
    const word = 'racecar'
    // Run the test
    let result = isPalindrome(word)
    expect(result).toBeTruthy()
})

it('should pass if the word is not the same backwards as it is forwards', ()=>{
    const word = 'apple'
    // Run the test
    let result = isPalindrome(word)
    expect(result).toBeFalsy()
})

// ? What if it's a palindrome of mixed case

it('should return true if characters are mixed case', ()=> {
    const word ='RaCeCar';
    const result = isPalindrome(word);
    expect(result).toBeTruthy();
  });

  // extra bonus for multiple words.

it("should pass if the word is the same forward as it is backwards", () => {
    const words = "madam im adam";
    const result = isPalindrome(words);
    expect(result).toBeTruthy();
  });
