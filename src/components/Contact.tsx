import ArrowUp from "../assets/svg/ArrowUp";
import Call from "../assets/svg/Call";
import Facebook from "../assets/svg/Facebook";
import Instagram from "../assets/svg/Instagram";
import Location from "../assets/svg/Location";
import Map from "../assets/svg/Map";
import Message from "../assets/svg/Message";
import Shape from "../assets/svg/Shape";
import Twitter from "../assets/svg/Twitter";
import Youtube from "../assets/svg/Youtube";

function Contact() {
  return (
    <div className="bg-[#E8EDF5] flex  justify-evenly pt-[100px]">
      <div>
        <h1 className="text-[24px] leading-[30px] text-[#127682] font-bold pb-[30px]">
          Contact Us
        </h1>
        <p className="text-[#585E66] text-[16px] leading-[30px] w-[354px] pb-[30px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
          lectus nunc, sagittis, eros.
        </p>
        <div className="flex items-center gap-[20px] mb-[20px]">
          <Location />
          <div>
            <span className="block text-[#585E66]">
              Imm le Zenith II, Lotissement Attaoufik, Route de Nouacer, Sidi
              Maarouf,
            </span>
            <span className="block text-[#585E66]">
              Casablanca, 20640, Maroc
            </span>
          </div>
        </div>
        <div className="flex items-center gap-[20px] mb-[20px]">
          <Message />
          <p className="text-[#585E66]">nfo@peaqock.com</p>
        </div>
        <div className="flex items-center gap-[20px] mb-[20px]">
          <Call />
          <p className="text-[#585E66]">+20-2-24564100/1/2/3</p>
        </div>
        <div className="flex items-center gap-[20px] mb-[20px]">
          <Call />
          <p className="text-[#585E66]">+20-2-24515201/2</p>
        </div>
      </div>
      <div>
        <h1 className="text-[24px] leading-[30px] text-[#127682] font-bold pb-[30px]">
          About Peaqock
        </h1>
        <div className="flex flex-col gap-[20px]">
          <p className="text-[#585E66]">Privacy Statement</p>
          <p className="text-[#585E66]">Term and condition</p>
          <p className="text-[#585E66]">Accessibility</p>
          <p className="text-[#585E66]">F.A.Q.</p>
          <div className="flex gap-[20px]">
            <Facebook />
            <Youtube />
            <Twitter />
            <Instagram />
          </div>
        </div>
      </div>
      <div>
        <div className="text-white relative">
          <div className="absolute top-[-50px] -right-20 w-[122px] h-[40px] bg-gradient-to-b from-[#F7AE28] to-[#FFDE82] p-5 rounded-[50px] flex items-center gap-[10px]">
            <Shape />
            <span className="text-[12px]">Support</span>
          </div>
          <div className="absolute top-[-50px] -right-40 w-[40px] h-[40px] flex justify-center items-center bg-gradient-to-b from-[#F7AE28] to-[#FFDE82] rounded-[50px]">
            <ArrowUp />
          </div>
        </div>
        <h1 className="text-[24px] leading-[30px] text-[#127682] font-bold pb-[30px]">
          Locations
        </h1>
        <Map />
      </div>
    </div>
  );
}

export default Contact;
