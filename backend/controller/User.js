const User=require('../models/User');
exports.getAllUsers=async(req,resp)=>{
    try{
        const allUsers=await User.find();
        return resp.status(200).json({
            success:true,
            message:"All Users Fetched",
            allUsers
        })
    }
    catch(err){
        return resp.status(500).json({
            success:false,
            message:"Error in Fetching all users",
        })
    }
}

exports.getUserById=async(req,resp)=>{
    try{
        const id=req.params.id;
        const userData=await User.findById(id);
        return resp.status(200).json({
            success:true,
            message:"User Data Fetched",
            userData
        })
    }
    catch(err){
        return resp.status(500).json({
            success:false,
            message:"ERROR In Fetaching User Data"+err,
        })
    }
}

exports.create=async(req,resp)=>{
    try{
        const {name,age,email}=req.body;
        const user=await User.create({name,age,email});
        return resp.status(200).json({
            success:true,
            message:"User Created",
            user
        })
    }
    catch(err){
        return resp.status(500).json({
            success:false,
            message:"Error in Creating user"+err
        })
    }
}

exports.update=async(req,resp)=>{
    try{
        const id=req.params.id;
        const {name,age,email}=req.body;
        const userData=await User.findByIdAndUpdate(id,{name,age,email},{new:true});
        return resp.status(200).json({
            success:true,
            message:"User Data Updated",
            userData
        })
    }
    catch(err){
        return resp.status(500).json({
            success:false,
            message:"ERROR In Updating User Data"+err,
        })
    }
}

exports.Delete=async(req,resp)=>{
    try{
        const id=req.params.id;
        const data=await User.findByIdAndDelete(id);
        return resp.status(200).json({
            success:true,
            message:"User Deleted",
        })
    }
    catch(err){
        return resp.status(500).json({
            success:false,
            message:"Error in Deleting user"+err
        })
    }
}

