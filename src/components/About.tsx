import LearnMoreBtn from "./LearnMoreBtn";

function About() {
  return (
    <div className="h-[465px] px-[100px] flex justify-between">
      <div>
        <span className="mb-[10px] text-[#99A5B5]">ABOUT US</span>
        <h1 className="w-[510px] font-bold text-[40px] leading-[60px] mb-[20px]">
          PEAQOCK is a member driven network
        </h1>
        <p className="w-[600px] text-[#585E66] text-[16px] leading-[30px] mb-[70px]">
          The purpose of TRADAR Club is to be a network of international
          businesses and executives dedicated to transforming Africa through the
          vehicles of trade and investment. TRADAR Club Members are global
          industry leaders, African corporates, intergovernmental organisations,
          policy makers and other influential stakeholders committed to the
          shared objective of unlocking growth and development for the African
          continent
        </p>
        <LearnMoreBtn style="bg-[#127682] text-white">LEARN MORE</LearnMoreBtn>
      </div>
      <div>
        <img
          src="./src/assets/images/aboutUsImg.png"
          alt="About Us Image"
          width={702}
        />
      </div>
    </div>
  );
}

export default About;
