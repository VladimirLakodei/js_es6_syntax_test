// function applyForVisa(documents, resolve, reject) {
//     console.log('Wait...');
//     setTimeout(function(){
//         Math.random() > .5 ? resolve({}) : reject('No today');
//         let visa = {};
//         // resolve(visa);
//     }, 2000);
// }

// applyForVisa({}, function(visa) {
//     console.info('Visa ready');
//     bookHotel(visa, function(resrvation) {
//         buyTickets (resrvation, function() {

//         }, function(){

//         });
//     }, function(error) {

//     });
// },
// function(reason){
//     console.error(reason);
// });

function applyForVisa(documents, resolve, reject) {
    console.log('Wait...');
    let promise = new Promise (function(resolve, reject) {
        setTimeout(function(){
            Math.random() > .1 ? resolve({}) : reject('No today');
            let visa = {};
        }, 2000);
    });
    return promise;
}

function getVisa(visa) {
    console.log('Visa was received');
    return new Promise (function(resolve, reject) {
        setTimeout(() => resolve(visa), 2000);
    });
}

function bookHotel(visa) {
    console.log('Visa', visa);
    console.log('I am booking hotel');
    return {};
}

function buyTickets() {
    console.log('I am buying tickets');
    console.log('Booking', {});
}

applyForVisa({})
    .then(getVisa)
    .then(bookHotel)
    .then(buyTickets)
    .catch(error => console.error(error))
    .then(() => console.info('...'));
