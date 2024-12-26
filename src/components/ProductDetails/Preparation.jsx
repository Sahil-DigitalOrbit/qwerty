import React from 'react';
import ReviewImg from '../../assets/images/ReviewImg.png'

function Preparation() {
    return (
        <div className='relative bg-[#FFF5E7] lg:my-20 lg:py-20 my-10 py-10 '>
          <div className='max-w-[1200px] m-auto flex flex-col items-center gap-4 lg:block'>
            <h4 className='font-[400] text-[20px] md:text-[28px] lg:text-[35px] text-[#6F5B35] mb-10 font-bonaNova'>Preparation Method</h4>
            <div className='flex flex-col items-start lg:flex-row gap-10'>
              <div className='w-64 h-64 lg:w-[374px] lg:h-[328px] md:w-[400px] md:h-[400px] '>
                <img className='w-full h-full object-cover bg-cover' src='https://s3-alpha-sig.figma.com/img/2eb0/d928/6ab00ba9c8a9c7685abdcb568a9f1fe7?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l8WXE2~sFC9mfjUdwpvGMYGD5ueJH310Kljf0bLDuZtIRrb2GYdvLzmjjf~MkS3uXo-hdX-LID5SgZA7vaioX6k8OOA-CRDrK-HVOZ8kZMmlbDvoCi1d2bUcfn4y05fRCSnM1g~G2PL3vWRxZaxonsvqcjugVWLUOwNA5NrnziYJ5wVMFIqvdDUsus-0AoL~ke75R0A3T~4K7RCx8pcRMKLXm6P4ZrQE2PnH5K2q7dz~y35HBDap1uI99-B5ASe7Lb7V~IAzrSsLngtPkkTT5h5xXuDeiQxGvN7i5ZDpxM~dnbUO6F0CMfQzg9COyEZF4FfA9ZVp8Bpiv6Jpqg4gyg__' alt='Video Method' />
              </div>
              <div className='lg:space-y-10 lg:block flex flex-col items-center gap-8'>
                <div className='flex items-start lg:items-center gap-4'>
                  <div className='bg-[#D9D9D9] w-10 h-10'></div>
                  <div className='flex flex-col w-52 lg:w-auto'>
                    <p className='text-[#6F5B35] text-[14px] lg:text-[16px] font-[700] font-bonaNova'>Step 1</p>
                    <p className='text-[#6F5B35] text-[14px] lg:text-[16px] font-[400] font-RobotoFlex'>Rinse teapot with hot water.</p>
                  </div>
                </div>
                <div className='flex items-start lg:items-center gap-4'>
                  <div className='bg-[#D9D9D9] w-10 h-10'></div>
                  <div className='flex flex-col w-52 lg:w-auto' >
                    <p className='text-[#6F5B35] text-[14px] lg:text-[16px] font-[700] font-bonaNova'>Step 2</p>
                    <p className='text-[#6F5B35] text-[14px] lg:text-[16px] font-[400] font-RobotoFlex'>Add 1 teaspoon (1.5g) of tea per cup into the teapot.</p>
                  </div>
                </div>                
                <div className='flex items-start lg:items-center gap-4'>
                  <div className='bg-[#D9D9D9] w-10 h-10'></div>
                  <div className='flex flex-col w-52 lg:w-auto'>
                    <p className='text-[#6F5B35] text-[14px] lg:text-[16px] font-[700] font-bonaNova'>Step 3</p>
                    <p className='text-[#6F5B35] text-[14px] lg:text-[16px] font-[400] font-RobotoFlex'>Pour freshly boiled water into the teapot, cover, and brew for 3-5 minutes.</p>
                  </div>
                </div>
                <div className='flex items-start lg:items-center gap-4'>
                  <div className='bg-[#D9D9D9] w-10 h-10'></div>
                  <div className='flex flex-col w-52 lg:w-auto'>
                    <p className='text-[#6F5B35] text-[14px] lg:text-[16px] font-[700] font-bonaNova'>Step 4</p>
                    <p className='text-[#6F5B35] text-[14px] lg:text-[16px] font-[400] font-RobotoFlex'>Stir once before pouring and enjoy plain or add sugar, honey, or lemon to taste.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='hidden lg:block absolute -top-10 right-32 rotate-[60deg] w-[320px] h-[130px] '>
            <img className='w-full h-full object-cover bg-cover filter brightness-0 invert-[0.4] sepia-[2] saturate-[1] hue-rotate-[30deg] opacity-90' src={ReviewImg} alt="Leaf Image" />
          </div>
          <div className='hidden lg:block absolute top-20 -right-20 rotate-[110deg] w-[410px] h-[170px]'>
            <img className='w-full h-full object-cover bg-cover filter brightness-0 invert-[0.4] sepia-[2] saturate-[1] hue-rotate-[30deg] opacity-90' src={ReviewImg} alt="Leaf Image" />
          </div>
        </div>
    )
}

export default Preparation