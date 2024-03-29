type ButtonRightProps = {
  icon: JSX.Element;
  content: string | JSX.Element;
};

function ButtonRight(props: ButtonRightProps) {
  const { content, icon } = props;
  return (
    <div className="flex flex-row items-center gap-[10px]">
      {icon}
      <span>{content}</span>
    </div>
  );
}

export default ButtonRight;
