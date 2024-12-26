import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { FaGoogle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { context } from '../../context/context';

export const LoginModel = () => {
    const { setModal, setLoginModel } = useContext(context);
    const [isLogin, setIsLogin] = useState(true)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <div className='fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <div className='w-[320px] h-auto bg-headerBg flex flex-col px-10 py-4 gap-6'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-[30px] font-baskervville font-[400] text-headerText'>{isLogin ? 'Log In' : 'Sign Up'}</h1>
                    <button onClick={() => {setLoginModel(false); setModal(false)}} className='text-[20px] text-headerText border border-headerText '><AiOutlineClose /></button>
                </div>
                <form className='flex flex-col gap-4'>
                    {
                        !isLogin && (
                            <div>
                                <label className='text-headerText text-[14px] font-[400] font-RobotoFlex'>User Name</label>
                                <input className='w-full h-9 border border-[#00007C33] rounded-md outline-none pl-2' type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} required />
                            </div>
                        )
                    }
                    <div>
                        <label className='text-headerText text-[14px] font-[400] font-RobotoFlex'>User Email ID</label>
                        <input className='w-full h-9 border border-[#00007C33] rounded-md outline-none pl-2' type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className=''>
                        <label className='text-headerText text-[14px] font-[400] font-RobotoFlex'>Password</label>
                        <input className='w-full h-9 border border-[#00007C33] rounded-md outline-none pl-2' type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <NavLink className='text-[10px] text-[#414141] font-[400] font-RobotoFlex underline pt-2 flex justify-end'>Forgot Password?</NavLink>
                    </div>
                    <div className='flex flex-col gap-4 items-center'>
                        <button className='w-full border-none rounded-md py-1.5 bg-headerText text-headerBg '>{isLogin ? "Log In" : "Sign Up"}</button>
                        <p className='text-[#000000B0] text-[14px] font-RobotoFlex font-[500]'>Or</p>
                        <button className='w-full flex items-center justify-center gap-4 py-1.5 border-2 border-headerText rounded-md'>
                            <p className='text-[14px] text-[#3B3B3BD1] font-[400] font-RobotoFlex'>
                                {isLogin ? "Sign In with Google" : "Sign Up with Google"}
                            </p>
                            <FaGoogle  className='w-6 h-6 text-[#3B3B3BD1]' />
                        </button>
                        <div className='flex items-center gap-2'> 
                            <p className='text-[#000000B0] text-[14px] font-RobotoFlex font-[500] '>
                                {isLogin ? 'New to Chaiwaley?' : 'Already Have Account?'}
                            </p>
                            <button onClick={() => setIsLogin(!isLogin)} className='text-headerText text-[14px] underline font-[600] font-RobotoFlex'>
                                {isLogin ? 'Create account' : 'Login' }
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
