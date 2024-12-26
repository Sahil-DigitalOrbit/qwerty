import React from 'react'
import AboutImage from '../../assets/images/AboutImage.png'
import { motion } from 'framer-motion';
import { slideAnimation } from '../../config/motion';
function About() {
  return (
    <section className='my-40 md:block hidden about'>
        <div className='flex items-center justify-center md:gap-10 '>
            <motion.div
            {...slideAnimation('left','-30deg','-1')}
            className="lg:w-[300px] lg:h-[400px] md:w-[200px] md:h-[300px] relative left-16">
                <img className="object-cover w-full  filter brightness-0 invert-[0.5] sepia-[1] saturate-[3] hue-rotate-[30deg] opacity-90" src={AboutImage} alt="About" />
            </motion.div>
            <div className='flex flex-col items-center justify-between lg:gap-10 md:gap-6'>
                <h4 className='text-[#6F5B35] text-[26px] md:text-[30px] lg:text-[45px] font-baskervville font-[400]'>About Us</h4>
                <p className='font-RobotoFlex lg:w-[700px] md:w-[400px] text-[#2B4430C9] lg:text-[17px] md:text-[13px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo enim sit amet magna semper lacinia. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo enim sit amet.Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. In commodo enim sit amet magna semper lacinia. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo enim sit amet.
                </p>
                <button className='font-RobotoFlex text-[#2B4430C9] border border-[#2B4430C9] font-[600] text-[18px] text-center py-2 px-6 rounded-md'>Know More</button>
            </div>
            <motion.div
            {...slideAnimation('right','150deg')}
            className="lg:w-[300px] lg:h-[400px] md:w-[200px] md:h-[300px] relative right-16">
                <img className="object-cover w-full filter brightness-0 invert-[0.5] sepia-[1] saturate-[3] hue-rotate-[30deg] opacity-90" src={AboutImage} alt="About" />
            </motion.div>
        </div>
    </section>
  )
}

export default About