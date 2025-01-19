import React from "react";
import Image from "next/image";

function Categories() {
  return (
    <div className="w-full max-w-[1920px] mt-[200px] flex flex-col gap-7">
      <h1 className="text-black ml-12 sm:ml-[300px] font-bold text-[32px] w-full sm:w-[237px] h-[35px] leading-[35.2px]">
        Top categories
      </h1>
      <div className="flex flex-col sm:flex-row ml-0 sm:ml-[300px] gap-9">
        <div className="relative w-full sm:w-[424px] h-[424px]">
          <Image
            src="/Images/Image5.png"
            alt="chair"
            layout="fill"
            className="rounded-[10px]"
          />

          <div className="absolute bottom-0 w-full sm:w-[424px] h-[85px] p-5 rounded-br-[10px] rounded-bl-[10px] flex flex-col justify-between items-center gap-2 bg-[#000000] bg-opacity-[70%]">
            <h1 className="text-[#FFFFFF] text-[20px] leading-[22px] w-full sm:w-[384px] h-[22px]">
              Wing Chair
            </h1>
            <p className="text-[14px] text-[#FFFFFF] leading-[15.4px] text-opacity-[70%] w-full sm:w-[376px] h-[15px]">
              3,584 Products
            </p>
          </div>
        </div>
        <div className="relative w-full sm:w-[424px] h-[424px]">
          <Image
            src="/Images/Image6.png"
            alt="chair"
            layout="fill"
            className="rounded-[10px]"
          />
          <div className="absolute bottom-0 w-full sm:w-[424px] h-[85px] p-5 rounded-br-[10px] rounded-bl-[10px] flex flex-col justify-between items-center gap-2 bg-[#000000] bg-opacity-[70%]">
            <h1 className="text-[#FFFFFF] text-[20px] leading-[22px] w-full sm:w-[384px] h-[22px]">
              Wooden Chair
            </h1>
            <p className="text-[14px] text-[#FFFFFF] leading-[15.4px] text-opacity-[70%] w-full sm:w-[376px] h-[15px]">
              157 Products
            </p>
          </div>
        </div>
        <div className="relative w-full sm:w-[424px] h-[424px]">
          <Image
            src="/Images/Image7.png"
            alt="chair"
            layout="fill"
            className="rounded-[10px]"
          />
          <div className="absolute bottom-0 w-full sm:w-[424px] h-[85px] p-5 rounded-br-[10px] rounded-bl-[10px] flex flex-col justify-between items-center gap-2 bg-[#000000] bg-opacity-[70%]">
            <h1 className="text-[#FFFFFF] text-[20px] leading-[22px] w-full sm:w-[384px] h-[22px]">
              Desk Chair
            </h1>
            <p className="text-[14px] text-[#FFFFFF] leading-[15.4px] text-opacity-[70%] w-full sm:w-[376px] h-[15px]">
              154 Products
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
