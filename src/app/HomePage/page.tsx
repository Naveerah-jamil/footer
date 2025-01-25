import React from "react";
import Image from "next/image";
import Link from "next/link";
import HomeProduct from "@/components/HomeProduct";

const Main = () => {
  return (
    <div>
      {/* Main Container */}
      <div className="flex justify-center">
        <div className="w-full max-w-[1050px] h-[850px] bg-[#F0F2F3] flex flex-col lg:flex-row mx-auto">
          {/* Left Section */}
          <div className="w-full lg:w-[60%] h-full pt-[229px] px-[20px] lg:pl-[70px] text-center lg:text-left">
            <h1 className="font-Inter font-light text-[12px] md:text-[14px] leading-[14px] tracking-[12%]">
              Welcome to Chairy
            </h1>
            <div className="font-Inter font-bold text-[30px] md:text-[40px] lg:text-[50px] leading-[36px] md:leading-[50px] lg:leading-[66px] tracking-[12%] text-[#272343] mt-4 md:mt-6">
              Best Furniture <br /> Collection for your <br />
              interior.
            </div>
            <div className="w-[171px] h-[52px] mt-[40px] md:mt-[50px] lg:mt-[70px] rounded-[8px] bg-[#029FAE] flex items-center justify-center mx-auto lg:mx-0">
              <button className="text-[14px] md:text-[16px] leading-[17.6px] font-Inter text-white">
                Shop Now
              </button>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="w-full lg:w-[40%] h-full flex justify-center lg:justify-end items-center px-[20px] lg:pr-[50px]">
            <Image
              src="/assets/Product Image.png"
              alt="chair"
              width={438}
              height={584}
              className="max-w-[80%] md:max-w-[70%] lg:max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Logos Section */}
      <ul className="w-full max-w-[1050px] flex justify-between items-center mx-auto flex-wrap gap-y-6 py-6 px-[20px]">
        {["zapier", "pipedrive", "cib_bank", "zapier", "burnt_toast", "zapier"].map(
          (logo, index) => (
            <li
              key={index}
              className="flex justify-center w-full sm:w-1/2 md:w-1/3 lg:w-auto"
            >
              <Link href="/">
                <Image
                  src={`/${logo}.png`}
                  alt={`${logo} Logo`}
                  width={85}
                  height={85}
                  className="max-w-full h-auto"
                />
              </Link>
            </li>
          )
        )}
      </ul>

      {/* Home Product Component */}
      <HomeProduct />
    </div>
  );
};

export default Main;
