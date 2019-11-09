let staticLanguages = ['C', 'C++', 'Java'];
let dynamicLanguages = ['JavaScript', 'PHP', 'Ruby'];

let languages = [staticLanguages, 'C#', dynamicLanguages, 'Python'];
let languagesSpread = [...staticLanguages, 'C#', ...dynamicLanguages, 'Python'];

console.log('languages:', languages);
console.log('languages...:', languagesSpread);

function add (x, y, z) {
    console.log(x + y + z);
}

let numbers = [1, 2, 3];

add(numbers);
add(...numbers);