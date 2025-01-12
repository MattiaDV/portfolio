let lists = document.getElementsByClassName('mini');
let menu = document.getElementById('menu');
let mobileM = document.getElementById('mobile-m');

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

const email = getCookieValue("email");
let infoPersonal = document.getElementById('emailPersonal');
infoPersonal.innerHTML = "Personal email: " + email;

let em = document.getElementById('email');
em.value = email;