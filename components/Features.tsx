import React from "react";
import Image from "next/image";
import Link from "next/link";

function Features() {
  return (
    <div className="w-full sm:w-[1920px] h-auto flex flex-col gap-5 px-4 sm:px-[300px] ">
      <h1 className="text-black text-center sm:text-left text-[32px] leading-[35.2px] mt-5">
        Featured Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="w-full h-auto flex flex-col gap-3">
          <Image
            src="/Images/image1.png"
            alt="Library Stool Chair"
            width={312}
            height={312}
            className="rounded-md"
          />
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-[10px]">
              <h1 className="text-[#007580] text-[16px] leading-[20.8px]">
                Library Stool Chair
              </h1>
              <p className="text-black text-[18px] leading-[19.8px]">$20</p>
            </div>
            <div className="bg-[#F0F2F3] rounded-lg w-12 h-12 flex justify-center items-center hover:bg-[#029FAE]">
              <Image
                src="/Images/cart.png"
                alt="cart"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col gap-3">
          <Link href="/product1">
            <Image
              src="/Images/Image2.png"
              alt="Library Stool Chair"
              width={312}
              height={312}
              className="rounded-md"
            />
          </Link>
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-[10px]">
              <h1 className="text-[#007580] text-[16px] leading-[20.8px]">
                Library Stool Chair
              </h1>
              <div className="flex gap-1 items-center">
                <p className="text-[18px] leading-[19.8px]">$20</p>
                <s className="text-[14px] text-[#9A9CAA]">$39</s>
              </div>
            </div>
            <div className="bg-[#F0F2F3] rounded-lg w-12 h-12 flex justify-center items-center hover:bg-[#029FAE]">
              <Image
                src="/Images/cart.png"
                alt="cart"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col gap-3">
          <Image
            src="/Images/Image3.png"
            alt="Library Stool Chair"
            width={312}
            height={312}
            className="rounded-md"
          />
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-[10px]">
              <h1 className="text-[#007580] text-[16px] leading-[20.8px]">
                Library Stool Chair
              </h1>
              <p className="text-[18px] leading-[19.8px]">$20</p>
            </div>
            <div className="bg-[#F0F2F3] rounded-lg w-12 h-12 flex justify-center items-center hover:bg-[#029FAE]">
              <Image
                src="/Images/cart.png"
                alt="cart"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col gap-3">
          <Image
            src="/Images/Image4.png"
            alt="Library Stool Chair"
            width={312}
            height={312}
            className="rounded-md"
          />
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-[10px]">
              <h1 className="text-[#007580] text-[16px] leading-[20.8px]">
                Library Stool Chair
              </h1>
              <p className="text-black text-[18px] leading-[19.8px]">$20</p>
            </div>
            <div className="bg-[#F0F2F3] rounded-lg w-12 h-12 flex justify-center items-center hover:bg-[#029FAE]">
              <Image
                src="/Images/cart.png"
                alt="cart"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
