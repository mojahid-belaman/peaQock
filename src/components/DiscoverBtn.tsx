type DiscoverBtnProps = {
  children: React.ReactNode;
};

function DiscoverBtn(props: DiscoverBtnProps) {
  const { children } = props;
  return (
    <button className="bg-gradient-to-r from-[#25937E] to-[#20C7AB] font-bold text-center text-[#F4F6FA] text-[20px] leading-[35px] px-[40px] py-[10px] rounded-[60px]">
      {children}
    </button>
  );
}

export default DiscoverBtn;
