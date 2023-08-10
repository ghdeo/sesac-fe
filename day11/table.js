"use strict";

let querySelector = document.querySelector('tbody');

querySelector.childNodes.forEach(item => {
    item.addEventListener('click', (e) => {
        console.log(item);
        console.log(e);
        // e.target.classList.toggle('aqua');
        e.target.parentElement.classList.toggle('aqua');
    });

});

//
// let tdElements = document.getElementsByTagName('td');
//
// for (let i = tdElements.length - 1; i >= 0; i--) {
//     tdElements[i].addEventListener('click', () => {
//         console.log(this);
//         // this.parentElement.classList.toggle('aqua');
//     });
// }
