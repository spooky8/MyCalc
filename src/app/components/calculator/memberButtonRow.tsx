import { Button } from '@mui/material'

export interface MemberButtonsRowProps {
  buttons: string[];
  onButtonClick: (label: string) => void;
}

export default function MemberButtonsRow({ buttons, onButtonClick }: MemberButtonsRowProps) {
  return (
    <div className="flex space-x-2">
      {buttons.map((label) => (
        <Button
					key={label}
					variant="text"
					color="secondary"
					size='small'
					fullWidth
					className="h-14 text-lg"
					onClick={() => onButtonClick(label)}
					style={{
						backgroundColor:"#4a062f",
						color: "var(--foreground)",
						border: "2px solid",
						borderRadius: "15px",
						borderColor:"var(--foreground)",
					}}
				>
					{label}
			</Button>
      ))}
    </div>
  );
}
