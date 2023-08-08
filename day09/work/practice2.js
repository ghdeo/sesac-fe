let arr = [];
document.getElementById('add').onclick = () => {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;

    arr.push({name: name, age: age});
};

document.getElementById('show').onclick = () => {
    for (let val of arr) {
        document.getElementById('list').innerHTML += `<li>${val.name}, ${val.age}</li>`;
    }

    // document.getElementById('list').innerHTML = arr.map((val) => {
    //     return `<li>${val.name}, ${val.age}</li>`;
    // }); ?
};
