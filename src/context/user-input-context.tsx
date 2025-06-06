import type { UserInput } from "@/@types";
import { createContext } from "react";

export const UserInputContext = createContext({
	userInput: {
		name: '',
		email: '',
		phone: '',
		company: '',
		selectedService: '',
	},
	errors: {} as Partial<UserInput>,
	setErrors: (errors: Partial<UserInput>) => {},
	editUserInput: (key: keyof UserInput, value: string) => {},
});