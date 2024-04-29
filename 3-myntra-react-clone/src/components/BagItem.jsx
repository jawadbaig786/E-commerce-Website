import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { bagActions } from "../store/BagSlice";

function BagItem({ item }) {
  const dispatch = useDispatch();
  const handledelete = () => {
    console.log("click", handledelete);
    dispatch(bagActions.RemoveToBag(item.id));
    const bagItem = useSelector((store) => store.bag);
  };

  return (
    <div
      className="bg-white text-[14px] border border-[#eaeaec] rounded-[4px] mb-2 pt-[12px] px-[12px] 
    pb-3 relative flex  "
    >
      <div className="item-left-part   md:w-[111px] md:h-[150px]  w-[150px] h-[100px] ">
        <img className="bag-item-img w-full rounded" src={item.image} />
      </div>
      <div className="item-right-part  pl-3 mr-[80px] md:mr-[111px] mb-3">
        <div className="company  text-[#535766] font-normal">
          {item.company}
        </div>
        <div className="item-name   text-[#535766]">{item.item_name}</div>
        <div className="price-container flex gap-1">
          <span className="current-price font-bold">
            Rs {item.current_price}
          </span>
          <span className="original-price line-through text-[#7e818c] text-xs">
            Rs{item.original_price}
          </span>
          <span className="discount-percentage">
            ({item.discount_percentage}% OFF)
          </span>
        </div>
        <div className="return-period inline-flex pt-2 text-[14px]">
          <span className="return-period-days mr-1 font-bold">
            {item.return_period} days
          </span>{" "}
          return available
        </div>
        <div className="delivery-details mt-[6px] mb-2 text-xs text-[#282c3f] tracking-[-.1px]">
          Delivery by
          <span className="delivery-details-days text-[#03a685]">
            {item.delivery_date}
          </span>
        </div>
      </div>

      <div
        className="remove-from-cart absolute text-2xl top-[10px] right-[18px] w-[14px] h-[14px] cursor-pointer"
        onClick={handledelete}
      >
        <RiDeleteBin6Fill />
      </div>
    </div>
  );
}
export default BagItem;
