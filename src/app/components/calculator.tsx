'use client';

import { Drawer, Paper } from "@mui/material"
import { useState } from "react"
import CalculatorButton from "./calculator/calculatorButton"
import CalculatorButtonsRow from "./calculator/calculatorButtonsRow"
import CalculatorDisplay from "./calculator/calculatorDisplay"
import MemberButtonsRow from './calculator/memberButtonRow'

interface CalculatorProps {
  setHistory: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function Calculator({ setHistory }: CalculatorProps) {
  const [input, setInput] = useState("");
  const [memory, setMemory] = useState<number[]>([]);
  const [isMemoryDrawerOpen, setIsMemoryDrawerOpen] = useState(false);

  const handleMemoryClear = () => setMemory([]);
  const handleMemoryRecall = () => {
    if (memory.length > 0) {
      setInput(memory[memory.length - 1].toString());
    }
  };
  const handleMemoryAdd = () => {
    const value = parseFloat(input);
    if (!isNaN(value)) {
      setMemory((prev) => [...prev, (prev.pop() || 0) + value]);
    }
  };
  const handleMemorySubtract = () => {
    const value = parseFloat(input);
    if (!isNaN(value)) {
      setMemory((prev) => [...prev, (prev.pop() || 0) - value]);
    }
  };
  const handleMemoryStore = () => {
    const value = parseFloat(input);
    if (!isNaN(value)) {
      setMemory((prev) => [...prev, value]);
    }
  };
  const toggleMemoryDrawer = (open: boolean) => () => {
    setIsMemoryDrawerOpen(open);
  };

  const handleInput = (value: string) => {
    if (input === "Ошибка" || input === "Infinity") {
      setInput(value);
    } else {
      setInput((prev) => prev + value);
    }
  };

  const handleCalculate = () => {
    try {
      const result = eval(input).toString();
      setInput(result);
      setHistory((prev: any) => [...prev, `${input} = ${result}`]);
    } catch {
      setInput("Ошибка");
    }
  };

  const handleClear = () => {
    setInput("");
  };

  return (
    <div className="flex justify-center items-center bg-[var(--background)] text-[var(--foreground)]">
      <Paper
        className="p-4 shadow-md rounded-lg"
        style={{
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
        }}
      >
        <div className="flex flex-col space-y-2">
          <CalculatorDisplay value={input} />

          <MemberButtonsRow
            buttons={["mc", "mr", "m+", "m-", "ms", "m⭣"]}
            onButtonClick={(label) => {
              switch (label) {
                case "mc":
                  handleMemoryClear();
                  break;
                case "mr":
                  handleMemoryRecall();
                  break;
                case "m+":
                  handleMemoryAdd();
                  break;
                case "m-":
                  handleMemorySubtract();
                  break;
                case "ms":
                  handleMemoryStore();
                  break;
                case "m⭣":
                  toggleMemoryDrawer(true)();
                  break;
                default:
                  break;
              }
            }}
          />
          <CalculatorButtonsRow buttons={["7", "8", "9", "/"]} onButtonClick={handleInput} />
          <CalculatorButtonsRow buttons={["4", "5", "6", "*"]} onButtonClick={handleInput} />
          <CalculatorButtonsRow buttons={["1", "2", "3", "-"]} onButtonClick={handleInput} />
          <CalculatorButtonsRow
            buttons={["0", ".", "=", "+"]}
            onButtonClick={(label) => (label === "=" ? handleCalculate() : handleInput(label))}
          />

          <div className="flex space-x-2">
            <CalculatorButton
              label="Очистить"
              onClick={handleClear}
              isSecondary={true}
            />
          </div>
        </div>
      </Paper>

      <Drawer
        open={isMemoryDrawerOpen}
        onClose={toggleMemoryDrawer(false)}
        anchor="bottom"
        PaperProps={{
          sx: {
            backgroundColor: "var(--background)",
            color: "var(--foreground)",
          },
        }}
      >
        <div className="p-4">
          <h2 className="font-bold text-xl mb-2">Память</h2>
          {memory.length > 0 ? (
            <div className="flex flex-col space-y-2">
              {memory.map((value, index) => (
                <div
                  key={index}
                  className="p-2 bg-gray-700 rounded text-white"
                >
                  {value}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">Память пуста</p>
          )}
        </div>
      </Drawer>
    </div>
  );
}
