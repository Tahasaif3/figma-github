import React from "react";
import Image from "next/image";
import Link from "next/link";

function Products() {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center mt-[100px] sm:mt-[50px]">
      <h1 className="text-black flex justify-center items-center mt-4 w-full text-center text-[32px] font-semibold">
        Our Products
      </h1>
      <div className="flex flex-wrap gap-8 justify-center items-center mt-4 ml-4 lg:ml-0">
        <div className="w-full sm:w-[312px] h-[377px] flex flex-col gap-3">
          <Image
            src="/Images/image1.png"
            alt="Image"
            width={312}
            height={312}
            className="rounded-md"
          />
          <div className="flex gap-2">
            <div className="flex flex-col gap-[10px]">
              <h1 className="text-[#007580] text-[16px] leading-[20.8px]">
                Library Stool Chair
              </h1>
              <p className="text-[18px] leading-[19.8px]">$20</p>
            </div>
            <div className="bg-[#F0F2F3] rounded-lg w-12 ml-[150px] mt-8 lg:mt-0 lg:ml-[120px] h-12 flex justify-center items-center hover:bg-[#029FAE]">
              <Image
                src="/Images/cart.png"
                alt="cart"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>

        <div className="w-full sm:w-[312px] h-[377px] flex flex-col gap-3">
          <Link href="/product1">
            <Image
              src="/Images/Image2.png"
              alt="Image"
              width={312}
              height={312}
              className="rounded-md"
            />
          </Link>
          <div className="flex gap-2">
            <div className="flex flex-col gap-[10px]">
              <h1 className="text-[#007580] text-[16px] leading-[20.8px]">
                Library Stool Chair
              </h1>
              <div className="flex gap-1 items-center">
                <p className="text-[18px] leading-[19.8px]">$20</p>
                <s className="text-[14px] text-[#9A9CAA] leading-[15.4px]">
                  $39
                </s>
              </div>
            </div>
            <div className="bg-[#F0F2F3] rounded-lg ml-[150px] mt-8 lg:mt-0 lg:ml-[120px] w-12 h-12 flex justify-center items-center hover:bg-[#029FAE]">
              <Image
                src="/Images/cart.png"
                alt="cart"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>

        <div className="w-full sm:w-[312px] h-[377px] flex flex-col gap-3">
          <Image
            src="/Images/Image3.png"
            alt="Image"
            width={312}
            height={312}
            className="rounded-md"
          />
          <div className="flex gap-2">
            <div className="flex flex-col gap-[10px]">
              <h1 className="text-[#007580] text-[16px] leading-[20.8px]">
                Library Stool Chair
              </h1>
              <p className="text-[18px] leading-[19.8px]">$20</p>
            </div>
            <div className="bg-[#F0F2F3] rounded-lg ml-[150px] mt-8 lg:mt-0 lg:ml-[120px] w-12 h-12 flex justify-center items-center hover:bg-[#029FAE]">
              <Image
                src="/Images/cart.png"
                alt="cart"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>

        <div className="w-full sm:w-[312px] h-[377px] flex flex-col gap-3">
          <Image
            src="/Images/Image4.png"
            alt="Image"
            width={312}
            height={312}
            className="rounded-md"
          />
          <div className="flex gap-2">
            <div className="flex flex-col gap-[10px]">
              <h1 className="text-[#007580] text-[16px] leading-[20.8px]">
                Library Stool Chair
              </h1>
              <p className="text-[18px] leading-[19.8px]">$20</p>
            </div>
            <div className="bg-[#F0F2F3] rounded-lg ml-[150px] mt-8 lg:mt-0 lg:ml-[120px] w-12 h-12 flex justify-center items-center hover:bg-[#029FAE]">
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

      <div className="flex flex-wrap gap-8 justify-center items-center mt-4 ml-4 lg:ml-0">

        <div className="w-full sm:w-[312px] h-[377px] flex flex-col gap-3">
          <Image
            src="/Images/Image5.png"
            alt="Image"
            width={312}
            height={312}
            className="rounded-md"
          />
          <div className="flex gap-2">
            <div className="flex flex-col gap-[10px]">
              <h1 className="text-[#007580] text-[16px] leading-[20.8px]">
                Library Stool Chair
              </h1>
              <p className="text-[18px] leading-[19.8px]">$20</p>
            </div>
            <div className="bg-[#F0F2F3] rounded-lg ml-[150px] mt-8 lg:mt-0 lg:ml-[120px] w-12 h-12 flex justify-center items-center hover:bg-[#029FAE]">
              <Image
                src="/Images/cart.png"
                alt="cart"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>

        <div className="w-full sm:w-[312px] h-[377px] flex flex-col gap-3">
          <Image
            src="/Images/Image8.png"
            alt="Image"
            width={312}
            height={312}
            className="rounded-md"
          />
          <div className="flex gap-2">
            <div className="flex flex-col gap-[10px]">
              <h1 className="text-[#007580] text-[16px] leading-[20.8px]">
                Library Stool Chair
              </h1>
              <div className="flex gap-1 items-center">
                <p className="text-[18px] leading-[19.8px]">$20</p>
                <s className="text-[14px] text-[#9A9CAA] leading-[15.4px]">
                  $39
                </s>
              </div>
            </div>
            <div className="bg-[#F0F2F3] rounded-lg ml-[150px] mt-8 lg:mt-0 lg:ml-[120px] w-12 h-12 flex justify-center items-center hover:bg-[#029FAE]">
              <Image
                src="/Images/cart.png"
                alt="cart"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>

        <div className="w-full sm:w-[312px] h-[377px] flex flex-col gap-3">
          <Image
            src="/Images/Image10.png"
            alt="Image"
            width={312}
            height={312}
            className="rounded-md"
          />
          <div className="flex gap-2">
            <div className="flex flex-col gap-[10px]">
              <h1 className="text-[#007580] text-[16px] leading-[20.8px]">
                Library Stool Chair
              </h1>
              <p className="text-black text-[18px] leading-[19.8px]">$20</p>
            </div>
            <div className="bg-[#F0F2F3] rounded-lg ml-[150px] mt-8 lg:mt-0 lg:ml-[120px] w-12 h-12 flex justify-center items-center hover:bg-[#029FAE]">
              <Image
                src="/Images/cart.png"
                alt="cart"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>

        <div className="w-full sm:w-[312px] h-[377px] flex flex-col gap-3">
          <Image
            src="/Images/Image1.png"
            alt="Image"
            width={312}
            height={312}
            className="rounded-md"
          />
          <div className="flex gap-2">
            <div className="flex flex-col gap-[10px]">
              <h1 className="text-[#007580] text-[16px] leading-[20.8px]">
                Library Stool Chair
              </h1>
              <p className="text-black text-[18px] leading-[19.8px]">$20</p>
            </div>
            <div className="bg-[#F0F2F3] rounded-lg ml-[150px] mt-8 lg:mt-0 lg:ml-[120px] w-12 h-12 flex justify-center items-center hover:bg-[#029FAE]">
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

export default Products;



