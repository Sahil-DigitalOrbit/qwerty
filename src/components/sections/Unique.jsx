import React from 'react';
import UniqueCard from '../Cards/UniqueCard';
import { uniqueProduct } from '../../assets/data/data';

function Unique() {
  return (
    <section className="max-w-[1200px] m-auto my-20 md:my-40 px-4 md:px-8 lg:px-0 unique">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6 md:mb-10">
        <h4 className="text-[#6F5B35] font-baskervville font-[400] text-[26px] text-center md:text-left md:text-[30px] lg:text-[45px] w-full md:w-auto">
          Our Unique Tea Blends
        </h4>
        <p className="text-[#6F5B35] font-RobotoFlex font-[500] underline text-[20px] hidden md:block cursor-pointer">
          View All
        </p>
      </div>
      <div className="relative">
        <div className="overflow-x-auto whitespace-nowrap scrollbar">
          <div className='flex items-center justify-between gap-4 md:gap-20 lg:gap-10'>
            {uniqueProduct.map((product) => (
                <UniqueCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Unique;
