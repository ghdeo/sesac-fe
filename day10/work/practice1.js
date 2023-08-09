let names = ['홍', '김', '이', '박', '최'];

document.getElementById('btn').onclick = () => {
    let content = '';
    names.forEach(value => {
        console.log(value);
        content += `<li>${value}</li>`;
    });
    document.getElementById('list').innerHTML = content;
};

document.getElementById('btn').onclick = () => {
    document.getElementById('list').innerHTML =
        names.map(value => {
            return `<li>${value}</li>`;
        }).join('');
};
