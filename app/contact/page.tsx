import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";

function Contact() {
  return (
    <div className="bg-[#FFFFFF]">
      <Navbar />
      <div className="max-w-screen-xl mx-auto mt-24 px-4 sm:px-6">
        <h1 className="text-center text-4xl font-semibold sm:text-3xl text-black">
          Get In Touch With Us
        </h1>

        <p className="mt-[30px] text-center text-[16px] text-[#9F9F9F] font-normal sm:w-full sm:text-sm">
          Need assistance with our services or products? Feel free to send us an
          email. Our dedicated team is here to support you. Don’t hesitate to
          reach out!
        </p>

        <div className="mt-[60px] grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="flex flex-col px-6 space-y-8 sm:px-10">
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-black h-[27.59px] mt-1" />
              <div>
                <h2 className="text-[20px] font-medium sm:text-[24px] text-black">
                  Location
                </h2>
                <p className="text-black text-[14px] font-normal sm:text-[16px]">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaPhone className="text-black h-[27.59px] mt-1" />
              <div>
                <h2 className="text-[20px] font-medium sm:text-[24px] text-black">
                  Contact
                </h2>
                <p className="text-black text-[14px] font-normal sm:text-[16px]">
                  Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <GoClockFill className="text-black h-[27.59px] mt-1" />
              <div>
                <h2 className="text-[20px] font-medium sm:text-[24px] text-black">
                  Office Hours
                </h2>
                <p className="text-black text-[14px] font-normal sm:text-[16px]">
                  Monday-Friday: 9:00 - 22:00 <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 bg-white w-full sm:w-[635px]">
            <form action="#" method="POST">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="text-[16px] font-medium sm:text-[18px]"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Abc"
                  className="w-full h-[75px] p-6 mt-5 border border-[#9F9F9F] rounded-[10px] sm:w-[528.75px] text-black"
                  required
                />
              </div>

              <div className="mb-4 mt-8">
                <label
                  htmlFor="email"
                  className="text-[16px] font-medium sm:text-[18px]"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Abc@def.com"
                  className="w-full h-[75px] p-6 mt-5 border border-[#9F9F9F] rounded-[10px] sm:w-[528.75px]"
                  required
                />
              </div>

              <div className="mb-4 mt-8">
                <label
                  htmlFor="subject"
                  className="text-[16px] font-medium sm:text-[18px]"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="This is optional"
                  className="w-full h-[75px] p-6 mt-5 border border-[#9F9F9F] rounded-[10px] sm:w-[528.75px] text-black"
                />
              </div>

              <div className="mb-8 mt-8">
                <label
                  htmlFor="message"
                  className="text-[16px] font-medium sm:text-[18px] text-black"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Hi! I’d like to ask about..."
                  className="w-full h-[120px] p-6 mt-5 border border-[#9F9F9F] rounded-[10px] sm:w-[527px] text-black"
                  rows={4}
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full h-[55px] text-white bg-[#029FAE] rounded-[5px] py-3 sm:w-[237px]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
