'use strict';

const arr1 = [1, 2, [3, 4]];
const arr2 = ['alins', 'dans', ['sashas', 'deph']];
const arr3 = 123;

function myFlat(array) {
  let newArr = [];
  if (arguments.length > 1) {
    throw new Error('Function accepts only 1 argument, too much arguments provided');
  }
  if (Array.isArray(array)) {
    newArr = array.join().split(',');
    return newArr;
  }
  return 'it is not an array!';
  
}
console.log(myFlat(arr1));
console.log(myFlat(arr2));
console.log(myFlat(arr3));
