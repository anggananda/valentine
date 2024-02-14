import React from 'react'
import { ReactTyped } from 'react-typed'

const Take = ({kelihatan}) => {
  return (
    <div className={`w-[500px] h-[500px] rounded-md shadow-lg absolute top-[30%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-999 bg-[#ffb6c1] ease-in-out duration-150 ${kelihatan} flex justify-center items-center flex-col gap-6`}>
        {
            kelihatan === 'scale-100' ? (<ReactTyped
            className="font-bold font-GreatVibes text-3xl text-slate-900"
                strings={["I Love u Sayang💞"]}
            typeSpeed={120}
            backSpeed={100}
        />) : ""
        }

        <div>
            <img className='w-full' src="./img/love.gif" alt="" />
        </div>
    
        <p className="font-semibold font-GreatVibes text-xl"><span className='text-[#990000]'>February</span> 14, 2024</p>
    </div>
  )
}

export default Take