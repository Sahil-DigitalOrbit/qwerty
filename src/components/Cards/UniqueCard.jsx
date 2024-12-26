import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { IoBagSharp } from "react-icons/io5";
import { CartButton } from '../Buttons/CartButton';
import { WishlistButton } from '../Buttons/WishlistButton';


function UniqueCard({ product }) {
    return (
        <div>
            <div key={product.id} className='flex flex-col gap-2 lg:w-[240px] md:w-[180px] w-[140px]'>
                <div className='lg:w-[240px] lg:h-[280px] md:w-[240px] md:h-[250px] w-[140px] h-[168px] bg-[#FFF7DF] flex items-center justify-center'>
                    <img className='w-[60%] h-[60%] md:w-[60%] md:h-[60%] lg:w-[60%] lg:h-[60%] object-cover' src={product.image} alt='product image' />
                </div>
                <div className='flex items-center gap-4'>
                    <IoBagSharp className='text-[#7D806A] md:w-6 md:h-6 w-4 h-4'/>
                    <h4 className='text-[12px] md:text-[18px] lg:text-[22px] font-baskervville font-[400] italic text-[#6F5B35]'>{product.name}</h4>
                </div>
                <div className='flex items-center justify-between w-[133px] md:w-[220px] lg:w-[100%] text-[11px] md:text-[14px] lg:text-[18px]'>
                    <CartButton styles={'lg:w-[80%] md:w-[75%] w-[90px] bg-headerText text-white py-2 h-full'}/>
                    <WishlistButton styles={'lg:w-[15%] border-2 border-[#6F5B35] rounded-sm text-headerText py-2.5 px-2.5'}/>
                </div>
            </div>
        </div>
    )
}

export default UniqueCard