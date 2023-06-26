import PadButton from "./PadButton";

interface Props {
  updateDisplay: (arg0: string) => void;
}

const Numpad = function ({ updateDisplay }: Props) {
  const buttons = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "-",
    "0",
    "+",
    "*",
    "/",
    "=",
    "(",
    ")",
    "del",
  ];

  return (
    <div className="calc-btn-holder">
      {buttons.map((btn) => {
        return <PadButton type={btn} updateDisplay={updateDisplay} />;
      })}
    </div>
  );
};

export default Numpad;
