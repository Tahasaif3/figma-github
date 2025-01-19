import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="container mx-auto px-5">
      <div className="flex flex-wrap items-center justify-center lg:flex-nowrap w-full py-10">
        <div className="ml-0 lg:ml-[200px] max-w-lg text-center lg:text-left mb-10 lg:mb-0">
          <p className="text-sm tracking-wide text-[#272343] mb-2">Welcome to chairy</p>
          <h1 className="text-4xl lg:text-6xl font-bold text-[#272343] leading-tight mb-5">
            Best Furniture Collection for your interior.
          </h1>
          <button className="mt-8 ml-[60px] lg:ml-0 flex justify-between items-center gap-5 bg-[#029FAE] w-[171px] h-[52px] rounded-lg py-[14px] px-6">
            <span className="text-white text-[16px] leading-[17.6px]">Shop Now</span>
            <Image src="/Images/Rightarrow.png" alt="Shop now arrow" width={24} height={24} />
          </button>
        </div>
        <Image
          src="/Images/product-image.png"
          alt="Chair product"
          width={434}
          height={584}
          className="mx-auto ml-[40px] lg:ml-[300px]"
        />
      </div>

      <div className="flex flex-wrap items-center justify-around w-full py-5">
        {[
          { src: "/Images/zapier.png", alt: "Zapier logo", width: 85, height: 87 },
          { src: "/Images/pipedrive.png", alt: "Pipedrive logo", width: 107, height: 109 },
          { src: "/Images/cibbank.png", alt: "CIB Bank logo", width: 135, height: 139 },
          { src: "/Images/z-red.png", alt: "Z-Red logo", width: 63, height: 65 },
          { src: "/Images/burnttoast.png", alt: "Burnt Toast logo", width: 98, height: 101 },
          { src: "/Images/panda-doc.png", alt: "Panda Doc logo", width: 113, height: 115 },
          { src: "/Images/moz-logo.png", alt: "Moz logo", width: 84, height: 87},
        ].map((logo, index) => (
          <Image key={index} src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
        ))}
      </div>
    </div>
  );
}

export default Hero;
