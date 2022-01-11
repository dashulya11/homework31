'use strict';

const arr1 = [1, 2, [3, 4]];
const arr2 = ['alins', 'dans', ['sashas', 'deph']];

function myFlat(array) {
  let newArr = [];
  if (arguments.length > 1) {
    throw new Error('Function accepts only 1 argument, too much arguments provided');
  }
  newArr = array.join().split(',');
  return newArr;
}
console.log(myFlat(arr1));
console.log(myFlat(arr2));
