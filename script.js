let text = document.getElementById("text");
let blink = document.getElementById("blink");
let mainContent = document.querySelector("main");
let passwordField = document.getElementById("passwordField");
const password = "iAmTheTruestStinker";

let curLine = "";

if (getCookie("loggedIn")) {
    allowAccess();
}

document.addEventListener("keydown", handleKeyDown);
setInterval(function () {
    blink.style.opacity = blink.style.opacity == 0 ? 1 : 0;
}, 450);

function correctPassword() {
    allowAccess();
    setCookie("loggedIn", "true", 1);
    document.cookie = `passwordEntered=true; expires=Thu, 18 Dec 2013 12:00:00 UTC`;
}

function allowAccess() {
    mainContent.classList.remove("hidden");
    passwordField.classList.add("hidden");

    curLine = "";
}

function wrongPassword() {
    passwordField.scrollIntoView(false);
    text.innerHTML += '<br><strong style="color: red;">Invalid Pasword</strong><br>Enter Password:&nbsp;';
    curLine = "";
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookieList = decodedCookie.split(";");
    for (let i = 0; i < cookieList.length; i++) {
        let c = cookieList[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function superSecretButton() {
    setCookie("loggedIn", "true", -1);
}

function handleKeyDown(event) {
    if (event.key == "Space" && event.target == document.body) {
        event.preventDefault();
    }
    if (event.key.length == 1) {
        blink.style.opacity = 1;
        text.innerHTML += event.key;
        curLine += event.key;
    } else if (event.key == "Enter" && curLine != "") {
        if (curLine == password) {
            correctPassword();
        } else {
            wrongPassword();
        }
    } else if (event.key == "Backspace" && curLine.length > 0) {
        text.innerHTML = text.innerHTML.slice(0, -1);
        curLine = curLine.slice(0, -1);
    }
}
