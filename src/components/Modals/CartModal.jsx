import React, { useContext, useEffect } from "react";
import { products } from "../../assets";
import { CartCard } from ".././Cards//CartCard";
import { AnimatePresence, motion } from "framer-motion";
import { slideAnimation } from "../../config/motion";
import { context } from "../../context/context";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

export const CartModal = () => {
  const { model, setModal, setCart } = useContext(context);

  function close() {
    setModal(false);
    setCart(false);
  }

  return (
    <AnimatePresence>
      <motion.div
        {...slideAnimation("right")}
        className="z-50 fixed top-0 right-0 lg:w-2/5 w-[90%] md:w-3/5 opacity-90 bg-white h-screen flex flex-col justify-between text-headerText font-bonaNova"
      >
        <h1 className="text-4xl px-5 bg-headerBg py-3 flex justify-between">
          Cart{" "}
          <button onClick={close}>
              <AiOutlineClose className="w-9 h-9 font-RobotoFlex" />
          </button>
        </h1>
        <div className="h-[60vh] overflow-y-scroll overflow-x-hidden scrollbar-thin px-5">
          {products.slice(0, 4).map((item) => (
            <CartCard item={item} key={item.id} />
          ))}
        </div>
        <div className="bg-headerBg flex flex-col gap-3 p-4 h-[40vh] font-RobotoFlex text-[16px] lg:font-normal">
          <div className="flex justify-between  ">
            <p>Subtotal</p>
            <p className="cart-items-total">Rs. 199.99</p>
          </div>
          <div className="flex justify-between  ">
            <p className="flex flex-col lg:flex-row">Estimated Delivery & <span>Handling</span></p>
            <p>Rs. 300</p>
          </div>
          <div>10% Discount</div>
          <div className="flex justify-between border-t-[1px] border-headerText">
            <p className="mt-2">Total</p>
            <p className="mt-2">Rs. 499.99</p>
          </div>
          <div className="flex flex-col items-center justify-center  gap-4 ">
            <button className=" bg-headerText text-white py-2 w-full rounded-md">
              Checkout
            </button>
            <Link onClick={close} className="font-[500] font-RobotoFlex text-[14px] md:text-[18px] text-center text-headerText underline" to={'/cart'}>
              View Cart
            </Link>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
