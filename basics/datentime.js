let mydate = new Date();
console.log(mydate); // Logs: current date and time

console.log(mydate.toString()); // day month date year time zone
console.log(mydate.toDateString()); // day month date year

console.log(typeof(mydate));

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate);

let myCreatedDate2 = new Date(2023,0,23,5,47,80)
console.log(myCreatedDate2.toString());



let myCreatedDate3 = Date.now();
console.log(myCreatedDate3); // Logs: current date and time in milliseconds

// to convert milliseconds to hours and minutes and seconds
let hours=myCreatedDate3/1000/60/60;
console.log(hours);