/*

1. Creating An Array 
2. Finding The length of the Array
3. Accessing An Array Item through index
4. Multi Dimentional Array 
5. Aceessing Multi Dimentional Array value through Index
6. Finding items in an array using ' indexOf()'
7. Adding Item on the Array using - 'ArrayName.push()'
8. Add an item to the start of the array, use unshift():
9. Removing Array Item using - ArrayName.pop()
10. Removing 1st Item from a Array using - ArrayName.shift()
11. Delete item from Array if know the index using - ArrayName.splice()
12. Accessing All element on Array using = of Loop 
13. Finding a string on An Array using ArrayName.filter()
14. Seperate them any string using - stringVariableName.split(',');
15. join any array sing - join()



*/

// Full Details About Arrays

/*
1. We can store any kinds of data types in an Array
2. Array inside an array is called a multidimensional array
3. If you know the index of an item, you can remove it from the array using splice():
4. Split Method returns a array 


*/

/*
1. Creating an Array
(Exp) => 

const shopping = ['bread','milk','chese','hummus']
console.log(shopping)


========================================

2. Finding Length of the Array

(Exp) => 
const shopping = ['bread','milk','chese','hummus']
console.log(shopping.length)



========================================

3. Accessing An Array Item through index
(Exp) => 

const shopping = ['bread','milk','chese','hummus']

shopping[0] = 'Alu';

console.log(shopping)

Notice : it will replace the index value 

 ===================================================
4. 4. Multi Dimentional Array 
(Exp) => 
const random = ['tree', 795, [0, 1, 2]];
const anotherMul = ["name","Age",["Ashik",24],'Subject']


 ===================================================
5. 5. Aceessing Multi Dimentional Array value through Index
(Exp) => 

const anotherMul = ["name","Age",["Ashik",24],"Subject"]
anotherMul[2][0] 



 ===================================================
6. Finding items in an array using ' indexOf()'
(Exp) => 

const birds = ["Parrot","Falcon","owl"]
console.log(birds.indexOf('owl')))

Result = 2
=========================================================

7. Adding Item on the Array using - 'ArrayName.push()'
(Exp) => 

const birds = ["Parrot","Falcon","owl"]
birds.push("Tiya")

Result = ["Parrot","Falcon","owl","Tiya"]

=========================================================

8. Add an item to the start of the array, use unshift():

(Exp) => 

const birds = ["Parrot","Falcon","owl"]
console.log(birds.unshift('babul')))

Result =  ["babul","Parrot","Falcon","owl"]
=========================================================


9. Removing Array Item using - ArrayName.pop()

(Exp) => 

const birds = ["Parrot","Falcon","owl"]
birds.pop()

Result =  ["Parrot","Falcon"]

Notice : We can save the deleted item by storing a variable

=========================================================


10. Removing 1st Item from a Array using - ArrayName.shift()
(Exp) => 

const birds = ["Parrot","Falcon","owl"]
birds.shift()

Result =  ["Falcon","owl"]

Notice : We can save the deleted item by storing a variable

=========================================================

11. Delete item from Array if know the index using - ArrayName.splice(index,how many want to delte)

(Exp) => 

const birds = ["Parrot","Falcon","owl","Abul","Kalam"]
birds.splice(2,1)

Result =  ["Parrot","Falcon","Abul","Kalam"]

Notice : We can save the deleted item by storing a variable

=========================================================

12. Accessing All element on Array using = of Loop 

(Exp) => 


const birds = ['Parrot', 'Falcon', 'Owl'];

for(let bird of birds){
    console.log(bird)
}

Result : 'Parrot', 'Falcon', 'Owl'




=========================================================

13. Finding a string on An Array using ArrayName.filter()

(Exp) => 

function islong(city){
  return city.length > 5
}
const cities = ["Dhaka","Gazipur","Rajsahi","Dinajpur"]

const city = cities.filter(islong)

console.log(city)


=========================================================

14. Seperate them any string using - stringVariableName.split(',');


(Exp) => 

const data = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
const cities = data.split(',');


=========================================================

15. join any array sing - join()


(Exp) => 

const commaSeparated = cities.join(',');
commaSeparated;




*/
