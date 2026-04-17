import React from "react";
import { Hero } from "../sections/Hero";
import { Products } from "../sections/Products";
import { About } from "../sections/About";
import { Builds } from "../sections/Builds";
import { Pricing } from "../sections/Pricing";
import { Contact } from "../sections/Contact";
import { Services } from "../sections/Services";

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Products />
      <Pricing />
      <Contact />
    </>
  );
}
