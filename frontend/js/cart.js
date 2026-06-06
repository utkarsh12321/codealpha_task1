let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartItems = document.getElementById('cartItems');
if (cartItems) {
let output = '';
cart.forEach(item => {
output += `
 <div>
 <h2>${item.title}</h2>
 <p>₹${item.price}</p>
 </div>
 `;
});
cartItems.innerHTML = output;
}
function checkout() {
fetch('http://localhost:5000/api/orders/create', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({
products: cart,
totalAmount: cart.reduce((a,b)=>a+b.price,0)
})
})
.then(res => res.json())
.then(data => {
alert('Order placed successfully');
localStorage.removeItem('cart');
});
}
