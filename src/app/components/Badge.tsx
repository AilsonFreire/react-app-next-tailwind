import React from "react";
import { Typography } from "./Typography";
import { CloseIcon } from "../svgs/CloseIcon";

type Props = {
	title: string;
	onClick?: () => void;
};

export const Badge = ({ title, onClick }: Props) => {
	return (
		<div className="rounded-full bg-gray-200 flex gap-2 justify-center items-center py-1 px-4">
			<Typography size={"xs"} color={"light-gray"}>
				{title}
			</Typography>
			<div onClick={onClick} className="cursor-pointer">
				<CloseIcon />
			</div>
		</div>
	);
};
