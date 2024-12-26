import { motion } from "framer-motion";
import React, { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { products } from "../assets/data/data";
import { OrdersCard } from "../components/Cards/OrdersCard";
import { TrackCard } from "../components/Cards/TrackCard";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import AboutImage from '../assets/images/AboutImage.png'
import { slideAnimation } from "../config/motion";


export const AccountPage = () => {
  const [tabs, setTabs] = useState("Contact Us");

  return (
    <section className="lg:py-6 py-16 sm:px-12 px-1 text-headerText relative">
      <motion.div
            {...slideAnimation('left',"",'',-1)}
            className="lg:hidden block w-[160px] h-[150px] absolute top-2 -left-20 transform -scale-x-100 rotate-[-55deg]">
                <img className="object-cover w-full  filter brightness-0 invert-[0.5] sepia-[1] saturate-[3] hue-rotate-[30deg] opacity-50" src={AboutImage} alt="About" />
            </motion.div>
            
      <motion.h1 className="text-4xl py-3 font-bonaNova lg:text-start text-center">
        {tabs}
      </motion.h1>
      <div className="flex min-h-[53vh] lg:my-20 my-7 gap-10">
        <motion.div className="lg:flex hidden flex-col h-[53vh] w-1/5 justify-between rounded-s-md bg-headerBg ">
          <button
            onClick={() => setTabs("My Account")}
            className={` flex-1 text-2xl font-baskervville px-5 items-center flex ${
              tabs === "My Account" ? "bg-white italic px-6 " : ""
            }`}
          >
            My Profile
          </button>

          <button
            onClick={() => setTabs("My Orders")}
            className={` flex-1 text-2xl font-baskervville px-5 items-center flex ${
              tabs === "My Orders" ? "bg-white italic  px-6" : ""
            }`}
          >
            My Orders
          </button>
          <button
            onClick={() => setTabs("Track My Order")}
            className={` flex-1 text-2xl font-baskervville px-5 items-center flex ${
              tabs === "Track My Order" ? "bg-white italic px-6 " : ""
            }`}
          >
            Track My Order
          </button>
          <button
            onClick={() => setTabs("Contact Us")}
            className={` flex-1 text-2xl font-baskervville px-5 items-center flex ${
              tabs === "Contact Us" ? "bg-white italic px-6 " : ""
            }`}
          >
            Contact Us
          </button>
          <button
            onClick={() => setTabs("FAQs")}
            className={` flex-1 text-2xl font-baskervville px-5 items-center flex ${
              tabs === "FAQs" ? "bg-white italic px-6 " : ""
            }`}
          >
            FAQs
          </button>
        </motion.div>
        <motion.div className="lg:w-4/5 w-full px-4">
          {tabs === "My Account" && <Profile />}
          {tabs === "My Orders" && <Orders />}
          {tabs === "Track My Order" && <Tracks />}
          {tabs === "Contact Us" && <Contact />}
        </motion.div>
      </div>
    </section>
  );
};

function Contact() {
  return (
    <div className="border-headerText border-2 lg:rounded-lg text-lg font-baskervville mx-1 py-10 h-full flex flex-col justify-between items-center gap-10" >
      <div className="flex flex-col items-center px-6">
        <h1 className="text-2xl italic">Head Office</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          
        </p>
      </div>
      <div className="flex flex-col items-center px-6">
        <h1 className="text-2xl italic">Email</h1>
        <p>chaiwaley123@gmail.com</p>
        <p>chaiwaley123@gmail.com</p>
      </div>
      <div className="flex flex-col items-center px-6">
        <h1 className="text-2xl italic">Contact Us</h1>
        <p>1234567890</p>
        <p>1234567890</p>
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl italic">Follow us on</h1>
        <div className="flex justify-around py-4">
          <FaInstagram/>
          <FaFacebook/>
          <FaTwitter/>
        </div>
      </div>
    </div>
  );
}
function Orders() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-14">
      {products.slice(0, 12).map((product) => (
        <OrdersCard product={product} key={product.id} />
      ))}
    </div>
  );
}
function Tracks() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-14">
      {products.slice(0, 11).map((product) => (
        <TrackCard product={product} key={product.id} />
      ))}
    </div>
  );
}

function Profile() {
  return (
    <motion.div className="relative border-headerText border-2 lg:rounded-lg text-lg font-baskervville mx-1 py-10 h-full">
      <div className=" absolute bg-headerText h-20 w-20 z-10 top-0 right-1/2 -translate-y-1/2 translate-x-1/2 rounded-full text-white flex justify-center items-center text-2xl italic overflow-hidden">
        <p>SM</p>
      </div>
      <button className="absolute right-0 top-0 text-2xl p-4">
        <BiEditAlt />
      </button>
      <div className="w-full h-full grid lg:grid-cols-2 my-5 lg:gap-x-28 lg:px-10 gap-y-10">
        <div className="flex lg:flex-col lg:justify-center justify-between lg:px-8 px-4 lg:items-start items-center">
          <h4 className="text-md font-RobotoFlex">Full Name</h4>
          <p className="text-xl italic text-[#0000009C]">Shilpa Mishra</p>
        </div>
        <div className="flex lg:flex-col lg:justify-center justify-between lg:px-8 px-4 lg:items-start items-center">
          <h4 className="text-md font-RobotoFlex">Phone number</h4>
          <p className="text-xl italic text-[#0000009C]">234124004</p>
        </div>
        <div className="flex lg:flex-col lg:justify-center justify-between lg:px-8 px-4 lg:items-start items-center">
          <h4 className="text-md font-RobotoFlex">Email</h4>
          <p className="text-xl italic text-[#0000009C]">shilpa123@gmail.com</p>
        </div>
        <div className="flex lg:flex-col lg:justify-center justify-between lg:px-8 px-4 lg:items-start items-center ">
          <h4 className="text-md font-RobotoFlex">Delivery Address</h4>
          <p className="text-xl italic text-[#0000009C] lg:max-w-fit max-w-[40%] text-end lg:text-start">
            123 Maple Avenue Albany, NY 12207
          </p>
        </div>
      </div>
    </motion.div>
  );
}
