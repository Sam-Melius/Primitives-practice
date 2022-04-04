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


