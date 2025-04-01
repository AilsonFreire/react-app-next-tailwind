"use client";

import React from "react";
import { CardWrapper } from "../components/CardWrapper";
import { Input } from "../components/Input";
import { companyDetails } from "../mockdata";
import { Typography } from "../components/Typography";
import { Button } from "../components/Button";
import { SigniflyIcon } from "../svgs/SigniflyIcon";

export const CompanyDetailsCard = () => {
	return (
		<CardWrapper size="medium">
			<div className="flex w-full justify-between mb-8">
				<Typography size="base" color="telgea-dark">
					Company Details
				</Typography>
				<Button variant="default" onClick={() => {}}>
					Edit
				</Button>
			</div>
			<div className={"flex flex-col gap-4 w-full"}>
				<div className={"flex flex-row flex-wrap gap-4"}>
					<div className="flex-1 flex gap-4">
						<SigniflyIcon size="64" />
						<Input label="Company Name" value={companyDetails.companyName} />
					</div>
					<div className="flex-1">
						<Input label="Website" value={companyDetails.website} />
					</div>
				</div>
				<div className={"flex flex-wrap"}>
					<div className="flex-1">
						<Input label="Country" value={companyDetails.country} />
					</div>
					<div className="flex-1">
						<Input label="City" value={companyDetails.city} />
					</div>
				</div>
				<div className={"flex flex-wrap"}>
					<div className="flex-1">
						<Input label="Street" value={companyDetails.street} />
					</div>

					<div className="flex-1">
						<Input label="Postal" value={companyDetails.postal} />
					</div>
				</div>
				<Input label="State" value={companyDetails.state} />
			</div>
		</CardWrapper>
	);
};
