let interval;

document.getElementById('start').onclick = () => {
    interval = setInterval(() => {
        let now = new Date();
        let h = now.getHours();
        let min = now.getMinutes();
        let s = now.getSeconds();

        document.getElementById('time').innerHTML = `${h}:${min}:${s}`;
    }, 1000);
};
document.getElementById('stop').onclick = () => {
    clearInterval(interval);
};
