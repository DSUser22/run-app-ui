import React, { useState } from 'react'
import PlanService from '../../services/PlanService';

const BuildPlan = () => {
    const [plan, setPlan] = useState({
        marathonDate:"",
        timesAWeek:"",
        longRun:""
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setPlan({...plan, [e.target.name]:value})
    }

    const buildPlan = (e) => {
        e.preventDefault();
        PlanService
            .buildPlan(plan)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
            console.log(error);
            });
    }
    const deletePlan = (e) => {
        e.preventDefault();
        PlanService
            .deletePlan(plan)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
            console.log(error);
            });
    }

  return (
    <div className='flex max-w-2xl mx-auto shadow-md shadow-zinc-400 border-b items-center justify-center'>
        <div className='px-8 py-8'>
            <div className='font-thin text-2xl tracking-wide text-gray-800 text-center py-2'>
                Build your plan
            </div>
            
        <div class="flex">
            <div class="flex items-center mr-4">
                <input id="radio-1" type="radio" value="" name="distance" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required/>
                <label for="radio-1" class="text-gray-800 tracking-wide ml-2 text-sm dark:text-gray-300">21,1 km</label>
            </div>
            <div class="flex items-center mr-4">
                <input id="radio-2" type="radio" value="" name="distance" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label for="radio2" class="text-gray-800 tracking-wide ml-2 text-sm dark:text-gray-300">42,2 km</label>
            </div>
        </div>


            <div className='items-center justify-center h-14 my-4 w-full'>
                <label className='block text-gray-800 tracking-wide'>Date</label>
                <input type='text' 
                name="marathonDate" 
                value={plan.marathonDate}
                onChange={(e) => handleChange(e)} 
                className='h-10 w-96 border mt-2 px-2 py-2 font-thin tracking-wide hover:text-gray-800 hover:font-normal' placeholder='dd.mm.yyyy' required></input>
            </div>
            <div className='items-center justify-center h-14 my-4 w-full'>
                <label className='block text-gray-800'>How many times a week you want to train (from 3 to 5)</label>
                <input type='text' 
                name="timesAWeek" 
                value={plan.timesAWeek}
                onChange={(e) => handleChange(e)}
                className='h-10 w-96 border mt-2 px-2 py-2 font-thin tracking-wide hover:text-gray-800 hover:font-normal' placeholder='3' required></input>
            </div>
            <div className='items-center justify-center h-14 my-4 w-full'>
                <label className='block text-gray-800'>Your last long run (km)</label>
                <input type='text' 
                name="longRun" 
                value={plan.longRun} 
                onChange={(e) => handleChange(e)}
                className='h-10 w-96 border mt-2 px-2 py-2 font-thin tracking-wide hover:text-gray-800 hover:font-normal' placeholder='long run'></input>
            </div>
            <div className='items-center justify-center h-14 my-4 w-full py-2 relative text-center'>
                <button onClick={buildPlan} className='text-white bg-blue-800 rounded shadow-md py-2 px-10 mr-4 hover:bg-blue-900 font-thin tracking-wide shadow-zinc-200'>Build</button>
                <button onClick={deletePlan} className='text-white bg-rose-600 rounded shadow-md py-2 px-10 hover:bg-rose-700 font-thin tracking-wide shadow-zinc-200'>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default BuildPlan