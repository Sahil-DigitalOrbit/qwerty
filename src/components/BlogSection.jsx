import React from 'react'

function BlogSection() {
    return (
    <section className='max-w-[1200px] mx-auto flex flex-col gap-20'>
        <div className="my-6">
            <h2 className="text-[24px] md:text-[26px] lg:text-[30px] font-baskervville font-[400] text-headerText mb-8 lg:mb-4 text-center lg:text-start">Blog of the Week</h2>
            <div className="flex flex-col items-center lg:items-start lg:flex-row w-full h-[480px]">
                <div className='w-3/4 lg:w-1/2 h-full'>
                    <img src="https://s3-alpha-sig.figma.com/img/1b96/b31a/a36d54925fe7e8ab7af4226043a1f32b?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L7vhOU7kegDRPTC3ysKhyJVo696zILpws1GORb~x~SCu0ISgVqyu-bBs-drF3rKXMvWCRIrEz9qM387aZUtnuBnEL6-Ubbco9fd0n0mNPHShx2SdgHmEEkP7kg7jdjNx3gRLFaWx9Lr3aGDloQO78ucr5zqWn09AcZRxdKzoYgCQPNEhc8IBcjumsqFU42vOri3SPyDYa44XLvk67fH6GZP7Z7c9StKNTQeCi1NMC3EtuRzroosiDKsPqpeVpwwcvHJ~wFaX7iGaZBFenmvsS00Is02ldCl3tnulaHADMw0WDFFW9~RwFnRr3NcFrPRDjO5RBydw0Uz-VGk~In3rNw__"
                        alt="Blog of the Week"
                        className="w-full h-full object-cover bg-cover"
                    />
                </div>
                <div className="flex flex-col justify-between w-3/4 h-full lg:w-1/2 border-2 lg:border-t-2 border-t-0 lg:border-l-0 border-headerText py-10 px-4">
                    <h3 className="text-[30px] md:text-[45px] italic text-headerText font-baskervville font-[400] mb-10 md:mb-0">Blog Title</h3>
                    <div className='flex-2 space-y-6'>
                        <p className="text-[14px] md:text-[17px] text-headerText font-RobotoFlex font-[300]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        In commodo enim sit amet magna semper lacinia.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        In commodo enim sit amet.
                        </p>
                        <button className="text-[15px] md:text-[18px] font-[600] font-RobotoFlex text-headerText rounded border border-headerText py-2 px-6">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-80 lg:mt-0'>
            <h2 className="text-[24px] md:text-[26px] lg:text-[30px] font-[400] text-headerText font-baskervville text-center lg:text-start mb-8 lg:mb-4">Explore More -<span className='italic'>All About Tea</span></h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-32">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className='flex flex-col items-center lg:items-start gap-2'>
                            <div className='w-[315px] h-[310px] md:w-[500px] md:h-[450px] lg:w-[315px] lg:h-[410px] mb-4'>
                                <img src="https://s3-alpha-sig.figma.com/img/773f/3bb2/180a62165e0ccf71066019be70eb3d17?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f7kXQCBT6g-wmpZrkr96n5HT9w~V7T~eQ6ZlFxUfPsoj9AjTIKdExNOn9p3DQ9sZTdFYgFeTFM~4978ghz5ow06tW20awyJMIFX0htkGpo2qYt-oBnq-Izw6uCzM5TWNH3F0OXkT6wkTBSvqlXtgQCA95xJCTZBFk828yz7GLw41JrpcY9Z6FbWSsxaG1uT6TLSBDfkFLw5FzfzcYssmK2li81QAFowkIlK~xAjAYsMjmIaxrTb4atz1MrnoDm0793SFpruah5PpvQQKG-SYir4CPQECtjHu6tt7cIC40HpF1O5907n2S9UDJWQ1zZbd4i2EsBpBwBAuHFE79rCpTQ__"
                                    alt={`Blog ${item}`}
                                    className="w-full h-full object-cover bg-cover"
                                />
                            </div>
                            <h3 className="text-[24px] md:text-[30px] text-headerText font-[400] font-baskervville italic text-center mx-auto">Blog {item}</h3>
                            <p className="text-[14px] md:text-[17px] text-[#7D806A] font-[300] font-RobotoFlex text-center w-[300px] md:w-[400px] lg:w-[300px]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit..
                            </p>
                            <button className="px-6 py-2 mx-auto text-[15px] md:text-[18px] font-[600] font-RobotoFlex border border-[#2B4430C9] text-[#2B4430C9] rounded">
                                Read More
                            </button>
                        </div>
                    ))}
                </div>
        </div>
    </section>
    )
}

export default BlogSection