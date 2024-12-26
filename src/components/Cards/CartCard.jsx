import React from "react";
import { HiOutlineTrash } from "react-icons/hi";

export const CartCard = ({ item }) => {
  return (
    <div className="cart-tile md:w-full w-[350px] md:h-44 h-40 lg:py-3 py-4 flex overflow-hidden items-center gap-4 md:gap-10 lg:justify-normal">
      <div className="lg:w-1/3 w-[120px] md:w-[170px] h-full">
        <img
          className="h-full w-full object-cover rounded-xl lg:rounded-none"
          src={item.image[0]}
          alt="product.img"
        />
      </div>
      <div className="h-full flex flex-col justify-between lg:px-6 px-4 lg:w-2/5 font-bonaNova">
        <div>
          <p className="lg:text-2xl text-xl">{item.name}</p>
          <p className="lg:text-md text-sm"> {item.weight}</p>
        </div>
        <p className="text-lg">Rs. {item.price}</p>
        <div className="border border-headerText rounded-lg h-9.5 w-fit flex items-center">
          <button className="py-1 px-4 text-lg font-bold w-9" data-skip="-1">-</button>
          <div className='w-10 p-1 border border-headerText border-t-0 border-b-0'>
            <input className='w-full text-center text-[#6F5B35] text-[20px] focus:outline-none' type="number" value={1} readOnly />
          </div>
          <button className="py-1 px-4 text-lg font-bold w-9" data-skip="1">+</button>
        </div>
      </div>
      <div className="h-full text-xl lg:w-1/7 flex items-end flex-col">
        <button><HiOutlineTrash/></button>
      </div>
    </div>
  );
};
