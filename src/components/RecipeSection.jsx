import React from 'react'
import { IoTriangleOutline } from "react-icons/io5";


function RecipeSection() {
    return (
        <section>
            <div>
                <h2 className="text-[24px] md:text-[30px] text-headerText font-[400] font-baskervville text-center lg:text-start mb-8 lg:mb-4">Delightful Recipes</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 w-[90%] md:w-[80%] mx-auto lg:w-full">
                    {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="flex flex-col items-center gap-4">
                        <div className="relative w-[90%] md:w-[80%] mx-auto lg:w-full">
                            <div className='h-[250px] md:h-[380px] lg:h-[420px]'>
                                <img src="https://s3-alpha-sig.figma.com/img/5350/f557/b39e29ae74b97aaa7f68308fb3916748?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bCXXaSGaOZYfTjxsJH9W4840wb6f5fEIhkOmH783xuOmOuwGyoWbZlckz~wk6ldnsNVr2u0ERmtTEnHuRt4OKi50eZqnZ906hzm3CPtEMhNq0GHqhXWwsbkwHZOdLWrldUCYnTJSOOoHBj-qPo5dtfXZyFGM0NZ~s-2wqcJ1lR0KGj8ImTglXvJyMrfdMOpWF~MJAQEzrta9bVj~1d3wwbrFvPM-1bcbAfsa0D078q06KEnhOTb~vxMUi7S79Gw~-ORtlxqy-gHi8Ye9PLfIyJkNR8OFxQWQ9rIsthQJ8jAERi1oSUu-j~W2u~X3qcMN2ENuNQ8yly-a2G0ohIsGHg__"
                                    alt={`Recipe ${item}`}
                                    className="w-full h-full object-cover bg-cover"
                                />
                            </div>
                            <button className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                                <IoTriangleOutline className='rotate-90 w-10 h-10 border border-black rounded-full p-2 overflow-visible' />
                            </button>
                        </div>
                        <div className='w-[80%] md:w-[60%] lg:w-[330px] flex flex-col items-center gap-3 lg:gap-2'>
                            <h3 className="text-[30px] text-headerText italic font-[400] font-baskervville text-center">
                                Recipe {item}
                            </h3>
                            <p className="text-[14px] md:text-[17px] text-[#7D806A] font-[300] font-RobotoFlex text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur adipiscing elit.
                            </p>
                            <button className="mx-auto px-6 py-2 text-sm border border-[#7D806A] text-[#2B4430C9] text-[18px] font-RobotoFlex font-[600] rounded">
                                Read More
                            </button>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default RecipeSection