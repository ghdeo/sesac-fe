// document.getElementById('append').addEventListener('click', (e) => {
//     e.preventDefault();
//     // console.log(e.target);
//
//     let name = document.getElementById('name');
//     let data = name.value;
//     let ele_li = document.createElement('li');
//
//     let text = document.createTextNode(data);
//     ele_li.appendChild(text);
//
//     let list = document.getElementById('list');
//     list.appendChild(ele_li);
//
//     name.value = "";
// });

// console.log('--------------');
// const ul_ele = document.querySelector('ul');
// console.log(ul_ele.children);
// console.log(ul_ele.hasChildNodes());
// console.log(ul_ele.firstElementChild);
// console.log(ul_ele.lastElementChild);
//
// console.log('--------------');
// let ele_m3 = document.getElementById('m3');
// let next_ele_m3 = ele_m3.nextElementSibling;
// console.log(next_ele_m3);
// next_ele_m3.style.backgroundColor = 'yellow';
// ele_m3.previousElementSibling.style.color = 'red';
//
console.log('--------------');

let ele_li = document.querySelectorAll('li');
ele_li.forEach(item => {
    if (item.classList.contains('red')) {
        item.classList.replace('red', 'green');
    }
});

// ele_li.forEach(item => {
//     if (item.className === 'red') {
//         item.className = 'green';
//     }
// });

// document.getElementById('aaa').innerHTML = '<p>hello</p>';
document.getElementById('aaa').textContent = '<p>hello</p>';