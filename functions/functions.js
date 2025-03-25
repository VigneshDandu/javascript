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
