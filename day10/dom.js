"use strict";
// document.getElementById('win_open').onclick = () => {
//     // window.open();
//     location.href = 'https://www.naver.com';
//     document.write('hello');
// };
//
// let d = document.body;
// console.log(d);
//

let elementsByClassName = document.getElementsByClassName('red');
let querySelector = document.querySelectorAll('.red');
// // 안됨.
// for (let val of elementsByClassName) {
//     val.setAttribute('class', 'green');
// }

for (let i = 0; i < elementsByClassName.length; i++) {
    elementsByClassName[i].setAttribute('class', 'green');
    i--;
}

for (let i = elementsByClassName.length; i > 0; i--) {
    elementsByClassName[i].setAttribute('class', 'green');
}

[...elementsByClassName].forEach(item => item.className = 'green');

for (let val of querySelector) {
    val.setAttribute('class', 'green');
}

document.getElementById('append').addEventListener('click', (e) => {
    e.preventDefault();
    // console.log(e.target);

    let name = document.getElementById('name');
    let data = name.value;
    let ele_li = document.createElement('li');

    let text = document.createTextNode(data);
    ele_li.appendChild(text);

    let list = document.getElementById('list');
    list.appendChild(ele_li);

    name.value = "";
});
