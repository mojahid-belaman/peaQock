import PackageArrowRight from "../assets/svg/PackageArrowRight";

type PackageBtnProps = {
  children: React.ReactNode;
};

function PackageBtn(props: PackageBtnProps) {
  const { children } = props;
  return (
    <div className="flex items-center gap-[10px] px-[40px] py-[10px] rounded-[60px] bg-[#1277821f]">
      <span className="text-[#127682] text-[20px] leading-[35px] font-bold">
        {children}
      </span>
      <PackageArrowRight />
    </div>
  );
}

export default PackageBtn;
