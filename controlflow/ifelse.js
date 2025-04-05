// if 

if (true) {
    console.log('welcome to if block');
}

let score = 80;
if (score >= 80){
    console.log('You passed the exam');
}else{
    console.log('You failed the exam');   
}

let balance = 800;
if(balance <= 500){
    let interest = 'half'
    console.log(`your inerest on balance would be ${interest}`); 
}else{
    let interest = 'half';
    console.log(`there will be no ${interest} interest on your balance`);   
}

//console.log(`the interest is ${interest}`);


//another method of defining a if else block
let num = 19;
if (num>10) console.log('num is greater than 10');
else console.log('num is less than 10');

let result = 9.5;
if (result <= 5){
    console.log('You passed the exam');
}else if (result <=7){
    console.log('You got second class');
}else if (result <= 9){
    console.log('You got first class');
}else {
    console.log('You got distinction, Aggregate'); 
}

const userloggedin = true;
const cash =true;

if (userloggedin && cash){
    console.log('You can buy the product');
}


const gmail = true;
const facebook = false;
if (gmail || facebook){
    console.log('You can login');
    
}