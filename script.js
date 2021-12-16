const links = document.querySelectorAll('nav a');

function activate(e) {
    e.preventDefault();
    links.forEach(el => {
        el.classList.remove('active');
        el.firstElementChild && el.firstElementChild.stop();
    });
    this.classList.add('active');
    this.firstElementChild.play();
}

links.forEach(el => el.addEventListener('click', activate));
