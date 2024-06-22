import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Loader() {
    const location =useLocation()
    useEffect(()=>{
            console.log(location);
    },[])
  return (
   <div className='w-[100%] h-2 bg-[#E5E7EB]'>
     <div className={`h-2 bg-[#019F44] ${location.pathname === '/' ? 'w-[25%]' : location.pathname === '/Form2' ? 'w-[50%]' : location.pathname === '/Form3' ? 'w-[100%]' : 'w-0'}`}>
     </div>
   </div>
  )
}
