var multiply = require('./multiply');
var sum = require('./sum');
var totalMultiply = multiply(5, 3);
var totalSum = sum(5, 3);
console.log('Product of 5 and 3 = ' + totalMultiply);
console.log('Sum of 5 and 3 = ' + totalSum);


// ES2015 Code

import multiply from './multiply';
import sum from './sum';
const totalMultiply = multiply(5, 3);
const totalSum = sum(5, 3);
console.log(`Product of 5 and 3 = ${totalMultiply}`);
console.log(`Sum of 5 and 3 = ${totalSum}`);