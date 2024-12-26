import React, { useContext } from 'react'
import banner from '../../assets/images/banner.jfif';
import LeafImg from '../../assets/images/Leaf.png'
import MobBannerImg from '../../assets/images/MobBannerImg.png'
import { context } from '../../context/context';


function Banner() {
    const { setExploreModel, setModal } = useContext(context);

    return (
        <div>
            <div className='hidden md:block relative h-[800px] w-full'> 
                <img className='w-full h-full object-cover bg-no-repeat bg-cover' src={banner} alt='Website Banner' />
                <div className='absolute top-[160px] left-16 text-white space-y-6'>
                    <h4 className='text-[50px] font-baskervville font-[400]'>
                        Fresh From Our <span className='italic'>tea<br/> Gardens</span> to your cup
                    </h4>
                    <p className='text-[17px font-RobotoFlex font-[300] w-[450px] flex-wrap'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo enim sit amet magna semper lacinia. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo enim sit amet.
                    </p>
                    <button onClick={() => {setExploreModel(true); setModal(true)}} className='border font-RobotoFlex rounded-sm py-2 px-8 font-[600] text-[18px]'>
                        Explore
                    </button>
                </div>
            </div>
            {/* Mobile Banner */}
            <div className='md:hidden block bg-[#DF8D42] relative overflow-hidden'>
                <div className='relative flex flex-col items-center justify-center py-10'>
                    <div className='absolute w-[140px] h-[200px] top-20 right-10'>
                        <img className='w-full h-full bg-cover rotate-[110deg] transform -scale-y-100 filter brightness-0 invert-[0.7] sepia-[1] saturate-[3] hue-rotate-[30deg] opacity-40' src={LeafImg} alt='Leaf Image'/>
                    </div>
                    <div className='absolute w-[140px] h-[200px] bottom-0 left-2'>
                        <img className='w-full h-full bg-cover rotate-[25deg] transform -scale-y-100 filter brightness-0 invert-[0.7] sepia-[1] saturate-[3] hue-rotate-[30deg] opacity-40' src={LeafImg} alt='Leaf Image'/>
                    </div>
                    <h4 className='text-white text-[35px] font-[400] text-center z-10 w-[320px] font-baskervville'>
                        Fresh From Our <span className='italic'>Tea Gardens</span> To Your Cup
                    </h4>
                    <div className='w-[350px] h-[240px] z-10'>
                        <img className='w-full h-full bg-cover object-cover' src={MobBannerImg} alt='Mobile Banner Image'/>
                    </div>
                    <button onClick={() => {setExploreModel(true); setModal(true)}} className='border font-RobotoFlex border-white rounded py-2 px-6 font-[600] text-[14px] text-center text-white z-10'>
                        Explore
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Banner