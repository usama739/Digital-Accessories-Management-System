const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  userid: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  productid: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  quantity: { type: Number, default: 1 },
  totalPrice: {type: Number}
});

const CartItem = mongoose.model('Cart', cartItemSchema);

module.exports = CartItem;