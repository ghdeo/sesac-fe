"use strict";

let accordions = document.getElementsByClassName('accordion');
for (let val of accordions) {
    val.addEventListener('click', (e) => {
        e.target.classList.toggle('active');

        let panel = e.target.nextElementSibling;
        if (panel.style.display !== "block") {
            panel.style.display = "block";
        } else {
            panel.style.display = "none";
        }
    });
}