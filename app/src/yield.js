function* generator () {
    // let result = 1 + (yield);
    // console.log(`Result ${result}`);

    let array = [yield, yield, yield];
    console.log(array[2]);
}

let iterator = generator();
// console.log(iterator.next());
// console.log(iterator.return());
// console.log(iterator.throw(new Error('Error')));
console.log(iterator.next(1));
console.log(iterator.next(2));
console.log(iterator.next(3));