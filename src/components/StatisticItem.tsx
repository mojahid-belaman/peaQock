type StatisticItemProps = {
  number: string;
  text: string;
};

function StatisticItem(props: StatisticItemProps) {
  const { number, text } = props;
  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-[20px] ">
      <span className="block font-bold text-[#127682] text-[60px] leading-[60px]">
        {number}
      </span>
      <span className="block text-[#99A5B5] text-[20px] leading-[28px] ">
        {text}
      </span>
    </div>
  );
}

export default StatisticItem;
