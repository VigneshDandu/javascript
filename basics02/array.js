const myarry =[1,2,3,4,5,6,7,8,9,10];
console.log(myarry[0])

console.log('Array methods')

console.log('push');
myarry.push(11)
console.log(myarry);

console.log('pop');
myarry.pop()//remove last element
console.log(myarry);

myarry.pop('unshift')
myarry.unshift(22)//add element at first
console.log(myarry);

console.log('shift');
myarry.shift()//remove first element
console.log(myarry);

console.log('includes');
console.log(myarry.includes(5));



console.log('concatenation');
const heroes = ['superman', 'batman', 'spiderman', 'ironman']
const combine = myarry.concat(heroes)
console.log(combine);
console.log(combine[8]);

combine.push('hulk');
console.log(combine);

combine.shift();
console.log(combine);

combine.unshift(1)
console.log(combine);

console.log(heroes);
console.log(myarry);

