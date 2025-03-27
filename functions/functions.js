function name() {
    console.log('Hello World');
}
name();
name(); // prints or say performs the functions

function add(num1, num2) {
    let num3 = num1 + num2;
    return num3;
}

const result = add(45, 86);
console.log("Total: " + result); // Corrected string concatenation

function alertMessage(message) {
    return `${message} is a message`;
}
console.log(alertMessage('This')); // Corrected string concatenation

// nested function
function addsquares(a,b){
    function square(x){
        return x**2;
    }
    return square(a) + square(b);
}
console.log(addsquares(3,4))

console.log(Math.sqrt(9)+Math.sqrt(16)) // Corrected Math.sqrt function;

// another method  of writing function
const square1 = function(number){
    return number **2;   
}

console.log(square1(5));