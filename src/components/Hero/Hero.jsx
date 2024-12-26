import React, {useCallback, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";



const Carousel = ({product}) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [zoomImageCordinate, setZoomImageCordinate] = useState({ x: 0, y: 0 });
    const [zoomImage, setZoomImage] = useState(false);

    // Zoom in Image 
    const handleZoomImage = useCallback((e) => {
      setZoomImage(true);
      const { left, top, width, height } = e.target.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      setZoomImageCordinate({ x, y });
    }, []);
  
    // Zoom out Image
    const handleLeaveZoomImage = () => {
        setZoomImage(false);
    };


    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? (product.image).length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === (product.image).length - 1 ? 0 : prevIndex + 1
        );
    };    

    return (
        <div className="">
            <div className='flex flex-col md:flex-row-reverse lg:flex-col items-center md:items-start justify-start gap-10'>
                <div className='relative w-[303px] h-[360px] md:w-[564px] md:h-[658px]'>
                    <img className='relative w-full h-full bg-cover object-cover'  src={product.image[currentIndex]} alt={`Slide ${currentIndex + 1}`} 
                    onMouseMove={handleZoomImage} onMouseLeave={handleLeaveZoomImage} 
                    />
                    { currentIndex < product.image.length - 1 &&  (
                        <button onClick={handleNext} className='md:hidden absolute top-[50%] right-0 text-[30px] text-white'><IoIosArrowForward /></button>
                    )}
                    {currentIndex > 0 && (  
                        <button onClick={handlePrev} className='md:hidden absolute top-[50%] left-0 text-[30px] text-white rotate-180'><IoIosArrowForward /></button>
                    )}
                    {/* Zoom Image */}
                    {zoomImage && (
                        <div className='absolute top-80 w-[320px] h-[400px] lg:left-[550px] lg:top-10 lg:w-[600px] lg:h-[600px] overflow-hidden rounded-sm z-10'>
                            <div className='w-full h-full object-cover transform-gpu transition-[background-position,background-size] duration-200 ease-linear' 
                            style={{backgroundImage: `url(${product.image[currentIndex]})`, 
                                backgroundPosition: `${zoomImageCordinate.x * 100}% ${zoomImageCordinate.y * 100}%`}}>
                            </div>
                        </div>
                    )}
                </div>
                {/* Windows only */}
                <div className='hidden md:flex md:flex-col lg:flex-row w-[120px] h-[108px] md:w-[140px] md:h-[150px] items-center gap-4'>
                    {product.image.map((img, index) => (
                        <img key={index} className='w-full h-full object-cover bg-cover' src={img} alt={`${product.name} thumbnail ${index + 1}`}/>
                    ))}
                </div>
            </div>
            {/* Dots */}
            <div className="md:hidden flex justify-center space-x-2 mt-2">
                {product.image.map((_, index) => (
                <button  key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? "bg-[#3B3B3BAB]" : "bg-[#D9D9D9]"}`}>
                </button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
