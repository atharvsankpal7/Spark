import Image from "next/image";
import React from "react";
import { Button } from "./ui/moving-border";

interface Props {}

const NavBar = () => {
  return (
    <div className=" flex  items-center mt-3">
      <Image src="/images/logo.png" alt="logo" width={100} height={100} />
      <ul className="bg-white text-black flex items-center justify-evenly w-1/2 m-auto py-4 px-10 rounded-full nav-text text-lg ">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Gallery</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default NavBar;
