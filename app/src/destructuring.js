let languages = ['JavaScript', 'PHP', 'Python', 'Ruby'];

// let js = languages[0];
// let php = languages[1];
// let py = languages[2];
// let ru = languages[3];


// let js, php, py, ru;

// let [js, php, py, ru] = languages;

let [js, php, py, ru] = ['JavaScript', 'PHP', 'Python', 'Ruby'];

// console.log(js, php, py, ru);



let scores = [3, 4, 5];

let [low, mid, high, higher] = scores;

// let [low, , high] = scores;

// let [low, ...rest] = scores;

// let [low, mid, high, higher = 10] = scores;

// console.log(low, mid, high, higher);


function computeScore([low, mid]) {
    console.log(low, mid);
}

computeScore([3, 4]);


function getScores() {
    return [3, 4, 5];
}

let scores2 = getScores();

// console.log(scores2);



let yes = 'Yes';
let no = 'No';

[yes, no] = [no, yes];

// console.log('Yes is', yes);
// console.log('No is', no);




let user = {
    firstname: 'John',
    lastname: 'Doe',
    social: {
        vk: 'johndoe'
    }
};

let { firstname, lastname } = user;
let { firstname: first, lastname: last, age = 25, social: { vk } } = user;

// let {firstname: first, lastname: last} = {firstname: 'John', lastname: 'Doe'};

console.log(firstname, lastname);
console.log(first, last, age, vk);


function post(url, { data, cache }) {
    // config.data;
    // config.cache;

    console.log(data, cache);
}

let result = post('api/users', { data: user, cache: false });