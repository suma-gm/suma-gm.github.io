function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (isFormValid(email, password)) {
        const users = JSON.parse(localStorage.getItem('users'));
        console.log(users);
        const userIndex = users.findIndex(user => user.email === email && user.password === password)
        if (userIndex !== -1) {
            localStorage.setItem('current-user', JSON.stringify(users[userIndex]));
            document.getElementById('moveToFoodList').click();
        }
        else alert('You are not an authorized user, please signup to continue');
    }
}

function isFormValid(email, password) {
    return validateEmail(email) && validatePassword(password);
}

function validateEmail(mail) 
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        document.getElementById('emailError').innerText = "";
        return true;
    }
    document.getElementById('emailError').innerText = "You have entered an invalid email address!";
    return false;
}

function validatePassword(pswd) {
    if (pswd.length > 3) {
        document.getElementById('passwordError').innerText = ""; 
        return true;
    }
    document.getElementById('passwordError').innerText = "Password should contain more than 3 characters";
    return false;
}