import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Button } from "@material-tailwind/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
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

function FilteredProducts() {
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
      <div className="pt-16">
        <div className="pl-14">
          <h1 className="md:text-3xl text-2xl font-inter text-gray-600 font-bold tracking-normal leading-none">
            {type}
          </h1>

          <div className="flex items-center justify-end py-8 mx-5">
            <div className="flex">
              <Menu className="right-0">
                <MenuHandler>
                  <IconButton variant="text">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
                      />
                    </svg>
                  </IconButton>
                </MenuHandler>
                <MenuList className="flex flex-col gap-2">
                  {genderButtons.map((item, index) => {
                    return (
                      <MenuItem
                        className="flex items-center gap-4 py-2 pl-2 pr-8"
                        onClick={() => dispatch(filterGender(item))}
                      >
                        <div className="flex flex-col gap-1">
                          <Typography
                            variant="small"
                            color="gray"
                            className="font-semibold"
                          >
                            {item}
                          </Typography>
                        </div>
                      </MenuItem>
                    );
                  })}

                  <MenuItem
                    className="flex items-center gap-4 py-2 pl-2 pr-8"
                    onClick={() => dispatch(sortByPrice())}
                  >
                    <div className="flex flex-col gap-1">
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-semibold"
                      >
                        High Price
                      </Typography>
                    </div>
                  </MenuItem>

                  <Menu
                    placement="right-start"
                    open={openMenuColor}
                    handler={setOpenMenuColor}
                    allowHover
                    offset={15}
                  >
                    <MenuHandler className="flex items-center justify-between">
                      <MenuItem>
                        Select a Color
                        <ChevronUpIcon
                          strokeWidth={2.5}
                          className={`h-3.5 w-3.5 transition-transform ${
                            openMenuColor ? "rotate-90" : ""
                          }`}
                        />
                      </MenuItem>
                    </MenuHandler>
                    <MenuList>
                      {colorButtons.map((item, index) => {
                        return (
                          <MenuItem
                            style={{ color: item }}
                            key={index}
                            onClick={() => dispatch(filterByColor(item))}
                          >
                            {item}
                          </MenuItem>
                        );
                      })}
                    </MenuList>
                  </Menu>
                  <Menu
                    placement="right-start"
                    open={openMenuSize}
                    handler={setOpenMenuSize}
                    allowHover
                    offset={15}
                  >
                    <MenuHandler className="flex items-center justify-between">
                      <MenuItem
                        disabled={type === "Bags" || type === "Shoes"}
                        className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                      >
                        Select a Size
                        <ChevronUpIcon
                          strokeWidth={2.5}
                          className={`h-3.5 w-3.5 transition-transform ${
                            openMenuSize ? "rotate-90" : ""
                          }`}
                        />
                      </MenuItem>
                    </MenuHandler>
                    <MenuList>
                      {sizeButtons.map((item, index) => {
                        return (
                          <MenuItem
                            key={index}
                            onClick={() => dispatch(filterBySize(item))}
                          >
                            {item}
                          </MenuItem>
                        );
                      })}
                    </MenuList>
                  </Menu>
                  <Menu
                    placement="right-start"
                    open={openMenuShoeSize}
                    handler={setOpenMenuShoeSize}
                    allowHover
                    offset={15}
                  >
                    <MenuHandler className="flex items-center justify-between">
                      <MenuItem
                        disabled={
                          type === "Bags" ||
                          type === "Hoodies" ||
                          type === "Dresses" ||
                          type === "Suits" ||
                          type === "T-Shirts" ||
                          type === "Jeans" ||
                          type === "Jackets"
                        }
                        className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                      >
                        Select a Shoe Size
                        <ChevronUpIcon
                          strokeWidth={2.5}
                          className={`h-3.5 w-3.5 transition-transform ${
                            openMenuShoeSize ? "rotate-90" : ""
                          }`}
                        />
                      </MenuItem>
                    </MenuHandler>
                    <MenuList>
                      {shoesizeButtons.map((item, index) => {
                        return (
                          <MenuItem
                            key={index}
                            onClick={() => dispatch(filterByShoeSize(item))}
                          >
                            {item}
                          </MenuItem>
                        );
                      })}
                    </MenuList>
                  </Menu>
                  <MenuItem
                    className="flex items-center gap-4 py-2 pl-2 pr-8 "
                    onClick={() => dispatch(filterProducts(type))}
                  >
                    <div className="flex flex-col gap-1">
                      <Typography
                        variant="small"
                        color="red"
                        className="font-semibold"
                      >
                        Clear Filter
                      </Typography>
                    </div>
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
          </div>
        </div>
        {error ? (
          <Error />
        ) : (
          <div className="grid grid-cols-1 justify-items-center py-8 gap-4 mx-auto md:grid-cols-2 lg:grid-cols-3  md:max-w-7xl">
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
      </div>
      <Footer />
    </div>
  );
}

export default FilteredProducts;
