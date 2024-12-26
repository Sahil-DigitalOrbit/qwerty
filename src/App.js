import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductDetail from './pages/ProductDetail';
import { CartPage } from './pages/CartPage';
import ProductsPage from './pages/ProductsPage';
import { BlurModal } from './components/Modals/BlurModal';
import { CartModal } from './components/Modals/CartModal';
import { context } from './context/context';
import { WishlistPage } from './pages/WishlistPage';
import PageNotFound from './pages/PageNotFound';
import BlogAndRecipe from './pages/BlogAndRecipe';
import { LoginModel } from './components/Modals/LoginModel';
import { ExploreModel } from './components/Modals/ExploreModel';
import { AccountPage } from './pages/AccountPage';


function App() {
  const { cart, modal, loginModel, exploreModel } = useContext(context);

  return (
    <BrowserRouter>
      <Header />
      {modal && <BlurModal />}
      {cart && <CartModal />}
      {exploreModel && <ExploreModel />}
      {loginModel && <LoginModel />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:productId' element={<ProductDetail />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/wishlist' element={<WishlistPage />} />
        <Route path='/accounts' element={<AccountPage />} >
          
        </Route>
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/blogrecipe' element={<BlogAndRecipe />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
