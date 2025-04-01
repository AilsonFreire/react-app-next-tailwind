import React, { useState } from "react";
import { Typography } from "../components/Typography";
import { Input } from "../components/Input";
import { Badge } from "../components/Badge";
import { PlusIcon } from "../svgs/PlusIcon";
import { Button } from "../components/Button";

type Props = {
	onCloseModal: () => void;
	onAddDomains: (domains: string[]) => void;
};

export const AddDomainModal = ({ onCloseModal, onAddDomains }: Props) => {
	const [domains, setDomains] = useState<string[]>([]);
	const [inputDomain, setInputDomain] = useState("");

	const removeDomain = (domainToRemove: string) => {
		setDomains((prev) =>
			prev.filter((_, index) => index !== domains.indexOf(domainToRemove))
		);
	};

	const addDomain = () => {
		if (inputDomain.trim() && !domains.includes(inputDomain)) {
			setDomains((prev) => [...prev, inputDomain.trim()]);
			setInputDomain("");
		}
	};

	return (
		<div className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm flex justify-center items-center">
			<div className="w-110 bg-white rounded-2xl p-4 pt-8 flex flex-col gap-2">
				<Typography size={"base"} color={"telgea-dark"}>
					Add domain
				</Typography>

				<Typography size={"sm"} color={"light-gray"}>
					Specify trusted domains to validate employee requests. For example,
					requests made when employees transfer numbers to Telgea will be
					automatically associated with your account.
				</Typography>

				<div className="flex mt-6 justify-between">
					<Input
						label={"Domain"}
						value={inputDomain}
						placeholder={"Enter domain..."}
						onChange={setInputDomain}
					/>

					<div
						className="w-16 h-16 bg-telgea-dark flex justify-center items-center rounded-full"
						onClick={addDomain}
					>
						<PlusIcon size={"22"} color={"white"} />
					</div>
				</div>

				<div className="w-fit flex flex-wrap gap-1.5">
					{domains?.map((domain, index) => (
						<Badge
							title={domain}
							onClick={() => removeDomain(domain)}
							key={index}
						/>
					))}
				</div>

				<div className="flex justify-between mt-8 gap-2">
					<Button variant="outline" isWide onClick={onCloseModal}>
						Cancel
					</Button>
					{domains.length > 0 && (
						<Button
							variant="default"
							isWide
							onClick={() => {
								onAddDomains(domains);
							}}
						>
							Add domain
						</Button>
					)}
				</div>
			</div>
		</div>
	);
};
