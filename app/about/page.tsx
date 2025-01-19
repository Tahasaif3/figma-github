import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import { TbTruckDelivery } from "react-icons/tb";

function About() {
  return (
    <div className="bg-[#FFFFFF]">
      <Navbar></Navbar>
      <div className="flex flex-col lg:flex-row gap-5 justify-center items-center p-5">
        <div className="lg:w-[672px] w-full mt-[50px] lg:mt-[200px] px-[20px] lg:px-[54px] py-[64px] bg-[#007580] text-[#F9F9F9]">
          <div className="lg:w-[495px] gap-3 mb-[20px]">
            <h1 className="text-[24px] lg:text-[32px] font-bold leading-[38.73px] text-black">
              About Us - Comforty
            </h1>
            <p className="text-[14px] lg:text-[16px] text-black">
              At Comforty, we believe that the right chair can transform your
              space and elevate your comfort. Specializing in ergonomic design,
              premium materials, and modern aesthetics, we craft chairs that
              seamlessly blend style with functionality.
            </p>
          </div>
          <button className="w-full lg:w-[179px] h-[56px] mt-[20px] lg:mt-[149px] py-[16px] px-[32px] text-[16px] leading-6 text-[#F9F9F9] bg-[#23838b] rounded">
            View collection
          </button>
        </div>
        <div className="bg-blue-300 mt-[50px] lg:mt-[178px] w-full lg:w-auto flex justify-center">
          <Image
            src="/Images/image1.png"
            alt="chair"
            width={500}
            height={560}
            className="lg:w-[450px] lg:h-[480px]"
          />
        </div>
      </div>

      <div className="w-full mt-[50px] lg:mt-[150px] text-center">
        <h1 className="font-semibold text-[24px] lg:text-[32px] leading-[35.5px] text-black">
          What makes our Brand Different
        </h1>
      </div>
      <div className="w-full px-4">
        <div className="flex flex-wrap justify-center gap-6 mt-[30px] lg:mt-[100px]">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-full sm:w-[309px] p-6 flex flex-col gap-[10px] bg-[#F9F9F9] text-center lg:text-left"
            >
              <TbTruckDelivery className="text-[#007580] w-6 h-6 mx-auto lg:mx-0" />
              <h1 className="text-[18px] lg:text-[20px] leading-[28px] text-[#007580]">
                Next day as standard
              </h1>
              <p className="text-[14px] lg:text-[16px] leading-6 text-[#007580]">
                Order before 3pm and get your order the next day as standard
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full mt-[50px] lg:mt-[150px] text-center">
        <h1 className="font-semibold text-[24px] lg:text-[32px] text-black">
          Our Popular Products
        </h1>
        <div className="flex flex-wrap justify-center gap-4 mt-[30px] lg:mt-[100px] px-4">
          <div className="flex flex-col gap-4 w-full sm:w-[630px]">
            <Image
              src="/Images/Large1.png"
              alt="large image"
              width={630}
              height={375}
              className="w-full"
            />
            <div className="flex flex-col text-center">
              <h1 className="text-black">The Poplar suede sofa</h1>
              <p className="text-black">$99.00</p>
            </div>
          </div>
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex flex-col gap-4 w-full sm:w-[305px]">
              <Image
                src={`/Images/Large${i + 2}.png`}
                alt="large image"
                width={305}
                height={375}
                className="w-full"
              />
              <div className="flex flex-col text-center">
                <h1 className="text-black">The Poplar suede sofa</h1>
                <p className="text-black">$99.00</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default About;
