let lists = document.getElementsByClassName('mini');
let menu = document.getElementById('menu');

for (let a of lists) {
    a.addEventListener('click', function() {
        menu.removeAttribute('open');
    })
}