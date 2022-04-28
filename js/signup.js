function signup() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name').value;
    const existingUsers = JSON.parse(localStorage.getItem('users'));
    const isUserExists = isUserAlreadyExists(existingUsers, email);

    if (isFormValid(email, password, name) && !isUserExists) {
        const users = [...existingUsers, {name, email, password}];
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('current-user', JSON.stringify({name, email, password}));
        document.getElementById('moveToFoodList').click();
    } else if (isUserExists) {
        alert('User already registered');
    }
}

function isUserAlreadyExists(existingUsers, userEmail) {
    return existingUsers.findIndex(user => user.email.toLowerCase() === userEmail.toLowerCase()) !== -1;
}

function isFormValid(email, password, name) {
    return validateName(name) && validateEmail(email) && validatePassword(password);
}

function validateName(name) {
    if (name.length > 3) {
        localStorage.setItem('username', name);
        document.getElementById('nameError').innerText = ""; 
        return true;
    }
    document.getElementById('nameError').innerText = "Name should contain more than 3 characters";
    return false;
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