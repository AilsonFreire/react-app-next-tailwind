import React from "react";
import { Typography } from "./Typography";

export const Navigation = () => {
	return (
		<div className="w-50 fixed top-36 left-8 flex flex-col justify-center items-center gap-12">
			<Typography size={"base"} color={"light-gray"}>
				Overview
			</Typography>
			<Typography size={"base"} color={"light-gray"}>
				Analytics
			</Typography>
		</div>
	);
};
