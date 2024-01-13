import React from "react";
import logo from "../../assests/images/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="">
      <div className="flex items-center justify-center">
        <hr className="h-px w-4/5 bg-gray-400 opacity-400 outline-none border-none" />
      </div>

      <div className="flex  items-center justify-around ">
        <img className="h-20" src={logo} alt="logo" />
      </div>
      <div className="flex items-center justify-center">
        <FaFacebook className="m-2" />
        <FaTwitter className="m-2" />
        <FaInstagram className="m-2" />
      </div>
      <div className="flex  items-center justify-around ">
        <p className="text-black text-sm font-inter no-underline normal-case">
          Copright ©{year}.All Right Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
