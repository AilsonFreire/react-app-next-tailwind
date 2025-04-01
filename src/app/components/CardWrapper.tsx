import React from "react";

type CardSize = "small" | "medium";

type Props = {
	children: React.ReactNode;
	size: CardSize;
};

export const CardWrapper = ({ children, size }: Props) => {
	return (
		<div
			className={`bg-white ${
				size === "small" ? "p-5 rounded-xl" : "p-6 rounded-2xl"
			}`}
		>
			{children}
		</div>
	);
};
