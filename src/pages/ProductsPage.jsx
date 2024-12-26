import React, { useContext, useEffect, useState } from "react";
import { products } from "../assets/data/data";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
} from "react-icons/io";
import { FaSliders } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import { TiArrowUnsorted } from "react-icons/ti";
import { ProductCard, FilterModal } from "../components";
import { context } from "../context/context";


const ProductsPage = () => {
  const [sort, setSort] = useState(false);
  const { filter, setFilter, setModal } = useContext(context);
  const [filterApplied, setFilterApplied] = useState([]);
  const [sortDirection, setSortDirection] = useState(false);

  function showFilterFunction() {
    setFilter(!filter);
    if (window.innerWidth < 1024) setModal(!filter);
  }

  function removeFilter(value) {
    setFilterApplied([...filterApplied.filter((curr) => curr !== value)]);
  }
  function removeAllFilterDirection(){
    setFilterApplied([]);
    setSortDirection(false);
  }

  return (
    <section className="max-w-[1200px] mx-auto mt-10 mb-20 lg:mb-40 md:px-8 px-4 lg:px-0 text-headerText space-y-10">
      {filter && <FilterModal setFilterApplied={setFilterApplied} />}
      <h1 className="text-center text-4xl font-baskervville py-3">
        Herbal Tea
      </h1>
      <div className="relative md:block hidden w-full h-[395px]">
        <img src="https://s3-alpha-sig.figma.com/img/b627/c589/b1fa4df9a602b29ded617de2e0478e41?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T1ZslKdlW~2MQpFh3PmSy8NYeadvUk~l3LUbvGbl9lBZ1Xe3D7cUJKFRMB6cqno04kY2h4ApqYpG9QDQgRUIhYPKeoyrePWJt9cNMmM-m9v-1kA8AOj8vWnDY4nVJx0mK~IyRRWgh1c4TsCF2fYmnxdBu0-TdQiemApRjxYH1m3a8dtZ28RdpIkKvLVTBs6XB9KLtbhczB9WLKL9lEkg-Zl6Sb~Ooo1KlQuU5oQz09ednBAyxyWejzCXv0RZ9anbJzuiJyxzQ1WlZia1x1bOaBLmym78PfwJ45T-eoMMOtbfVJrQpPz5LEBGxWuIQUHhO9KKBptgmNKvLRX2q2xoYQ__" alt="Shop Image"
        className="w-full h-full object-cover bg-cover"/>
        <h1 className="absolute bg-[#39111270] text-white text-[50px] font-[400] font-baskervville text-center top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]  w-[700px] ">
          Fresh from our <span className="italic">tea gardens</span> to your cup
        </h1>
      </div>
      <div className="font-RobotoFlex mt-10 lg:mx-auto mx-1 text-lg border-b-[1px] border-opacity-1 text-[#00000080]">
        <div className=" flex justify-between ">
          <button
            className="flex items-center gap-1 cursor-pointer"
            onClick={showFilterFunction}
          >
            <FaSliders />
            Filter By{" "}
            <span
              className={`transition-all lg:hover:scale-125 ${
                filter ? "rotate-180 scale-125" : ""
              }`}
            >
              <IoIosArrowForward />
            </span>
          </button>
          <span className={`flex lg:bg-white p-2 ${sort ? "bg-headerBg" : ""}`}>
            <motion.span layout className="flex items-center gap-1">
              <span className="lg:block hidden">Sort By</span>{" "}
              <span className="lg:hidden block">
                {sortDirection || "Sort By"}
              </span>
              <button
                onClick={() => setSort(!sort)}
                className={`lg:block hidden hover:scale-125 transition-all cursor-pointer ${
                  sort && "rotate-180"
                }`}
              >
                <IoIosArrowBack />
              </button>
              <button
                onClick={() => setSort(!sort)}
                className={`lg:hidden block transition-all cursor-pointer ${
                  sort && "rotate-180 scale-125"
                }`}
              >
                <IoIosArrowDown />
              </button>
            </motion.span>
            <AnimatePresence mode="popLayout">
              {sort && (
                <motion.div
                  initial={{ translateX: 100, overflow: "hidden", opacity: 0 }}
                  whileInView={{
                    translateX: 0,
                    overflow: "hidden",
                    opacity: 1,
                  }}
                  exit={{ translateX: 100, overflow: "hidden", opacity: 10 }}
                  transition={{ ease: "easeInOut", duration: 0.2 }}
                  className="lg:block hidden"
                >
                  <SortSection />
                </motion.div>
              )}
            </AnimatePresence>
          </span>
        </div>
        <div className="flex flex-wrap w-full justify-between lg:hidden relative">
          <div className="w-3/5 flex flex-wrap">
          {filterApplied.map((currFilter) => (
            <button
              onClick={() => removeFilter(currFilter)}
              className="border w-1/3 rounded-md m-1 p-1 border-headerText bg-headerText bg-opacity-30 flex justify-between px-2 text-base"
              key={currFilter}
            >
              <span>{currFilter}</span>
              <span>X</span>
            </button>
          ))}
          </div>
          <div>
          {(sortDirection || filterApplied.length!=0) && <button className="underline text-headerText text-end" onClick={removeAllFilterDirection}>
          Clear All
          </button>}
          </div>
          {sort && (
          <div className="lg:hidden block absolute w-full left-0 ">
            <SortSectionMobile
              setSortDirection={setSortDirection}
              setSort={setSort}
            />
          </div>
        )}
        </div>
        
        
      </div>
      <div className="flex">
        <AnimatePresence mode="wait">
          {filter && (
            <motion.div
              key="filter-section"
              initial={{
                translateX: -100,
                opacity: 0,
                overflow: "hidden",
                width: 0,
              }}
              animate={{ translateX: 0, opacity: 1, width: "12rem" }}
              exit={{
                translateX: -100,
                opacity: 0,
                overflow: "hidden",
                width: 0,
              }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              className="hidden lg:block z-10 bg-white bg-opacity-95"
            >
              <FilterSection />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence mode="sync">
          <motion.div
            initial={{ width: "100%" }}
            animate={{
              width: filter && window.innerWidth > 1024 ? "80%" : "100%",
            }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            className="flex flex-wrap lg:gap-20 gap-3 md:gap-10 m-auto mt-10 lg:p-4 justify-around"
          >
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
function SortSectionMobile({ setSortDirection, setSort }) {
  function updateDirection(value) {
    setSort(false);
    setSortDirection(value);
  }

  return (
    <div className="gap-2 font-RobotoFlex text-[#3B3B3BAB] bg-headerBg flex flex-col p-2">
      <button
        onClick={() => updateDirection("Price: High to Low")}
        className="p-2  text-sm text-start border-b"
      >
        Price: High to Low
      </button>
      <button
        onClick={() => updateDirection("Price: Low to High")}
        className="p-2 text-sm text-start border-b"
      >
        Price: Low to High
      </button>
      <button
        onClick={() => updateDirection("Added: Old to New")}
        className="p-2 text-sm text-start border-b"
      >
        Added: Old to New
      </button>
      <button
        onClick={() => updateDirection("Added: New to Old")}
        className="p-2 text-sm text-start border-b"
      >
        Added: New to Old
      </button>
      <button
        onClick={() => updateDirection("Popularity")}
        className="p-2 text-sm text-start border-b"
      >
        Popularity
      </button>
    </div>
  );
}

function SortSection() {
  return (
    <div className="flex gap-2 font-RobotoFlex">
      <button className="border-headerText border-[1px] py-1 flex items-center px-2 text-sm rounded-xl">
        Price
        <span>
          <TiArrowUnsorted />
        </span>
      </button>
      <button className="border-headerText border-[1px] py-1 flex items-center px-2 text-sm rounded-xl">
        Popularity
        <span>
          <TiArrowUnsorted />
        </span>
      </button>
      <button className="border-headerText border-[1px] py-1 flex items-center px-2 text-sm rounded-xl">
        Recently Added
        <span>
          <TiArrowUnsorted />
        </span>
      </button>
    </div>
  );
}

function FilterSection() {
  const [dropWeight, setDropWeight] = useState(false);
  const [dropBrands, setDropBrands] = useState(false);
  const [dropCategory, setDropCategory] = useState(false);
  return (
    <section className="border-r-2 overflow-hidden border-b-2 p-4 h-fit font-RobotoFlex">
      <div>
        <h5 className="my-7 flex items-center justify-between">
          <span>Weights</span>
          <button
            className={`cursor-pointer transition-all ${
              dropWeight ? "rotate-180" : ""
            } hover:scale-125`}
            onClick={() => setDropWeight(!dropWeight)}
          >
            <IoIosArrowDown />
          </button>
        </h5>
        {dropWeight && (
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
                className="border w-1/3 rounded-md m-1 p-1 hover:scale-105 hover:border-black"
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
          <span>Brand</span>
          <button
            className={`cursor-pointer transition-all ${
              dropBrands ? "rotate-180" : ""
            } hover:scale-125`}
            onClick={() => setDropBrands(!dropBrands)}
          >
            <IoIosArrowDown />
          </button>
        </h5>
        <span className="homo-dropDown-weight my-2"></span>
      </div>

      {/* Category Filter */}
      <div>
        <h5 className="my-7 flex items-center justify-between">
          <span>Category</span>
          <button
            className={`cursor-pointer transition-all ${
              dropCategory ? "rotate-180" : ""
            } hover:scale-125`}
            onClick={() => setDropCategory(!dropCategory)}
          >
            <IoIosArrowDown />
          </button>
        </h5>
        <span className="homo-dropDown-weight my-2"></span>
      </div>
      {/* Best Seller Filter */}
      <div>
        <h5 className="my-7 flex items-center justify-between">Best Sellers</h5>
        <span></span>
      </div>
      {/* Most Popular Filter */}
      <div>
        <h5 className="my-7">Most Popular</h5>
        <span></span>
      </div>
    </section>
  );
}

export default ProductsPage;
