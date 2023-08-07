"use strict"

// //호이스팅
//
// console.log('a', a);
// // var a = 20;
// // let a = 20;


// 전역, 지역변수 선언
let a = 10;
{
    let a = 20;
    console.log('block-a', a);
}

console.log('global-a', a)


//
// var su = 10;
// {
//     var su = 20;
//     console.log('block-su', a);
// }

console.log('global-su', a)

console.log('------------');

for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// console.log(i);

console.log('------------');

let tf = ''; // false
// let tf = ' '; // true

if (tf) {
    console.log('true');
} else {
    console.log('false');
}

console.log('------------');

let fn = function () {
    console.log('this is function call');
};

fn();

function fn2() {
    console.log('function call2');
}

fn2();

console.log('------------');

let arr = [10, 20, 30];
console.log('arr length: ', arr.length);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log('------------');

console.log(typeof arr);
console.log(Array.isArray(arr));

let person = {};
console.log(typeof person);
console.log('person is array : ', Array.isArray(person));

console.log('------------');

// let c1 = 10;
let c1 = '10';
let c2 = 20;
let c = c1 + c2;
console.log('type of c: ',typeof c, c);
console.log(typeof 10 / 2);
console.log(typeof ('10' / 2), '10' / 2);
console.log(typeof ('a' / 2), 'a' / 2);

console.log('------------');

console.log (Boolean(''), Boolean(' '));
console.log(Boolean(0), Boolean('0'));
console.log(Number('10'), Number('aa'), Number(null), Number(undefined));
console.log (String (0));

console.log('------------');

let name = 'hong';
let age = 20;
console.log('name: ' + name + ' age: ' + age);
console.log(`name: ${name} age: ${age}`);

console.log('------------');

console.log(10 + 20 + 'aaa');
console.log('aaa' + 10 + 20);

console.log('------------');

let b1 = '10';
let b2 = 10;
console.log(b1 == b2);
console.log(b1 === b2);

console.log('------------');

let m1 = {name: 'hong', age: '20'};
let m2 = m1;
let m3 = {name: 'hong', age: '20'};

console.log(typeof m1, typeof m2, typeof m3);
console.log(m1 == m2, m1 === m2);
console.log(m1 == m3, m1 === m3);

console.log('------------');

console.log(null == undefined);
console.log(null === undefined);
console.log(false == '');
console.log(false == 0);
console.log(false === 0);

console.log('------------');

let kor = 60;

if (kor >= 60) {
    console.log('합격');
} else {
    console.log('불합격');
}

if (kor >= 90) {
    console.log('수');
} else if (kor >= 80) {
    console.log('우');
} else if (kor >= 70) {
    console.log('미');
} else if (kor >= 60) {
    console.log('양');
} else {
    console.log('가');
}

console.log('------------');

// document.getElementById('btn').onclick = function () {
//     let korElement = document.getElementById('kor');
//     let engElement = document.getElementById('eng');
//     let mathElement = document.getElementById('math');
//
//     let kor = Number(korElement.value);
//     let eng = Number(engElement.value);
//     let math = Number(mathElement.value);
//
//     let avg = Number((kor + eng + math) / 3).toFixed(2);
//
//     let result;
//     if (kor >= 90 && eng >= 90 && math >= 90) {
//         result = 'very good';
//     } else if (kor >= 90 || eng >= 90 || math >= 90) {
//         result = 'good';
//     } else {
//         result = 'bad';
//     }
//
//     document.getElementById('result').innerHTML = '평균: ' + avg + ' 성취도: ' + result;
//
// };

console.log('------------');

let k = 5;
let data = '';
switch (k) {
    case 5:
        data += '5';
        break;
    case 4:
        data += '4';
        break;
    case 3:
        data += '3';
        break;
    case 2:
        data += '2';
        break;
    case 1:
        data += '1';
        break;
    default:
        data += '나머지';
}

console.log(data);

console.log('------------');

// let input = Number(prompt('숫자를 입력하세요', 0));
//
// switch (input % 3) {
//     case 0 :
//         alert('3의 배수');
//         break;
//     case 1 :
//         alert('나머지 값은 1');
//         break;
//     case 2 :
//         alert('나머지 값은 2');
// }

console.log('------------');

for (let i = 0; i < 15; i += 2) {
    console.log(`i = ${i}`);
}

console.log('------------');

let arr1 = ['a1', 'a2', 'a3'];
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1);

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

for (let item of arr1) {
    console.log(item);
}

arr1.forEach(item => {
    console.log(item);
});
console.log('------------');

let man = {
    name: 'hong gil dong',
    age: 20,
    addr: 'seoul'
};

console.log(typeof man, man);
console.log(man.name, man['name']);

for (let key in man) {
    console.log(key);
}

console.log('------------');

let data1 = 'hello, javascript!!';
// console.log(data[0]);
//
// data1[0] = 'K';
// console.log(data[0]);

for (let val of data1) {
    console.log(val);
}
console.log('------------');

// let i = 10;
// while (i > 0) {
//     console.log(i);
//     i -= 2;
// }

console.log('------------');

for (let i = 1; i < 10; i++) {
    if (i % 3 == 0) {
        continue;
    }
    console.log(i);
}

console.log('------------');

let grade = [60, 90, 70, 100, 75];
grade.forEach(function (item, index) {
    console.log(item, index);
});
