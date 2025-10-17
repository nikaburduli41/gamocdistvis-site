const signupdiv = document.getElementById('signup')
const button = document.getElementById('but')

let users = [];

button.addEventListener('click', (e) => { 
    e.preventDefault();

        const fullname = document.getElementById('fullname').value
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value


        users.push({fullname, email, password});
        localStorage.setItem('users', JSON.stringify(users));

        alert('will be redirected to main page shortly')
        setTimeout(() => {
            window.location.href = 'main.html';

        }, 2000);
    
})



