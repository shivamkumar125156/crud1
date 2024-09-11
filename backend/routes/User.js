const express=require('express');
const router=express.Router();

const {create,update,Delete,getAllUsers,getUserById}=require('../controller/User');

router.post("/create",create);
router.put("/update/:id",update);
router.delete("/delete/:id",Delete);
router.get("/getUsers",getAllUsers);
router.get("/getUser/:id",getUserById);

module.exports=router;