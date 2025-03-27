// Global Scope
let globalVar = "I am a global variable";

function testScope() {
    // Function Scope
    let functionVar = "I am a function variable";
    console.log(globalVar); // Accessible
    console.log(functionVar); // Accessible

    if (true) {
        // Block Scope
        let blockVar = "I am a block variable";
        console.log(blockVar); // Accessible
    }

    // console.log(blockVar); // Unaccessible, would throw an error
}

testScope();

// console.log(functionVar); // Unaccessible, would throw an error
console.log(globalVar); // Accessible