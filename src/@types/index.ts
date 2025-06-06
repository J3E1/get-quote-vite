export interface UserInput {
	name: string;
	email: string;
	phone: string;
	company: string;
	selectedService: string;
}

export interface FormErrors {
	[key: string]: string | undefined;
}
