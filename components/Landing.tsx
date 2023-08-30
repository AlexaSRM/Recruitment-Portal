import React from "react";
import Link from "next/link";
import { PopupButton } from "@typeform/embed-react";
function Landing() {
  return (
    <div className=" lg:ml-20 ml-4 lg:mt-32 lg:mb-56 mb-24">
      <div className="fold_chat md:hidden myFont border-[#29B6F6] text-[#29B6F6] border-2 w-2/3 text-center py-2 rounded-lg">
        <span className="text-xl ">Hey Alexa, are the recruitments open?</span>
      </div>
      <div className="md:hidden w-3/3 myFont text-right ml-20 mr-4 border-2 text-xl mt-4 p-4 rounded-lg mb-20">
        Yes! Fill the form and get a chance to join the voice that empowers the
        world!
      </div>
      <div className="md:text-7xl myFont  md:ml-2 lg:ml-0 flex lg:text-8xl text-5xl font-bold mb-4">
        {" "}
        <span className=" text-[#29B6F6] fold">Recruitments </span>{" "}
        <span className="hidden md:block"> &nbsp;&apos;23</span>
      </div>
      <div className="flex myFont md:hidden justify-end mr-4 text-8xl myFont font-semibold -mt-4 mb-4">
        &apos;23
      </div>
      <div className="md:ml-2 myFont text-md text-left max-w-xs md:text-2xl md:max-w-xl mb-6 ">
        The official developers&apos; club of Amazon Alexa at SRMIST is now open
        to recruiting first and second year students!{" "}
      </div>
      <div className="md:ml-2 flex space-x-2 md:space-x-6">
        <div className="fold_width border-4 cursor-pointer border-white myFont px-2 py-1 md:px-4 md:py-2 rounded-xl lg:rounded-lg font-bold bg-white text-[#01002D] md:text-xl">
          <PopupButton id="" className="my-button">
            Register Now
          </PopupButton>
        </div>
        <Link href="https://discord.gg/xjwpAvy94H">
          <div className="fold_width hover:bg-white hover:text-[#01002D] duration-150 border-white cursor-pointer border-4 px-2 py-1 myFont md:px-4 md:py-2 font-semibold rounded-xl lg:rounded-lg md:text-xl">
            Join Discord
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
