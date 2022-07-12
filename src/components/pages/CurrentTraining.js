import React from 'react'

const CurrentTraining = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + '.' + mm + '.' + yyyy;
  return (
    <div className='flex max-w-2xl mx-auto shadow-md shadow-zinc-400 border-b items-center justify-center'>
        <div className='px-8 py-8'>
            <div className='font-thin text-2xl tracking-wide text-gray-800 text-center py-2'>
                Today {today}
            </div>
        </div>
    </div>
  )
}

export default CurrentTraining