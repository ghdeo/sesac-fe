let layoutImages = document.getElementsByClassName('layout');

for (let img of layoutImages) {
    img.addEventListener('mouseover', () => {

        for (let i = 0; i < layoutImages.length; i++) {
            layoutImages[i].style.border = '';
        }

        let v = document.getElementById('view');

        v.setAttribute('src', this.src);
        v.setAttribute('alt', this.alt);
    });
}