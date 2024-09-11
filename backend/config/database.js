const mongoose=require('mongoose');
const dbConnect=()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/mern")
    .then(()=>console.log("DB Connection Done"))
    .catch(err=>{
        console.log("Error in DB Conncetion"+err)
        process.exit(1)
    })
}
module.exports=dbConnect;