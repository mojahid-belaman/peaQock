import PackageBtn from "./PackageBtn";

function MemberShip() {
  return (
    <div className="mt-[140px] flex flex-col items-center mb-[110px]">
      <div className="w-[900px] flex flex-col justify-center items-center mb-[70px]">
        <span className="text-[20px] leading-[35px] text-[#99A5B5] mb-[10px]">
          MEMBERSHIP
        </span>
        <h1 className="text-[40px] leading-[60px] font-bold mb-5">
          PEAQOCK Membership Packages
        </h1>
        <p className="text-[#585E66] text-[16px] leading-[30px] text-center">
          This page will highlight the different membership packages and the
          benefits and costs of each package. The initial plans to be configured
          are as presented below. The table should be configurable to update the
          sections with different feature, benefits and costs from time to time.
        </p>
      </div>
      <div>
        <PackageBtn>PACKAGES DETAILS</PackageBtn>
      </div>
    </div>
  );
}

export default MemberShip;
