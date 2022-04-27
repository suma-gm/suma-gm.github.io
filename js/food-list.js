function moveToFoodDetails() {
    document.getElementById('moveToFoodDetails').click();
}

function onLoad() {
    const username = localStorage.getItem('username');
    if (username)
        document.getElementById('welcome-msg').innerText = "Hi " + username + ",";
}