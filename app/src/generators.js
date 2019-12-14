function* generare () {
    console.log('Start');
    yield 1;
    yield 2;
    yield 3;
    console.log('Finish');
}

function generate() {
    let currunt = 1;
    console.log('Start');
    return {
        [Symbol.iterator]() {
            return {
                next() {
                    let result = { value: undefined, done: true };

                    if (currunt <= 3) {
                        result.value = currunt;
                        result.done = false;
                        currunt++;
                    } else {
                        result.value = undefined;
                        result.done = true;
                        console.log('Finish');
                    }

                    return result
                }
            }
        }
    }
}

console.log('typeof generators', typeof generators)
console.log(generare());

let iterator = generare();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

let iterator2 = generate()[Symbol.iterator]();

console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());

let numbers = {
    *range (start, end) {
        let currunt = start;
        while (currunt <= end) {
            yield currunt++;
        }
    }
}

function* range (start, end) {
    let currunt = start;
    while (currunt <= end) {
        yield currunt++;
    }
}

for (let num of range(1, 10)) {
    console.log(num);
}