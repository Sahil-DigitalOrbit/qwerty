import React from "react";
import { FaRegHeart } from "react-icons/fa6";

export const WishlistButton = ({ item, styles }) => {
  return (
    <button className={styles+" flex items-center justify-center border-headerText text-headerText border-2 rounded-sm lg:text-md text-sm"}>
      <FaRegHeart/>
    </button>
  );
};
