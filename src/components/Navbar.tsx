import ArrowDown from "../assets/svg/ArrowDown";
import Login from "../assets/svg/Login";
import Sms from "../assets/svg/Sms";
import ButtonRight from "./ButtonRight";
import LinkHeader from "./LinkHeader";

const links = [
  {
    id: "1",
    href: "",
    text: "about",
  },
  {
    id: "2",
    href: "",
    text: "membership",
  },
  {
    id: "3",
    href: "",
    text: "new & events",
  },
  {
    id: "4",
    href: "",
    text: "contact us",
  },
];

function Navbar() {
  return (
    <nav className="bg-[#252525] text-white h-[120px] flex flex-row items-center">
      <img
        src="./src/assets/images/peaQock.png"
        alt="peaQock"
        width="295px"
        height="59px"
        className="relative left-[100px]"
      />
      <div className=" flex-1 flex flex-row items-center justify-end">
        <div className="flex flex-row">
          {links.map((link) => (
            <LinkHeader key={link.id} text={link.text} />
          ))}
        </div>
        <div className="bg-[#17A990] flex flex-row justify-around items-center w-[291px] h-[120px]">
          <ButtonRight content="let's talk" icon={<Sms />} />
          <span className="border border-r-[1px] opacity-[0.5] h-[80px]"></span>
          <ButtonRight content={<ArrowDown />} icon={<Login />} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
