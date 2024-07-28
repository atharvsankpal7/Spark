import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Highlight, HeroHighlight } from "./ui/hero-highlight";

interface Props {}

const HeroMain = () => {
  return (
    <div className="w-full gap-32 flex pt-16 ">
      <div className="hero-text w-1/3 pt-20 ">
        <h1 className="text-8xl mb-10 text-black">Digital Marketing</h1>
        <p className="my-4 text-l  text-slate-700">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. lljrem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when
        </p>
      </div>
      <div className="hero-image ">
        <Image
          src="/images/hero-img.png"
          alt="hero-image"
          width={700}
          height={500}
        />
      </div>
    </div>
  );
};

export default HeroMain;
