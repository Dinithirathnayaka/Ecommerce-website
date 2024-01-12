import React from "react";
import Main from "./Components/Main/Main";
import FilteredProducts from "./Components/FilteredProducts/FilteredProducts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProduct from "./Components/FilteredProducts/SingleProduct";
import Login from "./Components/Login/Login";
import { useSelector } from "react-redux";
import Contact from "./Components/Contact/Contact";
import { NotificationsMenu } from "./Components/FilteredProducts/test";

function App() {
  const user = useSelector((state) => state.user.user);
  const { authUser } = user;
  console.log("user", user);
  console.log("authUser", authUser);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={authUser ? <Main /> : <Login />} />

          <Route
            path="/filteredProducts/:type"
            element={<FilteredProducts />}
          />
          <Route
            path="/filteredProducts/:type/:id"
            element={<SingleProduct />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
