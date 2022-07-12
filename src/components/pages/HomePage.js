import React from 'react'
import {useNavigate} from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex max-w-3xl mx-auto shadow-md shadow-zinc-400 border-b items-center justify-center py-3">
        <div className="m-3 col-span-5 text-center ">
            <img className="text-center relative" src={"./sea.jpg"}/>
            <div className='items-center justify-center h-14 my-4 w-full py-2 relative text-center'>
            <button onClick={()=>navigate("/auth")} className='text-white bg-blue-600 hover:bg-blue-900 rounded shadow-md  py-2 px-10 mr-4  font-thin tracking-wide shadow-zinc-200'> Sign In</button>
            <button onClick={()=>navigate("/registration")} className='text-white bg-lime-600  hover:bg-lime-800 rounded shadow-md py-2 px-10 font-thin tracking-wide shadow-zinc-200'> Sign Up</button>
            </div>
        </div>
        
    </div>
  )
}

export default HomePage