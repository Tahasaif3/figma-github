import React from "react";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa6";
import Link from "next/link";

function Navbar() {
  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-between items-center py-2 px-4 sm:px-12 lg:px-24 bg-[#272343]">
        <div className="flex gap-2 items-center opacity-70 text-white text-sm">
          <Image
            src="/Images/check1.png"
            alt="Shipping Icon"
            height={16}
            width={16}
            className="text-white"
          />
          <h1 className="text-black">Free shipping on all orders over $50</h1>
        </div>
        <div className="flex gap-4 items-center opacity-70 text-white text-sm">
          <div className="flex items-center gap-1">
            <span>Eng</span>
            <FaAngleDown className="w-4 h-4" />
          </div>
          <Link href="/faq">Faqs</Link>
          <div className="flex items-center gap-2">
            <Image
              src="/Images/alert-circle.png"
              alt="alert circle"
              height={16}
              width={16}
            />
            <span>Need Help</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center py-4 px-4 sm:px-12 lg:px-24 bg-[#F0F2F3]">
        <div className="flex items-center gap-2">
          <Image src="/Images/Logoicon.png" alt="logo" width={40} height={40} />
          <h1 className="text-black text-lg sm:text-xl font-medium">Comforty</h1>
        </div>
        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg">
          <Link href="/cart" className="flex items-center gap-2">
            <Image
              src="/Images/cart.png"
              alt="cart image"
              height={22}
              width={22}
            />
            <span className="text-sm font-medium text-[#272343]">Cart</span>
          </Link>
          <Image src="/Images/No.png" alt="Number" height={20} width={20} />
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-center py-4 px-4 sm:px-12 lg:px-24 bg-white shadow">
        <div className="flex flex-wrap gap-4 text-sm">
          <Link href="/" className="font-medium hover:text-[#007580] text-black">
            Home
          </Link>
          <Link href="/shop" className="font-medium hover:text-[#007580] text-black">
            Shop
          </Link>
          <Link href="/product" className="font-medium hover:text-[#007580] text-black">
            Product
          </Link>
          <Link href="/pages" className="font-medium hover:text-[#007580] text-black">
            Pages
          </Link>
          <Link href="/about" className="font-medium hover:text-[#007580] text-black">
            About
          </Link>
        </div>
        <Link href="/contact">
          <div className="flex gap-2 text-sm">
            <span className="text-gray-500 ">Contact:</span>
            <span className="text-[#272343]">(808) 555-0111</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
