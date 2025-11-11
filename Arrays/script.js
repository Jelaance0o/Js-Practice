// ARRAY -> Ek se zada value rakhne ki palce

// let arr =[215,321,433,645,321,654]
// console.log(arr[5])

// let arr =[]
// let arr2 = new Array();

// INSERTING NEW ELEMENT

// let arr = [2,1,4,5,6,7]
// arr.push(6) 
// console.log(arr)

// let arr = [1,2,3,4,5,6]
// arr[2]=9 
// console.log(arr) 
// push
// pop -to remove last value

// shift - add element in start

// indexof tell index of element

// slice - use to remove value from mid or from wherever we want ,create a new value

// splice - same as slice bu change the real value

//sort - always use a function - use to sort value

//for each function - run whole array 

// let arr =[21,324,45,7,63,46,75]

// arr.forEach(function(val){
//     console.log(val+5)
// })

// map ek new array banata hai purane array ke data se , and agar return ni denge toh undefine value dikhaega value pe 

// let arr = [221,34,65,87,89];

// let newarr = arr.map(function(val){
//     return 12;
    //agar return ni bhi karenge toh bhi return hogi value but undefine
// })
// console.log(newarr)

// reduce  --> use to do something to aaray and get get a single value

// let arr = [1,2,3,4,5,6];

// let ans = arr.reduce(function(accumlator,val){
//     return accumlator+ val
// },0)  
// here 0 is iniciation value of accumalater

// acumlotor will store return value and val = will store new value from th array  

// console.log(ans)

// let arr = [1,2,3,4,5,6,7,8,9]
// let arr2 =[...arr]

// console.log(arr2) 


let obj = {
    name:"Harsh",
    age: 26,
    khaana: ""
}
console.log(obj)