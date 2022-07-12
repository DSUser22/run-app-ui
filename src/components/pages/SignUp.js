import React, { useState, useRef, useEffect, useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from '../../services/axios';
import MyAlert from '../small/MyAlert';
import IconWrong from '../icons/IconWrong';
import IconLetter from '../icons/IconLetter';
import IconExclamanation from '../icons/IconExclamanation';

const REGISTRATION_URL='/registration'

const NEED_TO_CONFIRM_1='We have sent you an email with a confirmation link.'
const NEED_TO_CONFIRM_2='Please check your mailbox.'
const USER_EXISTS_MSG_1='This email address has already been registered.'
const USER_EXISTS_MSG_2='Please choose another email address or login to to proceed.'
const SMTH_WENT_WRONG_1='Something went wrong'
const SMTH_WENT_WRONG_2='Please try again later'

const SignUp = () => {
    const navigate = useNavigate();

    const userRef = useRef();

    const [showModal, setShowModal] = useState(false);

    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [msg1, setMsg1] = useState('')
    const [msg2, setMsg2] = useState('')
    const [icon, setIcon] = useState('')
    
    useEffect(()=>{
        userRef.current.focus();
    }, [])

    const handleChange = (e) => {
        const value = e.target.value;
        setUser({...user, [e.target.name]:value})
    }

    const handleOnClose = (e) =>{
        setShowModal(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pwd);

        try{
            const response = await axios.post(REGISTRATION_URL, 
                JSON.stringify({username : user, password : pwd}),
                {
                    headers : { 'Content-Type' : 'application/json'},
                    withCredentials : true
                })
                console.log(response?.data);
                setUser('');
                setPwd('');
                setMsg1(NEED_TO_CONFIRM_1);
                setMsg2(NEED_TO_CONFIRM_2);
                setIcon(<IconLetter/>);
                setShowModal(true);
        } catch (err){
            if(!err?.response){
            } else if(err.response?.status === 409){
                console.log(err.response?.data);
                setMsg1(USER_EXISTS_MSG_1);
                setMsg2(USER_EXISTS_MSG_2);
                setIcon(<IconExclamanation/>);
                setShowModal(true);
            } else{
                console.log(err.response?.data);
                setMsg1(SMTH_WENT_WRONG_1);
                setMsg2(SMTH_WENT_WRONG_2);
                setIcon(<IconWrong/>);
                setShowModal(true);
            }
        }
    }
    
  return (
    <div>
        <MyAlert Icon={icon} onClose={handleOnClose} visible={showModal} msg1={msg1} msg2={msg2}/>
        <div className='flex max-w-2xl mx-auto shadow-md shadow-zinc-400 border-b items-center justify-center'>
                <div className='px-8 py-8'>
                    <div className='font-thin text-2xl tracking-wide text-gray-800 text-center py-2'>
                        Sing Up
                    </div>
                <div>
                    <form onSubmit={handleSubmit} className="mt-8 mb-4">
                        <div className="mb-4">
                            <label htmlFor="userEmail" className="sr-only">Email address</label>
                            <input type='email'
                            name="username" 
                            id="username"
                            ref={userRef}
                            value={user}
                            onChange={(e) => setUser(e.target.value)} 
                            className="border-solid border border-gray-400 rounded px-2 py-3 font-normal tracking-wide hover:text-gray-800 hover:font-normal" placeholder="Email address" required />
                        </div>
                        <div>
                            <label htmlFor="userEmail" className="sr-only">Password</label>
                            <input type='password'
                            name="password"
                            id="password" 
                            value={pwd}
                            onChange={(e) => setPwd(e.target.value)} 
                            className="border-solid border border-gray-400 rounded px-2 py-3 font-normal tracking-wide hover:text-gray-800 hover:font-normal" placeholder="Password" required />
                        </div>
                        <div className="my-4 flex items-center">
                            <input className="h-4 w-4 mr-2" type="checkbox" id="userRemember" />
                            <label htmlFor="userRemember"  className='block text-gray-800'>Remember me</label>
                        </div>
                        <button className="bg-blue-800 rounded hover:bg-blue-900 text-white font-bold w-full py-3" type="submit">Sign up</button>                   
                    </form>
                    
                </div>
                <div className='justify-center items-center text-center'>
                        <div className='font-normal tracking-wide text-gray-800 text-xs pt-4 pb-2 text-center'>
                            Already have an account?
                        </div>
                        <button onClick={()=>navigate("/auth")} className="h-10 w-40 bg-lime-600 rounded hover:bg-lime-800 text-white py-2 text-center">Sign in</button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp