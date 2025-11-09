
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

function abcd(a,b,c,d){
    console.log(a,b,c,d);
}
let arr =[1,2,3,4]
abcd(...arr)

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