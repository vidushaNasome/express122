const mongoose=require('mongoose');
let TourismModel;
TourismModel = new mongoose.Schema({
    name: {
        type: String
    },
    category: {
        type: String
    },
    price: {
        type: Number
    },
    tel:{
        type:Number
    }
});

 module.exports = TourismModel = mongoose.model('Tourism',TourismModel,'Tourism')
