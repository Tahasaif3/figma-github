import Categories from "@/components/Categories";
import Categories2 from "@/components/Categories2";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import React from "react";

function page() {
  return (
    <div className="bg-[#FFFFFF]">
      <Navbar />
      <Hero />
      <Features />
      <Categories />
      <Categories2 />
      <Products />
      <Footer />
    </div>
  );
}

export default page;
