// EXAMPLE 1 - Get the Union of Two Arrays in JavaScript

const arr1 = ['a', 'b', 'c'];
const arr2 = ['a', 'b', 'c', 'd'];

const union = Array.from(new Set([...arr1, ...arr2]));

// 👇️ ['a', 'b', 'c', 'd']
console.log(union);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Get the Union of Two Arrays using `Array.filter()`

// const arr1 = ['a', 'b', 'c'];
// const arr2 = ['a', 'b', 'c', 'd'];

// function getUnion(array1, array2) {
//   const difference = array1.filter(
//     element => !array2.includes(element),
//   );

//   return [...difference, ...array2];
// }

// // 👇️ ['a', 'b', 'c', 'd']
// console.log(getUnion(arr1, arr2));

// ------------------------------------------------------------------

// // EXAMPLE 3 - Get the Union of Two or more Arrays using `lodash`

// import _ from 'lodash';

// const arr1 = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['a', 'e', 'f'];

// const union = _.union(arr1, arr2);

// // 👇️ [ 'a', 'b', 'c', 'd', 'e', 'f' ]
// console.log(union);

// ------------------------------------------------------------------

// // EXAMPLE 4 - Get the Union of Two Sets in JavaScript

// const set1 = new Set(['a', 'b', 'c']);
// const set2 = new Set(['a', 'b', 'd']);

// const union = new Set([...set1, ...set2]);
// console.log(union); // 👉️ {'a', 'b', 'c', 'd'}

// ------------------------------------------------------------------

// // EXAMPLE 5 - Get a Union of Two Sets using a `for...of` loop

// function getUnion(setA, setB) {
//   const union = new Set(setA);

//   for (const element of setB) {
//     union.add(element);
//   }

//   return union;
// }

// const set1 = new Set(['a', 'b', 'c']);
// const set2 = new Set(['a', 'b', 'd']);

// console.log(getUnion(set1, set2)); // 👉️ {'a', 'b', 'c', 'd'}
