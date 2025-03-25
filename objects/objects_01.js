// singleton object
const tinder = new Object();
 console.log(tinder);

 const tinder1 = {};// non singleton object
    console.log(tinder1);


const user ={
   name :{
      fullname:{
         firstname: 'John',
         lastname: 'Doe'
      }
   }
   }
console.log(user.name.fullname.firstname);
