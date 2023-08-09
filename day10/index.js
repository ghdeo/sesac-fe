"use strict";

let a1 = [1, 2, 3];
let a2 = a1;
console.log(a1 === a2);

let b1 = [1, 2, 3];
let b2 = Object.assign([], b1);
console.log(b1 === b2)

console.log('------------');

let c1 = {name: 'hong'};
console.log(c1);

Object.assign(c1, {age: 10});
console.log(c1);
Object.assign(c1, {name: 'kim'});
console.log(c1);

console.log('------------');

let d1 = [10, 20, 30];
let d2 = [10, 20, 30];

console.log('d1 === d2', d1 === d2);
console.log('Object.is(d1, d2)', Object.is(d1[0], d2[0]));

console.log('------------');

let email = "aaa@aaa.com";

let id = email.substring(0, email.indexOf('@'));
let domain = email.substring(email.indexOf('@') + 1, email.length);

console.log(id, domain);

let val = email.split('@');
console.log(val[0], val[1]);

console.log('------------');

let arr1 = [1, 2, 3];
let arr2 = new Array(4, 5, 6);

let newArr = arr1.concat(arr2, ['t1', 't2']);
console.log(newArr);

console.log('------------');

let data = [100, 20, 30, 1, 35, 2, 35, 35, 35];
let number = data.find((val, idx) => {
    return val >= 35;
});
console.log(number);

let numbers = data.filter((val) => {
    return val > 30;
});
console.log(numbers);

console.log('------------');

let arrName = ['hong', 'kim', 'park'];
let result = arrName.join('');
console.log(result);

console.log('------------');

let arrPush = [];
arrPush.push('aaa');
arrPush.push('bbb');
arrPush.push('ccc');
console.log(arrPush);
arrPush.forEach(item => console.log(item));

console.log('------------');

let test = [3];

let test1 = Array(Number(3));
let test2 = Array(3);
let test3 = Array('3');
let test4 = Array(1).fill(3);

console.log(typeof test[0]);
console.log(typeof test1[0]);
console.log(typeof test2[0]);
console.log(typeof test3[0]);
console.log(typeof test4[0]);

console.log('------------');
//
// try {
//     let arr = new Array(-1);
// } catch (e) {
//     console.log(e);
// } finally {
//     console.log('finally');
// }

// let a = 20;
// try {
//     if (a > 20) {
//         console.log('a is bigger than 20');
//     } else if (a == 20) {
//         throw new Error("a is 20");
//     } else {
//         throw "less than 20";
//     }
//
// } catch (e) {
//     console.log(e);
// } finally {
//
// }

document.getElementById('btn').addEventListener('click', () => {
    let input = document.getElementById('age').value;

    try {
        let num = Number(input);
        if (Number.isNaN(num)) {
            throw new Error('Not a Number');
        } else if (num < 0) {
            throw new Error('less than 0');
        }
        console.log('age is:', num);
    } catch (e) {
        console.log(e);
    }


    try {
        let error = new Error('e');
        try {
            throw new Error('my-error');
        } catch (e) {
            console.log('inner', e);
            throw e;
        }
    } catch (e) {
        console.log('outer', e);
    }
});


