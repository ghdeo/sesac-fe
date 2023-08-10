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

    // name.value = "";
});

document.getElementById('list').addEventListener('click', (e) => {
    e.target.classList.toggle('bg');
});

document.getElementById('list').addEventListener('dblclick', (e) => {
    e.target.parentElement.removeChild(e.target);
});