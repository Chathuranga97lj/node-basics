const imporedSum = require('./myModule/sum');

// const total = imporedSum(2, 3);
const sumTotal = imporedSum.sum(1, 2);
const subTotal = imporedSum.sub(4, 2);

console.log("Total is: ",sumTotal);
console.log("Sub is: ", subTotal);