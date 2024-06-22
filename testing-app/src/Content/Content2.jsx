import React, { useState } from 'react'
import { IoIosLock } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast'; 
export default function Content2() {
    const navigate=useNavigate()
    const [Model,setModel]=useState({
        Name:"",
        Email:"",
        Description:"",
        Number:""
    })
  

    const fillModel = (key, value) => {
        setModel({
            ...Model,
            [key]: value 
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if ( !Model || Object.values(Model).some(value=>value === '')) {
            toast.error('Please fill the form correctly');     
            return  <Toaster /> ;
        }
        else{
            navigate('/Form3')
        }
    };

    return (
        <div className=' my-[50px]'>
            <div className='flex items-center flex-col justify-center w-[50%] mx-auto '>
                <h3 className='font-bold text-[28px] text-center mb-3 px-4 font-[Montserrat]'>Step # 2</h3>
                <h3 className='font-bold text-[28px] text-center mb-3 px-4 font-[Montserrat]'>Details</h3>
                <p className='font-light text-[16px] text-center mb-5 font-[Lato]'>
                    We’re thrilled at the opportunity to help you grow your business online. <br />
                    <span>Please let us know the best way to reach you.</span>
                </p>
                <div className='w-[100%] px-3'>
                    <form action="" onSubmit={handleSubmit}>
                        <div className='flex flex-col mb-3'>
                            <label className='font-medium mb-1'>Name</label>
                            <input type="text" onChange={(e)=>fillModel("Name",e.target.value)} className='border-[1px] rounded px-2 h-[48px]  bg-[#FFFFFF]'/>
                        </div>
                        <div className='flex mb-3'>
                        <div className='flex flex-col w-[50%] mr-3'>
                            <label className='font-medium mb-1'>Email</label>
                            <input type="email" onChange={(e)=>fillModel("Email",e.target.value)} className='border-[1px] rounded px-2 h-[48px]  bg-[#FFFFFF]'/>
                        </div>
                        <div className='flex flex-col w-[50%] '>
                            <label className='font-medium mb-1'>Number</label>
                            <input type="text" onChange={(e)=>fillModel("Number",e.target.value)} className='border-[1px] rounded px-2 h-[48px]  bg-[#FFFFFF]'/>
                        </div>
                        </div>
                        <div className='w-[100%] mb-4'>
                            <label className='font-medium '>Anything else you’d like to share?</label>
                            <textarea name="" onChange={(e)=>fillModel("Description",e.target.value)} className='w-[100%] h-[110px] border-[1px] rounded px-2 py-2 mt-2 bg-[#FFFFFF]' id=""></textarea>
                        </div>
                        <div className='text-center mb-4'>
                            <button className='bg-[#019F44] text-white py-3 px-5 text-center'>Send Request</button>
                        </div>
                    </form>
                </div>
                <div className='w-[100%] flex items-center justify-center '>
                    <IoIosLock className='ml-2'/>
                    <p className='font-light text-[16px] text-center  font-[Lato]'>We promise never to share your information or spam your inbox</p>
                </div>
            </div>
            <Toaster />
        </div>
    )
}
