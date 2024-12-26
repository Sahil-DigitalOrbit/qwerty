import React, { useContext, useEffect, useState } from 'react';
import logo from '../../assets/images/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { FaHeart, FaCartShopping } from "react-icons/fa6";
import { AiOutlineClose } from 'react-icons/ai';
import { LuMenu } from 'react-icons/lu';
import { context } from '../../context/context';
import { IoIosArrowUp, IoIosSearch } from 'react-icons/io';
import { menuAnimation } from '../../config/motion';
import { motion, AnimatePresence } from "framer-motion";


function Header() {
    const { setModal, setCart, setLoginModel, mobileMenu, setMobileMenu } = useContext(context);
    const [searchForm, setSearchForm] = useState(false);
    const [showNav, setShowNav] = useState(null);

    function showCart() {
      setModal(true);
      setCart(true);
      setMobileMenu(false);
    }

    function showMenu() {
        setMobileMenu(true);
        setModal(true);
    }

    function close(){
        setModal(false);
        setMobileMenu(false); 
    }

    function showSection(index) {
        setShowNav((prev) => (prev === index ? null : index))
    }

    useEffect(() => {
        document.body.style.overflow = (mobileMenu || searchForm) ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [mobileMenu, searchForm]);

    return (
        <header className={`bg-headerBg left-0 right-0 top-0 sticky z-30 ${mobileMenu || searchForm ? 'shadow-2xl z-50' : 'shadow-xl'} transition-shadow`}>
        <motion.div className='relative max-w-[1200px] mx-auto flex items-center justify-between px-4 md:px-0 header'>
                <Link to={'/'} className='text-[#6F5B35]'>
                    <img className='w-[120px] h-[80px] bg-cover filter brightness-0 invert-[0.2] sepia-[1] saturate-[3] hue-rotate-[30deg] opacity-100' src={logo} alt='Website Logo' />
                </Link>
                <div className='hidden md:block'>
                    <nav className='flex items-center justify-between gap-10 text-[#6F5B35] font-baskervville font-[400] text-[16px]'>
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'/products'}>Shop</NavLink>
                        <NavLink to={'/'}>About</NavLink>
                        <NavLink to={'/blogrecipe'}>Blog & Recipes</NavLink>
                        <NavLink to={'/'}>Contact</NavLink>
                    </nav>
                </div>
                <div className='hidden md:block'>
                    <div className='flex items-center justify-between cursor-pointer text-[#6F5B35] w-20 h-20'>
                        <IoSearch />
                        <NavLink to={'/wishlist'}><FaHeart /></NavLink>
                        <FaCartShopping onClick={showCart}/>
                    </div>
                </div>
                <div className='md:hidden block text-[#6F5B35]'>
                    <div className='flex items-center justify-between gap-6'>
                        { (!mobileMenu && !searchForm) ? (
                            <>
                                <button onClick={() => {setSearchForm(true); setModal(true)}} ><IoSearch  className='w-7 h-7'/></button>
                                <button onClick={showMenu}>
                                    <LuMenu className='w-7 h-7'/>
                                </button>
                            </>
                        ) : (
                            <button className='border-2 border-headerText p-1' onClick={() => {setMobileMenu(false); setSearchForm(false); setModal(false);}}>
                                <AiOutlineClose className='w-5 h-5' />
                            </button>
                        )}
                    </div>
                </div>
                <AnimatePresence>
                {
                    mobileMenu && (
                        <motion.div {...menuAnimation('right')}
                         className='z-40 absolute flex flex-col gap-2 px-10 top-full bottom-0 right-0 h-screen w-[63%] bg-headerBg'>
                            <NavLink onClick={close} className='text-[16px] text-headerText font-baskervville font-[600] border-b border-[#3B3B3B40] pt-10 pb-4' to={'/products'}>
                                Shop
                            </NavLink>
                            <div className='flex flex-col gap-2 border-b border-[#3B3B3B40] pt-2 pb-4'>
                                <button onClick={() => showSection('category')} className={`flex items-center justify-between`}>
                                    <div className='text-[16px] text-headerText font-baskervville font-[600]'>Category</div>
                                    <IoIosArrowUp className={`text-headerText w-5 h-5 ${showNav === 'category' ? '' : 'rotate-180'}`} />
                                </button>
                                <ul className={`flex flex-col gap-1 text-[14px] text-headerText font-baskervville font-[400] ${showNav === 'category' ? 'flex' : 'hidden'}`}>
                                    <li><NavLink onClick={close} to={'/'}>Herbal</NavLink></li>
                                    <li><NavLink onClick={close} to={'/'}>Assam Authentic</NavLink></li>
                                    <li><NavLink onClick={close} to={'/'}>Flavoured</NavLink></li>
                                    <li><NavLink onClick={close} to={'/'}>Category 4</NavLink></li>
                                    <li><NavLink onClick={close} to={'/'}>Category 5</NavLink></li>
                                </ul>
                            </div>
                            <NavLink to={'/blogrecipe'} onClick={close} className='text-[16px] text-headerText font-baskervville font-[600] border-b border-[#3B3B3B40] pt-2 pb-4'>
                                Blogs & Recipes
                            </NavLink>
                            <div className='flex flex-col gap-2 border-b border-[#3B3B3B40] pt-2 pb-4'>
                                <button  onClick={() => showSection('account')} className={`flex items-center justify-between`}>
                                    <div className='text-[16px] text-headerText font-baskervville font-[600]'>Account</div>
                                    <IoIosArrowUp className={`text-headerText w-5 h-5 ${showNav === 'account' ? '' : 'rotate-180'}`} />
                                </button>
                                <ul className={`flex flex-col gap-1 text-[14px] text-headerText font-baskervville font-[400] ${showNav === 'account' ? 'flex' : 'hidden'}`}>
                                    <li><NavLink onClick={close} to={'/'}>My Profile</NavLink></li>
                                    <li><NavLink onClick={close} to={'/'}>My Order</NavLink></li>
                                    <li><NavLink onClick={close} to={'/'}>Track my Order</NavLink></li>
                                    <li><NavLink onClick={close} to={'/'}>Contact Us</NavLink></li>
                                    <li><NavLink onClick={close} to={'/'}>FAQ</NavLink></li>
                                </ul>
                            </div>
                            <div className='flex items-center justify-between border-b border-[#3B3B3B40] pt-2 pb-4'>
                                <NavLink onClick={close} className='text-[16px] text-headerText font-baskervville font-[600]' to={'/wishlist'}>
                                    Wishlist
                                </NavLink>
                                <p className='text-white text-[14px] font-[400] font-RobotoFlex bg-headerText rounded-full px-2 py-0.5 text-center'>1</p>
                            </div>
                            <button onClick={showCart} className='flex items-center justify-between border-b border-[#3B3B3B40] pt-2 pb-4'>
                                <p className='text-[16px] text-headerText font-baskervville font-[600]'>Cart</p>
                                <p className='text-white text-[14px] font-[400] font-RobotoFlex bg-headerText rounded-full px-2 py-0.5 text-center'>1</p>
                            </button>
                            <button onClick={() => {setLoginModel(true); setMobileMenu(false); setModal(true)}} className='text-[16px] text-headerText font-baskervville font-[600] flex border-b border-[#3B3B3B40] pt-2 pb-4'>
                                Login
                            </button>
                        </motion.div>
                    )
                }
                </AnimatePresence>
                <AnimatePresence>
                {
                    searchForm && (
                        <motion.div {...menuAnimation('up')} className='fixed inset-0 z-40 top-20 pt-12  h-1/6 bg-headerBg shadow-2xl'>
                            <form className='relative max-w-[300px] mx-auto flex items-center'>
                                <IoIosSearch className='absolute left-3 text-headerText w-7 h-7' />
                                <input type="search" placeholder="Search..."
                                    className="w-full p-3 text-[12px] pl-12 text-headerText font-[400] border border-headerText rounded-lg outline-none placeholder:text-[12px] placeholder:text-headerText placeholder:font-RobotoFlex"
                                />
                            </form>
                        </motion.div>
                    )
                }
                </AnimatePresence>
            </motion.div>
        </header>
    )
}

export default Header
