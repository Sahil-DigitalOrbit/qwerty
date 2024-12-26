import React, { useState } from 'react'
import {productData} from '../../assets/data/data'
import ReviewImg from '../../assets/images/ReviewImg.png';
import { motion } from 'framer-motion';
import { CartButton } from '../Buttons/CartButton';
import { WishlistButton } from '../Buttons/WishlistButton';
import { Link } from 'react-router-dom';
import { slideAnimation } from '../../config/motion';

function Categories() {

    const [tab, setTab] = useState('flavoured');

    return (
        <section className='relative md:mt-40 md:mb-60 mb-20 flex flex-col items-center justify-center md:block md:px-4'>
            <div className='max-w-[1200px] m-auto md:block flex flex-col items-center justify-center categories'>
                <div className='bg-[#6D7E702B] text-[#817B75] font-bonaNova font-[500] max-w-60 md:py-2 md:text-[18px] py-1 px-4 text-[10px] text-center mb-4 md:mb-0'>PRODUCT CATEGORIES</div>
                <div className='flex flex-col justify-between gap-8'>
                    <div className='flex items-center justify-center md:justify-between lg:justify-between'>
                        <h4 className='text-[#6F5B35] font-baskervville font-[400] text-[26px] md:text[30px] lg:text-[45px]'>Discover Chaiwaley’s Categories</h4>
                        <Link to={'/products'} className='hidden md:block font-bonaNova  text-[#6F5B35] font-[500] text-[18px] text-center underline mt-3'>View All</Link>
                    </div>
                    <div className='flex items-start justify-between z-10'>
                        <div className='hidden md:flex flex-col items-start gap-4 lg:text-[30px] md:text-[20px] text-[#6F5B35]'> 
                            <button className={`font-baskervville ${tab === 'flavoured' ? 'bg-[#D9D9D9] italic rounded-full py-1 px-6' : ''}`}
                                onClick={() => setTab('flavoured')}>
                                Flavoured
                            </button>
                            <button className={`font-baskervville ${tab === 'herbal' ? 'bg-[#D9D9D9] italic rounded-full py-1 px-6' : ''}`}
                                onClick={() => setTab('herbal')}>
                                Herbal
                            </button>
                            <button className={`font-baskervville ${tab === 'assamauthentic' ? 'bg-[#D9D9D9] italic rounded-full py-1 px-6' : ''}`}
                                onClick={() => setTab('assamauthentic')}>
                                Assam Authentic
                            </button>
                            <button className={`font-baskervville ${tab === 'category4' ? 'bg-[#D9D9D9] italic rounded-full py-1 px-6' : ''}`}
                                onClick={() => setTab('category4')}>
                                Category 4
                            </button>
                            <button className={`font-baskervville ${tab === 'category5' ? 'bg-[#D9D9D9] italic rounded-full py-1 px-6' : ''}`}
                                onClick={() => setTab('category5')}>
                                Category 5
                            </button>
                        </div>
                        <div className='flex items-center justify-center flex-wrap gap-2 md:hidden  md:px-0'>
                            <div className='flex flex-col items-center gap-2'>
                                <div className='rounded-full w-24 h-24 bg-[#D9D9D9]'></div>
                                <p className='text-[#6F5B35] text-[14px] font-baskervville font-[400]'>Herbal</p>
                            </div>
                            <div className='flex flex-col items-center gap-2'>
                                <div className='rounded-full w-24 h-24 bg-[#D9D9D9]'></div>
                                <p className='text-[#6F5B35] text-[14px] font-baskervville font-[400]'>Assam Authentic</p>
                            </div>
                            <div className='flex flex-col items-center gap-2'>
                                <div className='rounded-full w-24 h-24 bg-[#D9D9D9]'></div>
                                <p className='text-[#6F5B35] text-[14px] font-baskervville font-[400]'>Flavoured</p>
                            </div>
                            <div className='flex flex-col items-center gap-2'>
                                <div className='rounded-full w-24 h-24 bg-[#D9D9D9]'></div>
                                <p className='text-[#6F5B35] text-[14px] font-baskervville font-[400]'>Category 4</p>
                            </div>
                            <div className='flex flex-col items-center gap-2'>
                                <div className='rounded-full w-24 h-24 bg-[#D9D9D9]'></div>
                                <p className='text-[#6F5B35] text-[14px] font-baskervville font-[400]'>Category 5</p>
                            </div>
                        </div>
                        <div className='hidden md:flex justify-between'>
                            <div className="flex items-start gap-10">
                                {productData[tab]?.slice(0,2).map((product) => (
                                    <div key={product.id} className="flex flex-col lg:w-[240px] md:w-[220px] w-[140px]">
                                        <div className="lg:w-[240px] lg:h-[280px] md:w-[220px] md:h-[250px] w-[140px] h-[168px]">
                                            <Link to={`${product.name}`}>
                                                <img className="w-full h-full object-cover"
                                                    src={product.image || 'placeholder-image.jpg'} 
                                                    alt={product.name}
                                                />
                                            </Link>
                                        </div>
                                        <h4 className="md:text-[20px] lg:text-[24px] font-baskervville font-[400] italic text-[#6F5B35]">
                                            {product.name}
                                        </h4>
                                        <div className="flex items-center justify-between text-[#6F5B35] font-[400]">
                                            <p className="text-[10px] font-baskervville md:text-[14px] lg:text-[18px]">{product.weight || 'N/A'}</p>
                                            <p className="text-[14px] font-baskervville md:text-[20px] lg:text-[22px]">{product.price}</p>
                                        </div>
                                        <div className="flex items-center justify-between lg:w-[100%] md:w-[220px]">
                                            <CartButton styles={'lg:w-[80%]  md:w-[60%] text-center w-[100px] bg-headerText text-white py-2 h-full'}/>
                                            <WishlistButton styles={'lg:w-[15%] md:w-[30%] border-2 border-[#6F5B35] rounded-sm text-headerText py-2.5 px-2.5'}/>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <motion.div
            {...slideAnimation('left','-28deg','0','-1')}
                className='absolute hidden md:block -left-52 -bottom-32'>
                <img className="object-cover w-full h-full filter brightness-0 invert-[0.5] sepia-[1] saturate-[3] hue-rotate-[30deg] opacity-90 scale-90" src={ReviewImg}  />
            </motion.div>
            <motion.div 
            {...slideAnimation('left',0,-0.75,-1)}
                className='absolute hidden md:block -left-56 bottom-5'>
                <img className="object-cover w-full h-full filter brightness-0 invert-[0.5] sepia-[1] saturate-[3] hue-rotate-[30deg] opacity-90 scale-75" src={ReviewImg}  />
            </motion.div>
        </section>
    )
}

export default Categories