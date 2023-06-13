document.getElementById('login-button').addEventListener('click', function () {
    if (document.getElementById('email-field').value === 'fatihasultana777@gmail.com' && document.getElementById('password-field').value === '3587') {
        window.location.href = "private-account.html";
    }
    else {
        alert('You are not authorized to login!');
    }
})