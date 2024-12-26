import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeAnimation, slideAnimation } from '../../config/motion';
function Recipe() {
  return (
    <section>
      <div className="max-w-[1200px] my-20 mx-auto flex flex-col items-center justify-center gap-10 px-4 md:px-8 lg:px-0">
        <div className="bg-[#6D7E702B] text-[#817B75] font-bonaNova font-[500] md:py-2 md:px-8 md:text-[18px] py-1 px-4 text-[12px] md:w-28 lg:w-32 text-center">
          RECIPES
        </div>
        <div className="font-[400] font-baskervville text-[26px] md:text-[30px] lg:text-[45px] text-[#6F5B35] text-center md:text-start w-full md:w-auto mb-6 md:mb-0">
          <p>
            Brewer's Choice: <span className="italic">Favorite Tea Recipes</span>
          </p>
        </div>
        {/* Video main */}
        <div className="flex flex-col md:flex-row justify-start font-baskervville gap-4 w-full h-auto md:h-[400px] lg:h-[450px]">
            {/* 1st half div */}
            <motion.div {...slideAnimation('left')} className="bg-linear-dark w-full md:w-1/2 mb-4 md:mb-0 relative">
                <img className="w-full h-[250px] md:h-full object-cover"
                src="https://s3-alpha-sig.figma.com/img/5350/f557/b39e29ae74b97aaa7f68308fb3916748?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VteSwruCZE1FEV5DbXe6qMn7TbBw~-HXca1~82eT58oFlLJQ3ZET1a0f-a-h7BlHoZWnug61HG8utKTrEoXwT62qvFT0jfEpFS7CMtXzVHmi2ubR8pYWXNT9yyw8LJIv2Wsgb4vBRwnsoiiw1pq6qTo~ROskTN9y57596gFJIHwXuF1gM11YW82ZtoK3CkcSWTGoHHbNG9qcOMWBgglexdXrdElAdaKvpH33FbBgXl7YNjjBsc7XsDyI5CgkIFfG4nMU7YFVhf3JWjMh2dJIvzKvmAqKtqty0Vp-GFxLqXefmUwsKThYpa3sPRa1wDdJZ1qw7Jy8b0JYsa7Vug~E0A__"
                alt="Lemon ginger tea recipe"
                />
                <p className="absolute bottom-4 left-4 text-white font-[400] text-[16px] md:text-[20px] lg:text-[30px]">
                Lemon ginger tea <br /> recipe
                </p>
            </motion.div>
            {/* 2nd half div */}
            <div className="flex flex-col md:flex-row gap-4 md:w-1/2">
                {/* In 2nd half 1st half */}
                <motion.div {...fadeAnimation('1.2')} className="bg-linear-dark w-full relative">
                    <img className="w-full h-[250px] md:h-full object-cover"
                        src="https://s3-alpha-sig.figma.com/img/2eb0/d928/6ab00ba9c8a9c7685abdcb568a9f1fe7?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l8WXE2~sFC9mfjUdwpvGMYGD5ueJH310Kljf0bLDuZtIRrb2GYdvLzmjjf~MkS3uXo-hdX-LID5SgZA7vaioX6k8OOA-CRDrK-HVOZ8kZMmlbDvoCi1d2bUcfn4y05fRCSnM1g~G2PL3vWRxZaxonsvqcjugVWLUOwNA5NrnziYJ5wVMFIqvdDUsus-0AoL~ke75R0A3T~4K7RCx8pcRMKLXm6P4ZrQE2PnH5K2q7dz~y35HBDap1uI99-B5ASe7Lb7V~IAzrSsLngtPkkTT5h5xXuDeiQxGvN7i5ZDpxM~dnbUO6F0CMfQzg9COyEZF4FfA9ZVp8Bpiv6Jpqg4gyg__"
                        alt="Special Masala tea recipe"
                    />
                    <p className="absolute bottom-4 left-4 text-white font-[400] text-[16px] md:text-[20px] lg:text-[30px]">
                        Special Masala tea recipe
                    </p>
                </motion.div>
                {/* In 2nd half 2nd half */}
                <div className="hidden md:flex flex-col gap-4 w-1/2">
                    <motion.div {...slideAnimation('down')} className="h-[50%] relative">
                        <img className="w-full h-[165px] object-cover"
                        src="https://s3-alpha-sig.figma.com/img/17ea/1c8b/2c4a84386f70e06f89ef01e4d308f20b?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kavQXJCAZypgquihk~~wLykIAGIxmc~5KeNNDK88z3yE5IEP5ZfLAlqiPkd~amGJInee1GiwXBAgyzx8RGjgQGZ16QZQ6J17nqdXg8ISwAPSaQRwybXUBbTBvQvrmhCHXFeRQjB4fDT5u3KwGnb~3CS6FhLHmK1770KQ1I6pIw9k~znxOgM6HZQJ7fzF2FekiHsG~bKv8EUGxLMEQ8-kqyYudkGL5AHTN7VTz2PYZRj~K-C4y1WrobAjyNndAA~mGR8e3TW9a9hFvkfuFH4K~RXIU6zqKVrLavuNpagDSTmYAkDaesubsbjcKMtzJEFq2-P4TZmolJS0szLM1tqdCw__"
                        alt="Masala tea recipe"
                        />
                        <p className="absolute top-4 left-4 text-white font-[400] text-[16px] md:text-[20px] lg:text-[30px]">
                        Special Masala tea recipe
                        </p>
                    </motion.div>
                    <motion.div {...slideAnimation('up')} className="bg-[#FFF5E7] text-[#6F5B35] flex items-center justify-center text-center p-4 h-full">
                        <p className="text-[14px] md:text-[18px] lg:text-[22px]">
                            <Link className="underline">View all</Link> 50+ recipes
                            submitted by our happy customers
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Recipe;
