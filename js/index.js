const users = [
    {name: 'Suma', email: 'suma@gmail.com', password: 'suma2525'},
    {name: 'Soumya', email: 'soumya@gmail.com', password: 'soumya'},
]

function onLoad() {
    localStorage.setItem('users', JSON.stringify(users));
}