
// function ek hi code ko baad mein use karne ke liye use kiya jata hai 

// function fun_name(){
//     console.log("Hare Krsna")
// }

// Parameter

// function abcd(age,name){
    //parameter
// }
// abcd(12,stuti)

// Rest Perameter

// function abcd(a,b, ...c){
//     console.log(a,b,c);
// }
// abcd(1,2,3,4,5,6);

// default perameter

// function abcd(a=0,b=0,c=0){
//     console.log(a,b,c)
// }
// abcd(1,2)

// SPREAD

// function abcd(a,b,c,d){
//     console.log(a,b,c,d);
// }
// let arr =[1,2,3,4]
// abcd(...arr)

// FAT ARROW FUNCTION

// ()=>{
//     console.log("Helllooo Bacchhoon")
// }




// First Class Function -> Functions ko value ki tarha save kr sakte hai.

// function nana(){
//     return 12;
// }

// let car = nana()
// console.log(car)



// Higher Order function --> function jo aapne return mein functions return kare ya perameter mein function accept kare

// function abcd(){
    
//     return function(){
//         console.log("Hehe")
//     }
// }


// abcd()()




// pure functions --> functions jo ki bahar kuch change na kare like 

// function alu(){
//     console.log("huihui")
// }
// impure function --> jo bahar kuch changes kare like

// function bhata(val){
//     console.log(++val)
// }
// bhata(432)

// closure --> ek aisa function jo aapne return mein function return kare auur uske return function mein parent function ka koi variable use ho;

// function abcd(){
//     let a = 12
//     return function(){
//         console.log(a)
//     }

// }


// abcd()()

// Basic Function , Array & Object code Tasks

//  1. Write a function `sayHello()` that prints `"Hello JavaScript"`.

// function sayHello(val){
//     console.log(`Hey ${val}`)
// }
// sayHello("Stuti")
// sayHello("Jelaance")

// 2. Create a function `add(a, b)` that returns their sum and log the result.

// function add (a , b){
//     return (a+b)
// }
// console.log(add(432,4423))

// 3. Write a function with a default parameter `name = "Guest"` that prints `"Hi <name>"`.

// function cola(Name="Guest" ){
//     console.log(`Hi ${Name}`)
// }
// cola("Stuti")
// cola()

// 4. Use rest parameters to make a function that adds unlimited numbers.

// function UnLimited(...val){
//     let sum = 0

//     val.forEach(function(val){
//       sum = sum + val;
//     }    
// );
// console.log(sum)
// }
// UnLimited(1,2,3,4,5,34,56)


// 5. Create an IIFE that prints `"I run instantly!"`.

// (function(){
//     console.log("I run instantly!")
// })();

// 6. Make a nested function where the inner one prints a variable from the outer one.

// function outer(){
//     let val = "Hello hi"
//     function inner(){
//         console.log(val)
//     }
//     inner()
// }
// outer()()

// 7. Create an array of 5 fruits. Add one at the end and remove one from the beginning.

let fruit = [apple,mango,grapes,strawberry,lichi]
console.log(fruit[3])










// 8. Use a `for` loop to print all elements of an array.
// 9. Create an object `person` with keys `name`, `age`, and `city`, and print each key’s value.
// 10. Use `setTimeout()` to log `"Time’s up!"` after 2 seconds.
