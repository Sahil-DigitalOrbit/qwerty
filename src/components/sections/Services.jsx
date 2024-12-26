import React, { useRef } from 'react';
import ServiceImg1 from '../../assets/images/ServiceImg1.png';
import ServiceImg2 from '../../assets/images/ServiceImg2.png';
import ServiceImg3 from '../../assets/images/ServiceImg3.png';
import ReviewImg from '../../assets/images/ReviewImg.png';
import { motion, useInView } from 'framer-motion';
import { slideAnimation } from '../../config/motion';

function Services() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, margin: "-50% 0px" });

    return (
        <section ref={sectionRef} className='my-40 bg-[#FFECCE30] relative md:block hidden'>
            <div className='flex flex-col items-center justify-between gap-10 py-10'>
                <h4 className='text-[#6F5B35] font-baskervville font-[400] text-[26px] md:text-[30px] lg:text-[45px]'>Why Choose Us</h4>
                <p className='text-[#7D806A] font-RobotoFlex font-[300] text-[17px] text-center'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo enim sit amet<br /> magna
                    semper lacinia. Lorem ipsum dolor sit amet.
                </p>
                <div className='flex items-center justify-between gap-10 font-baskervville'>
                    <motion.div {...slideAnimation('right')} className='flex flex-col items-center justify-center gap-10  bg-[#FFF5E7] rounded-full lg:w-[230px] lg:h-[350px] md:w-[160px] md:h-[260px]'>
                        <img className='lg:w-20 lg:h-20 md:w-16 md:h-16 object-cover filter brightness-0 invert-[0.5] sepia-[1] saturate-[3] hue-rotate-[30deg] opacity-90' src={ServiceImg1} />
                        <p className='text-[#7D806A] italic font-[400] lg:text-[28px] md:text-[18px] text-center'>organic Products</p>
                    </motion.div>
                    <div className='flex flex-col items-center justify-center gap-10 bg-[#FFF5E7] rounded-full lg:w-[230px] lg:h-[350px] md:w-[160px] md:h-[260px]'>
                        <img className='lg:w-20 lg:h-20 md:w-16 md:h-16 object-cover filter brightness-0 invert-[0.5] sepia-[1] saturate-[3] hue-rotate-[30deg] opacity-90' src={ServiceImg2} />
                        <p className='text-[#7D806A] italic font-[400] lg:text-[28px] md:text-[18px] text-center'>Great customer <br/>service</p>
                    </div>
                    <motion.div {...slideAnimation('left')} className='flex flex-col items-center justify-center gap-10 bg-[#FFF5E7] rounded-full lg:w-[230px] lg:h-[350px] md:w-[160px] md:h-[260px]'>
                        <img className='lg:w-20 lg:h-20 md:w-16 md:h-16 object-cover filter brightness-0 invert-[0.5] sepia-[1] saturate-[3] hue-rotate-[30deg] opacity-90' src={ServiceImg3} />
                        <p className='text-[#7D806A] italic font-[400] lg:text-[28px] md:text-[18px] text-center'>Natural <br/> Ingredients</p>
                    </motion.div>
                </div>
            </div>
            <motion.div 
                {...slideAnimation('right','0deg')} 
                className='absolute w-[300px] h-[130px] scale-x-100 scale-y-75 -bottom-0 -right-24'>  
                <img className="object-cover w-full h-full filter brightness-0 invert-[0.5] sepia-[1] saturate-[3] hue-rotate-[30deg] opacity-90 scale-90" src={ReviewImg} />
            </motion.div>
            <motion.div
            {...slideAnimation('right','45deg')}
            className='absolute w-[400px] h-[200px] transform rotate-45 scale-x-100 scale-y-75 -right-32 top-1/2'>   
                <img className="object-cover w-full h-full filter brightness-0 invert-[0.5] sepia-[1] saturate-[3] hue-rotate-[30deg] opacity-90 scale-75" src={ReviewImg} />
            </motion.div>
        </section>
    )
}

export default Services