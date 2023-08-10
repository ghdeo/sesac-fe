"use strict";

let input = document.getElementById('input');
let list = document.getElementById('list').getElementsByTagName('li');
input.addEventListener('input', () => { //내거
    let key = input.value;

    for (let item of list) {
        if (item.textContent.includes(key)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    }
});

// const searchFn = (e) => { //같이 한거
//     e.preventDefault();
//     let input = e.target.value;
//     // console.log(input);
//     let element_li = document.getElementsByTagName('li');
//     [...element_li].forEach(item => {
//         let a_content = item.getElementsByTagName('a')[0];
//         let a_text = a_content.textContent;
//         if (a_content.indexOf(a_text) > -1) {
//             item.style.display = "";
//         } else {
//             item.style.display = "none";
//         }
//     });
// };
