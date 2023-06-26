interface Props {
  type: string;
  updateDisplay: (arg0: string) => void;
}

function PadButton({ type, updateDisplay }: Props) {
  return (
    <>
      <button
        className={type}
        onClick={() => {
          updateDisplay(type);
        }}
      >
        {type}
      </button>
    </>
  );
}

export default PadButton;
