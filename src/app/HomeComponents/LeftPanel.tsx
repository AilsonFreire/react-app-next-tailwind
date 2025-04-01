import React from "react";
import { CardWrapper } from "../components/CardWrapper";
import { Typography } from "../components/Typography";
import { monthlyRevenueDetails, userDetails } from "../mockdata";
import { MoneyIcon } from "../svgs/MoneyIcon";

export const LeftPanel = () => {
	return (
		<div className={"flex flex-col gap-3 fixed bottom-8 left-8"}>
			<CardWrapper size="medium">
				<div className="flex gap-1 items-center">
					<MoneyIcon />
					<Typography size="xs" color="telgea-dark">
						Monthly total
					</Typography>
				</div>
				<div className={"flex items-end"}>
					<Typography size="2xl" color="telgea-dark">
						{monthlyRevenueDetails.amount}
					</Typography>
					<div className={"py-1 px-2"}>
						<Typography size="xs" color="light-gray">
							{monthlyRevenueDetails.currency}
						</Typography>
					</div>
				</div>
				<div className={"flex justify-between pt-2"}>
					<Typography size="xxs" color="light-gray">
						Next Payment
					</Typography>
					<Typography size="xxs" color="light-gray">
						{monthlyRevenueDetails.nextPaymentDate}
					</Typography>
				</div>
				<div className="bg-gray-200 h-1 w-full rounded-full mt-1">
					<div className="bg-telgea-dark h-full w-2/3 rounded-full"></div>
				</div>
			</CardWrapper>

			<CardWrapper size="small">
				<div className="flex items-center">
					<div className="w-8 h-8 bg-gray-200 rounded-full flex justify-center items-center mr-2 relative">
						<Typography size={"sm"} color={"telgea-dark"}>
							{userDetails.shortName}
						</Typography>
						<div className="bg-telgea-green w-4 h-4 flex justify-center items-center rounded-full absolute top-[-6px] right-[-4px]">
							<Typography size={"xxs"} color={"telgea-dark"}>
								3
							</Typography>
						</div>
					</div>
					<div>
						<Typography size={"sm"} color={"telgea-dark"}>
							{userDetails.name}
						</Typography>
						<Typography size={"xs"} color={"light-gray"}>
							{userDetails.email}
						</Typography>
					</div>
				</div>
			</CardWrapper>
		</div>
	);
};
