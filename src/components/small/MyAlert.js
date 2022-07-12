import React from 'react'
const MyAlert = ({visible, Icon, msg1, msg2, onClose}) => {
  if(!visible){
    return null;
  }
  return (
    <div className="relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md py-5 pl-6 pr-8 sm:pr-6">
        <div className="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0" role='alert'>
            <div >
            {Icon}
            </div>
            <div className="text-sm font-medium ml-3">{msg1}</div>
        </div>
        <div className="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">{msg2}</div>
        <div onClick={onClose} className="absolute sm:relative sm:top-auto sm:right-auto ml-auto right-4 top-4 text-gray-400 hover:text-gray-800 cursor-pointer">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12">
              </path>
            </svg>
        </div>
    </div>
  )
}

export default MyAlert
