"use client";
import React, { useState } from "react";
import { CardWrapper } from "../components/CardWrapper";
import { Typography } from "../components/Typography";
import { Button } from "../components/Button";
import { Badge } from "../components/Badge";
import { PlusIcon } from "../svgs/PlusIcon";
import { AddDomainModal } from "./AddDomainModal";
import { RemoveDomainModal } from "./RemoveDomainModal";

export const WhitelistedDomainsCard = () => {
	const [domains, setDomains] = useState([
		"www.telgea.com",
		"www.telgea2.com",
		"www.telgea3.com",
		"www.telgea4.com",
	]);

	const [openAddDomainModal, setOpenAddDomainModal] = useState(false);
	const [openRemoveDomainModal, setRemoveDomainModal] = useState(false);

	const [domainToRemove, setDomainToRemove] = useState("");

	const removeDomain = (domainToRemove: string) => {
		setDomains((prev) =>
			prev.filter((_, index) => index !== domains.indexOf(domainToRemove))
		);
		setRemoveDomainModal(false);
	};

	const addDomain = (domainsToBeAdded: string[]) => {
		setDomains((prev) => [...prev, ...domainsToBeAdded]);
		setOpenAddDomainModal(false);
	};

	return (
		<>
			<CardWrapper size="medium">
				<div className="flex gap-6">
					<div className="flex-4/7">
						<Typography size="base" color="telgea-dark">
							Whitelisted Domains
						</Typography>
						<Typography size="sm" color="light-gray">
							Specify trusted domains to validate employee requests. Requests
							from these domains will be automatically linked to your account
						</Typography>
					</div>
					<div className="flex-3/7">
						<div className="flex gap-2">
							<Button
								variant="accent-sm"
								onClick={() => setOpenAddDomainModal(true)}
							>
								<PlusIcon size="12" color="white" />
							</Button>
							<Typography size="base" color="telgea-dark">
								Domains
							</Typography>
							<Typography size="base" color="light-gray">
								2
							</Typography>
						</div>
						<div className="flex flex-wrap gap-1.5 mt-2">
							{domains.map((domain, index) => (
								<Badge
									title={domain}
									onClick={() => {
										setRemoveDomainModal(true);
										setDomainToRemove(domain);
									}}
									key={index}
								/>
							))}
						</div>
					</div>
				</div>
			</CardWrapper>

			{openAddDomainModal && (
				<AddDomainModal
					onAddDomains={addDomain}
					onCloseModal={() => setOpenAddDomainModal(false)}
				/>
			)}

			{openRemoveDomainModal && domainToRemove && (
				<RemoveDomainModal
					domainToRemove={domainToRemove}
					onConfirmDomainDeletion={removeDomain}
					onCloseModal={() => setOpenAddDomainModal(false)}
				/>
			)}
		</>
	);
};
