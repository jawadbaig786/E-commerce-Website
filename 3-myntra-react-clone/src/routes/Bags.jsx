import Summary from "../components/Summary";
import BagItem from "../components/BagItem";

import { useSelector } from "react-redux";

function Bags() {
  const bagItems = useSelector((state) => state.bag);
  // const bagItems = useSelector((state) => state.bag) || [];
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <main>
      <div className="bag-page md:w-[78%] mx-auto  flex flex-col md:flex-row pt-7  relative  ">
        <div className="bag-items-container block md:w-[64%] pr-5 text-xs border-r  border-r-[#eaeaec] pt-8 text-[#282c3f]">
          {finalItems.map((item) => (
            <BagItem item={item} key={item.id} />
          ))}
        </div>
        <Summary />
      </div>
    </main>
  );
}
export default Bags;
