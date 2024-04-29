// import React from "react";
// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

// function PLaceholder() {
//   const location = useLocation();
//   const [total, setTotal] = useState(0);

//   useEffect(() => {
//     // Parse the search params from the URL
//     const searchParams = new URLSearchParams(location.search);

//     // Get the value of the 'total' parameter from the URL
//     const totalValue = searchParams.get("total");

//     // Convert the total value to a number and set it in the state
//     setTotal(parseFloat(totalValue));
//   }, [location.search]);
//   return (
//     // <div className="price-footer flex justify-between text-[17px] mt-3 font-bold">
//     //   <span className="price-item-tag">Total Amount</span>
//     //   <span className="price-item-value">₹{finalPayment}</span>
//     // </div>
//     <div>
//       <div>
//         <h1>Order Page</h1>
//         <p>Total: {total}</p>
//       </div>
//     </div>
//   );
// }
// export default PLaceholder;
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Placeholder() {
  const location = useLocation();
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    // Parse the search params from the URL
    const searchParams = new URLSearchParams(location.search);

    // Get the value of the 'total' and 'Discount' parameters from the URL
    const totalValue = searchParams.get("total");
    const totalDiscount = searchParams.get("discout");
    console.log("Total Discount:", totalDiscount);

    // Convert the total value and discount to numbers and set them in the state
    setTotal(parseFloat(totalValue));
    setDiscount(parseFloat(totalDiscount));
  }, [location.search]);

  return (
    <div className="flex justify-center my-8">
      <div className="text-center       inline-block p-1 px-6 rounded-xl bg-blue-300 shadow-xl ">
        <h1 className="font-bold text-white">Transation Slip</h1>

        <p className="flex gap-7 font-bold">
          Discount:{" "}
          <span className="font-normal text-red-500">₹{discount}</span>
        </p>
        <p className="flex gap-14 font-bold">
          Total: <span className="font-normal text-green-500">₹{total}</span>
        </p>
      </div>
    </div>
  );
}

export default Placeholder;
