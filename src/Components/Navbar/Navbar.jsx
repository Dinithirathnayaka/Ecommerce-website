import React, { useState } from "react";
import {
  MobileNav,
  Typography,
  IconButton,
  Tooltip,
  Avatar,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { filterProducts } from "../../features/slices/productsSlice";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../assests/images/logo.png";
import Cart from "../Cart/Cart";
import { logout } from "../../features/slices/authSlice";
import Marquee from "react-fast-marquee";

function Navbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const dispatch = useDispatch();
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const user = useSelector((state) => state.user.user);
  const { name, image } = user;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "Jeans",
    "Jackets",
    "Bags",
  ];

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <div>
      <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        {buttons.map((button, index) => {
          return (
            <Link to={"/filteredProducts/" + button} key={index}>
              <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
                onClick={() => dispatch(filterProducts(button))}
              >
                {button}
              </Typography>
            </Link>
          );
        })}
        <Link to="/salesection">
          <Typography
            as="li"
            variant="small"
            color="red"
            className="p-1 font-medium"
          >
            SALE
          </Typography>
        </Link>
      </ul>
    </div>
  );

  return (
    <div>
      <div className="bg-black p-2 w-full">
        <h3 className="text-white font-inter md:text-2xl text-xl tracking-normal leading-none font-bold text-center ">
          Welcome All
        </h3>
      </div>
      <div className="flex justify-around items-center w-full">
        <div>
          <img src={logo} alt="store" className="h-28 w-full" />
        </div>
        <div className="flex flex-row items-center">
          <div
            className="flex flex-row items-center cursor-pointer"
            onClick={handleOpen}
          >
            {totalAmount > 0 ? (
              <span className="rounded-full bg-gray-300 px-2 font-inter text-sm mr-1">
                {totalAmount}
              </span>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#000"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            )}

            <p className="font-inter md:text-base tracking-normal leading-none md:font-medium text-sm  text-center">
              Shopping bag
            </p>
            <div>{open && <Cart openModel={open} setOpen={setOpen} />}</div>
          </div>
          <div className="flex flex-row items-center cursor-pointer pl-4">
            {image && (
              <Avatar src={image} alt="avatar" size="sm" className="mr-2" />
            )}
            <div onClick={() => dispatch(logout())}>
              <Tooltip content="Sign Out" placement="bottom">
                <p className="font-inter text-sm font-medium tracking-normal leading-none">
                  Hi {name.charAt(0).toUpperCase() + name.slice(1)}
                </p>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>

      <IconButton
        variant="text"
        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
        ripple={false}
        onClick={() => setOpenNav(!openNav)}
      >
        {openNav ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </IconButton>
      <div className="hidden lg:flex  justify-around items-center w-full">
        {navList}
      </div>

      <MobileNav open={openNav}>
        <div className="container mx-auto">{navList}</div>
      </MobileNav>
      <div className="bg-black p-4 w-full ">
        <Marquee direction="left" speed={100}>
          <div className="text-white font-inter md:text-base text-sm tracking-normal leading-none font-medium font-sm text-center mx-60">
            50% OFF
          </div>
          <div className="text-white font-inter md:text-base text-sm tracking-normal leading-none font-medium font-sm text-center mx-60">
            Free shipping & returns
          </div>
          <div className="text-white font-inter md:text-base text-sm tracking-normal leading-none font-medium font-sm text-center mx-60">
            Different payment methods
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Navbar;
