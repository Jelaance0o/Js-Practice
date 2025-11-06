// 1 print numbers from 1 to 10  loop from 1 to 10 and print each numbers.✅

// for(i=1;i<11;i++){
//     console.log(i)
// }

// 2 print only even numbers from 1 to 20 use loop and conditions to print even ones . ✅

// for(i=1;i<20;i++){

//     if(i%2===0){
//         console.log(`${i},is even`)
//     }
// }

// 3 - print numbers from 10 to 1 reverse loop with a decrement . ✅

// for(i=10;i>0;i--){
//     console.log(i)
// }

// 4 - print the word "yes" 5 times repeat using a loop ✅


// for(i =1; i<=5;i++){
//     console.log("yes")
// }

// 5 - print whether numbers from 1 to 10 are even or odd  for each number check :"even", else -> "odd"✅

// for(i=1;i<=10;i++){
//     if(i%2===0){
//         console.log(`${i}, is Even`)
//     }
//     else{
//         console.log(`${i} is Odd`)
//     }
// }


// 6 - ask user for a number and say if its  positive or negative  use prompt() and a condition ✅


// let num = Number(prompt("Enter Number ??"))
// if(num >0)
//     console.log("Positive")
// else
//     console.log("Negative")


// 7. Ask user’s age and check if eligible to vote If age >= 18 → “Eligible”, else → “Not eligible” ✅

// let age = Number(prompt("What's Your age..?? "))
// if(age>18){
//     console.log(`${age} Eligible`)}
// else{
//     console.log ("Not Eligible")
// }

// ------------------------------------------------------
                    //  Exception Handling i think
                    
// let age = prompt("What's Your age..?? ")
// if(age===null){
//     console.error("You Pressed Cancle");
// }
// else{
//     if(age.trim()==="") //trim() use to trim spaces in string
//         console.error("B**** dhang se likh le");
//         else{
//            age= Number(age.trim())

//             if(isNaN(age))
//                 console.error("NOT A NUMBER")
//             else{
//                 console.log("Pakkka ye number hi hai")
//             }
//         }    
// }

// ---------------------------------------------------
// error handling code    

// 8. Print multiplication table of 5 Use loop to print 5 × 1 to 5 × 10. ✅ 

// for(i =1;i<=10;i++){
//     console.log(`5 X ${i} = ${5*i}`)
// }

// 9. Count how many numbers between 1 and 15 are greater than 8 Loop and count conditionally.✅

// let count = 0
// for(i=1;i<16;i++){
//     if(i>8){
//         console.log(i)
//         count++;
//     }
// }
// console.log(count++)



// 10. Ask user for password and print access status Hardcoded correct password. Compare with user input.✅


// let CorrectPass = ("nana")

// let UserPass = prompt("Enter Correct Password")

// if(UserPass===null){
//     console.error("You Pressed Cancle")
// }
// else{    
//     if(UserPass===CorrectPass){
//         console.log("Access Granted...!!")
//     }
//     else{
//         console.error("Access Deny")
//     }
// }

// 11. Allow only 3 attempts to enter correct password If user gets it right early, stop. If not → “Account locked”


let pass = ("xoxo")
attempt = 0
let hogaya = false

let password = prompt("Password dedo")
attempt++
if(password===pass)hogaya=true

while(password!==pass){
    if(attempt===3){
        console.error("Account lock")
        break;
    }
    password = prompt("Password dedo")
    attempt++
    if(password===pass)hogaya=true
}
if(password===pass)console.log("Account Unlock")

// That Was Difficult ✅