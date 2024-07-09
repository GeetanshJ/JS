// let arr = [1,2,3,4];
// arr.push(5); // push(element1, ..., elementN): Adds one or more elements to the end of an array and returns the new length of the array.
// console.log(arr);


// arr.pop();  // pop(): Removes the last element from an array and returns that element.
// console.log(arr);


// arr.unshift(0);  // unshift(element1, ..., elementN): Adds one or more elements to the beginning of an array and returns the new length of the array.
// console.log(arr);


// arr.shift();   // shift(): Removes the first element from an array and returns that element.
// console.log(arr);


// arr.splice(0,1,0.01,1.10)  // splice(start, deleteCount, item1, ..., itemN): Adds/removes elements from an array.
// console.log(arr);



















let fruits = ['apple', 'banana', 'cherry'];

// Adding elements
fruits.push('date');        // ['apple', 'banana', 'cherry', 'date']
fruits.unshift('elderberry'); // ['elderberry', 'apple', 'banana', 'cherry', 'date']

// Removing elements
fruits.pop();               // ['elderberry', 'apple', 'banana', 'cherry']
fruits.shift();             // ['apple', 'banana', 'cherry']

// Accessing elements
let firstFruit = fruits[0]; // 'apple'
let lastFruit = fruits[fruits.length - 1]; // 'cherry'

// Iterating elements
fruits.forEach(fruit => console.log(fruit));

// Transforming elements
let upperFruits = fruits.map(fruit => fruit.toUpperCase()); // ['APPLE', 'BANANA', 'CHERRY']

// Filtering elements
let shortFruits = fruits.filter(fruit => fruit.length <= 5); // ['apple', 'banana']

// Reducing elements
let totalLength = fruits.reduce((total, fruit) => total + fruit.length, 0); // 16

// Searching elements
let hasCherry = fruits.includes('cherry'); // true
let bananaIndex = fruits.indexOf('banana'); // 1

// Sorting elements
let sortedFruits = fruits.sort(); // ['apple', 'banana', 'cherry']

// Reversing elements
let reversedFruits = fruits.reverse(); // ['cherry', 'banana', 'apple']














// Array Creation

// Array.of(element0, element1, ..., elementN): Creates a new array with a variable number of elements.
// Array.from(arrayLike, mapFn, thisArg): Creates a new array from an array-like or iterable object.



// Adding/Removing Elements

// push(element1, ..., elementN): Adds one or more elements to the end of an array and returns the new length of the array.
// pop(): Removes the last element from an array and returns that element.
// unshift(element1, ..., elementN): Adds one or more elements to the beginning of an array and returns the new length of the array.
// shift(): Removes the first element from an array and returns that element.
// splice(start, deleteCount, item1, ..., itemN): Adds/removes elements from an array.



// Accessing/Iterating Elements

// forEach(callback(currentValue, index, array), thisArg): Executes a provided function once for each array element.
// map(callback(currentValue, index, array), thisArg): Creates a new array with the results of calling a provided function on every element in the calling array.
// filter(callback(element, index, array), thisArg): Creates a new array with all elements that pass the test implemented by the provided function.
// reduce(callback(accumulator, currentValue, currentIndex, array), initialValue): Executes a reducer function on each element of the array, resulting in a single output value.
// reduceRight(callback(accumulator, currentValue, currentIndex, array), initialValue): Applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
// some(callback(element, index, array), thisArg): Tests whether at least one element in the array passes the test implemented by the provided function.
// every(callback(element, index, array), thisArg): Tests whether all elements in the array pass the test implemented by the provided function.
// find(callback(element, index, array), thisArg): Returns the value of the first element in the array that satisfies the provided testing function.
// findIndex(callback(element, index, array), thisArg): Returns the index of the first element in the array that satisfies the provided testing function.




// Searching and Sorting

// indexOf(searchElement, fromIndex): Returns the first index at which a given element can be found in the array, or -1 if it is not present.
// lastIndexOf(searchElement, fromIndex): Returns the last index at which a given element can be found in the array, or -1 if it is not present.
// includes(searchElement, fromIndex): Determines whether an array includes a certain element, returning true or false as appropriate.
// sort(compareFunction): Sorts the elements of an array in place and returns the sorted array.
// reverse(): Reverses the order of the elements of an array in place.





// Array Properties and Methods

// length: Reflects the number of elements in an array.
// concat(array1, ..., arrayN): Merges two or more arrays. This method does not change the existing arrays but returns a new array.
// join(separator): Joins all elements of an array into a string.
// slice(begin, end): Returns a shallow copy of a portion of an array into a new array object.
// flat(depth): Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// flatMap(callback): First maps each element using a mapping function, then flattens the result into a new array.