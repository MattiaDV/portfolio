let lists = document.getElementsByClassName('mini');
let menu = document.getElementById('menu');

for (let a of lists) {
    a.addEventListener('click', function() {
        menu.removeAttribute('open');
    })
}

function getCookieValue(cookieName) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        const [name, value] = cookie.split("=");
        if (name === cookieName) {
            return value;
        }
    }
    return null; 
}

let welcome = document.getElementById('welcome');
const email = getCookieValue("email");
let n = email.replace(/@.*/, "");
welcome.innerHTML = "Welcome " + n;