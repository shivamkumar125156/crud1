import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const CreateUser=()=>{
    const navigate=useNavigate();
    const [userData,setUserData]=useState({
        name:"",age:"",email:""
    })
    function handler(e){
        const {name,value,type,checked}=e.target;
        setUserData(prev=>({...prev,[name]:type=="radio"?checked:value}));
    }
    async function submitHand(){
        const {name,age,email}=userData;
        // console.log(name,age,email);
        try{
            const respo=await axios.post("http://localhost:4000/create",{name,age,email});
            console.log(respo);
            navigate("/");
        }
        catch(err){
            console.log(err)
        }
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <div className=" bg-gray-300 w-[60%] h-[65%] flex flex-col  p-7 gap-y-5  "> 
                <h2 className="font-bold text-start">Add Users</h2>
                <div className="flex gap-x-6 ">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={userData.name} onChange={handler}/>
                </div>
                <div className="flex gap-x-6">
                    <label htmlFor="name">Age</label>
                    <input type="text" name="age" value={userData.age} onChange={handler}/>
                </div>
                <div className="flex gap-x-6">
                    <label htmlFor="name">Email</label>
                    <input type="text" name="email" value={userData.email} onChange={handler}/>
                </div>
                <button className="bg-green-500 px-4 w-[130px]" onClick={submitHand}>Submit</button>
            </div>
        </div>
    )
}
export default CreateUser;