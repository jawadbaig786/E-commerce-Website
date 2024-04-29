import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchingItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  let controller; // Declare the controller variable outside the useEffect

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (fetchStatus.fetchDone) return;

        controller = new AbortController(); // Initialize the controller
        const signal = controller.signal;

        dispatch(fetchStatusActions.markFetchingStarted());

        const response = await fetch("http://localhost:8080/items", { signal });
        const { items } = await response.json();

        // Dispatch actions in a controlled manner
        dispatch(itemsActions.AddInitialItems(items[0]));
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
      } catch (error) {
        console.error("Fetch error:", error);
        // Handle error appropriately, e.g., dispatch an action to update the fetch status with error information
      }
    };

    fetchData();

    return () => {
      // Cleanup function to abort the fetch request when the component unmounts or the dependency changes
      if (controller) {
        controller.abort();
      }
    };
  }, [fetchStatus]); // Dependency array to ensure the effect runs when fetchStatus changes

  return null; // React requires a return value, even if it's null or an empty fragment
};

export default FetchingItems;
