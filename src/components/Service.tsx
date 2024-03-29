import DiscoverBtn from "../components/DiscoverBtn";

function Service() {
  return (
    <div className="bg-[url('./src/assets/images/service.png')] bg-cover h-[1000px] flex justify-evenly">
      <div className="w-[600px] mt-[317px]">
        <span className="block text-[20px] leading-[35px] text-[#99A5B5] mb-[10px]">
          OUR SERVICES
        </span>
        <div className="flex gap-[21px] h-[80px]">
          <span className="text-[55px] leading-[50px] font-bold text-[#205EFF]">
            Trade
          </span>
          <span className="text-[55px] leading-[50px] font-bold">Simple,</span>
        </div>
        <p className="text-[20px] leading-[35px] text-[#7d7d7d] mb-[50px]">
          Discover a world of trade opportunities in one place with detailed
          information about imports, market dynamics, tariffs, regulatory
          requirements, potential buyers and more.
        </p>
        <DiscoverBtn>Discover Now</DiscoverBtn>
      </div>
      <div className="mt-[218px]">
        <img
          src="./src/assets/images/ServiceImage.png"
          alt="Service Image"
          width={568}
          height={568}
        />
      </div>
    </div>
  );
}

export default Service;
