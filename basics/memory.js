//stack(primitive) and heap(non-primitive) memory allocation
//stack memory allocation
//stack memory allocation is done for primitive data types

let a = "100";
let b = a;
 b = "240";

 console.log(b);
 console.log(a);
 
//in stack memory allocation, the value of a is copied to b and then b is changed to 240. But the value of a remains 100.

//heap memory allocation
//heap memory allocation is done for non-primitive data types
 let myobj={
    name:"john",
    age: 34,
    email: "vigneshdandu@gmail.com"
 }
 let myobj2 = myobj;
    myobj2.age = 45;
    myobj.email = "sanju"
    console.log(myobj);
    console.log(myobj2);

    //in heap memory allocation, the value of myobj is copied to myobj2 and then myobj2 is changed to 45. The value of myobj also changes to 45. This is because the reference of the object is copied to myobj2. So, any changes made to myobj2 will also reflect in myobj.