import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'
import { CartButton } from '../Buttons/CartButton'
import { Link } from 'react-router-dom'

export const WishListCard = ({product}) => {
    return (
        <div className='flex items-center justify-between gap-10'>
            <div className='flex flex-col gap-1 lg:w-[280px] md:w-[230px] w-[140px] transition-transform duration-300 ease-in'>
                <Link to={`/${product.id}`}>
                    <div className='lg:w-[285px] lg:h-[340px] md:w-[230px] md:h-[250px] w-[140px] h-[168px]'>
                        <img className='w-full h-full object-cover' src={product.image[0]} alt='product image' />
                    </div>
                </Link>
                <h4 className='text-[16px] md:text-[20px] lg:text-[24px] font-baskervville font-[400] italic text-[#6F5B35]'>{product.name}</h4>
                <div className='flex items-center justify-between text-[#6F5B35] font-[400]'>
                    <p className='font-baskervville text-[10px] md:text-[14px] lg:text-[18px]'>{product.weight}</p>
                    <p className='font-baskervville text-[14px] md:text-[20px] lg:text-[22px]'>Rs. {product.price}</p>
                </div>
                <div className="border border-headerText rounded-lg my-2 flex w-full">
                    <button className="py-1 px-4 text-lg font-bold w-9" data-skip="-1">-</button>
                    <span className="lg:border lg:border-x-headerText w-4/5 text-lg flex justify-around items-center">
                        <input className="border-none h-full w-8" type="number" readOnly value={1} />
                    </span>
                    <button className="py-1 px-4 text-lg font-bold w-9" data-skip="1">+</button>
                </div>
                <div className='flex items-center justify-between lg:w-[285px] md:w-[100%] w-[140px] lg:text-[18px]  md:text-[14px] text-[11px]'>
                    <CartButton styles={' lg:w-[80%] md:w-[180px] w-[100px] bg-headerText text-white py-2 m-0 lg:h-10'}/>
                    <button className='lg:w-[15%] border-2 rounded-md border-[#6F5B35] text-headerText p-2.5 flex items-center justify-center'><HiOutlineTrash/></button>
                </div>
            </div>
        </div>
    )
}
