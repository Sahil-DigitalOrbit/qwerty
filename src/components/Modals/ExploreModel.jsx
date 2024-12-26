import React, { useContext, useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { context } from '../../context/context'
import { motion } from 'framer-motion'
import { fadeAnimation } from '../../config/motion'

export const ExploreModel = () => {
    const { exploreModel, setExploreModel, setModal } = useContext(context);

    function closeExplore() {
        setExploreModel(false);
        setModal(false);
    }
    
    return (
        <motion.div {...fadeAnimation(0.2)} className='fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <div className='flex items-center w-[330px] h-[480px]'>
                <div className='w-1/2 h-full bg-headerBg px-4 flex flex-col justify-center gap-4'>
                    <h1 className='text-headerText italic text-[30px] font-baskervville font-[400]'>Here’s something Magical</h1>
                    <p className='text-headerText text-[12px] font-[300] font-RobotoFlex'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        In commodo enim sit amet magna semper lacinia.
                    </p>
                    <div className='flex flex-col items-start gap-2'>
                        <input type='text' placeholder='Enter your email' className='w-full flex h-8 border border-[#00007C33] outline-none pl-2 text-[10px] text-[#6F5B357D] rounded-md placeholder:text-[#6F5B357D] placeholder:text-[10px] placeholder:pl-2' />
                        <button className='border border-headerText py-2 px-6 rounded-md flex items-start text-headerText text-[14px] font-RobotoFlex font-[500]'>
                            Button
                        </button>
                    </div>
                </div>
                <div className='relative w-1/2 h-full'>
                    <img src='https://s3-alpha-sig.figma.com/img/1adc/72f1/e25ca2db1ce3a0fadf21d0b9fccab6f4?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j8JRnmeTjISmD9JL7FYGs~3UzXmW9vWC8I557shHw7fT8hK9m33-no274~c~nsMRO-uuxhhBofwKHQPSpfoUrqpLYsPM9ZDhNiwVEQLQavFiS3CM2w9KllupDua8aXK~6UICk0cSuw6ppMhXRvh5EUwWSV6nOT9Yxx4HT~Mt5ZWOKz8TTWZcbVzcW39CJ7SC5-iMzxGs5wRrttmEheZ9p5FAu-CrgRJqPLDDQ48itFRrUwtS~3iWzXtXmYFVABE78pOxvDwG5ZYo8y8LfrKsi-UQTZs0rDO1Qa2ufmgmcUx5K3d0eefE-Kjhpclk2xYlJ5fTJTZSKiWnUA4ubpolpw__' alt='Explore Image' 
                    className='h-full w-full object-cover bg-cover'/>
                    <button onClick={closeExplore} className='absolute top-2 right-2 border border-black'>
                        <AiOutlineClose className='text-black' />
                    </button>
                </div>
            </div>
        </motion.div>
    )
}
