const {mongoose} = require('../config/mongoose');

const buyerSchema = new mongoose.Schema({
    full_name: {
        type: String, 
        required: true,
    },
    email: {
        type: String, 
        required: true,
    },
    amount: {
        type: Number, 
        required: true,
    },
    reference: {
        type: String, 
        required: true
    }
});

const Buyer = mongoose.model('Buyer', buyerSchema);

module.exports = {Buyer}