import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Content1() {
    const [Model,setModel]=useState({
        Currency1 : '',
        Currency2 : '',
        Currency3 : '',
        Currency4 : '',
        Currency5 : '',
        Currency6 : ''
    })
    const navigate=useNavigate()
    const fillModel = (key, value) => {
        setModel({
            ...Model,
            [key]: value 
        });
    };

    const handleSubmit = () => {
        // console.log(Model); 
        if (!Model || Object.values(Model).some(value => value === '')) {
            return;
        } else {
            navigate('/Form2');
        }
    };
    useEffect(()=>{
        if(Object.keys(Model).length == 6){
            handleSubmit()
        }
    },[Model])

  return (
    <div>
        <div className=' my-[20px]'>
            
            <div className='flex items-center flex-col justify-center w-[30%] mx-auto '>
                <h3 className='font-bold text-[28px] text-center mb-3 px-4 font-[Montserrat]'>Step # 1</h3>
                <h3 className='font-bold text-[28px] text-center mb-3 px-4 font-[Montserrat]'>What is your monthly digital marketing budget?</h3>
                
                <div className='w-[100%] px-3'>
                    <form action="" onSubmit={handleSubmit}>
                        <div className='flex flex-col mb-3'>
                            <input type="text"  className='border-[1px] rounded px-2 h-[48px]  bg-[#FFFFFF]' onChange={(e)=>fillModel("Currency1",e.target.value)} placeholder='< $1,000/mo'/>
                        </div>
                        <div className='flex flex-col mb-3'>
                            <input type="email"  className='border-[1px] rounded px-2 h-[48px]  bg-[#FFFFFF]' onChange={(e)=>fillModel("Currency2",e.target.value)} placeholder='$1,000 - $2,000'/>
                        </div>
                        <div className='flex flex-col mb-3'>
                            <input type="text"  className='border-[1px] rounded px-2 h-[48px]  bg-[#FFFFFF]' onChange={(e)=>fillModel("Currency3",e.target.value)} placeholder='$2,000 - $5,000'/>
                        </div>
                        <div className='flex flex-col mb-3'>
                            <input type="text" className='border-[1px] rounded px-2 h-[48px]  bg-[#FFFFFF]' onChange={(e)=>fillModel("Currency4",e.target.value)} placeholder='$5,000 - $10,000'/>
                        </div>
                        <div className='flex flex-col mb-3'>
                            <input type="text" className='border-[1px] rounded px-2 h-[48px]  bg-[#FFFFFF]' onChange={(e)=>fillModel("Currency5",e.target.value)} placeholder='$10,000 - $25,000'/>
                        </div>
                        <div className='flex flex-col mb-3'>
                            <input type="text" className='border-[1px] rounded px-2 h-[48px]  bg-[#FFFFFF]' onChange={(e)=>fillModel("Currency6",e.target.value)} placeholder='$25,000 +'/>
                        </div>
                    </form>
                </div>
             
            </div>
        </div>
    </div>
  )
}
