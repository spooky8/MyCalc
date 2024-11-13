import { Button } from "@mui/material"

export interface CalculatorButtonProps {
  label: string;
  onClick: () => void;
  isSecondary?: boolean;
}

export default function CalculatorButton({ label, onClick, isSecondary = false }: CalculatorButtonProps) {
  return (
    <Button
      variant={isSecondary ? "contained" : "outlined"}
      color={isSecondary ? "secondary" : "primary"}
      fullWidth
      className="h-14 text-lg"
      onClick={onClick}
      style={{
        backgroundColor: label === "=" ? "#080a1a" : isSecondary ? "var(--background)" : "var(--foreground)",
        color: isSecondary ? "var(--foreground)" : "var(--background)",
				border: "2px solid",
				borderRadius: "15px",
				borderColor: isSecondary ? "var(--foreground)" : "var(--background)",
      }}
    >
      {label}
    </Button>
  );
}
