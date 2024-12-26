import React, { useState } from 'react'
import { IoIosArrowUp } from 'react-icons/io';
import { products } from '../assets/data/data.js'
import { Link, useParams } from 'react-router-dom';
import { FaRegHeart, FaMinus, FaStar } from 'react-icons/fa';
import { LuLogOut } from 'react-icons/lu';
import { FaPlus } from "react-icons/fa6";
import Reviews from '../components/Reviews/Reviews';
import Preparation from '../components/ProductDetails/Preparation';
import HealthBenefits from '../components/ProductDetails/HealthBenefits';
import Hero from '../components/Hero/Hero';
import BestSeller from '../components/sections/BestSeller.jsx';


function ProductDetail() {
  const [activeSection, setActiveSection] = useState(null);
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("500 gms");
  const [selectedContainer, setSelectedContainer] = useState("");

  const toggleSection = (index) => {
    setActiveSection((prev) => (prev === index ? null : index));
  };

  const product = products.find((prod) => prod.id ===  Number(productId));
  
  const handleChangeQuantity = (change) => {
    setQuantity((prev) => {
      const newQuantity = prev + change;
      return newQuantity < 1 ? 1 : newQuantity;
    })
  }

  return (
    <section>
      <div className='my-10 overflow-hidden'>
        {/* Product Details */}
        <div className='hidden lg:block max-w-[1200px] m-auto my-10'>
          <h4 className='flex items-center text-[#6F5B35] text-[14px] font-[500] gap-1 '>
            <Link to={'/'}>Home</Link><p className='text-[20px]'>&#8250;</p><Link>{product.name}</Link>
          </h4>
        </div>
        <div className='max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-10 md:px-0 px-4'>
          <div className='lg:hidden flex items-center justify-between text-[#6F5B35] text-[14px] font-[500] underline'>
            <p><Link to={'/'}>Back</Link></p>
            <p><Link to={'/'}>Next</Link></p>
          </div>
          {/* Mobile Version */}
          <div className='block lg:hidden'>
            <div className='flex items-center justify-between'>
              <h4 className='text-[30px] md:text-[45px] text-[#6F5B35] font-[400]'>{product.name}</h4>
              <div className='flex items-center gap-2 mt-2'>
                <button><FaRegHeart className='w-4 h-4 md:w-6 md:h-6 text-[#6F5B35]'/></button>
                <button><LuLogOut className='rotate-[270deg] text-[#6F5B35] w-4 h-4 md:w-6 md:h-6' /></button>
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <p className='text-[#6F5B35] text-[20px] md:text-[35px] font-[400]'>Rs. {product.price}</p>
              <p className='flex items-center gap-2 text-[#6F5B35B8] text-[16px] font-[500]'><FaStar /> 4.3 | 25 Ratings</p>
            </div>
          </div>

          {/* Product Images */}
          <Hero product={product} />
          
          {/* Window */}
          <div className='hidden lg:flex flex-col gap-2 w-[440px]'>
            <div className='flex items-center justify-between'>
              <h4 className='text-[45px] text-[#6F5B35] font-[400]'>{product.name}</h4>
              <div className='flex items-center gap-2'>
                <button><FaRegHeart className='w-6 h-6 text-[#6F5B35] mt-2'/></button>
                <button><LuLogOut className='rotate-[270deg] text-[#6F5B35] w-6 h-6 mt-2' /></button>
              </div>
            </div>
            <div className='flex items-center justify-between border-b border-[#6F5B3566]'>
              <p className='text-[#6F5B35] text-[35px] font-[400]'>Rs. {product.price}</p>
              <p className='flex items-center gap-2 text-[#6F5B35B8] text-[16px] font-[500]'><FaStar /> 4.3 | 25 Ratings</p>
            </div>
            
            <div className='flex items-center justify-between md:my-4'>
                <div className='flex flex-col w-[208px] h-[52px] border border-[#6F5B3585] rounded-md'>
                  <select className='w-full h-full rounded-md text-[#6F5B35] text-[16px] focus:outline-none'
                  value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                    <option value="" disabled >Sizes</option>
                    <option value="250 gms">250 gms</option>
                    <option value="500 gms">500 gms</option>
                  </select>
                </div>
                <div className='flex flex-col w-[208px] h-[52px] border border-[#6F5B3585] rounded-md'>
                  <select className='w-full h-full rounded-md text-[#6F5B35] text-[16px] focus:outline-none'
                  value={selectedContainer} onChange={(e) => setSelectedContainer(e.target.value)}>
                    <option value="" disabled >Container Type</option>
                    <option value="Glass Jar">Glass Jar</option>
                    <option value="Paper Box">Paper Box</option>
                  </select>
                </div>
            </div>
            <div className='flex items-center justify-between border border-[#B4AA96] rounded-md w-[208px] h-[52px]'>
              <div className='border-r border-[#B4AA96] h-full flex items-center justify-center p-4'>
                <button onClick={() => handleChangeQuantity(-1)} className='text-[20px]' data-qnt="-1">
                  <FaMinus className='w-4 h-4 text-[#6F5B35]' />
                </button>
              </div>
              <div className='w-20'>
                <input className='w-full text-center text-[#6F5B35] text-[20px] focus:outline-none' type="number" value={quantity} readOnly />
              </div>
              <div className='border-l border-[#B4AA96] h-full flex items-center justify-center p-4'>
                <button onClick={() => handleChangeQuantity(1)} className='text-[20px]' data-qnt="1">
                  <FaPlus className='w-4 h-4 text-[#6F5B35]' />
                </button>
              </div>
            </div>
            <div className='flex items-center gap-10 w-[420px] h-[52px] my-10'>
              <button className='w-[45%] h-full border border-[#6F5B35] rounded-md text-white text-[18px] font-[500] bg-[#6F5B35]'>Add to Cart</button>
              <button className='w-[45%] h-full border border-[#6F5B35] rounded-md text-white text-[18px] font-[500] bg-[#6F5B35]'>Check Out</button>
            </div>

            <div className='flex flex-col gap-8 '>
              <div className='border-b border-[#6F5B3566] pb-4 w-full'>
                <div onClick={() => toggleSection("description")} className='flex items-center justify-between cursor-pointer'>
                  <h4 className='text-[#6F5B35] text-[16px] font-[500]'>
                    Product Description
                  </h4>
                  <IoIosArrowUp className={`text-[#7A6442] text-[26px] ${activeSection === "description" ? "rotate-0" : "rotate-180"}`}/>
                </div>
                <div className={`my-2 text-[#6F5B35] text-[14px] font-[400] ${activeSection === 'description' ? 'block' : 'hidden'}`}>
                  <p>{product.description}</p>
                </div>
              </div>
              <div className='border-b border-[#6F5B3566] pb-4 w-full'>
                <div onClick={() => toggleSection("ingredients")} className='flex items-center justify-between cursor-pointer w-full'>
                  <h4 className='text-[#6F5B35] text-[16px] font-[500]'>
                    Ingredients
                  </h4>
                  <IoIosArrowUp className={`text-[#7A6442] text-[26px] ${activeSection === "ingredients" ? "rotate-0" : "rotate-180"}`}/>
                </div>
              </div>
              <div className='border-b border-[#6F5B3566] pb-4 w-full'>
                <div onClick={() => toggleSection("shipping")} className='flex items-center justify-between cursor-pointer'>
                  <h4 className='text-[#6F5B35] text-[16px] font-[500]'>
                    Shipping Details
                  </h4>
                  <IoIosArrowUp className={`text-[#7A6442] text-[26px] ${activeSection === "shipping" ? "rotate-0" : "rotate-180"}`}/>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile */}
          <div className='block lg:hidden w-full space-y-6'>
            <div className='flex items-center gap-4 text-[16px]  '>
              <button onClick={() => setSelectedSize("500 gms")} 
                className={`border border-[#B4AA96] rounded-lg py-1 px-2 md:py-3 md:px-2 text-center text-[#6F5B35] w-1/2 ${selectedSize === "500 gms" ? "bg-[#6F5B35] text-white" : ""}`}
              >
                500 gms 
              </button>
              <button onClick={() => setSelectedSize("250 gms")} 
                className={`border border-[#B4AA96] rounded-lg py-1 px-2 md:py-3 md:px-2 text-center text-[#6F5B35] w-1/2 ${selectedSize === "250 gms" ? "bg-[#6F5B35] text-white" : ""}`}>
                250 gms
              </button>
            </div>
            <div className='flex items-center gap-4 w-full'> 
              <div className='border border-[#B4AA96] w-2/3 rounded-lg py-1 px-2 md:py-3 md:px-2'>
                <select className='w-full rounded-lg text-[#6F5B35] text-[16px] focus:outline-none'
                value={selectedContainer}  onChange={(e) => setSelectedContainer(e.target.value)}>
                  <option value="" disabled>Sizes</option>
                  <option value="Glass Jar">Glass Jar</option>
                  <option value="Paper Box">Paper Box</option>
                </select>
              </div>
              <div className='w-1/3 flex items-center justify-between border border-[#B4AA96] rounded-lg'>
                <div className='border-r w-full border-[#B4AA96] flex items-center justify-center md:py-[20px] md:px-[4px] py-[13px] px-2'>
                  <button onClick={() => handleChangeQuantity(-1)} className='text-[20px]' data-qnt="-1">
                    <FaMinus className='w-2 h-2 text-[#6F5B35]' />
                  </button>
                </div>
                <div className='md:w-20'>
                  <input className='w-full text-center text-[#6F5B35] text-[14px] md:text-[20px] focus:outline-none' type="number" value={quantity} readOnly />
                </div>
                <div className='border-l w-full border-[#B4AA96] flex items-center justify-center md:py-[20px] md:px-[4px] py-[13px] px-2'>
                  <button onClick={() => handleChangeQuantity(1)} className='text-[20px]' data-qnt="1">
                    <FaPlus className='w-2 h-2 text-[#6F5B35]' />
                  </button>
                </div>
              </div>
            </div>
            <button className='w-full py-2 md:py-3 rounded bg-[#6F5B35] border border-[#6F5B35] text-white font-[600] text-[16px] md:text-[20px] hover:bg-white hover:text-[#6F5B35]'>
              Add To Cart
            </button>
          </div>
          <div className='block lg:hidden'>
            <div className='w-full block'>
              <p className='font-[400] text-[18px] md:text-[26px] text-[#6F5B35] italic border-b border-[#3B3B3B29] py-2 md:py-4'>Description</p>
              <p className='font-[400] text-[14px] md:text-[20px] text-[#6F5B35] py-2'>{product.description}</p>
            </div>
            <div className='block space-y-4'>
              <div className='border-b border-[#3B3B3B29] py-2 md:py-4'> 
                <div onClick={() => toggleSection("ingredients")} className='flex items-center justify-between cursor-pointer'>
                  <h4 className='text-[#6F5B35] text-[16px] md:text-[24px] font-[500]'>
                    Ingredients
                  </h4>
                  <IoIosArrowUp className={`text-[#7A6442] text-[26px] ${activeSection === "ingredients" ? "rotate-0" : "rotate-180"}`}/>
                </div>
                <div className={`py-2 md:py-4 ${activeSection === 'ingredients' ? 'block' : 'hidden'}`}>
                  <p>dkfmskf</p>
                </div>
              </div>
              <div className='border-b border-[#3B3B3B29] py-2'> 
                <div onClick={() => toggleSection("preparation")} className='flex items-center justify-between cursor-pointer'>
                  <h4 className='text-[#6F5B35] text-[16px] md:text-[24px] font-[500]'>
                    Preparation Method
                  </h4>
                  <IoIosArrowUp className={`text-[#7A6442] text-[26px] ${activeSection === "preparation" ? "rotate-0" : "rotate-180"}`}/>
                </div>
                <div className={`py-2 ${activeSection === 'preparation' ? 'block' : 'hidden'}`}>
                  <Preparation />
                </div>
              </div>
              <div className='border-b border-[#3B3B3B29] py-2'> 
                <div onClick={() => toggleSection("health")} className='flex items-center justify-between cursor-pointer'>
                  <h4 className='text-[#6F5B35] text-[16px] md:text-[24px] font-[500]'>
                    Health Benefits
                  </h4>
                  <IoIosArrowUp className={`text-[#7A6442] text-[26px] ${activeSection === "health" ? "rotate-0" : "rotate-180"}`}/>
                </div>
                <div className={`py-2 ${activeSection === 'health' ? 'block' : 'hidden'}`}>
                  <HealthBenefits />
                </div>
              </div>
              <div className='border-b border-[#3B3B3B29] py-2'> 
                <div onClick={() => toggleSection("shipping")} className='flex items-center justify-between cursor-pointer'>
                  <h4 className='text-[#6F5B35] text-[16px] md:text-[24px] font-[500]'>
                    Shipping Details
                  </h4>
                  <IoIosArrowUp className={`text-[#7A6442] text-[26px] ${activeSection === "shipping" ? "rotate-0" : "rotate-180"}`}/>
                </div>
                <div className={`py-2 ${activeSection === 'shipping' ? 'block' : 'hidden'}`}>
                  <p></p>
                </div>
              </div>
              <div className='border-b border-[#3B3B3B29] py-2'> 
                <div onClick={() => toggleSection("review")} className='flex items-center justify-between cursor-pointer'>
                  <h4 className='text-[#6F5B35] text-[16px] md:text-[24px] font-[500]'>
                    Reviews and Ratings
                  </h4>
                  <IoIosArrowUp className={`text-[#7A6442] text-[26px] ${activeSection === "review" ? "rotate-0" : "rotate-180"}`}/>
                </div>
                <div className={`py-2 ${activeSection === 'review' ? 'block' : 'hidden'}`}>
                  <Reviews />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Preparation Method */}
        <div className='hidden lg:block'>
          <Preparation />
        </div>
        {/* Health Benefits */}
        <div className='hidden lg:block'>
          <HealthBenefits />
        </div>
        {/* Review */}
        <div className='hidden lg:block'>
          <Reviews />
        </div>
        {/* Related Product */}
        <BestSeller heading='Related Products' />
      </div>
    </section>
  )
}

export default ProductDetail;