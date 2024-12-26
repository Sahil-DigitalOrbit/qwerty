import React from 'react'
import ProductCard from '../Cards/ProductCard'
import { Link, useLocation } from 'react-router-dom';
import { products } from '../../assets/data/data.js'
import { motion } from "framer-motion";
import { fadeAnimation, slideAnimation } from '../../config/motion.js';


function BestSeller({heading}) {
  const location = useLocation();
  return (
    <section>
        <div className='max-w-[1200px] m-auto flex flex-col items-center my-20 gap-8 transition-transform duration-300 ease-in'>
            {location.pathname === '/' && (
              <>
                <motion.h4 {...fadeAnimation(0.3)} className='bg-[#6D7E702B] font-bonaNova text-[#817B75] font-[500] md:py-2 md:px-8 md:text-[18px] py-1 px-4 text-[10px] text-center'>
                  {heading}
                </motion.h4>
                <motion.div className='text-[#6F5B35] font-baskervville font-[400] text-[26px] md:text-[45px] text-center w-[300px] md:w-auto'>
                  <motion.p {...fadeAnimation(0.3)}>Top of the Pot: <span className='italic'>Chaiwaley Bestsellers</span></motion.p>
                </motion.div>
              </>
            )}
            {location.pathname !== '/' && (
              <>
                <motion.h4 {...fadeAnimation(0.3)} className="text-4xl text-headerText text-center font-bonaNova my-5 lg:mt-32 md:mt-24 mt-20">
                  {heading}
                </motion.h4>
                <Link to={'/products'} className="w-full flex justify-end">
                  <motion.p {...fadeAnimation(0.8)} className="underline text-headerText font-RobotoFlex font-[500] my-5">
                    View All
                  </motion.p>
                </Link>
              </>
            )}
            <div className='hidden md:flex items-center gap-10'>
              <motion.div {...slideAnimation('right')}><ProductCard product={products[0]} /></motion.div>
              <motion.div><ProductCard product={products[1]} /></motion.div>
              <motion.div {...slideAnimation('left')}><ProductCard product={products[2]} /></motion.div>
              
            </div>
            <motion.div {...fadeAnimation(0.5)} className='md:hidden flex items-center gap-10'>
              {
                products.slice(0,2).map((product) => (
                  <ProductCard key={product.id} product={product}  />
                ))
              }
            </motion.div>
            {location.pathname === '/' && (
              <motion.div className='text-[#6F5B35] font-RobotoFlex font-[500] text-[18px] underline '>
                <Link to={'/products'} >
                  <motion.p {...fadeAnimation(0.8)}>View All</motion.p>
                </Link>
              </motion.div>
            )}
        </div>
    </section>
  )
}

export default BestSeller