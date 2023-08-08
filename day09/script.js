"use strict";

(function prt() {
    console.log('prt');
})();

let fnprt = function (a, b) {
    console.log(`test fnprt ${a}, ${b}`);
};

fnprt(10, 20);

let fnprt2 = (a, b) => {
    console.log(`test fnprt2 ${a}, ${b}`);
};

((a, b) => {
    console.log(`test fnprt2 ${a}, ${b}`);
}) (10, 20);

console.log('------------');

const addCount = (function () {
    let count = 0;
    let fn = function () {
        count++;
        return count;
    };

    return fn;
})();

document.getElementById('btn').onclick = function () {
    document.getElementById('result').innerHTML = addCount();
};

class P1 {
    constructor(age) {
        this._age = age;
    }

    prt = () => {
        console.log('p1-prt method');
    };
}


class C1 extends P1 {
    constructor(name, age) {
        super(age);
        this._name = name;
    }

    show = () => {
        console.log('C1 show method');
    };
}

console.log('------------');

let [a, b] = [10, 20];
console.log('a:', a);
console.log('b:', b);
let [t1, t2, ...t3] = [100, 200, 300, 400];
console.log(t1);
console.log(t2);
console.log(t3);

let [n1, n2] = [100, 200];
console.log(n1, n2);

[n2, n1] = [n1, n2];
console.log(n1, n2);

console.log('------------');
let man = {
    name: 'hong',
    age: 20,
    addr: 'seoul'
};

let {name, age, addr} = man;

console.log(`name:${name} age:${age} addr:${addr}`);

console.log('------------');
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
