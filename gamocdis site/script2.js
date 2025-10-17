let name1 = document.getElementById('name');
let imgc = document.getElementById('fd');
let inp = document.getElementById('inp');
let buttonq = document.getElementById('but4');
let cancel = document.getElementById('can');
let confirmq = document.getElementById('con');
let sub3 = document.getElementById('sub1')

let input1 = document.getElementById('inp1')
let input2 = document.getElementById('inp2')
let input3 = document.getElementById('inp3')
let input4 = document.getElementById('inp4')

let button5 = document.getElementById('but5')
let submit = document.getElementById('submitpay')

let signout = document.getElementById('signout')

let cardholdername = document.getElementById('inp1').value
let cardnumber = document.getElementById('inp2').value
let dateofcard = document.getElementById('inp3').value
let cvv = document.getElementById('inp4').value

const signupdiv = document.getElementById('signup')
const button = document.getElementById('but')

let users = [];
let payments = []

sub3.addEventListener('click',() =>{
    alert('succesfully bought course')
    window.location.href='main.html'
})

signout.addEventListener('click', () => {
    setTimeout(() => {
        localStorage.removeItem(users)
        localStorage.removeItem(payments)
        window.location.href='./index.html'
    }, 2000);

})

submit.addEventListener('click', (e) => {
    e.preventDefault()
    input1.style.display='none'
    input2.style.display='none'
    input3.style.display='none'
    input4.style.display='none'
    submit.style.display='none'

    let cardholdername = document.getElementById('inp1').value
    let cardnumber = document.getElementById('inp2').value
    let dateofcard = document.getElementById('inp3').value
    let cvv = document.getElementById('inp4').value


    payments.push({cardholdername , cardnumber , dateofcard , cvv});
    localStorage.setItem('payment', JSON.stringify(payments));

    alert('please wait')
    setTimeout(() => {
        alert('succesfully added payment')
    }, 2000);
})

button5.addEventListener('click', (e) =>{
    e.preventDefault()
    input1.style.display='block'
    input2.style.display='block'
    input3.style.display='block'
    input4.style.display='block'
    confirmq.style.display = "none";
    cancel.style.display = "none";
    inp.style.display = "none";
    submit.style.display='block'
})

confirmq.addEventListener('click', (e) => {
    e.preventDefault();
    confirmq.style.display = "none";
    cancel.style.display = "none";
    inp.style.display = "none";
    imgc.src = inp.value;
    
});

cancel.addEventListener('click', (e) => {
    e.preventDefault();
    confirmq.style.display = "none";
    cancel.style.display = "none";
    inp.style.display = "none";
});

buttonq.addEventListener('click', (e) => {
    e.preventDefault();
    inp.style.display = 'block';
    confirmq.style.display = 'block';
    cancel.style.display = 'block';

    input1.style.display='none'
    input2.style.display='none'
    input3.style.display='none'
    input4.style.display='none'

    submit.style.display='none'
});

let names = [
    'nick',
    'anna',
    'john',
    'sara',
    'mike'
];

let randomn = names[Math.floor(Math.random() * names.length)];
name1.innerText = `Welcome ${randomn}!`;


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


