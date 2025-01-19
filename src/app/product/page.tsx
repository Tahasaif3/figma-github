import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { client, urlFor } from "@/sanity/lib/client"; // import urlFor

type Product = {
  _id: string;
  title: string;
  price: number;
  priceWithoutDiscount?: number;
  image: {
    asset: {
      url: string;
    };
  };
};

const Product = async () => {
  const query = `*[_type == "products"]{
    _id,
    title,
    price,
    priceWithoutDiscount,
    image,
  }`;
  
  const products:Product[] = await client.fetch(query);

  return (
    <div className="bg-[#FFFFFF]">
      <Navbar />
      <div className="w-full flex flex-col justify-center items-center mt-[150px] px-4">
        <h1 className="text-black flex justify-start items-center mt-4 w-full md:w-[205px] h-[35px] leading-[35.2px] text-[32px] font-semibold">
          Our Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          {products.map((product) => (
            <div key={product._id} className="w-full max-w-[312px] h-auto flex flex-col gap-3">
              <div className="relative w-full h-[312px]">
                <Image
                  src={urlFor(product.image).width(312).height(312).url() || "/Images/default.png"}  // Use urlFor to generate the image URL
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>

              <div className="flex gap-2 justify-between items-center">
                <div className="w-full flex flex-col gap-[10px]">
                  <h1 className="text-[#007580] text-[16px] font-semibold">{product.title}</h1>
                  <div className="flex gap-1 items-center">
                    <p className="text-black text-[18px] font-semibold">
                      ${product.price}
                    </p>
                    {product.priceWithoutDiscount && (
                      <s className="text-[#9A9CAA] text-[14px]">
                        ${product.priceWithoutDiscount}
                      </s>
                    )}
                  </div>
                </div>
                <div className="bg-[#F0F2F3] rounded-lg w-12 h-12 flex justify-center items-center hover:bg-[#029FAE] cursor-pointer">
                  <Image
                    src="/Images/cart.png"
                    alt="cart"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;







// import Navbar from "@/components/Navbar";
// import React from "react";
// import Image from "next/image";
// import Footer from "@/components/Footer";

// function Product() {
//   return (
//     <div className="bg-[#FFFFFF]">
//       <Navbar />
//       <div className="w-full flex flex-col justify-center items-center mt-[150px]">
//         <h1 className="text-black flex justify-start items-center mt-4 w-[205px] h-[35px] leading-[35.2px] text-[32px] font-semibold">
//           Our Products
//         </h1>
//         <div className="md:flex grid grid-col gap-8 md:justify-center md:items-center">
//           <div className="w-[312px] h-[377px] ml-636px mt-[84px] flex flex-col gap-3">
//             <Image
//               src="/Images/image1.png"
//               alt="Image"
//               width={312}
//               height={312}
//               className="rounded-md"
//             ></Image>
//             <div className="flex gap-2">
//               <div className="w-[256px] h-[51px] flex flex-col gap-[10px]">
//                 <h1 className="text-[#007580] w-[256px] h-[21px] text-[16px] leading-[20.8px]">
//                   Library Stool Chair
//                 </h1>
//                 <p className="text-black w-[35px] h-[20px] text-[18px] leading-[19.8px]">
//                   $20
//                 </p>
//               </div>
//               <div className="bg-[#F0F2F3] rounded-lg w-12 h-12 flex justify-center items-center hover:bg-[#029FAE]">
//                 <Image
//                   src="/Images/cart.png"
//                   alt="cart"
//                   width={24}
//                   height={24}
//                 ></Image>
//               </div>
//             </div>
//           </div>

//           <div className="w-[312px] h-[377px] ml-636px mt-[84px] flex flex-col gap-3">
//             <Image
//               src="/Images/Image2.png"
//               alt="Image"
//               width={312}
//               height={312}
//               className="rounded-md"
//             ></Image>
//             <div className="flex gap-2">
//               <div className="w-[256px] h-[51px] flex flex-col gap-[10px]">
//                 <h1 className="text-[#007580] w-[256px] h-[21px] text-[16px] leading-[20.8px]">
//                   Library Stool Chair
//                 </h1>
//                 <div className="flex gap-1 justify-start items-center">
//                   <p className="text-black w-[35px] h-[20px] text-[18px] leading-[19.8px]">
//                     $20
//                   </p>
//                   <s className="leading-[15.4px] text-[14px] text-[#9A9CAA]">
//                     $39
//                   </s>
//                 </div>
//               </div>
//               <div className="bg-[#F0F2F3] rounded-lg w-12 h-12 flex justify-center items-center hover:bg-[#029FAE]">
//                 <Image
//                   src="/Images/cart.png"
//                   alt="cart"
//                   width={24}
//                   height={24}
//                 ></Image>
//               </div>
//             </div>
//           </div>

//           <div className="w-[312px] h-[377px] ml-636px mt-[84px] flex flex-col gap-3">
//             <Image
//               src="/Images/Image3.png"
//               alt="Image"
//               width={312}
//               height={312}
//               className="rounded-md"
//             ></Image>
//             <div className="flex gap-2">
//               <div className="w-[256px] h-[51px] flex flex-col gap-[10px]">
//                 <h1 className="text-[#007580] w-[256px] h-[21px] text-[16px] leading-[20.8px]">
//                   Library Stool Chair
//                 </h1>
//                 <p className="text-black w-[35px] h-[20px] text-[18px] leading-[19.8px]">
//                   $20
//                 </p>
//               </div>
//               <div className="bg-[#F0F2F3] rounded-lg w-12 h-12 flex justify-center items-center hover:bg-[#029FAE]">
//                 <Image
//                   src="/Images/cart.png"
//                   alt="cart"
//                   width={24}
//                   height={24}
//                 ></Image>
//               </div>
//             </div>
//           </div>

//           <div className="w-[312px] h-[377px] ml-636px mt-[84px] flex flex-col gap-3">
//             <Image
//               src="/Images/Image4.png"
//               alt="Image"
//               width={312}
//               height={312}
//               className="rounded-md"
//             ></Image>
//             <div className="flex gap-2">
//               <div className="w-[256px] h-[51px] flex flex-col gap-[10px]">
//                 <h1 className="text-[#007580] w-[256px] h-[21px] text-[16px] leading-[20.8px]">
//                   Library Stool Chair
//                 </h1>
//                 <p className="text-black w-[35px] h-[20px] text-[18px] leading-[19.8px]">
//                   $20
//                 </p>
//               </div>
//               <div className="bg-[#F0F2F3] rounded-lg w-12 h-12 flex justify-center items-center hover:bg-[#029FAE]">
//                 <Image
//                   src="/Images/cart.png"
//                   alt="cart"
//                   width={24}
//                   height={24}
//                 ></Image>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="md:flex grid grid-col gap-8 md:justify-center md:items-center">
//           <div className="w-[312px] h-[377px] ml-636px mt-[84px] flex flex-col gap-3">
//             <Image
//               src="/Images/Image6.png"
//               alt="Image"
//               width={312}
//               height={312}
//               className="rounded-md"
//             ></Image>
//             <div className="flex gap-2">
//               <div className="w-[256px] h-[51px] flex flex-col gap-[10px]">
//                 <h1 className="text-[#007580] w-[256px] h-[21px] text-[16px] leading-[20.8px]">
//                   Library Stool Chair
//                 </h1>
//                 <p className="text-black w-[35px] h-[20px] text-[18px] leading-[19.8px]">
//                   $20
//                 </p>
//               </div>
//               <div className="bg-[#F0F2F3] rounded-lg w-12 h-12 flex justify-center items-center hover:bg-[#029FAE]">
//                 <Image
//                   src="/Images/cart.png"
//                   alt="cart"
//                   width={24}
//                   height={24}
//                 ></Image>
//               </div>
//             </div>
//           </div>

//           <div className="w-[312px] h-[377px] ml-636px mt-[84px] flex flex-col gap-3">
//             <Image
//               src="/Images/Image8.png"
//               alt="Image"
//               width={312}
//               height={312}
//               className="rounded-md"
//             ></Image>
//             <div className="flex gap-2">
//               <div className="w-[256px] h-[51px] flex flex-col gap-[10px]">
//                 <h1 className="text-[#007580] w-[256px] h-[21px] text-[16px] leading-[20.8px]">
//                   Library Stool Chair
//                 </h1>
//                 <div className="flex gap-1 justify-start items-center">
//                   <p className="text-black w-[35px] h-[20px] text-[18px] leading-[19.8px]">
//                     $20
//                   </p>
//                   <s className="leading-[15.4px] text-[14px] text-[#9A9CAA]">
//                     $39
//                   </s>
//                 </div>
//               </div>
//               <div className="bg-[#F0F2F3] rounded-lg w-12 h-12 flex justify-center items-center hover:bg-[#029FAE]">
//                 <Image
//                   src="/Images/cart.png"
//                   alt="cart"
//                   width={24}
//                   height={24}
//                 ></Image>
//               </div>
//             </div>
//           </div>

//           <div className="w-[312px] h-[377px] ml-636px mt-[84px] flex flex-col gap-3">
//             <Image
//               src="/Images/Image10.png"
//               alt="Image"
//               width={312}
//               height={312}
//               className="rounded-md"
//             ></Image>
//             <div className="flex gap-2">
//               <div className="w-[256px] h-[51px] flex flex-col gap-[10px]">
//                 <h1 className="text-[#007580] w-[256px] h-[21px] text-[16px] leading-[20.8px]">
//                   Library Stool Chair
//                 </h1>
//                 <p className="text-black w-[35px] h-[20px] text-[18px] leading-[19.8px]">
//                   $20
//                 </p>
//               </div>
//               <div className="bg-[#F0F2F3] rounded-lg w-12 h-12 flex justify-center items-center hover:bg-[#029FAE]">
//                 <Image
//                   src="/Images/cart.png"
//                   alt="cart"
//                   width={24}
//                   height={24}
//                 ></Image>
//               </div>
//             </div>
//           </div>

//           <div className="w-[312px] h-[377px] ml-636px mt-[84px] flex flex-col gap-3">
//             <Image
//               src="/Images/Image1.png"
//               alt="Image"
//               width={312}
//               height={312}
//               className="rounded-md"
//             ></Image>
//             <div className="flex gap-2">
//               <div className="w-[256px] h-[51px] flex flex-col gap-[10px]">
//                 <h1 className="text-[#007580] w-[256px] h-[21px] text-[16px] leading-[20.8px]">
//                   Library Stool Chair
//                 </h1>
//                 <p className="text-black w-[35px] h-[20px] text-[18px] leading-[19.8px]">
//                   $20
//                 </p>
//               </div>
//               <div className="bg-[#F0F2F3] rounded-lg w-12 h-12 flex justify-center items-center hover:bg-[#029FAE]">
//                 <Image
//                   src="/Images/cart.png"
//                   alt="cart"
//                   width={24}
//                   height={24}
//                 ></Image>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="md:flex grid grid-col gap-8 md:justify-center md:items-center">
//           <div className="w-[312px] h-[377px] ml-636px mt-[84px] flex flex-col gap-3">
//             <Image
//               src="/Images/Image5.png"
//               alt="Image"
//               width={312}
//               height={312}
//               className="rounded-md"
//             ></Image>
//             <div className="flex gap-2">
//               <div className="w-[256px] h-[51px] flex flex-col gap-[10px]">
//                 <h1 className="text-[#007580] w-[256px] h-[21px] text-[16px] leading-[20.8px]">
//                   Library Stool Chair
//                 </h1>
//                 <p className="text-black w-[35px] h-[20px] text-[18px] leading-[19.8px]">
//                   $20
//                 </p>
//               </div>
//               <div className="bg-[#F0F2F3] rounded-lg w-12 h-12 flex justify-center items-center hover:bg-[#029FAE]">
//                 <Image
//                   src="/Images/cart.png"
//                   alt="cart"
//                   width={24}
//                   height={24}
//                 ></Image>
//               </div>
//             </div>
//           </div>

//           <div className="w-[312px] h-[377px] ml-636px mt-[84px] flex flex-col gap-3">
//             <Image
//               src="/Images/Image2.png"
//               alt="Image"
//               width={312}
//               height={312}
//               className="rounded-md"
//             ></Image>
//             <div className="flex gap-2">
//               <div className="w-[256px] h-[51px] flex flex-col gap-[10px]">
//                 <h1 className="text-[#007580] w-[256px] h-[21px] text-[16px] leading-[20.8px]">
//                   Library Stool Chair
//                 </h1>
//                 <div className="flex gap-1 justify-start items-center">
//                   <p className="text-black w-[35px] h-[20px] text-[18px] leading-[19.8px]">
//                     $20
//                   </p>
//                   <s className="leading-[15.4px] text-[14px] text-[#9A9CAA]">
//                     $39
//                   </s>
//                 </div>
//               </div>
//               <div className="bg-[#F0F2F3] rounded-lg w-12 h-12 flex justify-center items-center hover:bg-[#029FAE]">
//                 <Image
//                   src="/Images/cart.png"
//                   alt="cart"
//                   width={24}
//                   height={24}
//                 ></Image>
//               </div>
//             </div>
//           </div>

//           <div className="w-[312px] h-[377px] ml-636px mt-[84px] flex flex-col gap-3">
//             <Image
//               src="/Images/Image3.png"
//               alt="Image"
//               width={312}
//               height={312}
//               className="rounded-md"
//             ></Image>
//             <div className="flex gap-2">
//               <div className="w-[256px] h-[51px] flex flex-col gap-[10px]">
//                 <h1 className="text-[#007580] w-[256px] h-[21px] text-[16px] leading-[20.8px]">
//                   Library Stool Chair
//                 </h1>
//                 <p className="text-black w-[35px] h-[20px] text-[18px] leading-[19.8px]">
//                   $20
//                 </p>
//               </div>
//               <div className="bg-[#F0F2F3] rounded-lg w-12 h-12 flex justify-center items-center hover:bg-[#029FAE]">
//                 <Image
//                   src="/Images/cart.png"
//                   alt="cart"
//                   width={24}
//                   height={24}
//                 ></Image>
//               </div>
//             </div>
//           </div>

//           <div className="w-[312px] h-[377px] ml-636px mt-[84px] flex flex-col gap-3">
//             <Image
//               src="/Images/Image7.png"
//               alt="Image"
//               width={312}
//               height={312}
//               className="rounded-md"
//             ></Image>
//             <div className="flex gap-2">
//               <div className="w-[256px] h-[51px] flex flex-col gap-[10px]">
//                 <h1 className="text-[#007580] w-[256px] h-[21px] text-[16px] leading-[20.8px]">
//                   Library Stool Chair
//                 </h1>
//                 <p className="text-black w-[35px] h-[20px] text-[18px] leading-[19.8px]">
//                   $20
//                 </p>
//               </div>
//               <div className="bg-[#F0F2F3] rounded-lg w-12 h-12 flex justify-center items-center hover:bg-[#029FAE]">
//                 <Image
//                   src="/Images/cart.png"
//                   alt="cart"
//                   width={24}
//                   height={24}
//                 ></Image>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="w-full py-[100px] px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col gap-[70px] mt-[100px]">
//         <div className="w-full md:w-[760px] h-[165px] text-center flex flex-col justify-between items-center mx-auto">
//           <h1 className="text-black font-medium text-[30px] md:text-[50px] leading-[38px] md:leading-[58.59px] text-center">
//             Or subscribe to the newsletter
//           </h1>
//           <div className="flex flex-col sm:flex-row justify-center gap-3 mt-4">
//             <input
//               type="email"
//               placeholder="Email Address..."
//               className="w-full sm:w-[643px] h-[32px] border-b-black border-b-[1px] border-solid"
//             />
//             <button className="border-b-black border-b-[1px] border-solid w-full sm:w-[91px] h-8 mt-2 sm:mt-0">
//               Submit
//             </button>
//           </div>
//         </div>
//         <div className="flex flex-col justify-between items-center gap-12">
//           <h1 className="text-black w-full md:w-[1013px] text-[30px] md:text-[50px] leading-[38px] md:leading-[58.59px] text-center font-medium">
//             Follow products and discounts on Instagram
//           </h1>
//           <div className="flex flex-wrap justify-center gap-6 mt-4">
//             <Image
//               src="/Images/Image6.png"
//               alt="Chair"
//               width={186}
//               height={186}
//               className="rounded-md"
//             />
//             <Image
//               src="/Images/Image5.png"
//               alt="Chair"
//               width={186}
//               height={186}
//               className="rounded-md"
//             />
//             <Image
//               src="/Images/Image2.png"
//               alt="Chair"
//               width={186}
//               height={186}
//               className="rounded-md"
//             />
//             <Image
//               src="/Images/image1.png"
//               alt="Chair"
//               width={186}
//               height={186}
//               className="rounded-md"
//             />
//             <Image
//               src="/Images/Image3.png"
//               alt="Chair"
//               width={186}
//               height={186}
//               className="rounded-md"
//             />
//             <Image
//               src="/Images/Image7.png"
//               alt="Chair"
//               width={186}
//               height={186}
//               className="rounded-md"
//             />
//           </div>
//         </div>
//       </div>

//       <Footer></Footer>
//     </div>
//   );
// }

// export default Product;




