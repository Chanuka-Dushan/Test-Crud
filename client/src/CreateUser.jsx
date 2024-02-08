import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function CreateUser() {
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[age,setAge]=useState()
    const navigate=useNavigate()

    const Submit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3001  createUser",{name,email,age}).then(result=>{console.log(result) ; navigate('/')}).catch(err=>console.log(err))

    }

  return (
    <>
    

<form class="max-w-sm mx-auto" onSubmit={Submit}>
    <h1 className='font-bold text-3xl'>Add User</h1>
  <div className="mb-5">
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
    <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Your  Name" required onChange={(e)=>setName(e.target.value)}/>
  </div>
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter the email address" required onChange={(e)=>setEmail(e.target.value)}/>
  </div>
  <div className="mb-5">
    <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Age</label>
    <input type="number" id="age" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter your Age" required onChange={(e)=>setAge(e.target.value)}/>
  </div>
  
  
 
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
</>
  )
}
