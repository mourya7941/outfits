import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="py-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-14 my-10 mt-40 text-sm">
        {/* Company Information */}
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="Company Logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            officiis repudiandae vitae in natus tempora saepe Lorem, Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Vitae, maiores. Id iste
            eaque omnis qui dolore totam neque dignissimos voluptas minima
            architecto aut ex voluptatem, natus, voluptatibus, aspernatur
            accusamus? Quas?
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>DELIVERY</li>
            <li>PRIVACY POLICY</li>
          </ul>
        </div>

        {/* Get in Touch Section */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+0123-456-789</li>
            <li>me.pankaj918@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2024@ forever.com - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
