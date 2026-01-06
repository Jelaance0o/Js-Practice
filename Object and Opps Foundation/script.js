// SECTION 1: OOPS Thinking with Objects ✅
// 	1.	Create an object called laptop that contains brand, price, and a start method that prints “Laptop started”. ✅
// 	2.	Add one more method to the same object that increases the price by 10 percent. ✅
// 	3.	Now imagine you need 10 laptops with same structure but different data. ✅
// Write down (in words or code) what problems you will face if you keep using plain objects. ✅


// const laptop ={
//     brand: "Lenovo",
//     price: 54000,
//     start(){
//     return "Laptop Started"
//     },
//     increase(){
//         const rate = this.price + (this.price*10/100);
//         return rate
//     }
// }
// const laptop2 ={
//     brand: "Asus",
//     price: 60000,
//     start(){
//     return "Laptop Started"
//     },
//     increase(){
//         const rate = this.price + (this.price*10/100);
//         return rate
//     }
// }
// const laptop3 ={
//     brand: "HP",
//     price: 67000,
//     start(){
//     return "Laptop Started"
//     },
//     increase(){
//         const rate = this.price + (this.price*10/100);
//         return rate
//     }
// }
// console.log(laptop.increase())
// console.log(laptop2.increase())
// console.log(laptop3.increase())

// long code ,confusion




// ⸻-----------------------------------------------------

// SECTION 2: Classes and Objects (Reinforcement)
// 	4.	Create a class named Employee that stores:
// name ✅
// salary  ✅
// Add a method showDetails that prints name and salary.  ✅
// 	5.	Create three employee objects from the same class and verify that modifying one employee does not affect the others. ✅
// 	6.	Explain in your own words:
// Why is class considered a better option than writing similar objects again and again? ✅


// class Employee{
//     constructor(name,salary){
//         this.name = name;
//         this.salary = salary;
//     }
//         showDetails(){
//             console.log("Name: "+ this.name + " - " + "Salary: "+ this.salary);
//         }
// }
// const p = new Employee("Ayush",50000)
// const p2 = new Employee("Jeelance",30000)
// const p3 = new Employee("Stuti",80000)
// const p4 = new Employee("Pratham",40000)
// p.showDetails()
// p2.showDetails()
// p3.showDetails()
// p4.showDetails()


// ⸻-------------------------------------------------

// SECTION 3: Constructor and Initialization  ✅
// 	7.	Create a class named BankAccount.
// Its constructor should accept accountHolderName and balance.
// 	8.	Inside the constructor, store both values using this.
// 	9.	Add a method deposit(amount) that increases the balance.
// 	10.	Create two bank accounts and deposit money into only one.
// Observe and explain why the second account is not affected.

// class BankAccount{
//     constructor(accountHolderName,balance){
//         this.accountHolderName = accountHolderName;
//         this.balance = balance;
//         console.log(accountHolderName,balance)
//     }
//     deposit(depositAmount){
//         this.balance += depositAmount
//         console.log(`Total Amount: `+ this.balance) 
//     }
// }

// let account =  new BankAccount("Ayush",5000)
// console.log(account)
// account.deposit(42000)

// let account2 = new BankAccount("Jelaance", 3490)
// console.log(account2)
// account.deposit(43245)

// ⸻------------------------------------

// SECTION 4: Understanding this (Very Important)
// 	11.	Create an object named profile with a property username and a method printName that logs this.username.
// 	12.	Call the method normally and observe the output.
// 	13.	Store the method in a separate variable and call it.
// Observe what happens to this and explain why.
// 	14.	Modify the code so that this works correctly again.

// const profile = {
//     username: "Stuti",
//     printName: function(){
//         return this.username
//     }
// }
// const name = profile.printName()
// console.log(name)









// ⸻

// SECTION 5: Constructor Function and Prototype
// 	15.	Create a constructor function called Vehicle that accepts type and wheels.
// 	16.	Add a method describe inside the constructor and observe memory behavior when multiple objects are created.
// 	17.	Move the same method to Vehicle.prototype and repeat the test.
// 	18.	Explain why the prototype approach is preferred.

// ⸻

// SECTION 6: call Method Practice
// 	19.	Create a function showBrand that prints this.brand.
// 	20.	Create two different objects with brand values.
// 	21.	Use call to execute showBrand for both objects.
// 	22.	Explain what problem call is solving here.

// ⸻

// SECTION 7: apply Method Practice
// 	23.	Create a function introduce that accepts two arguments: city and role, and prints name, city, and role using this.name.
// 	24.	Create an object with a name property.
// 	25.	Use apply to call introduce using the object and an array of arguments.
// 	26.	Explain in simple words how apply differs from call.

// ⸻

// SECTION 8: bind Method Practice
// 	27.	Create a function greet that prints “Hello” followed by this.name.
// 	28.	Bind this function to an object and store the returned function in a variable.
// 	29.	Call the bound function later and observe the output.
// 	30.	Explain why bind is useful when functions are executed later or inside callbacks.











// Create a user object that stores name and email and has a login method which prints "User logged in."


// let user = {
//     name: "Jelaance",
//     email: "jelaacne@gmail.com",
//     login: function(){
//         console.log("User logged in ")
//     }   
// }

// console.log(user ) 

// class User {
//     constructor(name,email){
//         this.name = name ;
//         this.email = email;
//     }
//     loggedin() {
//         console.log("Logged in..")
//     } 
    
//     } 
// let user1 =new User("jelaance","jelaance@gmail.com")
// let user2 =new User("Stuti","Stuti@gmail.com")
// console.log(user1)
// console.log(user2)

// const obj = {
//     name: "HP",
//     price: 2000,
//     discount: function(){
//         return this.price - 300
//     }
// }
// console.log(obj.discount())

// class car {
//     constructor(brand,speed){
//         this.brand = brand
//         this.speed = speed
//     }
//     drive(){
//          return this.brand +" - "+this.speed
//     }
// }
// let car1 = new car("Tesla",200) 
// console.log(car1.drive())
// car1.drive()

// Constucter and this keywords

// class Student{
//     constructor(name,rollNumber){
//         this.name = name;
//         this.rollNumber = rollNumber; 
//     }
//     introduce(){
//         return this.name + " "+this.rollNumber
//     }
// }

// let student1 = new Student("Ayush",2099 )
// let student2 = new Student("Jelaance",3000)

// console.log(student1.introduce())


// const obj = {
//     sayName: function(){
//         console.log(this)  //function ke andar this is avlue hoti Hai object 
//     },
//     sayArrowName:()=>{
//             console.log(this)             //arrow fun take value of this from parent and object uis in global space so its output window
//     }
// }
// obj.sayName()
// obj.sayArrowName()

// bina class ke constructer fucntion aise banta tha 

// function Animal(){
//     this.name = "Harsh"
// }
// const sn1 = new Animal(); //Cosntructer function

// function User(val){
//     this.name = val;
// }
// User.prototype.loggedin = function(){
//     console.log(this.name);
// }
// let an1 = new User("stuti")
// let an2 = new User("jelaance") 

// call bind apply -------------------------------------------------

function abcd(){
    console.log(this.name);      //in this way we will find windows in output || kisi bhi function mein thsi ki value window hoti hai
}

let obj = {
    name: "jeelance"
}

abcd.call(obj);   //can change the value of this using call keywords ||Now obj will be the value of this
// BIND---------------------------------------------

function alu(a,b,c,d){
    console.log(this.name)
}

let obj2 ={
    name:"harsh"
}


alu.apply(obj2,[1,2,3,4])