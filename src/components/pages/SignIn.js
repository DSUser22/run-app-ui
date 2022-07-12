import React, { useState, useRef, useEffect, useContext } from 'react'
import AuthContext from '../../context/AuthProvider';
import {useNavigate} from 'react-router-dom'
import axios from '../../services/axios';
import IconExclamanation from '../icons/IconExclamanation';
import IconWrong from '../icons/IconWrong';
import MyAlert from '../small/MyAlert';

const LOGIN_URL='/auth'

const USER_NOT_ENABLED_1 = 'This account has not been verified';
const USER_NOT_ENABLED_2 = 'Please check your mailbox';
const USER_DOESNT_EXIST_1 = 'Account with this email doesn\'t exist'
const USER_DOESNT_EXIST_2 = 'Please sign up'
const INCORRECT_PASSWORD_1 = 'Incorrect password'
const INCORRECT_PASSWORD_2 = ''
const SMTH_WENT_WRONG_1='Something went wrong'
const SMTH_WENT_WRONG_2='Please try again later'
const LogIn = () => {
    const {setAuth} = useContext(AuthContext);

    const userRef = useRef();

    const navigate = useNavigate();

    const [visible, setVisible] = useState(false);

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [msg1, setMsg1] = useState('')
    const [msg2, setMsg2] = useState('')
    const [icon, setIcon] = useState('')

    const handleOnClose = (e) =>{
        setVisible(false);
    }

    useEffect(()=>{
        userRef.current.focus();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post(LOGIN_URL, 
                JSON.stringify({username : user, password : pwd}),
                {
                    headers : { 'Content-Type' : 'application/json'},
                    withCredentials : true
                })
                console.log(JSON.stringify(response?.data));
                //console.log(JSON.stringify(response));
                const accessToken = response?.data.accessToken;
                const jwtToken = response?.data.jwtToken;
                //const roles = response?.data?.roles;
                setAuth({user, pwd, jwtToken})
                setUser('');
                setPwd('');
        } catch (err){
            
            if(!err?.response){
            } else if(err.response?.status === 401 && err.response?.data?.message === 'User not enabled'){
                console.log(err.response?.data);
                setMsg1(USER_NOT_ENABLED_1);
                setMsg2(USER_NOT_ENABLED_2);
                setIcon(<IconExclamanation/>);
                setVisible(true);
            } else if(err.response?.status === 401 && err.response?.data?.message === 'User not found'){
                console.log(err.response?.data);
                setMsg1(USER_DOESNT_EXIST_1);
                setMsg2(USER_DOESNT_EXIST_2);
                setIcon(<IconExclamanation/>);
                setVisible(true);
                setUser('');
                setPwd('');
            } else if(err.response?.status === 401 && err.response?.data?.message === 'Bad credentials'){
                console.log(err.response?.data);
                setMsg1(INCORRECT_PASSWORD_1);
                setMsg2(INCORRECT_PASSWORD_2);
                setIcon(<IconExclamanation/>);
                setVisible(true);
                setUser('');
                setPwd('');
            } else{
                setMsg1(SMTH_WENT_WRONG_1);
                setMsg2(SMTH_WENT_WRONG_2);
                setIcon(<IconWrong/>);
                setVisible(true);
                setUser('');
                setPwd('');
            }
        }
    }
    
  return (
    <div>
        <MyAlert Icon={icon} onClose={handleOnClose} visible={visible} msg1={msg1} msg2={msg2}/>
        <div className='flex max-w-2xl mx-auto shadow-md shadow-zinc-400 border-b items-center justify-center'>
                <div className='px-8 py-8'>
                    <div className='font-thin text-2xl tracking-wide text-gray-800 text-center py-2'>
                        Sing In
                    </div>
                <div>
                    <form onSubmit={handleSubmit} className="mt-8 mb-4">
                        <div className="mb-4">
                            <label htmlFor="username" className="sr-only">Email address</label>
                            <input type='email'
                            name="username" 
                            id="username"
                            ref={userRef}
                            value={user}
                            onChange={(e) => setUser(e.target.value)} 
                            className="border-solid border border-gray-400 rounded px-2 py-3 font-normal tracking-wide hover:text-gray-800 hover:font-normal" 
                            placeholder="Email address" 
                            required />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
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
                        <button className="bg-blue-800 rounded hover:bg-blue-900 text-white font-bold w-full py-3" type="submit">Sign in</button>                   
                    </form>
                    
                </div>
                <div className='justify-center items-center text-center'>
                        <div className='font-normal tracking-wide text-gray-800 text-xs pt-4 pb-2 text-center'>
                        Do not have an account?
                        </div>
                        <button onClick={()=>navigate("/registration")} className="h-10 w-40 bg-lime-600 rounded hover:bg-lime-800 text-white py-2 text-center">Sign up</button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default LogIn