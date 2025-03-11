let name = "vignesh"
let email =" vigneshdandu8355@hmail.com"

console.log(name + email);
//older and not good method 
//instead of using + operator, we can use template literals
console.log(`my name is ${name} & my email is ${email}`);
//template literals are enclosed in backticks(`) and the variables are enclosed in ${} ,template literals are more readable and easy to use than the older method ,template literals are used to concatenate strings and variables

const gamename = new String("vignesh dandu");
console.log(gamename);
console.log(gamename[0]);
console.log(gamename.length);
console.log(gamename.toUpperCase())
//by assigning the string to a new String object, we can use the inbuilt methods of the String object like toUpperCase(), toLowerCase(), length, etc.
//but the string object is not recommended to use as it is slower than the primitive string data type

const newname = gamename.substring(0,4);
//substring extracts the characters from the string from the start index to the end index
console.log(newname);

const newname2 = gamename.slice(-13,-6);
//slice deletes the characters from the end of the string
console.log(newname2);

const newname3 = "     Harrier        "
console.log(newname3);

console.log(newname3.trim());
//trim removes the extra spaces from the start and end of the string
console.log(`we have to learn basics of this string object in console of web browser`);


