// function instagramParJaoDataLaao(username,cd){
//     setTimeout(function(){
//         cd({id:1 ,username:"jelaance"})
//     },7000)
// }

// instagramParJaoDataLaao("jelaance",function(data){ //jab jelaance ka data aayega toh ye function chalega

//     console.log(data) //Data ke aane ke baad data ke sath jo karna hai vo yaha pe aayega 
// })


// # Day 60 — Exercises

// ---

//  Exercise 1 — Very Easy (Warming up)

// **Task (Hindi):** Ek function banao `afterDelay`

// **Requirements:**
// - Ye function do cheezein lega:
//   1. `time` (milliseconds)
//   2. `callback` function
// - Given `time` ke baad `callback` call kare
// - Callback ke andar `"Callback executed"` print hona chahiye

// **Use case:**
// > “2 second baad ek kaam karna hai”

// **Goal:**
// - Samajhna ki callback delay ke baad kaise execute hota hai
// - Ye `setTimeout` + callback connection hai

// cb - ek function jo kaam hone ke baad chalta haiCallback in JavaScript ka matlab hota hai ek function jo kisi aur function ko argument ke form mein diya jata hai aur baad mein call hota hai, usually jab koi kaam complete ho jata hai.

// function afterDelay(time,callback){
//   setTimeout(() => {
//     callback();
//   }, time);
// }

// afterDelay(2000,function(){
//   console.log("Callback Execute")
// })

// ---

// ## Exercise 2 — Intermediate (Data flow)

// **Task (Hindi):** Ek function banao `getUser`

// **Requirements:**
// -`username` lega
// - 1 second ke baad `callback` ko ek object de:
//   - `id`
//   - `username`

// **Then:**
// - Callback ke andar ek aur function call karo `getUserPosts`

// **`getUserPosts` requirements:**
// - `userId` lega
// - 1 second ke baad `callback` ko `posts` ka array de

// **Final output:**
// - User ka `username` print ho
// - Fir uske `posts` print ho

// **Goal:**
// - Samajhna ki ek async ka result next async ko kaise milta hai
// - Callback chaining practice

// function getUser(username,cb){
//   setTimeout(()=>{
//     cb({id:21,usernam:"Stuti" })
//   },3000)
// }
// function getUserPosts(id,cb){
//   setTimeout(()=>{
//     cb(["post1","post2","post3"])
//   },4000)
// }
// getUser("stuti",function(data){
//   console.log(data) //1st function data

//   getUserPosts(data.id,function(posts){
//     console.log(posts) //2nd function data
//   })
// })



// function instagramSeDataLao(username,cb){
//   setTimeout(() => {
//     cb({id:43,username:"namskar"})
//   }, 2000);
// }

// function metaPeJao(id,cb){
//   setTimeout(() => {
//     cb(["img1", "img2"]);
//   }, 4000);
// }

// instagramSeDataLao("namaskar",function(data){ // first function call
//   console.log(data)  //object reached
//   metaPeJao(data.id,function(images){ //2nd function call
//     console.log(images) //imf reached
//   })
// })

// saare fucntions alag bante hai pr chalte hai toh ek ke aandar ek chalte hai
// settime out is using for the delay it takes to take the data










// ------------------------------------------------------

// ## Exercise 3 — Intermediate (Callback dependency — thoda painful)

// **Task (Hindi):** Teen functions banao:

// 1. `loginUser`
//    - 1 second baad callback ko `user` object de
// 2. `fetchPermissions`
//    - `userId` lega
//    - 1 second baad callback ko `permissions` array de
// 3. `loadDashboard`
//    - `permissions` lega
//    - 1 second baad callback ko `"Dashboard loaded"` bole

// **Flow:**
// - Pehle `loginUser`
// - Uske andar `fetchPermissions`
// - Uske andar `loadDashboard`
// - Final output console mein print ho

// **Goal:**
// - Callback nesting ko feel karna
// - Yehi structure baad mein callback hell banta hai

// ---

// ### Notes
// - Practice in plain JavaScript using `setTimeout` and callbacks to understand the flow before converting to Promises/async–await. 

// function loginUser(user,cb){
//   setTimeout(() => {
//     cb({id:1212,username: "jelaance"})
//   }, 1000);
// }
// function fetchPermissions(id,cb){
//   setTimeout(() => {
//     cb(['read','write','delete'])
//   }, 2000);
// }
// function loadDashBoard(){
//   setTimeout(() => {
//     cb();
//   }, 2000);
// }

// loginUser("jelaance",function(username){
//   fetchPermissions(userdata.id,function(permissions){
//     loadDashBoard(permissions,function(){
//       console.log();
//     });
//   });
// });

/*Notes

 Day 59 notes 

  Synchronous JavaScript  
JavaScript is **single-threaded**, meaning it executes code **line-by-line**.  
The next line runs **only after** the previous line finishes.

**Example**
```js
console.log("A");
console.log("B");
console.log("C");
```

**Output**
```
A
B
C
```

Everything runs in order.

---

  Asynchronous JavaScript  
Some tasks take time → JS offloads them to browser APIs  
(e.g., **setTimeout, fetch, DOM events**).  
These tasks **do not block** the main thread.

# **Example**
```js
console.log("A");

setTimeout(() => {
  console.log("B");
}, 2000);

console.log("C");
```

# **Output order**
```
A
C
B   ← (printed after 2 seconds)
```

---

  Callbacks  
A **callback** is a function passed as an argument to another function.

# **Example**
```js
function greet(name, cb) {
  console.log("Hello " + name);
  cb();
}

greet("Anubhav", () => {
  console.log("Welcome!");
});
```

---

  Callback Hell - Callback hell happens when callbacks become **nested, messy,and unreadable.

#  Example: Callback Hell (Pyramid of Doom)
```js
getData(function(data1) {
  getMoreData(data1, function(data2) {
    getMoreMoreData(data2, function(data3) {
      getFinalData(data3, function(result) {
        console.log(result);
      });
    });
  });
});
```

Looks like a **pyramid of doom**  
Too many nested levels → hard to read, debug, and maintain.

*/