const email = document.getElementById("loginEmail").value
const loginBtn = document.getElementById("loginBtn")

console.log(email)

console.log(password)

function checkLength() {
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;
    if (password.length >= 6) {
        return true;
    } else {
        return false;
    }
}

checkLength()
