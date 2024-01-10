import React from "react";
import Main from "./Components/Main/Main";
import FilteredProducts from "./Components/FilteredProducts/FilteredProducts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProduct from "./Components/FilteredProducts/SingleProduct";
import Login from "./Components/Login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/filteredProducts/:type"
            element={<FilteredProducts />}
          />
          <Route
            path="/filteredProducts/:type/:id"
            element={<SingleProduct />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
