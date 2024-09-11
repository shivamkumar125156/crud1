import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState([]);
    const navigate=useNavigate();
    async function fetchData(){
        try{
            const response=await axios.get("http://localhost:4000/getUsers");
            console.log(response.data)
            setUsers(response.data.allUsers)
        }
        catch(err){
            console.log(err)
        }
    }
    async function deleteUser(id){
        try{
            const resp=await axios.delete(`http://localhost:4000/delete/${id}`);
            console.log("Delete Response",resp)
            window.location.reload(); //So now automatically fetchData will get called
        }
        catch(err){
            console.log("ERROR in Deleting user",err)
        }
    }
    useEffect(()=>{
        fetchData();
    },[])
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col bg-gray-300 w-[60%] min-h-[65%]  gap-y-5 p-7"> 
                <h2 className="font-bold text-start">All Users</h2>
                <button>
                    <Link to="/create" className="bg-green-500 px-4">Add +</Link>
                </button>
                <div className="flex justify-center gap-x-20 ">
                    <p>Name</p>
                    <p>Age</p>
                    <p>Email</p>
                    <p>Action</p>
                </div>
                <div className="max-w-[20rem] mx-auto ">
                    {
                        users.map((item, ind) => (
                            <div className="flex gap-x-3 justify-center mt-3 " key={ind}>
                                <p>{item.name}</p>
                                <p>{item.age}</p>
                                <p>{item.email}</p>
                                <button className="bg-yellow-400 px-4"><Link to={`/update/${item._id}`}>Update</Link> </button>
                                <button className="bg-red-500 px-4" onClick={()=>deleteUser(item._id)}>Delete</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Users;