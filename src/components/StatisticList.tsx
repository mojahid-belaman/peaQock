import StatisticItem from "./StatisticItem";

const statistics = [
  {
    number: "+800",
    text: "Partners",
  },
  {
    number: "+55",
    text: "Countries",
  },
  {
    number: "+4500",
    text: "Opportunities",
  },
  {
    number: "+1529",
    text: "Companies",
  },
];

function StatisticList() {
  return (
    <section className="bg-[#E6EAF0] py-[49px] px-[139px]">
      <div className="flex">
        {statistics.map((statistic) => (
          <StatisticItem number={statistic.number} text={statistic.text} />
        ))}
      </div>
    </section>
  );
}

export default StatisticList;
