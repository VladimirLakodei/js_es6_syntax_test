function greet(name) {
    console.log('Hello ' + name);
    console.log(`Hello ${name}`);
    console.log(`Hello ${name}`.toLocaleUpperCase());
    console.log(typeof `Hello ${name}`);
}

greet('Vova');

function createEmail(to, from, subject, message) {
    console.log(`
        To: ${to}
        From: ${from}
        Subject: ${subject}
        Message: ${message}
    `);
}

createEmail('john@mail.com', 'jane@mail.com', 'Hello', 'How are you doing?');

function add(x, y) {
    console.log(`${x} + ${y} = ${parseInt(x) + parseInt(y)}`);
}

add(5, 7);
add('5', '7');

let name = 'Bill';

console.log(upperName`Hello ${name}`);

function upperName(literals, ...values) { // remaining function parameters
    console.log(literals, values);

    return literals[0] + values[0].toUpperCase();
}