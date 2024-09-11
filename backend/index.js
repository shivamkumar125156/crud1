const express=require('express');
const app=express();
const cors=require('cors');
const dbConnect=require('./config/database');
const userRoutes=require('./routes/User');

const PORT=4000;
app.use(express.json());
app.use(cors({source:"https://crud1-nine.vercel.app/",credentials:true}))

app.use("",userRoutes);
app.get('/',(req,resp)=>{
    return resp.json({message:"HELLO SHIVAM"})
})


dbConnect();


app.listen(PORT,()=>console.log(`App Started at PORT ${PORT}`))
