import Basic from "../assets/svg/Basic";
import Gold from "../assets/svg/Gold";
import Platinum from "../assets/svg/Platinum";
import Standard from "../assets/svg/Standard";
import Package from "./Package";

const packages = [
  {
    id: "1",
    icon: <Basic />,
    title: "Basic",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem lectus pulvinar massa quam mollis at luctus nunc",
    styleTitle: "text-[#127682] text-[30px] leading-[30px] font-bold",
    style:
      "bg-gradient-to-r from-[#127682] to-[#20C7AB] p-5 rounded-[10px] flex gap-[10px]",
    textBtn: "View Details",
    detailBtn: "FREE",
  },
  {
    id: "2",
    icon: <Gold />,
    title: "Gold",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem lectus pulvinar massa quam mollis at luctus nunc",
    styleTitle: "text-[#F7AE28] text-[30px] leading-[30px] font-bold",
    style:
      "bg-gradient-to-r from-[#F7AE28] to-[#FFDE82] p-5 rounded-[10px] flex gap-[10px]",
    textBtn: "View Details",
    detailBtn: "$ 2500",
  },
  {
    id: "3",
    icon: <Standard />,
    title: "Standard",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem lectus pulvinar massa quam mollis at luctus nunc",
    styleTitle: "text-[#388CBA] text-[30px] leading-[30px] font-bold",
    style:
      "bg-gradient-to-r from-[#388CBA] to-[#4BB1E9] p-5 rounded-[10px] flex gap-[10px]",
    textBtn: "View Details",
    detailBtn: "$ 1500",
  },
  {
    id: "4",
    icon: <Platinum />,
    title: "Platinum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem lectus pulvinar massa quam mollis at luctus nunc",
    styleTitle: "text-[#5339DB] text-[30px] leading-[30px] font-bold",
    style:
      "bg-gradient-to-r from-[#5339DB] to-[#7B61FF] p-5 rounded-[10px] flex gap-[10px]",
    textBtn: "View Details",
    detailBtn: "$ 5000",
  },
];

function Packages() {
  return (
    <div className="px-[132px] flex  justify-evenly gap-[50px] flex-wrap pb-[200px]">
      {packages.map((pack) => (
        <Package
          key={pack.id}
          icon={pack.icon}
          title={pack.title}
          description={pack.description}
          styleTitle={pack.styleTitle}
          style={pack.style}
          textBtn={pack.textBtn}
          detailBtn={pack.detailBtn}
        />
      ))}
    </div>
  );
}

export default Packages;
