import React from 'react'
import MyPhoto from '/images/profile.jpg'
import { validTimes } from '../constants'

export default function MainCard({selectedTime, setSelectedTime}) {
  return (
    <div className='bg-clr-darkGray lg:row-span-2  rounded-2xl grid grid-rows-3'>
        <div className="row-span-2 bg-[#5746ea] rounded-2xl p-6 flex items-center justify-center gap-4 lg:flex-col lg:gap-8 lg:items-start">
            <img className='rounded-full size-[4.5rem] border-4 border-solid border-clr-white' src={MyPhoto} alt="User photo" />
            <h1>
                <span className='text-sm'>Report for</span><br />
                <span className='text-2xl lg:text-3xl'>Keiner Mendoza</span> 
            </h1>
        </div>
        <div className="font-light text-clr-gray lg:text-sm p-6 flex justify-between lg:flex-col gap-1 items-start">
            <button
                onClick={() => setSelectedTime(validTimes.daily)} 
                className={`${selectedTime == validTimes.daily && 'text-clr-white'}`}>Daily</button>
            <button
                onClick={() => setSelectedTime(validTimes.weekly)} 
                className={`${selectedTime == validTimes.weekly && 'text-clr-white'}`}>Weekly</button>
            <button
                onClick={() => setSelectedTime(validTimes.monthly)} 
                className={`${selectedTime == validTimes.monthly && 'text-clr-white'}`}>Monthly</button>
        </div>
    </div>
  )
}
