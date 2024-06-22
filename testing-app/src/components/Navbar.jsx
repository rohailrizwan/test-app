import React from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
  const navigate=useNavigate()
  return (
    <div className='w-[100%]  py-3 '>
       <div className="container-lg flex justify-between px-4">
       <div className="goback flex items-center">
                <IoMdArrowBack className="mr-2"/>
                <p className='text-black font-semibold font-[Lato] cursor-pointer' onClick={()=>navigate(-1)}>Go back</p>
        </div>
        <div className="exit flex items-center">
        <p className="mr-2 text-black font-semibold font-[Lato] cursor-pointer">Exit</p>
        <RxCross2 />
        </div>
       </div>
    </div>
  )
}
