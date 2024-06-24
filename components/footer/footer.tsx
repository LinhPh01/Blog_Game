import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-8 pb-4 bg-color">
      <div className="grid border-b-1 pb-6 border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-11/12 mx-auto lg:w-4/5 gap-6 md:gap-3">
        <div className="flex items-center space-x-6">
          <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-[#60A5FA]">
            <MapIcon className="w-10 h-10 md:w-12 md:h-12 text-black" />
          </div>
          <div>
            <h1 className="text-xl mb-1 font-semibold text-white">Address</h1>
            <p className="text-sm w-[90%] text-white opacity-60">TP.HCM</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-[#60A5FA]">
            <DevicePhoneMobileIcon className="w-10 h-10 md:w-12 md:h-12 text-black" />
          </div>
          <div>
            <h1 className="text-xl mb-1 font-semibold text-white">Phone</h1>
            <p className="text-sm w-[90%] text-white opacity-60">
              +84931305101
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-[#60A5FA]">
            <EnvelopeIcon className="w-10 h-10 md:w-12 md:h-12 text-black" />
          </div>
          <div>
            <h1 className="text-xl mb-1 font-semibold text-white">Mail</h1>
            <p className="text-sm w-[90%] text-white opacity-60">
              phamhoailinh779@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="w-11/12 mt-2 mx-auto lg:w-4/5 grid grid-cols-1 md:grid-cols-2 items-center justify-between">
        <div className="text-lg md:text-xl mb-2 md:mb-0 text-white opacity-60">
          Production in 2024
        </div>
        <div className="flex justify-center space-x-6">
          <p className="text-sm text-white opacity-80">PrivacyPolicy</p>
          <p className="text-sm text-white opacity-80">Licensing</p>
          <p className="text-sm text-white opacity-80">Contact</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
