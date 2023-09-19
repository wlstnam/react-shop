import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProductsList from "./components/ProductsList";
import ProductDetail from "./components/ProductDetail";
import "./App.css";
import Cart from "./components/Cart";

function Header() {
  return (
    <div className="bg-gray-400 text-white p-4 flex justify-between items-center">
      <h1 className="text-3xl">
        <Link to="/">Shop</Link>
      </h1>
      <Login />
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Cart />
      <Router>
        <Header />
        <div className="mx-auto container flex justify-center items-center mt-12">
          <Routes>
            <Route path="/" element={<ProductsList category="all" />} />
            <Route path="/category/:categoryName" element={<ProductsList />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
