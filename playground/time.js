const moment = require('moment');

// let date = new Date();
// console.log(date.getMonth());

// let date = moment();
// date.add(1, 'year').subtract(9, 'months');
// console.log(date.format('Do MMM, YYYY')); 


// 10:35 am
// 6:01 am

new Date().valueOf();
let someTimestamp = moment().valueOf();
console.log(someTimestamp);


let createdAt = 12345;
let date = moment(createdAt);
console.log(date.format('h:mm a')); 