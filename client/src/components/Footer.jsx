import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaYoutube, FaFacebookF } from "react-icons/fa";
import {CiLocationOn } from "react-icons/ci";

const Footer = () => {
  const category = [
    "Skincare",
    "Personal Care",
    "Handbags",
    "Apparels",
    "Watches",
    "Eye Wear",
    "Jewellery",
  ];
  const about = ["Contact Us", "About Us", "Careers", "Press"];
  const Policy = [
    "Return Policy",
    "Terms of Use",
    "Sitemap",
    "Security",
    "Privacy",
    "EPR Compliance",
  ];
  const social = [
    <FaFacebookF />,
    <FaInstagram />,
    <FaTwitter />,
    <FaYoutube />,
  ];

  return (
    <div className="bg-[#F5EFE7] max-md:flex-col text-black px-10 py-10 flex justify-between">
      <div className="flex gap-20">
        <div>
          <h4 className="text-xl mb-5">Shop by Category</h4>
          <ul>
            {category.map((cat,idx) => (
              <li className="mb-2" key={idx}>
                <Link to={cat} className="text-[#bcbcbc] ">
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xl mb-5">About</h4>
          <ul>
            {about.map((cat,idx) => (
              <li className="mb-2" key={idx}>
                <Link to={cat} className="text-[#bcbcbc] ">
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xl mb-5">Policy</h4>
          <ul>
            {Policy.map((cat,idx) => (
              <li className="mb-2" key={idx}>
                <Link to={cat} className="text-[#bcbcbc] ">
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div></div>
        <div></div>
      </div>
      <div className="">
        <div className="flex gap-5 justify-end mb-10">
          {social.map((social,idx) => (
            <div key={idx} className="rounded-full p-3 border hover:bg-green-300 cursor-pointer duration-300">
              {social}
            </div>
          ))}
        </div>
        <div className="text-right">
            <h2 className="flex items-center gap-2 justify-end mb-3"> <CiLocationOn className="text-2xl"/>United States</h2>
            <h2>© 2021 | Cora Leviene All Rights Reserved</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
