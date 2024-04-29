import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import FetchingItems from "../components/FetchingItems";
import { useSelector } from "react-redux";
import LoadingSpiner from "../components/LoadingSpiner";
import { ToastContainer } from "react-toastify";

export default function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header />
      <ToastContainer />
      <FetchingItems />
      {fetchStatus.currentlyFetching ? <LoadingSpiner /> : <Outlet />}

      <Footer />
    </>
  );
}
