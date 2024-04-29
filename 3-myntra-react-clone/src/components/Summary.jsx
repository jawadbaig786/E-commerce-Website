import React from "react";
import { useSelector } from "react-redux";

function Summary() {
  const bagItemId = useSelector((store) => store.bag);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItemId.indexOf(item.id);
    return itemIndex >= 0;
  });
  let CONVENIENCE_FEES = 99;
  let totalItem = bagItemId.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  finalItems.forEach((bagItemId) => {
    totalMRP += bagItemId.original_price;
    totalDiscount += bagItemId.original_price - bagItemId.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;
  return (
    <div className="bag-summary inline-block  text-[#282c3f] md:w-[30%]  text-xs pt-6 pr-4 p-2 ml-2  ">
      <div className="bag-details-container mb-4">
        <div className="price-header text-[17px] font-medium my-6 mr-4 text-[#535766]">
          PRICE DETAILS ({totalItem} Items)
        </div>
        <div className="price-item mb-3 text-[16px] text-[#282c3f] flex justify-between">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item mb-3 text-[16px] text-[#282c3f] flex justify-between">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount  text-[#03a685]">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item mb-3 text-[16px] text-[#282c3f] flex justify-between">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer flex justify-between text-[17px] mt-3 font-bold">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <div className=" my-[10px] py-[10px] px-[20px] text-center cursor-pointer transition-all duration-500 ease-linear bg-[#ff3f6c]   hover:bg-pink-600 font-normal rounded-md ">
        <a
          href={`/order?total=${finalPayment}&&discout=${totalDiscount}`}
          className="text-xl text-white   "
        >
          Place Order
        </a>
      </div>
    </div>
  );
}
export default Summary;
