async function register() {
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const response = await fetch('http://localhost:5000/api/auth/register', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({
name,
email,
password
})
});
const data = await response.json();
alert(data.message);
}
async function login() {
12
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const response = await fetch('http://localhost:5000/api/auth/login', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({
email,
password
})
});
const data = await response.json();
localStorage.setItem('token', data.token);
alert('Login Successful');
}
