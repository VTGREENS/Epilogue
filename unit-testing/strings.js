// Write out a function that takes one parameter called phrase

// Inside of this function you should be able to return true if the reversed phrase is the same as the supplied phrase

// Racecar is true.

export function isPalindrome(phrase) {
    let noSpaceOriginalPhrase = phrase.replaceAll(" ", "").toLowerCase();
  
    let combinedReversedPhrase = noSpaceOriginalPhrase
      .split("")
      .reverse()
      .join("")
      .toLowerCase();
  
    return noSpaceOriginalPhrase === combinedReversedPhrase ? true : false;
  }
  
  console.log(isPalindrome("madam im adam"));
  
  let myArray = [1, 2, 3, 4];
  
  console.log(myArray.reverse());

  // Longer Version:
// function isPalindrome(phrase) {
//     let noSpaceOriginalPhrase = phrase.replaceAll(" ", "");
//     console.log(noSpaceOriginalPhrase)
//     let splitLetters = noSpaceOriginalPhrase.split("");
//     let reversedLetters = splitLetters.reverse();
//     let combinedReversedPhrase = reversedLetters.join("");

//     return noSpaceOriginalPhrase === combinedReversedPhrase ? true : false;
//   }