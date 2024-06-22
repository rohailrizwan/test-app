import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Content3() {
  const navigate=useNavigate()
  return (
    <div className=' translate-y-[50%]'>
      <div className='flex items-center flex-col justify-center w-[50%] mx-auto '>
        <div src="" className='mb-3 w-[100px] h-[100px] bg-[#E5E7EB]'></div>
      <h3 className='font-bold text-[28px] text-center mb-3 px-4 font-[Montserrat]'>Your Request for a Proposal Has Been Submitted!</h3>
      <p className='font-light text-sm text-center mb-3 font-[Lato]'>Lorem ipsum dolor sit amet consectetur. Tincidunt ultrices dis gravida parturient urna tristique congue. Curabitur volutpat nulla convallis eget pellentesque. Luctus tellus eu ultrices egestas.</p>
      <button className='bg-[#019F44] text-white py-3 px-5 text-center' onClick={()=>navigate('/')}>Return Home</button>
      </div>
    </div>
  )
}
