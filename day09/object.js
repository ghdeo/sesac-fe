const op = new Function("a", "b", "return a + b");
let res = op(10, 20);
console.log('result', res);
console.log(typeof op, op);
console.log('------------');

let person = Object();
person.name = 'hong';
person.age = 20;
person.addr = 'seoul'
person.work = () => {
    console.log('lol');
};

console.log(`name = ${person.name}`);
console.log(person);
console.log(typeof person);
console.log('------------');

function Man(name, age) {
    this.name = name;
    this.age = age;
    this.work = () => {
        console.log('lol');
    };
}

let p1 = new Man('hong', 20);
let p2 = new Man('park', 20);
console.log(p1);
console.log(p2);
console.log('------------');

const m1 = {name: 'hong', age:20, addr: 'seoul'};
const m2 = {name: 'kim', age:20, addr: 'seoul'};

console.log(typeof m1, m1);
console.log('------------');

// class Student {
//     constructor(name, age, addr) {
//         this.name = name;
//         this.age = age;
//         this.addr = addr;
//     }
// }
//
// let s1 = new Student('hong', 20, 'seoul');
// s1.sayHello = () => {
//     console.log('Hello');
// }
// console.log(typeof s1, s1);
//
// delete s1.age;
// console.log(typeof s1, s1);
//
// console.log('------------');
// for (let item in s1) {
//     // item은 string이다
//     console.log(item, s1[item]);
// }
// for (let item in s1) {
//     console.log(item, s1.item); // undefined
// }
console.log('------------');

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }


}

Student.prototype.prt = () => {
    console.log('prt method');
};

let s1 = new Student('kim', 20);
let s2 = new Student('park', 10);

console.dir(s1);
console.dir(s2);