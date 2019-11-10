let firstName = 'Vova',
    lastName = 'Lak',
    email = 'vova@example.com';

let person = {
    firstName,
    lastName,
    email,
    sayHello() {
        console.log(`Hi, my name is ${firstName} ${lastName}`);
    },
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },
    set fullName(value) {
        this.firstName = value;
    }
};

// Object.defineProperty(person, 'fullName', {
//     get: function() {
//         return this.firstName + ' ' + this.lastName;
//     },
//     set: function(value) {
//         this.firstName = value;
//     }
// });

console.log('person.fullName', person.fullName);

console.log(person);
person.sayHello();

let property = 'age';

person.firstName;
person['firstName'];

person = {
    [property]: 25
}

person[property];

// function createCar(property, value) {
//     var car = {};

//     car[property] = value;

//     return car;
// }

// console.log(createCar('vin', 1));

function createCar(property, value) {
    return {
        [property]: value,
        ['_' + property]: value,
        [property.toUpperCase()]: value,
        ['get' + property]() {
            return this[property];
        }
    };
}

console.log(createCar('vin', 1));