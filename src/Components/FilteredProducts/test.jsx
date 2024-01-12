import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

import ProductCard from "./ProductCard";
import { Button } from "@material-tailwind/react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import Error from "../Error/Error";
import {
  filterGender,
  filterByColor,
  filterBySize,
  sortByPrice,
  filterProducts,
  filterByShoeSize,
} from "../../features/slices/productsSlice";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export function NotificationsMenu() {
  const products = useSelector((state) => state.products.filteredProducts);
  const error = useSelector((state) => state.products.error);
  const [openMenuColor, setOpenMenuColor] = React.useState(false);
  const [openMenuSize, setOpenMenuSize] = React.useState(false);
  const [openMenuShoeSize, setOpenMenuShoeSize] = React.useState(false);

  console.log("products", products);
  const { type } = useParams();
  const genderButtons = ["male", "female"];
  const colorButtons = [
    "red",
    "green",
    "purple",
    "yellow",
    "orange",
    "blue",
    "black",
    "brown",
  ];
  const sizeButtons = ["S", "M", "L", "XL"];
  const shoesizeButtons = ["36", "38", "40", "42", "44", "46"];
  const dispatch = useDispatch();

  return (
    <div>
      <Navbar />

      {error ? (
        <Error />
      ) : (
        <div className="grid grid-cols-1 justify-items-center py-8 gap-4 mx-auto md:grid-cols-3  md:max-w-7xl">
          {products
            .filter((product) => product.type === type)
            .map((product, index) => {
              return (
                <div key={index}>
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    text={product.text}
                    img={product.img}
                    price={product.price}
                    colors={product.color}
                  />
                </div>
              );
            })}
        </div>
      )}
      <Footer />
    </div>
  );
}
