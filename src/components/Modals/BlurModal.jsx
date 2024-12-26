import React, { useContext } from "react";
import { context } from "../../context/context";

export const BlurModal = () => {
  const { setModal, setCart, setLoginModel, setMobileMenu, setExploreModel, setFilter  } = useContext(context);

  function clicked() {
    setModal(false);
    setCart(false);
    setLoginModel(false);
    setMobileMenu(false)
    setExploreModel(false)
    setFilter(false)
  }

  return (  
    <div onClick={clicked}  className="z-30 fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center"/>
  );
};
