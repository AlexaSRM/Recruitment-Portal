import React from "react";
import { PopupButton } from "@typeform/embed-react";
import Link from "next/link";
function Navbar() {
  return (
    <div className="flex lg:justify-between justify-start px-4 md:px-10 lg:px-16 py-10 items-center">
      <div>
        <picture>
          <img src="/alexa.svg" alt="" />
        </picture>
      </div>
      <div className="lg:flex hidden text-2xl myFont font-semibold items-center">
        <Link href="#domains">
          <div className=" mr-16  cursor-pointer">Domains</div>
        </Link>
        <Link href="#roadmap">
          <div className=" mr-16 cursor-pointer">Roadmap</div>
        </Link>
        <div className=" cursor-pointer hover:bg-white hover:text-[#01002D] duration-150 border-white border-4 p-2 px-6 rounded-xl">
          <PopupButton
            id=""
            style={{ fontSize: 20 }}
            className="my-button"
          >
            Register Now
          </PopupButton>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
