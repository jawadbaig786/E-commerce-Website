import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaFaceSmile } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const bag = useSelector((store) => store.bag);
  // const bag = useSelector((store) => store.bag) || [];
  console.log("array of bag", bag);
  const [hamburger, sethamburger] = useState(false);
  const handlehamburger = () => {
    console.log("click", hamburger);
    sethamburger(!hamburger);
  };
  return (
    <>
      <header className="flex justify-between items-center  border-b-2 md:sticky top-0 z-10   bg-white">
        <div className="logo_container ml-[4%]">
          <Link to="/">
            <img
              className="myntra_home h-11 "
              src="images/myntra_logo.webp"
              alt="Myntra Home"
            />
          </Link>
        </div>
        <nav
          className={`nav_bar   flex md:flex-row md:justify-evenly md:gap-4 items-center  ${
            hamburger ? "" : "hidden"
          }    absolute top-[70px] right-0 flex-col md:static bg-white md:bg-transparent pr-40 pl-24 md:px-0  pt-8 pb-8 gap-4`}
        >
          <a
            className="text-xs text-[#282c3f] font-bold uppercase no-underline md:py-5 tracking-[.3px]  border-b-4 hover:border-b-pink-400 border-b-[white]"
            href="#"
          >
            Men
          </a>
          <a
            className="text-xs text-[#282c3f] font-bold uppercase no-underline md:py-5  tracking-[.3px]  border-b-4 hover:border-b-pink-400 border-b-[white]"
            href="#"
          >
            Women
          </a>
          <a
            className="text-xs text-[#282c3f] font-bold uppercase no-underline md:py-5  tracking-[.3px]  border-b-4 hover:border-b-pink-400 border-b-[white]"
            href="#"
          >
            Kids
          </a>
          <a
            className="text-xs text-[#282c3f] font-bold uppercase no-underline md:py-5  tracking-[.3px]  border-b-4 hover:border-b-pink-400 border-b-[white]"
            href="#"
          >
            Home & Living
          </a>
          <a
            className="text-xs text-[#282c3f] font-bold uppercase no-underline md:py-5   tracking-[.3px]  border-b-4 hover:border-b-pink-400  border-b-[white]"
            href="#"
          >
            Beauty
          </a>
          <a
            className="text-xs text-[#282c3f] font-bold uppercase no-underline md:py-5   tracking-[.3px]  border-b-4 hover:border-b-pink-400 border-b-[white]"
            href="#"
          >
            Studio{" "}
            <sup className=" text-[#ff3f6c] text-[10px] border-b-[white]">
              New
            </sup>
          </a>
        </nav>
        <div className="search_bar   xl:flex items-center bg-[#f5f5f6]  hidden h-10 min-w-[200px] w-1/3 rounded-3xl">
          <span className="material-symbols-outlined search_icon   box-content  p-3 text-[#282c3f] font-light rounded-t-[4px] rounded-r-[4px]">
            <FaSearch />
          </span>
          <span className="md:hidden">
            <FaSearch />
          </span>
          <input
            className="search_input text-[#696e79] grow  border-0  bg-[#f5f5f6] rounded-b-[4px]
             rounded-l-[4px] outline-none "
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="action_bar mr-[4%] flex justify-evenly gap-5 font-medium mt-3 ">
          <div className="action_container flex flex-col items-center">
            <span className="material-symbols-outlined action_icon ">
              <FaUserAlt className="text-[17px]  text-sky-500" />
            </span>
            <span class="action_name">Profile</span>
          </div>

          <div className="action_container   flex flex-col items-center">
            <span class="material-symbols-outlined action_icon">
              <FaFaceSmile className="text-[17px] text-orange-600" />
            </span>
            <span class="action_name">Wishlist</span>
          </div>

          <Link
            className="action_container  flex flex-col items-center"
            to="/bag"
          >
            <span className="relative">
              <span className="w-4 h-4 flex justify-center items-center text-[10px] font-bold bg-red-600 absolute left-[8px] text-center rounded-full top-[-8px] text-white ">
                {bag.length}
              </span>
            </span>
            <span class="material-symbols-outlined action_icon relative ">
              {/* <span class="absolute  flex h-3 w-3 bottom-[14px] left-[10px]">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class=" inline-flex rounded-full h-4 w-8 bg-red-500 text-[12px]">
                  12
                </span>
              </span> */}

              <FaBagShopping className="text-blue-600 text-[17px]" />
            </span>
            <span className="action_name text-blue-600">Bag</span>
          </Link>
          <div className="text-3xl rounded-xl mb-1 p-1  px-2  md:hidden ">
            <RxHamburgerMenu onClick={handlehamburger} />
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
