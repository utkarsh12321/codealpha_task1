const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
userId: String,
products: Array,
totalAmount: Number,
status: {
type: String,
default: 'Pending'
}
});
module.exports = mongoose.model('Order', OrderSchema);