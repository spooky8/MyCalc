import { TextField } from "@mui/material"

export interface CalculatorDisplayProps {
  value: string;
}

export default function CalculatorDisplay({ value }: CalculatorDisplayProps) {
  return (
    <TextField
      variant="outlined"
      fullWidth
      value={value}
      inputProps={{
        style: { textAlign: "right", fontSize: "24px", color: "var(--background)" },
      }}
      style={{
        backgroundColor: "var(--foreground)",
      }}
      disabled
    />
  );
}
