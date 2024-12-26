import React, { useState } from "react";
import { context } from "./context.js";

const GlobalContext = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [cart, setCart] = useState(false);
  const [loginModel, setLoginModel] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [exploreModel, setExploreModel] = useState(false);
  const [filter, setFilter] = useState(false);
  const [accountPage, setAccountPage] = useState('My Account')


  return (
    <context.Provider 
      value={{ modal, setModal, cart, setCart, loginModel, setLoginModel, mobileMenu, setMobileMenu, exploreModel, setExploreModel, filter, setFilter }}>
      {children}
    </context.Provider>
  );
};

export default GlobalContext;
