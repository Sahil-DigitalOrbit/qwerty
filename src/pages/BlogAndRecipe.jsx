import React, { useState } from 'react'
import BlogSection from '../components/BlogSection';
import RecipeSection from '../components/RecipeSection';

function BlogAndRecipe() {
    const [activeTab, setActiveTab] = useState('blogs');

    return (
        <section className='max-w-[1200px] mx-auto mt-10 mb-40'>
            <div className='flex flex-col items-center gap-10 mb-20'>
                <h1 className='text-[30px] md:text-[40px] lg:text-[50px] text-headerText font-[400] font-baskervville'>
                    Blogs & Recipes 
                </h1>
                <div className='flex items-center border border-headerText w-[300px] md:w-[420px] lg:w-[540px] h-8 md:h-10 lg:h-12 flex-wrap text-center'>
                    <button onClick={() => setActiveTab('blogs')} 
                        className={`w-1/2 h-full text-center text-[14px] md:text-[16px] lg:text-[18px] ${activeTab === 'blogs' ? "bg-headerText text-white text-[18px] md:text-[22px] lg:text-[24px]" : 'text-headerText'}`}
                    >
                        Blogs
                    </button>
                    <button onClick={() => setActiveTab('recipes')} 
                        className={`w-1/2 h-full text-center text-[14px] md:text-[16px] lg:text-[18px] ${activeTab === 'recipes' ? "bg-headerText text-white text-[18px] md:text-[22px] lg:text-[24px]" : 'text-headerText'}`}
                    > 
                        Recipe
                    </button>
                </div>
            </div>
            <div>
                {activeTab === 'blogs' ? <BlogSection /> : <RecipeSection />}
            </div>
        </section>
    )
}

export default BlogAndRecipe