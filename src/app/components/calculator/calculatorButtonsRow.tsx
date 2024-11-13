import CalculatorButton from "../calculator/calculatorButton"

export interface CalculatorButtonsRowProps {
  buttons: string[];
  onButtonClick: (label: string) => void;
}

export default function CalculatorButtonsRow({ buttons, onButtonClick }: CalculatorButtonsRowProps) {
  return (
    <div className="flex space-x-2">
      {buttons.map((label) => (
        <CalculatorButton
          key={label}
          label={label}
          onClick={() => onButtonClick(label)}
          isSecondary={label === "="}
        />
      ))}
    </div>
  );
}
