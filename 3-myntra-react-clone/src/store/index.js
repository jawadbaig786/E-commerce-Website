import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import fetchStatusSlice from "./fetchStatusSlice";

import BagSlice from "./BagSlice";
// import cookiesSlice from "./Cookies";

const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bag: BagSlice.reducer,
    // cookie: cookiesSlice.reducer,
  },
});
export default myntraStore;
