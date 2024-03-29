import ArrowDown from "../assets/svg/ArrowDown";

type LinkProps = {
  text: string;
};

function LinkHeader(props: LinkProps) {
  const { text } = props;
  return (
    <div className="w-[180px] m-4 flex flex-row justify-evenly items-center gap-[10px] text-[20px] leading-[40px]">
      <h2>{text.toUpperCase()}</h2>
      <ArrowDown />
    </div>
  );
}

export default LinkHeader;
