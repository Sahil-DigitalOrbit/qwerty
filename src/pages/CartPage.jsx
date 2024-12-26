import React from "react";
import { products } from "../assets/data/data";
import { CartCard } from "../components/Cards/CartCard";
import { motion } from "framer-motion";
import { fadeAnimation } from "../config/motion";
import BestSeller from "../components/sections/BestSeller";

export const CartPage = () => {
  return (
    <section className="max-w-[1200px] m-auto text-headerText cart">
      <motion.h1 {...fadeAnimation(0.3)} className="text-4xl py-3 font-bonaNova">
        Cart
      </motion.h1>
      <motion.div
      {...fadeAnimation(.6)}
      className=" lg:flex">
        <div className="lg:w-1/2 lg:h-[60vh] lg:overflow-y-scroll overflow-x-hidden scrollbar-thin ">
          {products.slice(0, 4).map((item) => (
            <CartCard item={item} key={item.id} />
          ))}
        </div>
        <div className="lg:w-1/2 font-semibold lg:border-l-2">
          <h1 className="text-4xl py-6 px-16 font-bonaNova">Order Summary</h1>
          <div className="flex justify-between py-3 px-4 lg:px-16 font-RobotoFlex">
            <p>Subtotal</p>
            <p className="cart-items-total">Rs. 199.99</p>
          </div>
          <div className="flex justify-between py-3 px-4 lg:px-16 font-RobotoFlex">
            <p>Estimated Delivery & Handling</p>
            <p>Rs. 300</p>
          </div>
          <div className="py-3 px-4 lg:px-16 font-RobotoFlex">10% Discount</div>
          <div className="flex justify-between py-8 border-t-2">
            <p className="px-4 lg:px-16 font-RobotoFlex">Total</p>
            <p className="px-4 lg:px-16 font-RobotoFlex">Rs. 499.99</p>
          </div>
          <div className="flex justify-center px-4 lg:px-0">
            <button className=" bg-headerText font-RobotoFlex text-white py-2 w-96 rounded-md">
              Checkout
            </button>
          </div>
        </div>
      </motion.div>
      <BestSeller heading='You Might Also Like' />
    </section>
  );
};
