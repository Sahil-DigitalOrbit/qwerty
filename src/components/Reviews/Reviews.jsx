import React from 'react'
import { FaStar } from 'react-icons/fa'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { Link } from 'react-router-dom'

function Reviews() {
    return (
        <div className='bg-[#FFFBF6] container m-auto my-10 p-4 md:my-20 md:p-10 relative'>
            <div className='space-y-10'>
                <h4 className='text-[#534426] text-[20px] md:text-[35px] font-bonaNova font-[400]'>Customer Review</h4>
                <div className='space-y-10'>
                    <div className='flex items-start gap-4'>
                        <div className='bg-[#D9D9D9] w-10 h-10 md:w-12 md:h-12 px-5 md:px-0 rounded-full'></div>
                        <div className='block space-y-1 border-b border-[#00000038] pb-4'>
                            <p className='text-[#506F22] font-[500] text-[14px] md:text-[18px]'>User 123</p>
                            <p className='flex items-center gap-1 text-[#506F22]'>
                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                            </p>
                            <p className='text-[#414141] text-[16px] font-[400] font-RobotoFlex'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                    </div>
                    <div className='flex items-start gap-4'>
                        <div className='bg-[#D9D9D9] w-10 h-10 md:w-12 md:h-12 px-5 md:px-0 rounded-full '></div>
                        <div className='block space-y-1 border-b border-[#00000038] pb-4'>
                            <p className='text-[#506F22] font-[500] text-[14px] md:text-[18px]'>User 123</p>
                            <p className='flex items-center gap-1 text-[#506F22]'>
                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                            </p>
                            <p className='text-[#414141] text-[16px] font-[400] font-RobotoFlex'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center text-[#6F5B35]'>
                        <Link><IoIosArrowDown className='relative w-8 h-8 z-10'/></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews