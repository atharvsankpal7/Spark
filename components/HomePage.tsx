"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import HeroSection from "./HeroSection";
import Services from "./Services";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Services />
    </>
  );
}
