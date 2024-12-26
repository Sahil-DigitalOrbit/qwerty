import React from 'react'
import { Link } from 'react-router-dom';
import {CartButton} from '../Buttons/CartButton';
import {WishlistButton} from '../Buttons/WishlistButton'


const ProductCard = ({ product }) => {
        
    return (
        <div className='flex items-center justify-between gap-10'>
            <div className='flex flex-col gap-1 lg:w-[240px] md:w-[220px] w-[140px] transition-transform duration-300 ease-in'>
                <Link to={`/${product.id}`}>
                    <div className='lg:w-[240px] lg:h-[280px] md:w-[220px] md:h-[250px] w-[140px] h-[168px]'>
                        <img className='w-full h-full object-cover' src={product.image[0]} alt='product image' />
                    </div>
                </Link>
                <h4 className='text-[16px] md:text-[20px] lg:text-[24px] font-baskervville font-[400] italic text-[#6F5B35]'>{product.name}</h4>
                <div className='flex items-center justify-between text-[#6F5B35] font-[400]'>
                    <p className='font-baskervville text-[10px] md:text-[14px] lg:text-[18px]'>{product.weight}</p>
                    <p className='font-baskervville text-[14px] md:text-[20px] lg:text-[22px]'>Rs. {product.price}</p>
                </div>
                <div className='flex items-center justify-between lg:w-[240px] md:w-[100%] w-[140px] lg:text-[18px] md:text-[14px] text-[11px]'>
                    <CartButton styles={'lg:w-[80%] md:w-[160px] w-[100px] bg-headerText text-white py-2 h-full'}/>
                    <WishlistButton styles={'lg:w-[15%] border-2 border-[#6F5B35] rounded-sm text-headerText p-2.5'}/>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;