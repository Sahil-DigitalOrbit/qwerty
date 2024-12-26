import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";

function Footer() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (index) => {
    setActiveSection((prev) => (prev === index ? null : index));
  };

  return (
    <footer className="bg-[#FFF7DF] py-10">
      <div className="max-w-[1200px] m-auto grid lg:grid-cols-5 lg:space-x-10 px-4 md:px-8 lg:px-0 footer">
        {/* Left Section */}
        <div className="lg:block flex items-start justify-between gap-10">
          <div className="space-y-4">
            <h4 className="italic text-[#6F5B35] font-baskervville text-[26px] md:text-[30px] lg:text-[45px] font-[400]">
              Lets Get In Touch
            </h4>
            <p className="text-[17px] font-RobotoFlex font-[300] text-[#6F5B35]">
              Sign up for our newsletter and receive 10% off your order
            </p>
            <div className="flex items-center bg-white border border-[#6F5B35] rounded">
              <MdOutlineEmail className="mx-2 text-[#6F5B35] w-7 h-6" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full outline-none text-sm text-[#6F5B357D]"
              />
              <button className="bg-[#6F5B35] text-white px-4 py-2">➔</button>
            </div>
          </div>
          <div className="lg:hidden flex items-center gap-4 mt-6 ">
            <Link to={"/"} className="text-[#6F5B35]">
              <FaFacebook className="w-5 h-5" />
            </Link>
            <Link to={"/"} className="text-[#6F5B35]">
              <FaInstagram className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Important Links */}
        <div className="lg:mt-0 mt-10 lg:border-none border-b border-[#3B3B3B40]">
          <div onClick={() => toggleSection("important")} className="lg:block  flex items-center justify-between mb-3 cursor-pointer">
            <h4 className="text-[#6F5B35] text-[24px] font-baskervville">Important Links</h4>
            <IoIosArrowUp className={`lg:hidden text-[#7A6442] text-[26px] ${activeSection === "important" ? "rotate-0" : "rotate-180"}`}/>
          </div>
          <ul className={`lg:block space-y-4 text-[15px] text-[#6F5B35] font-RobotoFlex font-[600] ${activeSection === "important" ? "block" : "hidden"} mb-4 lg:mb-0`}>
            <li>Track Orders</li>
            <li>Our Story</li>
            <li>FAQs</li>
            <li>Terms of Service</li>
            <li>Refund Policy</li>
          </ul>
        </div>

        {/* Information */}
        <div className="mt-4 lg:mt-0 lg:border-none border-b border-[#3B3B3B40]">
          <div onClick={() => toggleSection("information")} className="lg:block flex items-center justify-between mb-3 cursor-pointer">
            <h4 className="text-[#6F5B35] text-[24px] font-baskervville">Information</h4>
            <IoIosArrowUp className={`lg:hidden text-[#7A6442] text-[26px] ${activeSection === "information" ? "rotate-0" : "rotate-180"}`}/>
          </div>
          <ul className={`lg:block space-y-4 text-[15px] text-[#6F5B35] font-RobotoFlex font-[600] ${activeSection === "information" ? "block" : "hidden"} mb-4 lg:mb-0`}>
            <li>Return and Exchange</li>
            <li>Shipping & Delivery</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="mt-4 lg:mt-0 lg:border-none border-b border-[#3B3B3B40]">
          <div onClick={() => toggleSection("contact")} className="lg:block flex items-center justify-between mb-3 cursor-pointer">
            <h4 className="text-[#6F5B35] text-[24px] font-baskervville">Contact</h4>
            <IoIosArrowUp className={`lg:hidden text-[#7A6442] text-[26px] ${activeSection === "contact" ? "rotate-0" : "rotate-180"}`}/>
          </div>
          <div className={`lg:block space-y-4 text-[15px] text-[#6F5B35] font-RobotoFlex font-[600] ${activeSection === "contact" ? "block" : "hidden"} mb-4 lg:mb-0`}>
            <p className="text-[15px] text-[#6F5B35] font-[600]">
              REGD. OFFICE <br /> CHANAWALA TEA CO. PVT. LTD
            </p>
            <p className="text-[15px] mt-3 text-[#6F5B35] font-[600]">
              Pahari Mata Call, Behind Agarsen Temple Khalpara <br /> Siliguri,
              Darjeeling
            </p>
            <p className="text-[#6F5B35] mt-3 font-[600] mb-4 lg:mb-0">
              1800-545-1927
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="hidden lg:flex flex-col items-center gap-4">
          <p className="text-[#6F5B35] text-[24px] font-baskervville overflow-hidden">Follow Us</p>
          <div className="flex flex-col items-center font-RobotoFlex gap-4">
            <Link to={"/"} className="text-[#6F5B35]">
              <FaFacebook className="w-5 h-5" />
            </Link>
            <Link to={"/"} className="text-[#6F5B35]">
              <FaInstagram className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
