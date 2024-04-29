import React from "react";
import { FaLocationArrow } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <footer className="bg-[black] lg:p-10  ">
        <div className="footer_container flex flex-col md:flex-row justify-evenly pt-8 lg:pl-10 pl-4 mb-4 ">
          <div className="footer_column flex flex-col ">
            <div>
              <img
                className="myntra_home h-11  "
                src="images/myntra_logo.webp"
                alt="Myntra Home"
              />
            </div>
            <div className="text-[#696b79] flex flex-col gap-8 mt-8 text-2xl">
              Contact
              <span className="text-xl text-blue-900">contact@email.com</span>
            </div>
          </div>
          <div className="footer_column flex flex-col ">
            <h3 className="text-white mb-6 font-medium my-4 md:my-0 text-xl">
              ONLINE SHOPPING
            </h3>

            <a
              className="text-[#696b79] text-[16px] font-bold no-underline pb-1"
              href="#"
            >
              Men
            </a>
            <a
              className="text-[#696b79] text-[16px] font-bold no-underline pb-1"
              href="#"
            >
              Women
            </a>
            <a
              className="text-[#696b79] text-[16px] font-bold no-underline pb-1"
              href="#"
            >
              Kids
            </a>
            <a
              className="text-[#696b79] text-[16px] font-bold no-underline pb-1"
              href="#"
            >
              Home & Living
            </a>
            <a
              className="text-[#696b79] text-[16px] font-bold no-underline pb-1"
              href="#"
            >
              Beauty
            </a>
          </div>

          <div className="footer_column flex flex-col">
            <h3 className="text-white mb-6 font-medium  text-xl">Resources</h3>
            <a
              className="text-[#696b79] text-[16px] font-bold no-underline pb-1"
              href="#"
            >
              Blog
            </a>
            <a
              className="text-[#696b79] text-[16px] font-bold no-underline pb-1"
              href="#"
            >
              News Update
            </a>
            <a
              className="text-[#696b79] text-[16px] font-bold no-underline pb-1"
              href="#"
            >
              Team
            </a>
            <a
              className="text-[#696b79] text-[16px] font-bold no-underline pb-1"
              href="#"
            >
              Join Us
            </a>
          </div>

          <div className="footer_column flex flex-col">
            <h3 className="text-white font-medium mb-6  text-xl">
              Stay Up To Date
            </h3>
            <div>
              <p className="text-[#696b79] font-medium w-[190px] text-[16px] ">
                See how you can make a differences in you
              </p>
            </div>
            <div className="  mt-4    ">
              <div className="bg-white rounded w-[60%] md:w-full px-1 flex justify-center  items-center ">
                <input
                  type="text"
                  className="outline-none text-[13px] font-medium"
                  placeholder="Enter Your Email Address "
                />
                <span className="border borde-black bg-orange-500 p-2 rounded">
                  <FaLocationArrow className="text-white" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div class="copyright text-[#94969f] text-center p-4">
          © 2023 www.myntra.com. All rights reserved.
        </div>
      </footer>
    </>
  );
}
export default Footer;
