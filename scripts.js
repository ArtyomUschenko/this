//-------------------------------------
//Функция конструктор - старый вариант
//-------------------------------------
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human =true;
//     this.hello = function() {
//         console.log("Hello! " + this.name);
//     };
//
// }
// User.prototype.exit = function (name) {
//     console.log("Пользователь " + this.name + " ушел");
// }
//
// let ivan = new User("Ivan", 25),
//     alex = new User("Alex", 20)
//
// console.log(ivan);
// console.log(alex);

//-------------------------------------
//Конструктор - новый вариант
//-------------------------------------
// class  User {
//     constructor(name, id) {
//         this.name = name;
//         this.id = id;
//         this.human = true
//     }
//     hello() {
//         console.log(`Hello! ${this.name}`)
//     }
//     exit() {
//         console.log(`Пользователь ${this.name} ушел`)
//     }
// }
// let ivan = new User("Ivan", 25),
//     alex = new User("Alex", 20);
//
// console.log(ivan);
// console.log(alex);


//-------------------------------------
//Контекст вызова
//-------------------------------------
// 1) Просто вызов функций - window/undefined
// function  showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);
// showThis(5, 5);

// 2) Метод объекта - This = объект
// let obj = {
//     a: 20,
//     b: 15,
//     sum: function()  {
//         console.log(this);
//     }
// };
// obj.sum();

// 2) Конструктор (new) -this =  новый созданный объект
// class  User {
//     constructor(name, id) {
//         this.name = name;
//         this.id = id;
//         this.human = true
//     }
//     hello() {
//         console.log(`Hello! ${this.name}`)
//     }
//     exit() {
//         console.log(`Пользователь ${this.name} ушел`)
//     }
// }
// let ivan = new User("Ivan", 25),
//     alex = new User("Alex", 20);
//
// console.log(ivan);
// console.log(alex);


// 2) Указание конкретного контекста - call, apple, bind
// let user = {
//     name: "John"
// };
// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + " " + surname);
// }
//
// console.log(sayName.call(user, "Smith"));
// console.log(sayName.apply(user, ["John"]));
// function  count(number) {
//     return this * number
// }
//
// let double = count.bind(2);
// console.log(double(3));
// console.log(double(10));

let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    console.log(this)
    this.style.background = "red";
    function showThis() {
        console.log(this)
    }
    showThis();
})