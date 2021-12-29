const mongoose=require('mongoose');

url="mongodb+srv://waqas:waqas123@cluster0.updqp.mongodb.net/expense-trackle?retryWrites=true&w=majority";

const db=mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then((res)=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log("not connected to db",err);
})


module.exports=db;