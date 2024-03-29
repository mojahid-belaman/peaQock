type LearnMoreBtnProps = {
  style: string;
  children: React.ReactNode;
};

function LearnMoreBtn(props: LearnMoreBtnProps) {
  const { style, children } = props;
  return (
    <button
      className={`${style} px-[40px] py-[10px] rounded-[60px] text-[20px] font-bold`}
    >
      {children}
    </button>
  );
}

export default LearnMoreBtn;
