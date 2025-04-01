import React from "react";

type Props = {
	label: string;
	value?: string;
	defaultValue?: string;
	placeholder?: string;
	onChange?: (value: string) => void;
};

export const Input = ({
	label,
	defaultValue,
	value,
	placeholder,
	onChange,
}: Props) => {
	return (
		<div className={"h-16 flex gap-2 flex-col"}>
			<label className={"text-xs text-light-gray"}>{label}</label>
			<input
				className="text-2xl"
				value={value}
				defaultValue={defaultValue}
				placeholder={placeholder}
				onChange={(e) => onChange?.(e.target.value)}
			/>
		</div>
	);
};
