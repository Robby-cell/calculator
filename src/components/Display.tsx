interface Props {
  display: string;
}

const Display = ({ display }: Props) => {
  return (
    <>
      <div className="calc-display">{display}</div>
    </>
  );
};

export default Display;
