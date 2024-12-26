import React from 'react'
import Banner from '../components/Banner/Banner'
import BestSeller from '../components/sections/BestSeller'
import Categories from '../components/sections/Categories'
import Unique from '../components/sections/Unique'
import Features from '../components/sections/Features'
import About from '../components/sections/About'
import Services from '../components/sections/Services';
import Blog from '../components/sections/Blog'
import Recipe from '../components/sections/Recipe'


function Home() {

    return (
        <div className='overflow-hidden'>
            <Banner />
            <BestSeller heading='BEST SELLER'/>
            <Categories />
            <Unique />
            <Features />
            <About />
            <Services />
            <Recipe />
            <Blog />
        </div>
    )
}

export default Home;