let symbol = Symbol('name');
let symbol2 = Symbol('name');
let symbolFor = Symbol.for('name');
let symbolFor2 = Symbol.for('name');
let symbolForName = Symbol.keyFor(symbolFor);

console.log('symbol', symbol);
console.log('symbol2', symbol2);
console.log('symbol === symbol2', symbol === symbol2);
console.log('symbolFor === symbolFor2', symbolFor === symbolFor2);
console.log('symbolForName', symbolForName);
console.log('typeof symbol', typeof symbol);


let user = {
    ures: 'r2d2',
    [Symbol('password')]: 'c3p0'
};

console.log('user.password', user.password);
console.log('Object.keys(user)', Object.keys(user));
console.log('Object.getOwnPropertyNames(user)', Object.getOwnPropertyNames(user));

let password = user[Symbol.for('password')];

console.log('password', password);
console.log('Object.getOwnPropertySymbols(user)', Object.getOwnPropertySymbols(user));