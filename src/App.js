import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

// components
import Home from "./components/Home/";
import Category from "./components/Category/";
import SingleProduct from "./components/SingleProduct/";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Fav from "./components/Fav/Fav";
import Catalog from "./components/Catalog/Catalog";
import CatalogProduct from "./components/Catalog/CatalogProduct/CatalogProduct";
import CatalogFilter from "./components/Catalog/CatalogFilter";
import Order from "./components/Order";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/cart/" element={<Cart />} />
            <Route path="/order/" element={<Order />} />
            <Route path="/fav/" element={<Fav />} />
            <Route path="/catalog/" element={<Catalog />} />
            <Route path="/catalog/:id" element={<CatalogProduct />} />
            <Route
              path="/catalog/filter?/:filterId"
              element={<CatalogFilter />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
