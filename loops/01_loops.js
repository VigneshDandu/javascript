// for

// for (let i = 0; i <= 5; i++) {
//     const element = i;
//     if(element ==2){
//         console.log("Found 2");
//     }
//     console.log(element);
// }

// for (let i = 1; i < 10; i++) {
//     console.log("Table of "+i);
    
//     for(let j = 1; j<= 10 ; j++){
//        // console.log(`(i,j) = (${i},${j})`);   
//        console.log(i + '*' + j + '=' +  i*j);
       
//     }
    
// }

// break and continue

// for (let i = 1; i <= 10; i++) {
//     if (i==4){
//         console.log("Found 4");
//         break; // exits the loop
        
//     }
//     console.log(`${i} is the current number`);
    
// }

for (let i = 1; i <= 10; i++) {
    if (i==4){
        console.log("Found 4");
       continue; // skips the current iteration but does not exit the loop
        
    }
    console.log(`${i} is the current number`);
    
}