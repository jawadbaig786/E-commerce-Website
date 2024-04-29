import React from "react";
import HomeItem from "../components/Home-Item";

import { useSelector } from "react-redux";

function Home() {
  const items = useSelector((store) => store.items);

  return (
    <>
      <main>
        <div className="items-container   flex flex-wrap justify-center items-center gap-10 xl:w-[80%] my-10 xl:mx-[10%]">
          {items.map((item) => (
            <HomeItem item={item} key={item.id} />
          ))}
        </div>
      </main>
    </>
  );
}
export default Home;
