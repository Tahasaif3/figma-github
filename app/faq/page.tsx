import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { GoPlus } from "react-icons/go";

function FAQ() {
  return (
    <div className="bg-[#FFFFFF]">
      <Navbar />
      <div className="w-full flex justify-center px-4 sm:px-8">
        <div className="w-full max-w-[1320px] flex flex-col mt-[100px]">
          <div className="flex flex-col justify-center items-center gap-2 text-center w-full sm:w-[771px] mx-auto">
            <h1 className="font-bold text-[32px] sm:text-[48px] leading-[40px] sm:leading-[56px] text-[#333333]">
              Questions Looks Here
            </h1>
            <p className="text-black text-[14px] sm:text-[16px] text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the{" "}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-5 mt-[50px] lg:mt-[100px] text-black">
            {[
              "What types of chairs do you offer?",
              "How can we get in touch with you?",
              "Do your chairs come with a warranty?",
              "What will be delivered? And When?",
              "Can I try a chair before purchasing?",
              "How do I clean and maintain my Comforty chair?",
            ].map((question, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 bg-[#F7F7F7] p-4 rounded-lg shadow-md text-black"
              >
                <div className="flex justify-between items-center">
                  <h1 className="font-bold leading-[26px] text-[18px]">
                    {question}
                  </h1>
                  <GoPlus className="w-6 h-6" />
                </div>
                <p className="text-left text-[14px] sm:text-[16px] leading-6 text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  quis modi ullam amet debitis libero veritatis enim repellat
                  optio natus eum delectus deserunt, odit expedita eos molestiae
                  ipsa totam quidem?
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FAQ;
