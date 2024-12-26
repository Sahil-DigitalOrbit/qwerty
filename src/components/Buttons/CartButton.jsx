import React from "react";

export const CartButton = ({ item, styles }) => {
  return <button className={styles+' border-none bg-headerText font-RobotoFlex text-white p-1 rounded-md lg:text-md text-sm'}>Add to Cart</button>;
};
