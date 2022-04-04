/* eslint-disable */ 

// Challenge #1 reverse sentence

function reverseWords(sentence) {
  return sentence
    .split(' ')
    .map((word) => {
      return word.split('').reverse().join('');
    })
    .join(' ');
}
console.log(reverseWords('alchemy rocks gold'));

// Challenge #2 Oddish or Evenish

function oddishOrEvenish(number) {
    const result = number
      .toString()
      .split('')
      .map((digit) => Number(digit))
      .reduce((sum, num) => sum + num);
      
    return result % 2 ? 'Oddish' : 'Evenish';
      
  }
  console.log(oddishOrEvenish(121));
  console.log(oddishOrEvenish(41));

  // Challenge #3 Fizz Buzz
function fizzBuzz(number) {
    let arr = [];
    for (let i = 1; i < 16; i++) {
      if (i % 15 === 0) arr.push('FizzBuzz');
      else if (i % 3 === 0) arr.push('Fizz');
      else if (i % 5 === 0) arr.push('Buzz');
      else arr.push(i);
    }
    return arr;
  }
  console.log(fizzBuzz(16));
