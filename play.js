const single = require('./single')();

const calculator = single.getinstance();

console.log(calculator.add(10,20));
console.log(calculator.sub(20,10));
console.log(calculator.create("red").item);
console.log(calculator.create("blue").item);
