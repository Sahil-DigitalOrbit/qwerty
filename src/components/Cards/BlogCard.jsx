import React from 'react';

function BlogCard({blog}) {
  return (
    <div className='lg:flex items-center justify-between gap-8'>
        <div key={blog.id} className='flex flex-col items-center justify-between gap-1'>
            <div className='lg:w-[350px] lg:h-[350px] md:w-[400px] md:h-[300px] w-[254px] h-[235px]'>
                <img className='w-full h-full object-cover bg-no-repeat bg-cover' src={blog.image} alt={blog.name} />
            </div>
            <div className='flex flex-col items-center justify-between gap-2'>
                <h4 className='text-[#6F5B35] font-baskervville font-[400] text-[30px] italic'>{blog.name}</h4>
                <p className='text-[#7D806A] font-RobotoFlex text-[17px] font-[400] text-center w-[300px]'>{blog.description}</p>
            </div>
            <button className='border border-[#2B4430C9] font-RobotoFlex py-2 px-6 rounded-md text-[#2B4430C9] font-[500] mb-14 lg:mb-0'>Read More</button>
        </div>
    </div>
  )
}

export default BlogCard