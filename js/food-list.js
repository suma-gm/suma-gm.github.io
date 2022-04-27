function moveToFoodDetails() {
    document.getElementById('moveToFoodDetails').click();
}

function onLoad() {
    const username = JSON.parse(localStorage.getItem('current-user')).name;
    if (username)
        document.getElementById('welcome-msg').innerText = "Welcome " + username + "";
}