window.addEventListener('click', function(ev) {
    if (ev.target !== this.document.getElementById('menu')) {
        this.document.getElementById('menu').open = false
    }
})