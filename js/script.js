let username = document.getElementById("username");
let phone = document.getElementById("number");
let email = document.getElementById("email");
const nameReg = /^[А-Я][а-яё]*$/;
const phoneReg = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
const emailReg = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;

document.getElementById("form").onsubmit = function (event) {
    let flag = true;
    event.preventDefault();
    if (!nameReg.test(username.value)) {
        flag = false;
        username.style.borderColor = "red";
        document.getElementById("error-username").innerHTML = "Некорректное имя";
        setTimeout(function() { 
            username.style.borderColor = "white";
            document.getElementById("error-username").innerHTML = "";
        }, 3000);
    }
    if (!phoneReg.test(phone.value)) {
        flag = false;
        phone.style.borderColor = "red";
        document.getElementById("error-number").innerHTML = "Телефон указан неверно";
        setTimeout(function() { 
            phone.style.borderColor = "white";
            document.getElementById("error-number").innerHTML = "";
        }, 3000);
    }
    if (!emailReg.test(email.value)) {
        flag = false;
        email.style.borderColor = "red";
        document.getElementById("error-email").innerHTML = "Email указан неверно";
        setTimeout(function() { 
            email.style.borderColor = "white";
            document.getElementById("error-email").innerHTML = "";
        }, 3000);
    }
    if (!document.getElementById("agreement").checked) {
        flag = false;
        document.querySelector(".agreement").style.border = "2px solid red";
        setTimeout(function() {
            document.querySelector(".agreement").style.border = "2px solid #393185";
        }, 3000);
    }
    if (flag) {
    document.getElementById("form").submit();
    }
}