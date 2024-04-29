import React from "react";
import { LuPlusCircle } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/BagSlice";

import { AiFillDelete } from "react-icons/ai";

function HomeItem({ item }) {
  const bagItem = useSelector((store) => store.bag);
  const elementFound = bagItem.indexOf(item.id) >= 0;
  // console.log(bagItem, elementFound);
  const dispatch = useDispatch();
  // const savedBagItems = JSON.parse(localStorage.getItem("bagItems")) || [];
  const handleAddTobag = () => {
    // dispatch(bagActions.AddToBag(item.id, item.item_name));
    dispatch(bagActions.AddToBag(item));
  };
  const handleRemoveFrombag = () => {
    dispatch(bagActions.RemoveToBag(item.id));
  };

  return (
    <div className="item-container md:w-64 m-2">
      <img
        className="item-image w-[100%] rounded-3xl"
        src={item.image}
        alt="item image"
      />
      <div className="rating text-[12px] mt-4">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name text-[16px] font-bold text-[#282c3f] overflow-hidden text-ellipsis whitespace-nowrap my-2">
        {item.company}
      </div>
      <div className="item-name text-[#535766] text-[14px] overflow-hidden whitespace-nowrap text-ellipsis font-normal block my-0">
        {item.item_name}
      </div>
      <div className="price mt-3 text-[16px] flex gap-1 text-[#282c3f] whitespace-nowrap leading-4">
        <span className="current-price text-[#282c3f] font-bold text-[14px]">
          Rs {item.current_price}
        </span>
        <span className="original-price text-[#7e818c] font-normal line-through ml-1 text-[12px]">
          Rs {item.original_price}
        </span>
        <span className="discount text-[#ff905a] font-normal mr-1  text-[12px]">
          ({item.discount_percentage}% OFF)
        </span>
      </div>
      {elementFound ? (
        <div className="btn-add-bag  bg-red-600 border-none cursor-pointer mt-2 text-white text-[18px] hover:bg-red-700 transition-all duration-500 ease-linear  rounded-[5px] py-2 px-4 w-full">
          <a
            href="#"
            className="flex items-center gap-1 justify-center mr-4"
            onClick={handleRemoveFrombag}
          >
            <AiFillDelete />
            Remove
          </a>
        </div>
      ) : (
        <div className="btn-add-bag  bg-[#198754] border-none cursor-pointer mt-2 text-white text-[17px] hover:bg-green-900 transition-all duration-500 ease-linear  rounded-[5px] py-2 px-4 w-full ">
          <a
            href="#"
            onClick={handleAddTobag}
            className="flex items-center gap-1 justify-center "
          >
            <LuPlusCircle />
            Add to Bag
          </a>
        </div>
      )}
    </div>
  );
}
export default HomeItem;
