// document.getElementById('sum').onclick = () => {
//     let value1 = Number(document.getElementById('num1').value);
//     let value2 = Number(document.getElementById('num2').value);
//
//     document.getElementById('ans').innerHTML = String(value1 + value2);
// };

document.getElementById('sum')
    .addEventListener('click', () => {
        let value1 = Number(document.getElementById('num1').value);
        let value2 = Number(document.getElementById('num2').value);
        document.getElementById('ans').innerHTML = String(value1 + value2);
    });

let num1 = Number('10');
let data = num1.toString();

console.log(typeof num1, num1);
console.log(typeof data, data);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log('------------');


const now = new Date();
let y = now.getFullYear();
let m = now.getMonth() + 1;
let d = now.getDay();
let h = now.getHours();
let min = now.getMinutes();
let s = now.getSeconds();

let time = `${y}.${m}.${d}. ${h}:${min}:${s}`;
console.log(time);
