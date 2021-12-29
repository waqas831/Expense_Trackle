const mongoose = require('mongoose');

const TransactionSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true,
        default:0
    }
},{timestamps:true})



const TransactionModel=mongoose.model('Transaction',TransactionSchema);
module.exports=TransactionModel;