export type CompanyDetails = {
	companyName: string;
	website: string;
	country: string;
	city: string;
	street: string;
	postal: string;
	state: string;
};

export const companyDetails: CompanyDetails = {
	companyName: "Signifly",
	website: "www.signifly.com",
	country: "Denmark",
	city: "Copenhagen V",
	street: "Vesterbrogade 48",
	postal: "1620",
	state: "Copenhagen",
};

export type MonthlyRevenueDetails = {
	amount: string;
	currency: string;
	nextPaymentDate: string;
};

export const monthlyRevenueDetails: MonthlyRevenueDetails = {
	amount: "€3,903.00",
	currency: "EUR",
	nextPaymentDate: "Jun 02",
};

export type UserDetails = {
	name: string;
	shortName: string;
	email: string;
};

export const userDetails: UserDetails = {
	name: "John Doe",
	shortName: "JD",
	email: "john.doe@company.com",
};
