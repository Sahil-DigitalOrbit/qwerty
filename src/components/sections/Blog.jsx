import React, { useRef } from 'react'
import BlogCard from '../Cards/BlogCard';
import {blogs} from '../../assets/data/data'
import { motion, useInView } from 'framer-motion';
import AboutImage from '../../assets/images/AboutImage.png';
import { fadeAnimation } from '../../config/motion';


function Blog() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-50% 0px" });
  return (
    <section ref={sectionRef} className='my-20 lg:mt-40 lg:mb-60 overflow-visible relative blog'>
        <div className='max-w-[1200px] mx-auto flex flex-col  items-center justify-between gap-10'>
            <h4 className='text-headerText font-bonaNova font-[400] text-[26px] md:text-[30px] lg:text-[45px]'>Blogs</h4>
            <div className='flex lg:flex-row flex-col md:flex-col items-center lg:gap-20'>
            {blogs.slice(0, 3).map((blog,idx) => {
            return <motion.div key={idx} {...fadeAnimation(idx/2)}><BlogCard blog={blog} key={blog.id} /></motion.div>
            })}
            </div>
        </div>
        <motion.div initial={{ x: "-100%" }} 
          animate={{ x: isInView ? "0%" : "-100%", rotate: 55 , right: -380, bottom: -160,}} 
          transition={{ duration: 1, ease: "easeInOut" }} 
          className='absolute w-[300px] h-[130px]'>  
          <img className="object-cover w-full h-full filter overflow-visible brightness-0 invert-[0.5] sepia-[1] saturate-[3] hue-rotate-[30deg] opacity-90" src={AboutImage} />
        </motion.div>
    </section>
  )
}

export default Blog