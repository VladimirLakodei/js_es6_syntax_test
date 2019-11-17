// function add(x, y) {
//     return x + y;
// }

let add = (x, y) => x + y;

// let square = function(x) {
//     return x * x;
// }

let square = (x) => x * x;

// let giveMeAnswer = function() {
//     return 42;
// }

let giveMeAnswer = () => 42;

// let log = function() {
//     console.log('Logging');
// }

let log = () => console.log('Logging');

// let multilply = function(x, y) {
//     let result = x * y;
//     return result;
// }

let multilply = (x, y) => {
    let result = x * y;
    return result;
}

// let getPerson = function() {
//     return {name: 'John'};
// }

let getPerson = () => ({name: 'John'});

// (function(){
//     console.log('IIFE');
// })();

(() => console.log('IIFE'))();

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;

// numbers.forEach(function(num) {
//     sum += num;
// });

numbers.forEach(num => sum += num);

let squared = numbers.map(n => n * n);


// let person = {
//     name: 'Bob',
//     greet: function() {
//         var that = this;

//         setTimeout(function() {
//             console.log('Hello my name is ' + that.name);
//             console.log('that', that);
//             console.log('this', this);
//         }, 2000);
//     }
// };

let person = {
    name: 'Bob',
    greet: function() {
        setTimeout(() => {
            console.log('Hello my name is ' + this.name);
            console.log('this', this);
        }, 2000);
    }
};

console.log(typeof add);
console.log(add(2, 5));

console.log(square(3));

console.log(giveMeAnswer());

log();

console.log(multilply(3, 7));

console.log(getPerson());

console.log(sum);
console.log(squared);

person.greet();

let Task = () => console.log('Task');

// let task = new Task(); // Does not work

// Task.bind();  // Does not work
// Task.call();  // Does not work
// Task.apply(); // Does not work