import React from "react";
import logo from "../../assests/images/logo.png";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="">
      <div className="flex items-center justify-center">
        <hr className="h-px w-4/5 bg-gray-400 opacity-400 outline-none border-none" />
      </div>
      <div className="flex  items-center justify-around pt-4">
        <div>
          <img className="h-20" src={logo} alt="logo" />
        </div>
        <div>
          <p className="text-black text-sm font-inter no-underline normal-case">
            Copright {year} page by dinthi Web Dev
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
