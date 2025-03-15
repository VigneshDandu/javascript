const score = 342;
console.log(score);

const balance = new Number(223.44);
console.log(balance);
console.log(balance.toString());// aab yeh balance.toString string baan gaya hai fir toh hum isme string ke methods apply kar sakte hai

console.log(balance.toString().length)

console.log(typeof balance.toString()) // converting this to string
console.log(typeof Number)

console.log(balance.toFixed(1))
console.log(typeof balance.toFixed()) // converting this to string

//tofixed is used to round off the number to the specified decimal places
//toFixed returns a string value

// ++++++++++++++++++++++++maths++++++++++++++++++++++++++++++++
console.log(Math)
console.log(Math.PI); // Logs: 3.141592653589793
console.log(Math.round(4.7)); // Logs: 5
console.log(Math.sqrt(16)); // Logs: 4
console.log(Math.max(1, 3, 2)); // Logs: 3
console.log(Math.min(1, 3, 2)); // Logs: 1
console.log(Math.abs(-4.90))// gives the positive value of the number
console.log(Math.round(3.4));
console.log(Math.floor(9.6));
console.log(Math.ceil(9.2));
console.log(Math.sqrt(674));

const min = 40
const max = 60

console.log(Math.floor(Math.random() * (max - min + 1) + min)) // Logs: random number between 40 and 60;

