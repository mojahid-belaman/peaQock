type PackageProps = {
  icon: JSX.Element;
  title: string;
  description: string;
  styleTitle: string;
  style: string;
  textBtn: string;
  detailBtn: string;
};

function Package(props: PackageProps) {
  const { icon, title, description, style, styleTitle, textBtn, detailBtn } =
    props;

  return (
    <div className="flex items-center gap-[20px]">
      <div className="w-[100px] h-[100px] rounded-[20px] bg-[#EEF1F8] flex items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col gap-[10px]">
        <h2 className={styleTitle}>{title}</h2>
        <p className="w-[300px] text-[14px] leading-[20px] text-[#585E66]">
          {description}
        </p>
      </div>
      <div className={style}>
        <span className="text-[14px] leading-[14px] text-white">{textBtn}</span>
        <span className="text-[14px] leading-[14px] text-white">
          {detailBtn}
        </span>
      </div>
    </div>
  );
}

export default Package;
