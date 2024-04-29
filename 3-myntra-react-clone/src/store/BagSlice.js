import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BagSlice = createSlice({
  name: "bag",
  initialState: localStorage.getItem("CartItems")
    ? JSON.parse(localStorage.getItem("CartItems"))
    : [],
  reducers: {
    AddToBag: (state, action) => {
      const { id, company } = action.payload;
      state.push(id);
      toast.success(`${company} added to cart`, {
        position: "bottom-left",
      });
      console.log("state name", action.payload);
      // const cartItems = JSON.parse(localStorage.getItem("CartItems")) || [];
      localStorage.setItem("CartItems", JSON.stringify(state));

      //
    },
    RemoveToBag: (state, action) => {
      // const { id, name } = action.payload;

      toast.success(`  remove from cart`, {
        position: "bottom-left",
      });

      const filterItems = state.filter((itemId) => itemId != action.payload);
      if (filterItems) {
        localStorage.setItem("CartItems", JSON.stringify(filterItems));
      }
      return filterItems;
    },
  },
});

export const bagActions = BagSlice.actions;
export default BagSlice;
