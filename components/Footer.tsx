import React from "react";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaPinterest } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full h-auto bg-[#FFFFFF] mt-[20px] p-4">
      <div className="flex flex-wrap gap-10 justify-center md:justify-between mt-[70px]">
        <div className="flex flex-col w-full md:w-[350px] h-auto gap-6 items-center md:items-start">
          <div className="flex justify-center md:justify-start items-center gap-2">
            <Image
              src="/Images/Logoicon.png"
              alt="logo"
              width={40}
              height={40}
            />
            <h1 className="text-black text-[26px] font-medium">Comforty</h1>
          </div>
          <p className="text-[16px] text-[#272343] opacity-[60%] w-full md:w-[350px] text-center lg:text-left">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis
            interdum. Cras egestas purus.
          </p>
          <div className="flex gap-2 mt-2">
            <div className="w-8 h-8">
              <FaFacebook className="w-full h-full" />
            </div>
            <div className="w-8 h-8">
              <FaTwitter className="w-full h-full" />
            </div>
            <div className="w-8 h-8">
              <IoLogoInstagram className="w-full h-full" />
            </div>
            <div className="w-8 h-8">
              <FaPinterest className="w-full h-full" />
            </div>
            <div className="w-8 h-8">
              <FaYoutube className="w-full h-full" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-[105px] h-auto flex flex-col gap-5 mt-6 md:mt-0">
          <h1 className="text-[14px] font-medium text-[#9A9CAA] tracking-[6%]">
            CATEGORY
          </h1>
          <div className="flex flex-col gap-3">
            {[
              "Sofa",
              "Arm Chair",
              "Wing Chair",
              "Desk Chair",
              "Wooden Chair",
              "Park Bench",
            ].map((category, index) => (
              <p key={index} className="text-[16px] text-[#272343]">
                {category}
              </p>
            ))}
          </div>
        </div>
        <div className="w-full md:w-[156px] h-auto flex flex-col gap-5 mt-6 md:mt-0">
          <h1 className="text-[14px] font-medium text-[#9A9CAA] tracking-[6%]">
            SUPPORT
          </h1>
          <div className="flex flex-col gap-3">
            {[
              "Help & Support",
              "Terms & Conditions",
              "Privacy Policy",
              "Help",
            ].map((item, index) => (
              <p key={index} className="text-[16px] text-[#272343]">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="w-full md:w-[424px] h-auto mt-6 md:mt-0 rounded-lg flex flex-col gap-3 p-1">
          <h1 className="text-[#9A9CAA] text-[14px] font-medium tracking-[6%]">
            NEWSLETTER
          </h1>
          <div className="flex gap-2">
            <input
              name="email"
              id="email"
              placeholder="Your email"
              className="text-[#9A9CAA] rounded-lg w-[285px] h-[46px] pl-3 border-[#E1E3E5] border-solid border-[1px]"
            />
            <button className="w-[80px] lg:w-[127px] h-11 lg:h-[46px] rounded-lg py-[14px] px-6 bg-[#029FAE] text-white flex justify-center items-center">
              Subscribe
            </button>
          </div>
          <p className="text-[#272343] text-opacity-60% text-[15px] mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row h-[75px] py-6 px-4 md:px-[300px] justify-between items-center">
        <p className="text-[14px] text-center md:text-left">
          @ 2021 - Blogy - Designed & Develop by <strong>Zakirsoft</strong>
        </p>
        <Image
          src="/Images/footerimg.png"
          alt="footerimg"
          width={227}
          height={27}
        />
      </div>
    </div>
  );
}

export default Footer;
