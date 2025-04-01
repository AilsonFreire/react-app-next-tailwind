"use client";

import React from "react";
import { CardWrapper } from "../components/CardWrapper";
import { Button } from "../components/Button";
import { Typography } from "../components/Typography";

export const AdministratorsCard = () => {
	return (
		<CardWrapper size="medium">
			<div className="flex w-full justify-between items-center">
				<Typography size="base" color="telgea-dark">
					Administrators
				</Typography>
				<Button variant="default" onClick={() => {}}>
					Invite
				</Button>
			</div>
		</CardWrapper>
	);
};
