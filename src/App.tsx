import ContactDetailsPage from './pages/contact-details';
import Header from '@/components/common/header';
import Button from '@/components/ui/button';
import Stepper from '@/components/ui/stepper';
import { createContext, useState } from 'react';
import type { UserInput } from './@types';
import { UserInputContext } from './context/user-input-context';
import OurServicesPage from './pages/our-services';
import SubmitQuotePage from './pages/submit-quote';

const totalSteps = 3;

function App() {
	const [currentStep, setCurrentStep] = useState(1);
	const [userInput, setUserInput] = useState<UserInput>({
		name: '',
		email: '',
		phone: '',
		company: '',
		selectedService: 'development', // Default value for selected service
	});
	const [errors, setErrors] = useState<Partial<UserInput>>({});

	const validateStepOne = (): boolean => {
		const newErrors: Partial<UserInput> = {};

		if (!userInput.name.trim()) {
			newErrors.name = 'Name is required';
		}

		if (!userInput.email.trim()) {
			delete newErrors.email;
		} else if (!/\S+@\S+\.\S+/.test(userInput.email)) {
			newErrors.email = 'Please enter a valid email address';
		}
		if (!userInput.phone.trim()) {
			delete newErrors.phone;
		} else if (!/^\(\d{3}\) \d{3} - \d{4}$/.test(userInput.phone)) {
			newErrors.phone = 'Please enter a valid phone number in the format (123) 456 - 7890';
		}
		if (!userInput.company.trim()) {
			newErrors.company = 'Company name is required';
		}

		setErrors(newErrors);
		console.log('🚀 ~ App.tsx:48 ~ validateStepOne ~ newErrors:', newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const editUserInput = (key: keyof UserInput, value: string) => {
		setUserInput(prev => ({
			...prev,
			[key]: value,
		}));
	};

	const handleNextStep = () => {
		if (currentStep === 1) {
			if (!validateStepOne()) {
				console.log('🚀 ~ App.tsx:58 ~ handleNextStep ~ currentStep:', currentStep);
				return;
			}
			setCurrentStep(2);
		} else {
      setCurrentStep(prev => prev + 1);
    }
	};
	const handlePreviousStep = () => {
		if (currentStep > 1) {
			setCurrentStep(prev => prev - 1);
		}
	};

	return (
		<UserInputContext.Provider value={{ userInput, editUserInput, errors, setErrors }}>
			<div className='min-h-screen bg-white'>
				<div className='max-w-[1343px] mx-auto px-4 py-10'>
					{/* Header */}
					<Header />

					{/* Main Form Container */}
					<div className='max-w-[698px] mx-auto'>
						<div className=' bg-white border border-[#eff0f6] rounded-[34px] shadow-[0px_5px_16px_#080f340f] py-8 px-16'>
							{/* Stepper */}
							<Stepper currentStep={currentStep} totalSteps={totalSteps} />

							{/* Divider Line */}
							<div className='w-full h-[1px] bg-[#d9dbe8] mb-16' />

							{/* Step Content */}
							{currentStep === 1 && <ContactDetailsPage />}
							{currentStep === 2 && <OurServicesPage />}
							{currentStep === 3 && <SubmitQuotePage />}

							{/* Navigation Buttons */}
						</div>
						<div className='flex justify-between items-center mt-12'>
							{currentStep > 1 && (
								<Button variant='outline' onClick={handlePreviousStep}>
									Previous step
								</Button>
							)}

							<div className='ml-auto'>{currentStep < totalSteps && <Button onClick={handleNextStep}>Next step</Button>}</div>
						</div>
					</div>
				</div>
			</div>
		</UserInputContext.Provider>
	);
}

export default App;
