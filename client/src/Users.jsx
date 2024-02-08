import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Users() {
    const [users,setUsers]=useState([{
        name:"Dushan Chanuka",age:"21",email:"Chanukadushan25@gmail.com"
    },{
        name:"Dushan Chanuka",age:"21",email:"Chanukadushan25@gmail.com"
    }])

    useEffect(()=>{
        axios.get('http://localhost:3001').then(result=>setUsers(result.data)).catch(err=>console.log(err))
    })
  return (
    <div className='d-flex vh-100  justify-center items-center'>
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg'><div className='px-5 py-2.5'>
            <Link to="/create" class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900 ">Add +</Link>
            <br></br></div>
            <table className='hover:table-fixed'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Name</th>
                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Age</th>
                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Emal</th>
                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user)=>{
                          return  <tr>
                                <td class="px-6 py-4">{user.name}</td>
                                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">{user.age}</td>
                                <td class="px-6 py-4">{user.email}</td>
                                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                    <Link to='/update'><button class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Edit</button></Link>
                                    <button class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Delete</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}
