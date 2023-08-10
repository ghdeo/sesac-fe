// function openCity(evt, cityName) {
//     // Declare all variables
//     var i, tabcontent, tablinks;
//
//     // Get all elements with class="tabcontent" and hide them
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }
//
//     // Get all elements with class="tablinks" and remove the class "active"
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//
//     // Show the current tab, and add an "active" class to the button that opened the tab
//     document.getElementById(cityName).style.display = "block";
//     evt.currentTarget.className += " active";
// }


"use strict";

const mytabs = document.querySelectorAll('.tabItem');
const tabpanels = document.querySelectorAll('.tabpanel');

const init = () => {
    let initli = mytabs[0].firstElementChild;
    let initA = initli.parentElement.getAttribute('aria-controls');
    initli.parentElement.classList.add('bgpanel');
    initli.focus();
    let initId = document.getElementById(initA);
    initId.classList.add('visit');
};

init();

mytabs.forEach(item => {
    item.firstElementChild.addEventListener('focus', (e) => {
        e.preventDefault();


    });
});