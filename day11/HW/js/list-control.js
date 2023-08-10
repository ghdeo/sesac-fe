"use strict";

let submitElement = document.getElementById('submit');
let inputElement = document.getElementById('input');
let leftListElement = document.getElementById('left-list');
let rightListElement = document.getElementById('right-list');
let toRightButton = document.getElementById('to-right');
let toLeftButton = document.getElementById('to-left');

/**
 * input 받아서 왼쪽 select에 삽입하는 insertValue 함수
 * */
let insertValue = () => {
    let htmlOptionElement = document.createElement('option');

    let textNode = document.createTextNode(inputElement.value);
    if (textNode.nodeValue.trim() !== '') { // 빈 문자열이 아닐 경우만 등록하는 예외처리
        htmlOptionElement.appendChild(textNode);
        leftListElement.appendChild(htmlOptionElement);
    }
    inputElement.value = '';
};

// '추가'버튼 클릭시 select에 추가되는 event
submitElement.addEventListener('click', () => {
    insertValue();
});

// 'Enter' 입력시 select에 추가되는 event
inputElement.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        insertValue();
    }
});


/**
 * 자식인 option을 source에서 destination으로 옮기는 함수
 * */
let moveOption = (source, destination) => {
    let selectedOptions = Array.from(source.selectedOptions);

    for (let option of selectedOptions) {
        source.removeChild(option);
        destination.appendChild(option);
    }
};

// 'to-right' 버튼 클릭시 오른쪽으로 이동 event
toRightButton.addEventListener('click', () => {
    moveOption(leftListElement, rightListElement);
});

// 'to-left' 버튼 클릭시 왼쪽으로 이동 event
toLeftButton.addEventListener('click', () => {
    moveOption(rightListElement, leftListElement);
});


/**
 * 해당 element의 child에 있는 option 을 지우는 함수
 * */
let removeOption = (element, option) => {
    element.removeChild(option);
}

// left-list 중 해당 option 더블클릭시 삭제 event
leftListElement.addEventListener('dblclick', (e) => {
    removeOption(leftListElement, e.target);
});

// right-list 중 해당 option 더블클릭시 삭제 event
rightListElement.addEventListener('dblclick', (e) => {
    removeOption(rightListElement, e.target);
});
