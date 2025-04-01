"use client";
import React from "react";
import { Typography } from "./Typography";
import { companyDetails } from "../mockdata";
import { Button } from "./Button";
import { SigniflyIcon } from "../svgs/SigniflyIcon";
import { NotificationIcon } from "../svgs/NotificationIcon";
import { PlusIcon } from "../svgs/PlusIcon";

export const Menu = () => {
	return (
		<div className="flex w-full justify-between items-center fixed px-8">
			<div className="flex items-center gap-3">
				<SigniflyIcon size="48" />

				<Typography size="xl" color="telgea-dark">
					{companyDetails.companyName}
				</Typography>
			</div>

			<div className="flex items-center gap-3">
				<div className="border-2 border-gray-200 flex justify-center items-center p-3 rounded-full relative">
					<NotificationIcon />
					<div className="bg-red-500 w-4 h-4 flex justify-center items-center rounded-full absolute top-[5px] right-[5px]">
						<Typography size={"xxs"} color={"white"}>
							3
						</Typography>
					</div>
				</div>

				<Button variant="accent" onClick={() => {}}>
					<PlusIcon size="28" color="black" />
				</Button>
			</div>
		</div>
	);
};
