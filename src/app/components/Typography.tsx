import React from "react";

/** xxs=10px xs=12px sm=14px base=16px xl=20px 2xl=24px */
type FontSize = "xxs" | "xs" | "sm" | "base" | "xl" | "2xl";

type FontColor = "light-gray" | "telgea-dark" | "telgea-green" | "white";

type Props = {
	children: string;
	size: FontSize;
	color: FontColor;
};

export const Typography = ({ children, size, color }: Props) => {
	return <p className={`text-${size} text-${color}`}>{children}</p>;
};
