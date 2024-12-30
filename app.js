const express = require('express');
const app = express();
app.use(express.json());

let cart = [];

app.post('/cart/add', (req, res) => {
    const { itemId, quantity } = req.body;
    cart.push({ itemId, quantity });
    res.send({ message: 'Item added to cart', cart });
});

app.delete('/cart/remove', (req, res) => {
    const { itemId } = req.body;
    cart = cart.filter(item => item.itemId !== itemId);
    res.send({ message: 'Item removed from cart', cart });
});

app.put('/cart/update', (req, res) => {
    const { itemId, quantity } = req.body;
    const item = cart.find(item => item.itemId === itemId);
    if (item) {
        item.quantity = quantity;
    }
    res.send({ message: 'Item updated in cart', cart });
});

app.listen(3000, () => console.log('Server running on port 3000'));


app.get('/cart/:userId', (req, res) => {
    const { userId } = req.params;
    res.send({ userId, cart });
});



const cashfree = require('cashfree-sdk');

app.post('/payment/initiate', (req, res) => {
    const { amount, userId } = req.body;
    const paymentData = {
        amount,
        orderId: 'order_' + Date.now(),
        orderCurrency: 'INR',
        customerPhone: '9876543210',
        customerEmail: 'user@example.com',
    };
    cashfree.createOrder(paymentData, (error, response) => {
        if (error) {
            return res.status(500).send({ error: 'Payment initiation failed' });
        }
        res.send(response);
    });
});



app.post('/payment/webhook', (req, res) => {
    const paymentStatus = req.body.paymentStatus;
    if (paymentStatus === 'SUCCESS') {
        res.send({ message: 'Payment successful' });
    } else {
        res.status(400).send({ message: 'Payment failed' });
    }
});



app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: 'Something went wrong' });
});



