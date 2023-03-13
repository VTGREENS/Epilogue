// Write a function that takes a number as arguement. And it checks to see if it is a prime number. This number must be positive.
// It's only divisiable by 1 and itself.
// Example: Input: 13 Output: "13 is a prime number" Input: 20 Output: "20 is not a prime number"

function isPrimeNumber(n) {
  if (n <= 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (var x = 2; x < n; x++)
      if (n % x === 0) {
        return false;
      }
    return true;
  }
}

// console.log(isPrimeNumber())

let array = [12,21,34,15,46,11,19]

let primeArray = array.filter(num =>{
    return isPrimeNumber(num)
})
console.log(primeArray)
