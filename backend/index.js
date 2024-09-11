const express=require('express');
const app=express();
const cors=require('cors');
const dbConnect=require('./config/database');
const userRoutes=require('./routes/User');

const PORT=4000;
app.use(express.json());
app.use(cors({source:"http://localhost:3000",credentials:true}))

app.use("",userRoutes);


dbConnect();


app.listen(PORT,()=>console.log(`App Started at PORT ${PORT}`))