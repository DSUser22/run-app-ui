import React from 'react'
import {useNavigate} from 'react-router-dom'

const AllTrainingsTable = () => {

    const navigate = useNavigate();
  return (
    <div className='container mx-auto my-8'>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Date
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Type
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Distance (km)
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Intervals
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Length
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Done
                        </th>
                        {/* <th scope="col" class="px-6 py-3">
                            <span class="sr-only">Edit</span>
                        </th> */}
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            17.08.2022
                        </th>
                        <td class="px-6 py-4">
                            Ordinary
                        </td>
                        <td class="px-6 py-4">
                            12
                        </td>
                        <td class="px-6 py-4">
                            
                        </td>
                        <td class="px-6 py-4">

                        </td>
                        <td class="px-6 py-4">
                            -
                        </td>
                    </tr>
                    <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            19.08.2022
                        </th>
                        <td class="px-6 py-4">
                            Speed
                        </td>
                        <td class="px-6 py-4">
                            
                        </td>
                        <td class="px-6 py-4">
                            4
                        </td>
                        <td class="px-6 py-4">
                            250
                        </td>
                        <td class="px-6 py-4">
                            y
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className='h12 pt-2 pr-2 text-right'>
            <button onClick={()=>navigate("/my/plan/")} className='rounded bg-lime-600 text-white px-6 py-2 font-semibold'>Plan</button>
        </div>
    </div>

  )
}

export default AllTrainingsTable