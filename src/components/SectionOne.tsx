import ArrowLeft from "../assets/svg/ArrowLeft";
import ArrowRight from "../assets/svg/ArrowRight";
import Play from "../assets/svg/Play";
import LearnMoreBtn from "./LearnMoreBtn";

function SectionOne() {
  return (
    <section className="h-[1117px] bg-[url('./src/assets/images/laptop.jpg')] bg-cover text-white">
      <div className="py-11 flex absolute top-[903px] left-[100px] right-[100px] backdrop-blur-md">
        <div className="flex-1">
          <div className="w-[620px] h-[130px] ">
            <h1 className="text-[51px] leading-[70px] font-bold">
              <span className="block">MANAGE</span>
              <span>OPERATIONS</span>
            </h1>
          </div>
          <div className="flex gap-[51px] mt-[55px]">
            <LearnMoreBtn style="bg-white text-[#127682]">
              LEARN MORE
            </LearnMoreBtn>
            <Play />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex justify-between border-b-[1px] pb-[10px]">
            <h2 className="text-[30px] leading-[30px]">01.</h2>
            <div className="flex gap-[10px]">
              <ArrowLeft />
              <ArrowRight />
            </div>
          </div>
          <p className="mt-[30px] text-[16px] leading-[30px] ">
            Discover market access rules, check regulatory compliance, latest
            customs duties, shipping requirements and other documentation.
            Africa-wide, harmonized, and aggregated trade and investment
            regulatory information i.e., Foreign Trade Regulations (e.g.,
            Customs procedures, certification, licensing, etc.) and Market
            Access (trade agreements, tariffs, and non-tariff measures etc.)
          </p>
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
