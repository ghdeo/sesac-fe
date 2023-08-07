"use strict"

function fn_move1() {
    console.log('fn_move1');
}

fn_move1();
console.log('------------');

function fn_move2(name, age) {
    console.log(name, age);
}

fn_move2('hong', 20);

console.log('------------');

function getNum() {
    return 100;
}

let num = getNum();
console.log('value: ' + num);

function add(a, b) {
    return a + b;
}

let res = add(19, 39);
console.log('add(): ' + res);


function prt2(arg) {
    console.log(arg, typeof arg);
}

prt2([10, 20, 30]);

console.log('------------');

const prt3 = function (name = 'hello', age = 0) {

    console.log('name: ', name);
    console.log('age: ', age);
};

prt3();

console.log('------------');

const show = function (...v) {
    for (let i = 0; i < v.length; i++) {
        console.log(v[i]);
    }

    for (let i of v) {
        console.log(i);
    }

};
console.log('------------');

let arr3 = [10, 20, 30];
let arr4 = [100, 200, 300];

let arr5 = [...arr3, ...arr4];
let pp = function (a) {
    console.log(a[1]);
};

pp(arr5);

console.log('------------');

// let add1 = function (a, b) {
//     return a + b;
// };

let add1 = (a, b) => {
    return a + b;
}

let tot = add1(10, 20);
console.log(tot);

console.log('------------');

let fn1 = function (a, b, t1) {
    console.log(a, b);
    console.log(t1);
};

let cb = function (a, b) {
    return a + b;
};

fn1(10, 20, cb);