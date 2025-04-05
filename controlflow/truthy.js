const useremail = "vig@gmail.com";

if(useremail){
    console.log(`Your email is ${useremail}`);   
}else{
    console.log('Please enter your email');
    } 
let phoneno;
if(phoneno){
    console.log(`Your phone number is ${phoneno}`);
}else{
    console.log("no number is there");
}
// here we see that empty or no value is considered as false
// falsy values are: 0, "", undefined, null, NaN, BigInt(0n),-0
// except all other values are considered as truthy eg. array [],object{}..,

const user ={};// since object is empty it is considered as truthy
if(user){
    console.log("user is there");
}else{
    console.log("user is not there");   
}

const input= null;
if(input){
    console.log("input is there");
}else{
    console.log("input is not there");
}

const OneByZero = undefined;
if(OneByZero){
    console.log("OneByZero is there");
}else{
    console.log("OneByZero is not there");
}

BigInt (0n);
if(0n){
    console.log("0n is there");
}
else{
    console.log("0n is not there");
}

// nullish coalescing values
//The ?? operator checks if the value on the left (username) is null or undefined.
//If it is, the value on the right (defaultName) is used as a fallback.

const username = null;
const defaultName = "guest";

const DisplayName = username ?? defaultName;
console.log(DisplayName); // Output: guest

let num = null;
const takeValue = num ?? 10 ?? 35;
console.log(takeValue); // Output: 10

const AnotherValue = num ?? 35 ?? 10;
console.log(AnotherValue); // Output: 35

// takes first value 

