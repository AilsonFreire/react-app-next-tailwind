import React from "react";
import { Typography } from "../components/Typography";
import { Badge } from "../components/Badge";
import { Button } from "../components/Button";

type Props = {
	domainToRemove: string;
	onCloseModal: () => void;
	onConfirmDomainDeletion: (domain: string) => void;
};

export const RemoveDomainModal = ({
	domainToRemove,
	onCloseModal,
	onConfirmDomainDeletion,
}: Props) => {
	return (
		<div className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm flex justify-center items-center">
			<div className="w-110 bg-white rounded-2xl p-4 pt-8 flex flex-col gap-2">
				<Typography size={"base"} color={"telgea-dark"}>
					Delete domain
				</Typography>

				<Typography size={"sm"} color={"light-gray"}>
					{`Remove ${domainToRemove} from your whitelisted domains.`}
				</Typography>

				<div className="w-fit flex flex-wrap gap-1.5">
					<Badge title={domainToRemove} />
				</div>

				<div className="flex justify-between mt-8 gap-2">
					<Button variant="outline" isWide onClick={onCloseModal}>
						Cancel
					</Button>
					<Button
						variant="default"
						isWide
						onClick={() => {
							onConfirmDomainDeletion(domainToRemove);
						}}
					>
						Remove domain
					</Button>
				</div>
			</div>
		</div>
	);
};
