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

// OBJECT LITERAL - is a reference type, not a primitive type

// key - value pair
const person = {
    first: "Rommel",
    age: 30,
    hobbies: ['sex', 'ps4', 'sleep'],
    address: {
        city: 'Manila',
        country: 'Philippines'
    },
    greet: function() {
        console.log('Hello');
    }
}

let rommel = person;
// console.log(rommel); to access the whole object
// console.log(rommel.first); to access the first variable
// the this keyword is used to access property inside the function

// DATE AND TIME
const today = new Date();
// const birthday = new Date('10-09-1990'); month, day, year
const birthday = new Date('September 10 1990');

// review different Date get methods and Date set methods


// IF STATEMENTS, COMPARISON OPERATORS, LOGICAL OPERATORS, you already know this shit

// SWITCH OPERATOR
const color = 'orange';

switch(color) {
    case 'orange':
        console.log(`Color is ${color}`);
        break;
    case 'blue':
        console.log(`Color is ${color}`);
        break;
    case 'green':
        console.log(`Color is ${color}`);
        break;
    default:
        console.log('none of the above');
        break;
}

// FUNCTION DECLARATION

function greet(){
    // console.log("Hello");
    return "Hello";
}

greet(); // to invoke the function

function greet(first, last){
    // console.log("Hello");
    return "Hello" + first + last;
}

// default parameters
function greet(first="Toshi", last="Iverson"){
    // console.log("Hello");
    return "Hello" + first + last;
}

// function expressions
const greet = function(){
    return 'Hello';
}

// IIFE, can also have parameters
(function() {
    return 'this is IIFE';
})();

(function(name) {
    return 'this is IIFE '+ name;
})('Rommel');

// property methods is a function inside an object, you already know this shit


// LOOPS, for while, do while
// use for loop if you know the number of iterations, use while if no certain number of iterations

for(let i = 0; i < 5; i++) {
    console.log(i);
}

let i = 0;

while(i < 4) {
    console.log(i);
    i++;
}

// do while will run 1 time no matter what
do {
    console.log(i);
} while(i < 5);

// looping arrays using forEach
let names = ['ogre', 'meepo', 'lion', 'zeus'];

names.forEach(function(name) {
    console.log(name);
});

// map
const sweetArray = [2, 3, 4, 5, 35]
const sweeterArray = sweetArray.map(sweetItem => sweetItem * 2);

const customers = [
    {id: 1, name: 'Rommel'},
    {id: 2, name: 'Melo'},
    {id: 3, name: 'Toshi'},
]

// return an array containing the user ids
const ids = customers.map(user => user.id);

// for in loop, for looping objects
var person = {fname:"John", lname:"Doe", age:25};

var text = "";
var x;
for (x in person) { // x is the key, you can add another variable for value
  text += person[x] + " ";
} 

// go back to window topic

// let, const and var

// DOM Manipulation
// DOM selectors for single element

document.getElementById('main')

document.getElementById('main').id
document.getElementById('main').className
document.getElementById('main').style.backgroundColor = 'orange';

document.getElementById('main').textContent = 'Main text';
document.getElementById('main').innerText = 'Main text';
document.getElementById('main').innerHTML = '<p>adding an inner HTML</p>';

document.querySelector('#main')
document.querySelector('.main')
document.querySelector('p') // selecting the first p element
document.querySelector('p a') // nested elements

// DOM selector for multiple elements

document.getElementsByClassName('btn') // can be access via index
document.getElementsByTagName('li')
document.querySelectorAll('.btn')
document.querySelectorAll('li:nth-child(even')

// converting an html collection into an array


// TRAVERSING THE DOM
// get the children nodes of parent element
parent.children // returns an html collection of child elements inside the parent element
parent.children[0] // accessible via index

parent.firstElementChild // selecting the first child

child.parentElement // selecting the parent element
child.nextElementSibling
child.previousElementSibling


// create element, adding id's, classes and attributes
const li = document.createElement('li');
li.className = 'text-center'; // adding class to the li element
li.className = 'text-center bold-text'; // adding class to the li element
li.id = 'main-list'; // adding id
li.setAttribute('title', 'Main list'); // adding title attribute

// append child
li.appendChild(document.createTextNode('Hello World'));

// removing replacing elements
// replace element
mainDiv.replaceChild(newTitle, oldTitle);

// remove element
lis[2].remove();
list.removeChild(lis[3]); // removing child element through parent element

// classes
li.classList.add('new-class');
li.classList.remove('new-class');
li.classList[0] // access a class through index

// attributes
li.getAttribute('class'); // returns the classes
li.setAttribute('title', 'Main list'); // adding title attribute
li.hasAttribute('class'); // returns true or false

li.removeAttribute('href');

// EVENT LISTENERS
btn.addEventListener('click', function(e) {
    e.preventDefault();
    // e.target
    // e.type
    // e.timeStamp
});

// keyboard events
// dblclick, mousedown, mouseup, mouseover, mouseenter, mouseleave, mousemove

// keyboard and input events
// add e.preventDefault() on form submit
form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(input.value); // shows the value of a specific input
});

input.addEventListener('keydown', function(e) {
    console.log(e.target.value);
});

// keyup, keypress, focus, blur, cut, paste, input
// change is for select html tag

// EVENT BUBBLING and EVENT DELEGATION

document.body.addEventListener('click', function(e) {
    if(e.target.classList.contains('btn btn-primary')) {
        console.log('Specific item targeted!');

        e.target.parentElement.remove();
        // e.target.parentElement.parentElement.remove();
        // e.target.parentElement.parentElement.parentElement.remove();
    }
});

// 033