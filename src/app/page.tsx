"use client";
import { Menu } from "./components/Menu";
import { Navigation } from "./components/Navigation";
import { Typography } from "./components/Typography";
import { AdministratorsCard } from "./HomeComponents/AdministratorsCard";
import { CompanyDetailsCard } from "./HomeComponents/CompanyDetailsCard";
import { CompanyVerificationCard } from "./HomeComponents/CompanyVerificationCard";
import { LeftPanel } from "./HomeComponents/LeftPanel";
import { WhitelistedDomainsCard } from "./HomeComponents/WhitelistedDomainsCard";
import { ChatIcon } from "./svgs/ChatIcon";
import { PlusIcon } from "./svgs/PlusIcon";

export default function Home() {
	return (
		<main className={"p-8 flex justify-center"}>
			<Menu />

			<div className="flex gap-20">
				<Navigation />

				<LeftPanel />

				<div className={"flex flex-col gap-5 mt-6 max-w-[800px]"}>
					<div className="flex justify-center">
						<Typography size="xl" color="telgea-dark">
							Company Account
						</Typography>
					</div>

					<div className="mt-10">
						<PlusIcon size="14" color="black" />
					</div>
					<CompanyDetailsCard />
					<CompanyVerificationCard />
					<WhitelistedDomainsCard />
					<AdministratorsCard />

					<div className="bg-gray-200 rounded-full flex justify-center items-center fixed bottom-8 right-8 p-3">
						<ChatIcon />
					</div>
				</div>
			</div>
		</main>
	);
}
