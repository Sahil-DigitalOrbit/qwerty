import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { slideAnimation } from "../../config/motion";
import { AiOutlineClose } from "react-icons/ai";
import { context } from "../../context/context";
import { IoIosArrowDown } from "react-icons/io";

export const FilterModal = ({ setFilterApplied }) => {
  const { setModal, setFilter } = useContext(context);
  const [dropTab, setDropTab] = useState(false);
  let [newFilters, setNewFilters] = useState([]);

  function applyFilter() {
    setFilterApplied(newFilters);
    close();
  }

  function close() {
    setModal(false);
    setFilter(false);
  }

  function updateNewFilter( value) {
    let arr=newFilters.includes(value)?[...newFilters].filter(x=>x!==value):[...newFilters,value];
    setNewFilters(arr);
  }

  
  return (
    <motion.div
      {...slideAnimation("left")}
      className="z-50 lg:hidden fixed top-0 left-0 w-[90%] bg-headerBg h-screen flex flex-col text-headerText font-bonaNova"
    >
      <div className="text-4xl px-5 py-3 flex justify-between">
        <h1>Filter </h1>
        <button>
          <AiOutlineClose onClick={close} className="w-9 h-9 font-RobotoFlex" />
        </button>
      </div>
      <div className="border-r-2 overflow-hidden p-4 h-fit font-RobotoFlex">
        <div>
          <h5 className="my-7 flex items-center justify-between">
            <span>Weights</span>
            <button
              className={`cursor-pointer transition-all ${
                dropTab === "weight" ? "rotate-180" : ""
              } hover:scale-125`}
              onClick={() => {
                if (dropTab === "weight") setDropTab(false);
                else setDropTab("weight");
              }}
            >
              <IoIosArrowDown />
            </button>
          </h5>
          {dropTab == "weight" && (
            <motion.span
              className="homo-dropDown-weight my-2 flex flex-wrap overflow-hidden"
              initial={{ height: "0" }}
              whileInView={{ height: "auto" }}
              transition={{ ease: "easeIn", duration: 0.1 }}
            >
              {["1gm", "2gm", "4gm", "10gm"].map((weight) => (
                <button
                  key={weight}
                  value={weight}
                  className={`border w-1/3 text-base rounded-md m-1 p-1 border-headerText ${
                    newFilters.includes(weight)
                      ? "bg-headerText bg-opacity-30"
                      : ""
                  }`}
                  onClick={() => updateNewFilter(weight)}
                >
                  {weight}
                </button>
              ))}
            </motion.span>
          )}
        </div>

        {/* Brand Filter */}
        <div>
          <h5 className="my-7 flex items-center justify-between">
            <span>Category</span>
            <button
              className={`cursor-pointer transition-all ${
                dropTab === "category" ? "rotate-180" : ""
              } hover:scale-125`}
              onClick={() => {
                if (dropTab === "category") setDropTab(false);
                else setDropTab("category");
              }}
            >
              <IoIosArrowDown />
            </button>
          </h5>
          <span className="homo-dropDown-weight my-2"></span>
        </div>

        {/* Category Filter */}
        <div>
          <h5 className="my-7 flex items-center justify-between">
            <span>Container Type</span>
            <button
              className={`cursor-pointer transition-all ${
                dropTab === "container" ? "rotate-180" : ""
              } hover:scale-125`}
              onClick={() => {
                if (dropTab === "container") setDropTab(false);
                else setDropTab("container");
              }}
            >
              <IoIosArrowDown />
            </button>
          </h5>
          <span className="homo-dropDown-weight my-2"></span>
        </div>
        {/* Best Seller Filter */}
        <div>
          <h5 className="my-7 flex items-center justify-between">
            Best Sellers Products
          </h5>
          <span></span>
        </div>
        {/* Most Popular Filter */}
        <div>
          <h5 className="my-7">Most Popular</h5>
          <span></span>
        </div>
      </div>
      <div className="my-4 px-10">
        <button
          onClick={applyFilter}
          className="w-full border bg-headerText text-white py-2 text-lg rounded-lg"
        >
          Apply Filters
        </button>
      </div>
    </motion.div>
  );
};
