//parent function can access the child function variables but child function cannot access the parent function variables
// Closure is a function having access to the parent scope, even after the parent function has closed.

function one() {
    let name = "vignesh"; // Variable in the scope of function 'one'
    
    function two() {
        let surname = " dandu"; // Variable in the scope of function 'two'
        console.log(name + surname); // 'two' can access 'name' from 'one' due to closure
    }
    
    // console.log(surname); // Uncommenting this will throw an error because 'surname' is not in the scope of 'one'
    two();
}
one();

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; // Base case: factorial of 0 or 1 is 1
    }
    return n * factorial(n - 1); // Recursive case
}

console.log(factorial(5)); // Outputs: 120
