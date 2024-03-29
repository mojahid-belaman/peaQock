import SubscribeArrow from "../assets/svg/SubscribeArrow";

function NewLetter() {
  return (
    <div className=" flex  justify-evenly gap-[50px] pb-[200px]">
      <div>
        <h1 className="text-[40px] leading-[30px] font-bold pb-[10px]">
          NEWSLETTER
        </h1>
        <span className="w-[100px] block border-b-4 border-b-[#9F2241]"></span>
      </div>
      <div className="flex items-center">
        <input
          type="email"
          placeholder="Your email address"
          className="bg-[#E3E7ED] w-[800px] h-[60px] rounded-[60px] pl-5"
        />
        <div className="-ml-[100px] w-[240px] h-[60px] bg-gradient-to-b from-[#127682] to-[#20C7AB] text-white p-5 rounded-[60px] flex justify-evenly items-center gap-[10px]">
          <span className="block text-[20px] leading-[30px]">Subscribe</span>
          <span>
            <SubscribeArrow />
          </span>
        </div>
      </div>
    </div>
  );
}

export default NewLetter;
