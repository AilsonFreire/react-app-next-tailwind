import React from "react";
import { CardWrapper } from "../components/CardWrapper";
import { Typography } from "../components/Typography";

export const CompanyVerificationCard = () => {
	return (
		<CardWrapper size="medium">
			<div className="flex w-full justify-between items-center">
				<Typography size="base" color="telgea-dark">
					Company verification submitted
				</Typography>
				<div className="h-8 w-32 bg-brand-lime rounded-full flex justify-center items-center">
					<Typography size="base" color="telgea-dark">
						Submitted
					</Typography>
				</div>
			</div>
			<div className="w-2/3">
				<Typography size="sm" color="light-gray">
					Your company verification has been successfully submitted! We’ll
					notify you as soon as it’s approved, so you can begin creating mobile
					plans right away.
				</Typography>
			</div>
		</CardWrapper>
	);
};
