"use client";

import React from "react";

type Props = {
	variant: "default" | "accent" | "accent-sm" | "outline";
	children: React.ReactNode;
	isWide?: boolean;
	onClick: () => void;
};

export const Button = ({ variant, children, isWide, onClick }: Props) => {
	const buttonStyle = {
		// I decided to change the px size to be 16px instead of 14px as in the Figma, since 14px is not a common size and follow Tailwind size suggesions.
		default:
			"bg-telgea-dark rounded-lg h-8 px-4 flex justify-center items-center text-white text-sm",
		accent: "bg-telgea-green rounded-full h-16 p-4",
		"accent-sm": "bg-telgea-dark rounded-full h-6 px-1.5 py-1",
		outline:
			"bg-white border border-gray-200 rounded-lg h-8 px-4 flex justify-center items-center text-telgea-dark text-sm",
	}[variant];
	return (
		<button
			className={`${buttonStyle} ${isWide && "flex-1"} cursor-pointer`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
