import React from "react";
import { WishListCard } from "../components/Cards/WishListCard";
import { motion } from "framer-motion";
import { fadeAnimation } from "../config/motion";
import { products } from "../assets";
import BestSeller from "../components/sections/BestSeller";
export const WishlistPage = () => {
  return (
    <section className="max-w-[1200px] m-auto pt-10 mb-20 text-headerText lg:px-0 md:px-8 px-4 wishlist">
      <motion.h1
        {...fadeAnimation(0.3)}
        className="text-4xl py-3 font-bonaNova mb-10 md:mb-20"
      >
        WishList
      </motion.h1>
      <motion.div {...fadeAnimation(0.6)} className=" lg:flex">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-10 md:gap-16 lg:gap-28 lg:px-16 md:px-8 px-4">
          {products.slice(0, 4).map((item) => (
            <WishListCard product={item} key={item.id} />
          ))}
        </div>
        </motion.div>
      <BestSeller heading="You Might Also Like" />  
    </section>
  );
};
