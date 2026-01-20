import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";
import "./App.css";

const App = () => {
  const navigate = useNavigate();
  const [showProducts, setShowProducts] = useState(false);

  const handleGetStarted = () => {
    setShowProducts(true);
    navigate("/plants");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="landing">
            <h1>Welcome to Paradise Nursery</h1>
            <button onClick={handleGetStarted}>Get Started</button>
          </div>
        }
      />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
};

export default App;
