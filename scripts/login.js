var passwordInput = document.getElementById('loginPassword');
var showPasswordButton = document.getElementById('showBtn');


showPasswordButton.addEventListener('click', function (event) {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        showPasswordButton.innerHTML = "Hide"
    } else {
        passwordInput.type = 'password';
        showPasswordButton.innerHTML = "Show"
    }
});
