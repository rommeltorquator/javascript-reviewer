// BASIC METHODS

// alert("This is it!");
// console.log("Hello World");
// console.table({a: "1", b: "2"});

// single line comment

/*
    multi
    line
    comments
*/

// var, let, const
// use camel case for naming variables, or underscore

// primitive data type = string, bool, number, null, undefined

// reference data types = arrays, object literal, function, dates

var name = "Rommel";
let hobbies = ['sex', 'basketball'];
console.log(typeof hobbies);

// TYPE CONVERSION

let name = String(5);
let name = Number('5');
let name = parseInt('5');

// MATH METHODS

let num = 1;
num = Math.round(2.99); // 3
num = Math.ceil(2.99); // 3
num = Math.floor(2.99); // 2

num = Math.sqrt(64); // 8
num = Math.abs(-64); // 64
num = Math.pow(8, 2); // 64

num = Math.min(8, 2, 1, 20, 23); // 1
num = Math.max(8, 2, 1, 20, 23); // 23
num = Math.random();

// for random number
num = Math.floor(Math.random() * 20 + 1);

// STRING METHODS

let first = 'Rommel';
let last = 'Torquator';
let full = first + ' ' + last; // concatenate

full += last; // append

// console.log(full.length);
// console.log(first.concat(' ', last)); Rommel TorquatorTorquator

full = first.toUpperCase();
full = first.toLowerCase();

// console.log(first.indexOf('R')); returns a number
// console.log(first.lastIndexOf('m')); returns the index number of the last letter m
// console.log(first.charAt(2)); returns the character at index 2

full = first.substr(0, 3);
full = first.slice(0, 3); // the same as substring

full = first.split(' '); // returns an array that is separated using the space

full = first.replace('Rommel', 'Melo');

// console.log(full.includes('Rommel')); returns true or false

// TEMPLATE LITERAL

const n = "rommel";
const a = 30;

const combined = `My name is ${n}, and I am ${a} years of age`;

// ARRAYS AND ARRAY METHODS

const heroes = ['Ogre', 'Meepo', 'Lion', 'Appa'];
const numbers = [1, 2, 3, 4];

// can combine different data types in one array

// console.log(heroes.length);
// console.log(Array.isArray(heroes)); returns true or false
// console.log(heroes[2]); returns the item on index 2, lion
// console.log(heroes.indexOf('Ogre')); returns the index if Ogre

heroes.push('Sven'); // adds an item at the end
heroes.pop(); // removes the last item

heroes.unshift('Sniper'); // adds an item on the front
heroes.shift(); // removes an item on the front


heroes.splice(1, 1); // put the index on the parameter
heroes.reverse();
heroes.concat(numbers);
heroes.sort();

// review the sorting of numbers
numbers.sort(function(x, y) {
    return x - y;
    // return y - x; reverse
});

// 013