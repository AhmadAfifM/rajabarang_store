import React from "react";
import { Routes, Route } from "react-router-dom";

// Css
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Navbar from "./components/Navbar";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default";
import Details from "./components/Details";
import ProductList from "./components/ProductList";
import Modal from "./components/Modal";

function App() {
  return (
    <React.Fragment>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<ProductList />} />
        <Route path="/details" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Default />} />
      </Routes>
      <Modal />
    </React.Fragment>
  );
}

export default App;
