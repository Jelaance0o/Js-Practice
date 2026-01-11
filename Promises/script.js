// Promises - Server jao data lao
// resolve - data a gaya toh resolve
// pending - data laane gaya toh pending
// reject - data mein error aaya toh error  

// Rejct and ersolve both are fullfil

// const prm = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//     reject();
//     }, 5000);
// })
// prm
//     .then(function(){
//       //agar resolve hua toh then wala function chalega
//       console.log("Resolved");
//     })                         
//     .catch(function(){           // Agr reject hua toh catch wala fucntion chalta hai
//         console.log("Rejected")
//     })

// example - meta pe jao data lao agar data aaya toh RESOLVE chal denge agar data nahi aay a toh REJECT chala denge.--> 

// Agar RESOLVE chala toh THEN chala denge agar REJECT chala toh CATCH chala denge. 


//FETCH - kisi bhi URL pe ja sakte hai
// Iska data redable ni hota
// use JSON bana kr readable banate hai
// fir data readable hota hai
// fetch mein do data lagte hai


//non readable data jab json banta hai toh vo ek object mein convert ho jata hai

//fir next THEN mein real data ko readable form mein lenge 

//jab first THEN mein data aayega fir 2nd THEN chalega 

//2nd then mein new promise Nikalta hai


// **arrow function mein bina {} lage same line mein hi agar kuch likh do toh vo return ho data hai

//* API CALLING */
//fetch mein 2 then use hote hai.

// fetch(`https://randomuser.me/api/`)  // jisne fetch banaya usne aapne function mein ** promise include kiya tha **ishi liye hum fetch ke baad then use karte hai 
// .then((raw)=>raw.json())
//     .then((data)=>{
//     console.log(data.results[0].name.first)
// })
// .catch((err)=>{
//     console.log(err)
// })


 
//**Async /await - Async / Await promised pe kaam katab hai
// agar promise bana hai toh async await chalega


// await promise ke pehle lagta hai
// but await use karne ke liye humein fucntion ke andar rehnma padhta hai
//**aur function ke andar await use karne ke liye function ke bahar ASYNC lagana padhta hai *    /


async function abcd(){
    let raw = await fetch(`https://randomuser.me/api/`);
    let data = await raw.json();
    console.log(data.results[0].name)
}
abcd()