import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
const UpdateUser=()=>{
    const location=useLocation();
    const navigate=useNavigate();
    const id=location.pathname.split('/').at(-1);

    const [formData,setFormData]=useState({
        name:"",age:"",email:""
    })
    function changeHandle(e){
        const {name,value,checked,type}=e.target;
        setFormData(prev=>({...prev,[name]:value}));
    }
    async function fetchData(){
        try{
            const resp=await axios.get(`http://localhost:4000/getUser/${id}`);
            const info=resp.data.userData;
            setFormData({name:info.name,age:info.age,email:info.email});
            // console.log("Printing the STATE after API fetch",formData)
        }
        catch(err){
            console.log("ERROR In fteching in FRONTEND"+err)
        }
    }
    async function updateData(){
        try{
            const {name,age,email}=formData;
            const resp=await axios.put(`http://localhost:4000/update/${id}`,{name,age,email});
            console.log("UPDATE API response--->",resp.data)
            navigate('/');
        }
        catch(err){
            console.log("ERROR In Updating in FRONTEND"+err)
        }
    }
    useEffect(()=>{
        fetchData();
        console.log(id);
    },[])

    return (
        <div className="flex justify-center items-center h-screen">
            <div className=" bg-gray-300 w-[60%] h-[65%] flex flex-col  p-7 gap-y-5  "> 
                <h2 className="font-bold text-start">Update Users</h2>
                <p className="bg-pink-400 w-[130px]"><Link to="/">Home</Link></p>
                <div className="flex gap-x-6 ">
                    <label htmlFor="name">Name</label>
                    <input type="text" value={formData.name} name="name" onChange={changeHandle}/>
                </div>
                <div className="flex gap-x-6">
                    <label htmlFor="name">Age</label>
                    <input type="text" value={formData.age} name="age" onChange={changeHandle}/>
                </div>
                <div className="flex gap-x-6">
                    <label htmlFor="name">Email</label>
                    <input type="text" value={formData.email} name="email" onChange={changeHandle}/>
                </div>
                <button className="bg-green-500 px-4 w-[130px]" onClick={updateData}>Update</button>
            </div>
        </div>
    )
}
export default UpdateUser;